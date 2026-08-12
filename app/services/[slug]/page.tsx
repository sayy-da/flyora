import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getServiceBySlug, getServices } from "@/sanity/lib/fetchData";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, Sparkles, Send } from "lucide-react";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const service = await getServiceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header />

      {/* Hero */}
      <section className="relative py-20 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#EEF2FF]/40 border-b border-[#C7D2FE]/60">
        <div className="pointer-events-none absolute -top-40 right-1/4 w-[500px] h-[500px] bg-[#EA2C2A]/10 blur-[140px] rounded-full" />

        <div className="relative mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FEF2F2] px-4 py-1.5 text-xs font-semibold text-[#EA2C2A] border border-[#EA2C2A]/20 mb-4">
              <Sparkles size={14} className="text-[#EA2C2A]" fill="currentColor" />
              Specialized Service
            </div>
            <h1
              className="text-4xl font-extrabold sm:text-6xl text-[#262A67] tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {service.title}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              {service.shortDescription}
            </p>
          </div>

          {service.serviceImage && (
            <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
              <Image
                src={service.serviceImage}
                alt={service.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-16 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            
            {/* Key Features Breakdown */}
            <div>
              <h2
                className="text-3xl font-bold text-[#262A67] mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Key Service Features & Highlights
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feat, i) => (
                  <div key={i} className="rounded-2xl bg-slate-50 border border-slate-200 p-5 flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#EA2C2A] shrink-0 mt-0.5" />
                    <span className="text-sm font-bold text-[#262A67] leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How it Works */}
            <div>
              <h2
                className="text-3xl font-bold text-[#262A67] mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                How It Works
              </h2>

              <div className="space-y-4">
                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#262A67] text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#262A67] mb-1">Submit Your Service Request</h3>
                    <p className="text-sm text-slate-600">Fill out our quick inquiry form with your dates, travel requirements, or document details.</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#262A67] text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#262A67] mb-1">Dedicated Concierge Consultation</h3>
                    <p className="text-sm text-slate-600">Our senior travel manager reviews your requirements and provides clear options & pricing within 2 hours.</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#262A67] text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#262A67] mb-1">Seamless Execution & 24/7 Support</h3>
                    <p className="text-sm text-slate-600">We audit forms, secure flight/hotel slots, and keep you updated every step of the journey.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Inquiry Form */}
          <div>
            <div className="sticky top-28 rounded-3xl bg-slate-50 border border-slate-200 p-8 shadow-xl space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[#262A67]" style={{ fontFamily: "var(--font-playfair)" }}>
                  Book This Service
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Connect directly with a specialist for {service.title}.
                </p>
              </div>

              <form action="/customize" className="space-y-4">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#EA2C2A] focus:outline-none shadow-xs"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
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
                  <textarea
                    rows={3}
                    placeholder="Describe your request or requirements..."
                    className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#EA2C2A] focus:outline-none resize-none shadow-xs"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#EA2C2A] py-3.5 text-sm font-bold text-white transition hover:bg-[#C82120] shadow-md"
                >
                  {service.ctaText || "Submit Service Request"}
                </button>
              </form>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
