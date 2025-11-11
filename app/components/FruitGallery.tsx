'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const carouselItems = [
  {
    image: '/woman-eating-salad.png',
    alt: 'Woman enjoying healthy salad',
    caption: 'Healthy choices for everyone',
  },
  {
    image: '/employee-salad.png',
    alt: 'Employee eating fresh salad',
    caption: 'Supporting healthy habits in the workplace',
  },
  {
    image: '/boy-eating-apple.png',
    alt: 'Boy enjoying healthy apple',
    caption: 'Real food that kids love',
  },
];

export default function FruitGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentItem = carouselItems[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 30 : -30,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -30 : 30,
    }),
  };

  return (
    <section id="gallery" className="py-12 bg-surface-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text mb-3">
            Fresh. Natural. Delicious.
          </h2>
          <p className="text-base text-text-secondary max-w-2xl mx-auto">
            Healthy choices for everyone, everywhere
          </p>
        </motion.div>

        {/* Compact Carousel */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-surface"
          >
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  opacity: { duration: 0.4 },
                  x: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                }}
                className="absolute inset-0 w-full h-full z-10"
              >
                <Image
                  src={currentItem.image}
                  alt={currentItem.alt}
                  fill
                  className="object-cover"
                  priority={currentIndex === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                  quality={75}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-white text-base md:text-lg font-semibold"
                    >
                      {currentItem.caption}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-surface border-2 border-muted flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all shadow-md"
              aria-label="Previous slide"
            >
              <svg
                className="w-5 h-5"
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

            {/* Dots */}
            <div className="flex gap-2">
              {carouselItems.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    width: index === currentIndex ? 32 : 8,
                    backgroundColor:
                      index === currentIndex
                        ? 'var(--color-primary)'
                        : 'var(--color-border)',
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-2 rounded-full"
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-surface border-2 border-muted flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all shadow-md"
              aria-label="Next slide"
            >
              <svg
                className="w-5 h-5"
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
          </div>
        </div>
      </div>
    </section>
  );
}

