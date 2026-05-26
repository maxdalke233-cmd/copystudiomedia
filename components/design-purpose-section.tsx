"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion";
import FluxoraIcon from "@/components/fluxora-icon";

export default function DesignPurposeSection() {
  return (
    <section className="bg-black py-20 border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        {/* Heading block */}
        <motion.div {...fadeUp(0)} className="text-center">
          <h2
            className="font-heading text-[44px] md:text-[58px] font-black leading-[1.06] tracking-[-0.035em]"
            style={{ textShadow: "0 0 60px rgba(0,65,251,0.55), 0 0 120px rgba(0,65,251,0.25)" }}
          >
            <span className="text-white">Design With Purpose.</span>
            <br />
            <span className="text-white/82">Build With Impact.</span>
          </h2>
          <p className="mt-4 text-center text-[14px] text-white/42 max-w-[480px] mx-auto leading-[1.5]">
            We help brands create meaningful digital experiences by combining
            creativity, clarity, and purpose.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1 — editorial group photo */}
          <motion.div
            {...fadeUp(0.1)}
            className="rounded-2xl overflow-hidden h-[220px] relative bg-gradient-to-br from-amber-950 via-stone-900 to-neutral-950"
          >
            <Image
              src="https://picsum.photos/seed/fluxorateam/440/220"
              alt="Studio team — replace with real editorial group photo"
              fill
              className="object-cover opacity-60 mix-blend-luminosity"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent" />
          </motion.div>

          {/* Card 2 — Projects Delivered */}
          <motion.div
            {...fadeUp(0.2)}
            className="glass-card fine-dark-border rounded-2xl p-6"
          >
            <FluxoraIcon className="h-8 w-8 text-[#0041FB] mb-4" />
            <div className="font-heading text-[28px] font-black text-white">
              150+
            </div>
            <div className="text-[12px] font-semibold text-white/65 mt-0.5">
              Projects Delivered
            </div>
            <p className="mt-3 text-[12px] text-white/38 leading-[1.5]">
              Clear, human-centered digital solutions crafted for brands that
              care about their users.
            </p>
          </motion.div>

          {/* Card 3 — dark glass placeholder */}
          <motion.div
            {...fadeUp(0.3)}
            className="glass-card fine-dark-border rounded-2xl p-6 flex flex-col"
          >
            <div className="h-8 w-8 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-4">
              <div className="h-3.5 w-3.5 rounded-full bg-white/20" />
            </div>
            <div className="font-heading text-[28px] font-black text-white">
              98%
            </div>
            <div className="text-[12px] font-semibold text-white/65 mt-0.5">
              Client Satisfaction
            </div>
            <p className="mt-3 text-[12px] text-white/38 leading-[1.5]">
              Every project measured against real user outcomes, not just
              delivery timelines.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
