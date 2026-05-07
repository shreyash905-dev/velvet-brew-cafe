'use client';

import { motion } from 'framer-motion';
import { Instagram, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-border py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-light tracking-widest text-foreground mb-4">
              AURUM CAFÉ
            </h3>
            <p className="text-sm font-light text-muted-foreground leading-relaxed">
              A refined café experience crafted for those who value premium quality and quiet elegance.
            </p>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-light text-foreground uppercase tracking-widest mb-4">
              Hours
            </h4>
            <div className="space-y-2 text-sm font-light text-muted-foreground">
              <div className="flex items-center gap-2 cursor-pointer hover:text-foreground transition-colors">
                <Clock size={16} />
                <div>
                  <p>Mon - Fri: 7AM - 7PM</p>
                  <p>Sat - Sun: 8AM - 8PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-light text-foreground uppercase tracking-widest mb-4">
              Location
            </h4>
            <div className="flex items-start gap-2 text-sm font-light text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
              <MapPin size={16} className="mt-0.5 flex-shrink-0" />
              <div>
                <p>123 Luxury Avenue</p>
                <p>San Francisco, CA 94102</p>
                <p>United States</p>
              </div>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-light text-foreground uppercase tracking-widest mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-2 text-sm font-light text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                <Instagram size={16} />
                Instagram
              </a>
              <a href="#" className="flex items-center gap-2 text-sm font-light text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                <Mail size={16} />
                hello@aurum.cafe
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 text-center text-sm font-light text-muted-foreground"
        >
          <p>&copy; {new Date().getFullYear()} Aurum Café. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
