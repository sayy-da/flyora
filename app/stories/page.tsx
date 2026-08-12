import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getTestimonials } from "@/sanity/lib/fetchData";
import Image from "next/image";
import Link from "next/link";
import { Star, Quote, Heart, ArrowUpRight } from "lucide-react";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Travel Stories & Testimonials | Flyora Travels",
  description: "Real stories and verified reviews from travelers who experienced unforgettable journeys with Flyora Travels.",
};

export default async function StoriesPage() {
  const testimonials = await getTestimonials();

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header />

      {/* Hero Header */}
      <section className="relative py-20 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#EEF2FF]/40 border-b border-[#C7D2FE]/60">
        <div className="pointer-events-none absolute -top-40 left-1/3 w-[500px] h-[500px] bg-[#EA2C2A]/10 blur-[140px] rounded-full" />

        <div className="relative mx-auto max-w-[1600px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FEF2F2] px-4 py-1.5 text-xs font-semibold text-[#EA2C2A] border border-[#EA2C2A]/20 mb-4">
            <Heart size={14} className="text-[#EA2C2A]" fill="currentColor" />
            Verified Traveler Experiences
          </div>
          <h1
            className="text-4xl font-extrabold sm:text-6xl text-[#262A67] tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Stories From Our <br />
            <span className={`${caveat.className} text-[#EA2C2A] font-normal text-5xl sm:text-7xl`}>
              Global Travelers
            </span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed">
            Read authentic reviews from guests who explored Japan, Greece, Bali, and Switzerland with Flyora Travels.
          </p>

          {/* Overall Rating Banner */}
          <div className="mt-8 inline-flex items-center gap-4 rounded-full bg-white border border-slate-200 px-6 py-3 shadow-sm">
            <div className="flex items-center gap-1 text-[#EA2C2A]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <div className="text-xs text-slate-600 font-medium">
              <span className="font-bold text-[#262A67] text-sm mr-1">4.95 / 5.0</span>
              from over 1,200+ verified customer reviews
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <main className="flex-1 py-16 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="mx-auto max-w-[1600px] space-y-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <article
                key={item._id}
                className="relative flex flex-col justify-between rounded-3xl bg-slate-50 border border-slate-200/90 p-8 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-[#262A67]/40 hover:shadow-xl hover:bg-white"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#EA2C2A]">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <Star key={i} size={15} fill="currentColor" />
                      ))}
                    </div>
                    <Quote size={28} className="text-[#EA2C2A]/30" />
                  </div>

                  {item.tourTitle && (
                    <span className="inline-block text-xs font-bold text-[#262A67] bg-[#EEF2FF] px-3 py-1 rounded-full border border-[#C7D2FE]">
                      {item.tourTitle}
                    </span>
                  )}

                  <p className="text-sm text-slate-700 leading-relaxed italic">
                    "{item.reviewText}"
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-4">
                  {item.clientAvatar ? (
                    <div className="relative h-12 w-12 rounded-full overflow-hidden border border-[#EA2C2A]/30 shrink-0">
                      <Image
                        src={item.clientAvatar}
                        alt={item.clientName}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF2FF] text-[#262A67] font-bold text-lg shrink-0">
                      {item.clientName[0]}
                    </div>
                  )}

                  <div>
                    <h3 className="text-base font-bold text-[#262A67]">
                      {item.clientName}
                    </h3>
                    {item.location && (
                      <p className="text-xs text-slate-500 font-medium">
                        {item.location}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Share Your Story Box */}
          <div className="rounded-3xl bg-[#FEF2F2] border border-[#EA2C2A]/30 p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4 shadow-sm">
            <h2 className="text-3xl font-bold text-[#262A67]" style={{ fontFamily: "var(--font-playfair)" }}>
              Traveled With Flyora Recently?
            </h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Share your travel story or photo with our community and get a $100 voucher towards your next bespoke journey.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#EA2C2A] px-6 py-3 text-sm font-bold text-white hover:bg-[#C82120] transition shadow-md"
            >
              <span>Submit Your Review</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
