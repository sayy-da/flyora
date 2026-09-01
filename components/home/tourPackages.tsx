"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { featuredToursQuery } from "@/sanity/lib/queries";
import { type TourPackage } from "@/sanity/lib/fetchData";

export default function TourPackages() {
  const [tours, setTours] = useState<TourPackage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFeatured() {
      try {
        const data = await client.fetch(featuredToursQuery);
        setTours(Array.isArray(data) ? data.slice(0, 3) : []);
      } catch (err) {
        console.warn("Sanity fetch failed for featured tours:", err);
        setTours([]);
      } finally {
        setLoading(false);
      }
    }
    loadFeatured();
  }, []);

  return (
    <section className="bg-white px-6 pt-20 sm:pt-28 pb-8 sm:pb-12 lg:px-16">
      <div className="mx-auto w-full max-w-[1600px]">
        {/* Header row */}
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <div className="mb-4 flex w-fit items-center gap-2 rounded-full bg-[#FEF2F2] px-5 py-2 text-xs font-semibold text-[#262A67] border border-[#EA2C2A]/20">
              <img src="/images/flowericon.png" alt="icon" width={17} height={17} />
              Featured Packages
              <img src="/images/flowericon.png" alt="icon" width={17} height={17} />
            </div>
            <h2
              className="text-4xl leading-tight text-[#262A67] sm:text-5xl"
              style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
            >
              Extraordinary Journeys,
              <br />
              <span className="italic font-normal text-[#EA2C2A]">
                Carefully Crafted
              </span>
            </h2>
          </div>

          <Link
            href="/tours"
            className="btn-hover-slide inline-flex items-center gap-3 rounded-full bg-[#262A67] py-2.5 pl-6 pr-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#EA2C2A] hover:shadow-lg self-start sm:self-auto"
          >
            <span className="btn-text-wrapper">
              <span className="btn-text">View All Tours</span>
              <span className="btn-text-clone">View All Tours</span>
            </span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
              <ArrowUpRight size={15} className="btn-arrow" />
            </span>
          </Link>
        </div>

        {/* Content with if / else */}
        {loading ? (
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-96 rounded-3xl bg-slate-100 animate-pulse" />
            ))}
          </div>
        ) : tours.length === 0 ? (
          <div className="mt-14 rounded-3xl bg-slate-50 border border-dashed border-slate-300 p-12 text-center shadow-xs">
            <h3 className="text-xl font-bold text-[#262A67] mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
              No Featured Packages Found
            </h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
              Create tour packages in Sanity Studio to feature them on the homepage.
            </p>
            <Link
              href="/customize"
              className="inline-flex items-center gap-2 rounded-full bg-[#262A67] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#EA2C2A] transition shadow-md"
            >
              <span>Request a Custom Itinerary</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        ) : (
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tours.map((tour) => (
              <Link
                key={tour._id || tour.slug}
                href={`/tours/${tour.slug}`}
                className="group relative flex flex-col justify-between rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-[#262A67]/40 hover:shadow-xl"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={tour.coverImage}
                    alt={tour.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Floating Tag */}
                  {tour.tag && (
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-[#121629]/90 px-3.5 py-1.5 text-xs font-bold text-white shadow-xs backdrop-blur-md">
                        {tour.tag}
                      </span>
                    </div>
                  )}
                </div>

                {/* Text / Info */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <h3
                      className="text-2xl font-bold text-[#262A67] group-hover:text-[#EA2C2A] transition-colors line-clamp-1 mb-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {tour.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {tour.overview}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500">
                    <span>
                      {tour.duration?.days
                        ? `${tour.duration.days} Days / ${tour.duration.nights} Nights`
                        : "7 Days / 6 Nights"}
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF2FF] text-[#262A67] transition-transform group-hover:scale-110 group-hover:bg-[#EA2C2A] group-hover:text-white">
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}