"use client";

import { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Sparkles, Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col font-sans">
      <Header />

      {/* Hero */}
      <section className="relative py-20 px-6 sm:px-10 lg:px-16 overflow-hidden bg-neutral-900 border-b border-neutral-800">
        <div className="pointer-events-none absolute -top-40 left-1/3 w-[500px] h-[500px] bg-amber-500/10 blur-[140px] rounded-full" />

        <div className="relative mx-auto max-w-[1600px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-amber-300 border border-amber-400/20 mb-4">
            <Sparkles size={14} fill="currentColor" />
            Connect With Concierge
          </div>
          <h1
            className="text-4xl font-extrabold sm:text-6xl text-white tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Get In Touch <br />
            <span className={`${caveat.className} text-amber-300 font-normal text-5xl sm:text-7xl`}>
              With Flyora
            </span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-neutral-400 leading-relaxed">
            Have questions about a tour package, visa processing, or custom group bookings? Our senior concierge team is here to assist you 24/7.
          </p>
        </div>
      </section>

      <main className="flex-1 py-16 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Cards */}
          <div className="space-y-6">
            <div className="rounded-3xl bg-neutral-900 border border-neutral-800 p-8 space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-neutral-800 pb-3">
                Agency Information
              </h3>

              <div className="flex items-start gap-4 text-neutral-300 text-sm">
                <MapPin size={20} className="text-amber-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white">Headquarters</h4>
                  <p className="text-neutral-400 mt-0.5">742 Evergreen Terrace, San Francisco, CA 94107, USA</p>
                </div>
              </div>

              <div className="flex items-start gap-4 text-neutral-300 text-sm">
                <Mail size={20} className="text-amber-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white">Email Us</h4>
                  <p className="text-neutral-400 mt-0.5">support@flyora.com</p>
                  <p className="text-neutral-400">concierge@flyora.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 text-neutral-300 text-sm">
                <Phone size={20} className="text-amber-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white">Direct Phone / WhatsApp</h4>
                  <p className="text-neutral-400 mt-0.5">+1 (202) 555-0147</p>
                  <p className="text-neutral-400">+44 20 7946 0912</p>
                </div>
              </div>

              <div className="flex items-start gap-4 text-neutral-300 text-sm">
                <Clock size={20} className="text-amber-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white">Working Hours</h4>
                  <p className="text-neutral-400 mt-0.5">Monday - Saturday: 8:00 AM - 10:00 PM EST</p>
                  <p className="text-amber-300 text-xs font-semibold mt-1">24/7 Support line available for active travelers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="rounded-3xl bg-neutral-900 border border-amber-400/40 p-12 text-center space-y-6">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-400/10 text-amber-300">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                  Message Sent Successfully!
                </h2>
                <p className="text-neutral-300 text-base max-w-md mx-auto">
                  Thank you for reaching out. A representative will contact you via email or phone shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="rounded-full bg-neutral-800 px-6 py-2.5 text-xs font-semibold text-white hover:bg-neutral-700 transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-3xl bg-neutral-900 border border-neutral-800 p-8 sm:p-12 space-y-6">
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                  Send Us A Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white focus:border-amber-400 focus:outline-none"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Tour Package Booking">Tour Package Booking</option>
                    <option value="Visa Service Assistance">Visa Service Assistance</option>
                    <option value="Flight / Hotel Booking">Flight / Hotel Booking</option>
                    <option value="Corporate / Partnership">Corporate / Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Message *</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we assist your travel plans?"
                    className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-amber-400 focus:outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 py-4 text-sm font-bold text-neutral-950 transition hover:from-amber-300 hover:to-amber-400 shadow-xl flex items-center justify-center gap-2"
                >
                  {submitting ? "Sending Message..." : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
