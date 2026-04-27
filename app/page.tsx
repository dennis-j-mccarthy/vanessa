import Image from "next/image";
import Link from "next/link";
import { CallToAction } from "@/components/CallToAction";

const services = [
  {
    href: "/one-to-one-therapy",
    title: "One-to-One Therapy",
    image: "/images/pexels-photo-1556691.jpg",
    blurb:
      "Sometimes the deepest changes begin with a single conversation — speaking your truth to a trained, witnessing ear.",
  },
  {
    href: "/marriage-counseling",
    title: "Marriage Counseling",
    image: "/images/photo-of-couple-at-the-field-853407-1.jpg",
    blurb:
      "Healthy relationships rest on skills — and skills can be learned. Communication, empathy, and play, rebuilt together.",
  },
  {
    href: "/life-coaching",
    title: "Life Coaching",
    image: "/images/pexels-photo-3094218.jpg",
    blurb:
      "Make a plan, then live into it — a step-by-step therapeutic conversation that brings dreams to fruition.",
  },
  {
    href: "/integrated-spirituality",
    title: "Integrated Spirituality",
    image: "/images/int-spirit.jpg",
    blurb:
      "A conversation that honors your worth, your path, and your relationship with all that is greater than yourself.",
  },
];

const steps = [
  {
    n: "01",
    title: "Choose a service",
    body: "Look at which of the four services best matches your goals — or let's decide together.",
  },
  {
    n: "02",
    title: "Let's connect",
    body: "Reach out to set up a consultation. We'll talk through what brought you here.",
  },
  {
    n: "03",
    title: "Begin the work",
    body: "Take the first step toward the self — and the life — you actually want.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden -mt-20">
        <Image
          src="/images/pexels-photo-320007.jpg"
          alt="Soft natural light through trees"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/55" />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/55 to-transparent"
        />
        <div className="relative z-10 h-full flex items-center">
          <div className="mx-auto max-w-7xl w-full px-6 lg:px-10 pt-20 fade-in-up">
            <p className="text-xs uppercase tracking-[0.4em] text-white/80 mb-6">
              Vanessa Graf — PsyD, LMFT, PC
            </p>
            <h1 className="font-serif text-white text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] max-w-4xl">
              May there be kindness in your gaze when you look within.
            </h1>
            <p className="mt-8 text-white/85 text-lg md:text-xl max-w-2xl leading-relaxed">
              Twenty-five years of guiding people toward renewal — through
              psychotherapy, marriage counseling, life coaching, and integrated
              spirituality.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-clay text-white text-sm hover:bg-clay-deep transition-colors"
              >
                Begin the conversation
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/40 text-white text-sm hover:bg-white/10 transition-colors"
              >
                Meet Vanessa
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="/images/Vanessa-Sm-3-topaz-face-upscale-4x.jpg"
              alt="Vanessa Graf, PsyD, LMFT"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-7 lg:pl-8">
          <p className="text-xs uppercase tracking-[0.32em] text-clay mb-4">
            About Vanessa
          </p>
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] text-ink">
            Twenty-five years of helping people reach their potential.
          </h2>
          <div className="section-rule mt-6" />
          <div className="prose-warm mt-8 text-base md:text-lg max-w-2xl">
            <p>
              I view my role as a psychotherapist as a facilitator in a
              conversation of renewal and transformation. Insights in therapy
              come from a combination of clinical knowledge and an intuitive
              understanding of who you are — and how to help you accept yourself
              on a meaningful level.
            </p>
            <p>
              Licensed in California and Colorado. PsyD in Clinical Psychology.
              In private practice since 1997.
            </p>
          </div>
          <Link
            href="/about"
            className="link-underline mt-8 inline-block text-clay text-sm tracking-wide"
          >
            Read more about my approach →
          </Link>
        </div>
      </section>

      <section className="bg-[#f3ede2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.32em] text-clay mb-4">
              Specialties
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-ink leading-[1.1]">
              Four ways into the work.
            </h2>
            <div className="section-rule mt-6" />
            <p className="mt-6 text-ink-soft text-lg leading-relaxed max-w-xl">
              Every person comes with a different question. These are the
              conversations I&apos;m trained to hold — choose the one that fits,
              or let&apos;s figure it out together.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group relative overflow-hidden rounded-2xl bg-surface aspect-[4/3] block"
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                <div className="absolute inset-0 p-7 lg:p-10 flex flex-col justify-end text-white">
                  <h3 className="font-serif text-2xl md:text-3xl">{s.title}</h3>
                  <p className="mt-3 text-white/85 text-sm md:text-base leading-relaxed max-w-md">
                    {s.blurb}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm tracking-wide">
                    Learn more
                    <span
                      aria-hidden
                      className="inline-block transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.32em] text-clay mb-4">
            Getting Started
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-ink leading-[1.1]">
            How it works.
          </h2>
          <div className="section-rule mt-6 mx-auto" />
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <p className="font-serif text-7xl text-clay/25 leading-none">
                {s.n}
              </p>
              <h3 className="font-serif text-2xl text-ink mt-3">{s.title}</h3>
              <p className="mt-3 text-ink-soft leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-28 lg:py-36 overflow-hidden">
        <Image
          src="/images/pexels-photo-746386.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center text-white">
          <p className="font-serif text-3xl md:text-5xl leading-[1.2] italic">
            &ldquo;To be yourself in a world that is constantly trying to make
            you something else is the greatest accomplishment.&rdquo;
          </p>
          <p className="mt-8 text-sm uppercase tracking-[0.32em] text-white/70">
            — Ralph Waldo Emerson
          </p>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
