"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Globe, ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/motion";
import StatCard from "@/components/stat-card";
import CyclingWord from "@/components/cycling-word";

const statCards = [
  { value: "14+", label: "Webseiten erstellt" },
  { value: "98%", label: "Kundenzufriedenheit" },
];

const avatars = [
  "https://picsum.photos/seed/av1/100/100",
  "https://picsum.photos/seed/av2/100/100",
  "https://picsum.photos/seed/av3/100/100",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[680px] md:min-h-[760px] overflow-hidden bg-[#090909] pt-[60px]">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#090909]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_38%,rgba(200,80,0,0.22),transparent_52%),radial-gradient(ellipse_at_58%_18%,rgba(255,120,0,0.13),transparent_38%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(9,9,9,1)_28%,rgba(9,9,9,0.65)_48%,rgba(9,9,9,0.0)_68%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[#090909]" />
      <div className="noise-overlay" />

      {/* Hero background — blurred photo */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1.06 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero background"
          fill
          className="object-cover object-center"
          style={{ filter: "blur(4px)" }}
          priority
          sizes="100vw"
        />
        {/* Dark veil for text contrast */}
        <div className="absolute inset-0 bg-black/5" />
      </motion.div>

      {/* Left content */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16 flex flex-col justify-center min-h-[680px] md:min-h-[760px]">
        <div className="max-w-[480px]" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.45)" }}>
          {/* Globe micro-label */}
          <motion.div
            {...fadeUp(0.1)}
            className="flex items-center gap-2 text-[11px] text-white mb-5"
          >
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
          <motion.p
            {...fadeUp(0.35)}
            className="mt-5 max-w-[360px] text-[14px] leading-[1.55] text-white/52"
          >
            Mehr Anfragen, mehr Vertrauen, mehr Umsatz – das ist was eine gute Website leisten muss.
          </motion.p>

          {/* CTA row */}
          <motion.div
            {...fadeUp(0.5)}
            className="mt-7 flex items-center gap-4 flex-wrap"
          >
            <button className="orange-button rounded-full px-5 py-2.5 text-[13px] font-extrabold text-white flex items-center gap-2 hover:scale-[1.025] hover:shadow-orange-glow transition-all duration-300">
              Buche jetzt deine Website <ArrowRight className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2.5">
              <div className="flex -space-x-2">
                {avatars.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full border-2 border-[#090909] object-cover"
                  />
                ))}
              </div>
              <span className="text-[12px] font-medium text-white/55">
                10+ Glückliche Kunden
              </span>
            </div>
          </motion.div>

          {/* Stat cards */}
          <motion.div
            {...fadeUp(0.65)}
            className="mt-10 flex items-center gap-4 relative"
          >
            {/* Watermark "AI" */}
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
