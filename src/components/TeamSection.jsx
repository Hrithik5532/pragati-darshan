import React, { useEffect, useRef, useState } from 'react';
import { teamLeaders } from '../data/mock';
import { Users, Award, ChevronRight } from 'lucide-react';

const TeamSection = () => {
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
    <section id="team" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background - Orange Gradient with Silk Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-400 to-amber-500">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://customer-assets.emergentagent.com/job_pragati-darshan/artifacts/aey78ri1_Screenshot_2026-01-13_at_2.46.00_AM-removebg-preview.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {/* Silk Wave Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
            केलंय काम भारी, आता पुढची तयारी
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            टीम <span className="text-amber-200">महायुती</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            शिवसेना-भाजपा-रिपाई-रिपब्लिकन सेना महायुतीचे कार्यतत्पर, लोकप्रिय उमेदवार
          </p>
        </div>

        {/* Leadership Pyramid */}
        <div className="relative max-w-4xl mx-auto">
          {/* Top Leaders - Tier 1 */}
          <div className="flex justify-center gap-4 sm:gap-8 mb-8">
            {teamLeaders.filter(l => l.tier === 1).map((leader, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-700 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-25 h-25 sm:w-28 sm:h-28 mx-auto mb-3 rounded-2xl bg-white/20 backdrop-blur-sm p-1 shadow-xl hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                    <img 
                      src={`/assets/${leader.image}`}
                      alt={leader.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                    />
                  </div>
                </div>
                <p className="text-white font-bold text-sm sm:text-base">{leader.name}</p>
                <p className="text-white/70 text-xs sm:text-sm">{leader.position}</p>
              </div>
            ))}
          </div>

          {/* Second Row - Tier 2 */}
          <div className="flex justify-center gap-4 sm:gap-8 mb-8">

            {teamLeaders.filter(l => l.tier === 2).map((leader, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-700 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 3) * 150}ms` }}
              >
                <div className="w-25 h-25 sm:w-28 sm:h-28 mx-auto mb-3 rounded-2xl bg-white/20 backdrop-blur-sm p-1 shadow-xl hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                    <img 
                      src={`/assets/${leader.image}`}
                      alt={leader.name}
                      className="w-18 h-18 sm:w-16 sm:h-16 object-contain"
                    />
                  </div>
                </div>
                <p className="text-white font-bold text-sm sm:text-base">{leader.name}</p>
                <p className="text-white/70 text-xs sm:text-sm">{leader.position}</p>
              </div>
            ))}
          </div>

          {/* Candidate Highlight */}
          <div className={`mt-12 bg-white rounded-3xl p-8 shadow-2xl transform transition-all duration-700 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '600ms' }}>
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Candidate Photo */}
              <div className="relative">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-orange-500 shadow-xl">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_pragati-darshan/artifacts/wlnv9dv4_Screenshot_2026-01-13_at_2.46.00_AM-removebg-preview__1_-removebg-preview.png"
                    alt="किरण भाऊ लांडगे"
                    className="w-full h-full object-contain object-bottom bg-gradient-to-t from-orange-100 to-white scale-150 translate-y-8"
                  />
                </div>
                {/* Badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                  क्र. ३
                </div>
              </div>

              {/* Candidate Info */}
              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                  श्री. किरण (भाऊ) लांडगे
                </h3>
                <p className="text-orange-600 font-medium mb-4">
                  मा. शिवसेना युवा नगरसेवक, प्रभाग क्र. १६०
                </p>
                <p className="text-gray-600 mb-6">
                  "नेता नव्हे कार्यकर्ता" - जनतेच्या सेवेत सतत कार्यरत
                </p>

                {/* Symbol */}
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <div className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full">
                    <span className="text-2xl">🏹</span>
                    <span className="font-medium text-orange-600">धनुष्यबाण</span>
                  </div>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center gap-2 bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors shadow-lg"
                  >
                    संपर्क करा
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
