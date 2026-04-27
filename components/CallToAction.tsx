import Link from "next/link";

export function CallToAction({
  title = "Begin the conversation",
  body = "Schedule a consultation to find the service that best fits where you are — and where you want to go.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="mx-auto max-w-5xl px-6 lg:px-10 py-20">
      <div className="rounded-3xl bg-sage-deep text-white px-8 md:px-14 py-14 md:py-20 text-center relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_20%_20%,white,transparent_50%),radial-gradient(circle_at_80%_70%,white,transparent_45%)]"
        />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.32em] text-white/70 mb-4">
            Get started
          </p>
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.1]">
            {title}
          </h2>
          <p className="mt-5 text-white/80 max-w-xl mx-auto leading-relaxed">
            {body}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-sage-deep text-sm font-medium hover:bg-cream transition-colors"
            >
              Book a Consultation
            </Link>
            <a
              href="tel:+17196517587"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/40 text-white text-sm hover:bg-white/10 transition-colors"
            >
              Call 719-651-7587
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
