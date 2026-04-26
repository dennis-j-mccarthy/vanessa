export function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.32em] text-clay mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl md:text-5xl text-ink leading-[1.1] max-w-3xl">
        {title}
      </h2>
      <div
        className={`section-rule mt-6 ${align === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
}
