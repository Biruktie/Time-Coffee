"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/hero/cafe-hero.jpg"
          alt="Time Coffee interior with warm lighting"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover brightness-[0.82]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-[#2c1810]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-3 text-xs tracking-[0.35em] uppercase text-amber-200/80"
        >
          Welcome to
        </motion.p>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl text-white font-normal mb-4"
        >
          Time <span className="text-amber-200">Coffee</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 120, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="h-px bg-amber-200/40 mb-6"
        />

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.35 }}
          className="max-w-md text-lg text-white/85 font-light leading-relaxed mb-10"
        >
          Fresh brews, warm ambiance, and handcrafted flavors in the heart of
          the city.
        </motion.p>

        {/* Actions */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/menu"
            className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors"
          >
            View Full Menu
          </Link>

          <button className="px-7 py-3 rounded-md bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-medium transition-colors duration-200">
            Order Online
          </button>
        </motion.div>

        {/* Info strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex items-center gap-6 text-sm text-white/70">
            <span>
              <span className="text-amber-200">★</span> 4.8
            </span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>
              <span className="text-amber-200">🕗</span> 7AM–9PM
            </span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>
              <span className="text-amber-200">📍</span> Downtown
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
