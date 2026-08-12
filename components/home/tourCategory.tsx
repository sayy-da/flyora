"use client";

import Image from "next/image";
import { useState } from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";

const categories = [
  { label: "Nature", image: "/categories/nature.jpg" },
  { label: "Adventure", image: "/categories/adventure.jpg" },
  { label: "Honeymoon", image: "/categories/honeymoon.jpg" },
];

export default function TourCategories() {
  const [active, setActive] = useState(1);

  return (
    <section className="relative overflow-hidden bg-white px-6 py-28 sm:py-36">
      {/* Decorative corner elements */}
      <div className="pointer-events-none absolute left-8 top-12 hidden -rotate-6 rounded-xl border-4 border-dashed border-amber-200 p-2 sm:block">
        <Image
          src="/categories/postcard-decor.jpg"
          alt=""
          width={130}
          height={160}
          className="rounded-lg object-cover"
        />
      </div>
      <div className="pointer-events-none absolute right-8 top-12 hidden rotate-6 rounded-lg border border-dashed border-emerald-300 bg-white p-2 sm:block">
        <div className="flex h-[130px] w-[100px] flex-col items-center justify-between rounded bg-emerald-50 p-2">
          <span className="text-xs font-medium text-neutral-500">✦</span>
          <span className="text-3xl">🗼</span>
          <span className="rounded bg-neutral-900 px-2 py-1 text-xs font-semibold tracking-wide text-white">
            PARIS
          </span>
        </div>
      </div>

      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-7 flex w-fit items-center gap-2 rounded-full bg-amber-50 px-5 py-2 text-sm font-medium text-neutral-700">
          <Sparkles size={14} className="text-amber-400" fill="currentColor" />
          Tour Categories
          <Sparkles size={14} className="text-amber-400" fill="currentColor" />
        </div>

        <h2
          className="text-5xl leading-tight text-neutral-900 sm:text-7xl"
          style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
        >
          Discover <span className="italic font-medium">Adventures</span>
          <br />
          That Fit You
        </h2>
      </div>

      {/* Category cards */}
      <div className="mx-auto mt-20 flex max-w-5xl items-start justify-center gap-8 sm:gap-14">
        {categories.map((cat) => (
          <div key={cat.label} className="flex flex-col items-center">
            <div className="relative aspect-[3/4] w-36 overflow-hidden rounded-full shadow-md sm:w-64">
              <img src="https://tnfd.global/wp-content/uploads/2023/09/Food-and-Agricultulre-cover-1.jpg" alt="" />
              {/* <Image
                src={cat.image}
                alt={cat.label}
                fill
                className="object-cover"
              /> */}
            </div>
            <p className="mt-6 text-lg font-medium text-neutral-800 sm:text-xl">
              {cat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Dot pagination */}
      <div className="mt-10 flex items-center justify-center gap-2">
        {categories.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all ${
              active === i ? "w-6 bg-neutral-900" : "w-2 bg-neutral-300"
            }`}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 flex justify-center">
        <button className="flex items-center gap-3 rounded-full bg-neutral-900 px-7 py-3.5 text-base font-medium text-white transition hover:bg-neutral-800">
          View All Categories
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-neutral-900">
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </span>
        </button>
      </div>
    </section>
  );
}