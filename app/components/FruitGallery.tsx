'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const carouselItems = [
  {
    image: '/woman-fruit-v2.png',
    alt: 'Person enjoying healthy fruits',
    stat: '1,100+',
    statLabel: 'Healthy Products',
    title: 'Fresh. Natural. Delicious.',
    description: 'Choose from organic, low-calorie, low-fat, kosher, gluten-free, low-carb, and all-natural options. Real food that fuels your day.',
    highlight: 'Your employees and customers want healthy options',
  },
  {
    image: '/woman-fruit-v2.png',
    alt: 'Person eating fresh fruits',
    stat: '61%',
    statLabel: 'Choose Healthfulness',
    title: 'People Want Healthy Options',
    description: 'In a recent study, nearly all respondents reported trying to improve their eating habits. The "healthfulness" of a product impacts purchase decisions.',
    highlight: 'Support your Corporate Wellness Program',
  },
  {
    image: '/woman-fruit-v2.png',
    alt: 'Person enjoying healthy snacks',
    stat: '$0',
    statLabel: 'Cost to You',
    title: 'No Cost, No Commitment',
    description: 'All without any cost or long-term commitment. Free installation and service. Promote a healthy lifestyle at your facility.',
    highlight: 'Lower healthcare costs, increase productivity',
  },
];

export default function FruitGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
    <section id="gallery" className="py-16 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-surface"
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{
                  opacity: { duration: 0.3 },
                  y: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                }}
              >
                {/* Stat */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="mb-4"
                >
                  <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                    {currentItem.stat}
                  </div>
                  <div className="text-lg text-text-secondary font-semibold">
                    {currentItem.statLabel}
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-text mb-4"
                >
                  {currentItem.title}
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="text-base text-text-secondary mb-4 leading-relaxed"
                >
                  {currentItem.description}
                </motion.p>

                {/* Highlight */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                  className="flex items-start gap-3 p-3 bg-primary/10 rounded-xl border-l-4 border-primary"
                >
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-sm font-semibold text-text">
                    {currentItem.highlight}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center gap-4 mt-8 flex-shrink-0">
              <motion.button
                onClick={prevSlide}
                whileHover={{ scale: 1.1, x: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-surface border-2 border-muted flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all shadow-md"
                aria-label="Previous slide"
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

              {/* Dots */}
              <div className="flex gap-2 flex-1">
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
                className="w-12 h-12 rounded-full bg-surface border-2 border-muted flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all shadow-md"
                aria-label="Next slide"
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

