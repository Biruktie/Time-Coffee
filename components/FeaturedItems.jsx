"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const featuredItems = [
  {
    name: "Signature Latte",
    description:
      "Our signature espresso with creamy steamed milk and house-made vanilla syrup.",
    image: "/menu/caramel-latte.jpg",
    price: "$4.95",
    category: "Coffee",
    bestseller: true,
  },
  {
    name: "Chocolate Croissant",
    description: "Flaky, buttery pastry filled with premium Belgian chocolate.",
    image: "/menu/chocolate-croissant.jpg",
    price: "$3.75",
    category: "Pastry",
    bestseller: true,
  },
  {
    name: "Cold Brew Deluxe",
    description:
      "18-hour steeped cold brew with notes of chocolate and caramel, served over artisanal ice.",
    image: "/menu/cold-brew.jpg",
    price: "$5.25",
    category: "Cold Brew",
    seasonal: true,
  },
  {
    name: "Matcha Latte",
    description: "Ceremonial-grade matcha whisked with creamy oat milk.",
    image: "/menu/matcha-latte.jpg",
    price: "$5.50",
    category: "Tea",
    vegan: true,
  },
  {
    name: "Avocado Toast",
    description:
      "Sourdough toast with smashed avocado, cherry tomatoes, and microgreens.",
    image: "/menu/avocado-toast.jpg",
    price: "$8.95",
    category: "Food",
    vegan: true,
  },
  {
    name: "Cinnamon Roll",
    description: "Freshly baked cinnamon roll with cream cheese frosting.",
    image: "/menu/cinnamon-roll.jpg",
    price: "$4.25",
    category: "Pastry",
    bestseller: true,
  },
];

export default function FeaturedItems() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + featuredItems.length) % featuredItems.length
    );
  };

  return (
    <section
      className="py-24 bg-gradient-to-b from-[#2c1810] to-[#1a0f0a]"
      id="menu"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-amber-900/20 border border-amber-800/30 mb-4"
          >
            <span className="text-amber-300 text-sm font-medium">🍵</span>
            <span className="text-amber-200 text-sm">Customer Favorites</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-amber-50 mb-4"
          >
            Time Coffee Favorites
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-amber-100/70 text-lg max-w-2xl mx-auto"
          >
            Discover the most-loved items from our menu, carefully crafted by
            our baristas
          </motion.p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {featuredItems.slice(0, 3).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-gradient-to-b from-[#3c281e] to-[#2c1810] rounded-2xl overflow-hidden border border-amber-900/30 hover:border-amber-700/50 transition-all h-full">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {item.bestseller && (
                      <span className="px-3 py-1 bg-amber-600 text-white text-xs font-semibold rounded-full">
                        Bestseller
                      </span>
                    )}
                    {item.seasonal && (
                      <span className="px-3 py-1 bg-green-800/50 text-green-300 text-xs font-semibold rounded-full">
                        Seasonal
                      </span>
                    )}
                    {item.vegan && (
                      <span className="px-3 py-1 bg-emerald-800/50 text-emerald-300 text-xs font-semibold rounded-full">
                        Vegan
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="absolute top-4 right-4">
                    <span className="text-2xl font-bold text-amber-300">
                      {item.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-sm text-amber-400/80 uppercase tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-bold text-amber-50 mt-1">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-amber-100/70 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-amber-900/30">
                    <button className="text-amber-300 hover:text-amber-200 text-sm font-medium group/btn flex items-center gap-2">
                      Add to order
                      <span className="group-hover/btn:translate-x-1 transition-transform">
                        →
                      </span>
                    </button>
                    <span className="text-xs text-amber-400/60">
                      Customizable
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tablet Grid (2 columns) */}
        <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6">
          {featuredItems.slice(0, 4).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-b from-[#3c281e] to-[#2c1810] rounded-2xl overflow-hidden border border-amber-900/30 hover:border-amber-700/50 transition-all h-full">
                <div className="relative h-56">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-amber-50 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-amber-100/70 text-sm mb-3">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-amber-300">
                      {item.price}
                    </span>
                    <button className="text-amber-300 hover:text-amber-200 text-sm font-medium">
                      Order →
                    </button>
                  </div>
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
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredItems.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="bg-gradient-to-b from-[#3c281e] to-[#2c1810] rounded-2xl overflow-hidden border border-amber-900/30">
                    <div className="relative h-64">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="text-lg font-bold text-amber-300">
                          {item.price}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-amber-50 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-amber-100/70 text-sm mb-4">
                        {item.description}
                      </p>
                      <button className="w-full py-3 bg-amber-800/30 hover:bg-amber-800/50 text-amber-200 rounded-lg font-medium transition-colors">
                        Add to Order
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-amber-900/30 border border-amber-800/30 text-amber-300 hover:bg-amber-900/50 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {featuredItems.slice(0, 4).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-amber-400 w-6"
                      : "bg-amber-900/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-amber-900/30 border border-amber-800/30 text-amber-300 hover:bg-amber-900/50 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-12 border-t border-amber-900/30"
        >
          <p className="text-amber-100/70 mb-6 max-w-md mx-auto">
            Explore our full menu featuring specialty coffees, teas, pastries,
            and light bites
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors">
              View Full Menu
            </button>
            <button className="px-8 py-3 bg-amber-900/30 hover:bg-amber-900/50 text-amber-200 border border-amber-800/30 rounded-lg font-semibold transition-colors">
              Order Online
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
