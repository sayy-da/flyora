import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getDestinations, Destination } from "@/sanity/lib/fetchData";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Star, MapPin, ArrowUpRight, Compass } from "lucide-react";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Destinations & Locations | Flyora Travels",
  description: "Discover iconic travel destinations across Asia, Europe, Tropical Islands, Africa, and the Americas.",
};

const regions = ["All", "Asia", "Europe", "Tropical", "Americas", "Africa", "Middle East"];

export default async function LocationsPage() {
  const destinations = await getDestinations();

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col font-sans">
      <Header />

      {/* Hero Header */}
      <section className="relative py-20 px-6 sm:px-10 lg:px-16 overflow-hidden bg-neutral-900 border-b border-neutral-800">
        <div className="pointer-events-none absolute -top-40 left-1/3 w-[500px] h-[500px] bg-amber-500/10 blur-[140px] rounded-full" />
        
        <div className="relative mx-auto max-w-[1600px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-amber-300 border border-amber-400/20 mb-4">
            <Compass size={14} />
            Global Wonders
          </div>
          <h1
            className="text-4xl font-extrabold sm:text-6xl text-white tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Explore Popular <br />
            <span className={`${caveat.className} text-amber-300 font-normal text-5xl sm:text-7xl`}>
              Destinations
            </span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-neutral-400 leading-relaxed">
            From mountain chalets in Switzerland to ancient temples in Japan, find your dream destination crafted with local luxury expertise.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <main className="flex-1 py-16 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <article
                key={dest._id}
                className="group relative flex flex-col rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/10"
              >
                {/* Image & Flag Header */}
                <div className="relative h-72 w-full overflow-hidden bg-neutral-800">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-90" />

                  {/* Flag & Tag Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="text-2xl drop-shadow-md">{dest.flag}</span>
                    {dest.tag && (
                      <span className="rounded-full bg-neutral-950/80 backdrop-blur-md px-3 py-1 text-xs font-semibold text-amber-300 border border-amber-400/30">
                        {dest.tag}
                      </span>
                    )}
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-neutral-950/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-amber-300">
                    <Star size={13} fill="currentColor" />
                    <span>{dest.rating}</span>
                    <span className="text-neutral-400 font-normal">({dest.reviewsCount})</span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      {dest.country} • {dest.region}
                    </span>
                    <h2
                      className="text-3xl font-extrabold text-white group-hover:text-amber-300 transition-colors"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <Link href={`/locations/${dest.slug}`}>{dest.name}</Link>
                    </h2>
                  </div>
                </div>

                {/* Description & Action */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-sm text-neutral-400 leading-relaxed line-clamp-2 mb-6">
                    {dest.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-neutral-800">
                    <div>
                      <span className="text-xs text-neutral-400 uppercase tracking-wider block">Starting from</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-amber-300">${dest.startingPrice}</span>
                        <span className="text-xs text-neutral-400">/ traveler</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-neutral-300 bg-neutral-800 px-3 py-1.5 rounded-full">
                        {dest.toursCount} Tours
                      </span>
                      <Link
                        href={`/locations/${dest.slug}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-neutral-950 transition-transform duration-300 hover:scale-110 hover:bg-amber-300 shadow-md"
                        aria-label={`Explore ${dest.name}`}
                      >
                        <ArrowUpRight size={17} strokeWidth={2.5} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
