"use client";
import { MapPin, Clock, Phone } from "lucide-react";

export default function LocationHours() {
  return (
    <section className="py-20 bg-[#2c1810]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Map/Info */}
          <div>
            <h2 className="text-3xl font-bold text-amber-50 mb-6">Visit Us</h2>
            <div className="space-y-4 text-amber-100">
              <div className="flex items-start gap-4">
                <MapPin className="text-amber-400 mt-1" />
                <div>
                  <p className="font-medium">123 Coffee Street</p>
                  <p className="text-amber-200/70">Downtown, City 10001</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-amber-400 mt-1" />
                <div>
                  <p className="font-medium">Hours</p>
                  <div className="text-amber-200/70 space-y-1">
                    <p>Mon-Fri: 7AM - 9PM</p>
                    <p>Sat-Sun: 8AM - 10PM</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-amber-400 mt-1" />
                <div>
                  <p className="font-medium">Contact</p>
                  <p className="text-amber-200/70">(123) 456-7890</p>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Map Placeholder */}
          <div className="h-64 bg-gradient-to-br from-amber-900/30 to-amber-800/20 rounded-2xl border border-amber-800/30 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="text-amber-400 mx-auto mb-2" size={32} />
              <p className="text-amber-200">Map location</p>
              <p className="text-amber-200/70 text-sm">
                (Add Google Maps embed)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
