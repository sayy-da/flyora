"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Lock,
  Star,
  Plus,
  X,
  ArrowUpRight,
  Headphones,
} from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const interestCategories = [
  "Cities",
  "Nature",
  "Adventure",
  "Honeymoon",
  "Wildlife",
];

const faqs = [
  {
    id: 1,
    question: "1. How does the planning process work?",
    answer:
      "Once you share your travel ideas, our team reviews your preferences and creates a tailored itinerary. We refine it together until every detail fits your expectations before finalizing the booking.",
  },
  {
    id: 2,
    question: "2. How long does it take to receive a travel plan?",
    answer:
      "Within 24 to 48 hours, your personal concierge delivers a comprehensive, customized draft itinerary tailored to your schedule, travel style, and budget.",
  },
  {
    id: 3,
    question: "3. Can I customize my itinerary?",
    answer:
      "Absolutely. Every Flyora journey is 100% bespoke. You can adjust destinations, boutique hotels, pace, and private excursions until it matches your dream vision.",
  },
  {
    id: 4,
    question: "4. Do you handle bookings and reservations?",
    answer:
      "Yes, we handle complete end-to-end travel management including luxury accommodations, domestic logistics, private guides, entrance passes, and VIP dining reservations.",
  },
  {
    id: 5,
    question: "5. What if I need changes after booking?",
    answer:
      "Our 24/7 dedicated concierge is always accessible via WhatsApp and direct call to coordinate adjustments, date shifts, or on-the-ground support smoothly.",
  },
];

