"use client";

import { motion } from "framer-motion";
import { Mail, Check } from "lucide-react";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubscribed(true);
    setEmail("");
    setLoading(false);

    // Reset after 3 seconds
    setTimeout(() => {
      setSubscribed(false);
    }, 3000);
  };

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-[#3c281e] to-[#2c1810] rounded-3xl p-8 md:p-12 border border-amber-900/30">
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-700 to-amber-900 mb-6"
            >
              <Mail className="text-amber-50" size={28} />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-amber-50 mb-4"
            >
              Stay in the Loop
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-amber-100/70 text-lg max-w-xl mx-auto"
            >
              Subscribe to our newsletter for weekly specials, events, and
              exclusive offers
            </motion.p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                suppressHydrationWarning
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-5 py-3 bg-[#2c1810] border border-amber-800/50 rounded-lg text-amber-50 placeholder-amber-300/50 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                required
                disabled={loading || subscribed}
              />
              <button
                type="submit"
                disabled={loading || subscribed || !email}
                className={`px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                  subscribed
                    ? "bg-green-600 text-white"
                    : "bg-amber-600 hover:bg-amber-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                }`}
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Subscribing...
                  </>
                ) : subscribed ? (
                  <>
                    <Check size={18} />
                    Subscribed!
                  </>
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>

            <p className="text-amber-300/50 text-sm text-center mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </motion.form>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-10 border-t border-amber-900/30"
          >
            {[
              { icon: "🎁", text: "Weekly Specials" },
              { icon: "📅", text: "Event Updates" },
              { icon: "💝", text: "Birthday Offers" },
              { icon: "☕", text: "Brewing Tips" },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl mb-2">{benefit.icon}</div>
                <div className="text-amber-200/80 text-sm">{benefit.text}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
