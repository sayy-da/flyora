"use client";

import { ShieldCheck, Compass, Headphones, Sparkles, Award, MapPin } from "lucide-react";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const features = [
  {
    icon: Compass,
    title: "Hand-Crafted Itineraries",
    description: "Every journey is custom curated by destination experts to offer authentic, off-the-beaten-path experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent & Best Price Guarantee",
    description: "No hidden booking fees, no surprise costs. Premium luxury travel with guaranteed best rate protection.",
  },
  {
    icon: Headphones,
    title: "24/7 Dedicated Travel Concierge",
    description: "From real-time flight updates to immediate local assistance, your personal concierge is a WhatsApp away.",
  },
  {
    icon: Award,
    title: "Verified 5-Star Local Guides",
    description: "Explore each destination accompanied by passionate, certified local guides who know every secret spot.",
  },
];

const stats = [
  { value: "15+", label: "Years of Crafting Journeys" },
  { value: "50k+", label: "Happy Global Travelers" },
  { value: "120+", label: "Bespoke Destinations" },
  { value: "4.95", label: "Average Rating Stars" },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-neutral-950 py-24 px-6 sm:px-10 lg:px-16 text-white overflow-hidden">
      {/* Background glow highlights */}
      <div className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-amber-400/5 blur-[120px] rounded-full" />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-amber-300 mb-4 border border-amber-400/20">
            <Sparkles size={14} fill="currentColor" />
            The Flyora Distinction
          </div>
          <h2
            className="text-4xl font-bold sm:text-5xl lg:text-6xl text-white tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Why Discerning Travelers <br />
            <span className={`${caveat.className} text-amber-300 font-normal text-5xl sm:text-7xl`}>
              Choose Flyora
            </span>
          </h2>
          <p className="mt-4 text-base text-neutral-400 leading-relaxed max-w-xl">
            We don't just book trips — we design unforgettable lifelong memories backed by unrivaled service and local expertise.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl bg-neutral-900/80 border border-neutral-800 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/40 hover:bg-neutral-900"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300 transition-colors group-hover:bg-amber-400 group-hover:text-neutral-950">
                  <Icon size={28} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-900 border border-neutral-800 p-8 sm:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className={`${idx > 0 ? "pt-6 lg:pt-0" : ""}`}>
                <div
                  className="text-4xl sm:text-5xl font-extrabold text-amber-300 mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium uppercase tracking-wider text-neutral-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
