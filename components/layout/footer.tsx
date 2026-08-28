"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const countryBadges = [
  { flag: "🇯🇵", name: "Japan", slug: "japan" },
  { flag: "🇲🇦", name: "Morocco", slug: "morocco" },
  { flag: "🇮🇸", name: "Iceland", slug: "iceland" },
  { flag: "🇲🇻", name: "Maldives", slug: "maldives" },
  { flag: "🇨🇳", name: "China", slug: "china" },
  { flag: "🇹🇿", name: "Tanzania", slug: "tanzania" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden text-white select-none">
      {/* Background Image — Tropical Sunset Beach */}
      <Image
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop"
        alt="Sunset beach background"
        fill
        className="object-cover object-center"
      />

      {/* Dark Vignette & Gradient Overlays for High Contrast Readability */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90 z-0" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pt-24 pb-12 sm:px-10 lg:px-16">
        {/* Top Newsletter CTA Section */}
        <div className="mx-auto max-w-3xl text-center mb-24">
          <h2
            className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Get Travel Ideas <br />
            <span className="italic font-medium text-white font-serif">
              Delivered
            </span>{" "}
            Monthly
          </h2>

          {/* Email Subscription Bar */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-8 flex w-full max-w-lg items-center rounded-full bg-white/95 p-1.5 shadow-2xl backdrop-blur-md transition-all focus-within:ring-2 focus-within:ring-[#EA2C2A]/50"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-transparent px-5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 font-medium focus:outline-none"
              required
            />
            <button
              type="submit"
              className="btn-hover-slide inline-flex items-center gap-3 rounded-full bg-[#262A67] py-2.5 pl-6 pr-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#EA2C2A] hover:shadow-lg"
            >
              <span className="btn-text-wrapper">
                <span className="btn-text">Subscribe Now!</span>
                <span className="btn-text-clone">Subscribe Now!</span>
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                <ArrowUpRight size={15} className="btn-arrow" />
              </span>
            </button>
          </form>

          <p className="mt-3 text-xs text-slate-300 font-medium">
            Join 12,000+ travelers · Unsubscribe anytime
          </p>
        </div>

        {/* Dashed Top Border Divider */}
        <div className="w-full border-t border-dashed border-white/25 pt-16" />

        {/* Main 4-Column Footer Navigation */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 pb-12">
          {/* Column 1: Brand Info & Country Badges */}
          <div className="lg:col-span-2">
            <Link href="/" className="select-none flex items-center group w-fit">
              <img
                src="/images/light-logo.png"
                alt="Flyora"
                className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            <p className="mt-4 max-w-sm text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Curating world-class journeys for curious, intentional travelers since 2009. Every trip is a story worth telling.
            </p>

            {/* Country Pills Row */}
            <div className="mt-6 flex flex-wrap items-center gap-2 max-w-sm">
              {countryBadges.map((country) => (
                <Link
                  key={country.name}
                  href={`/locations/${country.slug}`}
                  className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm border border-white/15 transition hover:bg-white/20"
                >
                  <span>{country.flag}</span>
                  <span>{country.name}</span>
                </Link>
              ))}
            </div>

            {/* View All Locations Button */}
            <div className="mt-4">
              <Link
                href="/locations"
                className="btn-hover-slide inline-flex items-center gap-3 rounded-full bg-[#262A67] py-2.5 pl-6 pr-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#EA2C2A] hover:shadow-lg"
              >
                <span className="btn-text-wrapper">
                  <span className="btn-text">View All Locations</span>
                  <span className="btn-text-clone">View All Locations</span>
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                  <ArrowUpRight size={15} className="btn-arrow" />
                </span>
              </Link>
            </div>
          </div>

          {/* Column 2: Pages Links */}
          <div>
            <h3
              className="text-xl font-medium text-white mb-4 italic pb-1 border-b border-dashed border-white/20"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Pages
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-white transition font-medium">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition font-medium">About</Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-white transition font-medium">Tours</Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-white transition font-medium">Locations</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition font-medium">Services</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition font-medium">Contact</Link>
              </li>
              <li>
                <Link href="/stories" className="hover:text-white transition font-medium">Traveler Stories</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Tours Categories */}
          <div>
            <h3
              className="text-xl font-medium text-white mb-4 italic pb-1 border-b border-dashed border-white/20"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Tours Categories
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="/categories/nature" className="hover:text-white transition font-medium">Nature</Link>
              </li>
              <li>
                <Link href="/categories/adventure" className="hover:text-white transition font-medium">Adventure</Link>
              </li>
              <li>
                <Link href="/categories/honeymoon" className="hover:text-white transition font-medium">Honeymoon</Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-white transition font-medium">Cities</Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-white transition font-medium">Wildlife</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3
              className="text-xl font-medium text-white mb-4 italic pb-1 border-b border-dashed border-white/20"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Contact Info
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              <p>
                1238 Echo Ridge Blvd. Suite 400, <br />
                San Francisco, CA 94103, <br />
                United States
              </p>
              <div className="pt-1">
                <p>+1 (202) 555 0147</p>
                <p>+1 (303) 555 0198</p>
              </div>
              <p className="text-white font-medium underline underline-offset-4 cursor-pointer hover:text-[#EA2C2A] transition">
                support@flyora.com
              </p>
            </div>
          </div>
        </div>

        {/* Giant Brand Logo Signature at Footer Bottom */}
        <div className="my-10 py-10 text-center border-t border-b border-dashed border-white/20 overflow-hidden">
          <Link
            href="/"
            className="group inline-flex items-center justify-center opacity-60 transition-all duration-700 hover:opacity-100 hover:scale-[1.02]"
          >
            <img
              src="/images/light-logo.png"
              alt="Flyora"
              className="h-20 sm:h-28 md:h-36 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Bottom Bar — Copyright & Social Icons */}
        <div className="w-full pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Flyora Travel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

