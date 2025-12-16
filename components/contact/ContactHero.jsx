"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/contact/cafe-exterior-2.jpg"
        alt="Exterior of Time Coffee shop"
        fill
        priority
        className="object-cover"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl"
        >
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[#120806] mb-4">
            Get in Touch
          </h1>
          <p className="text-amber-100/80 text-sm md:text-lg">
            Visit our café, ask a question, or just say hello — we’d love to
            hear from you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
