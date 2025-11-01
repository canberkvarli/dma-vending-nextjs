'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-dark flex items-center pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Healthy Vending Solutions for{' '}
              <span className="text-secondary border-b-4 border-secondary">
                Your Workplace
              </span>
            </h1>

            {/* EXACT TEXT FROM DMA WEBSITE */}
            <p className="text-lg md:text-xl text-beige mb-8 leading-relaxed">
              Are your employees tired of junk food-only vending machines at work? 
              Do you want to offer them healthy, natural or low-calorie food and beverage options? 
              HealthyChoice helps you provide the healthy options your employees want while 
              helping your company promote a healthy lifestyle. All without any cost or long-term 
              commitment to your company.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all shadow-lg"
                >
                  Contact Us Today
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#machine"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-all"
                >
                  See Our Machines
                </Link>
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-3xl font-bold text-secondary mb-1">$0</div>
                <div className="text-beige text-sm">Cost to You</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-3xl font-bold text-secondary mb-1">100%</div>
                <div className="text-beige text-sm">Healthy Options</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-3xl font-bold text-secondary mb-1">0</div>
                <div className="text-beige text-sm">Long-term Commitment</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1604719312566-8912e92277c6?w=600&h=800&fit=crop&q=80"
                alt="Modern Healthy Vending Machine"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}