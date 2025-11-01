'use client';

import { motion } from 'framer-motion';

const benefits = [
  {
    icon: '❤️',
    title: 'Employee Wellness',
    description: 'Support your team\'s health and wellbeing',
  },
  {
    icon: '📈',
    title: 'Workplace Culture',
    description: 'Foster a culture of health and wellness',
  },
  {
    icon: '⚡',
    title: 'Convenience',
    description: 'Easy access to healthy options at work',
  },
  {
    icon: '🤝',
    title: 'No Commitment',
    description: 'Flexible terms with no contracts',
  },
  {
    icon: '🎧',
    title: 'Full Support',
    description: 'Complete service and maintenance',
  },
  {
    icon: '✅',
    title: 'Quality Products',
    description: 'Fresh, natural, healthy selections',
  },
];

export default function Benefits() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold mb-4">
            About Us
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-4">
            Promote a Healthy Lifestyle
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Help your company promote a healthy lifestyle with convenient, nutritious vending options.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-8"
            >
              <div className="w-20 h-20 bg-white border-4 border-primary rounded-full flex items-center justify-center text-4xl mx-auto mb-6 hover:bg-primary hover:scale-110 transition-all">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-dark mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}