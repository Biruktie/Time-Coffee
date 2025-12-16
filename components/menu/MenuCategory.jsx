"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MenuCategory({ title, description, items }) {
  return (
    <section className="space-y-8">
      <header className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-2">
          {title}
        </h2>
        <p className="text-amber-100/70 text-lg">{description}</p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group bg-gradient-to-b from-[#3c281e] to-[#2c1810] rounded-2xl overflow-hidden border border-amber-900/30 hover:border-amber-700/50 transition-all"
          >
            {/* Image */}
            <div className="relative h-56">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-5 space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-sm text-amber-400/80 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-amber-50">
                    {item.name}
                  </h3>
                </div>
                <span className="text-amber-300 font-bold">{item.price}</span>
              </div>

              <p className="text-amber-100/70 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mt-2">
                {item.vegan && (
                  <span className="px-2 py-1 bg-emerald-800/50 text-emerald-300 text-xs font-semibold rounded-full">
                    Vegan
                  </span>
                )}
                {item.bestseller && (
                  <span className="px-2 py-1 bg-amber-600 text-white text-xs font-semibold rounded-full">
                    Bestseller
                  </span>
                )}
                {item.seasonal && (
                  <span className="px-2 py-1 bg-green-800/50 text-green-300 text-xs font-semibold rounded-full">
                    Seasonal
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
