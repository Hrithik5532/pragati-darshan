import React from 'react';
import { candidateInfo } from '../data/mock';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative Top Wave */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">क</span>
              </div>
              <div>
                <p className="font-bold text-lg">किरण भाऊ लांडगे</p>
                <p className="text-gray-400 text-sm">प्रभाग क्र. १६०</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              नेता नव्हे कार्यकर्ता - जनतेच्या सेवेत सतत कार्यरत
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">झटपट लिंक्स</h4>
            <div className="grid grid-cols-2 gap-2">
              {['कामगिरी', 'विकास यात्रा', 'सक्षमीकरण', 'रस्ते विकास', 'टीम महायुती', 'संपर्क'].map((link, index) => (
                <button
                  key={index}
                  className="text-left text-gray-400 hover:text-orange-400 transition-colors text-sm py-1"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Party Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">शिवसेना</h4>
            <div className="flex items-center gap-3 bg-gray-800 rounded-xl p-4">
              <span className="text-3xl">🏹</span>
              <div>
                <p className="font-bold">धनुष्यबाण</p>
                <p className="text-gray-400 text-sm">विजयाचे निशाण</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> for प्रभाग १६०
          </p>
          <p className="text-gray-400 text-sm">
            © 2025 किरण भाऊ लांडगे. सर्व हक्क राखीव.
          </p>
          
          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
