"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { fadeUp } from "@/lib/motion";

const IFRAME_NATIVE_W = 1280;
const IFRAME_NATIVE_H = 860;

/* Per-tag color definitions */
const TAG_COLORS: Record<string, { border: string; text: string; bg: string }> = {
  WEBSITE:     { border: "rgba(34, 197, 94, 0.45)",   text: "#4ade80", bg: "rgba(34, 197, 94, 0.07)"   },
  COPYWRITING: { border: "rgba(129, 140, 248, 0.45)", text: "#a5b4fc", bg: "rgba(129, 140, 248, 0.07)" },
  DESIGN:      { border: "rgba(251, 191, 36, 0.45)",  text: "#fbbf24", bg: "rgba(251, 191, 36, 0.07)"  },
  LINKEDIN:    { border: "rgba(96, 165, 250, 0.45)",  text: "#93c5fd", bg: "rgba(96, 165, 250, 0.07)"  },
  SALESPAGE:   { border: "rgba(251, 191, 36, 0.45)",  text: "#fbbf24", bg: "rgba(251, 191, 36, 0.07)"  },
  SEO:         { border: "rgba(52, 211, 153, 0.45)",  text: "#6ee7b7", bg: "rgba(52, 211, 153, 0.07)"  },
  BRANDING:    { border: "rgba(244, 114, 182, 0.45)", text: "#f9a8d4", bg: "rgba(244, 114, 182, 0.07)" },
  IMMOBILIEN:  { border: "rgba(251, 191, 36, 0.45)",  text: "#fbbf24", bg: "rgba(251, 191, 36, 0.07)"  },
};

const DEFAULT_TAG = { border: "rgba(255,255,255,0.18)", text: "rgba(255,255,255,0.55)", bg: "transparent" };

type Project = {
  tags: string[];
  src: string;
  screenshot?: string;
  domain: string;
  client: string;
  role: string;
  avatar?: string;
  initials?: string;
  logoMode?: boolean;
};

const projects: Project[] = [
  {
    tags: ["WEBSITE", "COPYWRITING", "DESIGN"],
    src: "https://immobilienservice-atzor.de/",
    screenshot: "/images/hero-phones/site-atzor.png",
    domain: "immobilienservice-atzor.de",
    client: "Patrick Atzor",
    role: "IMMOBILIENMAKLER · LÜBECK",
    avatar: "/images/patrick-atzor.jpg",
  },
  {
    tags: ["WEBSITE", "DESIGN", "BRANDING"],
    src: "https://blitzwebsite.de/",
    screenshot: "/images/hero-phones/site-blitzwebsite.png",
    domain: "blitzwebsite.de",
    client: "Dustin Althaus",
    role: "GRÜNDER · BLITZWEBSITE",
    avatar: "/images/dustin-althaus.jpg",
  },
  {
    tags: ["WEBSITE", "BRANDING", "SEO"],
    src: "https://dietz-saft.de/",
    domain: "dietz-saft.de",
    client: "Dietz Saft",
    role: "FAMILIENUNTERNEHMEN · SEIT 3 GENERATIONEN",
    avatar: "/images/dietz-saft-logo.png",
    logoMode: true,
  },
];

function TagPill({ label }: { label: string }) {
  const c = TAG_COLORS[label] ?? DEFAULT_TAG;
  return (
    <span
      className="rounded-full px-3 py-[5px] text-[10px] font-bold tracking-[0.14em]"
      style={{
        border: `1px solid ${c.border}`,
        color: c.text,
        background: c.bg,
      }}
    >
      {label}
    </span>
  );
}

