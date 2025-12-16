"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MenuHero() {
  return (
    <section className="relative h-[60vh] w-full">
      <Image
        src="/menu/menu-hero.jpg"
        alt="Cafe Menu Hero"
        fill
        className="object-cover brightness-[0.7]"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-serif font-bold text-amber-200 text-center"
        >
          Our Full Menu
        </motion.h1>
      </div>
    </section>
  );
}
