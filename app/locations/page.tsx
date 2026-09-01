"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ArrowUpRight } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import { client } from "@/sanity/lib/client";
import { allDestinationsQuery, tourCategoriesQuery } from "@/sanity/lib/queries";
import { type Destination, type Category } from "@/sanity/lib/fetchData";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const floatingFlags = [
  { flag: "🇨🇳", label: "China" },
  { flag: "🇹🇿", label: "Tanzania" },
  { flag: "🇺🇸", label: "USA" },
  { flag: "🇯🇵", label: "Japan", isHero: true },
  { flag: "🇲🇦", label: "Morocco" },
  { flag: "🇮🇸", label: "Iceland" },
  { flag: "🇲🇻", label: "Maldives" },
];

export default function LocationsPage() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [sanityDestinations, sanityCategories] = await Promise.all([
          client.fetch(allDestinationsQuery),
          client.fetch(tourCategoriesQuery),
        ]);

        setDestinations(Array.isArray(sanityDestinations) ? sanityDestinations : []);
        setCategories(Array.isArray(sanityCategories) ? sanityCategories : []);
      } catch (err) {
        console.warn("Sanity fetch failed for locations:", err);
        setDestinations([]);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const displayedDestinations = destinations.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, destinations.length));
  };

  return (
    <div className={`${playfair.variable} min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#EA2C2A] selection:text-white`}>
      <Header />

      {/* Hero Header Section */}
      <section className="relative pt-12 pb-14 sm:pt-16 sm:pb-20 px-6 sm:px-10 lg:px-16 text-center overflow-hidden bg-gradient-to-b from-white via-[#FEF2F2]/40 to-white">
        
        {/* Floating Decorative Postcards / Stamps */}
        <div className="pointer-events-none absolute left-4 top-8 hidden -rotate-12 md:block lg:left-14 lg:top-14 opacity-90">
          <Image
            src="/images/brazil-stamp.png"
            alt="Vintage Stamp"
            width={160}
            height={100}
            className="drop-shadow-lg"
          />
        </div>

        <div className="pointer-events-none absolute right-4 top-8 hidden rotate-12 md:block lg:right-14 lg:top-14 opacity-90">
          <Image
            src="/images/paris-stamp.png"
            alt="London Stamp"
            width={140}
            height={100}
            className="drop-shadow-lg"
          />
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Floating Flag Row Arc */}
          <div className="mx-auto mb-8 flex items-center justify-center gap-2.5 sm:gap-4">
            {floatingFlags.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-center rounded-full border border-slate-200/80 bg-white text-base sm:text-xl shadow-xs transition-transform duration-300 hover:scale-110 ${
                  item.isHero
                    ? "h-11 w-11 sm:h-13 sm:w-13 border-2 border-[#EA2C2A] shadow-md -translate-y-1 text-2xl"
                    : "h-9 w-9 sm:h-10 sm:w-10 text-slate-700"
                }`}
              >
                <span>{item.flag}</span>
              </div>
            ))}
          </div>

          {/* Headline */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#0F172A] tracking-tight leading-[1.08] mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The Whole <span className="italic font-medium text-[#0F172A]">World</span> is
            <br />
            Waiting for You
          </h1>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Forty-two destinations across six continents — each one chosen because it has something the others don&apos;t.
          </p>
        </div>
      </section>

      {/* 4-Column Destinations Grid with if / else */}
      <main className="flex-1 px-6 sm:px-10 lg:px-16 pb-20 sm:pb-28 bg-white">
        <div className="mx-auto max-w-[1500px]">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-[1/1.08] rounded-[28px] bg-slate-100 animate-pulse" />
              ))}
            </div>
          ) : displayedDestinations.length === 0 ? (
            <div className="rounded-3xl bg-slate-50 border border-dashed border-slate-300 p-12 text-center my-6">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                No Destinations Found
              </h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
                Add destinations in Sanity Studio to explore them here.
              </p>
              <Link
                href="/customize"
                className="inline-flex items-center gap-2 rounded-full bg-[#121629] px-7 py-3 text-xs font-bold text-white hover:bg-[#EA2C2A] transition shadow-md"
              >
                <span>Request a Custom Destination</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
                {displayedDestinations.map((dest) => (
                  <Link
                    key={dest._id || dest.slug}
                    href={`/locations/${dest.slug}`}
                    className="group flex flex-col transition-transform duration-300 hover:-translate-y-1.5"
                  >
                    {/* Image Container with Floating Flag */}
                    <div className="relative aspect-[1/1.08] w-full overflow-hidden rounded-[28px] sm:rounded-[32px] bg-slate-100 shadow-xs border border-slate-200/60">
                      <Image
                        src={dest.image}
                        alt={dest.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Circular Flag Icon on Top-Left */}
                      <div className="absolute top-4 left-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-base shadow-sm border border-slate-100 backdrop-blur-md">
                        <span>{dest.flag || "🌍"}</span>
                      </div>
                    </div>

                    {/* Country Name */}
                    <h3 className="mt-3.5 text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight transition-colors group-hover:text-[#EA2C2A]">
                      {dest.name}
                    </h3>
                  </Link>
                ))}
              </div>

              {/* Load More Button */}
              {visibleCount < destinations.length && (
                <div className="pt-12 flex justify-center">
                  <button
                    onClick={handleLoadMore}
                    className="btn-hover-slide inline-flex items-center gap-3 rounded-full bg-[#121629] py-3.5 pl-8 pr-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#EA2C2A] hover:shadow-xl active:scale-95"
                  >
                    <span className="btn-text-wrapper">
                      <span className="btn-text">Load More</span>
                      <span className="btn-text-clone">Load More</span>
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                      <ArrowUpRight size={14} className="btn-arrow" />
                    </span>
                  </button>
                </div>
              )}
            </>
          )}

        </div>
      </main>

      {/* 3 Shaped Floating Stat Badges Section */}
      <section className="relative py-14 sm:py-20 px-6 sm:px-10 lg:px-16 overflow-hidden bg-gradient-to-b from-white via-[#EEF2FF]/40 to-white">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-items-center">
            
            {/* Badge 1: Destinations (Sunburst Shape) */}
            <div className="relative flex flex-col items-center justify-center text-center group transition-transform duration-300 hover:scale-105">
              <div className="relative flex h-52 w-52 sm:h-60 sm:w-60 items-center justify-center p-6 text-center">
                <Image
                  src="/images/Sunburst.png"
                  alt="Destinations"
                  fill
                  className="object-contain drop-shadow-sm pointer-events-none"
                  priority
                />
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <span
                    className="text-4xl sm:text-5xl font-black text-[#121629] tracking-tight leading-none mb-1.5"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {destinations.length > 0 ? destinations.length : 22}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-700">
                    Destinations
                  </span>
                </div>
              </div>
            </div>

            {/* Badge 2: Continents (Diamond Shape) */}
            <div className="relative flex flex-col items-center justify-center text-center group transition-transform duration-300 hover:scale-105">
              <div className="relative flex h-52 w-52 sm:h-60 sm:w-60 items-center justify-center p-6 text-center">
                <Image
                  src="/images/Rounded diamond.png"
                  alt="Continents"
                  fill
                  className="object-contain drop-shadow-sm pointer-events-none"
                  priority
                />
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <span
                    className="text-4xl sm:text-5xl font-black text-[#121629] tracking-tight leading-none mb-1.5"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    6
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-700">
                    Continents
                  </span>
                </div>
              </div>
            </div>

            {/* Badge 3: Curated Tours (Scalloped Square Shape) */}
            <div className="relative flex flex-col items-center justify-center text-center group transition-transform duration-300 hover:scale-105">
              <div className="relative flex h-52 w-52 sm:h-60 sm:w-60 items-center justify-center p-6 text-center">
                <Image
                  src="/images/Rounded scalloped square.png"
                  alt="Curated Tours"
                  fill
                  className="object-contain drop-shadow-sm pointer-events-none"
                  priority
                />
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <span
                    className="text-4xl sm:text-5xl font-black text-[#121629] tracking-tight leading-none mb-1.5"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    60+
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-700">
                    Curated Tours
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Explore by Travel Style Section with if / else */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="mx-auto max-w-[1500px]">
          
          {/* Section Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="mb-4 flex w-fit items-center gap-2 rounded-full bg-[#FEF2F2] px-5 py-1.5 text-xs font-semibold text-[#262B65] border border-[#EC2C27]/20 shadow-xs">
                <img src="/images/flowericon.png" alt="" width={17} height={17} />
                Not Sure Where to Go?
                <img src="/images/flowericon.png" alt="" width={17} height={17} />
              </div>

              <h2
                className="text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Explore by <span className="italic font-medium text-[#0F172A]">Travel</span> Style
              </h2>
            </div>

            <Link
              href="/categories"
              className="inline-flex items-center gap-3 rounded-full bg-[#0F172A] px-6 py-3 text-xs sm:text-sm font-semibold text-white transition hover:bg-[#EA2C2A] shadow-md w-fit"
            >
              <span>View All Categories</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                <ArrowUpRight size={13} />
              </span>
            </Link>
          </div>

          {/* 5 Oval Category Cards Grid */}
          {categories.length === 0 ? (
            <div className="rounded-3xl bg-slate-50 border border-dashed border-slate-300 p-8 text-center">
              <p className="text-sm text-slate-500">No travel style categories available.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
              {categories.slice(0, 5).map((style) => (
                <Link
                  key={style._id || style.slug}
                  href={`/categories/${style.slug}`}
                  className="group flex flex-col items-center text-center cursor-pointer transition-transform duration-300 hover:-translate-y-2"
                >
                  {/* Tall Oval Pill Photo */}
                  <div className="relative aspect-[1/1.55] w-full overflow-hidden rounded-[100px] bg-slate-100 shadow-md border border-slate-200/60">
                    <Image
                      src={style.image || "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=600&auto=format&fit=crop"}
                      alt={style.name}
                      fill
                      sizes="(max-width: 640px) 50vw, 20vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Hover Overlay Arrow Button */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#121629] shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <ArrowUpRight size={18} strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>

                  {/* Label */}
                  <h3 className="mt-4 text-base sm:text-lg font-bold text-[#0F172A] tracking-tight transition-colors group-hover:text-[#EA2C2A]">
                    {style.name}
                  </h3>
                </Link>
              ))}
            </div>
          )}

        </div>
      </section>

      <Footer />
    </div>
  );
}
