"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { LayoutGrid, ArrowUpRight, Search } from "lucide-react";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "../layout/navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});


export default function TravelioHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      className={`${playfair.variable} ${inter.variable} relative min-h-[135vh] sm:min-h-[145vh] w-full overflow-hidden bg-[#121629] font-sans flex flex-col justify-between`}
    >
      {/* Background Image: Forest van background */}
      <Image
        src="/hero.png"
        alt="Van adventure in forest"
        fill
        priority
        className="object-cover object-top"
      />

      {/* Atmospheric Vignette Gradients for sharp text contrast */}
      <div className="absolute inset-0 z-[6] bg-black/30" />
      <div className="absolute inset-0 z-[6] bg-gradient-to-b from-black/50 via-transparent to-black/20" />

      {/* Top Viewport (First Screen - Above the fold) */}
      <div className="relative z-10 flex min-h-screen w-full flex-col justify-between px-6 pt-6 sm:px-12 sm:pt-8 max-w-[1600px] mx-auto pb-10">
        {/* Header Nav */}
        <header className="flex items-center justify-between w-full">
          {/* Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2.5 rounded-full bg-white/95 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-[#121629] shadow-lg transition hover:bg-white hover:scale-105 active:scale-95 backdrop-blur-md cursor-pointer"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#121629] text-white">
              <LayoutGrid size={13} strokeWidth={2.5} />
            </div>
            <span>Menu</span>
          </button>

          {/* Origami Bird / Paper Plane Logo */}
          <Link href="/" className="select-none flex items-center group">
            <img
              src="/images/light-logo.png"
              alt="Flyora"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Plan a Trip CTA */}
          <div className="flex items-center justify-center">
            <Link
              href="/customize"
              className="btn-hover-slide inline-flex items-center gap-3 rounded-full bg-[#FDE8E7] py-1.5 pl-4 pr-1.5 sm:py-2 sm:pl-5 sm:pr-2 text-xs sm:text-sm font-semibold text-[#121629] transition-all duration-300 hover:bg-[#EA2C2A] hover:text-white border border-[#EA2C2A]/20 shadow-lg"
            >
              <span className="btn-text-wrapper">
                <span className="btn-text">Plan a Trip</span>
                <span className="btn-text-clone">Plan a Trip</span>
              </span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#121629] shadow-xs">
                <ArrowUpRight size={14} className="btn-arrow" />
              </span>
            </Link>
          </div>
        </header>

        {/* Hero Central Content */}
        <section className="mx-auto flex max-w-4xl flex-col items-center text-center my-auto py-6">
          {/* Top Pill Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#FEF2F2] px-5 py-2 text-xs sm:text-sm font-semibold text-[#262A67] border border-[#EA2C2A]/20 shadow-sm">
            <img src="/images/flowericon.png" alt="icon" width={17} height={17} />
            Crafted Journeys Since 2009
            <img src="/images/flowericon.png" alt="icon" width={17} height={17} />
          </div>

          {/* Main Serif Headline */}
          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] leading-[1.08] sm:leading-[1.06] text-white font-serif tracking-tight"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 500 }}
          >
            Travel Beyond
            <br />
            the <span className="italic font-medium text-[#EA2C2A]">Ordinary</span>
          </h1>

          {/* Description Paragraph */}
          <p className="mx-auto mt-6 max-w-lg text-sm sm:text-base leading-relaxed text-white/90 font-normal">
            Handpicked destinations, curated itineraries, and local expertise so
            every journey feels like it was made just for you.
          </p>

          {/* Search Bar Container */}
          <form
            action="/tours"
            className="mt-8 sm:mt-10 flex w-full max-w-md items-center rounded-full bg-white/95 p-1.5 shadow-2xl backdrop-blur-md transition-all focus-within:ring-2 focus-within:ring-[#EA2C2A]/50 z-20"
          >
            <input
              type="text"
              placeholder="Search tours, destinations..."
              className="flex-1 bg-transparent px-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none font-medium"
            />
            <button
              type="submit"
              aria-label="Search"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EA2C2A] text-white shadow-md transition hover:bg-[#D42220] hover:scale-105 active:scale-95"
            >
              <Search size={16} strokeWidth={2.25} />
            </button>
          </form>
        </section>

        {/* Spacer to keep search bar above the van luggage rack */}
        <div className="h-4" />
      </div>

      {/* Cloud positioned at the bottom of the hero, revealed when scrolling down */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 select-none w-full leading-none">

        {/* Soft bottom white wash to ensure 100% seamless transition into Tour Categories */}
        <div className="absolute inset-x-0 bottom-0 h-20 sm:h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      {menuOpen && <Navbar onClose={() => setMenuOpen(false)} />}
    </main>
  );
}
