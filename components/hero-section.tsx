"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Globe, ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/motion";
import StatCard from "@/components/stat-card";
import CyclingWord from "@/components/cycling-word";

/* ── Typewriter button label ── */
const FULL_TEXT     = "Buche jetzt deine Website";
const TYPE_MS       = 62;
const DELETE_MS     = 38;
const HOLD_FULL_MS  = 2600;
const HOLD_EMPTY_MS = 2400;

function TypewriterLabel() {
  const [displayed, setDisplayed] = useState("");
  const [cursorOn, setCursorOn]   = useState(true);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    function typeChar(idx: number) {
      const next = idx + 1;
      setDisplayed(FULL_TEXT.slice(0, next));
      if (next < FULL_TEXT.length) {
        t = setTimeout(() => typeChar(next), TYPE_MS + (Math.random() * 28 - 10));
      } else {
        t = setTimeout(() => deleteChar(next), HOLD_FULL_MS);
      }
    }
    function deleteChar(len: number) {
      const next = len - 1;
      setDisplayed(FULL_TEXT.slice(0, next));
      if (next > 0) {
        t = setTimeout(() => deleteChar(next), DELETE_MS);
      } else {
        t = setTimeout(() => typeChar(-1), HOLD_EMPTY_MS);
      }
    }
    t = setTimeout(() => typeChar(-1), 400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setCursorOn((c) => !c), 500);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block whitespace-nowrap">
      <span className="invisible select-none">{FULL_TEXT}</span>
      <span className="absolute left-0 top-0 whitespace-nowrap">
        {displayed}
        <span
          className="inline-block w-[2px] h-[0.85em] ml-[1px] rounded-sm bg-white align-middle"
          style={{ opacity: cursorOn ? 1 : 0, transition: "opacity 0.08s" }}
        />
      </span>
    </span>
  );
}

