import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { Compass, ArrowRight, Sparkles } from "lucide-react";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "404 - Destination Not Found | Flyora Travels",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col font-sans">
      <Header />

      <main className="flex-1 flex items-center justify-center py-24 px-6 sm:px-10">
        <div className="relative mx-auto max-w-xl text-center space-y-6">
          <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full" />

          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
            <Compass size={40} />
          </div>

          <h1
            className="text-6xl sm:text-8xl font-black text-amber-300"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            404
          </h1>

          <h2
            className="text-2xl sm:text-3xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            You've Wandered Off The Map
          </h2>

          <p className="text-neutral-400 text-sm max-w-md mx-auto leading-relaxed">
            The page or destination you are looking for has moved, been renamed, or doesn't exist. Let's get you back on track.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-neutral-950 hover:bg-amber-300 transition"
            >
              Return to Homepage
            </Link>
            <Link
              href="/tours"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 border border-neutral-800 px-6 py-3 text-sm font-medium text-neutral-300 hover:text-white hover:border-amber-400/50 transition"
            >
              <span>Explore Tour Packages</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
