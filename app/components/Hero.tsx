'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99] as const,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99] as const,
    },
  },
};

export default function Hero() {
  const [mounted] = useState(() => typeof window !== 'undefined');

  return (
    <section id="home" className="relative min-h-screen bg-dark flex items-center pt-20 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={mounted ? { scale: 1, opacity: 0.05 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={mounted ? { scale: 1, opacity: 0.05 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={mounted ? {
            scale: [1, 1.15, 1],
            opacity: [0.03, 0.06, 0.03],
          } : { scale: 0, opacity: 0 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="block"
              >
                Healthy vending options
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block"
              >
                are now available in your area.
              </motion.span>
            </motion.h1>

            <motion.p
              variants={textVariants}
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
              className="text-xl md:text-2xl font-semibold text-primary mb-8"
            >
              Promote healthy habits — at no cost to your company!
            </motion.p>

            {/* EXACT TEXT FROM DMA WEBSITE */}
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
            >
              Are you tired of junk food-only vending machines? 
              Do you want to offer healthy, natural or low-calorie food and beverage options? 
              HealthyChoice helps you provide the healthy options you want while 
              helping your company promote a healthy lifestyle. <strong>All without any cost or long-term 
              commitment to your company.</strong>
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={mounted ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl"
                >
                  Contact DMA Healthy Vending Today
                  <motion.svg
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={mounted ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Link
                  href="#machine"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary text-white rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10"
            >
              {[
                { value: '$0', label: 'Cost to You' },
                { value: '100%', label: 'Healthy Options' },
                { value: '0', label: 'Long-term Commitment' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={mounted ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.06, y: -4 }}
                  className="text-center bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-lg"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={mounted ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="text-4xl md:text-5xl font-extrabold text-primary mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-white/90 text-base md:text-lg font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={mounted ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.9 }}
            transition={{ 
              duration: 1, 
              delay: 0.3,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ scale: 1.02, y: -10 }}
            className="relative"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 20px 60px rgba(169, 206, 55, 0.1)",
                  "0 20px 60px rgba(169, 206, 55, 0.2)",
                  "0 20px 60px rgba(169, 206, 55, 0.1)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative aspect-[3/4] bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={mounted ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="relative w-full h-full"
              >
                <Image
                  src="/vending1.png"
                  alt="Modern Healthy Vending Machine with fresh fruit graphics"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}