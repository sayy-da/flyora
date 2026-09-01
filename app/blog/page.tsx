"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ArrowUpRight, Clock, Calendar, Sparkles } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  image: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

const allBlogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "a-sunset-journey-through-the-sahara-desert",
    title: "A Sunset Journey Through the Sahara Desert",
    excerpt: "Traversing boundless red dunes on camelback as golden hour yields to a canopy of starlight in Merzouga.",
    category: "Adventure Travel",
    tags: ["Featured Post", "Adventure Travel"],
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1400&auto=format&fit=crop",
    date: "Jun 15, 2026",
    readTime: "3 min read",
    featured: true,
  },
  {
    id: "2",
    slug: "lost-in-time-a-week-inside-the-medina-of-fez",
    title: "Lost in Time: A Week Inside the Medina of Fez",
    excerpt: "Wandering centuries-old artisan alleys, mosaic riads, and spice-scented souks in Morocco's cultural heart.",
    category: "Destination Guide",
    tags: ["Destination Guide"],
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=1000&auto=format&fit=crop",
    date: "Jun 25, 2026",
    readTime: "3 min read",
  },
  {
    id: "3",
    slug: "exploring-kyotos-hidden-temples-and-quiet-streets",
    title: "Exploring Kyoto's Hidden Temples and Quiet Streets",
    excerpt: "Stepping off the beaten path into tranquil moss gardens, zen bamboo groves, and historic tea houses.",
    category: "Destination Guide",
    tags: ["Destination Guide"],
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop",
    date: "Jul 02, 2026",
    readTime: "4 min read",
  },
  {
    id: "4",
    slug: "island-life-in-the-maldives-what-it-really-feels-like",
    title: "Island Life in the Maldives: What It Really Feels Like",
    excerpt: "Overwater villas, crystal lagoons, and peaceful sunset horizons that redefine luxury relaxation.",
    category: "Honeymoon Travel",
    tags: ["Honeymoon Travel"],
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000&auto=format&fit=crop",
    date: "Jul 10, 2026",
    readTime: "5 min read",
  },
  {
    id: "5",
    slug: "chasing-the-northern-lights-across-iceland",
    title: "Chasing the Northern Lights Across Iceland",
    excerpt: "Glacial lagoons, black volcanic sands, and cascading waterfalls illuminated by vibrant emerald aurora borealis.",
    category: "Nature Travel",
    tags: ["Nature Travel"],
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=1000&auto=format&fit=crop",
    date: "Jul 18, 2026",
    readTime: "3 min read",
  },
  {
    id: "6",
    slug: "alpine-escapes-guide-to-bernese-oberland",
    title: "Alpine Escapes: The Ultimate Guide to the Bernese Oberland",
    excerpt: "Riding panoramic mountain trains past glacier peaks, wildflower valleys, and cliffside Swiss chalets.",
    category: "Adventure Travel",
    tags: ["Adventure Travel"],
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1000&auto=format&fit=crop",
    date: "Aug 04, 2026",
    readTime: "4 min read",
  },
  {
    id: "7",
    slug: "unveiling-the-hidden-coves-of-milos-and-naxos",
    title: "Unveiling the Hidden Coves of Milos and Naxos",
    excerpt: "Sailing through surreal white rock formations, turquoise sea caves, and authentic Cycladic fishing villages.",
    category: "Destination Guide",
    tags: ["Destination Guide"],
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000&auto=format&fit=crop",
    date: "Aug 12, 2026",
    readTime: "3 min read",
  },
  {
    id: "8",
    slug: "walking-with-the-incas-beyond-machu-picchu",
    title: "Walking with the Incas: Beyond Machu Picchu",
    excerpt: "Experiencing the Sacred Valley's living Andean traditions, high-altitude salt mines, and ancient stone fortresses.",
    category: "Nature Travel",
    tags: ["Nature Travel"],
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1000&auto=format&fit=crop",
    date: "Aug 20, 2026",
    readTime: "5 min read",
  },
];

