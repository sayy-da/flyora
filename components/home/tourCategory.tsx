"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";

const categories = [
  {
    label: "Nature",
    slug: "nature",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Adventure",
    slug: "adventure",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Honeymoon",
    slug: "honeymoon",
    image:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80",
  },
];

export default function TourCategories() {
  const [active, setActive] = useState(2);

  return (
    <section className="relative overflow-hidden bg-white px-6 pt-14 pb-24 sm:pt-20 sm:pb-32">
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
        <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full bg-[#FEF2F2] px-5 py-2 text-xs font-semibold text-[#EA2C2A] border border-[#EA2C2A]/20">
         <img src="/images/flowericon.png" alt="" />
          Tour Categories
          <img src="/images/flowericon.png" alt="" />
        </div>

        <h2
          className="text-4xl leading-tight text-[#1B1B2F] sm:text-5xl"
          style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
        >
          Discover <span className="italic font-medium">Adventures</span>
          <br />
          That Fit You
        </h2>
      </div>

      {/* Category cards */}
      <div className="mx-auto mt-16 flex max-w-4xl flex-col items-center justify-center gap-10 sm:flex-row sm:items-center sm:gap-6 lg:gap-10">
        {categories.map((cat, index) => {
          const isCenter = index === 1;
          return (
            <Link
              key={cat.label}
              href={`/categories/${cat.slug}`}
              className="group flex flex-col items-center gap-4"
            >
              <div
                className={`relative overflow-hidden rounded-[999px] shadow-md transition-all duration-500 group-hover:shadow-2xl ${
                  isCenter
                    ? "aspect-[3/4.5] w-48 sm:w-60 lg:w-64"
                    : "aspect-[3/4] w-40 sm:w-52 lg:w-56"
                }`}
              >
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover overlay with arrow */}
                <div className="absolute inset-0 flex items-center justify-center bg-white/40 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-500 scale-75 group-hover:scale-100">
                    <ArrowUpRight size={20} strokeWidth={2} className="text-[#1B1B2F]" />
                  </span>
                </div>
              </div>
              <span
                className={`font-bold text-[#1B1B2F] transition-colors duration-300 group-hover:text-[#EA2C2A] ${
                  isCenter ? "text-lg" : "text-base"
                }`}
              >
                {cat.label}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Carousel dots */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {[0, 1, 2, 3, 4].map((i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-5 bg-[#1B1B2F]" : "w-1.5 bg-[#1B1B2F]/20"
              }`}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-8 text-center">
        <Link
          href="/categories"
          className="btn-hover-slide inline-flex items-center gap-3 rounded-full bg-[#1B1B2F] py-2.5 pl-6 pr-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#EA2C2A]"
        >
          <span className="btn-text-wrapper">
            <span className="btn-text">View All Categories</span>
            <span className="btn-text-clone">View All Categories</span>
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
            <ArrowUpRight size={15} className="btn-arrow" />
          </span>
        </Link>
      </div>
    </section>
  );
}