function Avatar({ src, initials, logoMode }: { src?: string; initials?: string; logoMode?: boolean }) {
  if (src && logoMode) {
    return (
      <div className="h-11 w-11 rounded-full flex-shrink-0 flex items-center justify-center ring-2 ring-black/10 overflow-hidden bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" className="h-8 w-8 object-contain" />
      </div>
    );
  }
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt=""
        className="h-11 w-11 rounded-full object-cover flex-shrink-0 ring-2 ring-black/10"
      />
    );
  }
  return (
    <div
      className="h-11 w-11 rounded-full flex-shrink-0 flex items-center justify-center ring-2 ring-black/10"
      style={{ background: "linear-gradient(135deg, #ff5000 0%, #c94432 100%)" }}
    >
      <span className="font-heading font-black text-[13px] text-white tracking-tight">
        {initials ?? "?"}
      </span>
    </div>
  );
}

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [containerW, setContainerW] = useState(580);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Lazy-load: only start loading iframe when card enters viewport
  useEffect(() => {
    if (isMobile) return;
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setShouldLoad(true); obs.disconnect(); } },
      { rootMargin: "120px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [isMobile]);

  // Track container width for iframe scaling
  useEffect(() => {
    if (isMobile) return;
    const el = cardRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setContainerW(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, [isMobile]);

  const scale = containerW / IFRAME_NATIVE_W;
  const visibleH = Math.round(IFRAME_NATIVE_H * scale);

  const showScreenshot = p.screenshot && (!shouldLoad || !iframeLoaded);
  const showPlaceholder = !p.screenshot && (!shouldLoad || !iframeLoaded);

  return (
    <motion.div
      {...fadeUp(0.12 + i * 0.12)}
      className="flex flex-col gap-5 w-full max-w-[580px]"
    >
      {/* Dark card */}
      <div
        className="w-full rounded-[20px] overflow-hidden"
        style={{
          background: "#0f0f0f",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 4px 6px rgba(0,0,0,0.06), 0 20px 60px rgba(0,0,0,0.16), 0 40px 100px rgba(0,0,0,0.10)",
        }}
      >
        {/* Tags row */}
        <div className="flex items-center gap-2 px-4 pt-4 pb-0 flex-wrap">
          {p.tags.map((tag) => <TagPill key={tag} label={tag} />)}
        </div>

        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-4 pt-3 pb-2.5">
          <div className="h-[9px] w-[9px] rounded-full bg-[#ff5f57]" />
          <div className="h-[9px] w-[9px] rounded-full bg-[#febc2e]" />
          <div className="h-[9px] w-[9px] rounded-full bg-[#28c840]" />
          <div className="ml-2 flex-1 rounded-md bg-white/[0.06] px-3 py-[5px] text-[10px] text-white/25 font-mono truncate">
            {p.domain}
          </div>
        </div>

        {/* Preview area */}
        <div
          ref={cardRef}
          className="relative overflow-hidden w-full"
          style={{ height: isMobile ? "auto" : visibleH, aspectRatio: isMobile ? "16/10" : undefined }}
        >
          {/* Screenshot — shown on mobile always, on desktop until iframe loads */}
          {(isMobile || showScreenshot) && p.screenshot && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={p.screenshot}
              alt={p.client}
              className="w-full h-full object-cover object-top"
              style={{ opacity: (isMobile || !iframeLoaded) ? 1 : 0, transition: "opacity 0.4s ease" }}
            />
          )}

          {/* Placeholder when no screenshot */}
          {showPlaceholder && (
            <div
              className="w-full h-full flex flex-col items-center justify-center gap-4"
              style={{ background: "linear-gradient(135deg, #1a0a00 0%, #2d1500 50%, #1a0a00 100%)" }}
            >
              {p.avatar && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.avatar} alt={p.client} className="h-14 w-14 object-contain opacity-80" />
              )}
              <span className="text-white/30 text-[12px] font-mono tracking-widest">{p.domain}</span>
            </div>
          )}

          {/* Live iframe — desktop only, lazy-loaded on viewport entry */}
          {!isMobile && shouldLoad && (
            <div
              className="absolute top-0 left-0"
              style={{
                width: IFRAME_NATIVE_W,
                height: IFRAME_NATIVE_H,
                transform: `scale(${scale})`,
                transformOrigin: "top left",
                pointerEvents: "none",
                opacity: iframeLoaded ? 1 : 0,
                transition: "opacity 0.5s ease",
              }}
            >
              <iframe
                src={p.src}
                title={p.client}
                scrolling="no"
                onLoad={() => setIframeLoaded(true)}
                style={{ width: IFRAME_NATIVE_W, height: IFRAME_NATIVE_H, border: "none", display: "block", backgroundColor: "#fff" }}
              />
            </div>
          )}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-[#0f0f0f]" />
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-center gap-3.5 px-1">
        <Avatar src={p.avatar} initials={p.initials} logoMode={p.logoMode} />
        <div>
          <p className="font-heading font-black text-[18px] text-black tracking-[-0.02em] leading-tight">{p.client}</p>
          <p className="mt-0.5 text-[10.5px] font-bold tracking-[0.13em] text-black/35 uppercase">{p.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function AusgewaehlteProjekteSection() {
  return (
    <section className="bg-white pt-20 pb-12 md:pt-24 md:pb-16">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10 lg:px-16">

        {/* Label with lines */}
        <motion.div
          {...fadeUp(0)}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-16 bg-black/20" />
          <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-black/35">
            Ausgewählte Projekte
          </span>
          <div className="h-px w-16 bg-black/20" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          {...fadeUp(0.06)}
          className="text-center font-heading font-black text-[38px] sm:text-[52px] md:text-[64px] leading-[1.02] tracking-[-0.04em] text-black max-w-[720px] mx-auto"
        >
          Echte Projekte. Echte Ergebnisse
        </motion.h2>

        {/* Subtext */}
        <motion.p
          {...fadeUp(0.12)}
          className="mt-5 text-center text-[15px] leading-[1.75] text-black/55 max-w-[480px] mx-auto"
        >
          <strong className="font-black text-black/80">Jedes Projekt ist ein Unikat</strong>
          {" "}— Positionierung, Texte, Design und Umsetzung aus einer Hand.
        </motion.p>

        {/* Cards */}
        <div className="mt-16 flex flex-col sm:flex-row items-start justify-center gap-12 flex-wrap">
          {projects.map((p, i) => (
            <ProjectCard key={p.domain} p={p} i={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
