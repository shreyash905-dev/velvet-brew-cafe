'use client';

import { motion } from 'framer-motion';
import { Coffee, Home, Users, BookOpen } from 'lucide-react';

const features = [
  {
    icon: Coffee,
    title: 'Handcrafted Coffee',
    description: 'Premium, ethically-sourced beans roasted to perfection and crafted by skilled baristas.'
  },
  {
    icon: Home,
    title: 'Elegant Interiors',
    description: 'Minimalist luxury design with soft lighting and carefully curated furnishings.'
  },
  {
    icon: BookOpen,
    title: 'Work-Friendly Space',
    description: 'Quiet, distraction-free environment ideal for reading, writing, or focused work.'
  },
  {
    icon: Users,
    title: 'Private Reservations',
    description: 'Book exclusive tables for intimate conversations and special moments.'
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest text-muted-foreground uppercase mb-4">
            What Sets Us Apart
          </p>
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-4 text-balance">
            The Aurum Experience
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow duration-300"
              >
                <Icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-light text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
