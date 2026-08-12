"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  tourName: string;
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
    rating: 5,
    tourName: "Cherry Blossoms of Kyoto",
    quote:
      "Flyora curated an absolute dream itinerary for Kyoto. Every boutique tea house, hidden garden, and private guide was top-notch.",
    highlight: "An absolute dream itinerary!",
  },
  {
    id: "2",
    name: "Marcus & Sarah Vance",
    role: "Honeymooners",
    location: "London, UK",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    tourName: "Santorini Coastal Escape",
    quote:
      "From the private sunset yacht cruise in Oia to cliffside wine tastings, everything was handled seamlessly without a single stress.",
    highlight: "Seamless and stress-free honeymoon!",
  },
  {
    id: "3",
    name: "David K. Mitchell",
    role: "Adventure Photographer",
    location: "New York, USA",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    tourName: "Marrakech & Sahara Journey",
    quote:
      "Camping under the Sahara stars and driving through the Atlas mountains was unforgettable. Flyora's local guides were genuine experts.",
    highlight: "Unforgettable local experiences!",
  },
  {
    id: "4",
    name: "Sophia Chen",
    role: "Solo Traveler",
    location: "Singapore",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    tourName: "Swiss Alps Express",
    quote:
      "The Glacier Express seat allocation and Zermatt chalet booking were flawless. 10/10 level of luxury travel coordination.",
    highlight: "Flawless luxury coordination!",
  },
];

const stats = [
  { value: "99.4%", label: "Satisfaction Rate", subtext: "Based on 1,200+ reviews" },
  { value: "50k+", label: "Happy Travelers", subtext: "Across 70 countries" },
  { value: "4.95", label: "Average Star Rating", subtext: "Out of 5 stars" },
  { value: "15+", label: "Years Experience", subtext: "Luxury travel curation" },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 sm:py-28 lg:px-16 border-b border-slate-100">
      <div className="mx-auto w-full max-w-[1600px]">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full bg-[#FEF2F2] px-4 py-1.5 text-xs font-semibold text-[#EA2C2A] border border-[#EA2C2A]/20">
            <Sparkles size={13} className="text-[#EA2C2A]" fill="currentColor" />
            Traveler Voices
            <Sparkles size={13} className="text-[#EA2C2A]" fill="currentColor" />
          </div>

          <h2
            className="text-4xl leading-tight text-[#262A67] sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
          >
            Stories <span className="italic font-medium text-[#EA2C2A]">From</span> Our
            <br />
            Global Explorers
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
            Read real feedback and genuine experiences shared by adventurers who trusted Flyora to craft their dream journeys.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center rounded-2xl bg-[#EEF2FF]/60 p-6 text-center border border-[#C7D2FE]/60"
            >
              <div
                className="text-3xl font-extrabold text-[#262A67] sm:text-4xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-bold text-[#262A67] sm:text-sm">
                {stat.label}
              </div>
              <div className="mt-0.5 text-[11px] text-slate-500 font-medium">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`group cursor-pointer relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
                activeIndex === idx
                  ? "bg-[#262A67] text-white shadow-xl scale-[1.02]"
                  : "bg-slate-50 text-slate-900 border border-slate-200/90 hover:bg-white hover:border-[#EA2C2A]/50"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Quote
                    size={28}
                    className={activeIndex === idx ? "text-[#EA2C2A]" : "text-[#EA2C2A]/70"}
                  />
                  <div className="flex items-center gap-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="fill-[#EA2C2A] text-[#EA2C2A]"
                      />
                    ))}
                  </div>
                </div>

                <span
                  className={`inline-block rounded-full px-3 py-1 text-[11px] font-bold mb-4 ${
                    activeIndex === idx
                      ? "bg-white/15 text-white"
                      : "bg-[#EEF2FF] text-[#262A67]"
                  }`}
                >
                  {item.tourName}
                </span>

                <p
                  className={`text-sm leading-relaxed ${
                    activeIndex === idx ? "text-slate-200" : "text-slate-600"
                  }`}
                >
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-slate-200/20">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#EA2C2A]/40 shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold leading-none">{item.name}</h4>
                  <p
                    className={`mt-1 text-[11px] ${
                      activeIndex === idx ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action button */}
        <div className="mt-12 text-center">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 rounded-full bg-[#EA2C2A] px-6 py-3 text-xs font-bold text-white transition hover:bg-[#C82120] shadow-md uppercase tracking-wider"
          >
            <span>Read All Traveler Stories</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
