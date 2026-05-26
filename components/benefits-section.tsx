"use client";

import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion";

function OrangeLines() {
  return (
    <div className="absolute right-4 top-5 flex flex-col gap-[4px]">
      <div className="w-[2.5px] h-9 rounded-full bg-[#0041FB] opacity-90" />
      <div className="w-[2.5px] h-6 rounded-full bg-[#0041FB] opacity-55" />
      <div className="w-[2.5px] h-3 rounded-full bg-[#0041FB] opacity-28" />
    </div>
  );
}

function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#0041FB]/70 bg-[#0041FB]/18 px-3 py-1 text-[10px] font-bold tracking-[0.14em] uppercase text-[#0041FB] shadow-[0_0_12px_rgba(0,65,251,0.25)]">
      {children}
    </span>
  );
}

export default function BenefitsSection() {
  return (
    <section className="relative bg-black py-24 md:py-32 border-t border-white/[0.06] overflow-hidden">
      {/* Background glow blobs */}
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[500px] w-[600px] rounded-full bg-[#0041FB]/[0.16] blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[400px] w-[450px] rounded-full bg-[#0041FB]/[0.12] blur-[110px]" />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">

        {/* Section header */}
        <motion.div {...fadeUp(0)} className="mb-14 text-center">
          <span className="blue-dot-label mb-4 justify-center">
            WAS STARKE COPY FÜR DICH LEISTET
          </span>
          <h2 className="font-heading text-[36px] md:text-[52px] lg:text-[60px] font-black leading-[1.05] tracking-[-0.035em] text-white">
            Deine Website sollte nicht nur existieren –<br className="hidden md:block" /> sie sollte arbeiten.
          </h2>
          <p className="mx-auto mt-5 max-w-[540px] text-[15px] leading-[1.65] text-white/45">
            Das passiert, wenn{" "}
            <span className="text-white/75 font-medium">dein digitaler Auftritt</span>{" "}
            endlich das tut, wofür er da ist:
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

          {/* W1 — Mehr qualifizierte Anfragen */}
          <motion.div
            {...fadeUp(0.05)}
            className="glass-card fine-dark-border relative overflow-hidden rounded-2xl p-7"
          >
            <OrangeLines />
            <div className="mb-4">
              <Tag>01</Tag>
            </div>
            <h3 className="font-heading text-[21px] font-black leading-[1.2] tracking-[-0.02em] text-white pr-10">
              Mehr qualifizierte Anfragen mit gleichem Budget
            </h3>
            <p className="mt-3 text-[13px] leading-[1.7] text-white/45 max-w-[420px]">
              Du schaltest dieselben Ads, hast dieselbe Landing Page, aber kaum qualifizierte
              Anfragen. Der Fehler liegt selten am Kanal – sondern an der Botschaft. Wenn deine
              Copy klar macht, wen du abholen willst, ändert sich das Ergebnis fast automatisch.
            </p>
            {/* Bar chart visual */}
            <div className="mt-8 space-y-2">
              {[
                { w: "100%", active: true },
                { w: "72%",  active: false },
                { w: "56%",  active: false },
                { w: "38%",  active: false },
              ].map((bar, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="h-[5px] rounded-full"
                    style={{
                      width: bar.w,
                      background: bar.active
                        ? "linear-gradient(90deg, #0041FB 0%, rgba(0,65,251,0.4) 100%)"
                        : "rgba(255,255,255,0.10)",
                    }}
                  />
                </div>
              ))}
              <p className="mt-1 text-[10px] uppercase tracking-widest text-white/20">
                Anfragen-Qualität
              </p>
            </div>
          </motion.div>

          {/* W2 — Höhere Preise */}
          <motion.div
            {...fadeUp(0.1)}
            className="glass-card fine-dark-border relative overflow-hidden rounded-2xl p-7"
          >
            <OrangeLines />
            <div className="mb-4">
              <Tag>02</Tag>
            </div>
            <h3 className="font-heading text-[21px] font-black leading-[1.2] tracking-[-0.02em] text-white pr-10">
              Höhere Preise ohne Erklärungsaufwand
            </h3>
            <p className="mt-3 text-[13px] leading-[1.7] text-white/45">
              Wenn deine Interessenten die richtige Botschaft verstehen, hinterfragen sie den
              Preis seltener. Du erhöhst dein Angebot – und findest diesen Schritt deutlich
              seltener abgelehnt. Dein Wert spricht für sich.
            </p>
            {/* Dark panel visual */}
            <div className="mt-7 rounded-xl border border-white/[0.07] bg-black/50 p-4 space-y-2">
              <div className="flex items-center justify-between text-[11px] text-white/30">
                <span>Preiseinwände</span>
                <span className="text-[#0041FB]">↓ 68%</span>
              </div>
              <div className="h-[4px] w-full rounded-full bg-white/10">
                <div className="h-full w-[32%] rounded-full bg-[#0041FB]/60" />
              </div>
              <div className="flex items-center justify-between text-[11px] text-white/30">
                <span>Abschlussrate</span>
                <span className="text-[#0041FB]">↑ 41%</span>
              </div>
              <div className="h-[4px] w-full rounded-full bg-white/10">
                <div className="h-full w-[74%] rounded-full bg-[#0041FB]/60" />
              </div>
            </div>
          </motion.div>

          {/* W3 — 7.500 € Metric */}
          <motion.div
            {...fadeUp(0.15)}
            className="glass-card fine-dark-border relative overflow-hidden rounded-2xl p-7 flex flex-col justify-center"
          >
            <OrangeLines />
            {/* Glow behind metric */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0041FB]/30 blur-[70px]" />
            <div className="relative">
              <p className="font-heading text-[58px] font-black leading-none tracking-[-0.04em] text-white">
                7.500 €
              </p>
              <p className="mt-2 text-[12px] uppercase tracking-[0.12em] text-white/35">
                Ø Projektvolumen
              </p>
              <p className="mt-4 text-[12px] leading-[1.65] text-white/40">
                Starke Positionierung erlaubt höhere Preise – ohne Rechtfertigung.
              </p>
            </div>
          </motion.div>

          {/* W4 — Vorverkauf */}
          <motion.div
            {...fadeUp(0.2)}
            className="glass-card fine-dark-border relative overflow-hidden rounded-2xl p-7"
          >
            <OrangeLines />
            <div className="mb-4">
              <Tag>03</Tag>
            </div>
            <h3 className="font-heading text-[21px] font-black leading-[1.2] tracking-[-0.02em] text-white pr-10">
              Vorverkauf, bevor du ein Wort sagst
            </h3>
            <p className="mt-3 text-[13px] leading-[1.7] text-white/45">
              Dein Interessent kennt dich bereits durch Inhalte. Er hat Einwände geklärt, bevor
              er fragt. Er kommt vorbereitet – du bestätigst nur noch.
            </p>
            {/* Wavy SVG */}
            <div className="mt-7">
              <svg viewBox="0 0 240 56" className="w-full h-14" fill="none">
                <path
                  d="M0 28 C30 8, 60 48, 90 28 S150 8, 180 28 S210 48, 240 28"
                  stroke="#0041FB"
                  strokeWidth="2"
                  strokeOpacity="0.7"
                  strokeLinecap="round"
                />
                <path
                  d="M0 36 C30 16, 60 56, 90 36 S150 16, 180 36 S210 56, 240 36"
                  stroke="#0041FB"
                  strokeWidth="1"
                  strokeOpacity="0.25"
                  strokeLinecap="round"
                />
              </svg>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-white/20">
                PRE-SELL · ABSCHLUSS
              </p>
            </div>
          </motion.div>

          {/* W5 — Mehr Zeit (full width) */}
          <motion.div
            {...fadeUp(0.25)}
            className="glass-card fine-dark-border relative overflow-hidden rounded-2xl p-7 lg:col-span-2"
          >
            <OrangeLines />
            <div className="flex flex-col lg:flex-row lg:gap-16">
              <div className="lg:w-1/2">
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex items-center rounded-full border border-[#0041FB]/70 bg-[#0041FB]/18 px-3 py-1 text-[11px] font-bold tracking-wider text-[#0041FB] shadow-[0_0_12px_rgba(0,65,251,0.25)]">
                    24/7
                  </span>
                </div>
                <h3 className="font-heading text-[21px] font-black leading-[1.2] tracking-[-0.02em] text-white">
                  Mehr Zeit für dein Kerngeschäft
                </h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-white/45 max-w-[400px]">
                  Du hörst auf, jede Woche neu darüber nachzudenken, was du posten oder schreiben
                  sollst. Dein Funnel läuft. Deine E-Mails laufen. Du konzentrierst dich auf
                  Vertrieb, Teamaufbau und neue Strategieentwicklung.
                </p>
              </div>
              {/* Progress bars visual */}
              <div className="mt-8 lg:mt-0 lg:w-1/2 flex flex-col justify-center space-y-4">
                {[
                  { label: "Qualifizierte Anfragen", pct: 82 },
                  { label: "Content-Aufwand",        pct: 28 },
                  { label: "Abschlussrate",          pct: 74 },
                  { label: "Empfehlungen",           pct: 61 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="mb-1 flex justify-between text-[11px] text-white/35">
                      <span>{item.label}</span>
                      <span className="text-[#0041FB]">{item.pct}%</span>
                    </div>
                    <div className="h-[5px] w-full rounded-full bg-white/[0.08]">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${item.pct}%`,
                          background: "linear-gradient(90deg, #0041FB 0%, rgba(0,65,251,0.45) 100%)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* W6 — Stärkere Positionierung */}
          <motion.div
            {...fadeUp(0.3)}
            className="glass-card fine-dark-border relative overflow-hidden rounded-2xl p-7"
          >
            <OrangeLines />
            <div className="mb-4">
              <Tag>04</Tag>
            </div>
            <h3 className="font-heading text-[21px] font-black leading-[1.2] tracking-[-0.02em] text-white pr-10">
              Stärkere Positionierung gegenüber dem Wettbewerb
            </h3>
            <p className="mt-3 text-[13px] leading-[1.7] text-white/45">
              Während die anderen generische Texte schreiben, klingen deine präziser,
              unverwechselbar. Deine Zielgruppe spürt sofort, wer sie wirklich versteht.
            </p>
            {/* Comparison bars */}
            <div className="mt-7 space-y-3">
              <div>
                <div className="mb-1 flex justify-between text-[11px] text-white/30">
                  <span>Deine Positionierung</span>
                  <span className="text-[#0041FB]">78%</span>
                </div>
                <div className="h-[5px] w-full rounded-full bg-white/[0.08]">
                  <div className="h-full w-[78%] rounded-full bg-[#0041FB]" />
                </div>
              </div>
              <div>
                <div className="mb-1 flex justify-between text-[11px] text-white/30">
                  <span>Branchendurchschnitt</span>
                  <span className="text-white/40">31%</span>
                </div>
                <div className="h-[5px] w-full rounded-full bg-white/[0.08]">
                  <div className="h-full w-[31%] rounded-full bg-white/25" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* W7 — Kundenergebnisse / Verlängerungen */}
          <motion.div
            {...fadeUp(0.35)}
            className="glass-card fine-dark-border relative overflow-hidden rounded-2xl p-7"
          >
            <OrangeLines />
            {/* RENEW label + wavy visual */}
            <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.22em] text-[#0041FB]/70">
              RENEW · REFER · REPEAT
            </p>
            <svg viewBox="0 0 200 48" className="h-12 w-full" fill="none">
              <path
                d="M10 38 C30 10, 60 38, 90 24 C110 14, 130 42, 160 24 C175 16, 185 28, 196 22"
                stroke="#0041FB"
                strokeWidth="2.5"
                strokeOpacity="0.75"
                strokeLinecap="round"
              />
              <circle cx="10"  cy="38" r="3.5" fill="#0041FB" fillOpacity="0.6" />
              <circle cx="90"  cy="24" r="3.5" fill="#0041FB" fillOpacity="0.6" />
              <circle cx="196" cy="22" r="3.5" fill="#0041FB" fillOpacity="0.6" />
            </svg>
            <p className="mt-3 text-[12px] font-semibold text-[#0041FB]">
              → Verlängerungen
            </p>
            <h3 className="mt-4 font-heading text-[21px] font-black leading-[1.2] tracking-[-0.02em] text-white pr-10">
              Kundenergebnisse, die Verlängerungen sichern
            </h3>
            <p className="mt-3 text-[13px] leading-[1.7] text-white/45">
              Stärkere Copy bedeutet bessere Kundenergebnisse. Bessere Ergebnisse bedeuten
              Verlängerungen, Empfehlungen und einen Ruf, der sich selbst aufbaut.
            </p>
          </motion.div>

        </div>

        {/* CTA Button */}
        <motion.div {...fadeUp(0.4)} className="mt-12 flex justify-center">
          <a
            href="https://calendly.com/maxdalke233/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="blue-button rounded-full px-8 py-4 text-[13px] font-extrabold tracking-[0.12em] uppercase text-white hover:scale-[1.03] transition-all duration-200 inline-block"
          >
            Jetzt kostenloses Erstgespräch sichern
          </a>
        </motion.div>

      </div>
    </section>
  );
}
