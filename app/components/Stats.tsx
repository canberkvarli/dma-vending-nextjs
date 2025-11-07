'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Stats() {
  const [mounted] = useState(() => typeof window !== 'undefined');

  const stats = [
    { value: '$0', label: 'Cost to You' },
    { value: '100%', label: 'Healthy Options' },
    { value: '0', label: 'Long-term Commitment' },
  ];

  return (
    <section className="relative py-12 md:py-16 bg-dark overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={mounted ? { scale: 1, opacity: 0.03 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100,
                  },
                },
              }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="text-center bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 lg:p-10 backdrop-blur-sm shadow-2xl hover:shadow-primary/20 transition-all"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={mounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + index * 0.15,
                  type: "spring",
                  stiffness: 150,
                }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-3 md:mb-4"
              >
                {stat.value}
              </motion.div>
              <div className="text-white/90 text-lg md:text-xl lg:text-2xl font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


