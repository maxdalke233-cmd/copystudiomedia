"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion";


export default function MeetMindsSection() {
  return (
    <section className="relative bg-black py-24 md:py-32 border-t border-white/[0.06] overflow-hidden">
      {/* Orange blur bubbles */}
      <div className="absolute top-[8%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#ff5000]/[0.11] blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#ff7000]/[0.08] blur-[110px] pointer-events-none" />
      <div className="absolute top-[45%] left-[30%] w-[300px] h-[300px] rounded-full bg-[#ff4500]/[0.06] blur-[90px] pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — portrait photo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative w-full rounded-2xl overflow-hidden"
            style={{ aspectRatio: "3/4" }}
          >
            <Image
              src="/images/founder-1.png"
              alt="Co-Founder und Geschäftsführer"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Right — title + bio */}
          <motion.div {...fadeUp(0.1)} className="flex flex-col">

            {/* Title */}
            <h2 className="font-serif italic font-normal text-[38px] md:text-[48px] lg:text-[54px] leading-[1.0] tracking-[-0.02em] text-white">
              Hi, ich bin Max.
            </h2>

            {/* Bio paragraphs */}
            <div className="mt-8 space-y-5 text-[14px] leading-[1.8] text-white/50">
              <p>
                Ich komme nicht aus der klassischen Agentur-Welt. Kein Studium, keine Konzern-Karriere. Ich habe früh angefangen, mir Dinge selbst beizubringen – und daraus ein Business gemacht.
              </p>
              <p>
                Mein Einstieg war Social Media und Content. Ich habe verstanden, wie Aufmerksamkeit funktioniert, was Menschen dazu bringt zu klicken, zu lesen, zu kaufen. Nicht aus der Theorie – sondern weil ich es selbst gemacht habe, für eigene Projekte, mit eigenem Geld.
              </p>
              <p>
                Dann habe ich eine eigene Brand im Barber-Bereich aufgebaut. Shopify-Store, Branding, Website – alles selbst umgesetzt. Und genau da habe ich gemerkt: Die Website entscheidet, ob ein Kunde kauft oder geht. Nicht das Produkt. Nicht der Preis.{" "}
                <span className="font-semibold text-white/80">Der erste Eindruck.</span>
              </p>
              <p>
                Seitdem arbeite ich an der Schnittstelle zwischen Design, Technik und Verkaufspsychologie. Ich nutze moderne Tools und{" "}
                <span className="font-semibold text-white/80">AI</span>
                , um Ergebnisse zu liefern, für die andere ganze Teams brauchen – schneller, präziser und ohne Agentur-Overhead.
              </p>
              <p>
                Irgendwann war klar: Dieses Wissen gehört nicht in eigene Projekte – lokale Unternehmen verdienen einen digitalen Auftritt, der so professionell ist wie ihre Arbeit. Genau dafür habe ich{" "}
                <span className="font-semibold text-white/80">CopyStudio Web</span>{" "}
                gegründet.
              </p>
              <p>
                Keine große Agentur. Kein aufgeblasenes Team. Sondern ein Ansprechpartner, der dein Business versteht – und einen Auftritt baut, der Kunden bringt.
              </p>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
