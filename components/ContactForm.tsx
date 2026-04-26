"use client";

import { useState } from "react";

const SERVICES = [
  "Not sure yet",
  "One-to-One Therapy",
  "Marriage Counseling",
  "Life Coaching",
  "Integrated Spirituality",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = encodeURIComponent(String(data.get("name") || ""));
    const service = encodeURIComponent(String(data.get("service") || ""));
    const message = encodeURIComponent(String(data.get("message") || ""));
    const phone = String(data.get("phone") || "");
    const subject = `Consultation request — ${decodeURIComponent(service) || "general"}`;
    const body = `Hi Vanessa,%0D%0A%0D%0AMy name is ${name}.%0D%0APhone: ${phone}%0D%0AService of interest: ${service}%0D%0A%0D%0A${message}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-7 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name" name="name" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>
      <Field label="Email" name="email" type="email" required />

      <div>
        <label className="block text-xs uppercase tracking-[0.24em] text-muted mb-2">
          Service of interest
        </label>
        <select
          name="service"
          defaultValue="Not sure yet"
          className="w-full rounded-lg border border-line bg-background px-4 py-3 text-ink focus:outline-none focus:border-clay transition-colors"
        >
          {SERVICES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-[0.24em] text-muted mb-2">
          What brings you here?
        </label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border border-line bg-background px-4 py-3 text-ink focus:outline-none focus:border-clay transition-colors resize-y"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-clay text-white text-sm hover:bg-clay-deep transition-colors"
      >
        Send message
      </button>

      {submitted && (
        <p className="text-sm text-sage-deep">
          Your email client should open in a moment. If it doesn&apos;t, please
          call directly at 719-651-7587.
        </p>
      )}

      <p className="text-xs text-muted">
        Form opens your default email client to complete sending. Prefer to
        call?{" "}
        <a
          href="tel:+17196517587"
          className="text-clay link-underline"
        >
          719-651-7587
        </a>
        .
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.24em] text-muted mb-2">
        {label}
        {required && <span className="text-clay ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-lg border border-line bg-background px-4 py-3 text-ink focus:outline-none focus:border-clay transition-colors"
      />
    </div>
  );
}
