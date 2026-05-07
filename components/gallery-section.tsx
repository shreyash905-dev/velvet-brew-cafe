'use client';

import { motion } from 'framer-motion';

export function GallerySection() {
  const galleryItems = [
    { title: 'Interior Design', color: 'from-accent/20 to-accent/5' },
    { title: 'Coffee Craftsmanship', color: 'from-secondary/20 to-secondary/5' },
    { title: 'Quiet Moments', color: 'from-primary/20 to-primary/5' },
    { title: 'Pastry Selection', color: 'from-accent/30 to-accent/10' },
    { title: 'Ambiance', color: 'from-muted/20 to-muted/5' },
    { title: 'Guest Experience', color: 'from-secondary/30 to-secondary/10' }
  ];

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
            Visual Gallery
          </p>
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-4 text-balance">
            Moments at Aurum
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`h-64 rounded-2xl bg-gradient-to-br ${item.color} border border-border flex items-center justify-center hover:shadow-md transition-shadow duration-300`}
            >
              <h3 className="text-xl font-light text-foreground text-center px-4">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
