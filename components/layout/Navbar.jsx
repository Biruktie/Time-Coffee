"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-200 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`font-playfair text-3xl font-bold transition-colors ${
            scrolled ? "text-amber-800" : "text-amber-50 drop-shadow-md"
          }`}
        >
          Time{" "}
          <span className={scrolled ? "text-amber-600" : "text-amber-100"}>
            Coffee
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 font-inter">
          <Link
            href="/"
            className={`transition-colors ${
              scrolled
                ? "text-amber-800 hover:text-amber-600"
                : "text-amber-50 hover:text-amber-200"
            }`}
          >
            Home
          </Link>
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition-colors ${
                scrolled
                  ? "text-amber-800 hover:text-amber-600"
                  : "text-amber-50 hover:text-amber-200"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <button
            className={`px-5 py-2 rounded-lg font-medium transition-colors ${
              scrolled
                ? "bg-amber-700 text-white hover:bg-amber-800"
                : "bg-amber-100 text-amber-800 hover:bg-amber-200"
            }`}
          >
            Order Now
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-amber-50"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className={`md:hidden px-6 pb-6 space-y-4 transition-colors ${
            scrolled ? "bg-white shadow-xl" : "bg-amber-800"
          }`}
        >
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block ${
                scrolled
                  ? "text-amber-800 hover:text-amber-600"
                  : "text-white hover:text-amber-200"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <button
            className={`w-full py-2 rounded-lg font-medium ${
              scrolled
                ? "bg-amber-700 text-white hover:bg-amber-800"
                : "bg-amber-100 text-amber-800 hover:bg-amber-200"
            }`}
          >
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
}
