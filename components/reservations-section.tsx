'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check } from 'lucide-react';

export function ReservationsSection() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: '2',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setShowSuccess(true);
    console.log('[v0] Reservation submitted:', formData);
    setFormData({ name: '', date: '', time: '', guests: '2', notes: '' });
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="reservations" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-widest text-muted-foreground uppercase mb-4">
            Book Your Visit
          </p>
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-4 text-balance">
            Make a Reservation
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Secure your perfect table at Aurum Café
          </p>
        </motion.div>

        {/* Success Message */}
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 p-4 bg-accent/10 border border-accent rounded-lg flex items-center gap-3"
          >
            <Check size={20} className="text-accent" />
            <p className="text-sm font-light text-foreground">
              Reservation request sent successfully.
            </p>
          </motion.div>
        )}

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-light text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                required
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer hover:border-foreground/50 transition-colors duration-200"
              />
            </div>

            <div>
              <label className="block text-sm font-light text-foreground mb-2">
                Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm font-light text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer hover:border-foreground/50 transition-colors duration-200"
              />
            </div>

            <div>
              <label className="block text-sm font-light text-foreground mb-2">
                Time
              </label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                required
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm font-light text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer hover:border-foreground/50 transition-colors duration-200"
              />
            </div>

            <div>
              <label className="block text-sm font-light text-foreground mb-2">
                Guests
              </label>
              <select
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm font-light text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer hover:border-foreground/50 transition-colors duration-200"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-light text-foreground mb-2">
              Special Requests
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Any special requests or dietary requirements?"
              rows={4}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none cursor-pointer hover:border-foreground/50 transition-colors duration-200"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitted}
            className="w-full px-8 py-3 bg-primary text-background font-light rounded-lg hover:bg-primary/90 transition-colors duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitted ? 'Sending...' : 'Complete Reservation'}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
