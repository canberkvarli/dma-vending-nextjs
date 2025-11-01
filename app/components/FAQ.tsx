'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What does it cost my company?',
    answer: 'There is no cost to your company. We provide installation and service at no charge with no long-term commitment required.',
  },
  {
    question: 'What types of products are available?',
    answer: 'We offer healthy, natural, and low-calorie food and beverage options that your employees want.',
  },
  {
    question: 'How does the service work?',
    answer: 'We install the machines at your location, stock them regularly, and handle all maintenance - all at no cost to your company.',
  },
  {
    question: 'Is there a long-term commitment?',
    answer: 'No, there is no long-term commitment required. Our service is flexible to meet your needs.',
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'Our machines accept cash, credit cards, debit cards, and mobile payments for maximum convenience.',
  },
  {
    question: 'How often are machines restocked?',
    answer: 'We provide regular restocking based on your location\'s needs to ensure products are always fresh and available.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold mb-4">
            FAQs
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Learn more about our healthy vending services.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-cream rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <h3 className="text-lg font-bold text-dark pr-8">
                  {faq.question}
                </h3>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 text-primary flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}