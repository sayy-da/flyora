"use client";

import Image from "next/image";

const avatars = [
  { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop", position: "-top-3 left-4 sm:left-24" },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop", position: "top-1 right-20 sm:right-40" },
  { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop", position: "bottom-1 left-8 sm:left-28" },
  { src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop", position: "bottom-0 right-16 sm:right-36" },
];

const galleryPhotos = [
  {
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop",
    alt: "Mountain road explorer",
  },
  {
    src: "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=600&auto=format&fit=crop",
    alt: "Red tram city street",
  },
  {
    src: "https://images.unsplash.com/photo-1583422409516-2895a771deda?q=80&w=600&auto=format&fit=crop",
    alt: "Historic architecture park",
  },
  {
    src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop",
    alt: "Happy backpacker group",
  },
  {
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=600&auto=format&fit=crop",
    alt: "Forest trail hike",
  },
  {
    src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=600&auto=format&fit=crop",
    alt: "Carnival carousel attraction",
  },
  {
    src: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=600&auto=format&fit=crop",
    alt: "Ancient pyramids selfie",
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop",
    alt: "Scenic mountain lake",
  },
];

export default function JourneyNumbers() {
  return (
    <section className="relative overflow-hidden bg-[#FFFDEB] pt-16 pb-12 sm:pt-24 sm:pb-20 border-b border-amber-200/50 text-slate-900 select-none">
      {/* Background World Map Faint Vector */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
        <svg
          width="1000"
          height="500"
          viewBox="0 0 1000 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-6xl"
        >
          <ellipse cx="500" cy="250" rx="450" ry="200" stroke="#0F172A" strokeWidth="1" strokeDasharray="4 8" />
          <ellipse cx="500" cy="250" rx="350" ry="140" stroke="#0F172A" strokeWidth="1" strokeDasharray="3 6" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px]">
        {/* Top Badge */}
        <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full bg-[#FEF2F2] px-5 py-2 text-xs font-semibold text-[#262A67] border border-[#EA2C2A]/20">
          <img src="/images/flowericon.png" alt="" width={17} height={17} />
          Our Journey in Numbers
          <img src="/images/flowericon.png" alt="" width={17} height={17} />
        </div>

        {/* Hero Giant Metric with Floating Avatars */}
        <div className="relative mx-auto max-w-3xl text-center py-2">
          {/* Floating User Avatars */}
          {avatars.map((avatar, idx) => (
            <div
              key={idx}
              className={`pointer-events-none absolute z-10 hidden sm:block ${avatar.position}`}
            >
              <div className="relative h-9 w-9 sm:h-11 sm:w-11 overflow-hidden rounded-full border-2 border-white shadow-md">
                <Image src={avatar.src} alt="Traveler" fill className="object-cover" />
              </div>
            </div>
          ))}

          {/* Floating Slanted "Happy Travelers" Pill */}
          <div className="absolute right-2 sm:right-12 -top-1 z-20 rotate-6 rounded-full bg-white px-3 py-1 text-[11px] font-bold text-slate-900 shadow-md border border-slate-200">
            Happy Travelers 👋
          </div>

          {/* Giant Number */}
          <h2 className="text-7xl font-extrabold tracking-tight text-[#262A67] sm:text-8xl md:text-9xl font-sans leading-none">
            50,000+
          </h2>
        </div>

        {/* 3 Secondary Stats Columns */}
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3 text-center px-6">
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <div className="text-4xl font-extrabold text-[#0F172A] sm:text-5xl font-sans tracking-tight">
              60+
            </div>
            <span className="my-2 inline-block -rotate-2 rounded-full bg-pink-100/90 px-3 py-0.5 text-[11px] font-bold text-pink-700 border border-pink-200">
              Unique Tour Packages
            </span>
            <div className="w-12 border-b border-dashed border-slate-300 my-1" />
            <p className="text-xs text-slate-500 leading-relaxed max-w-[190px]">
              From budget adventures to private luxury escapes
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <div
              className="text-4xl font-extrabold text-[#0F172A] sm:text-5xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              15+
            </div>
            <span className="my-2 inline-block rotate-1 rounded-full bg-amber-100/90 px-3 py-0.5 text-[11px] font-bold text-amber-800 border border-amber-200">
              Years of Experience
            </span>
            <div className="w-12 border-b border-dashed border-slate-300 my-1" />
            <p className="text-xs text-slate-500 leading-relaxed max-w-[190px]">
              Perfecting meaningful travel experiences since 2009
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <div
              className="text-4xl font-extrabold text-[#0F172A] sm:text-5xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              98%
            </div>
            <span className="my-2 inline-block -rotate-1 rounded-full bg-sky-100/90 px-3 py-0.5 text-[11px] font-bold text-sky-800 border border-sky-200">
              Repeat Booking Rate
            </span>
            <div className="w-12 border-b border-dashed border-slate-300 my-1" />
            <p className="text-xs text-slate-500 leading-relaxed max-w-[190px]">
              Most travelers come back to plan their next trip
            </p>
          </div>
        </div>

        {/* Horizontal Photo Gallery Ribbon - Continuous Moving Marquee */}
        <div className="relative mt-14 sm:mt-20 overflow-hidden py-4">
          {/* Subtle edge fade overlays for seamless entrance and exit */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-[#FFFDEB] via-[#FFFDEB]/80 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-[#FFFDEB] via-[#FFFDEB]/80 to-transparent" />

          <div className="animate-marquee-infinite flex items-center gap-4 sm:gap-6">
            {[...galleryPhotos, ...galleryPhotos].map((photo, idx) => (
              <div
                key={idx}
                className="relative h-60 w-44 sm:h-72 sm:w-56 shrink-0 overflow-hidden rounded-3xl shadow-lg border border-white/90 transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Ticket / Boarding Pass Badge — Bottom Right */}
        <div className="pointer-events-none absolute right-4 bottom-2 hidden rotate-12 sm:block lg:right-12 lg:bottom-6 opacity-85">
          <div className="rounded-xl border border-amber-300 bg-amber-50 p-2.5 shadow-md text-[10px] font-mono text-amber-900 leading-tight">
            <div className="font-bold tracking-widest uppercase">BOARDING PASS ✈</div>
            <div className="text-amber-700">FLIGHT: FL-2026 · GATE 5</div>
          </div>
        </div>
      </div>
    </section>
  );
}

