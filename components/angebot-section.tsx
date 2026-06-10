"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion";

const KONTAKT_EMAIL = "info@copystudio.media";
const WHATSAPP_URL = "https://wa.me/4915906744569";
const CALENDLY_URL = "https://calendly.com/maxdalke233/30min";

type Offer = {
  name: string;
  tagline: string;
  price: string;
  priceSuffix: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  gradient?: boolean;
  badge?: string;
};

/* Platzhalter-Preise & -Leistungen — frei anpassbar */
const offers: Offer[] = [
  {
    name: "Website-Paket",
    tagline: "Dein professioneller Auftritt — einmalig umgesetzt.",
    price: "600 – 1.400 €",
    priceSuffix: "einmalig",
    features: [
      "Individuelles Design & Copywriting",
      "Bis zu 5 Seiten, voll responsiv",
      "SEO-Grundoptimierung",
      "Kontaktformular & Google-Maps",
      "Live in 2–3 Wochen",
    ],
    cta: "Erstgespräch sichern",
    gradient: true,
    badge: "Im letzten Monat 4× gekauft",
  },
  {
    name: "Betreuung",
    tagline: "Optional zum Website-Paket dazubuchen — damit dein Auftritt dauerhaft läuft und wächst.",
    price: "ab 75 €",
    priceSuffix: "/ Monat",
    features: [
      "Eigene Domain — deine Website dauerhaft online",
      "Laufende Pflege & Updates",
      "Monatliche SEO-Optimierung",
      "Content- & Text-Anpassungen",
      "Persönlicher Ansprechpartner",
    ],
    cta: "Beratung anfragen",
    highlighted: true,
  },
];

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2255EE"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-[2px] shrink-0"
      aria-hidden="true"
    >
      <path d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

