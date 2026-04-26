import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CallToAction } from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Marriage Counseling",
  description:
    "Healthy relationships rest on skills. Communication, empathy, and play — rebuilt together.",
};

const tips = [
  {
    n: "01",
    title: "Develop yourself as a person.",
    body: "Don't depend on your spouse for your identity. Read, listen to music, have lunch on your own or with a friend, find a niche, career, hobby, or interest. Be yourself. Develop yourself.",
  },
  {
    n: "02",
    title: "Maintain good boundaries with each other.",
    body: "Put each other first (after yourself, of course) — before others, even family of origin. This is a huge issue in many relationships: confusion of allegiances. If you don't know how, ask your spouse what makes them feel like a priority. Then do it.",
  },
  {
    n: "03",
    title: "Learn some communication skills.",
    body: "Don't take for granted that you know how to communicate. Practice active listening — not interrupting, counterpointing, correcting, or defending — but hearing, understanding, and validating. Try walking that metaphoric mile in your partner's moccasins. That is empathic listening.",
  },
  {
    n: "04",
    title: "Be willing to share common interests.",
    body: "Even if you have to acquire a taste for your partner's interests — stretch yourself. And have an interest or two of your own to share. Be a gracious date — open and ready to have fun.",
  },
  {
    n: "05",
    title: "Accept your partner for who they are.",
    body: "If you married them, remember why. They are probably still that same person — you just might have changed the rules or your opinion. Practice acceptance instead of criticism. Encourage rather than find fault.",
  },
  {
    n: "06",
    title: "Admit when you're wrong.",
    body: "Apologize. Forgive in the real sense. Be willing to hear your partner's issue with you. Try to understand where they are coming from. Come back later to discuss after consideration of their words.",
  },
  {
    n: "07",
    title: "Be tender with each other.",
    body: "Be gentle. The world can be harsh. Be a safe place to land for each other.",
  },
  {
    n: "08",
    title: "Honor each other in intimacy.",
    body: "Don't be greedy. Don't withhold out of anger or punishment or manipulation. Cherish each other — and let yourselves grow old together. It's okay not to be twenty-five forever.",
  },
  {
    n: "09",
    title: "Stay healthy and fit.",
    body: "Take care of yourself, your body, mind, and spirit. Look nice — even if you stay home. Be comfortable but not slouchy. Like the way you look. Chances are your partner will, too.",
  },
  {
    n: "10",
    title: "Cultivate friendships together.",
    body: "Having fun with friends together is renewing. Laughter is healing — it actually makes you live longer. Don't take yourself or your life so seriously. Find solutions to problems — ask for help if needed. Help each other. Be each other's friend.",
  },
];

export default function MarriagePage() {
  return (
    <>
      <PageHero
        eyebrow="Marriage Counseling"
        title="A fresh approach to loving well."
        intro="Healthy relationships are built on skills — and the good news is, skills can be learned and improved upon."
        image="/images/pexels-photo-1024960.jpg"
        imageAlt="Soft natural light through trees"
      />

      <section className="mx-auto max-w-3xl px-6 lg:px-10 py-24">
        <SectionHeading
          eyebrow="The work"
          title="Loving connection, rebuilt."
        />
        <div className="prose-warm mt-10 text-lg">
          <p>
            Relationship therapy is focused on identifying your needs and those
            of your spouse or partner, identifying the behaviors that diminish
            loving connection, and building a good set of relationship skills.
          </p>
          <p>
            These skills include communication, conflict resolution, active
            listening, empathic connectedness — and remembering how to play.
          </p>
        </div>
      </section>

      <section className="bg-[#f3ede2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="Practical wisdom"
              title="Ten tips for a healthy relationship."
            />
            <p className="mt-6 text-ink-soft text-lg leading-relaxed max-w-2xl">
              From years of work with couples — small habits that, practiced
              steadily, change everything.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
            {tips.map((t) => (
              <article
                key={t.n}
                className="rounded-2xl bg-surface border border-line/70 p-8 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-serif text-4xl text-clay/70 leading-none">
                    {t.n}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-ink leading-snug">
                    {t.title}
                  </h3>
                </div>
                <p className="mt-4 text-ink-soft leading-relaxed">{t.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="When to reach out"
            title="If any of these tips feel foreign."
          />
          <div className="prose-warm mt-8 text-lg max-w-2xl">
            <p>
              If any of these feel completely foreign or simply not doable,
              perhaps it&apos;s time to seek professional help — to figure out
              what your personal obstacles to loving, or being loved, happen to
              be.
            </p>
            <p>
              I work with couples at all stages: newly partnered, decades in,
              healing from rupture, or simply wanting to love each other better.
            </p>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="relative aspect-[5/6] rounded-2xl overflow-hidden">
            <Image
              src="/images/2-paths.jpg"
              alt="Two paths diverging through grass"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <CallToAction
        title="Schedule a couples consultation."
        body="Bring what's hard. We'll begin with a conversation, and build from there."
      />
    </>
  );
}
