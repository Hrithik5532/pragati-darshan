import React, { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import { Toaster } from "sonner";
import SEOHead from "./components/SEOHead";
import SplashScreen from "./components/SplashScreen";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import TimelineSection from "./components/TimelineSection";
import EmpowermentSection from "./components/EmpowermentSection";
import RoadsSection from "./components/RoadsSection";
import PromisesSection from "./components/PromisesSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import CollageGallery from "./components/CollageGallery";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <HelmetProvider>
      <div className="App font-sans">
        <SEOHead />
        
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
        
        <div className={`transition-opacity duration-500 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
          <Toaster position="top-center" richColors />
          <Header />
          <main>
            <HeroSection />
            <StatsSection />
            <TimelineSection />
            <EmpowermentSection />
            <RoadsSection />
            <PromisesSection />
            <CollageGallery />  
            <TeamSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
