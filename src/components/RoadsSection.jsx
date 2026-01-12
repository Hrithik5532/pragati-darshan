import React, { useEffect, useRef, useState } from 'react';
import { roadProjects } from '../data/mock';
import { CheckCircle, MapPin, Construction, ChevronRight } from 'lucide-react';

const RoadsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedRoad, setExpandedRoad] = useState(null);
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
    <section id="roads" ref={sectionRef} className="py-16 sm:py-20 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-100 rounded-full blur-3xl animate-float opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-100 rounded-full blur-3xl animate-float-slow opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-50 rounded-full blur-3xl animate-pulse-scale opacity-30"></div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://customer-assets.emergentagent.com/job_pragati-darshan/artifacts/mtkytlgw_Screenshot_2026-01-13_at_2.45.43_AM-removebg-preview.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Animation */}
        <div className={`text-center mb-10 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1 bg-orange-100 text-orange-600 rounded-full text-xs sm:text-sm font-medium mb-4 animate-bounce-in">
            ध्येय खड्डेमुक्त रस्त्याचे
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            रस्ते <span className="text-gradient-animate">विकास</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
            संपूर्ण सिमेंट काँक्रीटीकरण - परिवर्तन पथमार्गांचे
          </p>
        </div>

        {/* Roads Grid with Stagger Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {roadProjects.map((road, index) => (
            <div
              key={index}
              onClick={() => setExpandedRoad(expandedRoad === index ? null : index)}
              className={`group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md sm:shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover-lift card-tilt ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              } ${expandedRoad === index ? 'ring-2 ring-orange-500 animate-pulse-glow' : ''}`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center justify-between mb-3 sm:mb-4 relative">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0 group-hover:animate-wiggle" />
                  <span className="text-xs sm:text-sm text-gray-500">प्रभाग १६०</span>
                </div>
                <span className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium flex items-center gap-1 transition-transform duration-300 group-hover:scale-110 ${
                  road.status === 'पूर्ण' 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-amber-100 text-amber-600'
                }`}>
                  {road.status === 'पूर्ण' ? (
                    <>
                      <CheckCircle className="w-3 h-3 animate-pulse" />
                      <span className="hidden xs:inline">{road.status}</span>
                    </>
                  ) : (
                    <>
                      <Construction className="w-3 h-3 animate-spin-slow" />
                      <span className="hidden xs:inline">{road.status}</span>
                    </>
                  )}
                </span>
              </div>

              {/* Road Name */}
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-orange-600 transition-colors leading-snug line-clamp-2 underline-animate">
                {road.name}
              </h3>

              {/* Animated Progress Bar */}
              <div className="relative h-1.5 sm:h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out ${
                    road.status === 'पूर्ण' 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                      : 'bg-gradient-to-r from-amber-500 to-orange-500'
                  }`}
                  style={{ 
                    width: isVisible ? (road.status === 'पूर्ण' ? '100%' : '75%') : '0%',
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  {/* Shimmer on progress bar */}
                  <div className="absolute inset-0 animate-shimmer"></div>
                </div>
              </div>

              {/* Expanded Info with slide animation */}
              <div className={`mt-3 overflow-hidden transition-all duration-500 ${
                expandedRoad === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-xs sm:text-sm text-gray-600 animate-fade-in-up">
                  संपूर्ण सिमेंट काँक्रीटीकरण केले गेले. रहिवासीयांना आता सुखकर प्रवास करता येईल.
                </p>
              </div>

              {/* Hover arrow indicator */}
              <div className="flex justify-end mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <ChevronRight className="w-4 h-4 text-orange-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Animated Summary Card */}
        <div className={`mt-8 sm:mt-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl animate-gradient transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '800ms' }}>
          <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
            <div className="text-white group cursor-pointer">
              <p className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 group-hover:animate-bounce-in">१६+</p>
              <p className="text-white/80 text-xs sm:text-sm lg:text-base">रस्ते पूर्ण</p>
            </div>
            <div className="text-white group cursor-pointer">
              <p className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 group-hover:animate-bounce-in">१००%</p>
              <p className="text-white/80 text-xs sm:text-sm lg:text-base">सिमेंट काँक्रीट</p>
            </div>
            <div className="text-white group cursor-pointer">
              <p className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 group-hover:animate-bounce-in">०</p>
              <p className="text-white/80 text-xs sm:text-sm lg:text-base">खड्ड्यांचे रस्ते</p>
            </div>
          </div>
        </div>

        {/* Animated Button */}
        <div className="text-center mt-6 sm:mt-8">
          <button 
            onClick={() => document.getElementById('promises')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-white border-2 border-orange-500 text-orange-600 font-bold rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300 btn-ripple hover-lift"
          >
            भविष्यातील आश्वासने पहा
            <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RoadsSection;
