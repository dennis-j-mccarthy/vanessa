import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CallToAction } from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Integrated Spirituality",
  description:
    "A conversation that honors your worth, your path, and your relationship with all things spiritual — across traditions.",
};

export default function SpiritualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Integrated Spirituality"
        title="The thread of truth that runs through all paths."
        intro="A conversation that incorporates higher awareness of your worth, your path, and your relationship with All Things Spiritual."
        image="/images/braid-background-woven-rubber-bands-159049-1.jpg"
        imageAlt="Woven threads as a metaphor for connection"
      />

      <section className="mx-auto max-w-3xl px-6 lg:px-10 py-24">
        <SectionHeading
          eyebrow="What it is"
          title="Living a quality."
        />
        <div className="prose-warm mt-10 text-lg">
          <p>
            Living a quality can be a challenge. Maintaining a close spiritual
            connection sometimes ceases to be a priority in the busyness of
            living. Regardless of what your spiritual path is called,
            integrating the values of your path can be rewarding work.
          </p>
          <p>
            Creating a conversation that incorporates higher awareness of your
            worth, your path, and your relationship with All Things Spiritual
            proves to be not only exhilarating but liberating. Unconditional
            love is a worthy goal — starting with loving yourself, then your
            neighbor.
          </p>
        </div>
      </section>

      <section className="bg-[#f3ede2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/int-spirit.jpg"
                alt="A figure in quiet contemplation"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Background"
              title="A common thread of truth."
            />
            <div className="prose-warm mt-8 text-lg">
              <p>
                Having been born and raised in the Deep South, I was immersed
                in Christian theology — eventually obtaining my undergraduate
                degree from Mississippi College, a private Christian
                university. But in a Comparative Religions class, I began to
                feel that there is a thread of truth that runs through all
                religions.
              </p>
              <p>
                There is much similarity, not only in concepts, but also in
                the stories passed down in holy books that help keep alive the
                faith of followers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 lg:px-10 py-24">
        <div className="prose-warm text-lg">
          <p>
            Did you know that the birth story of Siddhartha is comparable to
            the birth story of Jesus, that many religions explore the concept
            of the afterlife, and that there are teachers and disciples of
            teachers in many world religions?
          </p>
          <p>
            For example, Kwan Yin — the Bodhisattva of Compassion — vowed not
            to leave this plane of existence until each and every human being
            was beyond the pain and suffering of physical life. And, of course,
            Jesus Christ&apos;s teachings about love continue to challenge us
            to love one another as God is Love, and to be non-judgmental with
            our fellow human beings — the greatest lesson in compassion.
          </p>
        </div>
      </section>

      <section className="relative py-28 lg:py-36 overflow-hidden">
        <Image
          src="/images/pexels-photo-289586.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center text-white">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70 mb-6">
            An Integrated Spirituality
          </p>
          <p className="font-serif text-2xl md:text-4xl leading-[1.25]">
            Integrating spiritual values and implementing them in your everyday
            life brings greater happiness, meaningfulness, and connection — not
            only to who you are as a Spiritual Being, but as a Human Being: a
            husband, a wife, a sister, a brother, a parent, a neighbor, a
            friend, a member of humanity.
          </p>
          <p className="mt-8 font-serif text-xl md:text-2xl italic text-white/90">
            Isn&apos;t this what we as individuals need? Isn&apos;t this what
            the world needs?
          </p>
        </div>
      </section>

      <CallToAction
        title="Begin the conversation."
        body="Whatever your tradition — or none at all — there is room here for the questions that matter most."
      />
    </>
  );
}
