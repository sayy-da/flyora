"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowUpRight, Star, Heart } from "lucide-react";

interface Destination {
  id: string;
  name: string;
  country: string;
  flag: string;
  category: string;
  tag: string;
  image: string;
  rating: number;
  reviewsCount: number;
  toursCount: string;
  priceFrom: string;
  description: string;
}

const filterCategories = ["All", "Asia", "Europe", "Tropical", "Americas", "Africa"];

const destinations: Destination[] = [
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    flag: "🇯🇵",
    category: "Asia",
    tag: "Cultural Classic",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop",
    rating: 4.95,
    reviewsCount: 320,
    toursCount: "24 Tours",
    priceFrom: "$1,850",
    description: "Historic temples, tranquil bamboo groves, and traditional teahouses in full bloom.",
  },
  {
    id: "santorini",
    name: "Santorini",
    country: "Greece",
    flag: "🇬🇷",
    category: "Europe",
    tag: "Trending Coastal",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000&auto=format&fit=crop",
    rating: 4.92,
    reviewsCount: 280,
    toursCount: "18 Tours",
    priceFrom: "$2,100",
    description: "Sun-kissed whitewashed cliffside villas and dramatic Mediterranean sunsets.",
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    flag: "🇮🇩",
    category: "Tropical",
    tag: "Island Escape",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop",
    rating: 4.88,
    reviewsCount: 410,
    toursCount: "32 Tours",
    priceFrom: "$1,250",
    description: "Emerald rice terraces, spiritual water temples, and vibrant coastal retreats.",
  },
  {
    id: "swiss-alps",
    name: "Swiss Alps",
    country: "Switzerland",
    flag: "🇨🇭",
    category: "Europe",
    tag: "Alpine Luxury",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1000&auto=format&fit=crop",
    rating: 4.97,
    reviewsCount: 195,
    toursCount: "15 Tours",
    priceFrom: "$3,400",
    description: "Majestic Matterhorn views, luxury mountain chalets, and scenic alpine express trains.",
  },
  {
    id: "marrakech",
    name: "Marrakech",
    country: "Morocco",
    flag: "🇲🇦",
    category: "Africa",
    tag: "Exotic Heritage",
    image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=1000&auto=format&fit=crop",
    rating: 4.86,
    reviewsCount: 240,
    toursCount: "20 Tours",
    priceFrom: "$1,550",
    description: "Vibrant spice markets, serene riads, and breathtaking Atlas mountain vistas.",
  },
  {
    id: "machu-picchu",
    name: "Machu Picchu",
    country: "Peru",
    flag: "🇵🇪",
    category: "Americas",
    tag: "Ancient Wonder",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1000&auto=format&fit=crop",
    rating: 4.96,
    reviewsCount: 310,
    toursCount: "12 Tours",
    priceFrom: "$2,400",
    description: "Mystical Inca citadel high in the cloud-draped peaks of the Andes Mountains.",
  },
];

export default function PopularDestinations() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredDestinations =
    activeCategory === "All"
      ? destinations
      : destinations.filter((dest) => dest.category === activeCategory);

  return (
    <section className="relative overflow-hidden bg-[#EEF2FF]/40 px-6 py-20 sm:px-10 sm:py-28 lg:px-16 border-t border-b border-[#C7D2FE]/40">
      <div className="mx-auto w-full max-w-[1600px]">
        {/* Section Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 flex w-fit items-center gap-2 rounded-full bg-[#FEF2F2] px-4 py-1.5 text-xs font-semibold text-[#EA2C2A] border border-[#EA2C2A]/20">
              <Sparkles size={13} className="text-[#EA2C2A]" fill="currentColor" />
              Popular Destinations
              <Sparkles size={13} className="text-[#EA2C2A]" fill="currentColor" />
            </div>
            <h2
              className="text-4xl leading-tight text-[#262A67] sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
            >
              Explore Most <span className="italic font-medium text-[#EA2C2A]">Popular</span>
              <br />
              Destinations Worldwide
            </h2>
          </div>

          <div className="flex flex-col gap-4 lg:items-end">
            <p className="max-w-md text-sm leading-relaxed text-slate-600 lg:text-right">
              From historic ancient cities to pristine tropical paradises, explore handpicked destinations designed for extraordinary memories.
            </p>
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {filterCategories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${
                      isActive
                        ? "bg-[#262A67] text-white shadow-md"
                        : "bg-white text-slate-700 hover:bg-[#EEF2FF] border border-slate-200"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDestinations.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-white border border-slate-200/90 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#262A67]/40"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#262A67] shadow-sm backdrop-blur border border-slate-100">
                    {item.tag}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(item.id);
                    }}
                    aria-label="Add to favorites"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-sm backdrop-blur transition hover:scale-110 hover:text-[#EA2C2A]"
                  >
                    <Heart
                      size={16}
                      className={favorites[item.id] ? "fill-[#EA2C2A] text-[#EA2C2A]" : ""}
                    />
                  </button>
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-200">
                      <span>{item.flag}</span>
                      <span>{item.country}</span>
                    </div>
                    <h3
                      className="text-2xl font-bold tracking-tight text-white group-hover:text-[#EA2C2A] transition-colors"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {item.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-[#262A67] backdrop-blur">
                    <Star size={12} className="fill-[#EA2C2A] text-[#EA2C2A]" />
                    <span>{item.rating}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <p className="text-sm leading-relaxed text-slate-600 line-clamp-2">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Starting from
                    </span>
                    <p className="text-xl font-extrabold text-[#262A67]">
                      {item.priceFrom}
                      <span className="text-xs font-normal text-slate-500"> / person</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-bold text-[#262A67]">
                      {item.toursCount}
                    </span>
                    <Link
                      href={`/locations/${item.id}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EA2C2A] text-white transition-transform duration-300 group-hover:scale-110 hover:bg-[#C82120] shadow-md"
                      aria-label={`Explore ${item.name}`}
                    >
                      <ArrowUpRight size={17} strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
