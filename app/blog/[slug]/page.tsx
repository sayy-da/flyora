import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ArrowUpRight } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

interface ArticleSection {
  heading: string;
  body: string;
  quote?: string;
}

interface ArticleDetail {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  heroImage: string;
  sections: ArticleSection[];
}

const articlesMap: Record<string, ArticleDetail> = {
  "island-life-in-the-maldives-what-it-really-feels-like": {
    slug: "island-life-in-the-maldives-what-it-really-feels-like",
    title: "Island Life in the Maldives: What It Really Feels Like",
    category: "Honeymoon Travel",
    date: "Jun 10, 2026",
    readTime: "3 min read",
    heroImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1600&auto=format&fit=crop",
    sections: [
      {
        heading: "Introduction",
        body: "This destination offers more than just sights to explore — it creates an experience shaped by atmosphere, culture, and rhythm. Every moment feels intentional, inviting you to slow down and engage more deeply with your surroundings.",
      },
      {
        heading: "Why this experience feels different",
        body: "Unlike typical travel experiences, this journey is defined by its pace and depth. It's not about rushing between highlights, but about discovering meaning in the in-between moments.",
        quote: "“Travel becomes richer when you allow space for it to unfold naturally.”",
      },
      {
        heading: "Living inside the experience",
        body: "What makes this place unique is how life and culture blend seamlessly. Traditions, environments, and daily routines come together to create something immersive and authentic.",
      },
      {
        heading: "The rhythm of the place",
        body: "Each destination has its own flow — sometimes energetic, sometimes calm. This balance shapes how you experience every moment, making the journey feel both dynamic and grounded.",
      },
      {
        heading: "Experiencing beyond the obvious",
        body: "The most memorable parts are often unplanned. Observing local life, noticing small details, and simply being present adds depth to the experience.",
      },
      {
        heading: "Conclusion",
        body: "In the end, this journey is not just about where you go, but how you experience it. The more you slow down and engage, the more meaningful it becomes.",
      },
    ],
  },
  "lost-in-time-a-week-inside-the-medina-of-fez": {
    slug: "lost-in-time-a-week-inside-the-medina-of-fez",
    title: "Lost in Time: A Week Inside the Medina of Fez",
    category: "Destination Guide",
    date: "Jun 25, 2026",
    readTime: "3 min read",
    heroImage: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=1600&auto=format&fit=crop",
    sections: [
      {
        heading: "Introduction",
        body: "Wandering into the labyrinth of Fez el-Bali is an immediate departure from modern life. With thousands of stone-paved lanes devoid of vehicle traffic, the ancient medina invites you to step into centuries of living heritage.",
      },
      {
        heading: "Why this experience feels different",
        body: "Unlike standard guided tourist routes, exploring Fez is about sensory immersion. The rhythmic tap of coppersmiths, the aroma of cedar shavings, and the vibrant hues of naturally dyed textiles create an incomparable atmosphere.",
        quote: "“Fez does not reveal itself to those in a hurry. It belongs to the curious traveler who embraces getting lost.”",
      },
      {
        heading: "Living inside the experience",
        body: "Staying in a restored historic riad with hand-carved stucco and central courtyards offers a peaceful sanctuary amidst the bustling souks.",
      },
      {
        heading: "The rhythm of the place",
        body: "Morning calls to prayer echo across the hills as bakers slide trays of fresh khobz into communal wood-fired ovens, setting a timeless pace for the day.",
      },
      {
        heading: "Experiencing beyond the obvious",
        body: "Meeting local master ceramicists and leather artisans reveals generations of artisanal wisdom that have defined Morocco for over a millennium.",
      },
      {
        heading: "Conclusion",
        body: "Fez stays with you long after you leave — reminding you that travel is at its best when it connects us with living history.",
      },
    ],
  },
  "exploring-kyotos-hidden-temples-and-quiet-streets": {
    slug: "exploring-kyotos-hidden-temples-and-quiet-streets",
    title: "Exploring Kyoto's Hidden Temples and Quiet Streets",
    category: "Destination Guide",
    date: "Jun 20, 2026",
    readTime: "3 min read",
    heroImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1600&auto=format&fit=crop",
    sections: [
      {
        heading: "Introduction",
        body: "Beyond Kyoto's iconic landmarks lies a quieter, contemplative city. In serene sub-temples and residential alleys, Kyoto reveals its deepest harmony with nature and craftsmanship.",
      },
      {
        heading: "Why this experience feels different",
        body: "This journey focuses on stillness and intentionality. Early morning visits to moss gardens and zen rock landscapes allow you to experience Japanese aesthetics in their purest form.",
        quote: "“Kyoto teaches you that beauty resides in the subtle space between shadow and light.”",
      },
      {
        heading: "Living inside the experience",
        body: "Participating in a private tea ceremony with a third-generation tea master offers insight into how mindfulness shapes every gesture and seasonal detail.",
      },
      {
        heading: "The rhythm of the place",
        body: "The gentle rustle of bamboo groves in Arashiyama and the distant ringing of bronze temple bells create a calm rhythm that resets your perspective.",
      },
      {
        heading: "Experiencing beyond the obvious",
        body: "Exploring Higashiyama at dawn before the crowds arrive allows you to appreciate the intricate wood joinery of preserved machiya townhouses.",
      },
      {
        heading: "Conclusion",
        body: "Kyoto reminds travelers that the most profound journeys often happen in quiet moments of appreciation and stillness.",
      },
    ],
  },
  "a-sunset-journey-through-the-sahara-desert": {
    slug: "a-sunset-journey-through-the-sahara-desert",
    title: "A Sunset Journey Through the Sahara Desert",
    category: "Adventure Travel",
    date: "Jun 15, 2026",
    readTime: "3 min read",
    heroImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1600&auto=format&fit=crop",
    sections: [
      {
        heading: "Introduction",
        body: "Standing atop the sweeping orange dunes of Erg Chebbi as the sun dips below the horizon is a moment that redefines the scale of nature. The Sahara's silence is vast, humbling, and unforgettable.",
      },
      {
        heading: "Why this experience feels different",
        body: "Trekking into the desert via traditional camel caravan immerses you in the slow, deliberate pace of the nomadic desert life.",
        quote: "“In the desert, silence is not the absence of sound, but the presence of boundless peace.”",
      },
      {
        heading: "Living inside the experience",
        body: "Arriving at a luxury tented camp nestled between protected dunes combines authentic Berber hospitality with refined comfort under the stars.",
      },
      {
        heading: "The rhythm of the place",
        body: "The desert shifts with the light — vibrant gold in the afternoon, glowing rose at sunset, and an awe-inspiring canopy of stars by midnight.",
      },
      {
        heading: "Experiencing beyond the obvious",
        body: "Sitting around a warm cedar wood campfire listening to traditional Gnawa rhythms provides a heartfelt connection with desert culture.",
      },
      {
        heading: "Conclusion",
        body: "The Sahara is not merely a destination, but a transformative space where the grandeur of nature leaves an indelible impression.",
      },
    ],
  },
  "chasing-the-northern-lights-across-iceland": {
    slug: "chasing-the-northern-lights-across-iceland",
    title: "Chasing the Northern Lights Across Iceland",
    category: "Nature Travel",
    date: "Jul 18, 2026",
    readTime: "3 min read",
    heroImage: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=1600&auto=format&fit=crop",
    sections: [
      {
        heading: "Introduction",
        body: "Watching ribbons of emerald light dance across Arctic skies above glaciers and black volcanic beaches is one of the world's ultimate natural spectacles.",
      },
      {
        heading: "Why this experience feels different",
        body: "Guided by expert astronomical trackers, you venture away from coastal settlements into the pristine wilderness where aurora activity peaks.",
        quote: "“Nature’s greatest light show reminds us of the wondrous cosmic world we are part of.”",
      },
      {
        heading: "Living inside the experience",
        body: "Rejuvenating in geothermal mineral pools while observing the night sky creates a perfect balance between adventure and relaxation.",
      },
      {
        heading: "The rhythm of the place",
        body: "Iceland's weather creates dynamic contrasts — roaring waterfalls by day, quiet starlit skies by night.",
      },
      {
        heading: "Experiencing beyond the obvious",
        body: "Exploring ice caves sculpted by subglacial rivers offers intimate access to nature's ongoing geological artistry.",
      },
      {
        heading: "Conclusion",
        body: "Iceland's raw elemental beauty inspires a profound reverence for our planet's wild landscapes.",
      },
    ],
  },
};

