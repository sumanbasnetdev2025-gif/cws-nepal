"use client";

import { ExternalLink, Globe, ShoppingCart, BarChart } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    client: "Retail Business, Kathmandu",
    description:
      "Full-featured e-commerce website with payment integration, inventory management, and a modern UI that boosted online sales by 200%.",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "PostgreSQL"],
    icon: ShoppingCart,
    gradient: "from-blue-500 to-cyan-500",
    result: "+200% Sales",
  },
  {
    title: "Corporate Website Redesign",
    client: "Finance Company, Nepal",
    description:
      "Complete redesign and SEO overhaul of a financial services company, resulting in top Google rankings and 3x more organic leads.",
    tags: ["WordPress", "SEO", "UI/UX Design"],
    icon: Globe,
    gradient: "from-violet-500 to-purple-600",
    result: "+300% Organic Traffic",
  },
  {
    title: "Digital Marketing Campaign",
    client: "Restaurant Chain, Pokhara",
    description:
      "Social media marketing and Google Ads campaigns that tripled restaurant bookings within 3 months and grew Instagram following by 10K.",
    tags: ["Facebook Ads", "Google Ads", "Content Creation"],
    icon: BarChart,
    gradient: "from-orange-500 to-red-500",
    result: "+10K Followers",
  },
  {
    title: "Appointment Booking App",
    client: "Healthcare Clinic, Lalitpur",
    description:
      "Custom mobile app for patient appointment scheduling with SMS reminders, reducing no-shows by 60% and improving patient experience.",
    tags: ["React Native", "Node.js", "SMS API"],
    icon: Globe,
    gradient: "from-emerald-500 to-teal-600",
    result: "-60% No-Shows",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-slate-950">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-3 bg-cyan-400/10 px-4 py-1.5 rounded-full border border-cyan-400/20">
            Our Work
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
            Projects That{" "}
            <span className="gradient-text">Deliver Results</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A selection of projects where we've helped businesses transform their
            digital presence and achieve measurable growth.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className="group bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/8 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className={`w-full h-full rounded-full bg-gradient-to-br ${project.gradient} blur-2xl`} />
                </div>

                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full">
                    {project.result}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-xs mb-3">{project.client}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 bg-white/10 text-slate-300 rounded-md border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-blue-900 hover:bg-blue-50 font-bold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg"
          >
            Start Your Success Story
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
