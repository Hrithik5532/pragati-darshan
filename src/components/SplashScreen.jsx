import React, { useState, useEffect } from 'react';

const SplashScreen = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar
    const progressInterval = setInterval(() => {
      setLoadProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    // Wait 2 seconds then start exit animation
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 2000);

    // Complete after animation (500ms)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] transition-transform duration-700 ease-out ${
        isExiting ? '-translate-y-full' : 'translate-y-0'
      }`}
      style={{ backgroundColor: '#f97316' }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500 via-orange-500 to-orange-600"></div>
      
      {/* Main Image Container - Responsive */}
      <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8">
        <img 
          src="https://customer-assets.emergentagent.com/job_pragati-darshan/artifacts/i9tglk0x_Screenshot%202026-01-13%20at%202.45.43%E2%80%AFAM.png"
          alt="केलंय काम भारी आता पुढची तयारी"
          className="max-w-full max-h-full w-auto h-auto object-contain rounded-2xl shadow-2xl"
        />
      </div>
      
      {/* Swipe Up Indicator */}
      <div className={`absolute bottom-16 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center transition-opacity duration-300 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}>
        <p className="text-white/80 text-sm sm:text-base font-medium mb-2">लोडिंग...</p>
        <div className="flex flex-col items-center">
          <svg 
            className="w-6 h-6 sm:w-8 sm:h-8 text-white animate-bounce" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </div>
      </div>

      {/* Loading Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 sm:h-2 bg-white/20">
        <div 
          className="h-full bg-white rounded-r-full transition-all duration-100 ease-linear"
          style={{ width: `${loadProgress}%` }}
        ></div>
      </div>

      {/* Corner Branding */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <span className="text-orange-500 font-bold text-lg sm:text-xl">🏹</span>
          </div>
          <div className="text-white hidden sm:block">
            <p className="font-bold text-sm">शिवसेना</p>
            <p className="text-xs text-white/80">प्रभाग क्र. १६०</p>
          </div>
        </div>
      </div>

      {/* Serial Number Badge */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <div className="bg-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shadow-lg">
          <span className="text-orange-600 font-bold text-2xl sm:text-3xl">३</span>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
