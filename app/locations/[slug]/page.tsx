import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getDestinationBySlug, getDestinations, getToursByDestination } from "@/sanity/lib/fetchData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Star, ArrowUpRight, Calendar, Tag, Compass, Sparkles } from "lucide-react";
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
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col font-sans">
      <Header />

      {/* Hero Banner */}
      <section className="relative h-[55vh] min-h-[450px] w-full overflow-hidden bg-neutral-900">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-black/30" />

        <div className="relative mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-12 sm:px-10 lg:px-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl drop-shadow-md">{destination.flag}</span>
            <span className="rounded-full bg-amber-400/20 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-amber-300 border border-amber-400/30">
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

          <div className="mt-4 flex items-center gap-6 text-sm text-neutral-300">
            <div className="flex items-center gap-1.5 font-semibold text-amber-300">
              <Star size={16} fill="currentColor" />
              <span>{destination.rating} rating ({destination.reviewsCount} reviews)</span>
            </div>
            <span>•</span>
            <div>Starting from <span className="font-bold text-amber-300">${destination.startingPrice}</span></div>
          </div>
        </div>
      </section>

      {/* Destination Overview */}
      <main className="flex-1 py-16 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1600px] space-y-16">
          
          <div className="max-w-3xl space-y-4">
            <h2
              className="text-3xl font-bold text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              About {destination.name}
            </h2>
            <p className="text-base text-neutral-300 leading-relaxed">
              {destination.description}
            </p>
          </div>

          {/* Available Tours */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <div>
                <h2
                  className="text-3xl font-bold text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Featured Tours in {destination.name}
                </h2>
                <p className="text-sm text-neutral-400 mt-1">
                  Handcrafted tour packages featuring 5-star accommodations, private guides, and seamless transfers.
                </p>
              </div>

              <Link
                href={`/customize?destination=${destination.name}`}
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-xs font-bold text-neutral-950 transition hover:bg-amber-300 shrink-0"
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
                    className="group relative flex flex-col rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/40"
                  >
                    <div className="relative h-60 w-full overflow-hidden bg-neutral-800">
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
                  No standard preset tours available for {destination.name} right now.
                </p>
                <Link
                  href={`/customize?destination=${destination.name}`}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-neutral-950 hover:bg-amber-300"
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
