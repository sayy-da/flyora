"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, ArrowUpRight, Star, MapPin, Heart } from "lucide-react";

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
    rating: 4.89,
    reviewsCount: 410,
    toursCount: "35 Tours",
    priceFrom: "$1,250",
    description: "Emerald rice terraces, spiritual water temples, and serene tropical coastlines.",
  },
  {
    id: "alps",
    name: "Swiss Alps",
    country: "Switzerland",
    flag: "🇨🇭",
    category: "Europe",
    tag: "Mountain High",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1000&auto=format&fit=crop",
    rating: 4.98,
    reviewsCount: 195,
    toursCount: "15 Tours",
    priceFrom: "$2,950",
    description: "Majestic glacier peaks, scenic mountain railways, and serene alpine paths.",
  },
  {
    id: "marrakech",
    name: "Marrakech",
    country: "Morocco",
    flag: "🇲🇦",
    category: "Africa",
    tag: "Exotic Wonder",
    image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=1000&auto=format&fit=crop",
    rating: 4.87,
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
    <section className="relative overflow-hidden bg-neutral-50 px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <div className="mx-auto w-full max-w-[1600px]">
        {/* Section Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 flex w-fit items-center gap-2 rounded-full bg-amber-100/80 px-4 py-1.5 text-xs font-medium text-neutral-800">
              <Sparkles size={13} className="text-amber-500" fill="currentColor" />
              Popular Destinations
              <Sparkles size={13} className="text-amber-500" fill="currentColor" />
            </div>
            <h2
              className="text-4xl leading-tight text-neutral-900 sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
            >
              Explore Most <span className="italic font-medium">Popular</span>
              <br />
              Destinations Worldwide
            </h2>
          </div>

          <div className="flex flex-col gap-4 lg:items-end">
            <p className="max-w-md text-sm leading-relaxed text-neutral-500 lg:text-right">
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
                        ? "bg-neutral-900 text-white shadow-md"
                        : "bg-white text-neutral-600 hover:bg-neutral-200/70 border border-neutral-200/60"
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
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-white border border-neutral-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-neutral-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-neutral-800 shadow-sm backdrop-blur">
                    {item.tag}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(item.id);
                    }}
                    aria-label="Add to favorites"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-800 backdrop-blur transition hover:bg-white hover:scale-110"
                  >
                    <Heart
                      size={16}
                      className={favorites[item.id] ? "fill-rose-500 text-rose-500" : "text-neutral-700"}
                    />
                  </button>
                </div>

                {/* Bottom Overlay Info on Image */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1 text-xs backdrop-blur">
                    <MapPin size={13} className="text-amber-300" />
                    <span>{item.country}</span>
                    <span>{item.flag}</span>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-amber-400 px-2.5 py-1 text-xs font-bold text-neutral-900">
                    <Star size={12} fill="currentColor" strokeWidth={0} />
                    <span>{item.rating}</span>
                    <span className="text-[10px] opacity-80">({item.reviewsCount})</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between">
                    <h3
                      className="text-2xl font-bold text-neutral-900"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {item.name}
                    </h3>
                    <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
                      {item.toursCount}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-dashed border-neutral-200 pt-4">
                  <div>
                    <span className="text-xs text-neutral-400 block">Starting from</span>
                    <span className="text-lg font-bold text-neutral-900">{item.priceFrom}</span>
                    <span className="text-xs font-normal text-neutral-400"> / person</span>
                  </div>

                  <button className="flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-xs font-medium text-white transition hover:bg-neutral-800">
                    Explore
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-neutral-900">
                      <ArrowUpRight size={12} strokeWidth={2.5} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Footer CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-3 rounded-full bg-white border border-neutral-300 px-7 py-3.5 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-100 hover:shadow-md">
            View All 80+ Destinations
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-white">
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
