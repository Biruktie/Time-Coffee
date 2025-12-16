// components/contact/ContactInfo.jsx
"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const info = [
  {
    icon: MapPin,
    title: "Our Location",
    text: "Bole Road, Addis Ababa, Ethiopia",
  },
  {
    icon: Phone,
    title: "Phone",
    text: "+251 9 00 00 0000",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    text: "Mon – Sun: 7:00 AM – 9:00 PM",
  },
];

export default function ContactInfo() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {info.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#1a0f0a] rounded-2xl p-6 border border-amber-900/30 text-center"
          >
            <item.icon className="text-amber-400 mx-auto mb-4" size={32} />
            <h3 className="text-lg font-semibold text-amber-50 mb-2">
              {item.title}
            </h3>
            <p className="text-amber-100/70">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
