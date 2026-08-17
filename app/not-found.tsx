import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { Compass, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "404 - Destination Not Found | Flyora Travels",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header />

      <main className="flex-1 flex items-center justify-center py-24 px-6 sm:px-10 bg-white">
        <div className="relative mx-auto max-w-xl text-center space-y-6">
          <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#EEF2FF] blur-[130px] rounded-full" />

          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#FEF2F2] text-[#EA2C2A] border border-[#EA2C2A]/20 shadow-xs">
            <Compass size={40} />
          </div>

          <h1
            className="text-6xl sm:text-8xl font-black text-[#262A67]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            404
          </h1>

          <h2
            className="text-2xl sm:text-3xl font-bold text-[#262A67]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            You've Wandered Off The Map
          </h2>

          <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
            The page or destination you are looking for has moved, been renamed, or doesn't exist. Let's get you back on track.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="btn-hover-slide inline-flex items-center gap-3 rounded-full bg-[#262A67] py-2.5 pl-6 pr-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#EA2C2A] hover:shadow-lg"
            >
              <span className="btn-text-wrapper">
                <span className="btn-text">Return to Homepage</span>
                <span className="btn-text-clone">Return to Homepage</span>
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                <ArrowUpRight size={15} className="btn-arrow" />
              </span>
            </Link>
            <Link
              href="/tours"
              className="btn-hover-slide inline-flex items-center gap-3 rounded-full bg-[#262A67] py-2.5 pl-6 pr-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#EA2C2A] hover:shadow-lg"
            >
              <span className="btn-text-wrapper">
                <span className="btn-text">Explore Tour Packages</span>
                <span className="btn-text-clone">Explore Tour Packages</span>
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                <ArrowUpRight size={15} className="btn-arrow" />
              </span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
