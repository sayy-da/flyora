"use client";

import Image from "next/image";
import { useState } from "react";
import { LayoutGrid, ArrowUpRight, Search, Sparkles, Download } from "lucide-react";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "../layout/navbar";

// ---------------------------------------------------------------------------
// Fonts — loaded via next/font/google, no manual <link> tags or CSS @import
// needed. Next.js self-hosts these automatically at build time.
// ---------------------------------------------------------------------------
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export default function TravelioHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      className={`${playfair.variable} ${inter.variable} relative min-h-screen w-full overflow-hidden bg-neutral-900 font-sans`}
    >
      {/* ---------------------------------------------------------------- */}
      {/* Background photo — replace /public/hero-forest.jpg with your own */}
      {/* ---------------------------------------------------------------- */}
      <Image
        src='/hero.png'
        alt="Foggy forest mountain road"
        fill
        priority
        className="object-cover"
      />
      {/* Soft dark overlay so text stays legible over any photo */}
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/50" />

      {/* ------------------------------- Nav ------------------------------ */}
      <header className="relative z-10 flex items-center justify-between px-6 pt-6 sm:px-10 sm:pt-8">
        <button
          onClick={() => setMenuOpen(true)}
          className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 shadow-sm transition hover:bg-neutral-100"
        >
          <LayoutGrid size={16} strokeWidth={2.25} />
          Menu
        </button>

        <h1
          className="select-none text-2xl italic text-white sm:text-3xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Travelio
          <Sparkles
            size={16}
            className="ml-1 inline-block -translate-y-3 text-orange-300"
            fill="currentColor"
          />
        </h1>

        <button className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 shadow-sm transition hover:bg-neutral-100">
          Plan a Trip
          <ArrowUpRight size={16} strokeWidth={2.25} />
        </button>
      </header>

      {/* ----------------------------- Hero copy ---------------------------- */}
      <section className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 pt-16 text-center sm:pt-20">
        {/* Eyebrow badge */}
        <div className="mb-6 flex items-center gap-2 rounded-full bg-amber-100/95 px-4 py-1.5 text-xs font-medium tracking-wide text-neutral-800 sm:text-sm">
          <Sparkles size={13} className="text-amber-500" fill="currentColor" />
          Crafted Journeys Since 2009
          <Sparkles size={13} className="text-amber-500" fill="currentColor" />
        </div>

        {/* Headline */}
        <h2
          className="text-[2.6rem] leading-[1.05] text-white sm:text-6xl sm:leading-[1.05]"
          style={{ fontFamily: "var(--font-playfair)", fontWeight: 600 }}
        >
          Travel Beyond
          <br />
          the <span className="italic font-medium">Ordinary</span>
        </h2>

        {/* Subtext */}
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
          Handpicked destinations, curated itineraries, and local expertise so
          every journey feels like it was made just for you.
        </p>

        {/* Search bar */}
        <div className="mt-8 flex w-full max-w-md items-center rounded-full bg-white/95 p-1.5 shadow-lg backdrop-blur">
          <input
            type="text"
            placeholder="Search tours..."
            className="flex-1 bg-transparent px-4 py-2 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none"
          />
          <button
            aria-label="Search"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white transition hover:bg-neutral-700"
          >
            <Search size={16} strokeWidth={2.25} />
          </button>
        </div>
      </section>

  
 {/* ------------------- Cloud band at the base of the hero photo ------------------- */}
{/* ------------------- Cloud band at the base of the hero photo ------------------- */}
<div
  aria-hidden
  className="pointer-events-none absolute inset-x-0 bottom-0 z-[8] h-[180px] sm:h-[240px]"
  style={{
    backgroundImage: "url('/cloud.png')",
    backgroundRepeat: "repeat-x",
    backgroundPosition: "bottom center",
    backgroundSize: "auto 100%",
    mixBlendMode: "screen",
  }}
/>

{/* Solid white fade, overlapping well into the cloud to close any gap */}
<div className="pointer-events-none absolute inset-x-0 bottom-0 z-[9] h-[160px] sm:h-[220px] bg-linear-to-t from-white from-30% via-white/60 via-60% to-transparent" />
      {/* Full-screen nav menu, toggled by the "Menu" button above */}
      {menuOpen && <Navbar onClose={() => setMenuOpen(false)} />}
    </main>
  );
}