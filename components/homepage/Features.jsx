"use client";

import { motion } from "framer-motion";
import { Cake, Star, Bean, Thermometer } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const features = [
  {
    icon: Bean,
    title: "Ethiopian Specialty",
    description: "Single-origin beans from the birthplace of coffee",
  },
  {
    icon: Thermometer,
    title: "Perfect Temperature",
    description: "Expertly brewed at the ideal temperature",
  },
  {
    icon: Cake,
    title: "House-made Pastries",
    description: "Freshly baked daily using local ingredients",
  },
  {
    icon: Star,
    title: "Cozy Atmosphere",
    description: "Designed for comfort and conversation",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-[#2c1810] to-[#1a0f0a]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-amber-50 mb-4">
            What Makes Us Special
          </h2>
          <p className="text-lg text-amber-100/75 max-w-2xl mx-auto">
            Discover the elements that define the Time Coffee experience
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map(({ icon: Icon, title, description }) => (
            <motion.div key={title} variants={fadeUp} className="group h-full">
              <div className="h-full rounded-2xl p-7 bg-gradient-to-b from-[#3c281e] to-[#2c1810] border border-amber-900/30 transition-all duration-200 hover:border-amber-700/50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                {/* Icon */}
                <div className="mb-5 w-14 h-14 rounded-xl bg-amber-900/30 flex items-center justify-center transition-colors group-hover:bg-amber-900/40">
                  <Icon size={26} className="text-amber-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-amber-50 mb-3">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-amber-100/70">
                  {description}
                </p>

                {/* Accent */}
                <div className="mt-6 h-0.5 w-10 bg-gradient-to-r from-amber-600/80 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="flex justify-center mt-20">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-700/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
