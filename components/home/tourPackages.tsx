"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

const tours = [
  {
    tag: "Nature",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop",
    title: "Cherry Blossoms of Kyoto & Nara",
    slug: "kyoto-zen-heritage-odyssey",
    description: "Explore cherry blossoms of kyoto & nara with curated experiences.",
    duration: "8D / 7N",
  },
  {
    tag: "Adventure",
    image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=1000&auto=format&fit=crop",
    title: "Marrakech Desert & Atlas Journey",
    slug: "marrakech-desert-atlas-journey",
    description:
      "Journey through Morocco's vibrant cities, mountain landscapes, and vast desert horizons.",
    duration: "6D / 5N",
  },
  {
    tag: "Honeymoon",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000&auto=format&fit=crop",
    title: "Santorini Sunset Wine Escape",
    slug: "santorini-sunset-volcanic-wine-escape",
    description:
      "Unwind in Santorini with clear waters, cliffside cave suites, and Aegean sunsets.",
    duration: "6D / 5N",
  },

];

const destinations = [
  { name: "Japan", flag: "🇯🇵" },
  { name: "Morocco", flag: "🇲🇦" },
  { name: "Switzerland", flag: "🇨🇭" },
  { name: "Greece", flag: "🇬🇷" },
  { name: "Indonesia", flag: "🇮🇩" },
  { name: "Peru", flag: "🇵🇪" },
];

export default function TourPackages() {
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
              Tours <span className="italic font-medium text-[#EA2C2A]">Crafted</span> for
              <br />
              Every Traveler
            </h2>
          </div>

          <div className="flex flex-col items-start gap-4 sm:items-end">
            <p className="max-w-xs text-sm leading-relaxed text-slate-600 sm:text-right">
              Each itinerary blends hidden gems with landmark experiences, guided by local destination experts.
            </p>

            <Link
              href="/destinations"
              className="btn-hover-slide inline-flex items-center gap-3 rounded-full bg-[#262A67] py-2.5 pl-6 pr-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#EA2C2A] hover:shadow-lg"
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
        </div>

        {/* Tour cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tours.map((tour) => (
            <div key={tour.title} className="group flex flex-col rounded-3xl bg-white border border-slate-200/90 overflow-hidden p-4 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#262A67]/30">
              {/* Photo with tag pill */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#262A67] shadow-sm">
                  {tour.tag}
                </span>
              </div>

              {/* Card body */}
              <div className="mt-4 flex flex-1 flex-col justify-between p-1">
                <div>
                  <h3
                    className="text-lg font-bold text-[#262A67] group-hover:text-[#EA2C2A] transition-colors"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    <Link href={`/tours/${tour.slug}`}>{tour.title}</Link>
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-2">
                    {tour.description}
                  </p>
                </div>

                <div className="my-4 border-t border-dashed border-slate-200" />

                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-bold text-[#262A67]">
                    {tour.duration}
                  </span>

                  <Link
                    href={`/tours/${tour.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EA2C2A] group-hover:text-[#C82120] transition-colors"
                  >
                    <span>View Itinerary</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EA2C2A] text-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#C82120] shadow-sm">
                      <ArrowUpRight size={13} strokeWidth={2.5} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}