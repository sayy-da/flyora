"use client";

import { Sparkles, ArrowUpRight, Send, Globe, Mail, Phone, MapPin } from "lucide-react";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Footer() {
  return (
    <footer className="relative bg-neutral-950 text-white pt-20 pb-12 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Glow effect */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full" />

      <div className="relative mx-auto w-full max-w-[1600px]">
        {/* Top Newsletter CTA box */}
        <div className="mb-20 rounded-3xl bg-neutral-900 border border-neutral-800 p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-3.5 py-1 text-xs font-medium text-amber-300">
              <Sparkles size={12} fill="currentColor" />
              Stay Inspired
            </div>
            <h3
              className="text-3xl font-bold sm:text-4xl text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Get Exclusive Travel Deals & Stories
            </h3>
            <p className="mt-2 text-sm text-neutral-400 max-w-md">
              Subscribe to our monthly newsletter for secret itineraries, early bird discounts, and expert travel guides.
            </p>
          </div>

          <div className="flex w-full max-w-md items-center rounded-full bg-neutral-950 p-2 border border-neutral-800 focus-within:border-amber-400/50 transition">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none"
            />
            <button
              aria-label="Subscribe"
              className="flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-xs font-bold text-neutral-950 transition hover:bg-amber-300"
            >
              Subscribe
              <Send size={13} />
            </button>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 pb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <h2 className={`${caveat.className} text-6xl sm:text-7xl font-bold text-amber-300 tracking-wide flex items-center gap-2`}>
              Flyora
              <Sparkles
                size={22}
                className="inline-block text-amber-400"
                fill="currentColor"
              />
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-400">
              Crafting extraordinary journeys and unforgettable travel experiences since 2009. Guided by local expertise, designed for luxury and adventure.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-amber-400 shrink-0" />
                <span>742 Evergreen Terrace, San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-amber-400 shrink-0" />
                <span>support@flyora.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-amber-400 shrink-0" />
                <span>+1 (202) 555-0147</span>
              </div>
            </div>
          </div>

          {/* Column 1: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-neutral-400">
              <li>
                <a href="/" className="hover:text-amber-300 transition">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-amber-300 transition">About Us</a>
              </li>
              <li>
                <a href="/tours" className="hover:text-amber-300 transition">Tour Packages</a>
              </li>
              <li>
                <a href="/locations" className="hover:text-amber-300 transition">Destinations</a>
              </li>
              <li>
                <a href="/stories" className="hover:text-amber-300 transition">Travel Stories</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Top Destinations */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Top Destinations
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-neutral-400">
              <li>
                <a href="#" className="hover:text-amber-300 transition">Kyoto, Japan 🇯🇵</a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-300 transition">Santorini, Greece 🇬🇷</a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-300 transition">Bali, Indonesia 🇮🇩</a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-300 transition">Swiss Alps 🇨🇭</a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-300 transition">Marrakech, Morocco 🇲🇦</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Support */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Support & Legal
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-neutral-400">
              <li>
                <a href="#" className="hover:text-amber-300 transition">Help & Support</a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-300 transition">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-300 transition">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-300 transition">Cancellation Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-300 transition">Travel Advisory</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Giant Handwriting Brand Signature */}
        <div className="py-8 text-center border-t border-b border-neutral-800/80 my-6 overflow-hidden">
          <span className={`${caveat.className} text-7xl sm:text-9xl md:text-[11rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 opacity-90 select-none leading-none tracking-wide block transition-transform duration-500 hover:scale-105`}>
            Flyora
          </span>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Flyora Travel. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-300 transition">Privacy</a>
            <a href="#" className="hover:text-neutral-300 transition">Terms</a>
            <a href="#" className="hover:text-neutral-300 transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

