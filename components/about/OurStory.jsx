// components/about/OurStory.jsx
"use client";

import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-amber-50 text-center mb-6"
      >
        Our Story
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-amber-100/80 text-center text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
      >
        Founded with love for coffee and community, Time Coffee brings together
        the finest Ethiopian beans, freshly baked pastries, and a cozy space
        where friends and strangers alike feel at home. Every cup is a
        celebration of craftsmanship and flavor.
      </motion.p>
    </section>
  );
}
