import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-line/70 bg-[#f3ede2]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-ink">Vanessa Graf</p>
          <p className="text-xs uppercase tracking-[0.32em] text-muted mt-1">
            PsyD, LMFT, PC
          </p>
          <p className="mt-5 text-sm text-ink-soft leading-relaxed max-w-xs">
            Psychotherapy, marriage counseling, life coaching, and integrated
            spirituality — for the work of becoming yourself.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-muted">
            Specialties
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                href="/one-to-one-therapy"
                className="text-ink-soft hover:text-clay transition-colors"
              >
                One-to-One Therapy
              </Link>
            </li>
            <li>
              <Link
                href="/marriage-counseling"
                className="text-ink-soft hover:text-clay transition-colors"
              >
                Marriage Counseling
              </Link>
            </li>
            <li>
              <Link
                href="/life-coaching"
                className="text-ink-soft hover:text-clay transition-colors"
              >
                Life Coaching
              </Link>
            </li>
            <li>
              <Link
                href="/integrated-spirituality"
                className="text-ink-soft hover:text-clay transition-colors"
              >
                Integrated Spirituality
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-muted">
            Get in touch
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            <li>
              <a
                href="tel:+17196517587"
                className="hover:text-clay transition-colors"
              >
                P: 719-651-7587
              </a>
            </li>
            <li>F: 719-631-2578</li>
            <li className="pt-2">
              <Link
                href="/contact"
                className="link-underline text-clay"
              >
                Schedule a consultation
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line/70">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted">
          <p>© Vanessa P. Graf, {year}. All rights reserved.</p>
          <p className="font-serif italic text-sm text-ink-soft">
            “May there be kindness in your gaze when you look within.”
          </p>
        </div>
      </div>
    </footer>
  );
}
