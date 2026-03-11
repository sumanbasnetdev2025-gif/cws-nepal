"use client";

import { CheckCircle2, Award, Users, Target, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results-Focused",
    desc: "Every strategy is built around measurable outcomes for your business.",
  },
  {
    icon: Users,
    title: "Client-First",
    desc: "Your success is our success. We treat every project like our own.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "On-time delivery without compromising on quality or attention to detail.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "We hold ourselves to the highest standards in everything we create.",
  },
];

const whyUs = [
  "Deep understanding of the Nepalese market",
  "End-to-end digital solutions under one roof",
  "Transparent communication throughout",
  "Post-launch support & maintenance",
  "Affordable pricing for every budget",
  "Modern tech stack & best practices",
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <span className="inline-block text-blue-700 font-semibold text-sm tracking-widest uppercase mb-3 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
              About Us
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 mb-6 leading-tight">
              Nepal's Trusted
              <br />
              <span className="gradient-text">Digital Partner</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              <strong>Complete Web Solutions Nepal (CWS Nepal)</strong> is a full-service
              digital agency based in Kathmandu. We help businesses of all sizes
              establish a powerful online presence and grow their digital footprint
              through innovative, results-driven solutions.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Founded with a mission to make world-class digital services accessible
              to Nepalese businesses, we combine global expertise with local
              understanding. Led by{" "}
              <strong className="text-slate-700">Suman Basnet (CEO)</strong>, our team
              is passionate about technology, design, and business growth.
            </p>

            {/* Why choose us */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {whyUs.map((point) => (
                <div key={point} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={18}
                    className="text-blue-600 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-slate-700 text-sm">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="btn-primary text-sm">
                Work With Us
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61574606891054"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm"
              >
                Our Facebook Page
              </a>
            </div>
          </div>

          {/* Right: Values + CEO card */}
          <div className="space-y-6">
            {/* Values grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-3 shadow-sm group-hover:border-blue-300 transition-colors">
                    <Icon size={18} className="text-blue-700" />
                  </div>
                  <h4 className="font-display font-bold text-slate-900 mb-1 text-sm">
                    {title}
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* CEO Card */}
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full translate-y-16 -translate-x-16" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/30 text-xl font-display font-bold">
                    SB
                  </div>
                  <div>
                    <div className="font-display font-bold text-lg">Suman Basnet</div>
                    <div className="text-blue-200 text-sm">CEO & Founder</div>
                    <div className="text-blue-300 text-xs">Complete Web Solutions Nepal</div>
                  </div>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed italic">
                  "Our goal is simple — to help every Nepalese business succeed
                  online. We bring enterprise-level digital expertise to businesses
                  of every size."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
