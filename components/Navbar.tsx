"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const transparent = !scrolled && !isOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-white/97 backdrop-blur-md shadow-lg shadow-blue-900/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-600/30 group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-sm">CW</span>
            </div>
            <div>
              <div className={`font-display font-extrabold text-base leading-none transition-colors ${transparent ? "text-white" : "text-slate-900"}`}>
                <span className={transparent ? "text-cyan-300" : "text-blue-700"}>CWS</span> Nepal
              </div>
              <div className={`text-[9px] leading-none mt-0.5 tracking-wider uppercase transition-colors ${transparent ? "text-white/50" : "text-slate-400"}`}>
                Complete Web Solutions
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`nav-link text-sm font-semibold transition-colors ${
                  transparent
                    ? "text-white/90 hover:text-white"
                    : "text-slate-700 hover:text-blue-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+9779704738463"
              className={`text-sm font-semibold transition-colors ${
                transparent ? "text-white/80 hover:text-white" : "text-blue-700 hover:text-blue-800"
              }`}
            >
              +977-970-473-8463
            </a>
            <Link
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all shadow-lg hover:shadow-blue-600/30"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              transparent
                ? "text-white hover:bg-white/10"
                : "text-slate-700 hover:bg-blue-50"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-3 pb-4 border-t border-slate-100 pt-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2.5 px-3 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-700 font-semibold text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <a
                href="tel:+9779704738463"
                className="text-center py-2.5 px-6 border-2 border-blue-600 text-blue-600 rounded-full font-semibold text-sm hover:bg-blue-50 transition-colors"
              >
                📞 +977-970-473-8463
              </a>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-2.5 rounded-full transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}