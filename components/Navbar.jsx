"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100); // adjust threshold as needed
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Menu", "About", "Gallery", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className={`font-playfair text-3xl font-bold transition-colors duration-300 ${
            scrolled
              ? "text-amber-800 drop-shadow-none"
              : "text-amber-50 drop-shadow-md"
          }`}
        >
          Time{" "}
          <span className={scrolled ? "text-amber-600" : "text-amber-100"}>
            Coffee
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8 font-inter">
          {links.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`transition-colors duration-300 ${
                scrolled
                  ? "text-amber-800 hover:text-amber-600"
                  : "text-amber-50 hover:text-amber-200 drop-shadow-sm"
              }`}
            >
              {item}
            </Link>
          ))}

          <button
            className={`px-5 py-2 rounded-lg transition-shadow duration-300 shadow-md hover:shadow-lg ${
              scrolled
                ? "bg-amber-700 text-white hover:bg-amber-800"
                : "bg-amber-100 text-amber-800 hover:bg-amber-200"
            }`}
          >
            Order Now
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div
          className={`md:hidden px-4 pb-4 space-y-4 rounded-b-lg transition-colors duration-300 ${
            scrolled
              ? "bg-white shadow-xl"
              : "bg-amber-800/95 backdrop-blur-sm shadow-lg"
          }`}
        >
          {links.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`block transition-colors duration-300 ${
                scrolled
                  ? "text-amber-800 hover:text-amber-600"
                  : "text-white hover:text-amber-200"
              }`}
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}

          <button
            className={`w-full py-2 rounded-lg transition-shadow duration-300 shadow-md hover:shadow-lg ${
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
