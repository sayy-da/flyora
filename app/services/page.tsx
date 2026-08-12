import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getServices, TravelService } from "@/sanity/lib/fetchData";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Plane,
  FileCheck,
  Hotel,
  Compass,
  ShieldCheck,
  Globe,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Travel Agency Services | Flyora Travels",
  description: "Comprehensive travel agency services including Express Visa Processing, Flight Charter Deals, Luxury Hotel Bookings, and Custom Itinerary Planning.",
};

const iconMap: Record<string, any> = {
  Plane: Plane,
  FileCheck: FileCheck,
  Hotel: Hotel,
  Compass: Compass,
  ShieldCheck: ShieldCheck,
  Globe: Globe,
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col font-sans">
      <Header />

      {/* Hero Header */}
      <section className="relative py-20 px-6 sm:px-10 lg:px-16 overflow-hidden bg-neutral-900 border-b border-neutral-800">
        <div className="pointer-events-none absolute -top-40 right-1/4 w-[500px] h-[500px] bg-amber-500/10 blur-[140px] rounded-full" />
        
        <div className="relative mx-auto max-w-[1600px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-amber-300 border border-amber-400/20 mb-4">
            <Sparkles size={14} fill="currentColor" />
            Full-Spectrum Travel Concierge
          </div>
          <h1
            className="text-4xl font-extrabold sm:text-6xl text-white tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Bespoke Travel <br />
            <span className={`${caveat.className} text-amber-300 font-normal text-5xl sm:text-7xl`}>
              Services & Assistance
            </span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-neutral-400 leading-relaxed">
            From emergency visa slots to private aircraft charters and luxury resort suites, our expert concierges handle every aspect of your travel.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <main className="flex-1 py-16 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.iconName] || Globe;

            return (
              <article
                key={service._id}
                className="group relative flex flex-col rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/10"
              >
                {/* Image Cover */}
                {service.serviceImage && (
                  <div className="relative h-56 w-full overflow-hidden bg-neutral-800">
                    <Image
                      src={service.serviceImage}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-90" />
                    
                    <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-neutral-950 font-bold shadow-lg">
                      <IconComponent size={24} strokeWidth={2} />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-1 flex-col p-7">
                  {!service.serviceImage && (
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
                      <IconComponent size={24} strokeWidth={2} />
                    </div>
                  )}

                  <h2
                    className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    <Link href={`/services/${service.slug}`}>{service.title}</Link>
                  </h2>

                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Features List */}
                  {service.features && service.features.length > 0 && (
                    <div className="mt-auto space-y-2 mb-6 pt-4 border-t border-neutral-800">
                      {service.features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                          <CheckCircle2 size={13} className="text-amber-400 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 hover:text-amber-200 uppercase tracking-wider"
                    >
                      <span>{service.ctaText || "Learn More"}</span>
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
