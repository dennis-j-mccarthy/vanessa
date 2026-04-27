import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative h-[68vh] min-h-[500px] max-h-[700px] w-full overflow-hidden -mt-20">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/55 to-transparent"
      />
      <div className="relative z-10 h-full flex items-end">
        <div className="mx-auto max-w-7xl w-full px-6 lg:px-10 pb-14 lg:pb-20 fade-in-up">
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.4em] text-white/80 mb-4">
              {eyebrow}
            </p>
          )}
          <h1 className="font-serif text-white text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 text-white/85 text-lg max-w-2xl leading-relaxed">
              {intro}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
