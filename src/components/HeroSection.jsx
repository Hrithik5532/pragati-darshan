import React, { useEffect, useState } from 'react';
import { candidateInfo, stats } from '../data/mock';
import { ChevronDown, Vote, Download, FileText } from 'lucide-react';

const AnimatedCounter = ({ target, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-counter');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
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
  }, [target, duration, isVisible]);

  return <span>{count}{suffix}</span>;
};

const HeroSection = () => {
  const scrollToStats = () => {
    document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ✅ Background Image */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 inset-0 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: "url('/assets/logo-removebg-preview.png')",
        }}
      />

      {/* ✅ Animation Overlay (NO COLOR) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Silk Wave */}
        <div className="absolute bottom-0 w-full h-40 opacity-30">
          <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1440 320%22%3E%3Cpath fill=%22%23ffffff%22 fill-opacity=%220.4%22 d=%22M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L0,320Z%22/%3E%3C/svg%3E')] bg-cover bg-bottom animate-pulse" />
        </div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-white/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>





      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in-up">
            {/* Party Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-orange-500 text-xs font-bold">🏹</span>
              </div>
              <span className="text-white font-medium text-sm">{candidateInfo.party} | {candidateInfo.ward}</span>
            </div>

            {/* Main Quote */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="block text-white/90 text-2xl sm:text-3xl mb-2">"</span>
              {candidateInfo.mainQuote}
              <span className="block text-white/90 text-2xl sm:text-3xl mt-2">"</span>
            </h1>

            {/* Secondary Slogan */}
            <p className="text-xl sm:text-2xl text-white/90 font-medium">
              {candidateInfo.secondarySlogan}
            </p>

            {/* Hashtag Slogans */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">#नेता_नव्हे_कार्यकर्ता</span>
              <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">#किरणभाऊ_सर्वांकरिता</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button 
                onClick={scrollToStats}
                className="group px-8 py-4 bg-white text-orange-600 font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Vote className="w-5 h-5" />
                कामगिरी पहा
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
              
              {/* PDF Download Button */}
              <a 
                href={candidateInfo.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-amber-400 text-orange-900 font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                कार्य अहवाल PDF
              </a>
              <a 
                href={candidateInfo.pdfUrl1}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-amber-400 text-orange-900 font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                प्रभाग PDF
              </a>
            </div>

            {/* Voting Info */}
            <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <p className="text-white font-bold text-lg flex items-center gap-2 justify-center lg:justify-start">
                <FileText className="w-5 h-5" />
                मतदान: {candidateInfo.votingDate}
              </p>
              <p className="text-white/80 text-sm">{candidateInfo.votingTime} | क्र. {candidateInfo.serialNumber} | {candidateInfo.symbol}</p>
            </div>
          </div>

          {/* Right Content - Candidate Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-white/30 rounded-full blur-3xl scale-75"></div>
              
              {/* Candidate Photo */}
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl">
                <img 
                  src="/assets/11.png"
                  alt={candidateInfo.name}
                  className="w-full h-full object-contain object-bottom bg-gradient-to-t from-orange-300 to-transparent scale-150 translate-y-16"
                />
              </div>

              {/* Name Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-3 rounded-full shadow-xl">
                <p className="text-white font-bold text-lg whitespace-nowrap">{candidateInfo.name}</p>
                <p className="text-white/80 text-xs text-center">{candidateInfo.position}</p>
              </div>

              {/* Serial Number Badge */}
              {/* <div className="absolute -top-2 -right-2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
                <span className="text-orange-600 font-bold text-3xl">{candidateInfo.serialNumber}</span>
              </div> */}
            </div>
          </div>
        </div>

        {/* Mini Stats Preview */}
        <div id="stats-counter" className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.slice(0, 4).map((stat, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => document.getElementById('empowerment')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <p className="text-3xl sm:text-4xl font-bold text-white">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              </p>
              <p className="text-white/80 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  );
};

export default HeroSection;
