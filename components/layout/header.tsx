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
            : "bg-white/95 backdrop-blur-md border-b border-slate-200/80 text-slate-900 shadow-xs"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 sm:px-10">
          {/* Menu Trigger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2 rounded-full bg-[#EEF2FF] px-4 py-2 text-xs font-semibold text-[#262A67] transition hover:bg-[#E0E7FF] sm:text-sm border border-[#C7D2FE]"
          >
            <LayoutGrid size={15} strokeWidth={2.2} />
            <span>Menu</span>
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group">
            <span className={`${caveat.className} text-3xl font-bold tracking-wide text-[#262A67] sm:text-4xl`}>
              Flyora
            </span>
            <Sparkles size={16} className="text-[#EA2C2A] -translate-y-1.5 transition-transform group-hover:rotate-12" fill="currentColor" />
          </Link>

          {/* Quick Nav Links for Desktop */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-[#262A67]">
            <Link href="/tours" className="hover:text-[#EA2C2A] transition">
              Tours
            </Link>
            <Link href="/locations" className="hover:text-[#EA2C2A] transition">
              Destinations
            </Link>
            <Link href="/services" className="hover:text-[#EA2C2A] transition">
              Services
            </Link>
            <Link href="/stories" className="hover:text-[#EA2C2A] transition">
              Stories
            </Link>
            <Link href="/about" className="hover:text-[#EA2C2A] transition">
              About
            </Link>
          </nav>

          {/* Plan a Trip CTA */}
          <Link
            href="/customize"
            className="flex items-center gap-2 rounded-full bg-[#EA2C2A] px-4 py-2 text-xs font-bold text-white shadow-md transition hover:bg-[#C82120] sm:px-5 sm:py-2.5 sm:text-sm"
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
