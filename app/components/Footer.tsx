'use client';

import Link from 'next/link';
import Image from 'next/image';

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
    <footer className="bg-dark text-text-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Link href="#home" className="inline-block">
                <div className="relative h-16 w-auto sm:h-20 md:h-24">
                  <Image
                    src="/logo-dma.png"
                    alt="DMA Healthy Vending Logo"
                    width={269}
                    height={99}
                    className="h-full w-auto object-contain"
                  />
                </div>
              </Link>
            </div>
            <p className="leading-relaxed">
              Providing healthy vending solutions for gyms, schools, and facilities throughout California. 
              Promoting wellness and nutrition without any cost to you.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-bold text-primary mb-4">
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
            <h4 className="text-lg font-bold text-primary mb-4">
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
        <div className="pt-8 border-t border-primary/30 text-center">
          <p className="text-sm">
            © Copyright 2025 DMA Healthy Vending, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}