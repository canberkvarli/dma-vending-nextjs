'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


export default function Hero() {
  const [mounted] = useState(() => typeof window !== 'undefined');
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="home" className="relative min-h-screen bg-bg flex items-center pt-20 overflow-hidden">
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
        <div className="flex flex-col items-center text-center">
          {/* Title First */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: [0.6, -0.05, 0.01, 0.99] as const
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 leading-tight max-w-4xl"
          >
            Healthy vending options are now available in your area.
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              ease: [0.6, -0.05, 0.01, 0.99] as const
            }}
            className="text-xl md:text-2xl font-semibold text-primary mb-12 max-w-4xl"
          >
            Bringing healthy vending solutions powered by cutting-edge AI technology to your location
          </motion.p>

          {/* AI Smart Machine - Featured */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={mounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ 
              duration: 1, 
              delay: 0.6,
              type: "spring",
              stiffness: 100
            }}
            className="relative mb-12 w-full max-w-xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.8 }}
              whileHover={{ scale: 1.02, y: -10 }}
              className="relative"
            >
              {/* Glowing effect wrapper */}
              <div className="relative">
                <motion.div
                  animate={imageLoaded ? {
                    y: [0, -10, 0],
                  } : {}}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`relative aspect-[4/5] backdrop-blur-lg rounded-3xl overflow-hidden border shadow-2xl ${
                    imageLoaded 
                      ? 'bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20 ai-machine-container animate-glow' 
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  {/* Outer glow layers - only render after image loads */}
                  {imageLoaded && (
                    <>
                      <div className="absolute inset-0 -z-10 ai-glow-pulse" />
                      <div className="absolute inset-0 -z-10 ai-glow-outer" />
                    </>
                  )}
                  
                  <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={mounted ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
                    transition={{ duration: 1.2, delay: 1 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src="/smartmachine.png"
                      alt="AI Smart Machine with SmartVision technology"
                      fill
                      className="object-contain object-center scale-150"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                      style={{ objectPosition: 'center' }}
                      onLoadingComplete={() => {
                        setTimeout(() => setImageLoaded(true), 200);
                      }}
                    />
                    {/* Tech gradient overlay - only show after image loads */}
                    {imageLoaded && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-primary/5 pointer-events-none" />
                        {/* Subtle scan line effect */}
                        <motion.div
                          animate={{
                            y: ['-100%', '200%'],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent h-1/3 pointer-events-none"
                        />
                      </>
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
            <div className="mt-4 text-center">
              <p className="text-text font-semibold text-lg">AI Smart Machine</p>
              <p className="text-primary text-sm mt-1">Powered by SmartVision Technology</p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.2,
              ease: [0.6, -0.05, 0.01, 0.99] as const
            }}
            className="text-lg md:text-xl text-text-secondary mb-12 leading-relaxed max-w-4xl"
          >
            Are you tired of junk food-only vending machines? Do you want to offer healthy, natural or low-calorie food and beverage options? DMA Healthy Vending helps you provide the healthy options you want while helping you promote a healthy lifestyle for your gym, school, facility, or location. All without any cost or long-term commitment to you.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
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
            >
              <Link
                href="#machine"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary text-text rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}