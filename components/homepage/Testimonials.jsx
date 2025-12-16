"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#1a0f0a] to-[#2c1810]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-amber-900/20 border border-amber-800/30 mb-4"
          >
            <Quote className="text-amber-300" size={18} />
            <span className="text-amber-200 text-sm font-medium">
              Loved by Our Community
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-amber-50 mb-4"
          >
            Stories From Our Coffee Lovers
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-amber-100/70 text-lg max-w-2xl mx-auto"
          >
            Real experiences from people who make Time Coffee part of their
            daily ritual
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="bg-gradient-to-b from-[#3c281e] to-[#2c1810] p-7 rounded-2xl border border-amber-900/30 hover:border-amber-700/50 hover:shadow-xl hover:shadow-black/20 transition-all h-full flex flex-col justify-between">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-amber-400 fill-amber-400"
                      size={18}
                    />
                  ))}
                </div>

                {/* Quote Icon */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, ease: "easeOut" }}
                >
                  <Quote className="text-amber-400/30 mb-4" size={24} />
                </motion.div>

                {/* Testimonial Text */}
                <p className="text-amber-100/80 mb-6 leading-relaxed italic">
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="pt-5 border-t border-amber-900/30">
                  <p className="font-semibold text-amber-50">
                    {testimonial.author}
                  </p>
                  <p className="text-amber-300/50 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-12 border-t border-amber-900/30"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 bg-gradient-to-r from-amber-900/20 to-amber-800/10 px-6 py-4 rounded-2xl border border-amber-800/30">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-300">4.8</div>
              <div className="flex justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-amber-400 fill-amber-400"
                    size={16}
                  />
                ))}
              </div>
            </div>

            <div className="h-px sm:h-10 sm:w-px w-full bg-amber-800/30 sm:mx-2"></div>

            <div className="text-center sm:text-left">
              <div className="text-2xl font-bold text-amber-50">240+</div>
              <div className="text-amber-200/70 text-sm">Verified Reviews</div>
            </div>

            <div className="h-px sm:h-10 sm:w-px w-full bg-amber-800/30 sm:mx-2"></div>

            <div className="text-center sm:text-left">
              <div className="text-2xl font-bold text-amber-50">5</div>
              <div className="text-amber-200/70 text-sm">Years of Craft</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
