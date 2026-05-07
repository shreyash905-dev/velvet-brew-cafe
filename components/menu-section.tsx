'use client';

import { motion } from 'framer-motion';

const menuItems = [
  {
    name: 'Gold Leaf Cappuccino',
    description: 'Handcrafted cappuccino topped with edible gold leaf',
    price: '$18'
  },
  {
    name: 'Vanilla Bean Latte',
    description: 'Premium espresso with Madagascar vanilla and steamed milk',
    price: '200rs'
  },
  {
    name: 'Belgian Mocha',
    description: 'Belgian chocolate with premium espresso and velvety foam',
    price: '400rs'
  },
  {
    name: 'Truffle Croissant',
    description: 'Butter-laminated croissant with black truffle and sea salt',
    price: '140rs'
  },
  {
    name: 'Classic Tiramisu',
    description: 'House-made with Italian mascarpone and organic cocoa',
    price: '120rs'
  },
  {
    name: 'Almond Butter Toast',
    description: 'Sourdough with artisan almond butter and honey drizzle',
    price: '110rs'
  }
];

export function MenuSection() {
  return (
    <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
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
            Signature Selection
          </p>
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-4 text-balance">
            Curated Menu
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Each item is carefully crafted with premium ingredients and attention to detail.
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-card border border-border p-6 hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-light text-foreground mb-2">
                {item.name}
              </h3>
              <p className="text-sm text-muted-foreground font-light mb-4 leading-relaxed">
                {item.description}
              </p>
              <p className="text-lg font-light text-accent">
                {item.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
