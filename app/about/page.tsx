import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhyChooseUs from "@/components/home/whyChooseUs";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Award, Globe, Heart, ShieldCheck, ArrowUpRight } from "lucide-react";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "About Us | Flyora Travels",
  description: "Learn about Flyora Travels — crafting extraordinary luxury travel and custom journeys since 2009.",
};

const team = [
  {
    name: "Julian Sterling",
    role: "Founder & Chief Expedition Officer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    bio: "Over 18 years spent curating private expeditions across 70+ countries.",
  },
  {
    name: "Sophia Rossi",
    role: "Head of Destination Design",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    bio: "Passionate art historian & sommelier curating European & Asian cultural odysseys.",
  },
  {
    name: "Takahiro Sato",
    role: "Senior Japan & East Asia Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    bio: "Kyoto native bringing unprecedented access to private tea masters and hidden temples.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col font-sans">
      <Header />

      {/* Hero */}
      <section className="relative py-24 px-6 sm:px-10 lg:px-16 overflow-hidden bg-neutral-900 border-b border-neutral-800">
        <div className="pointer-events-none absolute -top-40 right-1/4 w-[500px] h-[500px] bg-amber-500/10 blur-[140px] rounded-full" />

        <div className="relative mx-auto max-w-[1600px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-amber-300 border border-amber-400/20 mb-4">
            <Sparkles size={14} fill="currentColor" />
            Crafting Journeys Since 2009
          </div>
          <h1
            className="text-4xl font-extrabold sm:text-6xl lg:text-7xl text-white tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Travel Beyond <br />
            <span className={`${caveat.className} text-amber-300 font-normal text-5xl sm:text-7xl`}>
              The Ordinary
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-neutral-300 leading-relaxed">
            Flyora Travels was born from a simple passion: to replace standard cookie-cutter tours with deeply immersive, luxury travel experiences tailored around every individual traveler.
          </p>
        </div>
      </section>

      {/* Story & Mission Section */}
      <section className="py-20 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Our Story</span>
            <h2
              className="text-3xl sm:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Fifteen Years of Uncompromising Travel Excellence
            </h2>
            <p className="text-neutral-300 text-base leading-relaxed">
              Founded in San Francisco in 2009, Flyora has grown from a boutique travel desk into an internationally acclaimed travel management company with local concierges across Tokyo, Athens, Bali, and Zurich.
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              We believe true luxury isn’t just plush hotel beds — it’s effortless arrangements, private access to sacred heritage sites, and authentic connections with local artisans and guides.
            </p>
            
            <div className="pt-4 flex items-center gap-6">
              <Link
                href="/customize"
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-neutral-950 hover:bg-amber-300 transition"
              >
                <span>Plan Your Custom Journey</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div className="relative h-[480px] w-full rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80"
              alt="Flyora Travelers"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Leadership Team */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 bg-neutral-950 border-t border-neutral-800">
        <div className="mx-auto max-w-[1600px]">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Expert Leadership</span>
            <h2
              className="text-4xl font-bold text-white mt-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Meet Our Destination Designers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden p-6 text-center space-y-4">
                <div className="relative h-64 w-full rounded-2xl overflow-hidden bg-neutral-800">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-xs text-amber-300 font-medium mt-1">{member.role}</p>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
