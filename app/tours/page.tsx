"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ArrowUpRight } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import { client } from "@/sanity/lib/client";
import { allToursQuery, tourCategoriesQuery } from "@/sanity/lib/queries";
import { type TourPackage } from "@/sanity/lib/fetchData";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

interface CategoryItem {
  _id: string;
  name: string;
  slug: string;
}

export default function ToursPage() {
  const [tours, setTours] = useState<TourPackage[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [sanityTours, sanityCategories] = await Promise.all([
          client.fetch(allToursQuery),
          client.fetch(tourCategoriesQuery),
        ]);

        setTours(Array.isArray(sanityTours) ? sanityTours : []);

        if (Array.isArray(sanityCategories) && sanityCategories.length > 0) {
          const catNames = ["All", ...sanityCategories.map((c: CategoryItem) => c.name)];
          setCategories(catNames);
        } else {
          setCategories(["All", "Nature", "Cities", "Adventure", "Honeymoon", "Wildlife"]);
        }
      } catch (err) {
        console.warn("Sanity fetch failed for tours:", err);
        setTours([]);
        setCategories(["All", "Nature", "Cities", "Adventure", "Honeymoon", "Wildlife"]);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const filteredTours =
    activeCategory === "All"
      ? tours
      : tours.filter(
          (t) =>
            t.categoryName?.toLowerCase() === activeCategory.toLowerCase() ||
            t.tag?.toLowerCase() === activeCategory.toLowerCase()
        );

  const displayedTours = filteredTours.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, filteredTours.length));
  };

  return (
    <div className={`${playfair.variable} min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#EA2C2A] selection:text-white`}>
      <Header />

      <main className="flex-1 pb-20 sm:pb-28">
        
        {/* Section 1: Hero Banner Card */}
        <section className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16 pt-8 sm:pt-12">
          <div className="relative min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] w-full overflow-hidden rounded-[32px] sm:rounded-[40px] shadow-2xl p-6 sm:p-12 flex items-center justify-center text-center">
            
            {/* Background Image of Hikers at Waterfall */}
            <Image
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1600&auto=format&fit=crop"
              alt="Hikers exploring majestic waterfall"
              fill
              priority
              sizes="(max-width: 1500px) 100vw, 1500px"
              className="object-cover object-center"
            />

            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/35" />

            {/* Inner Dashed Border Frame */}
            <div className="absolute inset-4 sm:inset-8 rounded-[24px] sm:rounded-[32px] border border-dashed border-white/25 pointer-events-none" />

            {/* Banner Text Content */}
            <div className="relative z-10 max-w-3xl mx-auto text-white px-4">
              <h1
                className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-4 sm:mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Tours <span className="italic font-medium text-white">Crafted</span> for You
              </h1>
              <p className="text-white/85 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed font-normal">
                From week-long cultural escapes to month-long expeditions every tour is built around depth, not just distance.
              </p>
            </div>

          </div>
        </section>

        {/* Section 2: Category Filter Pills */}
        <section className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16 pt-12 sm:pt-16 pb-10">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setVisibleCount(6);
                  }}
                  className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-[#121629] text-white shadow-md"
                      : "bg-white text-slate-700 hover:bg-[#EEF2FF] border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </section>

        {/* Section 3: 3-Column Tour Packages Grid with if / else */}
        <section className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16 pb-14">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-96 rounded-3xl bg-slate-100 animate-pulse" />
              ))}
            </div>
          ) : displayedTours.length === 0 ? (
            <div className="rounded-3xl bg-slate-50 border border-dashed border-slate-300 p-12 text-center my-6">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                No Tour Packages Found
              </h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
                No tours are currently published under &ldquo;{activeCategory}&rdquo;.
              </p>
              <Link
                href="/customize"
                className="inline-flex items-center gap-2 rounded-full bg-[#121629] px-7 py-3 text-xs font-bold text-white hover:bg-[#EA2C2A] transition shadow-md"
              >
                <span>Request a Custom Itinerary</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedTours.map((tour) => (
                  <Link
                    key={tour._id || tour.slug}
                    href={`/tours/${tour.slug}`}
                    className="group flex flex-col rounded-[28px] sm:rounded-[32px] overflow-hidden bg-white border border-slate-200/90 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
                  >
                    {/* Photo */}
                    <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={tour.coverImage}
                        alt={tour.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                        {tour.tag && (
                          <span className="rounded-full bg-[#121629]/90 px-3 py-1 text-xs font-bold text-white shadow-xs backdrop-blur-md">
                            {tour.tag}
                          </span>
                        )}
                        {tour.categoryName && (
                          <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#262B65] shadow-xs backdrop-blur-md">
                            {tour.categoryName}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                      <div>
                        <h3 className="text-xl font-bold text-[#0F172A] tracking-tight mb-2 transition-colors group-hover:text-[#EA2C2A]">
                          {tour.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-2">
                          {tour.overview}
                        </p>
                      </div>

                      {/* Dotted Divider & Price Row */}
                      <div>
                        <div className="my-5 border-t border-dotted border-slate-200" />
                        <div className="flex items-center justify-between">
                          <div className="flex items-baseline gap-1">
                            <span className="text-xl font-black text-[#0F172A]">
                              {tour.duration?.days ? `$${(tour.duration.days * 450).toLocaleString()}` : "$2,490"}
                            </span>
                            <span className="text-xs text-slate-500 font-medium">/person</span>
                          </div>
                          <span className="rounded-full bg-[#121629] px-3.5 py-1 text-xs font-bold text-white shadow-xs">
                            {tour.duration?.days ? `${tour.duration.days}D/${tour.duration.nights}N` : "7D/6N"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Load More Button */}
              {visibleCount < filteredTours.length && (
                <div className="pt-10 flex justify-center">
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

        </section>

        {/* Section 4: "Can't Find What You're Looking For?" Pink Card */}
        <section className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16 pt-16 sm:pt-24">
          <div className="relative rounded-[36px] bg-[#FDE8E7]/90 border border-dashed border-[#EA2C2A]/35 p-8 sm:p-12 md:p-14 shadow-sm overflow-visible">
            
            {/* Peering Eyes Decorative Sticker on Top Right */}
            <div className="absolute -top-8 -right-3 sm:-top-10 sm:-right-5 z-20 pointer-events-none">
              <svg width="74" height="60" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
                {/* Left Eye */}
                <ellipse cx="36" cy="45" rx="22" ry="26" fill="white" stroke="#121629" strokeWidth="6" />
                <ellipse cx="30" cy="48" rx="14" ry="17" fill="#0EA5E9" />
                <circle cx="28" cy="50" r="10" fill="#0F172A" />
                <circle cx="24" cy="44" r="3.5" fill="white" />
                
                {/* Right Eye */}
                <ellipse cx="70" cy="35" rx="22" ry="26" fill="white" stroke="#121629" strokeWidth="6" />
                <ellipse cx="64" cy="38" rx="14" ry="17" fill="#0EA5E9" />
                <circle cx="62" cy="40" r="10" fill="#0F172A" />
                <circle cx="58" cy="34" r="3.5" fill="white" />
              </svg>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              
              {/* Left: Stacked Mini Image Cards */}
              <div className="relative w-full md:w-1/2 flex items-center justify-center">
                <div className="relative aspect-[16/10] w-full max-w-[340px] rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-slate-100 transform -rotate-2">
                  <Image
                    src="https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=600&auto=format&fit=crop"
                    alt="Andes mountains and stone village"
                    fill
                    sizes="340px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right: Text and CTA */}
              <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight leading-snug"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Can&apos;t Find What <br />
                  You&apos;re <span className="italic font-medium text-[#0F172A]">Looking</span> For?
                </h2>
                
                <div>
                  <Link
                    href="/customize"
                    className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-3 text-xs sm:text-sm font-bold text-[#0F172A] transition-all duration-300 hover:bg-[#EA2C2A] hover:text-white shadow-md"
                  >
                    <span>Request a Custom Tour</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FEF2F2] text-[#EA2C2A]">
                      <ArrowUpRight size={13} strokeWidth={2.5} />
                    </span>
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
