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
    src: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=600&auto=format&fit=crop",
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
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#EEF2FF] to-white pt-16 pb-12 sm:pt-24 sm:pb-20 text-slate-900 select-none">
      {/* Background Dotted World Globe Dome */}
      <div
        className="pointer-events-none absolute inset-x-0 top-10 sm:top-14 md:top-16 lg:top-20 mx-auto flex justify-center opacity-90 sm:opacity-95 max-w-6xl px-4 z-0"
        style={{
          WebkitMaskImage: "radial-gradient(ellipse 95% 85% at 50% 45%, black 65%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 95% 85% at 50% 45%, black 65%, transparent 100%)",
        }}
      >
        <div className="relative w-full aspect-[2.2/1] max-w-5xl">
          <Image
            src="/images/bg-globe.png"
            alt="World Globe Background"
            fill
            className="object-contain drop-shadow-sm"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px]">
        {/* Top Badge */}
        <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full bg-[#FEF2F2] px-5 py-2 text-xs font-semibold text-[#262B65] border border-[#EC2C27]/20">
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
          <div className="absolute right-2 sm:right-16 -top-2 z-20 rotate-6 rounded-full bg-white px-3.5 py-1 text-[11px] font-bold text-slate-900 shadow-md border border-slate-200">
            Happy Travelers 👋
          </div>

          {/* Giant Number */}
          <h2 className="text-7xl font-extrabold tracking-tight text-[#262B65] sm:text-8xl md:text-9xl font-sans leading-none">
            50,000+
          </h2>
        </div>

        {/* 3 Secondary Stats Columns */}
        <div className="relative z-10 mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3 text-center px-6">
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <div className="text-5xl sm:text-6xl font-bold italic tracking-tight text-[#0F172A]">
              60+
            </div>
            <span className="my-2.5 inline-block -rotate-2 rounded-full bg-pink-100/90 px-3.5 py-0.5 text-[11px] font-bold text-pink-700 border border-pink-200">
              Unique Tour Packages
            </span>
            <div className="w-16 border-b border-dotted border-slate-400/60 my-1.5" />
            <p className="text-xs text-slate-600 leading-relaxed max-w-[200px]">
              From budget adventures to private luxury escapes
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <div
              className="text-5xl sm:text-6xl font-normal italic text-[#0F172A]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              15+
            </div>
            <span className="my-2.5 inline-block rotate-1 rounded-full bg-amber-100/90 px-3.5 py-0.5 text-[11px] font-bold text-amber-800 border border-amber-200">
              Years of Experience
            </span>
            <div className="w-16 border-b border-dotted border-slate-400/60 my-1.5" />
            <p className="text-xs text-slate-600 leading-relaxed max-w-[200px]">
              Perfecting meaningful travel experiences since 2009
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <div
              className="text-5xl sm:text-6xl font-normal italic text-[#0F172A]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              98%
            </div>
            <span className="my-2.5 inline-block -rotate-1 rounded-full bg-sky-100/90 px-3.5 py-0.5 text-[11px] font-bold text-sky-800 border border-sky-200">
              Repeat Booking Rate
            </span>
            <div className="w-16 border-b border-dotted border-slate-400/60 my-1.5" />
            <p className="text-xs text-slate-600 leading-relaxed max-w-[200px]">
              Most travelers come back to plan their next trip
            </p>
          </div>
        </div>

        {/* Horizontal Photo Gallery Ribbon - Continuous Moving Marquee */}
        <div className="relative mt-14 sm:mt-20 overflow-hidden py-4">
          {/* Subtle edge fade overlays for seamless entrance and exit */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent" />

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

