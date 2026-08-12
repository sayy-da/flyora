import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getTours, getCategories, TourPackage } from "@/sanity/lib/fetchData";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Calendar, Tag, ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Tour Packages & Deals | Flyora Travels",
  description: "Browse our handpicked luxury & adventure tour packages around the world. Customized itineraries, 5-star stays, and expert local guides.",
};

export default async function ToursPage() {
  const tours = await getTours();
  const categories = await getCategories();

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col font-sans">
      <Header />

      {/* Hero Banner */}
      <section className="relative py-20 px-6 sm:px-10 lg:px-16 overflow-hidden bg-neutral-900 border-b border-neutral-800">
        <div className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[140px] rounded-full" />
        
        <div className="relative mx-auto max-w-[1600px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-amber-300 border border-amber-400/20 mb-4">
            <Sparkles size={14} fill="currentColor" />
            Curated Experiences
          </div>
          <h1
            className="text-4xl font-extrabold sm:text-6xl text-white tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Explore Extraordinary <br />
            <span className={`${caveat.className} text-amber-300 font-normal text-5xl sm:text-7xl`}>
              Tour Packages
            </span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-neutral-400 leading-relaxed">
            Handcrafted group and private journeys designed for discerning travelers. Select a preset itinerary or customize every detail.
          </p>
        </div>
      </section>

      {/* Categories & Filter Bar */}
      <section className="py-8 px-6 sm:px-10 lg:px-16 border-b border-neutral-800/60 bg-neutral-950/80 sticky top-[73px] z-30 backdrop-blur-md">
        <div className="mx-auto max-w-[1600px] flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 mr-2">Categories:</span>
            <Link
              href="/tours"
              className="rounded-full bg-amber-400 px-4 py-1.5 text-xs font-bold text-neutral-950 transition"
            >
              All Tours ({tours.length})
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat._id}
                href={`/categories/${cat.slug}`}
                className="rounded-full bg-neutral-900 border border-neutral-800 px-4 py-1.5 text-xs font-medium text-neutral-300 transition hover:border-amber-400/50 hover:text-white"
              >
                {cat.name}
              </Link>
            ))}
          </div>

          <div className="shrink-0 hidden sm:block">
            <span className="text-xs text-neutral-400 font-medium">
              Showing <span className="text-white font-bold">{tours.length}</span> luxury tours
            </span>
          </div>
        </div>
      </section>

      {/* Tour List Grid */}
      <main className="flex-1 py-16 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <article
                key={tour._id}
                className="group relative flex flex-col rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/10"
              >
                {/* Image Cover */}
                <div className="relative h-64 w-full overflow-hidden bg-neutral-800">
                  <Image
                    src={tour.coverImage}
                    alt={tour.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {tour.tag && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-neutral-950 shadow-md">
                        <Tag size={12} />
                        {tour.tag}
                      </span>
                    )}
                    {tour.categoryName && (
                      <span className="rounded-full bg-neutral-950/80 backdrop-blur-md px-3 py-1 text-xs font-medium text-amber-200 border border-amber-400/30">
                        {tour.categoryName}
                      </span>
                    )}
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-neutral-950/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white">
                    <Calendar size={13} className="text-amber-400" />
                    {tour.duration?.days} Days / {tour.duration?.nights} Nights
                  </div>
                </div>

                {/* Content Body */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  {tour.destinationName && (
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                      {tour.destinationName}
                    </span>
                  )}
                  <h2
                    className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1 mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    <Link href={`/tours/${tour.slug}`}>{tour.title}</Link>
                  </h2>
                  <p className="text-sm text-neutral-400 line-clamp-2 leading-relaxed mb-6">
                    {tour.overview}
                  </p>

                  {/* Included Highlights */}
                  {tour.includedServices && tour.includedServices.length > 0 && (
                    <div className="mb-6 space-y-1.5 border-t border-neutral-800/80 pt-4">
                      {tour.includedServices.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                          <CheckCircle2 size={13} className="text-amber-400 shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Footer Price & Action */}
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-neutral-800">
                    <div>
                      <span className="text-xs text-neutral-400 uppercase tracking-wider block">Starting from</span>
                      <div className="flex items-baseline gap-2">
                        {tour.discountPrice ? (
                          <>
                            <span className="text-2xl font-black text-amber-300">${tour.discountPrice}</span>
                            <span className="text-sm text-neutral-500 line-through">${tour.price}</span>
                          </>
                        ) : (
                          <span className="text-2xl font-black text-amber-300">${tour.price}</span>
                        )}
                        <span className="text-xs text-neutral-400 font-normal">/ person</span>
                      </div>
                    </div>

                    <Link
                      href={`/tours/${tour.slug}`}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400 text-neutral-950 transition-transform duration-300 hover:scale-110 hover:bg-amber-300 shadow-lg"
                      aria-label="View Tour Details"
                    >
                      <ArrowUpRight size={18} strokeWidth={2.5} />
                    </Link>
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
