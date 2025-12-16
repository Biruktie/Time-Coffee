"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export default function DietaryInfo() {
  const info = [
    { icon: <Leaf size={20} />, text: "Vegan Options Available" },
    { icon: <Leaf size={20} />, text: "Gluten-Free Options" },
    { icon: <Leaf size={20} />, text: "Nut-Free Choices" },
  ];

  return (
    <section className="py-12 bg-[#1a0f0a] rounded-2xl p-6 text-amber-50">
      <header className="text-center mb-6">
        <h3 className="text-2xl font-bold">Dietary Information</h3>
      </header>
      <div className="grid sm:grid-cols-3 gap-6 text-center">
        {info.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="bg-amber-900/30 p-4 rounded-full">{item.icon}</div>
            <p className="text-amber-100/80">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
