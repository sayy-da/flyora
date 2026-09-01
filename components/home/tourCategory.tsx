"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { tourCategoriesQuery } from "@/sanity/lib/queries";
import { type Category } from "@/sanity/lib/fetchData";

export default function TourCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(0);

  useEffect(() => {
    async function loadCategories() {
      try {
        const data = await client.fetch(tourCategoriesQuery);
        setCategories(Array.isArray(data) ? data : []);
      } catch (err) {
        console.warn("Sanity fetch failed for tour categories:", err);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    }
    loadCategories();
  }, []);

  const displayCategories = categories.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-white px-6 pt-14 sm:pt-20">
      {/* Decorative postcard — top left */}
      <div className="pointer-events-none absolute left-6 top-16 hidden -rotate-12 sm:block lg:left-20 lg:top-20">
        <Image
          src="/images/japan-stamp.png"
          alt=""
          width={200}
          height={120}
          className="drop-shadow-xl"
        />
      </div>

      {/* Decorative postcard — top right */}
      <div className="pointer-events-none absolute right-6 top-16 hidden rotate-12 sm:block lg:right-20 lg:top-20">
        <Image
          src="/images/paris-stamp.png"
          alt=""
          width={150}
          height={100}
          className="drop-shadow-xl"
        />
      </div>

      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full bg-[#FEF2F2] px-5 py-2 text-xs font-semibold text-[#262A67] border border-[#EA2C2A]/20">
          <img src="/images/flowericon.png" alt="" width={17} height={17} />
          Tour Categories
          <img src="/images/flowericon.png" alt="" width={17} height={17} />
        </div>
        <h2
          className="text-4xl text-[#262A67] sm:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Travel Tailored to Your{" "}
          <span className="italic font-normal text-[#EA2C2A]">Passion</span>
        </h2>
      </div>

      {/* Content with if / else */}
      {loading ? (
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-[420px] rounded-3xl bg-slate-100 animate-pulse" />
          ))}
        </div>
      ) : displayCategories.length === 0 ? (
        <div className="mx-auto mt-12 max-w-xl rounded-3xl bg-slate-50 border border-dashed border-slate-300 p-10 text-center shadow-xs">
          <h3 className="text-xl font-bold text-[#262A67] mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
            No Tour Categories Found
          </h3>
          <p className="text-sm text-slate-500 mb-6">
            Categories defined in Sanity Studio will appear here.
          </p>
          <Link
            href="/customize"
            className="inline-flex items-center gap-2 rounded-full bg-[#262A67] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#EA2C2A] transition shadow-md"
          >
            <span>Custom Trip Inquiry</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      ) : (
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-3">
          {displayCategories.map((cat, i) => {
            const isActive = active === i;
            return (
              <div
                key={cat._id || cat.slug || i}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={`group relative h-[420px] sm:h-[480px] cursor-pointer overflow-hidden rounded-3xl transition-all duration-700 ease-out ${
                  isActive
                    ? "sm:scale-[1.02] shadow-2xl ring-2 ring-[#262A67]/20"
                    : "opacity-85 hover:opacity-100 shadow-md"
                }`}
              >
                {/* Background Photo */}
                <Image
                  src={cat.image || "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80"}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Bottom Card Info & CTA */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#EA2C2A]">
                      Experience
                    </span>
                    <h3
                      className="text-2xl font-bold text-white sm:text-3xl"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {cat.name}
                    </h3>
                  </div>

                  <Link
                    href={`/categories/${cat.slug}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#262A67] shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#EA2C2A] group-hover:text-white"
                  >
                    <ArrowUpRight size={18} strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}