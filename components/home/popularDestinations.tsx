"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowUpRight, Star, Heart } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { popularDestinationsQuery } from "@/sanity/lib/queries";
import { FALLBACK_DESTINATIONS, type Destination } from "@/sanity/lib/fetchData";

const filterCategories = ["All", "Asia", "Europe", "Tropical", "Americas", "Africa"];

export default function PopularDestinations() {
  const [destinations, setDestinations] = useState<Destination[]>(FALLBACK_DESTINATIONS);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const data = await client.fetch(popularDestinationsQuery);
        if (data && data.length > 0) {
          setDestinations(data);
        } else {
          setDestinations(FALLBACK_DESTINATIONS);
        }
      } catch (error) {
        console.warn("Could not fetch Sanity destinations, using fallback:", error);
        setDestinations(FALLBACK_DESTINATIONS);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredDestinations =
    activeCategory === "All"
      ? destinations.slice(0, 3)
      : destinations.filter((dest) => dest.region === activeCategory).slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#E4ECFD] to-white px-6 pt-12 pb-16 sm:px-10 sm:pt-16 sm:pb-24 lg:px-16">
      <div className="mx-auto w-full max-w-[1600px]">
        {/* Section Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 flex w-fit items-center gap-2 rounded-full bg-[#FEF2F2] px-5 py-2 text-xs font-semibold text-[#262A67] border border-[#EA2C2A]/20">
              <img src="/images/flowericon.png" alt="icon" width={17} height={17} />
              Popular Destinations
              <img src="/images/flowericon.png" alt="icon" width={17} height={17} />
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
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${isActive
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
        <div className="mt-14">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <p className="text-slate-600">Loading destinations...</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredDestinations.map((item) => (
                  <div
                    key={item._id}
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
                            toggleFavorite(item._id);
                          }}
                          aria-label="Add to favorites"
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-sm backdrop-blur transition hover:scale-110 hover:text-[#EA2C2A]"
                        >
                          <Heart
                            size={16}
                            className={favorites[item._id] ? "fill-[#EA2C2A] text-[#EA2C2A]" : ""}
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
                            ${item.startingPrice}
                            <span className="text-xs font-normal text-slate-500"> / person</span>
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-bold text-[#262A67]">
                            {item.toursCount} Tours
                          </span>
                          <Link
                            href={`/locations/${item.slug}`}
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

              <div className="mt-12 flex items-center justify-center">
                <Link
                  href="/destinations"
                  className="btn-hover-slide inline-flex items-center gap-3 rounded-full bg-[#262A67] py-2.5 pl-6 pr-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#EA2C2A] hover:shadow-lg"
                >
                  <span className="btn-text-wrapper">
                    <span className="btn-text">View All Destinations</span>
                    <span className="btn-text-clone">View All Destinations</span>
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                    <ArrowUpRight size={15} className="btn-arrow" />
                  </span>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
