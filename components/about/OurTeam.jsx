// components/about/OurTeam.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  { name: "Eleni Bekele", role: "Head Barista", image: "/about/team1.jpg" },
  { name: "Samuel Tesfaye", role: "Pastry Chef", image: "/about/team2.jpg" },
  { name: "Mariam Alem", role: "Manager", image: "/about/team3.jpg" },
];

export default function OurTeam() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#1a0f0a] to-[#2c1810]">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-amber-50 text-center mb-12"
      >
        Meet Our Team
      </motion.h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group bg-[#3c281e] rounded-2xl overflow-hidden border border-amber-900/30 hover:border-amber-700/50 transition-all"
          >
            <div className="relative h-72">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-amber-50">{member.name}</h3>
              <p className="text-amber-200/80">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
