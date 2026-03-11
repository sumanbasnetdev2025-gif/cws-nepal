"use client";

import { MessageSquare, Lightbulb, Code2, Rocket, HeartHandshake } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Discovery Call",
    description:
      "We start by understanding your business, goals, target audience, and requirements in a free consultation call.",
    color: "from-blue-500 to-blue-700",
  },
  {
    step: "02",
    icon: Lightbulb,
    title: "Strategy & Planning",
    description:
      "Our team crafts a tailored digital strategy and project plan with clear timelines, milestones, and deliverables.",
    color: "from-violet-500 to-purple-700",
  },
  {
    step: "03",
    icon: Code2,
    title: "Design & Development",
    description:
      "We design and build your solution with precision — sharing updates and getting your feedback throughout the process.",
    color: "from-cyan-500 to-teal-600",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Launch",
    description:
      "After thorough testing and your approval, we launch your project live — handling all technical details seamlessly.",
    color: "from-orange-500 to-red-600",
  },
  {
    step: "05",
    icon: HeartHandshake,
    title: "Ongoing Support",
    description:
      "We don't disappear after launch. Our team provides continuous support, maintenance, and growth optimization.",
    color: "from-emerald-500 to-green-600",
  },
];

export default function Process() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-blue-950 to-slate-900 relative overflow-hidden">
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,179,237,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,0.2) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-3 bg-cyan-400/10 px-4 py-1.5 rounded-full border border-cyan-400/20">
            Our Process
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            How We Work
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            A transparent, collaborative process designed to deliver exceptional results on time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="relative group">
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-4 h-0.5 bg-white/10 z-10" />
                )}

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-white/20 hover:bg-white/8 transition-all duration-300 h-full">
                  {/* Step number */}
                  <div className="text-xs font-bold text-slate-600 mb-3 font-mono">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon size={20} className="text-white" />
                  </div>

                  <h3 className="font-display font-bold text-white text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="inline-flex items-center gap-2 bg-white text-blue-900 hover:bg-blue-50 font-bold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg">
            Start the Process →
          </a>
        </div>
      </div>
    </section>
  );
}