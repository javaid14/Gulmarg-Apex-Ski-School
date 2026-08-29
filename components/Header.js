"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Mountain } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/activities", label: "Activities" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-alpine-900/95 backdrop-blur border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-snow"
            onClick={() => setOpen(false)}
          >
            <Mountain className="h-7 w-7 text-ember-500" strokeWidth={2.2} />
          </Link>

          <nav className="hidden md:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ice-200 hover:text-ember-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/packages"
              className="rounded-full bg-ember-500 hover:bg-ember-600 transition-colors px-5 py-2.5 text-sm font-semibold text-alpine-950"
            >
              Book Now
            </Link>
          </nav>

          <button
            className="md:hidden text-snow"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-alpine-900 px-6 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-ice-200 hover:bg-white/5 hover:text-ember-400 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/packages"
              className="mt-2 rounded-full bg-ember-500 px-5 py-3 text-center text-sm font-semibold text-alpine-950"
              onClick={() => setOpen(false)}
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
