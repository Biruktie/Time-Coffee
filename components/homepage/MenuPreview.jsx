"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const featuredItems = [
  {
    name: "Signature Latte",
    description:
      "Our signature espresso with creamy steamed milk and house-made vanilla syrup.",
    image: "/menu/caramel-latte.jpg",
    price: "$4.95",
    category: "Coffee",
    tag: "Bestseller",
  },
  {
    name: "Chocolate Croissant",
    description: "Flaky, buttery pastry filled with premium Belgian chocolate.",
    image: "/menu/chocolate-croissant.jpg",
    price: "$3.75",
    category: "Pastry",
    tag: "Bestseller",
  },
  {
    name: "Cold Brew Deluxe",
    description:
      "18-hour steeped cold brew with notes of chocolate and caramel.",
    image: "/menu/cold-brew.jpg",
    price: "$5.25",
    category: "Cold Brew",
    tag: "Seasonal",
  },
];

export default function FeaturedItems() {
  const [index, setIndex] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-b from-[#1a0f0a] to-[#120805]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-amber-900/30 border border-amber-800/30 text-sm text-amber-300">
            Customer Favorites
          </span>
          <h2 className="text-4xl font-bold text-amber-50 mb-4">
            Time Coffee Favorites
          </h2>
          <p className="text-lg text-amber-100/70 max-w-2xl mx-auto">
            Our most-loved menu items, crafted daily by expert baristas.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <motion.div
              key={item.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#3c281e] to-[#2c1810] border border-amber-900/30 transition-all duration-200 hover:border-amber-700/50 hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
                {/* Image */}
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Tag */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs bg-amber-600 text-white font-semibold">
                    {item.tag}
                  </span>

                  {/* Price */}
                  <span className="absolute top-4 right-4 text-xl font-bold text-amber-300">
                    {item.price}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs uppercase tracking-wider text-amber-400/80">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold text-amber-50 mt-1 mb-3">
                    {item.name}
                  </h3>
                  <p className="text-sm text-amber-100/70 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <button className="text-sm font-medium text-amber-300 hover:text-amber-200 transition-colors">
                    Add to order →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {featuredItems.map((item) => (
                <div key={item.name} className="w-full shrink-0 px-2">
                  <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-[#3c281e] to-[#2c1810] border border-amber-900/30">
                    <div className="relative h-64">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <span className="absolute top-4 right-4 text-lg font-bold text-amber-300">
                        {item.price}
                      </span>
                    </div>

                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-amber-50 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-sm text-amber-100/70 mb-4">
                        {item.description}
                      </p>
                      <button className="w-full py-3 rounded-lg bg-amber-800/40 hover:bg-amber-800/60 text-amber-200 transition-colors">
                        Add to Order
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setIndex((i) => Math.max(i - 1, 0))}
              className="p-2 rounded-full bg-amber-900/40 text-amber-300"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() =>
                setIndex((i) => Math.min(i + 1, featuredItems.length - 1))
              }
              className="p-2 rounded-full bg-amber-900/40 text-amber-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
