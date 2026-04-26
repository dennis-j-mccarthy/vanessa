import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CallToAction } from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Life Coaching",
  description:
    "A step-by-step therapeutic conversation to rediscover your dreams and bring them to fruition.",
};

const prompts = [
  "Need to be recognized at your job?",
  "Want to start a business?",
  "Have a book in you waiting to be written?",
  "Is there a dream you have yet to fulfill?",
];

export default function CoachingPage() {
  return (
    <>
      <PageHero
        eyebrow="Life Coaching"
        title="A dynamic program to help you soar."
        intro="Life coaching is creating a plan and actualizing it — step by step, in therapeutic conversation."
        image="/images/pexels-photo-3094218.jpg"
        imageAlt="Climbing a sunlit path"
      />

      <section className="mx-auto max-w-3xl px-6 lg:px-10 py-24">
        <SectionHeading
          eyebrow="Where you are"
          title="Ever wish someone would lend direction?"
        />
        <ul className="mt-10 space-y-3 text-lg text-ink">
          {prompts.map((p) => (
            <li
              key={p}
              className="flex gap-4 items-baseline border-b border-line/70 pb-3"
            >
              <span className="font-serif text-clay">—</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <div className="prose-warm mt-10 text-lg">
          <p>
            By utilizing the therapeutic relationship, we will explore the
            obstacles to actualizing your life&apos;s dream, and how to accept
            full responsibility for all outcomes. You will see your dreams come
            to fruition.
          </p>
        </div>
      </section>

      <section className="bg-[#f3ede2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/if-not-now-when-inspirational-mixed-media-folk-art-stanka-vukelic-300x300-1.jpg"
                alt="If not now, when — folk art"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Reach for your dreams"
              title="Inflight corrections."
            />
            <div className="prose-warm mt-8 text-lg">
              <p>
                As children we make many plans for our lives. We want to be
                firefighters, ballerinas, marine biologists, teachers. It&apos;s
                natural to move away from these childlike musings as we
                mature.
              </p>
              <p>
                But sometimes we move <em>too</em> far away from the dreams of
                our younger selves. Sometimes we come to believe our dreams are
                unattainable, and we follow alternate routes to adulthood
                because we cease to believe in ourselves. Sometimes a series of
                inflight corrections is in order.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 lg:px-10 py-24">
        <SectionHeading
          eyebrow="The destination"
          title="Rediscover your bliss."
        />
        <div className="prose-warm mt-10 text-lg">
          <p>
            Life coaching is the process of rediscovering — or uncovering — the
            plan for your life that may have gotten lost somewhere along the
            way. Rediscovering what was lost is the first step to getting back
            on track.
          </p>
          <p>
            Self-actualizing and achieving those goals leads to a deeper
            connection to meaningfulness — and ultimately, a happier life.
          </p>
        </div>
        <blockquote className="mt-14 border-l-2 border-clay pl-6 py-2">
          <p className="font-serif text-2xl md:text-3xl text-ink leading-snug italic">
            &ldquo;Follow your bliss. When you love what you do and you&apos;re
            on track — you never &lsquo;work&rsquo; a day in your life.&rdquo;
          </p>
          <footer className="mt-4 text-sm uppercase tracking-[0.28em] text-muted">
            Joseph Campbell
          </footer>
        </blockquote>
      </section>

      <CallToAction
        title="Begin your plan."
        body="Book a consultation. We'll start mapping the road from where you are to where you're meant to be."
      />
    </>
  );
}
