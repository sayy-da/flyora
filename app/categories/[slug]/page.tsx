import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getCategoryBySlug, getCategories, getToursByCategory } from "@/sanity/lib/fetchData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ArrowUpRight, Sparkles, Layers } from "lucide-react";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const category = await getCategoryBySlug(resolvedParams.slug);

  if (!category) {
    notFound();
  }

  const tours = await getToursByCategory(resolvedParams.slug);

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col font-sans">
      <Header />

      {/* Hero Banner */}
      <section className="relative py-20 px-6 sm:px-10 lg:px-16 overflow-hidden bg-neutral-900 border-b border-neutral-800">
        <div className="pointer-events-none absolute -top-40 right-1/4 w-[500px] h-[500px] bg-amber-500/10 blur-[140px] rounded-full" />

        <div className="relative mx-auto max-w-[1600px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-amber-300 border border-amber-400/20 mb-4">
            <Layers size={14} />
            Category Showcase
          </div>
          <h1
            className="text-4xl font-extrabold sm:text-6xl text-white tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {category.name} <br />
            <span className={`${caveat.className} text-amber-300 font-normal text-5xl sm:text-7xl`}>
              Tour Packages
            </span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-neutral-400 leading-relaxed">
            {category.description}
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <main className="flex-1 py-16 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          {tours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tours.map((tour) => (
                <article
                  key={tour._id}
                  className="group relative flex flex-col rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/40"
                >
                  <div className="relative h-64 w-full overflow-hidden bg-neutral-800">
                    <Image
                      src={tour.coverImage}
                      alt={tour.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />

                    <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-neutral-950/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white">
                      <Calendar size={13} className="text-amber-400" />
                      {tour.duration?.days} Days / {tour.duration?.nights} Nights
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    {tour.destinationName && (
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                        {tour.destinationName}
                      </span>
                    )}
                    <h3
                      className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors mb-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <Link href={`/tours/${tour.slug}`}>{tour.title}</Link>
                    </h3>
                    <p className="text-sm text-neutral-400 line-clamp-2 leading-relaxed mb-6">
                      {tour.overview}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-neutral-800">
                      <div>
                        <span className="text-xs text-neutral-400 uppercase tracking-wider block">Price per person</span>
                        <span className="text-2xl font-black text-amber-300">${tour.discountPrice || tour.price}</span>
                      </div>

                      <Link
                        href={`/tours/${tour.slug}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-neutral-950 transition-transform hover:scale-110"
                      >
                        <ArrowUpRight size={17} strokeWidth={2.5} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl bg-neutral-900 border border-neutral-800 p-12 text-center">
              <p className="text-neutral-400 text-base">
                No tours listed under {category.name} right now.
              </p>
              <Link
                href="/tours"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-neutral-950 hover:bg-amber-300"
              >
                Explore All Tours
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
