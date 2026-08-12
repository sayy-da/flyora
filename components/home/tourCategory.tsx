"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";

const categories = [
  { label: "Cultural Heritage", slug: "cultural", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80" },
  { label: "Honeymoon & Luxury", slug: "honeymoon", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80" },
  { label: "Nature & Wildlife", slug: "nature", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80" },
];

export default function TourCategories() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 sm:py-32 border-b border-slate-100">
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full bg-[#FEF2F2] px-5 py-2 text-xs font-semibold text-[#EA2C2A] border border-[#EA2C2A]/20">
          <Sparkles size={14} className="text-[#EA2C2A]" fill="currentColor" />
          Tour Categories
          <Sparkles size={14} className="text-[#EA2C2A]" fill="currentColor" />
        </div>

        <h2
          className="text-4xl leading-tight text-[#262A67] sm:text-6xl"
          style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
        >
          Discover <span className="italic font-medium text-[#EA2C2A]">Adventures</span>
          <br />
          That Fit Your Style
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-lg mx-auto">
          Explore curated tours categorized by your passion — from romantic coastal villas to cultural heritage sanctuaries.
        </p>
      </div>

      {/* Category cards */}
      <div className="mx-auto mt-16 flex max-w-5xl flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
        {categories.map((cat) => (
          <Link key={cat.label} href={`/categories/${cat.slug}`} className="group flex flex-col items-center">
            <div className="relative aspect-[3/4] w-48 sm:w-60 overflow-hidden rounded-3xl shadow-lg border-2 border-transparent transition-all duration-500 group-hover:border-[#EA2C2A] group-hover:shadow-2xl group-hover:-translate-y-2">
              <Image
                src={cat.image}
                alt={cat.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <span className="text-sm font-bold">{cat.label}</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EA2C2A] text-white">
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/categories"
          className="inline-flex items-center gap-2 rounded-full bg-[#262A67] px-6 py-3 text-xs font-bold text-white transition hover:bg-[#1A1D4A] shadow-md uppercase tracking-wider"
        >
          <span>View All Categories</span>
          <ArrowUpRight size={15} />
        </Link>
      </div>
    </section>
  );
}