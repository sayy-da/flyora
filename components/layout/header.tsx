"use client";

import { useState } from "react";
import Link from "next/link";
import { LayoutGrid, ArrowUpRight, Sparkles } from "lucide-react";
import { Caveat } from "next/font/google";
import Navbar from "./navbar";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

interface HeaderProps {
  transparent?: boolean;
}

export default function Header({ transparent = false }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          transparent
            ? "bg-transparent text-white"
            : "bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 text-white"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 sm:px-10">
          {/* Menu Trigger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur transition hover:bg-white/20 sm:text-sm"
          >
            <LayoutGrid size={15} strokeWidth={2.2} />
            <span>Menu</span>
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group">
            <span className={`${caveat.className} text-3xl font-bold tracking-wide text-amber-300 sm:text-4xl`}>
              Flyora
            </span>
            <Sparkles size={16} className="text-amber-400 -translate-y-1.5 transition-transform group-hover:rotate-12" fill="currentColor" />
          </Link>

          {/* Quick Nav Links for Desktop */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium uppercase tracking-wider text-neutral-300">
            <Link href="/tours" className="hover:text-amber-300 transition">
              Tours
            </Link>
            <Link href="/locations" className="hover:text-amber-300 transition">
              Destinations
            </Link>
            <Link href="/services" className="hover:text-amber-300 transition">
              Services
            </Link>
            <Link href="/stories" className="hover:text-amber-300 transition">
              Stories
            </Link>
            <Link href="/about" className="hover:text-amber-300 transition">
              About
            </Link>
          </nav>

          {/* Plan a Trip CTA */}
          <Link
            href="/customize"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-2 text-xs font-bold text-neutral-950 shadow-md transition hover:from-amber-300 hover:to-amber-400 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            <span>Plan a Trip</span>
            <ArrowUpRight size={15} strokeWidth={2.5} />
          </Link>
        </div>
      </header>

      {/* Fullscreen Mobile/Overlay Menu */}
      {menuOpen && <Navbar onClose={() => setMenuOpen(false)} />}
    </>
  );
}
