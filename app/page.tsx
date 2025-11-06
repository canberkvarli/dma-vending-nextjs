'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VendingShowcase from './components/VendingShowcase';
// import HealthyCarousel from './components/HealthyCarousel';
import Features from './components/Features';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
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