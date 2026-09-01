"use client";

import { useState } from "react";
import Link from "next/link";
import { LayoutGrid, ArrowUpRight } from "lucide-react";
import Navbar from "./navbar";

interface HeaderProps {
  transparent?: boolean;
}

export default function Header({ transparent = false }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`relative z-40 w-full bg-transparent transition-all duration-300 ${
          transparent ? "text-white" : "text-slate-900"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 pt-6 pb-2 sm:px-10 sm:pt-8 sm:pb-3">
          
          {/* Menu Button with Black Circle Icon */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2.5 rounded-full bg-white px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-[#121629] shadow-xs transition hover:scale-105 active:scale-95 border border-slate-200/80 cursor-pointer"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#121629] text-white">
              <LayoutGrid size={13} strokeWidth={2.5} />
            </div>
            <span>Menu</span>
          </button>

          {/* Logo */}
          <Link href="/" className="select-none flex items-center group">
            <img
              src={transparent ? "/images/light-logo.png" : "/images/dark-logo.png"}
              alt="Flyora"
              className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Plan a Trip CTA Button */}
          <Link
            href="/customize"
            className="btn-hover-slide inline-flex items-center gap-3 rounded-full bg-[#FDE8E7] py-1.5 pl-4 pr-1.5 sm:py-2 sm:pl-5 sm:pr-2 text-xs sm:text-sm font-semibold text-[#121629] transition-all duration-300 hover:bg-[#EA2C2A] hover:text-white border border-[#EA2C2A]/20 shadow-xs"
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

      {/* Fullscreen Overlay Navigation Menu */}
      {menuOpen && <Navbar onClose={() => setMenuOpen(false)} />}
    </>
  );
}
