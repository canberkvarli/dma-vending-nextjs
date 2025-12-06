'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AISmartMachine from './components/AISmartMachine';
import Stats from './components/Stats';
import VendingShowcase from './components/VendingShowcase';
import LetterIntro from './components/LetterIntro';
// import HealthyCarousel from './components/HealthyCarousel';
import Features from './components/Features';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import FruitGallery from './components/FruitGallery';

export default function Home() {
  const [showLetter, setShowLetter] = useState(true);

  return (
    <main className="min-h-screen">
      {showLetter && <LetterIntro onComplete={() => setShowLetter(false)} />}
      {!showLetter && (
        <>
          <Navbar />
          <Hero />
          <VendingShowcase />
          <FruitGallery />
          <Stats />
          {/** <HealthyCarousel /> */}
          <AISmartMachine />
          <Features />
          <About />
          <Benefits />
          <FAQ />
          <Contact />
          <Footer />
        </>
      )}
    </main>
  );
}