import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getCategories, Category } from "@/sanity/lib/fetchData";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowUpRight, Layers } from "lucide-react";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Tour Categories | Flyora Travels",
  description: "Browse tour packages by travel style: Cultural, Honeymoon, Nature & Wildlife, Luxury, and Adventure.",
};

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col font-sans">
      <Header />

      {/* Hero Header */}
      <section className="relative py-20 px-6 sm:px-10 lg:px-16 overflow-hidden bg-neutral-900 border-b border-neutral-800">
        <div className="pointer-events-none absolute -top-40 right-1/3 w-[500px] h-[500px] bg-amber-500/10 blur-[140px] rounded-full" />

        <div className="relative mx-auto max-w-[1600px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-amber-300 border border-amber-400/20 mb-4">
            <Layers size={14} />
            Travel Styles
          </div>
          <h1
            className="text-4xl font-extrabold sm:text-6xl text-white tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Find Your Ideal <br />
            <span className={`${caveat.className} text-amber-300 font-normal text-5xl sm:text-7xl`}>
              Tour Category
            </span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-neutral-400 leading-relaxed">
            Whether you seek tranquil honeymoon suites or exhilarating alpine trekking, find curated packages built around your style.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <main className="flex-1 py-16 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <article
              key={cat._id}
              className="group relative flex flex-col rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              {cat.image && (
                <div className="relative h-64 w-full overflow-hidden bg-neutral-800">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-85" />
                  
                  <div className="absolute bottom-4 left-4">
                    <h2
                      className="text-3xl font-extrabold text-white group-hover:text-amber-300 transition-colors"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      <Link href={`/categories/${cat.slug}`}>{cat.name}</Link>
                    </h2>
                  </div>
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                {!cat.image && (
                  <h2
                    className="text-3xl font-extrabold text-white group-hover:text-amber-300 transition-colors mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    <Link href={`/categories/${cat.slug}`}>{cat.name}</Link>
                  </h2>
                )}

                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                  {cat.description}
                </p>

                <div className="mt-auto pt-4 border-t border-neutral-800 flex items-center justify-between">
                  <Link
                    href={`/categories/${cat.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 hover:text-amber-200 uppercase tracking-wider"
                  >
                    <span>View Category Tours</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
