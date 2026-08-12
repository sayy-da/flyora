import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getTourBySlug, getTours } from "@/sanity/lib/fetchData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  CheckCircle2,
  XCircle,
  MapPin,
  Tag,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  Sliders,
} from "lucide-react";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const tours = await getTours();
  return tours.map((t) => ({ slug: t.slug }));
}

export default async function TourDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const tour = await getTourBySlug(resolvedParams.slug);

  if (!tour) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[500px] w-full overflow-hidden bg-[#262A67]">
        <Image
          src={tour.coverImage}
          alt={tour.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

        <div className="relative mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-12 sm:px-10 lg:px-16">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {tour.tag && (
              <span className="inline-flex items-center gap-1 rounded-full bg-[#EA2C2A] px-3.5 py-1 text-xs font-bold text-white shadow-md">
                <Tag size={12} />
                {tour.tag}
              </span>
            )}
            {tour.destinationName && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-md px-3.5 py-1 text-xs font-medium text-white border border-white/20">
                <MapPin size={13} className="text-[#EA2C2A]" />
                {tour.destinationName}
              </span>
            )}
            {tour.categoryName && (
              <span className="rounded-full bg-white/20 backdrop-blur-md px-3.5 py-1 text-xs font-medium text-white border border-white/20">
                {tour.categoryName}
              </span>
            )}
          </div>

          <h1
            className="text-4xl font-extrabold sm:text-6xl lg:text-7xl text-white max-w-4xl tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {tour.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-200">
            <div className="flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-md px-4 py-2 border border-white/20">
              <Calendar size={16} className="text-[#EA2C2A]" />
              <span>{tour.duration?.days} Days / {tour.duration?.nights} Nights</span>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-md px-4 py-2 border border-white/20">
              <ShieldCheck size={16} className="text-[#EA2C2A]" />
              <span>Guaranteed Departure</span>
            </div>

            {tour.customizable && (
              <div className="flex items-center gap-2 rounded-full bg-[#EA2C2A]/30 backdrop-blur-md px-4 py-2 border border-[#EA2C2A]/50 text-white font-medium">
                <Sliders size={16} />
                <span>Fully Customizable</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="flex-1 py-16 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column - Overview, Gallery, Itinerary, Inclusions */}
          <div className="lg:col-span-2 space-y-14">
            
            {/* Overview */}
            <div>
              <h2
                className="text-3xl font-bold text-[#262A67] mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Tour Overview
              </h2>
              <p className="text-base text-slate-600 leading-relaxed whitespace-pre-line">
                {tour.overview}
              </p>
            </div>

            {/* Photo Gallery */}
            {tour.gallery && tour.gallery.length > 0 && (
              <div>
                <h2
                  className="text-3xl font-bold text-[#262A67] mb-6"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Gallery Preview
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {tour.gallery.map((img, idx) => (
                    <div key={idx} className="relative h-48 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 group">
                      <Image
                        src={img}
                        alt={`${tour.title} photo ${idx + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Day-by-Day Itinerary */}
            {tour.itinerary && tour.itinerary.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2
                    className="text-3xl font-bold text-[#262A67]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Day-by-Day Itinerary
                  </h2>
                  <span className="text-xs font-bold text-[#262A67] bg-[#EEF2FF] px-3.5 py-1.5 rounded-full border border-[#C7D2FE]">
                    {tour.itinerary.length} Days Planned
                  </span>
                </div>

                <div className="space-y-6 relative before:absolute before:left-5 before:top-4 before:bottom-4 before:w-0.5 before:bg-[#C7D2FE]">
                  {tour.itinerary.map((day) => (
                    <div key={day.dayNumber} className="relative pl-12">
                      <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#262A67] text-white font-black text-sm shadow-md">
                        D{day.dayNumber}
                      </div>

                      <div className="rounded-3xl bg-slate-50 border border-slate-200/90 p-6">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <h3 className="text-xl font-bold text-[#262A67]">
                            Day {day.dayNumber}: {day.title}
                          </h3>
                          {day.meals && (
                            <span className="text-xs font-bold text-[#EA2C2A] bg-[#FEF2F2] px-3 py-1 rounded-full border border-[#EA2C2A]/20">
                              Meals: {day.meals}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {day.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-200">
              {/* Included */}
              <div className="rounded-3xl bg-[#EEF2FF]/60 border border-[#C7D2FE] p-7">
                <h3 className="text-lg font-bold text-[#262A67] flex items-center gap-2 mb-4">
                  <CheckCircle2 className="text-[#EA2C2A]" size={20} />
                  What's Included
                </h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  {tour.includedServices?.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#EA2C2A] font-bold">•</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Excluded */}
              <div className="rounded-3xl bg-rose-50/50 border border-rose-200/80 p-7">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-4">
                  <XCircle className="text-rose-600" size={20} />
                  What's Excluded
                </h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  {tour.excludedServices ? (
                    tour.excludedServices.map((exc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-rose-600 font-bold">•</span>
                        <span>{exc}</span>
                      </li>
                    ))
                  ) : (
                    <>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-600 font-bold">•</span>
                        <span>International Airfare</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-600 font-bold">•</span>
                        <span>Personal Travel Insurance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-600 font-bold">•</span>
                        <span>Personal Souvenirs & Alcoholic Drinks</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>

          </div>

          {/* Right Column - Price Card & Inquiry Form */}
          <div className="space-y-8">
            <div className="sticky top-28 rounded-3xl bg-slate-50 border border-slate-200 p-8 shadow-xl space-y-6">
              
              {/* Pricing */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Price Per Traveler</span>
                <div className="mt-1 flex items-baseline gap-3">
                  {tour.discountPrice ? (
                    <>
                      <span className="text-4xl font-black text-[#262A67]">${tour.discountPrice}</span>
                      <span className="text-lg text-slate-400 line-through">${tour.price}</span>
                    </>
                  ) : (
                    <span className="text-4xl font-black text-[#262A67]">${tour.price}</span>
                  )}
                  <span className="text-xs text-slate-500 font-medium">USD / person</span>
                </div>
              </div>

              {/* Customizable CTA Banner */}
              {tour.customizable && (
                <div className="rounded-2xl bg-[#FEF2F2] border border-[#EA2C2A]/30 p-4 text-center">
                  <p className="text-xs text-slate-800 font-medium">
                    Want to extend days or upgrade hotels?
                  </p>
                  <Link
                    href={`/customize?package=${tour.slug}`}
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-[#EA2C2A] hover:underline"
                  >
                    Customize this tour itinerary
                    <ArrowRight size={14} />
                  </Link>
                </div>
              )}

              {/* Quick Booking Inquiry Form */}
              <form action="/customize" className="space-y-4 pt-4 border-t border-slate-200">
                <h4 className="text-sm font-bold text-[#262A67] uppercase tracking-wider">Quick Inquiry</h4>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#EA2C2A] focus:outline-none shadow-xs"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Your Email Address"
                    className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#EA2C2A] focus:outline-none shadow-xs"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp Number"
                    className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#EA2C2A] focus:outline-none shadow-xs"
                  />
                </div>
                <div>
                  <input
                    type="date"
                    className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#EA2C2A] focus:outline-none shadow-xs"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#EA2C2A] py-3.5 text-sm font-bold text-white transition hover:bg-[#C82120] shadow-md"
                >
                  Request Trip Quote
                </button>
              </form>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-medium pt-2">
                <PhoneCall size={14} className="text-[#EA2C2A]" />
                <span>Questions? Call us at +1 (202) 555-0147</span>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
