import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhyChooseUs from "@/components/home/whyChooseUs";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowUpRight } from "lucide-react";
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
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header />

      {/* Hero */}
      <section className="relative py-24 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#EEF2FF]/40 border-b border-[#C7D2FE]/60">
        <div className="pointer-events-none absolute -top-40 right-1/4 w-[500px] h-[500px] bg-[#EA2C2A]/10 blur-[140px] rounded-full" />

        <div className="relative mx-auto max-w-[1600px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FEF2F2] px-4 py-1.5 text-xs font-semibold text-[#EA2C2A] border border-[#EA2C2A]/20 mb-4">
            <Sparkles size={14} className="text-[#EA2C2A]" fill="currentColor" />
            Crafting Journeys Since 2009
          </div>
          <h1
            className="text-4xl font-extrabold sm:text-6xl lg:text-7xl text-[#262A67] tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Travel Beyond <br />
            <span className={`${caveat.className} text-[#EA2C2A] font-normal text-5xl sm:text-7xl`}>
              The Ordinary
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed">
            Flyora Travels was born from a simple passion: to replace standard cookie-cutter tours with deeply immersive, luxury travel experiences tailored around every individual traveler.
          </p>
        </div>
      </section>

      {/* Story & Mission Section */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EA2C2A]">Our Story</span>
            <h2
              className="text-3xl sm:text-5xl font-bold text-[#262A67] leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Fifteen Years of Uncompromising Travel Excellence
            </h2>
            <p className="text-slate-700 text-base leading-relaxed">
              Founded in San Francisco in 2009, Flyora has grown from a boutique travel desk into an internationally acclaimed travel management company with local concierges across Tokyo, Athens, Bali, and Zurich.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              We believe true luxury isn’t just plush hotel beds — it’s effortless arrangements, private access to sacred heritage sites, and authentic connections with local artisans and guides.
            </p>
            
            <div className="pt-4 flex items-center gap-6">
              <Link
                href="/customize"
                className="inline-flex items-center gap-2 rounded-full bg-[#EA2C2A] px-6 py-3 text-sm font-bold text-white hover:bg-[#C82120] transition shadow-md"
              >
                <span>Plan Your Custom Journey</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div className="relative h-[480px] w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
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
      <section className="py-20 px-6 sm:px-10 lg:px-16 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-[1600px]">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EA2C2A]">Expert Leadership</span>
            <h2
              className="text-4xl font-bold text-[#262A67] mt-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Meet Our Destination Designers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden p-6 text-center space-y-4 shadow-xs">
                <div className="relative h-64 w-full rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#262A67]">{member.name}</h3>
                  <p className="text-xs text-[#EA2C2A] font-bold mt-1">{member.role}</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
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
