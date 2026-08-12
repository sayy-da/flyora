"use client";

import { Sparkles, Send, Mail, Phone, MapPin } from "lucide-react";
import { Caveat } from "next/font/google";
import Link from "next/link";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Footer() {
  return (
    <footer className="relative bg-[#262A67] text-white pt-20 pb-12 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Background glow highlights */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#EA2C2A]/20 blur-[130px] rounded-full" />

      <div className="relative mx-auto w-full max-w-[1600px]">
        {/* Top Newsletter CTA box */}
        <div className="mb-20 rounded-3xl bg-[#1A1D4A] border border-white/15 p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 shadow-xl">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#EA2C2A]/20 px-3.5 py-1 text-xs font-semibold text-[#EA2C2A] border border-[#EA2C2A]/30">
              <Sparkles size={12} fill="currentColor" />
              Stay Inspired
            </div>
            <h3
              className="text-3xl font-bold sm:text-4xl text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Get Exclusive Travel Deals & Stories
            </h3>
            <p className="mt-2 text-sm text-slate-300 max-w-md">
              Subscribe to our monthly newsletter for secret itineraries, early bird discounts, and expert travel guides.
            </p>
          </div>

          <div className="flex w-full max-w-md items-center rounded-full bg-[#262A67] p-2 border border-white/20 focus-within:border-[#EA2C2A] transition shadow-inner">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none"
            />
            <button
              aria-label="Subscribe"
              className="flex items-center gap-2 rounded-full bg-[#EA2C2A] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#C82120] shadow-md"
            >
              <span>Subscribe</span>
              <Send size={13} />
            </button>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 pb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <h2 className={`${caveat.className} text-6xl sm:text-7xl font-bold text-white tracking-wide flex items-center gap-2`}>
              Flyora
              <Sparkles
                size={24}
                className="inline-block text-[#EA2C2A]"
                fill="currentColor"
              />
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
              Crafting extraordinary journeys and unforgettable travel experiences since 2009. Guided by local expertise, designed for luxury and adventure.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#EA2C2A] shrink-0" />
                <span>742 Evergreen Terrace, San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#EA2C2A] shrink-0" />
                <span>support@flyora.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#EA2C2A] shrink-0" />
                <span>+1 (202) 555-0147</span>
              </div>
            </div>
          </div>

          {/* Column 1: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-[#EA2C2A] transition">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#EA2C2A] transition">About Us</Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-[#EA2C2A] transition">Tour Packages</Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-[#EA2C2A] transition">Destinations</Link>
              </li>
              <li>
                <Link href="/stories" className="hover:text-[#EA2C2A] transition">Travel Stories</Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Top Destinations */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Top Destinations
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/locations/kyoto" className="hover:text-[#EA2C2A] transition">Kyoto, Japan 🇯🇵</Link>
              </li>
              <li>
                <Link href="/locations/santorini" className="hover:text-[#EA2C2A] transition">Santorini, Greece 🇬🇷</Link>
              </li>
              <li>
                <Link href="/locations/bali" className="hover:text-[#EA2C2A] transition">Bali, Indonesia 🇮🇩</Link>
              </li>
              <li>
                <Link href="/locations/swiss-alps" className="hover:text-[#EA2C2A] transition">Swiss Alps 🇨🇭</Link>
              </li>
              <li>
                <Link href="/locations/marrakech" className="hover:text-[#EA2C2A] transition">Marrakech, Morocco 🇲🇦</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Services & Legal
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/services" className="hover:text-[#EA2C2A] transition">Visa Assistance</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#EA2C2A] transition">Flight Bookings</Link>
              </li>
              <li>
                <Link href="/customize" className="hover:text-[#EA2C2A] transition">Custom Trips</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#EA2C2A] transition">Support & Contact</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#EA2C2A] transition">Terms & Privacy</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Giant Handwriting Brand Signature */}
        <div className="py-8 text-center border-t border-b border-white/15 my-6 overflow-hidden">
          <span className={`${caveat.className} text-7xl sm:text-9xl md:text-[11rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#EA2C2A] to-white opacity-90 select-none leading-none tracking-wide block transition-transform duration-500 hover:scale-105`}>
            Flyora
          </span>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Flyora Travel. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