const categories = [
  "All",
  "Adventure Travel",
  "Destination Guide",
  "Honeymoon Travel",
  "Nature Travel",
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(5);

  const filteredPosts =
    activeCategory === "All"
      ? allBlogPosts
      : allBlogPosts.filter((post) => post.category === activeCategory);

  const displayedPosts = filteredPosts.slice(0, visibleCount);

  // Split featured and secondary for the top row
  const featuredPost = filteredPosts.find((p) => p.featured) || filteredPosts[0];
  const secondaryPost = filteredPosts.find((p) => p.id !== featuredPost?.id);
  const remainingPosts = displayedPosts.filter(
    (p) => p.id !== featuredPost?.id && p.id !== secondaryPost?.id
  );

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, filteredPosts.length));
  };

  return (
    <div className={`${playfair.variable} min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#EA2C2A] selection:text-white`}>
      <Header />

      {/* Hero Header Section */}
      <section className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 px-6 sm:px-10 lg:px-16 text-center overflow-hidden bg-gradient-to-b from-white via-[#FEF2F2]/60 to-white">
        <div className="relative mx-auto max-w-4xl">
          {/* Badge */}
          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full bg-[#FEF2F2] px-5 py-2 text-xs font-semibold text-[#262B65] border border-[#EA2C2A]/20 shadow-xs">
            <img src="/images/flowericon.png" alt="" width={17} height={17} />
            Travel Blog
            <img src="/images/flowericon.png" alt="" width={17} height={17} />
          </div>

          {/* Headline */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#262B65] tracking-tight leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Guides, Stories, and <br />
            <span className="italic font-medium text-[#EA2C2A]">Travel</span> Insights
          </h1>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            From in-depth travel guides to personal journeys, discover content designed to inspire how and where you travel.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setVisibleCount(5);
                  }}
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

      {/* Main Blog Grid Section */}
      <main className="flex-1 px-6 sm:px-10 lg:px-16 pb-20 sm:pb-28 bg-white">
        <div className="mx-auto max-w-[1500px] space-y-8">
          
          {/* Top Row: Featured Big Post (Left) + Top Post (Right) */}
          {activeCategory === "All" && featuredPost && secondaryPost ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Featured Post Card (Spans 7 cols) */}
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="lg:col-span-7 group relative flex flex-col justify-end min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] rounded-[32px] overflow-hidden p-6 sm:p-10 shadow-lg border border-slate-200/90 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
              >
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-6 left-6 right-6 flex items-center gap-2.5 z-10">
                  <span className="rounded-full bg-black/80 px-4 py-1.5 text-xs font-bold text-white shadow-sm backdrop-blur-md">
                    Featured Post
                  </span>
                  <span className="rounded-full bg-white/95 px-4 py-1.5 text-xs font-bold text-[#262B65] shadow-sm backdrop-blur-md">
                    {featuredPost.category}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 text-white">
                  <h2
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 transition-colors group-hover:text-amber-200"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {featuredPost.title}
                  </h2>
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-white/80">
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
              </Link>

              {/* Secondary Post Card (Spans 5 cols) */}
              <Link
                href={`/blog/${secondaryPost.slug}`}
                className="lg:col-span-5 group flex flex-col rounded-[32px] overflow-hidden bg-white border border-slate-200/90 shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
              >
                <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/11] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={secondaryPost.image}
                    alt={secondaryPost.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Top Badge */}
                  <div className="absolute top-5 left-5 z-10">
                    <span className="rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-[#262B65] shadow-sm backdrop-blur-md">
                      {secondaryPost.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                  <div>
                    <h3
                      className="text-2xl sm:text-3xl font-bold text-[#262B65] tracking-tight mb-3 transition-colors group-hover:text-[#EA2C2A]"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {secondaryPost.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {secondaryPost.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500">
                    <div className="flex items-center gap-2">
                      <span>{secondaryPost.date}</span>
                      <span>•</span>
                      <span>{secondaryPost.readTime}</span>
                    </div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF2FF] text-[#262B65] transition-transform group-hover:scale-110 group-hover:bg-[#EA2C2A] group-hover:text-white">
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>

            </div>
          ) : null}

          {/* Row 2: Standard 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeCategory === "All" ? remainingPosts : displayedPosts).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-[32px] overflow-hidden bg-white border border-slate-200/90 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#262B65]/30"
              >
                {/* Image */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-[#262B65] shadow-sm backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <h3
                      className="text-xl sm:text-2xl font-bold text-[#262B65] tracking-tight mb-2.5 transition-colors group-hover:text-[#EA2C2A]"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500">
                    <div className="flex items-center gap-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF2FF] text-[#262B65] transition-transform group-hover:scale-110 group-hover:bg-[#EA2C2A] group-hover:text-white">
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredPosts.length && (
            <div className="pt-8 flex justify-center">
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

        </div>
      </main>

      <Footer />
    </div>
  );
}
