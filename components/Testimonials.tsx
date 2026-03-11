"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Owner, Sharma Traders",
    location: "Kathmandu",
    text: "CWS Nepal built our e-commerce website from scratch and within 3 months, our online sales doubled. The team is professional, responsive, and truly understands what businesses in Nepal need.",
    rating: 5,
    initial: "RS",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Priya Adhikari",
    role: "Marketing Manager",
    location: "Lalitpur",
    text: "Their digital marketing campaigns transformed our social media presence. We went from 500 to 15,000 followers in just 4 months, and our website traffic increased by 300%. Highly recommended!",
    rating: 5,
    initial: "PA",
    color: "from-violet-500 to-purple-700",
  },
  {
    name: "Bikash Thapa",
    role: "CEO, TechStart Nepal",
    location: "Pokhara",
    text: "The mobile app CWS Nepal developed for us is flawless. They delivered on time, within budget, and the post-launch support has been exceptional. They feel like our in-house tech team.",
    rating: 5,
    initial: "BT",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Anita Gurung",
    role: "Clinic Director",
    location: "Bhaktapur",
    text: "Our website's Google ranking jumped from page 5 to page 1 within 2 months thanks to CWS Nepal's SEO work. The investment paid for itself many times over in new patients.",
    rating: 5,
    initial: "AG",
    color: "from-orange-500 to-red-500",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-blue-700 font-semibold text-sm tracking-widest uppercase mb-3 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            Testimonials
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Don't just take our word for it — hear from the businesses we've helped grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300 relative"
            >
              <Quote
                size={40}
                className="text-blue-100 absolute top-6 right-6"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">
                    {t.name}
                  </div>
                  <div className="text-slate-400 text-xs">
                    {t.role} · {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}