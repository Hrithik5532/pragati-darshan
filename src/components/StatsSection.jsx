import React, { useEffect, useState, useRef } from 'react';
import { stats } from '../data/mock';
import { Users, GraduationCap, Home, Laptop, Umbrella, Heart, Eye, UserCheck } from 'lucide-react';

const iconMap = {
  'Users': Users,
  'GraduationCap': GraduationCap,
  'Home': Home,
  'Laptop': Laptop,
  'Umbrella': Umbrella,
  'Heart': Heart,
  'Eye': Eye,
  'UserCheck': UserCheck
};

const AnimatedNumber = ({ target, suffix, isVisible, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;
    
    const timeout = setTimeout(() => {
      setHasAnimated(true);
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [target, isVisible, delay, hasAnimated]);

  return <span>{count.toLocaleString('en-IN')}{suffix}</span>;
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedStat, setSelectedStat] = useState(null);
  const [hoveredStat, setHoveredStat] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-40 h-40 bg-orange-100 rounded-full blur-3xl animate-float opacity-40"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-amber-100 rounded-full blur-3xl animate-float-slow opacity-40"></div>
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-orange-300 rounded-full opacity-20 animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("/assets/Prabhag No_160.png")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Animation */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4 animate-bounce-in">
            केलंय काम भारी
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            विकास <span className="text-gradient-animate">कामगिरी</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            प्रभाग क्र. १६० मध्ये केलेल्या विकास कामांचा आढावा
          </p>
        </div>

        {/* Stats Grid with Stagger Animation */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon] || Users;
            const isHovered = hoveredStat === index;
            
            return (
              <div
                key={index}
                onClick={() => setSelectedStat(selectedStat === index ? null : index)}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
                className={`group relative bg-white rounded-3xl p-5 sm:p-6 shadow-lg transition-all duration-500 cursor-pointer hover-lift ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                } ${selectedStat === index ? 'ring-4 ring-orange-500 ring-opacity-50' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 transition-opacity duration-300 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}></div>

                {/* Icon with animation */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg transition-all duration-500 ${
                  isHovered ? 'scale-110 rotate-6 animate-pulse-glow' : ''
                }`}>
                  <Icon className={`w-6 h-6 sm:w-7 sm:h-7 text-white transition-transform duration-300 ${
                    isHovered ? 'animate-wiggle' : ''
                  }`} />
                </div>

                {/* Animated Number */}
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-1">
                  <AnimatedNumber 
                    target={stat.number} 
                    suffix={stat.suffix} 
                    isVisible={isVisible} 
                    delay={index * 150}
                  />
                </p>

                {/* Label with underline animation */}
                <p className="text-base sm:text-lg font-semibold text-orange-600 mb-2 underline-animate">{stat.label}</p>

                {/* Description with slide animation */}
                <p className={`text-xs sm:text-sm text-gray-500 transition-all duration-500 ${
                  selectedStat === index ? 'opacity-100 max-h-20 translate-y-0' : 'opacity-0 max-h-0 -translate-y-2 overflow-hidden'
                }`}>
                  {stat.description}
                </p>

                {/* Decorative corner */}
                <div className={`absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-orange-200 rounded-tr-xl transition-all duration-300 ${
                  isHovered ? 'border-orange-400 scale-110' : ''
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* Animated Call to Action */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button 
            onClick={() => document.getElementById('empowerment')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 btn-ripple hover-lift animate-gradient"
          >
            सविस्तर माहिती पहा
            <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
