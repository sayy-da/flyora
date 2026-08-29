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
    <span className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white/10 text-2xl sm:text-4xl border border-white/15 shadow-inner shrink-0">
      {item.flag}
    </span>
  );
}

export default function CountryBanner() {
  const duplicatedCountries = [...countryList, ...countryList, ...countryList];

  return (
    <section className="relative w-full overflow-hidden bg-white select-none z-20 my-0 py-0">
      {/* Black Slanted Banner Container */}
      <div
        className="relative w-full bg-[#14151B] overflow-hidden"
        style={{
          clipPath:
            "polygon(0 calc(100vw * 120 / 2170), 100% 0, 100% calc(100% - calc(100vw * 120 / 2170)), 0 100%)",
        }}
      >
        {/* Top Black Line Stamp (rendered ONCE across full width) */}
        <img
          src="/images/black line up.png"
          alt=""
          className="absolute top-0 left-0 w-full h-auto pointer-events-none select-none z-20"
          draggable={false}
        />

        {/* Marquee Body with aligned slant */}
        <div
          className="relative z-10 w-[120%] -left-[10%] py-12 sm:py-16 md:py-20 overflow-hidden"
          style={{ transform: "rotate(-3.165deg)" }}
        >
          <div className="animate-marquee-infinite flex items-center gap-12 sm:gap-20">
            {duplicatedCountries.map((country, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-4 sm:gap-6 shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                <CountryMapDisplay item={country} />
                <span className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight font-sans">
                  {country.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Black Line Stamp (rendered ONCE across full width) */}
        <img
          src="/images/black line down.png"
          alt=""
          className="absolute bottom-0 left-0 w-full h-auto pointer-events-none select-none z-20"
          draggable={false}
        />
      </div>
    </section>
  );
}
