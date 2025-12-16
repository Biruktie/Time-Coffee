// components/about/AboutCTA.jsx
"use client";

import { motion } from "framer-motion";

export default function AboutCTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#1a0f0a] to-[#2c1810] text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-amber-50 mb-6"
      >
        Visit Us Today
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-amber-100/80 mb-8 max-w-xl mx-auto"
      >
        Come enjoy a freshly brewed cup, delicious pastries, and a cozy
        atmosphere at our cafe.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex justify-center gap-4 flex-wrap"
      >
        <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors">
          Explore Menu
        </button>
        <button className="px-8 py-3 bg-amber-900/30 hover:bg-amber-900/50 text-amber-200 border border-amber-800/30 rounded-lg font-semibold transition-colors">
          Find Us
        </button>
      </motion.div>
    </section>
  );
}
