'use client';

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AISmartMachine from './components/AISmartMachine';
import Stats from './components/Stats';
import VendingShowcase from './components/VendingShowcase';
// import HealthyCarousel from './components/HealthyCarousel';
import Features from './components/Features';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import FruitGallery from './components/FruitGallery';
import LetterIntro from './components/LetterIntro';

export default function Home() {
  const [showLetter, setShowLetter] = useState(true);

  // Optional: Check localStorage to see if user has seen the letter before
  // Uncomment this if you want to show it only once per user
  // useEffect(() => {
  //   const hasSeenLetter = localStorage.getItem('hasSeenLetter');
  //   if (hasSeenLetter === 'true') {
  //     setShowLetter(false);
  //   }
  // }, []);

  const handleLetterComplete = () => {
    setShowLetter(false);
    // Optional: Save to localStorage
    // localStorage.setItem('hasSeenLetter', 'true');
  };

  return (
    <main className="min-h-screen">
      {showLetter && <LetterIntro onComplete={handleLetterComplete} />}
      <div className={showLetter ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <Navbar />
        <Hero />
        <AISmartMachine />
        <FruitGallery />
        <Stats />
        <VendingShowcase />
        {/** <HealthyCarousel /> */}
        <Features />
        <About />
        <Benefits />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}