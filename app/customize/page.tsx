"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Sparkles, Calendar, DollarSign, Compass, Send, CheckCircle2 } from "lucide-react";
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
    budgetPerPerson: "2000-3500",
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
        <div className="rounded-3xl bg-[#FEF2F2] border border-[#EA2C2A]/30 p-12 text-center shadow-xl space-y-6">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#EA2C2A] text-white">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#262A67]" style={{ fontFamily: "var(--font-playfair)" }}>
            Trip Proposal Request Received!
          </h2>
          <p className="text-slate-700 text-base max-w-lg mx-auto leading-relaxed">
            Thank you, <span className="text-[#EA2C2A] font-bold">{formData.customerName}</span>. Our destination concierge will review your preferences and craft a customized itinerary within <span className="text-[#262A67] font-bold">2 to 4 hours</span>.
          </p>
          <div className="pt-4 border-t border-[#EA2C2A]/20 flex justify-center gap-4">
            <button
              onClick={() => setSubmitted(false)}
              className="rounded-full bg-[#262A67] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#1A1D4A] transition"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 shadow-xl space-y-8">
          {errorMsg && (
            <div className="rounded-2xl bg-rose-50 border border-rose-200 p-4 text-xs text-rose-700 font-medium">
              {errorMsg}
            </div>
          )}

          {/* Step 1: Destination & Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#262A67] flex items-center gap-2 border-b border-slate-200 pb-3">
              <Compass className="text-[#EA2C2A]" size={20} />
              1. Personal Information & Destination
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="customerName"
                  required
                  value={formData.customerName}
                  onChange={handleChange}
                  placeholder="e.g. Alexandra Smith"
                  className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#EA2C2A] focus:outline-none shadow-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@example.com"
                  className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#EA2C2A] focus:outline-none shadow-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Phone / WhatsApp *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +1 (555) 019-2834"
                  className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#EA2C2A] focus:outline-none shadow-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Preferred Destination</label>
                <input
                  type="text"
                  name="preferredDestination"
                  value={formData.preferredDestination}
                  onChange={handleChange}
                  placeholder="e.g. Kyoto, Santorini, Swiss Alps, Multi-country"
                  className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#EA2C2A] focus:outline-none shadow-xs"
                />
              </div>
            </div>
          </div>

          {/* Step 2: Travel Dates & Group */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#262A67] flex items-center gap-2 border-b border-slate-200 pb-3">
              <Calendar className="text-[#EA2C2A]" size={20} />
              2. Dates & Group Size
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Departure Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#EA2C2A] focus:outline-none shadow-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Return Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#EA2C2A] focus:outline-none shadow-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Adults (12+ yrs)</label>
                <input
                  type="number"
                  name="adultsCount"
                  min={1}
                  value={formData.adultsCount}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#EA2C2A] focus:outline-none shadow-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Children (&lt; 12 yrs)</label>
                <input
                  type="number"
                  name="childrenCount"
                  min={0}
                  value={formData.childrenCount}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#EA2C2A] focus:outline-none shadow-xs"
                />
              </div>
            </div>
          </div>

          {/* Step 3: Style & Budget */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#262A67] flex items-center gap-2 border-b border-slate-200 pb-3">
              <DollarSign className="text-[#EA2C2A]" size={20} />
              3. Travel Style & Budget
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Travel Style</label>
                <select
                  name="travelStyle"
                  value={formData.travelStyle}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-[#EA2C2A] focus:outline-none shadow-xs"
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
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Estimated Budget Per Person</label>
                <select
                  name="budgetPerPerson"
                  value={formData.budgetPerPerson}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-[#EA2C2A] focus:outline-none shadow-xs"
                >
                  <option value="1000-2000">$1,000 - $2,000 USD</option>
                  <option value="2000-3500">$2,000 - $3,500 USD</option>
                  <option value="3500-5000">$3,500 - $5,000 USD</option>
                  <option value="5000+">$5,000+ USD (Ultra Luxury)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Special Requests or Preferences</label>
              <textarea
                name="specialNotes"
                rows={4}
                value={formData.specialNotes}
                onChange={handleChange}
                placeholder="Specify preferred airlines, dietary restrictions, room upgrades, or specific activities you want included..."
                className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#EA2C2A] focus:outline-none resize-none shadow-xs"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-xl bg-[#EA2C2A] py-4 text-base font-bold text-white transition hover:bg-[#C82120] shadow-lg flex items-center justify-center gap-2"
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
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Header />

      {/* Hero Header */}
      <section className="relative py-20 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#EEF2FF]/40 border-b border-[#C7D2FE]/60">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#EA2C2A]/10 blur-[150px] rounded-full" />
        
        <div className="relative mx-auto max-w-[1600px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FEF2F2] px-4 py-1.5 text-xs font-semibold text-[#EA2C2A] border border-[#EA2C2A]/20 mb-4">
            <Sparkles size={14} className="text-[#EA2C2A]" fill="currentColor" />
            Tailor-Made Experience
          </div>
          <h1
            className="text-4xl font-extrabold sm:text-6xl text-[#262A67] tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Design Your <br />
            <span className={`${caveat.className} text-[#EA2C2A] font-normal text-5xl sm:text-7xl`}>
              Bespoke Journey
            </span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed">
            Tell us your travel dreams, dates, and budget. Our local travel designers will craft an exclusive, personalized itinerary just for you.
          </p>
        </div>
      </section>

      <main className="flex-1 py-16 px-6 sm:px-10 lg:px-16 bg-white">
        <Suspense fallback={<div className="text-center text-slate-500">Loading form...</div>}>
          <CustomizeFormContent />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