const moreArticlesList = [
  {
    slug: "lost-in-time-a-week-inside-the-medina-of-fez",
    title: "Lost in Time: A Week Inside the Medina of Fez",
    category: "Destination Guide",
    date: "Jun 25, 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "exploring-kyotos-hidden-temples-and-quiet-streets",
    title: "Exploring Kyoto's Hidden Temples and Quiet Streets",
    category: "Destination Guide",
    date: "Jun 20, 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "a-sunset-journey-through-the-sahara-desert",
    title: "A Sunset Journey Through the Sahara Desert",
    category: "Adventure Travel",
    date: "Jun 15, 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000&auto=format&fit=crop",
  },
];

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articlesMap[slug] || articlesMap["island-life-in-the-maldives-what-it-really-feels-like"];

  if (!article) {
    notFound();
  }

  // Filter out the current article from the related list
  const relatedArticles = moreArticlesList.filter((a) => a.slug !== article.slug).slice(0, 3);
  if (relatedArticles.length < 3) {
    relatedArticles.push(
      moreArticlesList.find((a) => a.slug === article.slug) || moreArticlesList[0]
    );
  }

  return (
    <div className={`${playfair.variable} min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#EA2C2A] selection:text-white`}>
      <Header />

      <main className="flex-1 pb-16 sm:pb-24">
        {/* Top Header Section */}
        <div className="mx-auto max-w-4xl px-6 sm:px-10 pt-12 sm:pt-16 text-center">
          
          {/* Metadata pill row: "3 min read • [Category] • Date" */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-slate-500 mb-6">
            <span>{article.readTime}</span>
            <span>•</span>
            <span className="rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold text-slate-800 border border-slate-200">
              {article.category}
            </span>
            <span>•</span>
            <span>{article.date}</span>
          </div>

          {/* Main Title */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0F172A] tracking-tight leading-[1.14] max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {article.title}
          </h1>
        </div>

        {/* Large Hero Banner Image */}
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10 mt-10 sm:mt-14 mb-14 sm:mb-20">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[28px] sm:rounded-[36px] shadow-xl bg-slate-100">
            <Image
              src={article.heroImage}
              alt={article.title}
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Structured Article Content */}
        <div className="mx-auto max-w-3xl px-6 sm:px-10 space-y-10">
          {article.sections.map((section, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
                {section.heading}
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {section.body}
              </p>
              {section.quote && (
                <p className="pt-2 text-base sm:text-lg italic font-medium text-slate-800">
                  {section.quote}
                </p>
              )}
            </section>
          ))}
        </div>

        {/* Explore More Stories Section */}
        <section className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14 pt-24 sm:pt-32">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <div className="mb-4 flex w-fit items-center gap-2 rounded-full bg-[#FEF2F2] px-5 py-1.5 text-xs font-semibold text-[#262B65] border border-[#EC2C27]/20 shadow-xs">
                <img src="/images/flowericon.png" alt="" width={17} height={17} />
                More Articles
                <img src="/images/flowericon.png" alt="" width={17} height={17} />
              </div>

              <h2
                className="text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Explore More <span className="italic font-medium text-[#0F172A]">Stories</span>
              </h2>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-3 rounded-full bg-[#0F172A] px-6 py-3 text-xs sm:text-sm font-semibold text-white transition hover:bg-[#EA2C2A] shadow-md w-fit"
            >
              <span>View All Articles</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                <ArrowUpRight size={13} />
              </span>
            </Link>
          </div>

          {/* 3 Related Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((card, idx) => (
              <Link
                key={idx}
                href={`/blog/${card.slug}`}
                className="group flex flex-col rounded-[28px] overflow-hidden bg-white border border-slate-200/90 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#262B65] shadow-xs backdrop-blur-md">
                      {card.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <h3
                    className="text-xl font-bold text-[#0F172A] tracking-tight mb-4 transition-colors group-hover:text-[#EA2C2A]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {card.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-3">
                    <span>{card.date}</span>
                    <span>•</span>
                    <span>{card.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
