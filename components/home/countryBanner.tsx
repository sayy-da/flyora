"use client";

import Image from "next/image";
import { useState } from "react";

interface CountryItem {
  name: string;
  mapImage?: string;
  flag?: string;
}

const countryList: CountryItem[] = [
  { name: "Morocco", mapImage: "/images/morocco-map.png", flag: "🇲🇦" },
  { name: "Iceland", mapImage: "/images/iceland-map.png", flag: "🇮🇸" },
  { name: "Japan", mapImage: "/images/japan-map.png", flag: "🇯🇵" },
  { name: "Norway", mapImage: "/images/norway-map.png", flag: "🇳🇴" },
  { name: "Switzerland", mapImage: "/images/switzerland-map.png", flag: "🇨🇭" },
  { name: "Peru", mapImage: "/images/peru-map.png", flag: "🇵🇪" },
  { name: "Vietnam", mapImage: "/images/vietnam-map.png", flag: "🇻🇳" },
  { name: "Greece", mapImage: "/images/greece-map.png", flag: "🇬🇷" },
  { name: "Maldives", mapImage: "/images/maldives-map.png", flag: "🇲🇻" },
  { name: "Tanzania", mapImage: "/images/tanzania-map.png", flag: "🇹🇿" },
  { name: "China", mapImage: "/images/china-map.png", flag: "🇨🇳" },
  { name: "Indonesia", mapImage: "/images/indonesia-map.png", flag: "🇮🇩" },
];

function CountryMapDisplay({ item }: { item: CountryItem }) {
  const [imgError, setImgError] = useState(false);
  const mapSrc = item.mapImage || `/images/${item.name.toLowerCase()}-map.png`;

  if (!imgError) {
    return (
      <img
        src={mapSrc}
        alt={`${item.name} map`}
        onError={() => setImgError(true)}
        className="h-12 sm:h-16 md:h-20 w-auto object-contain shrink-0 drop-shadow-md transition-transform duration-300 group-hover:scale-110"
      />
    );
  }

  // Graceful fallback if country map png is not yet uploaded by user
  return (
    <span className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white/10 text-2xl sm:text-4xl border border-white/15 shadow-inner shrink-0">
      {item.flag}
    </span>
  );
}

export default function CountryBanner() {
  const duplicatedCountries = [...countryList, ...countryList];

  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-16 select-none z-20">
      {/* Slanted Marquee Ribbon Track */}
      <div className="relative w-[130vw] -left-[15vw] -rotate-2 sm:-rotate-[2.5deg] shadow-2xl">
        {/* Top Stamp Scalloped Border */}
        <div
          className="w-full h-4 sm:h-6 bg-repeat-x bg-bottom"
          style={{
            backgroundImage: "url('/images/black%20line%20up.png')",
            backgroundSize: "auto 100%",
          }}
        />

        {/* Black Center Banner Body */}
        <div className="bg-[#14151B] py-4 sm:py-6 overflow-hidden">
          <div className="animate-marquee-infinite flex items-center gap-12 sm:gap-20">
            {duplicatedCountries.map((country, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-4 sm:gap-6 shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                <CountryMapDisplay item={country} />
                <span className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-sans">
                  {country.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stamp Scalloped Border */}
        <div
          className="w-full h-4 sm:h-6 bg-repeat-x bg-top"
          style={{
            backgroundImage: "url('/images/black%20line%20down.png')",
            backgroundSize: "auto 100%",
          }}
        />
      </div>
    </section>
  );
}
