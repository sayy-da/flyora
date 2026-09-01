"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { popularDestinationsQuery } from "@/sanity/lib/queries";
import { type Destination } from "@/sanity/lib/fetchData";

const filterCategories = ["All", "Asia", "Europe", "Tropical", "Americas", "Africa"];

export default function PopularDestinations() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const data = await client.fetch(popularDestinationsQuery);
        setDestinations(Array.isArray(data) ? data : []);
      } catch (error) {
        console.warn("Could not fetch Sanity destinations:", error);
        setDestinations([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const filteredDestinations =
    activeCategory === "All"
      ? destinations.slice(0, 3)
      : destinations.filter((dest) => dest.region === activeCategory).slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#EEF2FF] to-white px-6 pt-12 pb-16 sm:px-10 sm:pt-16 sm:pb-24 lg:px-16">
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
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Extraordinary Places,
              <br />
              <span className="italic font-normal text-[#EA2C2A]">
                Unforgettable Moments
              </span>
            </h2>
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#262A67] text-white shadow-md"
                    : "bg-white text-slate-700 hover:bg-[#EEF2FF] hover:text-[#262A67] border border-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Content Rendering: Loading / Empty / Data */}
        {loading ? (
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-96 rounded-3xl bg-slate-100 animate-pulse" />
            ))}
          </div>
        ) : filteredDestinations.length === 0 ? (
          <div className="mt-14 rounded-3xl bg-white border border-dashed border-slate-300 p-12 text-center shadow-xs">
            <h3 className="text-xl font-bold text-[#262A67] mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
              No Destinations Found
            </h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
              There are currently no destinations listed for this category in Sanity Studio.
            </p>
            <Link
              href="/customize"
              className="inline-flex items-center gap-2 rounded-full bg-[#262A67] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#EA2C2A] transition shadow-md"
            >
              <span>Request a Custom Destination</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        ) : (
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredDestinations.map((dest) => (
              <div
                key={dest._id || dest.slug}
                className="group flex flex-col justify-between rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-[#262A67]/40 hover:shadow-xl"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="rounded-full bg-white/95 px-3.5 py-1 text-xs font-bold text-[#262A67] shadow-xs backdrop-blur-md">
                      {dest.country}
                    </span>
                  </div>
                </div>

                {/* Info & Footer */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3
                        className="text-2xl font-bold text-[#262A67] group-hover:text-[#EA2C2A] transition-colors line-clamp-1"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {dest.name}
                      </h3>
                      {dest.rating && (
                        <div className="flex items-center gap-1 text-xs font-bold text-[#262A67] shrink-0">
                          <Star size={13} className="fill-[#EA2C2A] text-[#EA2C2A]" />
                          <span>{dest.rating}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {dest.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500">
                    <span>{dest.toursCount || 0} Tours Available</span>
                    <Link
                      href={`/locations/${dest.slug}`}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF2FF] text-[#262A67] transition-transform group-hover:scale-110 group-hover:bg-[#EA2C2A] group-hover:text-white"
                    >
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
