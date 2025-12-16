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
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  const isScrolled = mounted && scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-200 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className={`font-playfair text-3xl font-bold transition-colors ${
            isScrolled ? "text-amber-800" : "text-amber-50 drop-shadow-md"
          }`}
        >
          Time{" "}
          <span className={isScrolled ? "text-amber-600" : "text-amber-100"}>
            Coffee
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8 font-inter">
          <Link
            href="/"
            className={`transition-colors ${
              isScrolled
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
                isScrolled
                  ? "text-amber-800 hover:text-amber-600"
                  : "text-amber-50 hover:text-amber-200"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <button
            className={`px-5 py-2 rounded-lg font-medium transition-colors ${
              isScrolled
                ? "bg-amber-700 text-white hover:bg-amber-800"
                : "bg-amber-100 text-amber-800 hover:bg-amber-200"
            }`}
          >
            Order Now
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-amber-50"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mounted && open && (
        <div
          className={`md:hidden px-6 pb-6 space-y-4 transition-colors ${
            isScrolled ? "bg-white shadow-xl" : "bg-amber-800"
          }`}
        >
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block ${
                isScrolled
                  ? "text-amber-800 hover:text-amber-600"
                  : "text-white hover:text-amber-200"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <button
            className={`w-full py-2 rounded-lg font-medium ${
              isScrolled
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