const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [selectedInterests, setSelectedInterests] = useState<string[]>(["Nature"]);
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const toggleInterest = (category: string) => {
    setSelectedInterests((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <div className={`${playfair.variable} min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#EA2C2A] selection:text-white`}>
      <Header />

      {/* Hero Header Section */}
      <section className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 px-6 sm:px-10 lg:px-16 text-center overflow-hidden bg-gradient-to-b from-white via-[#FEF2F2]/60 to-white">
        <div className="relative mx-auto max-w-4xl">
          {/* Badge */}
          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full bg-[#FEF2F2] px-5 py-2 text-xs font-semibold text-[#262B65] border border-[#EA2C2A]/20 shadow-xs">
            <img src="/images/flowericon.png" alt="" width={17} height={17} />
            Contact us
            <img src="/images/flowericon.png" alt="" width={17} height={17} />
          </div>

          {/* Heading */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#262B65] tracking-tight leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Let&apos;s Plan Your{" "}
            <span className="italic font-medium text-[#EA2C2A]">Next</span>
            <br />
            Journey
          </h1>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Tell us where you want to go, how you like to travel, and what matters most.
            We&apos;ll craft a journey that feels personal, seamless, and worth remembering.
          </p>
        </div>
      </section>

      {/* Main Luxury Contact Card Section */}
      <section className="px-4 sm:px-8 lg:px-14 pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="overflow-hidden rounded-[32px] sm:rounded-[40px] bg-[#121629] text-white shadow-2xl border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10 lg:p-12 items-stretch">
              
              {/* Left Column: Traveler Image & Testimonial Quote */}
              <div className="lg:col-span-5 relative flex flex-col justify-end min-h-[420px] sm:min-h-[520px] lg:min-h-full rounded-[28px] overflow-hidden p-6 sm:p-8 bg-slate-900 border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=1200&auto=format&fit=crop"
                  alt="Happy travelers enjoying journey"
                  fill
                  priority
                  className="object-cover object-center"
                />

                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Quote Card Overlay */}
                <div className="relative z-10">
                  <p className="text-lg sm:text-xl font-medium text-white/95 leading-snug tracking-tight mb-6">
                    &ldquo;Every great journey starts with a simple idea and the right guidance to bring it to life.&rdquo;
                  </p>

                  <div className="flex items-center gap-3.5 pt-2">
                    <div className="relative h-11 w-11 rounded-full overflow-hidden border-2 border-white/80 shadow-md">
                      <Image
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                        alt="Ethan Parker"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Ethan Parker</div>
                      <div className="text-xs text-slate-300 font-medium">Head of Concierge, Flyora</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Form */}
              <div className="lg:col-span-7 flex flex-col justify-center py-2 lg:py-4">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-16 px-4 space-y-6">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#EA2C2A] text-white shadow-lg">
                      <CheckCircle2 size={44} />
                    </div>
                    <h3
                      className="text-3xl sm:text-4xl font-bold text-white"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      Inquiry Received!
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base max-w-md leading-relaxed">
                      Thank you for reaching out. A senior concierge will review your travel preferences and contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="rounded-full bg-white/10 px-7 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-white/20 transition border border-white/20"
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">
                          Full Name*
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Enter your full name"
                          className="w-full rounded-2xl bg-white/[0.06] border border-white/15 px-4 sm:px-5 py-3.5 text-sm text-white placeholder:text-slate-500 focus:border-[#EA2C2A] focus:bg-white/[0.09] focus:outline-none transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">
                          Email Address*
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="hello@yourbrand.com"
                          className="w-full rounded-2xl bg-white/[0.06] border border-white/15 px-4 sm:px-5 py-3.5 text-sm text-white placeholder:text-slate-500 focus:border-[#EA2C2A] focus:bg-white/[0.09] focus:outline-none transition"
                        />
                      </div>
                    </div>

                    {/* Phone Number & Subject Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Your contact number"
                          className="w-full rounded-2xl bg-white/[0.06] border border-white/15 px-4 sm:px-5 py-3.5 text-sm text-white placeholder:text-slate-500 focus:border-[#EA2C2A] focus:bg-white/[0.09] focus:outline-none transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="How can we help you?"
                          className="w-full rounded-2xl bg-white/[0.06] border border-white/15 px-4 sm:px-5 py-3.5 text-sm text-white placeholder:text-slate-500 focus:border-[#EA2C2A] focus:bg-white/[0.09] focus:outline-none transition"
                        />
                      </div>
                    </div>

                    {/* Message Area */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your message here..."
                        className="w-full rounded-2xl bg-white/[0.06] border border-white/15 px-4 sm:px-5 py-3.5 text-sm text-white placeholder:text-slate-500 focus:border-[#EA2C2A] focus:bg-white/[0.09] focus:outline-none transition resize-none"
                      />
                    </div>

                    {/* I'm Interested In Category Tags */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-3">
                        I&apos;m Interested In
                      </label>
                      <div className="flex flex-wrap gap-2.5">
                        {interestCategories.map((category) => {
                          const isSelected = selectedInterests.includes(category);
                          return (
                            <button
                              type="button"
                              key={category}
                              onClick={() => toggleInterest(category)}
                              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                                isSelected
                                  ? "bg-white text-[#121629] shadow-sm font-bold"
                                  : "bg-white/[0.08] text-slate-300 hover:bg-white/[0.14] border border-white/10"
                              }`}
                            >
                              <span
                                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                                  isSelected ? "bg-[#EA2C2A]" : "bg-white/30"
                                }`}
                              />
                              {category}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Submit Button & Security Note */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white text-[#121629] font-bold text-sm px-8 py-3.5 transition-all duration-300 hover:bg-[#EA2C2A] hover:text-white hover:scale-[1.02] active:scale-[0.98] shadow-lg disabled:opacity-70"
                      >
                        {submitting ? (
                          <span>Sending Message...</span>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send size={15} />
                          </>
                        )}
                      </button>

                      <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                        <Lock size={13} className="text-amber-400" />
                        <span>Your Information is safe and never shared.</span>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Shaped Floating Contact Badges Section */}
      <section className="relative py-12 sm:py-16 px-6 sm:px-10 lg:px-16 overflow-hidden bg-gradient-to-b from-white via-[#EEF2FF]/50 to-white">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-items-center">
            
            {/* Badge 1: Email (Sunburst Shape) */}
            <div className="relative flex flex-col items-center justify-center text-center group cursor-pointer transition-transform duration-300 hover:scale-105">
              <div className="relative flex h-52 w-52 sm:h-60 sm:w-60 items-center justify-center p-6 text-center">
                <Image
                  src="/images/Sunburst.png"
                  alt="Email Support"
                  fill
                  className="object-contain drop-shadow-sm pointer-events-none"
                  priority
                />
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#121629] text-white shadow-xs">
                    <Mail size={18} />
                  </div>
                  <span className="text-sm font-bold text-[#121629] break-all px-2">
                    support@flyora.com
                  </span>
                </div>
              </div>
            </div>

            {/* Badge 2: Phone (Diamond Shape) */}
            <div className="relative flex flex-col items-center justify-center text-center group cursor-pointer transition-transform duration-300 hover:scale-105">
              <div className="relative flex h-52 w-52 sm:h-60 sm:w-60 items-center justify-center p-6 text-center">
                <Image
                  src="/images/Rounded diamond.png"
                  alt="Direct Concierge Phone"
                  fill
                  className="object-contain drop-shadow-sm pointer-events-none"
                  priority
                />
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#121629] text-white shadow-xs">
                    <Headphones size={18} />
                  </div>
                  <span className="text-sm font-bold text-[#121629]">
                    +1 (202) 555 0147
                  </span>
                </div>
              </div>
            </div>

            {/* Badge 3: Map Location (Scalloped Square Shape) */}
            <div className="relative flex flex-col items-center justify-center text-center group cursor-pointer transition-transform duration-300 hover:scale-105">
              <div className="relative flex h-52 w-52 sm:h-60 sm:w-60 items-center justify-center p-6 text-center">
                <Image
                  src="/images/Rounded scalloped square.png"
                  alt="Office Location"
                  fill
                  className="object-contain drop-shadow-sm pointer-events-none"
                  priority
                />
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#121629] text-white shadow-xs">
                    <MapPin size={18} />
                  </div>
                  <span className="text-sm font-bold text-[#121629]">
                    View on map
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) Section */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left FAQ Header & Rating Card */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="mb-4 flex w-fit items-center gap-2 rounded-full bg-[#FEF2F2] px-5 py-2 text-xs font-semibold text-[#262B65] border border-[#EA2C2A]/20 shadow-xs">
                  <img src="/images/flowericon.png" alt="" width={17} height={17} />
                  Frequently Asked
                  <img src="/images/flowericon.png" alt="" width={17} height={17} />
                </div>

                <h2
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#262B65] tracking-tight leading-[1.12]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Answers Before You <br />
                  Even <span className="italic font-medium text-[#EA2C2A]">Ask</span>
                </h2>
              </div>

              {/* Traveler Rating Card */}
              <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-6 sm:p-7 max-w-sm shadow-xs">
                {/* Overlapping Avatars Stack */}
                <div className="flex items-center -space-x-3 mb-4">
                  {avatars.map((src, i) => (
                    <div
                      key={i}
                      className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-sm"
                    >
                      <Image src={src} alt="Traveler" fill className="object-cover" />
                    </div>
                  ))}
                </div>

                {/* Score & Stars */}
                <div className="flex items-center gap-3">
                  <span className="text-xl font-extrabold text-[#262B65]">4.9/5.0</span>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="mt-2 text-xs text-slate-500 font-medium leading-relaxed">
                  Based on 2K+ traveler questions answered by our certified concierge team.
                </p>
              </div>
            </div>

            {/* Right FAQ Accordions */}
            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`overflow-hidden rounded-2xl sm:rounded-3xl transition-all duration-300 ${
                      isOpen
                        ? "bg-[#FEF2F2] border border-[#EA2C2A]/20 shadow-sm"
                        : "bg-slate-50/80 border border-slate-200/80 hover:bg-slate-100/80"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                      className="flex w-full items-center justify-between p-6 sm:p-7 text-left font-bold text-[#262B65] text-base sm:text-lg transition"
                    >
                      <span>{faq.question}</span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                          isOpen
                            ? "bg-[#262B65] text-white"
                            : "bg-white text-slate-700 shadow-xs border border-slate-200"
                        }`}
                      >
                        {isOpen ? <X size={15} strokeWidth={2.5} /> : <Plus size={15} strokeWidth={2.5} />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-sm sm:text-base text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
