"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { LayoutGrid, ArrowUpRight, Search, Sparkles } from "lucide-react";
import { Playfair_Display, Inter, Caveat } from "next/font/google";
import Navbar from "../layout/navbar";

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

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// Realistic Rain Drops Effect Component
function RainEffect() {
  const drops = useMemo(() => {
    return Array.from({ length: 70 }).map((_, i) => ({
      id: i,
      left: `${(i * 1.45 + (i % 3) * 0.7) % 100}%`,
      duration: `${0.55 + (i % 8) * 0.12}s`,
      delay: `${(i * 0.09) % 2.2}s`,
      height: `${30 + (i % 6) * 22}px`,
      opacity: 0.2 + (i % 5) * 0.15,
    }));
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden">
      <style>{`
        @keyframes fallRain {
          0% {
            transform: translateY(-90px) skewX(-10deg);
          }
          100% {
            transform: translateY(110vh) skewX(-10deg);
          }
        }
      `}</style>

      {/* Atmospheric rain fog haze */}
      <div className="absolute inset-0 bg-sky-950/20 backdrop-brightness-95 pointer-events-none" />

      {/* Dynamic Falling Raindrops */}
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute rounded-full bg-gradient-to-b from-transparent via-slate-100/90 to-white"
          style={{
            left: drop.left,
            top: "-90px",
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
      className={`${playfair.variable} ${inter.variable} relative min-h-screen w-full overflow-hidden bg-[#262A67] font-sans`}
    >
      {/* Background Image */}
      <Image
        src='/hero.png'
        alt="Foggy forest mountain road"
        fill
        priority
        className="object-cover"
      />

      {/* Rain Effect Layer */}
      <RainEffect />

      {/* Dark overlay gradients for contrast */}
      <div className="absolute inset-0 z-[6] bg-black/35" />
      <div className="absolute inset-0 z-[6] bg-gradient-to-b from-black/50 via-transparent to-black/60" />

      {/* Header Nav */}
      <header className="relative z-10 flex items-center justify-between px-6 pt-6 sm:px-10 sm:pt-8 max-w-[1600px] mx-auto">
        <button
          onClick={() => setMenuOpen(true)}
          className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2.5 text-sm font-bold text-[#262A67] shadow-md transition hover:bg-white"
        >
          <LayoutGrid size={16} strokeWidth={2.25} />
          Menu
        </button>

        <Link href="/" className="select-none flex items-center gap-1">
          <span className={`${caveat.className} text-4xl font-bold tracking-wide text-white`}>
            Flyora
          </span>
          <Sparkles
            size={18}
            className="text-[#EA2C2A] -translate-y-1.5"
            fill="currentColor"
          />
        </Link>

        <Link
          href="/customize"
          className="flex items-center gap-2 rounded-full bg-[#EA2C2A] px-4 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-[#C82120]"
        >
          Plan a Trip
          <ArrowUpRight size={16} strokeWidth={2.25} />
        </Link>
      </header>

      {/* Hero Content */}
      <section className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 pt-16 text-center sm:pt-20">
        <div className="mb-6 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-4 py-1.5 text-xs font-bold tracking-wide text-[#262A67] shadow-sm sm:text-sm border border-white/40">
          <Sparkles size={13} className="text-[#EA2C2A]" fill="currentColor" />
          Crafted Journeys Since 2009
          <Sparkles size={13} className="text-[#EA2C2A]" fill="currentColor" />
        </div>

        <h2
          className="text-[2.6rem] leading-[1.05] text-white sm:text-6xl sm:leading-[1.05]"
          style={{ fontFamily: "var(--font-playfair)", fontWeight: 600 }}
        >
          Travel Beyond
          <br />
          the <span className="italic font-medium text-[#EA2C2A]">Ordinary</span>
        </h2>

        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/90 sm:text-base font-medium">
          Handpicked destinations, curated itineraries, and local expertise so
          every journey feels like it was made just for you.
        </p>

        {/* Search bar */}
        <form action="/tours" className="mt-8 flex w-full max-w-md items-center rounded-full bg-white/95 p-1.5 shadow-xl backdrop-blur">
          <input
            type="text"
            placeholder="Search tours, destinations..."
            className="flex-1 bg-transparent px-4 py-2 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Search"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EA2C2A] text-white transition hover:bg-[#C82120] shadow-sm"
          >
            <Search size={16} strokeWidth={2.25} />
          </button>
        </form>
      </section>

      {menuOpen && <Navbar onClose={() => setMenuOpen(false)} />}
    </main>
  );
}