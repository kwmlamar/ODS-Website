'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-900/20 backdrop-blur-sm shadow-2xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl lg:text-3xl font-bold text-sky-400 drop-shadow-lg">
              ODS <span className="text-amber-400">Construction</span>
            </div>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center gap-10 xl:gap-12 mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/95 hover:text-sky-400 font-semibold text-base transition-colors duration-200 whitespace-nowrap drop-shadow-md"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Get a Quote Button - Right */}
          <div className="hidden lg:flex items-center">
            <Button
              asChild
              variant="yellow"
              size="xl"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Get A Quote
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
            </Button>
          </div>
          
        </div>
      </div>
    </nav>
  );
}

