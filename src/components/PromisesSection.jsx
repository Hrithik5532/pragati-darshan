import React, { useEffect, useRef, useState } from 'react';
import { futurePromises } from '../data/mock';
import { Droplets, Sparkles, Construction, Users, Check, ChevronRight } from 'lucide-react';

const iconComponents = {
  Droplets: Droplets,
  Sparkles: Sparkles,
  Construction: Construction,
  Users: Users
};

const PromisesSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
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
    <section id="promises" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-bold mb-4">
            होय, हा माझा शब्द आहे!
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            भविष्यातील <span className="text-orange-500">आश्वासने</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            वचनपूर्ती हाच विकासाचा प्राण, पुन्हा किरणभाऊ आणि धनुष्यबाण!
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {futurePromises.map((promise, index) => {
            const Icon = iconComponents[promise.icon];
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === index
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 shadow-md hover:shadow-lg'
                }`}
              >
                {Icon && <Icon className="w-5 h-5" />}
                <span className="hidden sm:inline">{promise.category}</span>
              </button>
            );
          })}
        </div>

        {/* Promises Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Category Info */}
          <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl p-8 text-white h-full">
              <div className="flex items-center gap-4 mb-6">
                {(() => {
                  const Icon = iconComponents[futurePromises[activeCategory].icon];
                  return Icon ? <Icon className="w-12 h-12" /> : null;
                })()}
                <h3 className="text-3xl font-bold">{futurePromises[activeCategory].category}</h3>
              </div>
              
              <p className="text-white/90 text-lg mb-6">
                {activeCategory === 0 && "प्रभागातील प्रत्येक घरापर्यंत शुद्ध पाणी पोहोचवण्याचे आमचे ध्येय"}
                {activeCategory === 1 && "स्वच्छ आणि आरोग्यदायी प्रभाग निर्माण करण्याचा संकल्प"}
                {activeCategory === 2 && "उत्तम रस्ते आणि पायाभूत सुविधा निर्माण करणे"}
                {activeCategory === 3 && "समाजातील प्रत्येक घटकाचा सर्वांगीण विकास"}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold">{futurePromises[activeCategory].promises.length}</p>
                  <p className="text-sm text-white/80">आश्वासने</p>
                </div>
                <div className="bg-white/20 rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold">100%</p>
                  <p className="text-sm text-white/80">वचनबद्धता</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Promises List */}
          <div className={`space-y-4 transition-all duration-700 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            {futurePromises[activeCategory].promises.map((promise, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-x-2 border-l-4 border-orange-500 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors">
                    <Check className="w-5 h-5 text-orange-600 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">{promise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            टीम महायुती पहा
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromisesSection;
