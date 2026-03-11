"use client";

import {
  Globe,
  TrendingUp,
  Search,
  Smartphone,
  ShieldCheck,
  BarChart2,
  Palette,
  Server,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom, responsive, and high-performance websites using the latest technologies — from business sites to complex web applications.",
    color: "from-blue-500 to-blue-700",
    shadow: "shadow-blue-500/20",
    features: ["React / Next.js", "WordPress", "E-Commerce", "Custom CMS"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Result-driven digital marketing campaigns that increase your brand awareness, engagement, and conversions across platforms.",
    color: "from-violet-500 to-purple-700",
    shadow: "shadow-violet-500/20",
    features: ["Social Media Ads", "Google Ads", "Content Strategy", "Email Marketing"],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Dominate search engine rankings with proven SEO strategies that drive organic traffic and long-term growth for your business.",
    color: "from-emerald-500 to-green-700",
    shadow: "shadow-emerald-500/20",
    features: ["On-Page SEO", "Technical SEO", "Link Building", "Local SEO Nepal"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android — beautifully designed and built for performance.",
    color: "from-orange-500 to-red-600",
    shadow: "shadow-orange-500/20",
    features: ["React Native", "Flutter", "iOS & Android", "App Store Submission"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Thoughtful, user-centered designs that are beautiful and intuitive — creating experiences users love.",
    color: "from-pink-500 to-rose-600",
    shadow: "shadow-pink-500/20",
    features: ["Figma Design", "Wireframing", "Brand Identity", "Prototyping"],
  },
  {
    icon: BarChart2,
    title: "Social Media Management",
    description:
      "Build a strong social media presence with strategic content creation, community management, and analytics.",
    color: "from-cyan-500 to-teal-600",
    shadow: "shadow-cyan-500/20",
    features: ["Facebook & Instagram", "Content Creation", "Analytics", "Growth Strategy"],
  },
  {
    icon: ShieldCheck,
    title: "Web Security & Maintenance",
    description:
      "Keep your website safe, fast, and up-to-date with our comprehensive maintenance and security packages.",
    color: "from-slate-600 to-slate-800",
    shadow: "shadow-slate-500/20",
    features: ["SSL Certificates", "Regular Updates", "Backups", "Malware Removal"],
  },
  {
    icon: Server,
    title: "Web Hosting & Domain",
    description:
      "Reliable, fast, and affordable hosting solutions with 99.9% uptime guarantee and dedicated support.",
    color: "from-amber-500 to-yellow-600",
    shadow: "shadow-amber-500/20",
    features: ["cPanel Hosting", "Domain Registration", "VPS Solutions", "Email Hosting"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-700 font-semibold text-sm tracking-widest uppercase mb-3 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            Our Services
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 mb-4">
            Everything Your Business
            <br />
            <span className="gradient-text">Needs to Succeed Online</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            We offer a full spectrum of digital services designed to help Nepalese
            businesses grow, compete, and thrive in the digital age.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group bg-white rounded-2xl p-6 card-hover border border-slate-100 ${service.shadow} hover:shadow-2xl relative overflow-hidden`}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:opacity-5 transition-opacity duration-300 opacity-0" />

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg ${service.shadow} group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={22} className="text-white" />
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-1.5">
                  {service.features.map((feat) => (
                    <span
                      key={feat}
                      className="text-xs px-2.5 py-1 bg-slate-50 text-slate-600 rounded-md border border-slate-200"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-slate-500 mb-4">
            Don't see what you need? We offer custom solutions too.
          </p>
          <a href="#contact" className="btn-primary inline-flex">
            Discuss Your Project →
          </a>
        </div>
      </div>
    </section>
  );
}
