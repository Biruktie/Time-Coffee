"use client";

import {
  Coffee,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

/* ✅ Stable references outside component */
const socialIcons = [Instagram, Facebook, Twitter];

export default function Footer() {
  /* ✅ No state, deterministic value */
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Explore",
      links: [
        { name: "Menu", href: "/menu" },
        { name: "Locations", href: "/locations" },
        { name: "Gallery", href: "/gallery" },
        { name: "Events", href: "/events" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#120805] text-amber-200 pt-24 pb-10 shadow-[inset_0_30px_60px_rgba(0,0,0,0.85)]">
      {/* Top glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-900/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 bg-amber-900/70 rounded-xl">
                <Coffee className="text-amber-300" size={26} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-amber-50">Time Coffee</h2>
                <p className="text-xs text-amber-300/80">
                  Crafting moments since 2015
                </p>
              </div>
            </div>

            <p className="text-sm text-amber-200/90 mb-6 leading-relaxed">
              Premium beans, warm spaces, and unforgettable coffee experiences —
              brewed fresh every day.
            </p>

            <div className="flex gap-4">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="p-2 rounded-lg bg-amber-900/60 hover:bg-amber-900/80 transform hover:-translate-y-1 transition duration-150 ease-out"
                >
                  <Icon size={20} className="text-amber-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-amber-50 mb-5 tracking-wide">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-amber-200/80 hover:text-amber-300 transition-colors duration-150"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-amber-50 mb-5">Contact Us</h3>

            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-amber-400 mt-0.5" />
                <span className="text-amber-200/80 leading-relaxed">
                  123 Coffee Street
                  <br />
                  Downtown, City 10001
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-400" />
                <span className="text-amber-200/80">(123) 456-7890</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-400" />
                <span className="text-amber-200/80">hello@timecoffee.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-amber-900/40 my-10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <p className="text-amber-300/50">
            © {currentYear} Time Coffee. All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-amber-300/50">
            Crafted with <Coffee className="w-4 h-4 text-amber-400" /> by
            passionate brewers
          </p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-amber-300 transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-amber-300 transition">
              Terms
            </Link>
            <Link href="/sitemap" className="hover:text-amber-300 transition">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
