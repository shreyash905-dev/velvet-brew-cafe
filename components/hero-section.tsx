'use client';

import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-widest text-muted-foreground uppercase mb-4">
            Welcome to Aurum Café
          </p>
          
          <h1 className="text-5xl sm:text-6xl font-light leading-tight mb-6 text-foreground text-balance">
            Luxury Coffee. Quiet Moments. Timeless Taste.
          </h1>
          
          <p className="text-lg font-light text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Aurum Café is a refined café experience crafted for people who appreciate premium coffee, elegant interiors, and slow conversations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => scrollToSection('#reservations')}
              className="px-8 py-3 border border-foreground text-foreground font-light hover:bg-foreground hover:text-background transition-colors duration-300 cursor-pointer"
            >
              Reserve a Table
            </button>
            <button 
              onClick={() => scrollToSection('#menu')}
              className="px-8 py-3 text-foreground font-light border-b border-foreground hover:border-b-2 transition-all duration-300 cursor-pointer"
            >
              Explore Menu
            </button>
          </div>
        </motion.div>

        {/* Right Preview Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="rounded-2xl bg-card p-8 shadow-sm border border-border cursor-pointer hover:shadow-md transition-shadow duration-300">
            {/* Coffee Icon */}
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                <Coffee size={32} className="text-accent" />
              </div>
            </div>

            {/* Card Content */}
            <h3 className="text-2xl font-light text-center mb-6 text-foreground">
              Featured Moment
            </h3>

            {/* Details */}
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center pb-4 border-b border-border">
                <span className="text-muted-foreground">Opening Hours</span>
                <span className="text-foreground font-light">7AM - 7PM</span>
              </div>
              
              <div className="flex justify-between items-center pb-4 border-b border-border">
                <span className="text-muted-foreground">Rating</span>
                <span className="text-foreground font-light">4.9 / 5.0</span>
              </div>

              <div className="pt-4">
                <p className="text-muted-foreground text-xs uppercase tracking-widest mb-2">
                  Featured Drink
                </p>
                <p className="text-lg font-light text-foreground">
                  Gold Leaf Cappuccino
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
