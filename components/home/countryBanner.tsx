"use client";

import { useState } from "react";

interface CountryItem {
  name: string;
  mapImage?: string;
  flag?: string;
}

const countryList: CountryItem[] = [
  { name: "Japan", mapImage: "/images/japan-map.svg.webp", flag: "🇯🇵" },
  { name: "Morocco", mapImage: "/images/morocco-map.svg.webp", flag: "🇲🇦" },
  { name: "Iceland", mapImage: "/images/iceland-map.svg.webp", flag: "🇮🇸" },
  // { name: "Norway", mapImage: "/images/norway-map.svg.webp", flag: "🇳🇴" },
  { name: "Switzerland", mapImage: "/images/switzerland-map.svg.webp", flag: "🇨🇭" },
  { name: "Peru", mapImage: "/images/peru-map.svg.webp", flag: "🇵🇪" },
  { name: "Greece", mapImage: "/images/greece-map.svg.webp", flag: "🇬🇷" },
  { name: "Vietnam", mapImage: "/images/vietnam-map.svg.webp", flag: "🇻🇳" },
];

function CountryMapDisplay({ item }: { item: CountryItem }) {
  const [imgError, setImgError] = useState(false);
  const mapSrc = item.mapImage || `/images/${item.name.toLowerCase()}-map.svg`;

  if (!imgError) {
    return (
      <img
        src={mapSrc}
        alt={`${item.name} map`}
        onError={() => setImgError(true)}
        className="h-12 sm:h-16 md:h-20 w-auto object-contain shrink-0 drop-shadow-md transition-transform duration-300 group-hover:scale-110"
        draggable={false}
      />
    );
  }

  return (
    <span className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white text-2xl sm:text-4xl border border-slate-200 shadow-xs shrink-0">
      {item.flag}
    </span>
  );
}

export default function CountryBanner() {
  const duplicatedCountries = [...countryList, ...countryList, ...countryList];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white to-[#FCD5D3] select-none z-20 py-8 sm:py-12">
      {/* Edge gradient fade masks for smooth entrance & exit */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent" />

      {/* Marquee Body */}
      <div className="animate-marquee-infinite flex items-center gap-12 sm:gap-20">
        {duplicatedCountries.map((country, idx) => (
          <div
            key={idx}
            className="group flex items-center gap-4 sm:gap-6 shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <CountryMapDisplay item={country} />
            <span className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#262A67] tracking-tight font-sans">
              {country.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
