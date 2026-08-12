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
  { label: "Services", href: "/services" },
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
    <div className="fixed inset-0 z-50 bg-neutral-950/98 text-white">
      {/* Faint background glow, echoes the hero photo behind the menu */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-neutral-800/40 via-transparent to-transparent" />

      {/* --------------------------- Top bar --------------------------- */}
      <div className="relative z-10 flex items-center gap-3 px-6 pt-6 sm:px-10 sm:pt-8">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
          <Layers size={18} className="text-neutral-900" strokeWidth={2} />
        </div>
        <button
          onClick={onClose}
          className="text-lg font-medium text-white/90 transition hover:text-white"
        >
          Close
        </button>
      </div>

      {/* ------------------------- Menu panel ------------------------- */}
      <div className="relative z-10 mx-6 mt-10 rounded-[28px] border border-dashed border-white/20 p-8 sm:mx-10 sm:mt-14 sm:p-10 md:max-w-2xl">
        <nav className="grid grid-cols-2 gap-y-6 gap-x-8">
          {primaryLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="text-3xl font-medium text-white/90 transition hover:text-amber-300 sm:text-4xl"
            >
              {link.label}
            </Link>
          ))}
          {secondaryLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="text-3xl font-medium text-white/60 transition hover:text-amber-200 sm:text-4xl"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="my-8 border-t border-dashed border-white/20" />

        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div className="space-y-1.5 text-sm text-white/80 sm:text-base">
            <p>support@yourbrand.com</p>
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
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-900 transition hover:bg-white/85"
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