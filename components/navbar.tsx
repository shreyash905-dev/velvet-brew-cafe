'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#menu', label: 'Menu' },
    { href: '#experience', label: 'Experience' },
    { href: '#reservations', label: 'Reservations' },
    { href: '#concierge', label: 'AI Concierge' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReserveClick = () => {
    scrollToSection('#reservations');
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 cursor-pointer">
            <span className="text-xl font-light tracking-widest text-foreground">
              AURUM CAFÉ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button 
              onClick={handleReserveClick}
              className="px-6 py-2 text-sm font-light border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-300 cursor-pointer"
            >
              Reserve Table
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={20} className="text-foreground" />
            ) : (
              <Menu size={20} className="text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 space-y-2"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  scrollToSection(link.href);
                  setIsOpen(false);
                }}
                className="block w-full text-left text-sm font-light text-muted-foreground hover:text-foreground transition-colors py-2 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={handleReserveClick}
              className="w-full mt-4 px-6 py-2 text-sm font-light border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors cursor-pointer"
            >
              Reserve Table
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  );
}


