"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Sparkles, Calendar, Users, DollarSign, Compass, Send, CheckCircle2, PhoneCall } from "lucide-react";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

function CustomizeFormContent() {
  const searchParams = useSearchParams();
  const initialDest = searchParams.get("destination") || searchParams.get("package") || "";

  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    preferredDestination: initialDest,
    startDate: "",
    endDate: "",
    budgetPerPerson: "2000-3000",
    adultsCount: 2,
    childrenCount: 0,
    travelStyle: "Luxury",
    specialNotes: "",
  });

  useEffect(() => {
    if (initialDest) {
      setFormData((prev) => ({ ...prev, preferredDestination: initialDest }));
    }
  }, [initialDest]);

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/custom-trip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to submit request.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl">
      {submitted ? (
        <div className="rounded-3xl bg-neutral-900 border border-amber-400/40 p-12 text-center shadow-2xl space-y-6">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-400/10 text-amber-300">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
            Trip Proposal Request Received!
          </h2>
          <p className="text-neutral-300 text-base max-w-lg mx-auto leading-relaxed">
            Thank you, <span className="text-amber-300 font-semibold">{formData.customerName}</span>. Our destination concierge will review your preferences and craft a customized itinerary within <span className="text-white font-bold">2 to 4 hours</span>.
          </p>
          <div className="pt-4 border-t border-neutral-800 flex justify-center gap-4">
            <button
              onClick={() => setSubmitted(false)}
              className="rounded-full bg-neutral-800 px-6 py-2.5 text-xs font-semibold text-white hover:bg-neutral-700 transition"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="rounded-3xl bg-neutral-900 border border-neutral-800 p-8 sm:p-12 shadow-2xl space-y-8">
          {errorMsg && (
            <div className="rounded-2xl bg-rose-500/10 border border-rose-500/30 p-4 text-xs text-rose-300">
              {errorMsg}
            </div>
          )}

          {/* Step 1: Destination & Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-3">
              <Compass className="text-amber-400" size={20} />
              1. Personal Information & Destination
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="customerName"
                  required
                  value={formData.customerName}
                  onChange={handleChange}
                  placeholder="e.g. Alexandra Smith"
                  className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@example.com"
                  className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Phone / WhatsApp *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +1 (555) 019-2834"
                  className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Preferred Destination</label>
                <input
                  type="text"
                  name="preferredDestination"
                  value={formData.preferredDestination}
                  onChange={handleChange}
                  placeholder="e.g. Kyoto, Santorini, Swiss Alps, Multi-country"
                  className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-amber-400 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Step 2: Travel Dates & Group */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-3">
              <Calendar className="text-amber-400" size={20} />
              2. Dates & Group Size
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Departure Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Return Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Adults (12+ yrs)</label>
                <input
                  type="number"
                  name="adultsCount"
                  min={1}
                  value={formData.adultsCount}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Children (&lt; 12 yrs)</label>
                <input
                  type="number"
                  name="childrenCount"
                  min={0}
                  value={formData.childrenCount}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-amber-400 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Step 3: Style & Budget */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-3">
              <DollarSign className="text-amber-400" size={20} />
              3. Travel Style & Budget
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Travel Style</label>
                <select
                  name="travelStyle"
                  value={formData.travelStyle}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white focus:border-amber-400 focus:outline-none"
                >
                  <option value="Luxury">Luxury & 5-Star Resorts</option>
                  <option value="Honeymoon">Honeymoon & Romantic</option>
                  <option value="Family">Family Fun & Comfort</option>
                  <option value="Adventure">Adventure & Off-beat</option>
                  <option value="Cultural">Cultural & Historical</option>
                  <option value="Budget">Budget Friendly</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Estimated Budget Per Person</label>
                <select
                  name="budgetPerPerson"
                  value={formData.budgetPerPerson}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white focus:border-amber-400 focus:outline-none"
                >
                  <option value="1000-2000">$1,000 - $2,000 USD</option>
                  <option value="2000-3500">$2,000 - $3,500 USD</option>
                  <option value="3500-5000">$3,500 - $5,000 USD</option>
                  <option value="5000+">$5,000+ USD (Ultra Luxury)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Special Requests or Preferences</label>
              <textarea
                name="specialNotes"
                rows={4}
                value={formData.specialNotes}
                onChange={handleChange}
                placeholder="Specify preferred airlines, dietary restrictions, room upgrades, or specific activities you want included..."
                className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-amber-400 focus:outline-none resize-none"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 py-4 text-base font-bold text-neutral-950 transition hover:from-amber-300 hover:to-amber-400 shadow-xl flex items-center justify-center gap-2"
          >
            {submitting ? (
              <span>Submitting Proposal Request...</span>
            ) : (
              <>
                <span>Submit My Custom Trip Proposal</span>
                <Send size={18} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

export default function CustomizePage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col font-sans">
      <Header />

      {/* Hero Header */}
      <section className="relative py-20 px-6 sm:px-10 lg:px-16 overflow-hidden bg-neutral-900 border-b border-neutral-800">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[150px] rounded-full" />
        
        <div className="relative mx-auto max-w-[1600px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-amber-300 border border-amber-400/20 mb-4">
            <Sparkles size={14} fill="currentColor" />
            Tailor-Made Experience
          </div>
          <h1
            className="text-4xl font-extrabold sm:text-6xl text-white tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Design Your <br />
            <span className={`${caveat.className} text-amber-300 font-normal text-5xl sm:text-7xl`}>
              Bespoke Journey
            </span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-neutral-400 leading-relaxed">
            Tell us your travel dreams, dates, and budget. Our local travel designers will craft an exclusive, personalized itinerary just for you.
          </p>
        </div>
      </section>

      <main className="flex-1 py-16 px-6 sm:px-10 lg:px-16">
        <Suspense fallback={<div className="text-center text-neutral-400">Loading form...</div>}>
          <CustomizeFormContent />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
