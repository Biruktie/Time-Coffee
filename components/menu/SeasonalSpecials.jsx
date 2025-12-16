"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const seasonalItems = [
  {
    name: "Pumpkin Spice Latte",
    description: "Limited-time autumn favorite with warm spices.",
    image: "/menu/pumpkin-spice.jpg",
    price: "$5.50",
  },
  {
    name: "Gingerbread Cookie",
    description: "Festive cookie with rich ginger flavor.",
    image: "/menu/gingerbread-cookie.jpg",
    price: "$3.25",
  },
];

export default function SeasonalSpecials() {
  return (
    <section className="py-12 space-y-8 bg-[#2c1810]">
      <header className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-amber-50">
          Seasonal Specials
        </h3>
        <p className="text-amber-100/70 text-sm md:text-lg">
          Try our limited-time seasonal favorites
        </p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {seasonalItems.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-gradient-to-b from-[#3c281e] to-[#27130c] rounded-2xl overflow-hidden border border-amber-900/30 hover:border-amber-700/50 transition-all"
          >
            <div className="relative h-72">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-bold text-amber-50">{item.name}</h4>
                <span className="text-amber-300 font-bold">{item.price}</span>
              </div>
              <p className="text-amber-100/70 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
