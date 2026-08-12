"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const tours = [
  {
    tag: "Nature",
    image: "/tours/cherry-blossoms.jpg",
    title: "Cherry Blossoms of Kyoto & Nara",
    description: "Explore cherry blossoms of kyoto & nara with curated experiences.",
    price: "$3,290",
    duration: "7D / 6N",
  },
  {
    tag: "Adventure",
    image: "/tours/marrakech-desert.jpg",
    title: "Marrakech Desert & Atlas Journey",
    description:
      "Journey through Morocco's vibrant cities, mountain landscapes, and vast desert horizons.",
    price: "$3,150",
    duration: "6D / 4N",
  },
  {
    tag: "Honeymoon",
    image: "/tours/maldives.jpg",
    title: "Maldives Island Getaway",
    description:
      "Unwind in the Maldives with clear waters, island stays, and uninterrupted ocean views.",
    price: "$3,980",
    duration: "6D / 4N",
  },
  {
    tag: "City",
    image: "/tours/santorini.jpg",
    title: "Santorini Coastal Escape",
    description:
      "Whitewashed villages, cliffside sunsets, and slow days along the Aegean coast.",
    price: "$2,890",
    duration: "5D / 4N",
  },
];

const destinations = [
  { name: "Japan", flag: "🇯🇵" },
  { name: "Morocco", flag: "🇲🇦" },
  { name: "Italy", flag: "🇮🇹" },
  { name: "Maldives", flag: "🇲🇻" },
  { name: "Peru", flag: "🇵🇪" },
  { name: "Greece", flag: "🇬🇷" },
];

export default function TourPackages() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <div className="mx-auto w-full max-w-[1600px]">
        {/* Header row */}
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <div className="mb-4 flex w-fit items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 text-xs font-medium text-neutral-600">
              ✦ Featured Tours ✦
            </div>
            <h2
              className="text-4xl leading-tight text-neutral-900 sm:text-5xl"
              style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
            >
              Tours <span className="italic font-medium">Crafted</span> for
              <br />
              Every Traveller
            </h2>
          </div>

          <div className="flex flex-col items-start gap-4 sm:items-end">
            <p className="max-w-xs text-sm leading-relaxed text-neutral-500 sm:text-right">
              Each itinerary blends hidden gems with landmark experiences,
              guided by people who live and breathe these places.
            </p>
            <button className="flex items-center gap-2 whitespace-nowrap rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800">
              View All Tours
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-neutral-900">
                <ArrowUpRight size={13} strokeWidth={2.5} />
              </span>
            </button>
          </div>
        </div>

        {/* Tour cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tours.map((tour) => (
            <div key={tour.title} className="flex flex-col">
              {/* Photo with tag pill */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-neutral-800 shadow-sm">
                  {tour.tag}
                </span>
              </div>

              {/* Card body */}
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-neutral-900">
                  {tour.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  {tour.description}
                </p>

                <div className="my-4 border-t border-dashed border-neutral-200" />

                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold text-neutral-900">
                    {tour.price}{" "}
                    <span className="text-sm font-normal text-neutral-400">
                      /person
                    </span>
                  </p>
                  <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium text-white">
                    {tour.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA card: "Ready to Plan Your Dream Journey?" */}
        <div className="relative mx-auto mt-16 flex w-fit items-center gap-4 rounded-3xl bg-sky-100 p-3 pr-6 sm:mt-20">
          <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-2xl">
            <Image
              src="/tours/cta-thumbnail.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p
              className="text-lg font-bold leading-tight text-neutral-900 sm:text-xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ready to Plan Your
              <br />
              <span className="italic font-medium">Dream</span> Journey?
            </p>
            <button className="mt-3 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-50 sm:text-sm">
              Send us a Message
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                <ArrowUpRight size={11} strokeWidth={2.5} />
              </span>
            </button>
          </div>

          {/* Hand-drawn plane doodle — replace /public/tours/plane-doodle.svg with your own vector */}
          <div className="pointer-events-none absolute -right-6 -top-10 w-14 -rotate-[18deg] sm:-right-10 sm:-top-12 sm:w-20">
            
            {/* <img src="" alt="" width={80} height={80} className="h-auto w-full" /> */}
            {/* <Image
              src="/tours/plane-doodle.svg"
              alt=""
              width={80}
              height={80}
              className="h-auto w-full"
            /> */}
          </div>
        </div>
      </div>

     
    </section>
  );
}