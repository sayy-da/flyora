import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import { getDestinationBySlug, getToursByDestination } from "@/sanity/lib/fetchData";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function LocationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const dest = await getDestinationBySlug(slug);

  if (!dest) {
    notFound();
  }

  const tours = await getToursByDestination(slug);

  return (
    <div className={`${playfair.variable} min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#EA2C2A] selection:text-white`}>
      <Header />

      <main className="flex-1 pb-20 sm:pb-28">
        
        {/* Section 1: Hero Split (Image Left + Dark Card Right) */}
        <section className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16 pt-8 sm:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Left: Big Hero Image */}
            <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] lg:min-h-[540px] w-full overflow-hidden rounded-[28px] sm:rounded-[36px] bg-slate-100 shadow-md">
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>

            {/* Right: Dark Card Info Box */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-[28px] sm:rounded-[36px] bg-[#121629] p-8 sm:p-10 text-white shadow-xl border border-slate-800">
              
              <div>
                {/* Region & Title with Map Icon */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {dest.region}
                    </span>
                    <h1
                      className="text-4xl sm:text-5xl font-bold tracking-tight text-white mt-1"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {dest.name}
                    </h1>
                  </div>

                  {/* Outline map shape representation */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white border border-white/15">
                    <MapPin size={22} className="text-[#EA2C2A]" />
                  </div>
                </div>

                {/* Metadata List */}
                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-slate-400 font-medium">Country</span>
                    <span className="font-semibold text-white text-right">{dest.country}</span>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-slate-400 font-medium">Guest Rating</span>
                    <span className="font-semibold text-white">{dest.rating} / 5.0 ({dest.reviewsCount} reviews)</span>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-slate-400 font-medium">Available Tours</span>
                    <span className="font-semibold text-white text-right">{dest.toursCount || tours.length} Curated Itineraries</span>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <span className="text-slate-400 font-medium">Region</span>
                    <span className="font-semibold text-white">{dest.region}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8">
                <Link
                  href={`/customize?destination=${dest.name}`}
                  className="group flex w-full items-center justify-between rounded-full bg-white px-7 py-4 text-sm font-bold text-[#121629] transition-all duration-300 hover:bg-[#EA2C2A] hover:text-white shadow-lg"
                >
                  <span>Explore {dest.name} Tours</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FEF2F2] text-[#EA2C2A] transition-colors group-hover:bg-white group-hover:text-[#EA2C2A]">
                    <ArrowUpRight size={16} strokeWidth={2.5} />
                  </span>
                </Link>
              </div>

            </div>

          </div>
        </section>

        {/* Section 2: About the Destination */}
        <section className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16 pt-20 sm:pt-28">
          
          <div className="border-b border-dotted border-slate-200 pb-4 mb-8">
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              About the Destination
            </h2>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-4xl">
            <p>{dest.description}</p>
          </div>

          {/* 2-Column Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-12">
            <div className="relative aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/3] w-full overflow-hidden rounded-[28px] sm:rounded-[36px] bg-slate-100 shadow-md">
              <Image
                src={dest.image}
                alt={`${dest.name} highlight moment`}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {tours[0]?.coverImage ? (
              <div className="relative aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/3] w-full overflow-hidden rounded-[28px] sm:rounded-[36px] bg-slate-100 shadow-md">
                <Image
                  src={tours[0].coverImage}
                  alt={`${dest.name} tour experience`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ) : null}
          </div>

        </section>

        {/* Section 3: Destination Tour Packages */}
        <section className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16 pt-20 sm:pt-28">
          
          <div className="mb-10">
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {dest.name} <span className="italic font-medium text-[#0F172A]">Tour</span> Packages
            </h2>
          </div>

          {/* 3-Column Tour Packages Grid */}
          {tours && tours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tours.map((tour) => (
                <Link
                  key={tour._id || tour.slug}
                  href={`/tours/${tour.slug}`}
                  className="group flex flex-col rounded-[28px] sm:rounded-[32px] overflow-hidden bg-white border border-slate-200/90 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
                >
                  {/* Photo */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={tour.coverImage}
                      alt={tour.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Badges */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                      {tour.tag && (
                        <span className="rounded-full bg-[#121629]/90 px-3 py-1 text-xs font-bold text-white shadow-xs backdrop-blur-md">
                          {tour.tag}
                        </span>
                      )}
                      {tour.categoryName && (
                        <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#262B65] shadow-xs backdrop-blur-md">
                          {tour.categoryName}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                    <div>
                      <h3 className="text-xl font-bold text-[#0F172A] tracking-tight mb-2 transition-colors group-hover:text-[#EA2C2A]">
                        {tour.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-2">
                        {tour.overview}
                      </p>
                    </div>

                    {/* Dotted Divider & Price Row */}
                    <div>
                      <div className="my-5 border-t border-dotted border-slate-200" />
                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl font-black text-[#0F172A]">
                            {tour.duration?.days ? `$${(tour.duration.days * 450).toLocaleString()}` : "$2,490"}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">/person</span>
                        </div>
                        <span className="rounded-full bg-[#121629] px-3.5 py-1 text-xs font-bold text-white shadow-xs">
                          {tour.duration?.days ? `${tour.duration.days}D/${tour.duration.nights}N` : "7D/6N"}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-12 text-center">
              <p className="text-slate-600 text-base">
                No preset itineraries currently listed for {dest.name}.
              </p>
              <Link
                href={`/customize?destination=${dest.name}`}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#EA2C2A] px-6 py-3 text-sm font-bold text-white hover:bg-[#C82120]"
              >
                Request a Custom {dest.name} Itinerary
              </Link>
            </div>
          )}

        </section>

      </main>

      <Footer />
    </div>
  );
}
