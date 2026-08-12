import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getTestimonials, Testimonial } from "@/sanity/lib/fetchData";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Star, Quote, Heart, ArrowUpRight } from "lucide-react";
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
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col font-sans">
      <Header />

      {/* Hero Header */}
      <section className="relative py-20 px-6 sm:px-10 lg:px-16 overflow-hidden bg-neutral-900 border-b border-neutral-800">
        <div className="pointer-events-none absolute -top-40 left-1/3 w-[500px] h-[500px] bg-amber-500/10 blur-[140px] rounded-full" />

        <div className="relative mx-auto max-w-[1600px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-amber-300 border border-amber-400/20 mb-4">
            <Heart size={14} className="text-amber-400" fill="currentColor" />
            Verified Traveler Experiences
          </div>
          <h1
            className="text-4xl font-extrabold sm:text-6xl text-white tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Stories From Our <br />
            <span className={`${caveat.className} text-amber-300 font-normal text-5xl sm:text-7xl`}>
              Global Travelers
            </span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-neutral-400 leading-relaxed">
            Read authentic reviews from guests who explored Japan, Greece, Bali, and Switzerland with Flyora Travels.
          </p>

          {/* Overall Rating Banner */}
          <div className="mt-8 inline-flex items-center gap-4 rounded-full bg-neutral-950 border border-neutral-800 px-6 py-3 shadow-lg">
            <div className="flex items-center gap-1 text-amber-300">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <div className="text-xs text-neutral-300">
              <span className="font-bold text-white text-sm mr-1">4.95 / 5.0</span>
              from over 1,200+ verified customer reviews
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <main className="flex-1 py-16 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1600px] space-y-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <article
                key={item._id}
                className="relative flex flex-col justify-between rounded-3xl bg-neutral-900 border border-neutral-800 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/10"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-300">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <Star key={i} size={15} fill="currentColor" />
                      ))}
                    </div>
                    <Quote size={28} className="text-amber-400/20" />
                  </div>

                  {item.tourTitle && (
                    <span className="inline-block text-xs font-semibold text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                      {item.tourTitle}
                    </span>
                  )}

                  <p className="text-sm text-neutral-300 leading-relaxed italic">
                    "{item.reviewText}"
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center gap-4">
                  {item.clientAvatar ? (
                    <div className="relative h-12 w-12 rounded-full overflow-hidden border border-amber-400/30 shrink-0">
                      <Image
                        src={item.clientAvatar}
                        alt={item.clientName}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/20 text-amber-300 font-bold text-lg shrink-0">
                      {item.clientName[0]}
                    </div>
                  )}

                  <div>
                    <h3 className="text-base font-bold text-white">
                      {item.clientName}
                    </h3>
                    {item.location && (
                      <p className="text-xs text-neutral-400">
                        {item.location}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Share Your Story Box */}
          <div className="rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-900 border border-neutral-800 p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
              Traveled With Flyora Recently?
            </h2>
            <p className="text-sm text-neutral-400 max-w-md mx-auto">
              Share your travel story or photo with our community and get a $100 voucher towards your next bespoke journey.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-neutral-950 hover:bg-amber-300 transition"
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
