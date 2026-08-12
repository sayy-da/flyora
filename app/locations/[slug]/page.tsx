import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getDestinationBySlug, getDestinations, getToursByDestination } from "@/sanity/lib/fetchData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Star, ArrowUpRight, Calendar } from "lucide-react";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const destinations = await getDestinations();
  return destinations.map((d) => ({ slug: d.slug }));
}

export default async function LocationDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const destination = await getDestinationBySlug(resolvedParams.slug);

  if (!destination) {
    notFound();
  }

  const tours = await getToursByDestination(resolvedParams.slug);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header />

      {/* Hero Banner */}
      <section className="relative h-[55vh] min-h-[450px] w-full overflow-hidden bg-[#262A67]">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

        <div className="relative mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-12 sm:px-10 lg:px-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl drop-shadow-md">{destination.flag}</span>
            <span className="rounded-full bg-[#EA2C2A] px-3.5 py-1 text-xs font-bold text-white shadow-md">
              {destination.region}
            </span>
            {destination.tag && (
              <span className="rounded-full bg-white/20 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-white border border-white/20">
                {destination.tag}
              </span>
            )}
          </div>

          <h1
            className="text-4xl font-extrabold sm:text-6xl lg:text-7xl text-white tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {destination.name}, {destination.country}
          </h1>

          <div className="mt-4 flex items-center gap-6 text-sm text-slate-200">
            <div className="flex items-center gap-1.5 font-bold text-[#EA2C2A]">
              <Star size={16} fill="currentColor" />
              <span className="text-white">{destination.rating} rating ({destination.reviewsCount} reviews)</span>
            </div>
            <span>•</span>
            <div>Starting from <span className="font-bold text-[#EA2C2A]">${destination.startingPrice}</span></div>
          </div>
        </div>
      </section>

      {/* Destination Overview */}
      <main className="flex-1 py-16 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="mx-auto max-w-[1600px] space-y-16">
          
          <div className="max-w-3xl space-y-4">
            <h2
              className="text-3xl font-bold text-[#262A67]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              About {destination.name}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {destination.description}
            </p>
          </div>

          {/* Available Tours */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <div>
                <h2
                  className="text-3xl font-bold text-[#262A67]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Featured Tours in {destination.name}
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Handcrafted tour packages featuring 5-star accommodations, private guides, and seamless transfers.
                </p>
              </div>

              <Link
                href={`/customize?destination=${destination.name}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#EA2C2A] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#C82120] shrink-0 shadow-md"
              >
                <span>Customize a {destination.name} Trip</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>

            {tours.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tours.map((tour) => (
                  <article
                    key={tour._id}
                    className="group relative flex flex-col rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-[#262A67]/40 hover:shadow-xl"
                  >
                    <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={tour.coverImage}
                        alt={tour.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                      
                      <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-xs font-semibold text-[#262A67] shadow-sm">
                        <Calendar size={13} className="text-[#EA2C2A]" />
                        {tour.duration?.days} Days / {tour.duration?.nights} Nights
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h3
                        className="text-2xl font-bold text-[#262A67] group-hover:text-[#EA2C2A] transition-colors mb-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        <Link href={`/tours/${tour.slug}`}>{tour.title}</Link>
                      </h3>
                      <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed mb-6">
                        {tour.overview}
                      </p>

                      <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                        <div>
                          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Price per person</span>
                          <span className="text-2xl font-black text-[#262A67]">${tour.discountPrice || tour.price}</span>
                        </div>

                        <Link
                          href={`/tours/${tour.slug}`}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EA2C2A] text-white transition-transform hover:scale-110 hover:bg-[#C82120] shadow-md"
                        >
                          <ArrowUpRight size={17} strokeWidth={2.5} />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-3xl bg-slate-50 border border-slate-200 p-12 text-center">
                <p className="text-slate-600 text-base">
                  No standard preset tours available for {destination.name} right now.
                </p>
                <Link
                  href={`/customize?destination=${destination.name}`}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#EA2C2A] px-6 py-3 text-sm font-bold text-white hover:bg-[#C82120]"
                >
                  Request a Custom {destination.name} Itinerary
                </Link>
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
