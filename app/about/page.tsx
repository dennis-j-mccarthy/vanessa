import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CallToAction } from "@/components/CallToAction";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Vanessa",
  description:
    "Twenty-five years of clinical practice, an empathic ear, and the internal work to back it up. Meet Vanessa Graf, PsyD, LMFT.",
};

const insurance = [
  "Aetna (excluding EAP)",
  "Anthem BC/BS",
  "Beacon Health (including EAP)",
  "Cigna (including EAP)",
  "Humana",
  "Meritain Health",
  "Optum: United, United Shared Services, UMR (including EAP)",
  "WPS",
  "Triwest Healthcare Alliance for the VA",
];

const education = [
  {
    school: "Mississippi College, Clinton, MS",
    detail: "BS — Education, double major in English and Psychology",
  },
  {
    school: "Antioch University, Marina del Rey, CA",
    detail: "MA — Clinical Psychology",
  },
  {
    school: "Daniel Freeman Marina Hospital",
    detail:
      "Internship — Adult / Adolescent, Chemical Dependency, Adult / Adolescent / Family",
  },
  {
    school: "Ryokan University, Los Angeles, CA",
    detail: "PsyD — Clinical Psychology",
  },
  {
    school: "Private Practice",
    detail:
      "Internship with psychiatrist Orlando J. Cartaya, M.D. Licensed Marriage & Family Therapist in California and Colorado. In private practice 1997 – present.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 overflow-hidden bg-[#f3ede2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <p className="text-xs uppercase tracking-[0.4em] text-clay mb-5">
              About
            </p>
            <h1 className="font-serif text-4xl md:text-6xl text-ink leading-[1.05]">
              Twenty-five years of helping people reach their potential.
            </h1>
            <div className="section-rule mt-7" />
            <p className="mt-7 text-ink-soft text-lg leading-relaxed max-w-xl">
              There&apos;s a part of me that feels I&apos;ve been a therapist
              all my life. The path to this chair has been long — and the work
              I&apos;ve done on myself is what makes me ready to walk it with
              you.
            </p>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative aspect-[4/5] lg:aspect-[5/6] rounded-2xl overflow-hidden">
              <Image
                src="/images/Vanessa-Sm-3-topaz-face-upscale-4x.jpg"
                alt="Vanessa Graf"
                fill
                priority
                sizes="(min-width: 1024px) 55vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 lg:px-10 py-24">
        <SectionHeading eyebrow="My Story" title="The school of life." />
        <div className="prose-warm mt-10 text-lg">
          <p>
            Being the youngest of two children — and a girl in a family with a
            mentally ill mother — I grew up attempting not only to understand
            for myself, but to help my family members understand how to cope
            and survive the missing component of a Mother in our lives.
          </p>
          <p>
            When I graduated college with a double major in English and
            psychology, I wanted to continue my education. It turns out that
            &ldquo;the education&rdquo; was focused and concentrated in the
            school of life. At twenty-four I began to travel from coast to
            coast, meeting with groups of people, large and small, teaching
            techniques for interpreting dreams and exploring spirituality from
            a variety of perspectives.
          </p>
          <p>
            Having been raised in the Bible Belt, I had a strong value system
            based on Christian principles. As I continued traveling and
            lecturing, I began to study esoteric psychology and Carl Jung&apos;s
            approach to dreams and their role in our lives.
          </p>
          <p>
            After a tragic personal loss, I entered into a long-term therapeutic
            relationship which helped to transform my life and broaden my
            world view. As I began to deal with the childhood issues of not
            having a mother and the impact of her mental illness on my family,
            I began to heal in a deep and profound way. In retrospect, this
            was the most important part of my education in becoming a good
            psychotherapist — and something that sets me apart. I have done my
            internal work.
          </p>
        </div>
      </section>

      <section className="bg-[#f3ede2]">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 py-24">
          <SectionHeading
            eyebrow="My Approach"
            title="Happiness is a worthy goal."
          />
          <div className="prose-warm mt-10 text-lg">
            <p>
              Going back to school to earn my master&apos;s in Clinical
              Psychology and then my doctorate were exhilarating, and rounded
              out the internal work I was completing at the time. As is true
              of many people who have suffered loss and deprivation in
              childhood, the wounds of the past serve as an empathic gateway
              to understanding the suffering of others.
            </p>
            <p>
              I view my role as a psychotherapist as a facilitator in a
              conversation of renewal and transformation. Today I combine
              clinical knowledge with an empathic gift to bring clients a
              broader and deeper experience of the therapeutic process.
            </p>
            <p>
              The insights and interpretations in therapy are a combination of
              a clinical perspective and an intuitive understanding of my
              clients — and how to help them understand and accept themselves
              on a meaningful level.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16">
        <div>
          <SectionHeading eyebrow="Education" title="Training & credentials" />
          <ul className="mt-10 space-y-6">
            {education.map((e) => (
              <li
                key={e.school}
                className="border-l-2 border-clay/40 pl-5 py-1"
              >
                <p className="font-serif text-xl text-ink">{e.school}</p>
                <p className="text-ink-soft mt-1.5 leading-relaxed">
                  {e.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SectionHeading eyebrow="Logistics" title="Finances & insurance" />
          <div className="mt-10 rounded-2xl bg-surface border border-line/70 p-8">
            <dl className="grid grid-cols-2 gap-y-5 gap-x-6 text-sm">
              <dt className="text-muted uppercase tracking-wider text-xs">
                Cost per Session
              </dt>
              <dd className="text-ink font-medium">$90 – $150</dd>
              <dt className="text-muted uppercase tracking-wider text-xs">
                Sliding Scale
              </dt>
              <dd className="text-ink font-medium">Yes</dd>
              <dt className="text-muted uppercase tracking-wider text-xs">
                Pay By
              </dt>
              <dd className="text-ink font-medium">
                Cash, Check, HSA, Mastercard, Visa
              </dd>
            </dl>
          </div>

          <p className="mt-10 text-xs uppercase tracking-[0.32em] text-clay">
            Accepted Insurance
          </p>
          <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-2.5 text-ink-soft text-sm">
            {insurance.map((p) => (
              <li key={p} className="flex gap-2">
                <span className="text-clay">·</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 lg:px-10 pb-12 text-center">
        <p className="text-ink-soft text-lg leading-relaxed">
          I offer four services:{" "}
          <Link
            href="/one-to-one-therapy"
            className="text-clay link-underline"
          >
            One-to-One Therapy
          </Link>
          ,{" "}
          <Link
            href="/marriage-counseling"
            className="text-clay link-underline"
          >
            Marriage Counseling
          </Link>
          ,{" "}
          <Link href="/life-coaching" className="text-clay link-underline">
            Life Coaching
          </Link>
          , and{" "}
          <Link
            href="/integrated-spirituality"
            className="text-clay link-underline"
          >
            Integrated Spirituality
          </Link>
          .
        </p>
      </section>

      <CallToAction
        title="Let's see if we're a fit."
        body="Schedule a consultation to decide which service can best benefit you and change your life."
      />
    </>
  );
}
