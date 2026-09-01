"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Star, ArrowUpRight } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import { client } from "@/sanity/lib/client";
import { allTestimonialsQuery } from "@/sanity/lib/queries";
import { type Testimonial } from "@/sanity/lib/fetchData";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const filterCategories = [
  "All",
  "Honeymoon",
  "Nature",
  "Adventure",
  "Cities",
  "Wildlife",
];

export default function StoriesPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTestimonials() {
      try {
        const data = await client.fetch(allTestimonialsQuery);
        setTestimonials(Array.isArray(data) ? data : []);
      } catch (err) {
        console.warn("Sanity fetch failed for testimonials:", err);
        setTestimonials([]);
      } finally {
        setLoading(false);
      }
    }
    loadTestimonials();
  }, []);

  const featuredStory = testimonials[0];
  const secondaryStory = testimonials[1];
  const gridStories = testimonials.slice(2);

  return (
    <div className={`${playfair.variable} min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#EA2C2A] selection:text-white`}>
      <Header />

      {/* Hero Header Section */}
      <section className="relative pt-16 pb-10 sm:pt-20 sm:pb-14 px-6 sm:px-10 lg:px-16 text-center overflow-hidden bg-gradient-to-b from-white via-[#FEF2F2]/60 to-white">
        <div className="relative mx-auto max-w-4xl">
          {/* Badge */}
          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full bg-[#FEF2F2] px-5 py-2 text-xs font-semibold text-[#262B65] border border-[#EA2C2A]/20 shadow-xs">
            <img src="/images/flowericon.png" alt="" width={17} height={17} />
            Verified Traveler Experiences
            <img src="/images/flowericon.png" alt="" width={17} height={17} />
          </div>

          {/* Heading */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#262B65] tracking-tight leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Stories From Our <br />
            <span className="italic font-medium text-[#EA2C2A]">Global</span> Travelers
          </h1>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Real stories and verified moments from travelers who embarked on extraordinary, handcrafted journeys with Flyora.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {filterCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-[#262B65] text-white shadow-md"
                      : "bg-white text-slate-700 hover:bg-[#EEF2FF] border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Stories Section with if / else */}
      <main className="flex-1 px-6 sm:px-10 lg:px-16 pb-20 sm:pb-28 bg-white">
        <div className="mx-auto max-w-[1500px] space-y-8">
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-96 rounded-3xl bg-slate-100 animate-pulse" />
              ))}
            </div>
          ) : testimonials.length === 0 ? (
            <div className="rounded-3xl bg-slate-50 border border-dashed border-slate-300 p-12 text-center my-6">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                No Traveler Stories Yet
              </h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
                Be the first to share your bespoke travel experience with the Flyora community.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#121629] px-7 py-3 text-xs font-bold text-white hover:bg-[#EA2C2A] transition shadow-md"
              >
                <span>Share Your Experience</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          ) : (
            <>
              {/* Top Row: Hero Split Card (Left) + Vertical Card (Right) */}
              {activeCategory === "All" && featuredStory && secondaryStory ? (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* Featured Horizontal Card (Spans 7 cols) */}
                  <div className="lg:col-span-7 flex flex-col sm:flex-row overflow-hidden rounded-[32px] bg-white border border-slate-200/90 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                    {/* Left Photo */}
                    <div className="relative w-full sm:w-1/2 min-h-[280px] sm:min-h-[380px] overflow-hidden bg-slate-100">
                      <Image
                        src={featuredStory.clientAvatar || "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop"}
                        alt={featuredStory.clientName}
                        fill
                        priority
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 35vw"
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 z-10">
                        <span className="rounded-full bg-white/95 px-3.5 py-1 text-xs font-bold text-[#262B65] shadow-xs backdrop-blur-md">
                          {featuredStory.tourTitle || "Honeymoon"}
                        </span>
                      </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                      <div>
                        {/* Stars */}
                        <div className="flex items-center gap-1 text-amber-400 mb-3">
                          {[...Array(featuredStory.rating || 5)].map((_, i) => (
                            <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                          ))}
                        </div>

                        {/* Headline */}
                        <h3
                          className="text-xl sm:text-2xl font-bold italic text-slate-900 tracking-tight leading-snug mb-3 line-clamp-2"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          &ldquo;{featuredStory.tourTitle ? `Unforgettable experience on ${featuredStory.tourTitle}` : "It felt like time paused, and nothing else mattered."}&rdquo;
                        </h3>

                        {/* Review Paragraph */}
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                          {featuredStory.reviewText}
                        </p>
                      </div>

                      {/* Dotted Divider & Author */}
                      <div>
                        <div className="my-4 border-t border-dotted border-slate-200" />
                        <div className="flex items-center gap-3">
                          <div className="relative h-10 w-10 rounded-full overflow-hidden border border-slate-200 shadow-xs shrink-0">
                            <Image
                              src={featuredStory.clientAvatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"}
                              alt={featuredStory.clientName}
                              fill
                              sizes="40px"
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900">{featuredStory.clientName}</h4>
                            <p className="text-xs text-slate-500 font-medium">{featuredStory.location || "Verified Traveler"}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Secondary Vertical Card (Spans 5 cols) */}
                  <div className="lg:col-span-5 flex flex-col overflow-hidden rounded-[32px] bg-white border border-slate-200/90 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                    {/* Top Photo */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={secondaryStory.clientAvatar || "https://images.unsplash.com/photo-1517824806704-9040b037703b?q=80&w=1000&auto=format&fit=crop"}
                        alt={secondaryStory.clientName}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 z-10">
                        <span className="rounded-full bg-white/95 px-3.5 py-1 text-xs font-bold text-[#262B65] shadow-xs backdrop-blur-md">
                          {secondaryStory.tourTitle || "Adventure"}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Content */}
                    <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                      <div>
                        {/* Stars */}
                        <div className="flex items-center gap-1 text-amber-400 mb-3">
                          {[...Array(secondaryStory.rating || 5)].map((_, i) => (
                            <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                          ))}
                        </div>

                        {/* Headline */}
                        <h3
                          className="text-xl sm:text-2xl font-bold italic text-slate-900 tracking-tight leading-snug mb-3 line-clamp-2"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          &ldquo;{secondaryStory.tourTitle ? `A truly extraordinary journey through ${secondaryStory.tourTitle}` : "We waited for hours, and it was completely worth it."}&rdquo;
                        </h3>

                        {/* Review Paragraph */}
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                          {secondaryStory.reviewText}
                        </p>
                      </div>

                      {/* Dotted Divider & Author */}
                      <div>
                        <div className="my-4 border-t border-dotted border-slate-200" />
                        <div className="flex items-center gap-3">
                          <div className="relative h-10 w-10 rounded-full overflow-hidden border border-slate-200 shadow-xs shrink-0">
                            <Image
                              src={secondaryStory.clientAvatar || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"}
                              alt={secondaryStory.clientName}
                              fill
                              sizes="40px"
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900">{secondaryStory.clientName}</h4>
                            <p className="text-xs text-slate-500 font-medium">{secondaryStory.location || "Verified Traveler"}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              ) : null}

              {/* Standard 3-Column Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(activeCategory === "All" ? gridStories : testimonials).map((story) => (
                  <div
                    key={story._id}
                    className="group flex flex-col rounded-[32px] overflow-hidden bg-white border border-slate-200/90 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#262B65]/30"
                  >
                    {/* Photo */}
                    <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={story.clientAvatar || "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1000&auto=format&fit=crop"}
                        alt={story.clientName}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 z-10">
                        <span className="rounded-full bg-white/95 px-3.5 py-1 text-xs font-bold text-[#262B65] shadow-xs backdrop-blur-md">
                          {story.tourTitle || "Nature"}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                      <div>
                        {/* Stars */}
                        <div className="flex items-center gap-1 text-amber-400 mb-3">
                          {[...Array(story.rating || 5)].map((_, i) => (
                            <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                          ))}
                        </div>

                        {/* Headline */}
                        <h3
                          className="text-lg sm:text-xl font-bold italic text-slate-900 tracking-tight leading-snug mb-3 transition-colors group-hover:text-[#EA2C2A] line-clamp-2"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          &ldquo;{story.tourTitle || "An unforgettable travel experience with Flyora"}&rdquo;
                        </h3>

                        {/* Review Paragraph */}
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                          {story.reviewText}
                        </p>
                      </div>

                      {/* Dotted Divider & Author */}
                      <div>
                        <div className="my-5 border-t border-dotted border-slate-200" />
                        <div className="flex items-center gap-3">
                          <div className="relative h-10 w-10 rounded-full overflow-hidden border border-slate-200 shadow-xs shrink-0">
                            <Image
                              src={story.clientAvatar || "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"}
                              alt={story.clientName}
                              fill
                              sizes="40px"
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900">{story.clientName}</h4>
                            <p className="text-xs text-slate-500 font-medium">{story.location || "Verified Traveler"}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Share Your Story Callout Banner */}
          <div className="mt-14 rounded-3xl bg-[#FEF2F2] border border-[#EA2C2A]/30 p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4 shadow-sm">
            <h2 className="text-3xl font-bold text-[#262A67]" style={{ fontFamily: "var(--font-playfair)" }}>
              Traveled With Flyora Recently?
            </h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Share your travel story or photo with our community and get a $100 voucher towards your next bespoke journey.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="btn-hover-slide inline-flex items-center gap-3 rounded-full bg-[#262A67] py-2.5 pl-6 pr-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#EA2C2A] hover:shadow-lg"
              >
                <span className="btn-text-wrapper">
                  <span className="btn-text">Submit Your Story</span>
                  <span className="btn-text-clone">Submit Your Story</span>
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                  <ArrowUpRight size={15} className="btn-arrow" />
                </span>
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
