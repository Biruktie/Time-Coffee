"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import { events } from "@/lib/data/events";

export default function EventsPreview() {
  return (
    <section
      className="py-24 bg-gradient-to-b from-[#2c1810] to-[#1a0f0a]"
      id="events"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-amber-50 mb-4"
          >
            Upcoming Events
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-amber-100/70 text-lg max-w-2xl mx-auto"
          >
            Join us for special gatherings, workshops, and live performances
          </motion.p>
        </div>

        {/* Events Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="bg-gradient-to-b from-[#3c281e] to-[#2c1810] rounded-2xl overflow-hidden border border-amber-900/30 hover:border-amber-700/50 transition-all shadow-sm hover:shadow-lg">
                {/* Event Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={event.image || "/events/placeholder.jpg"}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* Featured Badge */}
                  {event.featured && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-amber-600 text-white text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                {/* Event Content */}
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-amber-50">
                        {event.title}
                      </h3>
                      <span className="px-3 py-1 bg-amber-700/30 text-amber-200 text-xs font-semibold rounded-full">
                        {event.price}
                      </span>
                    </div>
                    <p className="text-amber-100/70 mb-4 text-sm">
                      {event.description}
                    </p>
                    {/* Event Details */}
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="text-amber-400" size={16} />
                        <span className="text-amber-200">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="text-amber-400" size={16} />
                        <span className="text-amber-200">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="text-amber-400" size={16} />
                        <span className="text-amber-200">{event.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ y: -2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-6"
                  >
                    <Link
                      href={`/events/${event.id}`}
                      className="w-full inline-block text-center py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors"
                    >
                      RSVP Now
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors"
          >
            View All Events
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
