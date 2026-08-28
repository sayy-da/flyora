"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function WorldWaiting() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-36 px-4 sm:px-6 lg:px-12 text-slate-900 select-none">
      <div className="relative mx-auto w-full max-w-[1360px] min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center justify-center">

        {/* ─── Background Flight Path & Connected Destination Flag ─── */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 1200 620"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Dashed Flight Trail */}
            <path
              d="M 195 125 C 330 125 410 150 460 270 C 510 390 445 480 370 415 C 300 350 365 245 520 275 C 675 305 770 435 940 435"
              stroke="#CBD5E1"
              strokeWidth="2.5"
              strokeDasharray="6 8"
              strokeLinecap="round"
            />

            {/* Destination Flag Marker Pin connected to the trail endpoint (940, 435) */}
            <g transform="translate(940, 410)">
              {/* Base Dot */}
              <ellipse cx="0" cy="25" rx="4" ry="2.5" fill="#0F172A" />
              {/* Flag Pole */}
              <line x1="0" y1="25" x2="0" y2="0" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
              {/* Waving Red Flag */}
              <path
                d="M 0 0 C 7 -3, 13 3, 20 0 L 20 12 C 13 15, 7 9, 0 12 Z"
                fill="#EA2C2A"
                stroke="#C82120"
                strokeWidth="0.5"
              />
            </g>
          </svg>
        </div>

        {/* ─── Airplane Graphic — Top Left ─── */}
        <div className="pointer-events-none absolute left-2 top-4 sm:left-8 sm:top-6 lg:left-14 lg:top-22 z-20 -rotate-2">
          <div className="relative w-32 h-16 sm:w-40 sm:h-20 lg:w-48 lg:h-24 drop-shadow-md">
            <Image
              src="/images/plane.png"
              alt="Airplane"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* ─── Stacked Postcard Art — Top Right ─── */}
        <div className="pointer-events-none absolute right-2 top-2 sm:right-8 sm:top-4 lg:right-16 lg:top-6 z-20 hidden md:block">
          <div className="relative">
            {/* Layer 3 (Back) */}
            <div className="absolute top-4 left-4 h-36 w-52 lg:h-44 lg:w-64 rounded-3xl bg-[#FEE2E2] border-4 border-white shadow-md rotate-12" />
            {/* Layer 2 (Middle) */}
            <div className="absolute top-2 left-2 h-36 w-52 lg:h-44 lg:w-64 rounded-3xl bg-[#E0F2FE] border-4 border-white shadow-lg -rotate-6" />
            {/* Layer 1 (Top Front Photo) */}
            <div className="relative h-30 w-46 lg:h-38 lg:w-58 overflow-hidden rounded-3xl border-4 border-white shadow-2xl rotate-6">
              <Image
                src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=600&auto=format&fit=crop"
                alt="Great Wall of China"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* ─── Brazil Stamp — Bottom Left ─── */}
        <div className="pointer-events-none absolute left-2 bottom-4 sm:left-6 sm:bottom-6 lg:left-44 lg:bottom-50 z-20 -rotate-[20deg]">
          <div className="relative w-24 h-16 sm:w-32 sm:h-22 lg:w-36 lg:h-26 drop-shadow-md transition-transform duration-500 hover:scale-105">
            <Image
              src="/images/brazil-stamp.png"
              alt="Brazil Passport Stamp"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* ─── Center Typography & Headline ─── */}
        <div className="relative z-10 mx-auto w-full max-w-4xl text-center px-4">
          <h2 className="text-5xl font-black text-[#0F172A] sm:text-7xl lg:text-[88px] tracking-tight leading-[1.12] sm:leading-[1.1]">
            The Whole
            <br />
            <span className="inline-flex items-center justify-center">
              W
              <span className="relative inline-block w-11 h-11 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-1 align-middle -mt-1 sm:-mt-2">
                <Image
                  src="/images/globe.png"
                  alt="Globe"
                  fill
                  className="object-contain"
                  priority
                />
              </span>
              rld
            </span>
            <br />
            is{" "}
            <span
              className="italic font-normal font-serif text-[#0F172A]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Waiting
            </span>{" "}
            For
            <br />
            You
          </h2>

          {/* ─── Start Planning CTA Button ─── */}
          <div className="mt-8 sm:mt-10 flex justify-center">
            <Link
              href="/customize"
              className="btn-hover-slide inline-flex items-center gap-3 rounded-full bg-[#FCE7F3] px-7 py-3 sm:px-8 sm:py-3.5 text-base sm:text-lg font-bold text-[#0F172A] shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#FBCFE8] border border-pink-200"
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
      </div>
    </section>
  );
}
