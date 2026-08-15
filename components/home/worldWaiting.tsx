"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function WorldWaiting() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-36 px-6 text-slate-900 select-none border-t border-slate-100">
      {/* Background Dashed Flight Path SVG */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40">
        <svg
          width="1100"
          height="450"
          viewBox="0 0 1100 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-6xl"
        >
          <path
            d="M 120 70 C 350 70 300 320 500 320 C 700 320 650 180 900 320"
            stroke="#94A3B8"
            strokeWidth="2"
            strokeDasharray="6 8"
          />
        </svg>
      </div>

      {/* Airplane Graphic — Top Left */}
      <div className="pointer-events-none absolute left-6 top-10 sm:left-24 sm:top-16 z-10 flex items-center gap-2 -rotate-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100/80 shadow-xs border border-slate-200/60 text-xl">
          ✈️
        </div>
      </div>

      {/* Red Destination Flag Pin — Bottom Right */}
      <div className="pointer-events-none absolute right-12 bottom-20 sm:right-32 sm:bottom-24 z-10 flex items-center gap-1">
        <div className="flex h-8 w-8 items-center justify-center text-lg rotate-12">
          ⛳
        </div>
      </div>

      {/* Stacked Postcard Art — Top Right */}
      <div className="pointer-events-none absolute right-4 top-8 sm:right-16 sm:top-12 z-20 hidden md:block">
        <div className="relative">
          {/* Layer 3 (Back) */}
          <div className="absolute top-4 left-4 h-44 w-60 rounded-2xl bg-pink-100 border-4 border-white shadow-md rotate-12" />
          {/* Layer 2 (Middle) */}
          <div className="absolute top-2 left-2 h-44 w-60 rounded-2xl bg-sky-100 border-4 border-white shadow-lg -rotate-6" />
          {/* Layer 1 (Top Front Photo) */}
          <div className="relative h-48 w-64 overflow-hidden rounded-2xl border-4 border-white shadow-2xl rotate-6">
            <Image
              src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=600&auto=format&fit=crop"
              alt="Great Wall of China"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Brazil Stamp — Bottom Left */}
      <div className="pointer-events-none absolute left-4 bottom-10 sm:left-16 sm:bottom-16 z-20 hidden sm:block -rotate-12">
        <div className="rounded-xl border-2 border-dashed border-emerald-600 bg-emerald-50/90 p-3 shadow-lg text-emerald-800 text-[11px] font-mono leading-tight">
          <div className="font-bold tracking-widest text-emerald-900">24.09.19 · BRAZIL</div>
          <div className="text-[10px] text-emerald-700">PASSPORT CONTROL</div>
          <div className="font-extrabold text-xs mt-0.5">RIO DE JANEIRO 🇧🇷</div>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        {/* Main Headline */}
        <h2
          className="text-5xl font-black text-[#0F172A] sm:text-7xl lg:text-8xl tracking-tight leading-[1.1] sm:leading-[1.08]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          The Whole <br />
          <span className="inline-flex items-center gap-1 font-sans font-black">
            W
            <span className="inline-block animate-spin-slow">🌍</span>
            rld
          </span>{" "}
          <br />
          is <span className="italic font-medium text-[#0F172A]">Waiting</span> For <br />
          You
        </h2>

        {/* Start Planning CTA Button */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <Link
            href="/customize"
            className="btn-hover-slide inline-flex items-center gap-3 rounded-full bg-[#FDE2E4] px-8 py-3.5 text-base font-extrabold text-[#0F172A] shadow-lg transition-transform duration-300 hover:scale-105 border border-pink-200 -rotate-2"
          >
            <span className="btn-text-wrapper">
              <span className="btn-text">Start Planning</span>
              <span className="btn-text-clone">Start Planning</span>
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-xs text-[#0F172A]">
              <ArrowUpRight size={17} strokeWidth={2.5} className="btn-arrow" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
