import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getTours, getCategories } from "@/sanity/lib/fetchData";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Calendar, Tag, ArrowUpRight, CheckCircle2 } from "lucide-react";
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
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header />

      {/* Hero Banner */}
      <section className="relative py-20 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#EEF2FF]/40 border-b border-[#C7D2FE]/60">
        <div className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] bg-[#EA2C2A]/10 blur-[140px] rounded-full" />
        
        <div className="relative mx-auto max-w-[1600px] text-center">
          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full bg-[#FEF2F2] px-5 py-2 text-xs font-semibold text-[#262A67] border border-[#EA2C2A]/20">
            <img src="/images/flowericon.png" alt="" width={17} height={17} />
            Curated Experiences
            <img src="/images/flowericon.png" alt="" width={17} height={17} />
          </div>
          <h1
            className="text-4xl font-extrabold sm:text-6xl text-[#262A67] tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Explore Extraordinary <br />
            <span className={`${caveat.className} text-[#EA2C2A] font-normal text-5xl sm:text-7xl`}>
              Tour Packages
            </span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed">
            Handcrafted group and private journeys designed for discerning travelers. Select a preset itinerary or customize every detail.
          </p>
        </div>
      </section>

      {/* Categories & Filter Bar */}
      <section className="py-6 px-6 sm:px-10 lg:px-16 border-b border-slate-200 bg-white/90 sticky top-[73px] z-30 backdrop-blur-md">
        <div className="mx-auto max-w-[1600px] flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">Categories:</span>
            <Link
              href="/tours"
              className="rounded-full bg-[#262A67] px-4 py-1.5 text-xs font-bold text-white transition shadow-xs"
            >
              All Tours ({tours.length})
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat._id}
                href={`/categories/${cat.slug}`}
                className="rounded-full bg-slate-100 border border-slate-200 px-4 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-[#EA2C2A] hover:bg-white hover:text-[#EA2C2A]"
              >
                {cat.name}
              </Link>
            ))}
          </div>

          <div className="shrink-0 hidden sm:block">
            <span className="text-xs text-slate-500 font-medium">
              Showing <span className="text-[#262A67] font-bold">{tours.length}</span> luxury tours
            </span>
          </div>
        </div>
      </section>

      {/* Tour List Grid */}
      <main className="flex-1 py-16 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <article
                key={tour._id}
                className="group relative flex flex-col rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-[#262A67]/40 hover:shadow-xl"
              >
                {/* Image Cover */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={tour.coverImage}
                    alt={tour.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {tour.tag && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#EA2C2A] px-3 py-1 text-xs font-bold text-white shadow-md">
                        <Tag size={12} />
                        {tour.tag}
                      </span>
                    )}
                    {tour.categoryName && (
                      <span className="rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-xs font-bold text-[#262A67] border border-slate-200">
                        {tour.categoryName}
                      </span>
                    )}
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-xs font-semibold text-[#262A67] shadow-sm">
                    <Calendar size={13} className="text-[#EA2C2A]" />
                    {tour.duration?.days} Days / {tour.duration?.nights} Nights
                  </div>
                </div>

                {/* Content Body */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  {tour.destinationName && (
                    <span className="text-xs font-bold uppercase tracking-wider text-[#EA2C2A] mb-1">
                      {tour.destinationName}
                    </span>
                  )}
                  <h2
                    className="text-2xl font-bold text-[#262A67] group-hover:text-[#EA2C2A] transition-colors line-clamp-1 mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    <Link href={`/tours/${tour.slug}`}>{tour.title}</Link>
                  </h2>
                  <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed mb-6">
                    {tour.overview}
                  </p>

                  {/* Included Highlights */}
                  {tour.includedServices && tour.includedServices.length > 0 && (
                    <div className="mb-6 space-y-1.5 border-t border-slate-100 pt-4">
                      {tour.includedServices.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 size={13} className="text-[#EA2C2A] shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Footer Action */}
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-xs font-bold text-[#262A67] bg-[#EEF2FF] px-3.5 py-1.5 rounded-full border border-[#C7D2FE]">
                      {tour.customizable ? 'Customizable Itinerary' : 'Curated Itinerary'}
                    </span>

                    <Link
                      href={`/tours/${tour.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#EA2C2A] group-hover:text-[#C82120] transition-colors"
                      aria-label="View Tour Details"
                    >
                      <span>Explore Itinerary</span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EA2C2A] text-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#C82120] shadow-md">
                        <ArrowUpRight size={16} strokeWidth={2.5} />
                      </span>
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
