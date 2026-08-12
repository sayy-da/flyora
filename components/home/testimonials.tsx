"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Star, Quote, ShieldCheck, ArrowLeft, ArrowRight } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  tourName: string;
  quote: string;
  highlight: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Elena Rostova",
    role: "Architect & Explorer",
    location: "Toronto, Canada",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    tourName: "Cherry Blossoms of Kyoto",
    quote:
      "Flyora curated an absolute dream itinerary for Kyoto. Every boutique tea house, hidden garden, and private guide was top-notch. It truly felt like a bespoke luxury trip without the hassle.",
    highlight: "An absolute dream itinerary!",
  },
  {
    id: "2",
    name: "Marcus & Sarah Vance",
    role: "Honeymooners",
    location: "London, UK",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    tourName: "Santorini Coastal Escape",
    quote:
      "From the private sunset yacht cruise in Oia to cliffside wine tastings, everything was handled seamlessly. We didn't have to stress about a single detail on our honeymoon.",
    highlight: "Seamless and stress-free honeymoon!",
  },
  {
    id: "3",
    name: "David K. Mitchell",
    role: "Adventure Photographer",
    location: "New York, USA",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    tourName: "Marrakech & Sahara Journey",
    quote:
      "Camping under the Sahara stars and driving through the Atlas mountains was unforgettable. Flyora's local guides were incredibly knowledgeable and authentic.",
    highlight: "Unforgettable local experiences!",
  },
  {
    id: "4",
    name: "Sophia Chen",
    role: "Solo Traveler",
    location: "Singapore",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    tourName: "Maldives Island Getaway",
    quote:
      "As a solo female traveler, safety and seamless organization are my top priorities. Flyora provided 24/7 concierge support and made me feel completely cared for.",
    highlight: "Flawless organization & safety!",
  },
];

const stats = [
  { value: "4.95", label: "Average Rating", subtext: "Based on 3,500+ reviews" },
  { value: "15K+", label: "Happy Travelers", subtext: "Across 80+ countries" },
  { value: "98%", label: "Satisfaction Rate", subtext: "Repeat & recommended" },
  { value: "24/7", label: "Local Support", subtext: "Always by your side" },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <div className="mx-auto w-full max-w-[1600px]">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 text-xs font-medium text-neutral-700">
            <Sparkles size={13} className="text-amber-500" fill="currentColor" />
            Traveler Voices
            <Sparkles size={13} className="text-amber-500" fill="currentColor" />
          </div>

          <h2
            className="text-4xl leading-tight text-neutral-900 sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
          >
            Stories <span className="italic font-medium">From</span> Our
            <br />
            Global Explorers
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-neutral-500 sm:text-base">
            Read real feedback and genuine experiences shared by adventurers who trusted Flyora to craft their dream journeys.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center rounded-2xl bg-neutral-50 p-6 text-center border border-neutral-100"
            >
              <div
                className="text-3xl font-extrabold text-neutral-900 sm:text-4xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-semibold text-neutral-800 sm:text-sm">
                {stat.label}
              </div>
              <div className="mt-0.5 text-[11px] text-neutral-400">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`group cursor-pointer relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
                activeIndex === idx
                  ? "bg-neutral-900 text-white shadow-xl scale-[1.02]"
                  : "bg-neutral-50 text-neutral-900 border border-neutral-200/80 hover:bg-neutral-100/80"
              }`}
            >
              {/* Quote icon & Rating stars */}
              <div>
                <div className="flex items-center justify-between">
                  <Quote
                    size={28}
                    className={activeIndex === idx ? "text-amber-300" : "text-amber-500/70"}
                  />
                  <div className="flex items-center gap-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="text-amber-400"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>

                <p
                  className={`mt-4 text-xs font-semibold uppercase tracking-wider ${
                    activeIndex === idx ? "text-amber-200" : "text-amber-600"
                  }`}
                >
                  "{item.highlight}"
                </p>

                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    activeIndex === idx ? "text-neutral-300" : "text-neutral-600"
                  }`}
                >
                  {item.quote}
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-8 border-t border-dashed border-neutral-300/40 pt-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-amber-300">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="truncate text-sm font-bold">{item.name}</h4>
                      <ShieldCheck size={14} className="text-emerald-500 shrink-0" />
                    </div>
                    <p
                      className={`truncate text-xs ${
                        activeIndex === idx ? "text-neutral-400" : "text-neutral-500"
                      }`}
                    >
                      {item.role} • {item.location}
                    </p>
                    <span
                      className={`mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${
                        activeIndex === idx
                          ? "bg-neutral-800 text-amber-200"
                          : "bg-neutral-200 text-neutral-700"
                      }`}
                    >
                      {item.tourName}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel controls */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-800 transition hover:bg-neutral-100 hover:border-neutral-400"
          >
            <ArrowLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setActiveIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  activeIndex === i ? "w-8 bg-neutral-900" : "w-2.5 bg-neutral-300"
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-800 transition hover:bg-neutral-100 hover:border-neutral-400"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
