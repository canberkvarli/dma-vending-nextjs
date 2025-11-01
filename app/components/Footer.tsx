'use client';

import Link from 'next/link';
import { FaLeaf } from 'react-icons/fa';

export default function Footer() {
  const footerLinks = {
    navigation: [
      { label: 'Home', href: '#home' },
      { label: 'Our Machines', href: '#machine' },
      { label: 'Products', href: '#products' },
      { label: 'Why Healthy Vending', href: '#about' },
      { label: 'FAQs', href: '#faq' },
    ],
    contact: [
      { label: '925 785-6000', href: 'tel:925-785-6000' },
      { label: 'Email Us', href: 'mailto:maryann@dmahealthyvending.com' },
      { label: 'Contact Form', href: '#contact' },
    ],
  };

  return (
    <footer className="bg-dark text-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <FaLeaf className="w-8 h-8 text-secondary" />
              <h3 className="text-xl font-heading font-bold text-white">
                DMA Healthy Vending
              </h3>
            </div>
            <p className="leading-relaxed">
              Providing healthy vending solutions for workplaces throughout California. 
              Promoting wellness and nutrition without any cost to your company.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-heading font-bold text-secondary mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h4 className="text-lg font-heading font-bold text-secondary mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-sm">
            © 2025 DMA Healthy Vending, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}