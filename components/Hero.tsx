"use client";

import Link from "next/link";
import { ArrowRight, Star, CheckCircle2 } from "lucide-react";

const badges = [
  "Web Development",
  "Digital Marketing",
  "SEO Optimization",
  "Mobile Apps",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900"
    >
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,179,237,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500 rounded-full filter blur-3xl opacity-15 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-800 rounded-full filter blur-3xl opacity-10" />

      <div className="container-max relative z-10 px-6 md:px-10 lg:px-16 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 text-white/90 text-sm font-medium">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span>Winning the trust from worldwide</span>
          </div>

          {/* Main headline */}
          <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-tight text-white mb-6">
            We Build{" "}
            <span className="relative">
              <span className="gradient-text">Digital Futures</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 8 Q75 2 150 8 Q225 14 300 8"
                  stroke="url(#underline-gradient)"
                  strokeWidth="2.5"
                  fill="none"
                />
                <defs>
                  <linearGradient id="underline-gradient" x1="0" y1="0" x2="300" y2="0">
                    <stop offset="0%" stopColor="#1a56db" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            for All Businesses
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-blue-200/80 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            From stunning websites to powerful digital marketing strategies —
            Complete Web Solutions Nepal delivers results that grow your business
            in today's competitive online world.
          </p>

          {/* Service badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 backdrop-blur-sm text-white/85 text-sm px-4 py-1.5 rounded-full"
              >
                <CheckCircle2 size={13} className="text-cyan-400" />
                {badge}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="group btn-primary flex items-center gap-2 text-base"
            >
              Start Your Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#services"
              className="btn-outline border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-base"
            >
              Explore Services
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto border-t border-white/10 pt-12">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support Available" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-display font-extrabold text-3xl text-white">
                  {value}
                </div>
                <div className="text-xs text-blue-300/70 mt-1 tracking-wide">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  );
}
