"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  Facebook,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  User,
  AtSign,
  ChevronDown,
} from "lucide-react";

const services = [
  "Web Development",
  "Digital Marketing",
  "SEO Optimization",
  "Mobile App Development",
  "UI/UX Design",
  "Social Media Management",
  "Web Security & Maintenance",
  "Web Hosting & Domain",
  "Other / Not Listed",
];

const contactInfo = [
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+977-9704738463",
    href: "tel:+9779704738463",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp Chat",
    value: "Message Us on WhatsApp",
    href: "https://wa.me/9779704738463",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Mail,
    label: "Email",
    value: "cwsolutions2025@gmail.com",
    href: "mailto:cwsolutions2025@gmail.com",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "Complete Web Solutions Nepal",
    href: "https://www.facebook.com/profile.php?id=61574606891054",
    color: "text-blue-700",
    bg: "bg-blue-50",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kathmandu, Nepal",
    href: "https://maps.google.com/?q=Kathmandu,Nepal",
    color: "text-slate-600",
    bg: "bg-slate-50",
  },
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Failed to send. Please try again.");
    }
  };

  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-700 font-semibold text-sm tracking-widest uppercase mb-3 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            Contact Us
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 mb-4">
            Let's Build Something{" "}
            <span className="gradient-text">Amazing Together</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Ready to transform your digital presence? Send us a message and we'll
            get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact info */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display font-bold text-xl text-slate-900 mb-6">
              Get In Touch
            </h3>

            {contactInfo.map(({ icon: Icon, label, value, href, color, bg }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-200 group"
              >
                <div className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon size={18} className={color} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">{label}</div>
                  <div className="text-slate-800 text-sm font-semibold group-hover:text-blue-700 transition-colors">
                    {value}
                  </div>
                </div>
              </a>
            ))}

            {/* Quick WhatsApp CTA */}
            <a
              href="https://wa.me/9779704738463?text=Hi%20CWS%20Nepal!%20I%20am%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-6 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-green-500/20"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp Now
            </a>
          </div>

          {/* Right: Contact form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={40} className="text-green-500" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-slate-900 mb-3">
                    Message Sent! 🎉
                  </h3>
                  <p className="text-slate-500 max-w-sm leading-relaxed mb-2">
                    Thank you for reaching out. We've received your message and
                    will get back to you within <strong>24–48 hours</strong>.
                  </p>
                  <p className="text-slate-400 text-sm mb-8">
                    Check your email for a confirmation from us.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="btn-primary text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User
                          size={16}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Suman Basnet"
                          className="w-full pl-10 pr-4 py-3 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <AtSign
                          size={16}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="w-full pl-10 pr-4 py-3 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Phone Number{" "}
                      <span className="text-slate-400 font-normal">(optional)</span>
                    </label>
                    <div className="relative">
                      <Phone
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+977-9800000000"
                        className="w-full pl-10 pr-4 py-3 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Service Interested In
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full appearance-none px-4 py-3 pr-10 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-700"
                      >
                        <option value="">Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project, goals, and timeline..."
                      className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Error */}
                  {status === "error" && (
                    <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                      <AlertCircle size={16} />
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full btn-primary flex items-center justify-center gap-2 py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    We typically respond within 24 hours. Your information is
                    kept private.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
