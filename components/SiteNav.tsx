"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/one-to-one-therapy", label: "One-to-One Therapy" },
  { href: "/marriage-counseling", label: "Marriage Counseling" },
  { href: "/life-coaching", label: "Life Coaching" },
  { href: "/integrated-spirituality", label: "Integrated Spirituality" },
  { href: "/contact", label: "Contact" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-line/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <Link
          href="/"
          className="font-serif text-2xl tracking-wide text-ink hover:text-clay transition-colors"
        >
          Vanessa Graf
          <span className="block text-[0.65rem] uppercase tracking-[0.32em] font-sans mt-0.5 text-muted">
            PsyD, LMFT
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`link-underline transition-colors ${
                  active ? "text-clay" : "text-ink-soft hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-clay text-white text-sm hover:bg-clay-deep transition-colors"
        >
          Book Consultation
        </Link>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
        >
          <span
            className={`block h-px w-6 bg-ink transition-all ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-all ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-all ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        } bg-cream/95 backdrop-blur-md border-t border-line/70`}
      >
        <nav className="px-6 py-6 flex flex-col gap-4">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-base ${
                  active ? "text-clay" : "text-ink-soft"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center px-5 py-3 rounded-full bg-clay text-white text-sm"
          >
            Book Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
