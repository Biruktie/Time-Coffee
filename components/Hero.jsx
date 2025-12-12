"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/hero/cafe-hero.jpg"
          alt="Time Coffee interior with warm lighting"
          fill
          className="object-cover brightness-[0.85]"
          priority
          sizes="100vw"
          quality={90}
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10" />
      </div>

      {/* CONTENT - Clean and minimal */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 md:px-8">
        {/* Small welcome text - subtle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-sm tracking-[0.3em] uppercase text-amber-200/80 mb-2 font-light"
        >
          Welcome to
        </motion.p>

        {/* Main Title - Clean and elegant */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl font-normal text-white mb-3"
        >
          Time <span className="text-amber-200">Coffee</span>
        </motion.h1>

        {/* Simple divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-px bg-amber-200/40 mb-6"
        />

        {/* Subtitle - Clean and concise */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-md text-lg text-white/90 font-light mb-8 leading-relaxed"
        >
          Fresh brews, warm ambiance, and handcrafted flavors in the heart of
          the city.
        </motion.p>

        {/* Simple buttons - Clean design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <button className="px-6 py-3 bg-amber-700 hover:bg-amber-600 text-white rounded-md transition-colors duration-200 font-medium">
            View Menu
          </button>
          <button className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-md transition-colors duration-200 font-medium border border-white/20">
            Order Online
          </button>
        </motion.div>

        {/* Simple info badges - Subtle and clean */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex items-center gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-amber-200">★</span>
              <span>4.8</span>
            </div>
            <div className="h-1 w-1 bg-white/40 rounded-full"></div>
            <div className="flex items-center gap-2">
              <span className="text-amber-200">🕗</span>
              <span>7AM-9PM</span>
            </div>
            <div className="h-1 w-1 bg-white/40 rounded-full"></div>
            <div className="flex items-center gap-2">
              <span className="text-amber-200">📍</span>
              <span>Downtown</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
