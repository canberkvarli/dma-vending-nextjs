'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const healthyImages = [
  {
    url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=675&fit=crop&q=80',
    title: 'Fresh & Healthy Options',
    description: 'Nutritious choices for your workplace',
  },
  {
    url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=675&fit=crop&q=80',
    title: 'Organic Selections',
    description: 'Natural and low-calorie options',
  },
  {
    url: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=1200&h=675&fit=crop&q=80',
    title: 'Wholesome Snacks',
    description: 'Energy-boosting healthy treats',
  },
  {
    url: 'https://images.unsplash.com/photo-1553530979-2f2d9e4c0c2f?w=1200&h=675&fit=crop&q=80',
    title: 'Natural Beverages',
    description: 'Refreshing and nutritious drinks',
  },
];

export default function HealthyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % healthyImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % healthyImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + healthyImages.length) % healthyImages.length);
  };

  return (
    <section id="products" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold mb-4">
            Our Products
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-4">
            Fresh, Healthy, Delicious
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide selection of nutritious options that your employees will love.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <Image
                  src={healthyImages[currentIndex].url}
                  alt={healthyImages[currentIndex].title}
                  fill
                  className="object-cover"
                  priority={currentIndex === 0}
                />
                <div className="absolute inset-0 bg-dark/60" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-heading font-bold mb-2"
                  >
                    {healthyImages[currentIndex].title}
                  </motion.h3>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg text-gray-200"
                  >
                    {healthyImages[currentIndex].description}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-all group"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-all group"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {healthyImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}