export default function CtaSection() {
  return (
    <section className="bg-white pt-12 pb-28 md:pt-14 md:pb-36">
      <div className="mx-auto max-w-[900px] px-6 text-center">

        {/* Pill */}
        <div className="flex justify-center mb-8">
          <span className="rounded-full border border-[#ff5000]/50 bg-[#ff5000]/10 backdrop-blur-sm px-5 py-2 text-[10px] font-bold tracking-[0.12em] uppercase text-[#ff5000] shadow-[0_4px_24px_rgba(255,80,0,0.25)] text-center leading-[1.8] max-w-[260px]">
            Bereit für mehr Anfragen? Deine Konkurrenz schläft nicht.
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-heading text-[38px] md:text-[56px] lg:text-[64px] font-black leading-[1.04] tracking-[-0.03em] text-black mb-7">
          Dein bester Verkäufer arbeitet 24/7. Und du hast ihn noch nicht eingestellt. Lass uns das ändern.
        </h2>

        {/* Subtext */}
        <p className="text-[16px] md:text-[17px] leading-[1.7] text-black/65 max-w-[620px] mx-auto mb-10">
          Konzentrier dich auf dein Business – während deine neue Website im Hintergrund{" "}
          <strong className="text-black/85">Vertrauen aufbaut und Kunden gewinnt.</strong>{" "}
          Ganz ohne Kaltakquise.
        </p>

        {/* CTA Button */}
        <a
          href="https://calendly.com/maxdalke233/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="orange-button rounded-xl px-12 py-4 text-[13px] font-extrabold tracking-[0.08em] uppercase text-white hover:scale-[1.02] transition-all duration-200 inline-block"
          style={{ boxShadow: "0 8px 40px rgba(255,80,0,0.45), 0 2px 12px rgba(255,80,0,0.30)" }}
        >
          Jetzt kostenloses Erstgespräch sichern
        </a>

      </div>
    </section>
  );
}
