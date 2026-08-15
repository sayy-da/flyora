"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight, Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  tourImage: string;
  rating: number;
  tourName: string;
  countryTag: string;
  flag: string;
  quote: string;
  highlight: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Elena Rostova",
    role: "Architect & Explorer",
    location: "Toronto, Canada",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    tourImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop",
    rating: 5,
    tourName: "Japan",
    countryTag: "Asia · East Asia",
    flag: "🇯🇵",
    quote:
      "Quiet temples, neon-lit streets and seasons shifting in perfect harmony. Flyora curated an absolute dream itinerary for Kyoto. Every boutique tea house and private guide was top-notch.",
    highlight: "An absolute dream itinerary!",
  },
  {
    id: "2",
    name: "Marcus & Sarah Vance",
    role: "Honeymooners",
    location: "London, UK",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    tourImage: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop",
    rating: 5,
    tourName: "Santorini",
    countryTag: "Europe · Greece",
    flag: "🇬🇷",
    quote:
      "From the private sunset yacht cruise in Oia to cliffside wine tastings, everything was handled seamlessly without a single stress. The most romantic trip of our lives.",
    highlight: "Seamless and stress-free honeymoon!",
  },
  {
    id: "3",
    name: "David K. Mitchell",
    role: "Adventure Photographer",
    location: "New York, USA",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    tourImage: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=800&auto=format&fit=crop",
    rating: 5,
    tourName: "Morocco",
    countryTag: "Africa · North Africa",
    flag: "🇲🇦",
    quote:
      "Camping under the Sahara stars and driving through the Atlas mountains was unforgettable. Flyora's local guides were genuine experts who knew every hidden spot.",
    highlight: "Unforgettable local experiences!",
  },
  {
    id: "4",
    name: "Sophia Chen",
    role: "Solo Traveler",
    location: "Singapore",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    tourImage: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop",
    rating: 5,
    tourName: "Switzerland",
    countryTag: "Europe · Swiss Alps",
    flag: "🇨🇭",
    quote:
      "The Glacier Express seat allocation and Zermatt chalet booking were flawless. 10/10 level of luxury travel coordination and solo safety.",
    highlight: "Flawless luxury coordination!",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeIndex];

  return (
    <section className="relative overflow-hidden bg-[#FDF0E7] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 text-slate-900 select-none">
      {/* Curved dotted arc line in top background */}
      <div className="pointer-events-none absolute left-0 right-0 top-12 z-0 flex justify-center opacity-60">
        <svg
          width="1200"
          height="220"
          viewBox="0 0 1200 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-5xl"
        >
          <path
            d="M 50 40 Q 600 240 1150 40"
            stroke="#D9BCA6"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
        </svg>
      </div>

      {/* Floating country flags along the arc */}
      <div className="pointer-events-none absolute left-0 right-0 top-14 z-0 mx-auto flex max-w-4xl justify-between px-12 sm:px-24">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md text-base border border-slate-200/60 -rotate-12 translate-y-2">
          🇲🇦
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md text-base border border-slate-200/60 rotate-6 translate-y-12">
          🇮🇸
        </div>
        {/* Center Japan flag with red dot ring */}
        <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg border-2 border-[#EA2C2A] translate-y-20">
          <span className="h-4 w-4 rounded-full bg-[#EA2C2A]" />
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md text-base border border-slate-200/60 -rotate-6 translate-y-12">
          🇳🇴
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md text-base border border-slate-200/60 rotate-12 translate-y-2">
          🇵🇰
        </div>
      </div>

      {/* Decorative Stamp — Bottom Left */}
      <div className="pointer-events-none absolute left-4 bottom-8 hidden -rotate-12 sm:block lg:left-12 lg:bottom-16 z-10 opacity-90">
        <Image
          src="/images/japan-stamp.png"
          alt="London stamp"
          width={170}
          height={120}
          className="drop-shadow-lg"
        />
      </div>

      {/* Decorative Stamp — Right */}
      <div className="pointer-events-none absolute right-4 top-1/3 hidden rotate-12 sm:block lg:right-12 z-10 opacity-90">
        <Image
          src="/images/paris-stamp.png"
          alt="Arrived stamp"
          width={150}
          height={100}
          className="drop-shadow-lg"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/80 px-4 py-1 text-xs font-semibold text-slate-800 shadow-xs backdrop-blur-sm">
            <img src="/images/flowericon.png" alt="" className="h-3.5 w-3.5" />
            <span>Traveler Voices</span>
            <img src="/images/flowericon.png" alt="" className="h-3.5 w-3.5" />
          </div>

          <h2
            className="text-4xl font-bold leading-tight text-[#0F172A] sm:text-5xl lg:text-6xl tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Traveler <span className="italic font-medium text-[#EA2C2A]">Voices</span>
            <br />
            This Season
          </h2>
        </div>

        {/* Center Interactive Carousel Card */}
        <div className="relative mx-auto mt-8 flex max-w-4xl items-center justify-center">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous story"
            className="absolute -left-4 sm:-left-6 z-20 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white text-slate-800 shadow-lg border border-slate-200/80 transition-transform duration-300 hover:scale-110 hover:border-[#EA2C2A] active:scale-95"
          >
            <ChevronLeft size={20} strokeWidth={2.25} />
          </button>

          {/* Main Card */}
          <div className="w-full overflow-hidden rounded-[32px] bg-white shadow-2xl border border-slate-100/80 transition-all duration-500">
            <div className="flex flex-col md:flex-row items-stretch">
              {/* Card Image */}
              <div className="relative w-full md:w-1/2 min-h-[260px] md:min-h-[340px] overflow-hidden bg-slate-100">
                <Image
                  src={current.tourImage}
                  alt={current.tourName}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="flex w-full md:w-1/2 flex-col justify-between p-6 sm:p-8 lg:p-10 text-left">
                <div>
                  <h3 className="text-3xl font-bold text-[#0F172A] tracking-tight mb-2">
                    {current.tourName}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {current.quote}
                  </p>

                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">
                      {current.countryTag}
                    </span>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: current.rating }).map((_, i) => (
                        <Star key={i} size={13} className="fill-[#EA2C2A] text-[#EA2C2A]" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Traveler Info & CTA Button */}
                <div className="flex flex-col gap-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#EA2C2A]/40 shrink-0 shadow-xs">
                      <Image
                        src={current.avatar}
                        alt={current.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0F172A] leading-none">
                        {current.name}
                      </h4>
                      <p className="mt-1 text-[11px] text-slate-500 font-medium">
                        {current.role} · {current.location}
                      </p>
                    </div>
                  </div>

                  <div className="mt-2">
                    <Link
                      href="/stories"
                      className="btn-hover-slide inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#EA2C2A] shadow-md"
                    >
                      <span className="btn-text-wrapper">
                        <span className="btn-text">Read Traveler Story</span>
                        <span className="btn-text-clone">Read Traveler Story</span>
                      </span>
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#0F172A]">
                        <ArrowUpRight size={13} strokeWidth={2.5} className="btn-arrow" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next story"
            className="absolute -right-4 sm:-right-6 z-20 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white text-slate-800 shadow-lg border border-slate-200/80 transition-transform duration-300 hover:scale-110 hover:border-[#EA2C2A] active:scale-95"
          >
            <ChevronRight size={20} strokeWidth={2.25} />
          </button>
        </div>

        {/* Paragraph Description below card */}
        <p className="mx-auto mt-10 max-w-xl text-center text-xs sm:text-sm text-slate-600 leading-relaxed">
          From mist-wrapped mountain trails to sun-drenched coastal villages — hand-selected destinations that offer experiences lasting long after you return.
        </p>

        {/* Bottom CTA Pill Badge with Overlapping Country Flags */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/stories"
            className="group flex items-center gap-3 rounded-full bg-white px-5 py-2.5 shadow-md border border-slate-200/80 transition-all duration-300 hover:shadow-xl hover:border-[#EA2C2A]/40 hover:scale-105"
          >
            {/* Overlapping flag avatars */}
            <div className="flex -space-x-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-xs border border-white shadow-xs">
                🇺🇸
              </span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-xs border border-white shadow-xs">
                🇨🇦
              </span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-xs border border-white shadow-xs">
                🇸🇬
              </span>
            </div>
            <span className="text-xs font-bold text-[#0F172A] group-hover:text-[#EA2C2A] transition-colors">
              View All Traveler Stories
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

