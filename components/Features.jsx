"use client";

import { motion } from "framer-motion";
import { Coffee, CupSoda, Cake, Star, Bean, Thermometer } from "lucide-react";

const features = [
  {
    icon: <Bean className="text-amber-300" size={28} />,
    title: "Ethiopian Specialty",
    description: "Single-origin beans from the birthplace of coffee",
  },
  {
    icon: <Thermometer className="text-amber-300" size={28} />,
    title: "Perfect Temperature",
    description: "Expertly brewed at the ideal temperature",
  },
  {
    icon: <Cake className="text-amber-300" size={28} />,
    title: "House-made Pastries",
    description: "Freshly baked daily using local ingredients",
  },
  {
    icon: <Star className="text-amber-300" size={28} />,
    title: "Cozy Atmosphere",
    description: "Designed for comfort and conversation",
  },
];

export default function Features() {
  return (
    <section
      className="py-24 bg-gradient-to-b from-[#754d3e] to-[#2c1810]"
      id="features"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-amber-50 mb-4"
          >
            What Makes Us Special
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-amber-100/80 text-lg max-w-2xl mx-auto"
          >
            Discover the elements that create the Time Coffee experience
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-b from-[#3c281e] to-[#2c1810] p-7 rounded-2xl border border-amber-900/30 hover:border-amber-700/50 transition-all h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-amber-900/20 flex items-center justify-center mb-5 group-hover:bg-amber-900/30 transition-colors">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-amber-50 mb-3">
                  {feature.title}
                </h3>
                <p className="text-amber-100/70 leading-relaxed">
                  {feature.description}
                </p>

                {/* Accent line */}
                <div className="w-10 h-0.5 bg-gradient-to-r from-amber-600 to-transparent mt-5 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple divider */}
        <div className="flex justify-center mt-16">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-700/30 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
