"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight, Settings } from "lucide-react";

interface Destination {
  id: string;
  name: string;
  description: string;
  region: string;

  flag: string;
}

const destinations: Destination[] = [
  {
    id: "1",
    name: "Iceland",
    description: "Glaciers, black sand coasts and northern lights across skies.",
    region: "Europe · Nordic Region",
    flag: "/flags/Iceland.svg.webp",
  },
  {
    id: "2",
    name: "Norway",
    description: "Fjord-carved coastlines and midnight sun over quiet villages.",
    region: "Europe · Nordic Region",
    flag: "/flags/Norway.svg.webp"
  },
  {
    id: "3",
    name: "Peru",
    description: "Ancient citadels above the clouds and Andean trails winding below.",
    region: "South America · Andes",
    flag: "/flags/peru.webp",
  },
  {
    id: "4",
    name: "Morocco",
    description: "Sahara dunes at dawn and lantern-lit medinas after dark.",
    region: "Africa · North Africa",
    flag: "/flags/Morocco.svg.webp",
  },
  {
    id: "5",
    name: "Vietnam",
    description: "Emerald rice terraces and limestone bays drifting into mist.",
    region: "Asia · Southeast Asia",
    flag: "/flags/Vietnam.svg.webp",
  },
];

// -----------------------------------------------------------------------
// Rotating flag ellipse — the dotted ellipse and flags orbit along
// an elliptical path showing the bottom half of the ellipse across the
// top background of the section.
// -----------------------------------------------------------------------

const FLAG_RING = [
  { name: "Iceland", flag: "/flags/Iceland.svg.webp" },
  { name: "Norway", flag: "/flags/Norway.svg.webp" },
  { name: "Peru", flag: "/flags/peru.webp" },
  { name: "Morocco", flag: "/flags/Morocco.svg.webp" },
  { name: "Vietnam", flag: "/flags/Vietnam.svg.webp" },
  { name: "Japan", flag: "/flags/Japan.svg.webp" },
  { name: "Greece", flag: "/flags/Greece.svg.webp" },
  { name: "Switzerland", flag: "/flags/Switzerland.svg.webp" },
  { name: "South Korea", flag: "/flags/South_Korea.svg.webp" },
  { name: "Portugal", flag: "/flags/Portugal.svg.webp" },
];

const RING_AUTO_SPEED = 12; // degrees per second
const RING_RESUME_DELAY = 6000; // ms of inactivity before auto-rotate resumes after a click
const CENTER_Y = 2; // px from top of container — positions the upper half out of view so half ellipse is shown

