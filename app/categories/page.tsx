import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getCategories } from "@/sanity/lib/fetchData";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Layers } from "lucide-react";
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
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header />

      {/* Hero Header */}
      <section className="relative py-20 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#EEF2FF]/40 border-b border-[#C7D2FE]/60">
        <div className="pointer-events-none absolute -top-40 right-1/3 w-[500px] h-[500px] bg-[#EA2C2A]/10 blur-[140px] rounded-full" />

        <div className="relative mx-auto max-w-[1600px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FEF2F2] px-4 py-1.5 text-xs font-semibold text-[#EA2C2A] border border-[#EA2C2A]/20 mb-4">
            <Layers size={14} />
            Travel Styles
          </div>
          <h1
            className="text-4xl font-extrabold sm:text-6xl text-[#262A67] tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Find Your Ideal <br />
            <span className={`${caveat.className} text-[#EA2C2A] font-normal text-5xl sm:text-7xl`}>
              Tour Category
            </span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed">
            Whether you seek tranquil honeymoon suites or exhilarating alpine trekking, find curated packages built around your style.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <main className="flex-1 py-16 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <article
              key={cat._id}
              className="group relative flex flex-col rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-[#262A67]/40 hover:shadow-xl"
            >
              {cat.image && (
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-85" />
                  
                  <div className="absolute bottom-4 left-4">
                    <h2
                      className="text-3xl font-extrabold text-white group-hover:text-[#EA2C2A] transition-colors"
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
                    className="text-3xl font-extrabold text-[#262A67] group-hover:text-[#EA2C2A] transition-colors mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    <Link href={`/categories/${cat.slug}`}>{cat.name}</Link>
                  </h2>
                )}

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {cat.description}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/categories/${cat.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#262A67] hover:text-[#EA2C2A] uppercase tracking-wider transition"
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
