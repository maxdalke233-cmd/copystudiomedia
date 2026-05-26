"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

const seiteLinks = [
  { label: "Start",       href: "/#start"      },
  { label: "Portfolio",   href: "/#projekte"   },
  { label: "Leistungen",  href: "/#leistungen" },
  { label: "Referenzen",  href: "/#referenzen" },
  { label: "Über uns",    href: "/#ueber-uns"  },
  { label: "FAQ",         href: "/#faq"        },
];

const kontaktLinks = [
  { label: "info@copystudio.media",  href: "mailto:info@copystudio.media"   },
  { label: "WhatsApp schreiben",     href: "https://wa.me/4915906744569"    },
  { label: "Termin buchen",          href: "https://calendly.com/maxdalke233/30min" },
];

const rechtlichesLinks = [
  { label: "Impressum",    href: "/impressum"    },
  { label: "Datenschutz",  href: "/datenschutz"  },
];

function ColHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-6 h-[2px] bg-[#0041FB] shrink-0" />
      <span className="text-[11px] font-bold tracking-[0.12em] text-[#0041FB] uppercase">
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
              src="/images/logo-dalke.png"
              alt="Dalke Web"
              width={220}
              height={110}
              style={{ height: "110px", width: "auto", marginTop: "-29px" }}
            />
          </div>
          <p className="text-[13px] leading-[1.7] text-white/45 max-w-[280px]">
            Wir bauen Websites für lokale Unternehmen, die mehr Anfragen, mehr
            Vertrauen und mehr Umsatz wollen — schnell, professionell und ohne
            Agentur-Overhead.
          </p>
          <a
            href="https://calendly.com/maxdalke233/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 blue-button rounded-full px-5 py-2.5 text-[12px] font-extrabold text-white hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
          >
            Kostenloses Gespräch sichern →
          </a>
        </div>

        {/* Col 2 — Seite */}
        <div>
          <ColHeader label="Seite" />
          <ul className="space-y-3">
            {seiteLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[14px] text-white/45 hover:text-white/80 transition-colors duration-200"
                >
                  {link.label}
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
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-[14px] text-white/45 hover:text-white/80 transition-colors duration-200"
                >
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
                <Link
                  href={item.href}
                  className="text-[14px] text-white/45 hover:text-white/80 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Large watermark — slow horizontal blue sweep */}
      <div ref={wRef} className="overflow-hidden select-none pointer-events-none">
        <motion.p
          className="text-center font-heading font-black tracking-[-0.04em]"
          style={{
            fontSize: "clamp(36px, 11vw, 155px)",
            lineHeight: 1,
            whiteSpace: "nowrap",
            backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.12) 34%, rgba(0,65,251,0.35) 43%, #2255EE 49%, #ffffff 50%, #2255EE 51%, rgba(0,65,251,0.35) 57%, rgba(255,255,255,0.12) 66%, rgba(255,255,255,0.12) 100%)",
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
          Dalke<span style={{ WebkitTextFillColor: "#0041FB", color: "#0041FB" }}>.</span>Web
        </motion.p>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16 py-6 border-t border-white/[0.06] flex items-center justify-between flex-wrap gap-4">
        <p className="text-[11px] font-medium tracking-[0.06em] text-white/28 uppercase">
          © 2026 CopyStudio Web · Maxim Dalke · Alle Rechte vorbehalten.
        </p>
        <div className="flex items-center gap-5">
          <Link href="/impressum" className="text-[11px] text-white/28 hover:text-white/60 transition-colors duration-200 uppercase tracking-widest">
            Impressum
          </Link>
          <Link href="/datenschutz" className="text-[11px] text-white/28 hover:text-white/60 transition-colors duration-200 uppercase tracking-widest">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
