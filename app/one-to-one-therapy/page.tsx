import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CallToAction } from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "One-to-One Therapy",
  description:
    "Psychotherapy — the talking cure. A trained, empathic ear and a nonjudgmental space for the work of becoming yourself.",
};

const specialties = [
  "Relationship Issues",
  "Life Coaching",
  "Depression",
  "Anxiety",
  "ADD / ADHD",
  "Addiction",
  "Anger Management",
  "Anxiety or Fears",
  "Child or Adolescent",
  "Chronic Pain or Illness",
  "Divorce",
  "Domestic Abuse",
  "Eating Disorders",
  "Gay / Lesbian Issues",
  "Impulse Control Disorders",
  "Infertility",
  "Loss or Grief",
  "OCD",
  "Parenting",
  "Sex Therapy",
  "Spirituality",
  "Trauma and PTSD",
  "Vocational Rehabilitation",
];

const orientation = ["Coaching", "Cognitive Behavioral (CBT)", "Insight / Psychodynamic"];
const modalities = ["Individuals", "Couples", "Family"];

export default function TherapyPage() {
  return (
    <>
      <PageHero
        eyebrow="One-to-One Therapy"
        title="The talking cure."
        intro="Sometimes the deepest and most profound changes in a person's life begin with a single conversation — face to face, speaking your truth to a witness."
        image="/images/pexels-photo-1556691.jpg"
        imageAlt="Quiet seated conversation between two people"
      />

      <section className="mx-auto max-w-3xl px-6 lg:px-10 py-24">
        <SectionHeading eyebrow="What it is" title="A trained ear." />
        <div className="prose-warm mt-10 text-lg">
          <p>
            Scientific research has yet to prove exactly{" "}
            <em>how</em> psychotherapy works — but it has proven, again and
            again, that it{" "}
            <em>does</em>. It has been called &ldquo;the talking cure&rdquo; for
            a reason.
          </p>
          <p>
            Unlike talking to a friend about personal problems or issues, a
            professional psychotherapist is trained to listen with{" "}
            <em>the third ear</em>. This provides an empathic perspective that
            lends not only understanding but unconditional positive regard. It
            is amazing what a human being can understand about the Self when
            exploration is conducted in a nonjudgmental environment.
          </p>
          <p>
            Many people seek psychotherapy to alleviate symptoms of depression,
            anxiety, obsessive compulsive behaviors, attention deficit,
            addictions, and any number of organic brain dysfunctions. Research
            suggests that many psychological disorders are best treated by a
            twofold approach — appropriate medication paired with
            psychotherapy.
          </p>
        </div>
      </section>

      <section className="bg-[#f3ede2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/pexels-photo-917486.jpg"
                alt="A reflective moment"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="A method that works"
              title="Cognitive Behavioral Therapy."
            />
            <div className="prose-warm mt-8 text-lg">
              <p>
                CBT targets the negative thought processes that exacerbate a
                depressed or anxious mood. How can anyone feel good when there
                is self-criticism and judgment as a constant internal
                conversation?
              </p>
              <p>
                CBT challenges negative self-talk and teaches cognitive
                reframing — looking at the glass as half full. Taming the
                internal critic brings greater satisfaction in a person&apos;s
                day-to-day life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <SectionHeading eyebrow="Specialties & Orientation" title="What I treat." />

        <div className="mt-12 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.28em] text-muted mb-5">
              Specialties
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-ink-soft">
              {specialties.map((s) => (
                <li key={s} className="flex gap-2">
                  <span className="text-clay">·</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-muted mb-5">
                Orientation
              </p>
              <ul className="space-y-2.5 text-ink-soft">
                {orientation.map((o) => (
                  <li key={o} className="flex gap-2">
                    <span className="text-clay">·</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-muted mb-5">
                Modality
              </p>
              <ul className="space-y-2.5 text-ink-soft">
                {modalities.map((m) => (
                  <li key={m} className="flex gap-2">
                    <span className="text-clay">·</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