/* ── iPhone frame ── */
function PhoneFrame({ src, shimmerDelay = "0s" }: { src: string; shimmerDelay?: string }) {
  return (
    <div style={{
      position: "relative",
      width: "100%",
      padding: "6px",
      borderRadius: "38px",
      flexShrink: 0,
      background: "linear-gradient(160deg, #1a1a1a 0%, #2c2c2c 30%, #1a1a1a 60%, #3a3a3a 100%)",
      boxShadow: "0 22px 50px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.10)",
    }}>
      {/* Dynamic Island */}
      <div style={{
        position: "absolute", top: "10px", left: "50%",
        transform: "translateX(-50%)",
        width: "32%", height: "22px",
        background: "#000", borderRadius: "999px", zIndex: 3,
        boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 2px 6px rgba(0,0,0,0.4)",
      }} />
      {/* Top specular highlight */}
      <div style={{
        position: "absolute", top: 0, left: "12%", right: "12%", height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
        borderRadius: "999px", zIndex: 4, pointerEvents: "none",
      }} />
      {/* Screen */}
      <div style={{ position: "relative", zIndex: 1, borderRadius: "32px", overflow: "hidden", background: "#000" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" style={{ display: "block", width: "100%", height: "auto" }} loading="lazy" />
      </div>
      {/* Orange bezel shimmer */}
      <div style={{
        position: "absolute", inset: 0,
        borderRadius: "38px", padding: "6px",
        background: "linear-gradient(to top, transparent 0%, transparent 36%, rgba(0,65,251,0.45) 44%, rgba(150,190,255,0.98) 50%, rgba(0,65,251,0.45) 56%, transparent 64%, transparent 100%)",
        backgroundSize: "100% 300%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 0%",
        WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        pointerEvents: "none", zIndex: 5,
        animation: "iphoneShimmer 7s linear infinite",
        animationDelay: shimmerDelay,
      } as React.CSSProperties} />
    </div>
  );
}

/* ── Column config ── */
const COLUMNS = [
  { src: "/images/hero-phones/site-copystudio.png",   cls: "hero-col-1",   left: "42%", rotate: "-7deg", duration: "180s", direction: "normal",  shimmerDelay: "0s"    },
  { src: "/images/hero-phones/site-blitzwebsite.png", cls: "hero-col-mid", left: "62%", rotate: "-2deg", duration: "220s", direction: "reverse", shimmerDelay: "-2.3s" },
  { src: "/images/hero-phones/site-atzor.png",        cls: "hero-col-3",   left: "80%", rotate: "-8deg", duration: "150s", direction: "normal",  shimmerDelay: "-4.6s" },
];

const statCards = [
  { value: "14+", label: "Webseiten erstellt" },
  { value: "98%", label: "Kundenzufriedenheit" },
];
const avatars = [
  { src: "/images/avatar-1.png", pos: "object-top" },
  { src: "/images/avatar-2.png", pos: "object-top" },
  { src: "/images/avatar-3.png", pos: "object-[center_18%]" },
];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[680px] md:min-h-[760px] overflow-hidden pt-[60px]"
      style={{
        isolation: "isolate",
        background: "radial-gradient(80% 60% at 50% 35%, #0d1840 0%, #060e22 55%, #04080e 100%)",
      }}
    >
      <style>{`
        @keyframes heroGlowA {
          0%, 100% { opacity: 0.55; transform: translate(0,0) scale(1); }
          50%       { opacity: 1.00; transform: translate(10px,6px) scale(1.18); }
        }
        @keyframes heroGlowB {
          0%, 100% { opacity: 0.50; transform: translate(0,0) scale(1); }
          50%       { opacity: 0.95; transform: translate(-12px,-8px) scale(1.20); }
        }
        @keyframes heroScroll {
          from { transform: translateY(0); }
          to   { transform: translateY(calc(-50% - 14px)); }
        }
        @keyframes iphoneShimmer {
          from { background-position: 0   0%; }
          to   { background-position: 0 100%; }
        }
        @media (max-width: 640px) {
          .hero-col-mid { display: none; }
          .hero-col-1   { left: 30% !important; width: 52% !important; }
          .hero-col-3   { left: 72% !important; width: 52% !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-track, .hero-glow-a, .hero-glow-b { animation: none !important; }
        }
      `}</style>

      {/* Glow A — top left */}
      <div className="hero-glow-a pointer-events-none absolute rounded-full" style={{
        top: "-12%", left: "-22%", width: "78%", height: "68%", zIndex: 0,
        filter: "blur(48px)",
        background: "radial-gradient(closest-side, rgba(0,65,251,0.85) 0%, rgba(0,65,251,0.55) 35%, transparent 75%)",
        animation: "heroGlowA 6s ease-in-out infinite",
      }} />

      {/* Glow B — bottom right */}
      <div className="hero-glow-b pointer-events-none absolute rounded-full" style={{
        bottom: "-16%", right: "-22%", width: "88%", height: "66%", zIndex: 0,
        filter: "blur(48px)",
        background: "radial-gradient(closest-side, rgba(80,140,255,0.70) 0%, rgba(232,90,30,0.45) 40%, transparent 75%)",
        animation: "heroGlowB 8s ease-in-out infinite",
        animationDelay: "-2.5s",
      }} />

      {/* ── Phone columns ── */}
      <div style={{
        position: "absolute", inset: 0, overflow: "hidden", zIndex: 1,
        filter: "blur(2px) saturate(1.05)",
        transform: "scale(1.15)", transformOrigin: "center",
      }}>
        {COLUMNS.map((col) => (
          <div
            key={col.cls}
            className={col.cls}
            style={{
              position: "absolute", top: "-10%",
              left: col.left, width: "28%", height: "130%",
              transform: `rotate(${col.rotate})`,
            }}
          >
            <div
              className="hero-track"
              style={{
                display: "flex", flexDirection: "column", gap: "28px",
                animation: `heroScroll ${col.duration} linear infinite`,
                animationDirection: col.direction as "normal" | "reverse",
              }}
            >
              <PhoneFrame src={col.src} shimmerDelay={col.shimmerDelay} />
              <PhoneFrame src={col.src} shimmerDelay={col.shimmerDelay} />
            </div>
          </div>
        ))}
      </div>

      {/* ── Overlay layers ── */}
      {/* Left gradient — text area dark, right fully transparent */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
        background: "linear-gradient(to right, rgba(4,8,14,1) 32%, rgba(4,8,14,0.85) 48%, rgba(4,8,14,0.2) 68%, rgba(4,8,14,0) 80%)",
      }} />
      {/* Subtle top fade */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
        background: "linear-gradient(to bottom, rgba(4,8,14,0.5) 0%, transparent 18%)",
      }} />
      {/* Bottom fade */}
      <div style={{
        position: "absolute", insetInline: 0, bottom: 0, height: "7rem", zIndex: 2, pointerEvents: "none",
        background: "linear-gradient(to bottom, transparent, #04080e)",
      }} />
      {/* Noise */}
      <div className="noise-overlay" style={{ zIndex: 2 }} />

      {/* ── Foreground content ── */}
      <div
        className="relative mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16 flex flex-col justify-center min-h-[680px] md:min-h-[760px]"
        style={{ zIndex: 3 }}
      >
        <div className="max-w-[480px]" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.45)" }}>
          {/* Globe micro-label */}
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-2 text-[11px] text-white mb-5">
            <Globe className="h-3.5 w-3.5 shrink-0" />
            <span>Für lokale Unternehmen, die wachsen wollen</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-heading text-[58px] md:text-[72px] font-black leading-[0.95] tracking-[-0.035em] text-white"
          >
            Gebaut für Wachstum.
            <br />
            Nicht für{" "}
            <CyclingWord />
          </motion.h1>

          {/* Subtext */}
          <motion.p {...fadeUp(0.35)} className="mt-5 max-w-[360px] text-[14px] leading-[1.55] text-white/52">
            Mehr Anfragen, mehr Vertrauen, mehr Umsatz – das ist was eine gute Website leisten muss.
          </motion.p>

          {/* CTA row */}
          <motion.div {...fadeUp(0.5)} className="mt-7 flex items-center gap-4 flex-wrap">
            <a
              href="https://calendly.com/maxdalke233/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="blue-button rounded-full px-5 py-2.5 text-[13px] font-extrabold text-white flex items-center gap-2 hover:scale-[1.025] hover:shadow-blue-glow transition-all duration-300"
            >
              <TypewriterLabel />
              <ArrowRight className="h-4 w-4 shrink-0" />
            </a>
            <div className="flex items-center gap-2.5">
              <div className="flex -space-x-2">
                {avatars.map((a, i) => (
                  <Image
                    key={i}
                    src={a.src}
                    alt=""
                    width={32}
                    height={32}
                    className={`h-8 w-8 rounded-full border-2 border-[#090909] object-cover ${a.pos}`}
                  />
                ))}
              </div>
              <span className="text-[12px] font-medium text-white/55">10+ Glückliche Kunden</span>
            </div>
          </motion.div>

          {/* Stat cards */}
          <motion.div {...fadeUp(0.65)} className="mt-10 flex items-center gap-4 relative">
            <div
              aria-hidden="true"
              className="pointer-events-none select-none absolute bottom-0 left-0 text-[160px] font-black leading-none tracking-[-0.06em] text-white/[0.025] font-heading"
            >
              AI
            </div>
            {statCards.map((card, i) => (
              <motion.div key={i} {...fadeUp(0.75 + i * 0.12)}>
                <StatCard value={card.value} label={card.label} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
