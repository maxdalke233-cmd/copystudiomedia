"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const discounterItems = [
  "Deine Website sieht aus wie tausend andere",
  "Auf dem Handy funktioniert die Hälfte nicht",
  "Du erklärst dein Angebot perfekt im Gespräch, aber online versteht es keiner",
  "Du zahlst einmal, bekommst eine Seite – und dann hörst du nie wieder was",
  "Kunden googeln dich und klicken direkt wieder weg",
  "Billig gebaut, teuer bezahlt – durch verlorene Kunden",
];

const copystudioItems = [
  "Ein Auftritt, der sofort zeigt wer du bist und was dich unterscheidet",
  "Perfekt auf jedem Gerät – Handy, Tablet, Desktop",
  "Deine Website erklärt dein Angebot so klar, dass der Kunde schon überzeugt anruft",
  "Langfristiger Partner, der deine Website weiterentwickelt statt zu verschwinden",
  "Kunden finden dich bei Google und bleiben – weil Vertrauen sofort da ist",
  "Eine Investition, die sich durch neue Anfragen selbst bezahlt",
];


const HEADLINE =
  "Die teuerste Stunde in deinem Unternehmen ist die, in der ein potenzieller Kunde deine schlechte Website sieht";
const STEP = 0.07;
const FLASH = 1.6;
const REPEAT_DELAY = HEADLINE.length * STEP + 3.0 - FLASH;

function SpinBorderCard({
  children,
  accent = false,
  delay = 0,
}: {
  children: React.ReactNode;
  accent?: boolean;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-60px 0px" });
  const borderPad = accent ? "2.5px" : "1.5px";
  return (
    <motion.div
      ref={ref}
      className="relative rounded-2xl h-full cursor-default group"
      style={{ padding: borderPad }}
      animate={inView ? {
        y: -10,
        scale: 1.02,
        boxShadow: accent
          ? "0 0 60px rgba(255,80,0,0.35), 0 20px 60px rgba(0,0,0,0.5)"
          : "0 0 30px rgba(255,255,255,0.07), 0 20px 60px rgba(0,0,0,0.5)",
      } : {
        y: 0,
        scale: 1,
        boxShadow: "0 0 0px rgba(0,0,0,0)",
      }}
      transition={inView
        ? { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }
        : { duration: 0.4, ease: "easeIn" }
      }
    >
      {/* Static dim base */}
      <div className="absolute inset-0 rounded-2xl bg-white/[0.07] pointer-events-none" />

      {/* Spinning beam */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <motion.div
          className="absolute"
          style={{
            width: "200%",
            height: "200%",
            top: "-50%",
            left: "-50%",
            background: accent
              ? "conic-gradient(from 0deg, transparent 0%, transparent 30%, #ff4000 44%, #ff7040 50%, #ff9060 54%, transparent 64%, transparent 100%)"
              : "conic-gradient(from 0deg, transparent 0%, transparent 40%, rgba(255,255,255,0.14) 50%, rgba(255,255,255,0.07) 57%, transparent 65%, transparent 100%)",
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: accent ? 3.5 : 7, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Card body */}
      <div className="relative rounded-[calc(16px-1px)] bg-[#0c0c0c] h-full">
        {children}
      </div>
    </motion.div>
  );
}

export default function VergleichSection() {
  return (
    <section className="bg-black py-24 md:py-32">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10 lg:px-16">

        {/* Label */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ff5000]/50 bg-[#ff5000]/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.12em] uppercase text-[#ff5000]">
            MIT UNS VS. DISCOUNTER WEBSITEN
          </span>
        </div>

        {/* Headline — letter-by-letter shimmer */}
        <h2 className="font-heading text-[34px] md:text-[44px] lg:text-[58px] font-black leading-[1.15] tracking-[-0.025em] text-center mx-auto max-w-[800px] mb-4">
          {HEADLINE.split(" ").flatMap((word, wi, words) => {
            const wordStart = HEADLINE.split(" ").slice(0, wi).reduce((acc, w) => acc + w.length + 1, 0);
            const wordEl = (
              <span key={`w${wi}`} className="inline-block whitespace-nowrap">
                {word.split("").map((char, ci) => {
                  const i = wordStart + ci;
                  return (
                    <motion.span
                      key={i}
                      className="inline-block text-white"
                      animate={{
                        textShadow: [
                          "0 0 0px rgba(0,0,0,0)",
                          "0 0 6px rgba(255,100,0,0.35)",
                          "0 0 18px rgba(255,100,0,1), 0 0 40px rgba(255,70,0,0.55)",
                          "0 0 6px rgba(255,100,0,0.35)",
                          "0 0 0px rgba(0,0,0,0)",
                        ],
                      }}
                      transition={{
                        duration: FLASH,
                        delay: i * STEP,
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: REPEAT_DELAY,
                        ease: "linear",
                      }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </span>
            );
            return wi < words.length - 1 ? [wordEl, <span key={`s${wi}`}> </span>] : [wordEl];
          })}
        </h2>

        {/* Subtext */}
        <p className="text-center text-[14px] text-white/40 mb-12">
          Jede Stunde ohne professionellen Auftritt kostet dich Kunden, die du nie zu Gesicht bekommst.
        </p>

        {/* Two-column comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">

          {/* Left — Discounter */}
          <SpinBorderCard accent={false} delay={0}>
            <div className="p-8">
              <h3 className="text-[18px] font-bold text-white/65 mb-6 tracking-[-0.01em]">
                Discounter Marketing
              </h3>
              <ul className="space-y-4">
                {discounterItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[6px] h-2 w-2 rounded-full bg-white/30 shrink-0" />
                    <span className="text-[14px] leading-[1.6] text-white/65">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SpinBorderCard>

          {/* Right — CopyStudio */}
          <SpinBorderCard accent={true} delay={0.12}>
            <div className="p-8">
              <div className="mb-6 flex justify-start">
                <img
                  src="/images/copystudio-wordmark.png"
                  alt="CopyStudio Media"
                  style={{ height: 28, width: "auto", objectFit: "contain", display: "block" }}
                />
              </div>
              <ul className="space-y-4">
                {copystudioItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[2px] text-[#ff5000] text-[16px] font-bold shrink-0">✓</span>
                    <span className="text-[14px] leading-[1.6] text-white/80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SpinBorderCard>

        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button
            className="orange-button rounded-full px-16 py-5 text-[15px] font-extrabold tracking-[0.04em] uppercase text-white hover:scale-[1.03] transition-all duration-200"
            style={{ boxShadow: "0 12px 50px rgba(255,80,0,0.5), 0 3px 16px rgba(255,80,0,0.3)" }}
          >
            Jetzt kostenloses Erstgespräch sichern
          </button>
        </div>

      </div>
    </section>
  );
}
