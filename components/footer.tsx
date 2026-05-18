"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

const seiteLinks = [
  "Problem", "Prinzip", "Leistungen", "Methode", "Über uns", "FAQ",
];

const kontaktLinks = [
  { label: "info@copystudio.media", href: "mailto:info@copystudio.media" },
  { label: "Instagram",             href: "#" },
  { label: "LinkedIn",              href: "#" },
];

const rechtlichesLinks = [
  { label: "Impressum",    href: "#" },
  { label: "Datenschutz", href: "#" },
];

function ColHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-6 h-[2px] bg-[#ff5000] shrink-0" />
      <span className="text-[11px] font-bold tracking-[0.12em] text-[#ff5000] uppercase">
        {label}
      </span>
    </div>
  );
}

export default function Footer() {
  const wRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wRef, { once: false, margin: "-20px" });

  return (
    <footer className="bg-black border-t border-white/[0.06]">
      {/* Main grid */}
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16 pt-20 pb-10 grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-12">

        {/* Col 1 — logo + description */}
        <div>
          <div className="mb-6 overflow-hidden" style={{ height: "52px" }}>
            <Image
              src="/images/logo-copystudio.png"
              alt="CopyStudio Web"
              width={220}
              height={110}
              style={{ height: "110px", width: "auto", marginTop: "-29px" }}
            />
          </div>
          <p className="text-[13px] leading-[1.7] text-white/45 max-w-[280px]">
            Wir produzieren hochwertigen Media-Content und entwickeln
            datengetriebene Kreativstrategien für Agenturen, Coaches,
            Dienstleister und Personenmarken. Wann bist du dran?
          </p>
        </div>

        {/* Col 2 — Seite */}
        <div>
          <ColHeader label="Seite" />
          <ul className="space-y-3">
            {seiteLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-[14px] text-white/45 hover:text-white/80 transition-colors duration-200">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Kontakt */}
        <div>
          <ColHeader label="Kontakt" />
          <ul className="space-y-3">
            {kontaktLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-[14px] text-white/45 hover:text-white/80 transition-colors duration-200">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Rechtliches */}
        <div>
          <ColHeader label="Rechtliches" />
          <ul className="space-y-3">
            {rechtlichesLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-[14px] text-white/45 hover:text-white/80 transition-colors duration-200">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Large watermark — slow horizontal orange sweep */}
      <div ref={wRef} className="overflow-hidden select-none pointer-events-none">
        <motion.p
          className="text-center font-heading font-black tracking-[-0.04em]"
          style={{
            fontSize: "clamp(36px, 11vw, 155px)",
            lineHeight: 1,
            whiteSpace: "nowrap",
            backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.12) 34%, rgba(255,100,20,0.35) 43%, #ff6520 49%, #ffffff 50%, #ff6520 51%, rgba(255,100,20,0.35) 57%, rgba(255,255,255,0.12) 66%, rgba(255,255,255,0.12) 100%)",
            backgroundSize: "300% 100%",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          animate={inView
            ? { backgroundPositionX: ["100%", "0%"] }
            : { backgroundPositionX: "100%" }
          }
          transition={inView ? {
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.5,
          } : { duration: 0.4 }}
        >
          CopyStudio.Web
        </motion.p>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16 py-6 border-t border-white/[0.06]">
        <p className="text-[11px] font-medium tracking-[0.06em] text-white/28 uppercase">
          © 2026 CopyStudio.Web · Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
