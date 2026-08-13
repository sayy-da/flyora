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

// Realistic Rain Drops Effect Component
function RainEffect() {
  const drops = useMemo(() => {
    return Array.from({ length: 65 }).map((_, i) => ({
      id: i,
      left: `${(i * 1.55 + (i % 4) * 0.8) % 100}%`,
      duration: `${0.6 + (i % 7) * 0.1}s`,
      delay: `${(i * 0.11) % 2.5}s`,
      height: `${35 + (i % 5) * 20}px`,
      opacity: 0.25 + (i % 4) * 0.12,
    }));
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden">
      <style>{`
        @keyframes fallRain {
          0% {
            transform: translateY(-80px) skewX(-8deg);
          }
          100% {
            transform: translateY(115vh) skewX(-8deg);
          }
        }
      `}</style>

      {/* Atmospheric rain fog haze */}
      <div className="absolute inset-0 bg-sky-950/20 backdrop-brightness-95 pointer-events-none" />

      {/* Dynamic Falling Raindrops */}
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute rounded-full bg-gradient-to-b from-transparent via-slate-100/80 to-white"
          style={{
            left: drop.left,
            top: "-80px",
            width: "1.5px",
            height: drop.height,
            opacity: drop.opacity,
            animation: `fallRain ${drop.duration} linear infinite`,
            animationDelay: drop.delay,
            filter: "blur(0.3px)",
          }}
        />
      ))}
    </div>
  );
}

export default function TravelioHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      className={`${playfair.variable} ${inter.variable} relative min-h-screen w-full overflow-hidden bg-[#121629] font-sans flex flex-col justify-between`}
    >
      {/* Background Image */}
      <Image
        src="/hero.png"
        alt="Alpine lakeside village in rain"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Rain Effect Layer */}
      <RainEffect />

      {/* Atmospheric Vignette Gradients for sharp text contrast */}
      <div className="absolute inset-0 z-[6] bg-black/40" />
      <div className="absolute inset-0 z-[6] bg-gradient-to-b from-black/60 via-transparent to-black/70" />

      {/* Header Nav */}
      <header className="relative z-10 flex items-center justify-between px-6 pt-6 sm:px-12 sm:pt-8 max-w-[1600px] w-full mx-auto">
        {/* Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs sm:text-sm font-bold text-[#1E293B] shadow-lg transition hover:bg-white hover:scale-105 active:scale-95 backdrop-blur-md"
        >
          <LayoutGrid size={16} strokeWidth={2.25} />
          Menu
        </button>

        {/* Origami Bird / Paper Plane Logo */}
        <Link href="/" className="select-none flex flex-col items-center group">
          <div className="flex items-center gap-2">
            <svg
              width="26"
              height="22"
              viewBox="0 0 32 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0 transition-transform group-hover:-translate-y-0.5"
            >
              {/* Left dark polygon wing */}
              <path d="M 2 24 L 16 3 L 16 26 Z" fill="#0F172A" />
              {/* Right red polygon wing */}
              <path d="M 16 3 L 30 24 L 20 18 Z" fill="#EA2C2A" />
            </svg>
            <span className="text-3xl font-extrabold tracking-tight text-white font-sans">
              flyora
            </span>
          </div>
          <span className="text-[8px] font-bold tracking-[0.28em] text-[#EA2C2A] uppercase -mt-0.5">
            JOURNEYS BEYOND
          </span>
        </Link>

        {/* Plan a Trip CTA */}
        <Link
          href="/customize"
          className="flex items-center gap-2 rounded-full bg-[#EA2C2A] px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg transition hover:bg-[#D42220] hover:scale-105 active:scale-95"
        >
          Plan a Trip
          <ArrowUpRight size={16} strokeWidth={2.25} />
        </Link>
      </header>

      {/* Hero Central Content */}
      <section className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 py-12 text-center sm:py-20">
        {/* Top Pill Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wide text-[#1E293B] shadow-md border border-white/60">
          <span className="text-[#EA2C2A] font-extrabold text-sm">+</span>
          Crafted Journeys Since 2009
          <span className="text-[#EA2C2A] font-extrabold text-sm">+</span>
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
          className="mt-8 sm:mt-10 flex w-full max-w-md items-center rounded-full bg-white/95 p-1.5 shadow-2xl backdrop-blur-md transition-all focus-within:ring-2 focus-within:ring-[#EA2C2A]/50"
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

      {/* Empty footer spacer for vertical balance */}
      <div className="relative z-10 pb-8 sm:pb-12" />

      {menuOpen && <Navbar onClose={() => setMenuOpen(false)} />}
    </main>
  );
}