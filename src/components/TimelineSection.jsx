import React, { useEffect, useRef, useState } from 'react';
import { timelineEvents } from '../data/mock';
import { Construction, GraduationCap, Users, Star, ChevronRight } from 'lucide-react';

const typeIcons = {
  road: Construction,
  education: GraduationCap,
  women: Users,
  festival: Star
};

const typeColors = {
  road: 'from-slate-500 to-slate-600',
  education: 'from-blue-500 to-blue-600',
  women: 'from-pink-500 to-pink-600',
  festival: 'from-amber-500 to-amber-600'
};

const TimelineSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            सतत विकास
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            विकास <span className="text-orange-500">यात्रा</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            गेल्या वर्षभरातील विकास कामांची timeline
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-12 flex-wrap">
          {timelineEvents.map((event, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                activeIndex === index
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {event.month.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Timeline Content */}
        <div className="relative">
          {/* Progress Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2">
            <div 
              className="h-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500"
              style={{ width: `${((activeIndex + 1) / timelineEvents.length) * 100}%` }}
            ></div>
          </div>

          {/* Timeline Items */}
          <div className="grid md:grid-cols-4 gap-6">
            {timelineEvents.map((event, index) => {
              const Icon = typeIcons[event.type];
              const colorClass = typeColors[event.type];
              const isActive = index <= activeIndex;
              
              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative cursor-pointer transform transition-all duration-500 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  } ${isActive ? 'scale-100' : 'scale-95 opacity-60'}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Node */}
                  <div className="hidden md:flex absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-orange-500 z-10">
                    {isActive && (
                      <div className="absolute inset-1 bg-orange-500 rounded-full animate-pulse"></div>
                    )}
                  </div>

                  {/* Card */}
                  <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 mt-6 md:mt-8 border-2 ${
                    isActive ? 'border-orange-200' : 'border-transparent'
                  }`}>
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Month */}
                    <p className="text-sm font-medium text-orange-500 mb-2">{event.month}</p>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm">{event.description}</p>

                    {/* Learn More */}
                    <button className="mt-4 text-orange-500 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                      अधिक माहिती
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
