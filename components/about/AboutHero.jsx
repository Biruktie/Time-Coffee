// components/about/AboutHero.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-center px-6">
      <Image
        src="/about/hero.jpg"
        alt="Cafe interior"
        fill
        className="object-cover brightness-[0.65]"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
          About <span className="text-amber-300">Time Coffee</span>
        </h1>
        <p className="text-lg md:text-xl text-amber-100/80">
          Where every cup tells a story – handcrafted flavors, warm ambiance,
          and a passion for coffee.
        </p>
      </motion.div>
    </section>
  );
}
