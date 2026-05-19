"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function VideoTestimonialSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };
  return (
    <section className="relative bg-white pt-10 pb-24 md:pt-12 md:pb-32">

      <div className="mx-auto max-w-[1100px] px-6 md:px-10 lg:px-16">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ff5000]/30 bg-[#ff5000]/[0.07] px-4 py-1.5 text-[11px] font-bold tracking-[0.14em] uppercase text-[#ff5000]">
            Was unsere Kunden sagen
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.05, ease: "easeOut" }}
          className="text-center font-heading font-black text-[32px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-[-0.03em] text-[#111]"
        >
          Es gibt einen Grund, warum{" "}
          <span className="font-black">lokale Unternehmen,</span>
          <br className="hidden md:block" />
          {" "}die wirklich wachsen wollen, sich für{" "}
          <br className="hidden md:block" />
          <span className="font-black">CopyStudio Web</span> entscheiden.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mx-auto mt-5 max-w-[600px] text-center text-[15px] leading-[1.7] text-gray-400"
        >
          Man sieht es immer wieder: Wer online professionell auftritt, gewinnt das Vertrauen seiner Kunden – noch bevor das erste Gespräch stattfindet.
        </motion.p>

        {/* Video placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
          className="mt-12 overflow-hidden rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.14)]"
        >
          {/* Video area */}
          <div
            className="relative w-full bg-black cursor-pointer"
            style={{ aspectRatio: "16/9" }}
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              src="/videos/testimonial.mp4"
              className="absolute inset-0 w-full h-full object-cover"
              playsInline
              onEnded={() => setIsPlaying(false)}
            />
            {/* Play button overlay — hidden while playing */}
            <AnimatePresence>
              {!isPlaying && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.18 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ff5000] shadow-[0_0_40px_rgba(255,80,0,0.45)] transition-transform duration-200 hover:scale-110">
                    <svg viewBox="0 0 24 24" className="h-8 w-8 translate-x-0.5 fill-white">
                      <polygon points="6,4 20,12 6,20" />
                    </svg>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Below video: name + logo */}
          <div className="flex items-center justify-between border-t border-gray-100 bg-white px-6 py-4">
            <div>
              <p className="text-[14px] font-semibold text-[#111]">Maxim Dalke</p>
              <p className="text-[12px] text-gray-400">Geschäftsführer</p>
            </div>
            <img
              src="/images/copystudio-web-logo-dark.png"
              alt="CopyStudio Web"
              style={{ height: 48, width: "auto", objectFit: "contain", flexShrink: 0 }}
            />
          </div>
        </motion.div>

        {/* 3-column: Problem / Lösung / Ergebnis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
          className="mt-12 hidden md:grid grid-cols-3 gap-8"
        >
          {/* Problem */}
          <div className="border-t-2 border-[#111] pt-5">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-gray-400">
              Problem
            </p>
            <p className="text-[14px] leading-[1.75] text-gray-600">
              Marketing ohne Copywriting ist wie ein Verkäufer, der stumm bleibt. Die Botschaft fehlte – Anfragen kamen kaum, obwohl das Angebot stark war. Die Conversion-Sprache traf die Zielgruppe nicht.
            </p>
          </div>

          {/* Lösung */}
          <div className="border-t-2 border-[#111] pt-5">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-gray-400">
              Lösung
            </p>
            <p className="text-[14px] leading-[1.75] text-gray-600">
              Ein persönliches, zielgerichtetes Copywriting-Konzept: von der Positionierung über die Angebotsseite bis zur E-Mail-Kommunikation. Jede Botschaft abgestimmt auf die Sprache der Zielgruppe.
            </p>
          </div>

          {/* Ergebnis */}
          <div className="border-t-2 border-[#ff5000] pt-5">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#ff5000]">
              Ergebnis
            </p>
            {/* Salmon quote box */}
            <div className="rounded-xl bg-[#ffe8e0] p-5">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#ff5000]/70 mb-3">
                Kundenstimme
              </p>
              <p className="text-[14px] leading-[1.75] text-[#3a1a10] italic">
                „Seitdem wir zusammenarbeiten, spüre ich, wie sich das Engagement in meiner Zielgruppe verändert hat – wie ich es selbst nach Jahren in der Branche nicht erreicht habe."
              </p>
              <p className="mt-3 text-[12px] font-semibold text-[#3a1a10]">— Maxim Dalke</p>
            </div>
          </div>
        </motion.div>

        {/* Large bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.25, ease: "easeOut" }}
          className="mt-8 border-t border-gray-100 pt-7"
        >
          <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-gray-300 text-center mb-6">
            Direkte Rückmeldung
          </p>
          <blockquote className="text-center">
            <p className="font-heading font-black text-[20px] md:text-[26px] leading-[1.55] tracking-[-0.015em] text-[#111] max-w-[800px] mx-auto">
              „Ich möchte ein großes Kompliment für diese Arbeit aussprechen. Es ist wirklich beeindruckend, wie klar, präzise und qualitativ hochwertig das Ergebnis ist. Nicht nur war es informationsreich zu lesen – in dieser Form habe ich das in meinem beruflichen Umfeld selten erlebt."
            </p>
            <footer className="mt-6 flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-gray-200" />
              <p className="text-[14px] font-semibold text-[#111]">Maxim Dalke</p>
              <div className="h-px w-10 bg-gray-200" />
            </footer>
          </blockquote>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://calendly.com/maxdalke233/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="orange-button rounded-full px-8 py-4 text-[13px] font-extrabold tracking-[0.12em] uppercase text-white hover:scale-[1.03] transition-all duration-200 shadow-[0_8px_40px_rgba(255,80,0,0.3)] inline-block"
          >
            Jetzt kostenloses Erstgespräch sichern
          </a>
        </motion.div>

      </div>
    </section>
  );
}
