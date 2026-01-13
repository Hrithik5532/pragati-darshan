import React, { useEffect, useRef, useState } from 'react';
import { empowermentPrograms } from '../data/mock';
import { Users, GraduationCap, Heart, Shield, ChevronDown, Check } from 'lucide-react';

const iconComponents = {
  Users: Users,
  GraduationCap: GraduationCap,
  Heart: Heart,
  Shield: Shield
};

const EmpowermentSection = () => {
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
    <section id="empowerment" ref={sectionRef} className="py-20 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="/assets/11.png"
          alt=""
          className="absolute right-0 bottom-0 w-1/2 h-auto object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            एकच ध्यास सर्वांगीण विकास
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            महिला-युवा <span className="text-orange-500">सक्षमीकरण</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            समाजातील दुर्बल घटकांना सक्षम करण्याचा आमचा संकल्प
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {empowermentPrograms.map((program, index) => {
            const Icon = iconComponents[program.icon];
            
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${program.color} text-white shadow-xl scale-105`
                    : 'bg-white text-gray-700 shadow-md hover:shadow-lg hover:scale-102'
                }`}
              >
                {Icon && <Icon className="w-5 h-5" />}
                <span className="hidden sm:inline">{program.category}</span>
              </button>
            );
          })}
        </div>

        {/* Programs Display */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left - Image Gallery */}
          <div className={`relative transition-all duration-700 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/assets/11.png"
                  alt="सक्षमीकरण कार्यक्रम"
                  className="w-full h-80 object-cover bg-gradient-to-br from-orange-100 to-orange-200"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <p className="text-orange-600 font-bold text-lg">
                      {empowermentPrograms[activeCategory].category}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {empowermentPrograms[activeCategory].programs.length} कार्यक्रम पूर्ण
                    </p>
                  </div>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-3">
                {empowermentPrograms[activeCategory].images.slice(1, 4).map((image, idx) => (
                  image && (
                    <div 
                      key={idx}
                      className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                    >
                      <img 
                        src={image}
                        alt={`${empowermentPrograms[activeCategory].category} ${idx + 2}`}
                        className="w-full h-24 object-cover bg-gradient-to-br from-orange-50 to-orange-100"
                      />
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>  

        {/* Additional Info Cards */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl p-6 text-white text-center">
            <p className="text-4xl font-bold mb-2">४००+</p>
            <p className="text-white/90">शिलाई मशीन वाटप</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl p-6 text-white text-center">
            <p className="text-4xl font-bold mb-2">१६०+</p>
            <p className="text-white/90">टॅब्लेट वाटप</p>
          </div>
          <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-6 text-white text-center">
            <p className="text-4xl font-bold mb-2">९,०००+</p>
            <p className="text-white/90">छत्री वाटप</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpowermentSection;
