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
    <section id="products" className="py-20 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold mb-4"
          >
            Our Products
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-text mb-4"
          >
            Fresh, Healthy, Delicious
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-text-secondary max-w-2xl mx-auto"
          >
            Explore our wide selection of nutritious options that your employees will love.
          </motion.p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] as const }}
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
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-surface rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-all group z-10"
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
          </motion.button>
          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-surface rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-all group z-10"
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
          </motion.button>

          {/* Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-2 mt-6"
          >
            {healthyImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  width: index === currentIndex ? 32 : 8,
                  backgroundColor: index === currentIndex ? 'var(--color-primary)' : 'var(--color-border)',
                }}
                transition={{ duration: 0.3 }}
                className="h-2 rounded-full"
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}