function OfferCard({ offer, i }: { offer: Offer; i: number }) {
  const { highlighted, gradient, badge } = offer;
  return (
    <motion.div
      {...fadeUp(0.12 + i * 0.1)}
      className="relative flex flex-col rounded-2xl p-7 md:p-8"
      style={{
        background: gradient
          ? "linear-gradient(160deg, rgba(0,65,251,0.28) 0%, rgba(0,47,168,0.12) 42%, #0c0c0c 100%)"
          : highlighted
            ? "#181818"
            : "#111111",
        border: gradient
          ? "1px solid rgba(0,65,251,0.40)"
          : highlighted
            ? "1px solid rgba(0,65,251,0.55)"
            : "1px solid rgba(255,255,255,0.09)",
        boxShadow: gradient
          ? "0 0 32px rgba(0,65,251,0.22), 0 24px 60px rgba(0,0,0,0.55)"
          : highlighted
            ? "0 0 32px rgba(0,65,251,0.30), 0 24px 60px rgba(0,0,0,0.55)"
            : "0 16px 50px rgba(0,0,0,0.45)",
      }}
    >
      {badge && (
        <span className="absolute -top-[14px] right-5 flex items-center gap-1.5 whitespace-nowrap rounded-full border border-white/15 bg-[#0c0c0c] px-3 py-1.5 text-[10px] font-bold tracking-[0.04em] text-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34d399] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#34d399]" />
          </span>
          {badge}
        </span>
      )}
      {highlighted && (
        <span className="absolute -top-[18px] left-1/2 -translate-x-1/2 flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[#0041FB] px-4 py-1.5 text-[10px] font-bold tracking-[0.14em] uppercase text-white shadow-[0_4px_16px_rgba(0,65,251,0.5)]">
          Dazubuchen
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </span>
      )}

      <h3 className="font-heading text-[22px] font-black tracking-[-0.01em] text-white">
        {offer.name}
      </h3>
      <p className="mt-2 text-[13.5px] leading-[1.6] text-white/50">
        {offer.tagline}
      </p>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-heading text-[34px] font-black tracking-[-0.02em] text-white">
          {offer.price}
        </span>
        <span className="text-[13px] font-medium text-white/40">
          {offer.priceSuffix}
        </span>
      </div>

      <div className="my-6 h-px w-full bg-white/[0.08]" />

      <ul className="flex flex-col gap-3.5">
        {offer.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-[14px] leading-[1.5] text-white/75">
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={
          highlighted
            ? "blue-button mt-8 rounded-xl px-6 py-3.5 text-center text-[13px] font-extrabold tracking-[0.06em] uppercase text-white transition-all duration-200 hover:scale-[1.02]"
            : "mt-8 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-center text-[13px] font-extrabold tracking-[0.06em] uppercase text-white transition-all duration-200 hover:bg-white/[0.08]"
        }
        style={
          highlighted
            ? { boxShadow: "0 8px 40px rgba(0,65,251,0.45), 0 2px 12px rgba(0,65,251,0.30)" }
            : undefined
        }
      >
        {offer.cta}
      </a>
    </motion.div>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = `Anfrage über die Website${name ? ` – ${name}` : ""}`;
    const body = [
      `Name: ${name}`,
      `E-Mail: ${email}`,
      "",
      "Nachricht:",
      message,
    ].join("\n");
    window.location.href = `mailto:${KONTAKT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-[14px] text-white placeholder:text-white/30 outline-none transition-colors duration-200 focus:border-[#0041FB]/70 focus:bg-white/[0.06]";

  return (
    <motion.div
      {...fadeUp(0.18)}
      className="mx-auto mt-16 w-full max-w-[640px]"
    >
      <div
        className="rounded-2xl p-7 md:p-9"
        style={{
          background: "#111111",
          border: "1px solid rgba(255,255,255,0.09)",
          boxShadow: "0 16px 50px rgba(0,0,0,0.45)",
        }}
      >
        <h3 className="font-heading text-[22px] font-black tracking-[-0.01em] text-white text-center">
          Noch Fragen? Schreib uns.
        </h3>
        <p className="mt-2 mb-7 text-center text-[13.5px] leading-[1.6] text-white/50">
          Wir melden uns in der Regel innerhalb von 24&nbsp;Stunden.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              required
              placeholder="Dein Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
            />
            <input
              type="email"
              required
              placeholder="Deine E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
            />
          </div>
          <textarea
            required
            placeholder="Deine Nachricht"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${inputClass} resize-none`}
          />
          <button
            type="submit"
            className="blue-button mt-1 rounded-xl px-6 py-4 text-[13px] font-extrabold tracking-[0.08em] uppercase text-white transition-all duration-200 hover:scale-[1.01]"
            style={{ boxShadow: "0 8px 40px rgba(0,65,251,0.45), 0 2px 12px rgba(0,65,251,0.30)" }}
          >
            Nachricht senden
          </button>
        </form>

        <p className="mt-5 text-center text-[12.5px] text-white/40">
          Lieber direkt?{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#4d7bff] hover:text-[#6f96ff] transition-colors duration-200"
          >
            Schreib uns auf WhatsApp
          </a>
        </p>
      </div>
    </motion.div>
  );
}

export default function AngebotSection() {
  return (
    <section className="bg-black pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="mx-auto max-w-[1000px] px-6 md:px-10 lg:px-16">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="flex justify-center mb-7">
          <span className="inline-flex items-center rounded-full border border-white/25 bg-white/[0.06] px-4 py-1.5 text-[10px] font-bold tracking-[0.14em] uppercase text-white">
            Angebote
          </span>
        </motion.div>

        <motion.h2
          {...fadeUp(0.06)}
          className="text-center font-heading text-[32px] md:text-[46px] lg:text-[54px] font-black leading-[1.06] tracking-[-0.03em] text-white max-w-[640px] mx-auto"
        >
          Such dir aus, wie wir zusammenarbeiten
        </motion.h2>

        <motion.p
          {...fadeUp(0.1)}
          className="mt-5 text-center text-[15px] leading-[1.7] text-white/55 max-w-[480px] mx-auto"
        >
          Zwei klare Wege zu deiner neuen Website — ohne versteckte Kosten,
          ohne Agentur-Overhead.
        </motion.p>

        {/* Offer cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[820px] mx-auto">
          {offers.map((offer, i) => (
            <OfferCard key={offer.name} offer={offer} i={i} />
          ))}
        </div>

        {/* Contact form */}
        <ContactForm />

      </div>
    </section>
  );
}
