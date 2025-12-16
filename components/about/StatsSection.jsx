// components/about/StatsSection.jsx
"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Years Serving" },
  { value: "240+", label: "Happy Customers" },
  { value: "12", label: "Specialty Coffees" },
];

export default function StatsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-center gap-12 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <p className="text-4xl md:text-5xl font-bold text-amber-300">
              {stat.value}
            </p>
            <p className="text-amber-100/70 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
