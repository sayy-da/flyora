"use client";

import Link from "next/link";
import { X as XIcon, Layers, Sparkles } from "lucide-react";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

type NavbarProps = {
  onClose: () => void;
};

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/tours" },
  { label: "Destinations", href: "/locations" },
  { label: "Blog", href: "/blog" },
];

const secondaryLinks = [
  { label: "Plan a Trip", href: "/customize" },
  { label: "Stories", href: "/stories" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { icon: XIcon, href: "https://x.com", label: "X" },
];

export default function Navbar({ onClose }: NavbarProps) {
  return (
    <div className="fixed inset-0 z-50 bg-[#262A67]/98 text-white backdrop-blur-md">
      {/* Background glow highlights */}
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-[#EA2C2A]/20 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-96 h-96 bg-white/10 blur-[140px] rounded-full" />

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-6 pt-6 sm:px-10 sm:pt-8 max-w-[1600px] mx-auto">
        <Link href="/" onClick={onClose} className="flex items-center group">
          <img
            src="/images/light-logo.png"
            alt="Flyora"
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        <button
          onClick={onClose}
          className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#EA2C2A] border border-white/20"
        >
          <XIcon size={18} />
          <span>Close</span>
        </button>
      </div>

      {/* Menu panel */}
      <div className="relative z-10 mx-auto mt-10 max-w-3xl rounded-[32px] border border-white/15 bg-white/5 p-8 backdrop-blur-xl sm:mt-14 sm:p-12">
        <nav className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
          {primaryLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="text-3xl font-bold text-white transition hover:text-[#EA2C2A] sm:text-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {link.label}
            </Link>
          ))}
          {secondaryLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="text-3xl font-bold text-white/70 transition hover:text-[#EA2C2A] sm:text-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="my-8 border-t border-white/15" />

        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div className="space-y-1 text-sm text-white/80">
            <p>support@flyora.com</p>
            <p>+1 (202) 555 0147</p>
          </div>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#262A67] transition hover:bg-[#EA2C2A] hover:text-white"
              >
                <Icon size={16} strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}