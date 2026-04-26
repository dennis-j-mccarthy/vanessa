import Image from "next/image";
import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schedule a free consultation with Vanessa Graf, PsyD, LMFT, to discuss which service best fits your goals.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative h-[58vh] min-h-[420px] w-full overflow-hidden -mt-20">
        <Image
          src="/images/pexels-photo-1261728.jpg"
          alt="Open horizon"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 h-full flex items-end">
          <div className="mx-auto max-w-7xl w-full px-6 lg:px-10 pb-14 lg:pb-20 fade-in-up">
            <p className="text-xs uppercase tracking-[0.4em] text-white/80 mb-4">
              Contact
            </p>
            <h1 className="font-serif text-white text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-3xl">
              Let&apos;s get started.
            </h1>
            <p className="mt-6 text-white/85 text-lg max-w-xl leading-relaxed">
              Schedule a free consultation to discuss which service best suits
              your personal goals.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.32em] text-clay">
            Contact Info
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink mt-4 leading-[1.15]">
            A short note is enough to begin.
          </h2>
          <div className="section-rule mt-6" />
          <p className="mt-6 text-ink-soft leading-relaxed">
            Reach out by phone, fax, or the form. I respond personally to every
            inquiry — usually within one business day.
          </p>

          <dl className="mt-12 space-y-7">
            <div>
              <dt className="text-xs uppercase tracking-[0.28em] text-muted mb-1.5">
                Phone
              </dt>
              <dd>
                <a
                  href="tel:+17196517587"
                  className="font-serif text-2xl text-ink hover:text-clay transition-colors"
                >
                  719-651-7587
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.28em] text-muted mb-1.5">
                Fax
              </dt>
              <dd className="font-serif text-2xl text-ink">719-631-2578</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.28em] text-muted mb-1.5">
                Office
              </dt>
              <dd className="text-ink-soft leading-relaxed">
                2699 Beachwood Drive, Suite 4138
                <br />
                Los Angeles, CA
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-2xl bg-surface border border-line/70 p-8 md:p-10">
            <h3 className="font-serif text-2xl text-ink">
              Schedule an appointment
            </h3>
            <p className="mt-2 text-ink-soft text-sm">
              Tell me a little about what brings you here.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
