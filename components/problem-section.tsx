export default function ProblemSection() {
  return (
    <section className="bg-[#f6ede4] py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">

        {/* Pill badge */}
        <div className="flex justify-center mb-8">
          <span className="rounded-full border border-[#0041FB]/60 bg-[#0041FB]/15 backdrop-blur-md px-4 py-1.5 text-[11px] font-bold tracking-[0.12em] uppercase text-black shadow-[0_4px_24px_rgba(0,65,251,0.40),inset_0_1px_0_rgba(255,255,255,0.15)]">
            Die Realität
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-heading text-[34px] md:text-[50px] lg:text-[58px] font-black leading-[1.05] tracking-[-0.03em] text-black text-center mx-auto max-w-[860px] mb-8">
          Fast alle hochpreisigen Dienstleister bleiben auf lange Sicht im
          Teufelskreislauf der stagnierenden Umsätze und der ewigen
          Vergleichbarkeit
        </h2>

        {/* Subtext */}
        <p className="text-center text-[16px] text-black/55 mb-14">
          Nur <strong className="text-black/80">ein Bruchteil schafft es</strong> an die Marktspitze:
        </p>

        {/* 3 schwarze Phone-Mockups */}
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="rounded-[32px] bg-black"
              style={{ aspectRatio: "9 / 19.5" }}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-black/10" />

        {/* Centered body copy with inline italic quote */}
        <p className="text-[15px] md:text-[16px] leading-[1.75] text-black/70 text-center max-w-[680px] mx-auto py-10">
          Als Experte bist du oftmals{" "}
          <span className="italic font-semibold text-[#0034C8]">
            „viel zu nah an deinem Angebot dran"
          </span>
          . Ohne einen externen Blick von außen ist es unfassbar schwer,
          eigene Marketing-Botschaften zu entwickeln.
        </p>

        {/* Divider */}
        <div className="border-t border-black/10" />

        {/* CTA Button */}
        <div className="flex justify-center mt-10">
          <a
            href="https://calendly.com/maxdalke233/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="blue-button rounded-full px-16 py-5 text-[17px] font-extrabold text-white flex items-center gap-3 hover:scale-[1.03] transition-all duration-200"
            style={{ boxShadow: "0 12px 50px rgba(0,65,251,0.55), 0 3px 16px rgba(0,65,251,0.35)" }}
          >
            Jetzt kostenloses Erstgespräch sichern — ohne Risiko
            <span style={{ fontSize: "19px" }}>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
