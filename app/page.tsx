'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
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
    </main>
  );
}