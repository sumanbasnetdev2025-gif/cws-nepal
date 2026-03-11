"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-blue-900/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-max px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-600/30 group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-sm font-display">CW</span>
            </div>
            <div>
              <div className="font-display font-800 text-base leading-none text-slate-900">
                <span className="text-blue-700">CWS</span> Nepal
              </div>
              <div className="text-[9px] text-slate-500 leading-none mt-0.5 tracking-wider uppercase">
                Complete Web Solutions
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="nav-link text-sm font-medium text-slate-700 hover:text-blue-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+9779704738463"
              className="text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors"
            >
              +977-970-473-8463
            </a>
            <Link
              href="#contact"
              className="btn-primary text-sm py-2.5 px-6"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-blue-50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-100 pt-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2.5 px-3 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-700 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <a
                href="tel:+9779704738463"
                className="text-center py-2.5 px-6 border-2 border-blue-700 text-blue-700 rounded-full font-semibold text-sm"
              >
                Call Now
              </a>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-center btn-primary text-sm py-2.5"
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
