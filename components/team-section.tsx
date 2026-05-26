"use client";

import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion";

export default function TeamSection() {
  return (
    <section className="relative bg-black py-16 md:py-28 overflow-hidden border-t border-white/[0.06]">
      {/* Orange glow — top right */}
      <div className="blue-glow-blob pointer-events-none absolute top-[-100px] right-[-100px] h-[560px] w-[560px] opacity-[0.22]" />
      {/* Orange glow — bottom left */}
      <div className="blue-glow-blob pointer-events-none absolute bottom-[-100px] left-[-100px] h-[560px] w-[560px] opacity-[0.22]" />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">

        {/* ── PERSON 1 ── */}
        {/* Top row: heading left + photo right (2-col always) */}
        <motion.h2
          {...fadeUp(0)}
          className="font-heading text-[18px] sm:text-[24px] md:text-[42px] lg:text-[50px] font-black leading-[1.08] tracking-[-0.03em] text-white max-w-[640px]"
        >
          Co-Founder und Geschäftsführer von CopyStudio Marketing
        </motion.h2>

        {/* Person 1 info — below the heading+photo row */}
        <motion.div {...fadeUp(0.18)} className="mt-7 md:mt-10">
          <p className="text-[10px] md:text-[11px] font-semibold tracking-[0.12em] uppercase text-white/38 mb-2">
            Co-Founder &amp; Geschäftsführer
          </p>
          <h3 className="font-heading text-[20px] md:text-[28px] font-black text-white tracking-[-0.02em] mb-4">
            [Name 1]
          </h3>
          <div className="space-y-3 text-[13px] md:text-[15px] leading-[1.8] text-white/55 max-w-[680px]">
            <p>
              [Bio-Text Absatz 1 — wird noch eingefügt. Beschreibe hier deinen
              Werdegang und deine Expertise.]
            </p>
            <p>
              [Bio-Text Absatz 2 — wird noch eingefügt. Erkläre, was dich
              antreibt und warum du CopyStudio Marketing mitgegründet hast.]
            </p>
            <p>
              [Bio-Text Absatz 3 — wird noch eingefügt.]
            </p>
          </div>
        </motion.div>


      </div>
    </section>
  );
}
