"use client";

import { ShieldCheck, Compass, Headphones, Award } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Hand-Crafted Itineraries",
    description: "Every journey is custom curated by destination experts to offer authentic, off-the-beaten-path experiences.",
    badge: "Curated",
  },
  {
    icon: ShieldCheck,
    title: "Transparent & Best Rate Guarantee",
    description: "No hidden booking fees, no surprise costs. Premium luxury travel with guaranteed rate protection.",
    badge: "Protected",
  },
  {
    icon: Headphones,
    title: "24/7 Dedicated Concierge",
    description: "From real-time flight updates to immediate local assistance, your personal concierge is always a message away.",
    badge: "Always On",
  },
  {
    icon: Award,
    title: "Verified 5-Star Local Guides",
    description: "Explore each destination accompanied by passionate, certified local guides who know every hidden gem.",
    badge: "Top Rated",
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
    <section className="relative bg-white pt-8 sm:pt-12 pb-20 px-6 sm:px-10 lg:px-16 text-slate-900 overflow-hidden">
      {/* Soft background ambient glow */}
      <div className="pointer-events-none absolute top-0 right-1/4 h-96 w-96 rounded-full bg-[#EA2C2A]/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-[#1B1B2F]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center">
          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full bg-[#FEF2F2] px-5 py-2 text-xs font-semibold text-[#262A67] border border-[#EA2C2A]/20">
            <img src="/images/flowericon.png" alt="" width={17} height={17} />
            The Flyora Distinction
            <img src="/images/flowericon.png" alt="" width={17} height={17} />
          </div>

          <h2
            className="text-4xl font-bold leading-tight text-[#262A67] sm:text-5xl lg:text-6xl tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Why Discerning Travelers{" "}
            <span className="italic font-medium text-[#EA2C2A]">
              Choose Flyora
            </span>
          </h2>

          <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-xl">
            We don't just book trips — we design unforgettable lifelong memories backed by unrivaled service and local expertise.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl bg-slate-50/70 border border-slate-200/80 p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:border-[#EA2C2A]/30 hover:shadow-xl hover:shadow-[#EA2C2A]/5"
              >
                {/* Subtle top pill badge */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FEF2F2] text-[#EA2C2A] transition-all duration-300 group-hover:bg-[#EA2C2A] group-hover:text-white group-hover:scale-110 shadow-xs">
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#EA2C2A] transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#EA2C2A] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section Banner */}
        <div className="rounded-3xl bg-[#0F172A] p-8 sm:p-12 shadow-2xl relative overflow-hidden text-white border border-slate-800">
          {/* Subtle red background gradient wash */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#EA2C2A]/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-[#EA2C2A]/10 blur-3xl" />

          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-800 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className={`${idx > 0 ? "pt-6 lg:pt-0" : ""} flex flex-col items-center justify-center`}>
                <div
                  className="text-4xl sm:text-5xl font-extrabold text-[#EA2C2A] mb-2 tracking-tight"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300">
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