function RotatingFlagArc() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ellipseSvgRef = useRef<SVGEllipseElement>(null);
  const svgWrapRef = useRef<SVGSVGElement>(null);
  const flagRefs = useRef<(HTMLDivElement | null)[]>([]);

  const pivotXRef = useRef(0);
  const radiusXRef = useRef(480);
  const radiusYRef = useRef(120);
  const rotationRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const pausedRef = useRef(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const angleStep = 360 / FLAG_RING.length;

  const layout = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const width = container.offsetWidth;
    pivotXRef.current = width / 2;

    const rx = Math.min(520, Math.max(160, (width - 40) / 2));
    const ry = Math.min(125, Math.max(50, rx * 0.25));
    radiusXRef.current = rx;
    radiusYRef.current = ry;

    if (svgWrapRef.current) {
      svgWrapRef.current.style.left = `${pivotXRef.current - rx}px`;
      svgWrapRef.current.style.top = `${CENTER_Y - ry}px`;
      svgWrapRef.current.style.width = `${rx * 2}px`;
      svgWrapRef.current.style.height = `${ry * 2}px`;
    }
  }, []);

  const tick = useCallback(
    (time: number) => {
      if (lastTimeRef.current == null) lastTimeRef.current = time;
      const dt = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      if (!pausedRef.current) {
        rotationRef.current = (rotationRef.current + RING_AUTO_SPEED * dt) % 360;
      }
      const rotation = rotationRef.current;
      const pivotX = pivotXRef.current;
      const rx = radiusXRef.current;
      const ry = radiusYRef.current;

      // Sync SVG dashed stroke offset with ellipse rotation
      if (ellipseSvgRef.current) {
        const perimeter = Math.PI * (3 * (rx + ry) - Math.sqrt((3 * rx + ry) * (rx + 3 * ry)));
        ellipseSvgRef.current.style.strokeDashoffset = `${-((rotation / 360) * perimeter)}px`;
      }

      flagRefs.current.forEach((el, i) => {
        if (!el) return;
        const angleDeg = (i * angleStep + rotation) % 360;
        const rad = (angleDeg * Math.PI) / 180;
        const x = rx * Math.cos(rad);
        const y = ry * Math.sin(rad);

        // Position on the ellipse
        el.style.transform = `translate(${pivotX + x}px, ${CENTER_Y + y}px) translate(-50%, -50%)`;

        // Smoothly fade flags at the top boundary so only the half ellipse arc is prominent
        if (y < -15) {
          el.style.opacity = "0";
          el.style.pointerEvents = "none";
        } else {
          const opacity = Math.min(1, (y + 15) / 30);
          el.style.opacity = String(opacity);
          el.style.pointerEvents = opacity > 0.5 ? "auto" : "none";
        }

        // Highlight flag nearest the lowest point of the half ellipse (bottom center, 90 deg)
        const normalized = ((angleDeg - 90 + 540) % 360) - 180;
        el.dataset.active = Math.abs(normalized) < angleStep / 2 ? "true" : "false";
      });

      rafRef.current = requestAnimationFrame(tick);
    },
    [angleStep]
  );

  useEffect(() => {
    layout();
    rafRef.current = requestAnimationFrame(tick);

    const handleResize = () => layout();
    window.addEventListener("resize", handleResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [tick, layout]);

  const pauseThenResume = () => {
    pausedRef.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      pausedRef.current = false;
      lastTimeRef.current = null;
    }, RING_RESUME_DELAY);
  };

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute left-0 right-0 top-2 z-0 mx-auto max-w-5xl overflow-hidden"
      style={{ height: 180 }}
    >
      {/* Dashed ellipse line */}
      <svg
        ref={svgWrapRef}
        className="absolute opacity-60 pointer-events-none"
        fill="none"
      >
        <ellipse
          ref={ellipseSvgRef}
          cx="50%"
          cy="50%"
          rx="50%"
          ry="50%"
          stroke="#F6A19E"
          strokeWidth={1.5}
          strokeDasharray="4 6"
        />
      </svg>

      {/* Orbiting Flags along the ellipse */}
      {FLAG_RING.map((item, i) => {
        const isImage = item.flag.startsWith("/");

        return (
          <div
            key={i}
            ref={(el) => {
              flagRefs.current[i] = el;
            }}
            onClick={pauseThenResume}
            className="pointer-events-auto absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/60 bg-white text-base shadow-md transition-[width,height,box-shadow,border-color,opacity] duration-300 data-[active=true]:h-11 data-[active=true]:w-11 data-[active=true]:border-2 data-[active=true]:border-[#EC2C27] data-[active=true]:shadow-lg cursor-pointer select-none overflow-hidden"
          >
            {isImage ? (
              <div className="relative h-full w-full overflow-hidden rounded-full p-0.5">
                <Image
                  src={item.flag}
                  alt={item.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            ) : (
              <span>{item.flag}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}

// -----------------------------------------------------------------------
// Destination carousel — unrelated to the flag ring above, keeps its own
// auto-advance + pause/resume-after-6s behavior independently.
// -----------------------------------------------------------------------

const CAROUSEL_AUTO_INTERVAL = 4500; // ms between automatic advances
const CAROUSEL_RESUME_DELAY = 6000; // ms of inactivity before auto-advance resumes

export default function TopDestinations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startAuto = useCallback(() => {
    if (autoTimer.current) clearInterval(autoTimer.current);
    autoTimer.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % destinations.length);
    }, CAROUSEL_AUTO_INTERVAL);
  }, []);

  const pauseThenResume = useCallback(() => {
    if (autoTimer.current) clearInterval(autoTimer.current);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(startAuto, CAROUSEL_RESUME_DELAY);
  }, [startAuto]);

  useEffect(() => {
    startAuto();
    return () => {
      if (autoTimer.current) clearInterval(autoTimer.current);
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, [startAuto]);

  const goTo = (index: number) => {
    setActiveIndex(((index % destinations.length) + destinations.length) % destinations.length);
    pauseThenResume();
  };

  const handleNext = () => goTo(activeIndex + 1);
  const handlePrev = () => goTo(activeIndex - 1);

  const current = destinations[activeIndex];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FEF2F2] to-white px-6 pt-10 pb-20 sm:px-10 sm:pt-14 sm:pb-28 lg:px-16 text-slate-900 select-none">
      {/* Fixed, continuously rotating flag ring (line + flags rotate together) — independent of the destination cards below */}
      <RotatingFlagArc />

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        {/* Section Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full bg-[#FDE8E7] px-5 py-1.5 text-xs font-semibold text-[#262B65] border border-[#EC2C27]/20">
            <img src="/images/flowericon.png" alt="" width={17} height={17} />
            Top Destinations
            <img src="/images/flowericon.png" alt="" width={17} height={17} />
          </div>

          <h2
            className="text-4xl font-bold leading-tight text-[#262B65] sm:text-5xl lg:text-6xl tracking-tight"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
          >
            Top <span className="italic font-medium text-[#EC2C27]">Destinations</span>
            <br />
            This Season
          </h2>
        </div>

        {/* Center Interactive Carousel Card */}
        <div className="relative mx-auto mt-8 flex max-w-4xl items-center justify-center">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous destination"
            className="absolute -left-4 sm:-left-6 z-20 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white text-slate-800 shadow-lg border border-slate-200/80 transition-transform duration-300 hover:scale-110 hover:border-[#EA2C2A] active:scale-95"
          >
            <ChevronLeft size={20} strokeWidth={2.25} />
          </button>

          {/* Main Card */}
          <div className="w-full overflow-hidden rounded-[32px] bg-white shadow-2xl border border-slate-100/80 transition-all duration-500">
            <div className="flex flex-col md:flex-row items-stretch">
              {/* Card Image */}
              <div className="relative w-full md:w-1/2 min-h-[260px] md:min-h-[340px] overflow-hidden bg-slate-100">
                {/* <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                /> */}
              </div>

              {/* Card Content */}
              <div className="flex w-full md:w-1/2 flex-col justify-between p-6 sm:p-8 lg:p-10 text-left">
                <div>
                  <h3 className="text-3xl font-bold text-[#0F172A] tracking-tight mb-2">
                    {current.name}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {current.description}
                  </p>

                  <span className="text-xs font-semibold text-slate-500">{current.region}</span>
                </div>

                <div className="mt-6">
                  <Link
                    href={`/tours/${current.id}`}
                    className="btn-hover-slide inline-flex items-center gap-3 rounded-full bg-[#262A67] py-2.5 pl-6 pr-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#EA2C2A] hover:shadow-lg"
                  >
                    <span className="btn-text-wrapper">
                      <span className="btn-text">Explore All Tours</span>
                      <span className="btn-text-clone">Explore All Tours</span>
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                      <ArrowUpRight size={15} className="btn-arrow" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next destination"
            className="absolute -right-4 sm:-right-6 z-20 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white text-slate-800 shadow-lg border border-slate-200/80 transition-transform duration-300 hover:scale-110 hover:border-[#EA2C2A] active:scale-95"
          >
            <ChevronRight size={20} strokeWidth={2.25} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {destinations.map((dest, i) => (
            <button
              key={dest.id}
              onClick={() => goTo(i)}
              aria-label={`Go to ${dest.name}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? "w-6 bg-[#EA2C2A]" : "w-1.5 bg-slate-300 hover:bg-slate-400"
                }`}
            />
          ))}
        </div>

        {/* Paragraph Description below card */}
        <p className="mx-auto mt-8 max-w-xl text-center text-xs sm:text-sm text-slate-600 leading-relaxed">
          From mist-wrapped mountain trails to sun-drenched coastal villages — hand-selected
          destinations that offer experiences lasting long after you return.
        </p>

        {/* Bottom CTA Button with overlapping flag avatars */}
        <div className="mt-10 flex items-center justify-center">
          <Link
            href="/locations"
            className="btn-hover-slide inline-flex items-center gap-3 rounded-full bg-[#262A67] py-2.5 pl-6 pr-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#EA2C2A] hover:shadow-lg"
          >
            <span className="btn-text-wrapper">
              <span className="btn-text">View All Locations</span>
              <span className="btn-text-clone">View All Locations</span>
            </span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
              <ArrowUpRight size={15} className="btn-arrow" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}