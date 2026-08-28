"use client";

import Image from "next/image";

export default function OurPromise() {
  return (
    <section className="relative overflow-hidden bg-white pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20 px-4 sm:px-6 lg:px-12">
      <div className="relative mx-auto w-full max-w-[1560px] min-h-[360px] sm:min-h-[480px] lg:min-h-[560px] flex items-center justify-center">

        {/* ─── Top-Left Badge: Scalloped (Expert Local Guides) ─── */}
        <div className="hidden md:flex absolute -left-2 lg:left-2 xl:left-6 -top-4 sm:-top-6 lg:-top-8 flex-col items-center justify-center select-none transition-transform duration-500 hover:scale-105 hover:-translate-y-1">
          <div className="relative flex h-48 w-48 lg:h-60 lg:w-60 items-center justify-center p-6 text-center">
            <Image
              src="/images/Scalloped.png"
              alt="Scalloped badge"
              fill
              className="object-contain drop-shadow-sm pointer-events-none"
              priority
            />
            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="mb-2.5 relative flex h-12 w-12 items-center justify-center">
                <Image
                  src="/images/Scalloped(icon).png"
                  alt="Expert Local Guides Icon"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <span className="text-sm lg:text-base font-bold leading-snug text-[#1B1B2F]">
                Expert Local
                <br />
                Guides
              </span>
            </div>
          </div>
        </div>

        {/* ─── Top-Right Badge: Sunburst (Travel With Confidence) ─── */}
        <div className="hidden md:flex absolute -right-2 lg:right-2 xl:right-6 -top-4 sm:-top-6 lg:-top-8 flex-col items-center justify-center select-none transition-transform duration-500 hover:scale-105 hover:-translate-y-1">
          <div className="relative flex h-52 w-52 lg:h-64 lg:w-64 items-center justify-center p-6 text-center">
            <Image
              src="/images/Sunburst.png"
              alt="Sunburst badge"
              fill
              className="object-contain drop-shadow-sm pointer-events-none"
              priority
            />
            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="mb-2.5 relative flex h-12 w-12 items-center justify-center">
                <Image
                  src="/images/Sunburst(icon).png"
                  alt="Travel With Confidence Icon"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <span className="text-sm lg:text-base font-bold leading-snug text-[#1B1B2F]">
                Travel With
                <br />
                Confidence
              </span>
            </div>
          </div>
        </div>

        {/* ─── Center Heading & Pill ─── */}
        <div className="relative z-10 mx-auto max-w-2xl lg:max-w-3xl text-center px-4 py-12">
          {/* Pill Badge */}
          <div className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full bg-[#FEF2F2] px-5 py-2 text-xs font-semibold text-[#262A67] border border-[#EA2C2A]/20 shadow-xs">
            <Image src="/images/flowericon.png" alt="" width={17} height={17} />
            <span>Our Promise to You</span>
            <Image src="/images/flowericon.png" alt="" width={17} height={17} />
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#1B1B2F] leading-[1.25] sm:leading-[1.2] tracking-tight">
            We don&apos;t just book trips, We
            <br />
            craft{" "}
            <span
              className="italic font-normal font-serif text-[#1B1B2F]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Journeys
            </span>{" "}
            that stay with
            <br />
            you for a{" "}
            <span
              className="italic font-normal font-serif text-[#1B1B2F]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Lifetime
            </span>
          </h2>
        </div>

        {/* ─── Bottom-Left Badge: Rounded Scalloped Square (Fully Custom Trips) ─── */}
        <div className="hidden md:flex absolute left-4 lg:left-14 xl:left-24 -bottom-6 sm:-bottom-8 lg:-bottom-10 flex-col items-center justify-center select-none transition-transform duration-500 hover:scale-105 hover:-translate-y-1">
          <div className="relative flex h-48 w-48 lg:h-60 lg:w-60 items-center justify-center p-6 text-center">
            <Image
              src="/images/Rounded scalloped square.png"
              alt="Rounded scalloped square badge"
              fill
              className="object-contain drop-shadow-sm pointer-events-none"
              priority
            />
            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="mb-2.5 relative flex h-12 w-12 items-center justify-center">
                <Image
                  src="/images/Rounded scalloped square(icon).png"
                  alt="Fully Custom Trips Icon"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <span className="text-sm lg:text-base font-bold leading-snug text-[#1B1B2F]">
                Fully Custom
                <br />
                Trips
              </span>
            </div>
          </div>
        </div>

        {/* ─── Bottom-Right Badge: Rounded Diamond (80+ Destinations) ─── */}
        <div className="hidden md:flex absolute right-4 lg:right-14 xl:right-24 -bottom-6 sm:-bottom-8 lg:-bottom-10 flex-col items-center justify-center select-none transition-transform duration-500 hover:scale-105 hover:-translate-y-1">
          <div className="relative flex h-48 w-48 lg:h-60 lg:w-60 items-center justify-center p-6 text-center">
            <Image
              src="/images/Rounded diamond.png"
              alt="Rounded diamond badge"
              fill
              className="object-contain drop-shadow-sm pointer-events-none"
              priority
            />
            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="mb-2.5 relative flex h-12 w-12 items-center justify-center">
                <Image
                  src="/images/Rounded diamond(icon).png"
                  alt="80+ Destinations Icon"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <span className="text-sm lg:text-base font-bold leading-snug text-[#1B1B2F]">
                80+
                <br />
                Destinations
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Mobile View: Responsive Badges Grid ─── */}
      <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:hidden max-w-md mx-auto">
        {/* Scalloped Badge Mobile */}
        <div className="relative flex aspect-square items-center justify-center p-4 text-center">
          <Image
            src="/images/Scalloped.png"
            alt="Scalloped badge"
            fill
            className="object-contain"
          />
          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="mb-1.5 relative flex h-9 w-9 items-center justify-center">
              <Image
                src="/images/Scalloped(icon).png"
                alt="Expert Local Guides Icon"
                width={34}
                height={34}
                className="object-contain"
              />
            </div>
            <span className="text-xs font-bold leading-tight text-[#1B1B2F]">
              Expert Local
              <br />
              Guides
            </span>
          </div>
        </div>

        {/* Sunburst Badge Mobile */}
        <div className="relative flex aspect-square items-center justify-center p-4 text-center">
          <Image
            src="/images/Sunburst.png"
            alt="Sunburst badge"
            fill
            className="object-contain"
          />
          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="mb-1.5 relative flex h-9 w-9 items-center justify-center">
              <Image
                src="/images/Sunburst(icon).png"
                alt="Travel With Confidence Icon"
                width={34}
                height={34}
                className="object-contain"
              />
            </div>
            <span className="text-xs font-bold leading-tight text-[#1B1B2F]">
              Travel With
              <br />
              Confidence
            </span>
          </div>
        </div>

        {/* Rounded Scalloped Square Badge Mobile */}
        <div className="relative flex aspect-square items-center justify-center p-4 text-center">
          <Image
            src="/images/Rounded scalloped square.png"
            alt="Rounded scalloped square badge"
            fill
            className="object-contain"
          />
          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="mb-1.5 relative flex h-9 w-9 items-center justify-center">
              <Image
                src="/images/Rounded scalloped square(icon).png"
                alt="Fully Custom Trips Icon"
                width={34}
                height={34}
                className="object-contain"
              />
            </div>
            <span className="text-xs font-bold leading-tight text-[#1B1B2F]">
              Fully Custom
              <br />
              Trips
            </span>
          </div>
        </div>

        {/* Rounded Diamond Badge Mobile */}
        <div className="relative flex aspect-square items-center justify-center p-4 text-center">
          <Image
            src="/images/Rounded diamond.png"
            alt="Rounded diamond badge"
            fill
            className="object-contain"
          />
          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="mb-1.5 relative flex h-9 w-9 items-center justify-center">
              <Image
                src="/images/Rounded diamond(icon).png"
                alt="80+ Destinations Icon"
                width={34}
                height={34}
                className="object-contain"
              />
            </div>
            <span className="text-xs font-bold leading-tight text-[#1B1B2F]">
              80+
              <br />
              Destinations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
