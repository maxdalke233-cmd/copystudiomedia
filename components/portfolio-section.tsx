"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion";

const PHONE_W = 400;
const PHONE_H = 800;
const MOBILE_W = 270;
const MOBILE_H = Math.round(PHONE_H * (MOBILE_W / PHONE_W)); // 540
const MOBILE_SCALE = MOBILE_W / PHONE_W; // 0.675

const projects = [
  {
    type: "iframe" as const,
    src: "https://immobilienservice-atzor.de/",
    title: "Immobilienservice Atzor",
    domain: "immobilienservice-atzor.de",
    year: "2025",
    tags: ["Immobilien", "Dienstleistung", "B2C"],
  },
  {
    type: "iframe" as const,
    src: "https://copystudio.marketing/",
    title: "CopyStudio Marketing",
    domain: "copystudio.marketing",
    year: "2025",
    tags: ["Agentur", "Performance Copy", "B2B"],
  },
];

export default function PortfolioSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="bg-white pt-12 pb-24 md:pt-14 md:pb-32">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10 lg:px-16">

        {/* Label */}
        <motion.div {...fadeUp(0)} className="flex justify-center mb-8">
          <span className="inline-flex items-center rounded-full border border-[#ff5000]/40 bg-[#ff5000]/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.14em] uppercase text-[#ff5c35]">
            Portfolio
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          {...fadeUp(0.05)}
          className="text-center font-heading font-black text-[38px] sm:text-[56px] md:text-[78px] lg:text-[96px] leading-[1.02] tracking-[-0.04em] text-black max-w-[900px] mx-auto"
        >
          Webseiten, die für sich selbst sprechen — nicht für ihren Designer.
        </motion.h2>

        {/* Live indicator */}
        <motion.div
          {...fadeUp(0.1)}
          className="flex items-center justify-center gap-2.5 mt-5 mb-6"
        >
          <div className="flex items-center gap-1.5 rounded-full border border-[#22c55e]/40 bg-[#22c55e]/08 px-3 py-1.5">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22c55e]" />
            </span>
            <span className="text-[11px] font-bold tracking-[0.08em] text-[#16a34a] uppercase">Live</span>
          </div>
          <svg className="h-3.5 w-3.5 text-black/25" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
          <span className="text-[12px] text-black/40 font-medium">Scroll & interagiere direkt</span>
        </motion.div>

        {/* Phone grid */}
        <div
          className="flex justify-center items-center py-2"
          style={{
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 40 : 80,
          }}
        >
          {projects.map((p, i) => {
            const rotate = isMobile ? 0 : i === 0 ? -5 : 5;
            const yOffset = isMobile ? 0 : i === 0 ? 40 : -40;
            const pw = isMobile ? MOBILE_W : PHONE_W;
            const ph = isMobile ? MOBILE_H : PHONE_H;
            const glowShadow =
              i === 1
                ? "0 44px 100px rgba(0,0,0,0.30), 0 8px 24px rgba(0,0,0,0.16), 0 0 70px rgba(255,80,0,0.14)"
                : "0 44px 100px rgba(0,0,0,0.30), 0 8px 24px rgba(0,0,0,0.16)";

            return (
              <motion.div
                key={p.domain}
                initial={{ opacity: 0, y: yOffset + (isMobile ? 20 : 40), rotate: rotate * 2 }}
                whileInView={{ opacity: 1, y: yOffset, rotate }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: "easeOut" }}
                className="flex flex-col items-center gap-6"
                style={{ willChange: "transform" }}
              >
                {/* Phone shell */}
                <div
                  className="relative overflow-hidden rounded-[40px] border-[3px] border-black/85 bg-black"
                  style={{
                    width: pw,
                    height: ph,
                    boxShadow: glowShadow,
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "translateZ(0)",
                  }}
                >
                  {/* Dynamic island */}
                  <div className="absolute top-0 inset-x-0 z-20 flex justify-center pt-[10px] pointer-events-none">
                    <div className="h-[22px] w-[90px] rounded-full bg-black" />
                  </div>

                  {p.type === "screenshot" ? (
                    <>
                      <motion.img
                        src={p.src}
                        alt={p.title}
                        style={{ width: "100%", display: "block" }}
                        animate={{ y: ["0%", "-50%", "-50%", "0%"] }}
                        transition={{
                          duration: 8,
                          delay: i * 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          times: [0, 0.44, 0.56, 1],
                        }}
                      />
                      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
                      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
                    </>
                  ) : (
                    /* iframe: always render at full PHONE_W; scale down on mobile */
                    <iframe
                      src={p.src}
                      title={p.title}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: PHONE_W,
                        height: PHONE_H,
                        border: "none",
                        display: "block",
                        backgroundColor: "#fff",
                        transform: isMobile ? `scale(${MOBILE_SCALE})` : "translateZ(0)",
                        transformOrigin: "top left",
                        willChange: "transform",
                      }}
                      scrolling="yes"
                    />
                  )}

                  {/* Bottom home indicator */}
                  <div className="absolute bottom-2 inset-x-0 z-20 flex justify-center pointer-events-none">
                    <div className="h-1 w-24 rounded-full bg-white/30" />
                  </div>

                  {/* Subtle inner shadow */}
                  <div className="absolute inset-0 rounded-[37px] pointer-events-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]" />
                </div>

                {/* Project meta */}
                <div className="text-center">
                  <p className="font-heading font-black text-[16px] text-black tracking-[-0.01em]">{p.title}</p>
                  <p className="text-[12px] text-black/38 mt-0.5">{p.domain}</p>
                  <div className="flex items-center gap-1.5 justify-center mt-2.5 flex-wrap">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/15 bg-black/[0.05] px-2.5 py-0.5 text-[10px] font-semibold text-black/50 tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="text-[10px] text-black/25 ml-0.5">{p.year}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA block */}
        <motion.div {...fadeUp(0.35)} className="mt-16 max-w-[680px] mx-auto">
          <div className="h-px w-full bg-[#e85d44]/40" />
          <p className="text-center text-[15px] md:text-[16px] leading-[1.75] text-black/70 py-8 px-4">
            Deine Kunden googeln dich – bevor sie anrufen.{" "}
            <span className="font-semibold text-[#e85d44] underline decoration-[#e85d44]/60 underline-offset-2">Was finden sie?</span>
            {" "}
            <span className="font-semibold text-[#e85d44] underline decoration-[#e85d44]/60 underline-offset-2">Meistens nichts.</span>
            {" "}Oder eine Website, die aussieht als wäre sie 2003 gebaut worden – mit Schriftarten aus Word und einem Kontaktformular das niemand ausfüllt.
          </p>
          <div className="h-px w-full bg-[#e85d44]/40" />
          <div className="flex justify-center mt-8">
            <button
              className="group relative overflow-hidden rounded-xl px-10 py-4 text-[13px] font-extrabold font-heading tracking-[0.12em] uppercase text-white transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(232,93,68,0.6),0_0_80px_rgba(232,93,68,0.25)] active:scale-[0.97]"
              style={{
                background: "linear-gradient(180deg, #e85d44 0%, #c94432 100%)",
                boxShadow: "0 0 24px rgba(232, 93, 68, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              }}
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/20 transition-transform duration-500 group-hover:translate-x-[200%]" />
              <span className="relative flex items-center gap-2.5">
                Jetzt kostenloses Erstgespräch sichern
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
