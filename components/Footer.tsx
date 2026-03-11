import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, MessageCircle } from "lucide-react";

const services = [
  "Web Development",
  "Digital Marketing",
  "SEO Optimization",
  "Mobile App Development",
  "UI/UX Design",
  "Web Hosting & Domain",
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-600/30">
                <span className="text-white font-bold text-sm">CW</span>
              </div>
              <div>
                <div className="font-display font-extrabold text-base text-white">
                  CWS Nepal
                </div>
                <div className="text-[9px] text-slate-500 tracking-wider uppercase">
                  Complete Web Solutions
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Nepal-based digital agency helping in businesses growth
              and succeed online with world-class web and digital services.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61574606891054"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-600 flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <Facebook size={16} className="text-slate-400 group-hover:text-white" />
              </a>
              <a
                href="https://wa.me/9779704738463"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-green-600 flex items-center justify-center transition-colors group"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} className="text-slate-400 group-hover:text-white" />
              </a>
              <a
                href="mailto:cwsolutions2025@gmail.com"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-red-600 flex items-center justify-center transition-colors group"
                aria-label="Email"
              >
                <Mail size={16} className="text-slate-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm hover:text-blue-400 transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm hover:text-blue-400 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+9779704738463"
                  className="flex items-center gap-2.5 text-sm hover:text-blue-400 transition-colors"
                >
                  <Phone size={14} className="text-blue-500 flex-shrink-0" />
                  +977-9704738463
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/9779704738463"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm hover:text-green-400 transition-colors"
                >
                  <MessageCircle size={14} className="text-green-500 flex-shrink-0" />
                  WhatsApp: +977-9704738463
                </a>
              </li>
              <li>
                <a
                  href="mailto:cwsolutions2025@gmail.com"
                  className="flex items-center gap-2.5 text-sm hover:text-red-400 transition-colors"
                >
                  <Mail size={14} className="text-red-400 flex-shrink-0" />
                  cwsolutions2025@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <MapPin size={14} className="text-slate-500 flex-shrink-0 mt-0.5" />
                Jhapa, Nepal
              </li>
              <li className="pt-1">
                <span className="text-xs text-slate-500">CEO: </span>
                <span className="text-sm text-slate-300">Suman Basnet</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Complete Web Solutions Nepal. All rights
            reserved.
          </p>
          <p className="text-xs text-slate-600">
            Built with ❤️ in Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}