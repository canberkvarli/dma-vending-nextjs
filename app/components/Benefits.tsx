'use client';

import { motion } from 'framer-motion';
import { 
  HiHeart, 
  HiTrendingUp, 
  HiLightningBolt, 
  HiHand, 
  HiSupport, 
  HiCheckCircle 
} from 'react-icons/hi';

const benefits = [
  {
    icon: HiHeart,
    title: 'Health & Wellness',
    description: 'Support health and wellbeing',
  },
  {
    icon: HiTrendingUp,
    title: 'Wellness Culture',
    description: 'Foster a culture of health and wellness',
  },
  {
    icon: HiLightningBolt,
    title: 'Convenience',
    description: 'Easy access to healthy options',
  },
  {
    icon: HiHand,
    title: 'No Commitment',
    description: 'Flexible terms with no contracts',
  },
  {
    icon: HiSupport,
    title: 'Full Support',
    description: 'Complete service and maintenance',
  },
  {
    icon: HiCheckCircle,
    title: 'Quality Products',
    description: 'Fresh, natural, healthy selections',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

export default function Benefits() {
  return (
    <section className="py-20 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold mb-4"
          >
            About Us
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-text mb-4"
          >
            Promote a Healthy Lifestyle
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-text-secondary max-w-2xl mx-auto"
          >
            Promote a healthy lifestyle with convenient, nutritious vending options.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                className="text-center p-6"
              >
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 250 }}
                  className="w-16 h-16 bg-surface border-2 border-muted rounded-full flex items-center justify-center mx-auto mb-4 transition-all group cursor-pointer shadow-sm hover:shadow-md ring-0 outline-none focus-visible:outline-none"
                >
                  <IconComponent className="w-8 h-8 text-primary transition-colors group-hover:text-text" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-xl font-bold text-text mb-3"
                >
                  {benefit.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="text-text-secondary"
                >
                  {benefit.description}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}