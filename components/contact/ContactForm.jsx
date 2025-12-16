// components/contact/ContactForm.jsx
"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#120805] to-[#1a0f0a]">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-amber-50 text-center mb-10"
        >
          Send Us a Message
        </motion.h2>

        <motion.form
          suppressHydrationWarning
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-6 bg-[#1a0f0a] p-8 rounded-2xl border border-amber-900/30"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <input
              suppressHydrationWarning
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-[#120805] border border-amber-900/30 rounded-lg text-amber-50 placeholder:text-amber-100/40 focus:outline-none focus:border-amber-600"
            />
            <input
              suppressHydrationWarning
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-[#120805] border border-amber-900/30 rounded-lg text-amber-50 placeholder:text-amber-100/40 focus:outline-none focus:border-amber-600"
            />
          </div>

          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full px-4 py-3 bg-[#120805] border border-amber-900/30 rounded-lg text-amber-50 placeholder:text-amber-100/40 focus:outline-none focus:border-amber-600"
          />

          <button
            type="submit"
            className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
