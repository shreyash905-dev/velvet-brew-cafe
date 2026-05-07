'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Creative Director',
    content: 'Aurum Café is my sanctuary. The coffee is exceptional, the space is serene, and every detail speaks of refinement.',
    rating: 5
  },
  {
    name: 'James Chen',
    role: 'Entrepreneur',
    content: 'The perfect spot for meetings that matter. Impeccable service, premium coffee, and an atmosphere of elegance.',
    rating: 5
  },
  {
    name: 'Emma Rodriguez',
    role: 'Artist',
    content: 'I&apos;ve found my creative home here. The quiet ambiance and thoughtful design inspire my best work.',
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
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
            Guest Stories
          </p>
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-4 text-balance">
            Testimonials
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-card border border-border p-8"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg font-light text-foreground mb-6 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div>
                <p className="font-light text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground font-light">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
