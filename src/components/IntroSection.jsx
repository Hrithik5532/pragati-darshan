import React, { useEffect, useRef, useState } from 'react';
import { Mail, Heart } from 'lucide-react';

const IntroSection = () => {
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
    <section id="intro" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-amber-100 rounded-full blur-3xl opacity-40 animate-float-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            <Mail className="w-4 h-4 inline mr-2" />
            माझा परिचय
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            मतदार <span className="text-orange-500">संवाद</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            आपल्या मतदार बंधू भगिनींनो, सन्मानित विविधांनो आपल्याला हे पत्र आपले मनापासून आभार मानण्यासाठीच
          </p>
        </div>

        {/* Postcards Display */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Postcard */}
          <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group">
              {/* Postcard Back Side */}
              <img 
                src="/assets/intro/slide2.jpeg"
                alt="परिचय पत्र - भाग १"
                className="w-full h-auto object-cover"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <p className="text-lg font-bold mb-1">परिचय पत्र</p>
                  <p className="text-sm text-white/80">मतदार बंधू भगिनींनो नमस्कार</p>
                </div>
              </div>

              {/* Decorative stamp corner */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-orange-500/20 backdrop-blur-sm rounded-lg border-2 border-orange-500/50 flex items-center justify-center">
                <Mail className="w-8 h-8 text-orange-600" />
              </div>
            </div>
          </div>

          {/* Right Postcard */}
          <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group">
              {/* Postcard Front Side */}
              <img 
                src="/assets/intro/slide2.jpeg"
                alt="परिचय पत्र - भाग २"
                className="w-full h-auto object-cover"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <p className="text-lg font-bold mb-1">श्री.किरणभाऊ लांडगे</p>
                  <p className="text-sm text-white/80">प्रभाग क्र.१६० | धनुष्यबाण</p>
                </div>
              </div>

              {/* Decorative Shiv Sena symbol */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-orange-500/20 backdrop-blur-sm rounded-lg border-2 border-orange-500/50 flex items-center justify-center">
                <span className="text-3xl">🏹</span>
              </div>
            </div>
          </div>
        </div>

        {/* Message Card */}
        <div className={`mt-12 bg-white rounded-3xl p-8 shadow-xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '600ms' }}>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Heart className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                आपला विश्वास, आमची जबाबदारी
              </h3>
              <p className="text-gray-600 leading-relaxed">
                प्रिय मतदार बंधू भगिनींनो, तुमच्या आशीर्वादाने गेल्या २०१७ साठी तुमच्यातीलच एक २७ वर्षांच्या तरुण उमेदवाराला नगरसेवक निवडून दिलंत. हा संधीचे सेवेत करणार करील मिकालेली ५ वर्षे प्रभागात यापूर्वी कधीही न झालेली विकासकामे मी यशस्वीपणे पूर्ण केली. विभागातील मुख्य रस्ते कॉंक्रिटीकरण आणि इतर अनेक कामे आज आपल्या समक्ष आहेत.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <button 
            onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift"
          >
            केलेली कामगिरी पहा
            <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;