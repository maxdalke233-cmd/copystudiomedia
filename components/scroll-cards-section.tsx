"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

/* ─── Google Search Animation ────────────────────────────────── */
const SEO_STATES = [
  [0,1,2,3,4],[0,1,2,3,4],[0,1,2,4,3],[0,1,4,2,3],[0,4,1,2,3],[4,0,1,2,3],[4,0,1,2,3],
];
const SEO_PAGES = [3,3,3,2,2,1,1];
const SEO_ROWS = [
  { domain: "müller-handwerk.de",   snippet: "Heizung · Sanitär · Münster" },
  { domain: "bester-handwerker.de", snippet: "Handwerker Münster · Sofort" },
  { domain: "handwerk-nrw.de",      snippet: "Ihr Fachbetrieb in der Region" },
  { domain: "stadtwerk-ms.de",      snippet: "Handwerker · Jetzt anfragen"  },
  { domain: "dein-betrieb.de",      snippet: "Handwerker Münster · Top",  you: true },
];
const ROW_H = 46;

function BounceRateAnimation() {
  const [p, setP] = useState(0);
  const DUR = 2400;
  useEffect(() => {
    let start: number | null = null;
    let raf: number;
    const ease = (t: number) => t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t+2,2)/2;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const t = ((ts - start) % DUR) / DUR;
      setP(ease(t));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  const before = Math.round(p * 78);
  const after  = Math.round(p * 32);
  const ringW = `conic-gradient(rgba(255,255,255,0.55) ${before*3.6}deg, rgba(255,255,255,0.08) 0deg)`;
  const ringO = `conic-gradient(#3366FF ${after*3.6}deg, rgba(51,102,255,0.10) 0deg)`;
  return (
    <div className="w-full rounded-2xl overflow-hidden select-none" style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(25,60,180,0.35) 0%, #0A0D16 72%)", border: "1px solid rgba(255,255,255,0.12)" }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-3 pb-1">
        <span className="text-[9px] font-mono text-white/45 tracking-widest uppercase">Absprungrate</span>
        <div className="flex items-center gap-1.5">
          <motion.div animate={{ opacity:[1,0,1] }} transition={{ duration:1.2, repeat:Infinity }} className="h-1.5 w-1.5 rounded-full bg-[#3366FF]" />
          <span className="text-[9px] font-mono text-white/45 tracking-widest uppercase">3 Sek · Entscheidung</span>
        </div>
      </div>
      {/* Rings */}
      <div className="flex items-center justify-between px-5 pb-4 pt-2 gap-2">
        {/* Before */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <span className="text-[9px] font-mono text-white/45 tracking-widest uppercase">Vorher</span>
          <div className="relative h-[104px] w-[104px] rounded-full" style={{ background: ringW }}>
            <div className="absolute inset-[8px] rounded-full bg-[#0A0D16] flex items-center justify-center">
              <span className="text-[16px] font-bold text-white/60 tabular-nums">{before}%</span>
            </div>
          </div>
          <span className="font-heading text-[40px] font-black text-white leading-none tabular-nums">{before}<span className="text-[22px]">%</span></span>
        </div>
        {/* Arrow */}
        <motion.span animate={{ x:[0,5,0], opacity:[0.4,1,0.4] }} transition={{ duration:2, repeat:Infinity, ease:"easeInOut" }} className="text-[#3366FF] text-[20px] font-black shrink-0 mb-6">→</motion.span>
        {/* After */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <span className="text-[9px] font-mono text-white/45 tracking-widest uppercase">Mit CopyStudio</span>
          <div className="relative h-[104px] w-[104px] rounded-full" style={{ background: ringO }}>
            <div className="absolute inset-[8px] rounded-full bg-[#0A0D16] flex items-center justify-center">
              <span className="text-[16px] font-bold text-[#3366FF]/70 tabular-nums">{after}%</span>
            </div>
          </div>
          <span className="font-heading text-[40px] font-black text-[#3366FF] leading-none tabular-nums" style={{ textShadow:"0 0 22px rgba(51,102,255,0.6)" }}>{after}<span className="text-[22px]">%</span></span>
        </div>
      </div>
    </div>
  );
}

function PerformanceBarAnimation() {
  return (
    <div className="w-full rounded-2xl overflow-hidden select-none" style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(25,60,180,0.35) 0%, #0A0D16 72%)", border: "1px solid rgba(255,255,255,0.12)" }}>
      <style>{`
        @keyframes bar-grow {
          0%   { transform: scaleY(0); }
          25%  { transform: scaleY(1); }
          85%  { transform: scaleY(1); }
          100% { transform: scaleY(0); }
        }
      `}</style>
      <div className="flex flex-col gap-3 px-4 pt-3 pb-4">
        {/* Header */}
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] font-mono text-white/45 tracking-widest uppercase">Performance vs Branche</span>
          <span className="text-[9px] font-mono text-white/15">·</span>
          <span className="text-[9px] font-mono text-white/20 tracking-widest uppercase">Faktor</span>
        </div>
        {/* Bar chart */}
        <div className="flex items-end gap-5" style={{ height: 120 }}>
          {/* Branche */}
          <div className="flex-1 rounded-t-lg" style={{
            height: 84, // 70% of 120
            transformOrigin: "bottom",
            animation: "bar-grow 5s cubic-bezier(.6,.05,.3,1) infinite",
            animationDelay: "0s",
            background: "linear-gradient(to top, rgba(255,255,255,0.42), rgba(255,255,255,0.16))",
          }} />
          {/* CopyStudio */}
          <div className="flex-1 rounded-t-lg" style={{
            height: 120, // 100%
            transformOrigin: "bottom",
            animation: "bar-grow 5s cubic-bezier(.6,.05,.3,1) infinite",
            animationDelay: "0.4s",
            background: "linear-gradient(to top, #002FA8, #0041FB, #4477FF)",
            boxShadow: "0 0 22px rgba(0,65,251,0.55)",
          }} />
        </div>
        {/* Numbers */}
        <div className="flex gap-5">
          <div className="flex-1 flex flex-col items-center gap-0.5">
            <span className="font-heading text-[26px] font-black text-white/30 leading-none">2.1×</span>
            <span className="text-[9px] font-mono text-white/20 tracking-widest uppercase text-center">Branche Ø</span>
          </div>
          <div className="flex-1 flex flex-col items-center gap-0.5">
            <span className="font-heading text-[26px] font-black text-[#3366FF] leading-none" style={{ textShadow:"0 0 12px rgba(51,102,255,0.5)" }}>5.8×</span>
            <span className="text-[9px] font-mono text-white/25 tracking-widest uppercase text-center">Mit CopyStudio</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClockAnimation() {
  const CX = 60, CY = 60;
  const R = 50;
  const INNER = 33;
  const HAND_LEN = INNER * 0.78;

  const pingHours = [22.5, 1, 4, 7, 14, 19.5];

  const hourAngle = (hour: number) => ((hour / 24) * 360 - 90) * (Math.PI / 180);

  const pings = pingHours.map((hour, i) => {
    const a = hourAngle(hour);
    const pr = R * 0.80;
    return {
      dx: Math.cos(a) * pr,
      dy: Math.sin(a) * pr,
      isNight: hour >= 18 || hour < 8,
      delay: i * 1.0,
    };
  });

  const ticks = Array.from({ length: 24 }, (_, i) => {
    const a = hourAngle(i);
    const major = i % 6 === 0;
    const outer = R - 2;
    const inner = outer - (major ? 7 : 4);
    return {
      x1: CX + Math.cos(a) * inner, y1: CY + Math.sin(a) * inner,
      x2: CX + Math.cos(a) * outer, y2: CY + Math.sin(a) * outer,
      major,
    };
  });

  return (
    <div className="w-full rounded-2xl overflow-hidden select-none" style={{
      background: "radial-gradient(ellipse at 60% 50%, rgba(25,60,180,0.35) 0%, #0A0D16 72%)",
      border: "1px solid rgba(255,255,255,0.12)",
    }}>
      <style>{`
        @keyframes hand-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes ping-pop {
          0%   { opacity: 0; transform: scale(0.6); }
          10%  { opacity: 1; transform: scale(1); }
          40%  { opacity: 0; transform: scale(1.3); }
          100% { opacity: 0; }
        }
      `}</style>
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-3 pb-1">
        <span className="text-[9px] font-mono text-white/45 tracking-widest uppercase">Anfragen-Uhr</span>
        <div className="flex items-center gap-1.5">
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-[#3366FF]"
          />
          <span className="text-[9px] font-mono text-white/45 tracking-widest uppercase">24h · 7 Tage</span>
        </div>
      </div>
      {/* Body */}
      <div className="flex items-center gap-4 px-4 pb-4 pt-2">
        {/* Clock face */}
        <div className="relative shrink-0" style={{ width: 140, height: 140 }}>
          <div className="absolute inset-0 rounded-full" style={{
            background: "conic-gradient(from 0deg, rgba(255,255,255,0.07) 0deg 180deg, rgba(51,102,255,0.17) 180deg 360deg)",
            border: "1px solid rgba(255,255,255,0.10)",
          }} />
          <svg viewBox="0 0 120 120" className="absolute inset-0 w-full h-full">
            {ticks.map((t, i) => (
              <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
                stroke={t.major ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.18)"}
                strokeWidth={t.major ? 1.5 : 0.8} strokeLinecap="round" />
            ))}
            <circle cx={CX} cy={CY} r={INNER} fill="#0A0D16" />
            <text x={CX} y={CY - INNER + 9} textAnchor="middle"
              fill="rgba(255,255,255,0.55)" fontSize="8" fontFamily="monospace" fontWeight="700">12</text>
            <text x={CX} y={CY + INNER - 1} textAnchor="middle"
              fill="#3366FF" fontSize="8" fontFamily="monospace" fontWeight="700">00</text>
            <g transform={`translate(${CX}, ${CY})`}>
              <g style={{ transformOrigin: "0px 0px", animation: "hand-spin 6s linear infinite" }}>
                <line x1="0" y1="3" x2="0" y2={-HAND_LEN}
                  stroke="#3366FF" strokeWidth="2" strokeLinecap="round" opacity="0.88" />
                <circle cx="0" cy={-(HAND_LEN + 3)} r="3" fill="#3366FF"
                  style={{ filter: "drop-shadow(0 0 5px rgba(51,102,255,0.9))" }} />
              </g>
            </g>
            <circle cx={CX} cy={CY} r="2.5" fill="#3366FF" />
            {pings.map(({ dx, dy, isNight, delay }, i) => (
              <g key={i} transform={`translate(${CX + dx}, ${CY + dy})`}>
                <circle cx="0" cy="0" r={isNight ? 4 : 3}
                  fill={isNight ? "#3366FF" : "rgba(51,102,255,0.5)"}
                  style={{
                    transformOrigin: "0px 0px",
                    animation: "ping-pop 4.8s ease-out infinite",
                    animationDelay: `${delay}s`,
                    opacity: 0,
                    filter: isNight ? "drop-shadow(0 0 4px rgba(51,102,255,0.8))" : "none",
                  }}
                />
              </g>
            ))}
          </svg>
        </div>
        {/* 41% stat */}
        <div className="flex flex-col">
          <span className="font-heading text-[58px] font-black text-[#3366FF] leading-none"
            style={{ textShadow: "0 0 24px rgba(51,102,255,0.65)" }}>41%</span>
          <span className="text-[9px] font-mono text-white/35 tracking-[0.14em] uppercase leading-[1.6] mt-1">DER ANFRAGEN</span>
          <span className="text-[9px] font-mono text-white/35 tracking-[0.14em] uppercase leading-[1.6]">AUSSERHALB DEINER</span>
          <span className="text-[9px] font-mono text-white/35 tracking-[0.14em] uppercase leading-[1.6]">GESCHÄFTSZEITEN</span>
        </div>
      </div>
    </div>
  );
}

function DecisionCalendarAnimation() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setPhase(p => (p + 1) % 2), 2800);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="w-full rounded-2xl overflow-hidden select-none" style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(25,60,180,0.35) 0%, #0A0D16 72%)", border: "1px solid rgba(255,255,255,0.12)" }}>
      <div className="flex flex-col gap-1.5 px-4 pt-3 pb-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-0.5">
          <span className="text-[9px] font-mono text-white/45 tracking-widest uppercase">Entscheidungszeit</span>
          <span className="text-[9px] font-mono font-bold tracking-widest uppercase" style={{ transition:"color 0.6s", color: phase === 1 ? "#3366FF" : "rgba(255,255,255,0.30)" }}>
            {phase === 0 ? "3 Wochen · 21 Tage" : "4 Tage"}
          </span>
        </div>
        {/* Weekday labels */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:"3px" }}>
          {["Mo","Di","Mi","Do","Fr","Sa","So"].map(d => (
            <span key={d} className="text-center text-[9px] font-mono text-white/20">{d}</span>
          ))}
        </div>
        {/* 3×7 Day grid */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:"3px" }}>
          {Array.from({ length: 21 }).map((_, i) => {
            const on = phase === 0 || i < 4;
            return (
              <div key={i} className="rounded flex items-center justify-center" style={{
                aspectRatio:"1",
                transition:"background 0.6s, box-shadow 0.6s, opacity 0.6s",
                background: on ? "rgba(0,65,251,0.18)" : "transparent",
                opacity: on ? 1 : 0.18,
                boxShadow: on ? "inset 0 0 0 1px rgba(0,65,251,0.55)" : "inset 0 0 0 1px rgba(255,255,255,0.07)",
              }}>
                <span className="text-[11px] font-mono tabular-nums" style={{ transition:"color 0.6s", color: on ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.25)" }}>{i + 1}</span>
              </div>
            );
          })}
        </div>
        {/* Footer */}
        <div className="flex items-center justify-between mt-1">
          <span className="text-[9px] font-mono text-white/20 tracking-widest uppercase">Tage bis Entscheidung</span>
          <span className="text-[10px] font-mono font-bold text-[#3366FF] tracking-widest">– 17 TAGE</span>
        </div>
      </div>
    </div>
  );
}

function EnvelopeGridAnimation() {
  const [counter, setCounter] = useState(2);
  const CYCLE = 6000;
  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => {
      const p = ((Date.now() - start) % CYCLE) / CYCLE;
      setCounter(p < 0.85 ? 2 + Math.floor((p / 0.85) * 12) : 2);
    }, 64);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="w-full rounded-2xl overflow-hidden select-none" style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(25,60,180,0.35) 0%, #0A0D16 72%)", border: "1px solid rgba(255,255,255,0.12)" }}>
      <style>{`
        @keyframes bubble-pop {
          0%   { opacity:0; transform:scale(0.6); background:transparent; }
          8%   { opacity:1; transform:scale(1.08); background:rgba(0,65,251,0.20); }
          12%  { transform:scale(1.0); background:rgba(0,65,251,0.18); }
          85%  { opacity:1; transform:scale(1.0); background:rgba(0,65,251,0.18); }
          95%  { opacity:0; transform:scale(0.6); background:transparent; }
          100% { opacity:0; transform:scale(0.6); background:transparent; }
        }
      `}</style>
      <div className="flex flex-col gap-2 px-4 pt-3 pb-4">
        {/* Header */}
        <span className="text-[9px] font-mono text-white/45 tracking-widest uppercase">Organische Anfragen / Monat</span>
        {/* 7×2 grid */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:"5px" }}>
          {Array.from({ length: 14 }).map((_, i) => (
            <div
              key={i}
              className="rounded-lg flex items-center justify-center border border-white/[0.08]"
              style={{
                aspectRatio:"1",
                animation:"bubble-pop 6s linear infinite",
                animationDelay:`${i * 0.32}s`,
                opacity: 0,
              }}
            >
              <svg viewBox="0 0 20 16" fill="none" className="w-[55%] h-[55%]">
                <rect x="1" y="1" width="18" height="14" rx="1.5" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2"/>
                <path d="M1 2.5L10 9.5L19 2.5" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
          ))}
        </div>
        {/* Footer counter */}
        <div className="flex items-baseline gap-1.5 mt-1">
          <span className="text-[10px] font-mono text-white/25 tracking-widest uppercase">Vorher</span>
          <span className="text-[13px] font-black text-white/30 line-through tabular-nums">2</span>
          <span className="text-[10px] font-mono text-white/25 tracking-widest uppercase mx-1">· Jetzt</span>
          <span className="font-heading text-[38px] font-black text-[#3366FF] leading-none tabular-nums" style={{ textShadow:"0 0 16px rgba(51,102,255,0.5)" }}>{counter}</span>
          <span className="text-[10px] font-mono text-white/25 tracking-widest uppercase">/ Monat</span>
        </div>
      </div>
    </div>
  );
}

function GoogleSearchAnimation() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => (t + 1) % SEO_STATES.length), 900);
    return () => clearInterval(id);
  }, []);
  const order = SEO_STATES[tick];
  const page  = SEO_PAGES[tick];
  return (
    <div className="w-full rounded-2xl overflow-hidden select-none" style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(25,60,180,0.35) 0%, #0A0D16 72%)", border: "1px solid rgba(255,255,255,0.12)" }}>
    <div className="flex flex-col gap-1.5 px-4 pt-3 pb-4">
      {/* Search bar */}
      <div className="flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-3 py-1.5 mb-0.5">
        <div className="flex gap-0.5 shrink-0">
          {["#4285F4","#EA4335","#FBBC05","#34A853"].map((c,i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full" style={{ background: c }} />
          ))}
        </div>
        <span className="text-[11px] text-white/60 truncate">handwerker münster</span>
      </div>
      {/* Position label */}
      <div className="flex items-center gap-1.5 mb-0.5">
        <span className="text-[9px] font-mono text-white/25 tracking-widest uppercase">Position · Seite</span>
        <motion.span
          key={page}
          initial={{ opacity: 0, y: -3 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`text-[9px] font-mono font-bold tracking-widest ${page === 1 ? "text-[#3366FF]" : "text-white/50"}`}
        >{page}</motion.span>
      </div>
      {/* Rows */}
      <div className="relative" style={{ height: SEO_ROWS.length * ROW_H }}>
        {SEO_ROWS.map((row, i) => {
          const pos = order.indexOf(i);
          return (
            <motion.div
              key={i}
              className={`absolute left-0 right-0 flex items-center gap-2 rounded-lg px-2.5 py-2 ${
                row.you
                  ? "bg-[#3366FF]/[0.15] border border-[#3366FF]/40 shadow-[0_0_14px_rgba(51,102,255,0.22)]"
                  : "bg-white/[0.06] border border-white/[0.09]"
              }`}
              style={{ height: ROW_H - 5 }}
              animate={{ y: pos * ROW_H }}
              transition={{ duration: 1.2, ease: [0.6, 0.05, 0.3, 1] }}
            >
              <div className={`h-5 w-5 rounded-sm shrink-0 ${row.you ? "bg-gradient-to-br from-[#3366FF] to-[#0034C8]" : "bg-white/[0.10]"}`} />
              <div className="flex-1 min-w-0">
                <p className={`text-[11px] font-semibold truncate ${row.you ? "text-[#6699FF]" : "text-white/70"}`}>{row.domain}</p>
                <p className="text-[9px] text-white/35 truncate">{row.snippet}</p>
              </div>
              <span className={`text-[12px] font-mono font-bold shrink-0 ${row.you ? "text-[#3366FF]" : "text-white/35"}`}>{pos + 1}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
    </div>
  );
}

function NetworkAnimation() {
  const CX = 100, CY = 100, SAT_R = 72;
  const LIT_IDX = new Set([0, 1, 2, 3]);

  const satellites = Array.from({ length: 6 }, (_, i) => {
    const angle = (i / 6) * 2 * Math.PI - Math.PI / 2;
    return {
      x: CX + Math.cos(angle) * SAT_R,
      y: CY + Math.sin(angle) * SAT_R,
      lit: LIT_IDX.has(i),
      pDelay: i * 0.3,
      lDelay: i * 0.5,
    };
  });

  return (
    <div className="w-full rounded-2xl overflow-hidden select-none" style={{
      background: "radial-gradient(ellipse at 60% 50%, rgba(25,60,180,0.35) 0%, #0A0D16 72%)",
      border: "1px solid rgba(255,255,255,0.12)",
    }}>
      <style>{`
        @keyframes net-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
        @keyframes net-dash {
          from { stroke-dashoffset: 200; }
          to   { stroke-dashoffset: 0; }
        }
      `}</style>
      <div className="flex items-center justify-between px-4 pt-3 pb-1">
        <span className="text-[9px] font-mono text-white/45 tracking-widest uppercase">Netzwerk-Effekt</span>
        <div className="flex items-center gap-1.5">
          <motion.div animate={{ opacity: [1,0,1] }} transition={{ duration: 1.4, repeat: Infinity }} className="h-1.5 w-1.5 rounded-full bg-[#3366FF]" />
          <span className="text-[9px] font-mono text-white/45 tracking-widest uppercase">Live</span>
        </div>
      </div>
      <div className="flex items-center gap-3 px-4 pb-4 pt-1">
        {/* Network graph */}
        <div className="shrink-0" style={{ width: 140, height: 140 }}>
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <linearGradient id="net-fire" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4477FF" />
                <stop offset="100%" stopColor="#002FA8" />
              </linearGradient>
            </defs>
            {/* Base dashed lines */}
            {satellites.map(({ x, y }, i) => (
              <line key={`bd-${i}`} x1={CX} y1={CY} x2={x} y2={y}
                stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="6 6" />
            ))}
            {/* Hot animated lines for lit nodes */}
            {satellites.filter(s => s.lit).map(({ x, y, lDelay }, i) => (
              <line key={`hl-${i}`} x1={CX} y1={CY} x2={x} y2={y}
                stroke="#3366FF" strokeWidth="1.5"
                strokeDasharray="4 200" strokeLinecap="round"
                style={{
                  animation: "net-dash 3s linear infinite",
                  animationDelay: `${lDelay}s`,
                  filter: "drop-shadow(0 0 6px rgba(51,102,255,0.6))",
                }}
              />
            ))}
            {/* Satellite nodes */}
            {satellites.map(({ x, y, lit, pDelay }, i) => (
              <g key={`sn-${i}`} transform={`translate(${x}, ${y})`}>
                <circle cx="0" cy="0" r="12"
                  fill={lit ? "rgba(0,65,251,0.18)" : "rgba(255,255,255,0.04)"}
                  stroke={lit ? "rgba(51,102,255,0.55)" : "rgba(255,255,255,0.12)"}
                  strokeWidth="1"
                  style={{
                    transformOrigin: "0px 0px",
                    animation: lit ? `net-pulse 4s ease-in-out ${pDelay}s infinite` : "none",
                    filter: lit ? "drop-shadow(0 0 5px rgba(51,102,255,0.45))" : "none",
                  }}
                />
                <circle cx="0" cy="0" r="5"
                  fill={lit ? "#3366FF" : "rgba(255,255,255,0.20)"} />
              </g>
            ))}
            {/* Center node */}
            <g transform={`translate(${CX}, ${CY})`}>
              <rect x="-17" y="-17" width="34" height="34" rx="8"
                fill="url(#net-fire)"
                style={{ filter: "drop-shadow(0 0 10px rgba(51,102,255,0.7))" }} />
              <rect x="-9" y="-5.5" width="18" height="11" rx="1.5" fill="rgba(255,255,255,0.92)" />
              <path d="M-9 -5.5 L0 1.5 L9 -5.5" stroke="rgba(200,58,0,0.6)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </g>
          </svg>
        </div>
        {/* Right stat */}
        <div className="flex flex-col gap-0.5">
          <span className="font-heading text-[58px] font-black text-[#3366FF] leading-none"
            style={{ textShadow: "0 0 24px rgba(51,102,255,0.65)" }}>68%</span>
          <span className="text-[9px] font-mono text-white/35 tracking-[0.14em] uppercase leading-[1.6]">WEITEREMPFEHLUNG</span>
          <span className="text-[9px] font-mono text-white/35 tracking-[0.14em] uppercase leading-[1.6]">AKTIVE KUNDEN</span>
          <div className="mt-2 inline-flex items-center self-start rounded-full border border-white/15 bg-white/[0.05] px-2.5 py-1">
            <span className="text-[9px] font-mono text-white/45 tracking-[0.12em] uppercase">EMPFEHLUNGEN · 3.2×</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const TOTAL      = 7;
const CARD_H     = 400;
const NAV_OFFSET = 96;
const CARD_GAP   = 24;

/* ─── Desktop stacking card ───────────────────────────────────── */
function StackCard({
  scrollProgress,
  index,
  cta,
  children,
}: {
  scrollProgress: MotionValue<number>;
  index: number;
  cta?: React.ReactNode;
  children: React.ReactNode;
}) {
  const isLast = index === TOTAL - 1;
  // The scroll offsets are tuned so card k pins exactly at progress k/(TOTAL−1);
  // card `index` is active between its own arrival and the next card's.
  const arrive = index / (TOTAL - 1);
  const covered = Math.min(1, (index + 1) / (TOTAL - 1));
  const filter = useTransform(scrollProgress, [arrive, covered], ["brightness(1)", isLast ? "brightness(1)" : "brightness(0.7)"]);
  // Fully covered cards are hidden so they can't peek out below the (taller)
  // last slot while the section scrolls away.
  const opacity = useTransform(scrollProgress, [covered - 0.02, covered], [1, isLast ? 1 : 0]);
  // Active card gets a subtle blue edge; it fades back out as the next card covers it.
  const borderColor = useTransform(
    scrollProgress,
    isLast ? [arrive - 0.04, arrive] : [arrive - 0.04, arrive, covered - 0.02, covered],
    isLast
      ? ["rgba(255,255,255,0.08)", "rgba(96,140,255,0.45)"]
      : ["rgba(255,255,255,0.08)", "rgba(96,140,255,0.45)", "rgba(96,140,255,0.45)", "rgba(255,255,255,0.08)"]
  );

  return (
    <div
      className="sticky w-full"
      style={{
        top: NAV_OFFSET,
        zIndex: index + 1,
        marginBottom: CARD_GAP,
      }}
    >
      <motion.div
        className="relative rounded-3xl flex items-stretch overflow-hidden bg-[#0D0D10] border"
        style={{ filter, borderColor, opacity, height: CARD_H }}
      >
        {/* Accent bar alternates sides: even cards left, odd cards right */}
        {index % 2 === 0 && <div className="w-1 shrink-0 bg-gradient-to-b from-[#3366FF] to-[#0034C8]" />}
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-center flex-1 p-5 md:p-8">
          {children}
        </div>
        {index % 2 === 1 && <div className="w-1 shrink-0 bg-gradient-to-b from-[#3366FF] to-[#0034C8]" />}
      </motion.div>
      {/* CTA lives inside the last card's sticky slot, so it pins and releases with it */}
      {cta && <div className="flex justify-center" style={{ marginTop: 90 }}>{cta}</div>}
    </div>
  );
}

/* ─── Mobile stacking card ────────────────────────────────────── */
function MobileCard({
  scrollProgress,
  index,
  children,
}: {
  scrollProgress: MotionValue<number>;
  index: number;
  children: React.ReactNode;
}) {
  const isLast = index === TOTAL - 1;
  // Cards are auto-height on mobile; with a small gap the arrivals are spread
  // roughly evenly over (TOTAL − 1) segments of the container.
  const arrive = Math.min(1, index / (TOTAL - 1));
  const covered = Math.min(1, (index + 1) / (TOTAL - 1));
  const filter = useTransform(scrollProgress, [arrive, covered], ["brightness(1)", isLast ? "brightness(1)" : "brightness(0.7)"]);
  // Fully covered cards are hidden so they can't peek out below shorter cards
  // while the section scrolls away.
  const opacity = useTransform(scrollProgress, [covered - 0.02, covered], [1, isLast ? 1 : 0]);
  // Active card gets a subtle blue edge; it fades back out as the next card covers it.
  const borderColor = useTransform(
    scrollProgress,
    isLast ? [arrive - 0.04, arrive] : [arrive - 0.04, arrive, covered - 0.02, covered],
    isLast
      ? ["rgba(255,255,255,0.08)", "rgba(96,140,255,0.45)"]
      : ["rgba(255,255,255,0.08)", "rgba(96,140,255,0.45)", "rgba(96,140,255,0.45)", "rgba(255,255,255,0.08)"]
  );

  return (
    <div className="sticky w-full" style={{ top: 76, zIndex: index + 1, marginBottom: isLast ? 0 : 16 }}>
      <motion.div
        className="rounded-2xl bg-[#0D0D10] border flex items-stretch overflow-hidden"
        style={{ filter, borderColor, opacity, maxHeight: "calc(100vh - 96px)" }}
      >
        {/* Accent bar alternates sides: even cards left, odd cards right */}
        {index % 2 === 0 && <div className="w-1 shrink-0 bg-gradient-to-b from-[#3366FF] to-[#0034C8]" />}
        <div className="flex flex-col gap-4 p-5 flex-1 min-w-0">
          {children}
        </div>
        {index % 2 === 1 && <div className="w-1 shrink-0 bg-gradient-to-b from-[#3366FF] to-[#0034C8]" />}
      </motion.div>
    </div>
  );
}

/* ─── Section ─────────────────────────────────────────────────── */
export default function ScrollCardsSection() {
  const stackRef = useRef<HTMLDivElement>(null);
  // Progress 0 = first card pinned at NAV_OFFSET; progress 1 = last card fully
  // covering (its slot bottom ≈ NAV_OFFSET + CARD_H + CTA block).
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: [`start ${NAV_OFFSET}px`, `end ${NAV_OFFSET + CARD_H + 154}px`],
  });
  const p = { scrollProgress: scrollYProgress };

  const mobileStackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mobileProgress } = useScroll({ target: mobileStackRef, offset: ["start start", "end end"] });
  const pm = { scrollProgress: mobileProgress };

  const sectionHeader = (
    <>
      <span className="inline-flex items-center gap-2 rounded-full border border-[#0041FB]/40 bg-white px-4 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-[#0041FB] uppercase mb-5">
        Das CopyStudio-Prinzip sorgt für diese Ergebnisse
      </span>
      <h2 className="font-heading text-[44px] md:text-[68px] font-black leading-[1.05] tracking-[-0.03em] text-white max-w-[820px] mx-auto">
        Dein Marketing sollte keine<br />bloßen Wörter verkörpern …
      </h2>
      <p className="mt-3 text-[14px] text-white/50 max-w-[460px] mx-auto leading-relaxed">
        Das ändert sich, wenn <strong className="text-white/80">deine Botschaft</strong> die Sprache deiner Zielgruppe spricht:
      </p>
    </>
  );

  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          DESKTOP — stacking cards overlap (md and above)
      ══════════════════════════════════════════════════════════ */}
      <section className="hidden md:block relative bg-black pb-16">
        <div className="blue-glow-blob pointer-events-none absolute top-[5%] right-[-80px] h-[700px] w-[700px] opacity-[0.35]" />
        <div className="blue-glow-blob pointer-events-none absolute bottom-[15%] left-[-80px] h-[700px] w-[700px] opacity-[0.30]" />

        {/* Headline in normal flow — scrolls out before the cards stack */}
        <div className="px-6 pt-28 pb-16 text-center">
          <div className="w-full max-w-[1120px] mx-auto">
            {sectionHeader}
          </div>
        </div>

        {/* Card stack: every card is sticky within this container, so each one
            stays put while the next slides over it — plain CSS sticky, no pin. */}
        <div ref={stackRef} className="relative w-full max-w-[1120px] mx-auto px-6">

              <StackCard {...p} index={0}>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] font-mono text-white/30 tracking-widest">— 01</span>
                  <h3 className="mt-2 font-heading text-[32px] font-black leading-[1.15] tracking-[-0.02em] text-white">Mehr Anfragen über Google</h3>
                  <div className="mt-2 w-8 h-[2px] rounded-full bg-[#0041FB]" />
                  <p className="mt-3 text-[13px] text-white/60 leading-relaxed max-w-[340px]">Deine neue Website ist SEO-optimiert und lädt blitzschnell. Das heißt: Kunden finden <strong className="text-white/80">dich</strong> – nicht deine Konkurrenz. <strong className="text-white/80">Vorher Seite 3. Jetzt Seite 1.</strong> Mehr qualifizierte Anfragen.</p>
                </div>
                <div className="shrink-0 w-[400px]">
                  <GoogleSearchAnimation />
                </div>
              </StackCard>

              <StackCard {...p} index={1}>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] font-mono text-white/30 tracking-widest">— 02</span>
                  <h3 className="mt-2 font-heading text-[32px] font-black leading-[1.15] tracking-[-0.02em] text-white">Höheres Vertrauen ab der ersten Sekunde</h3>
                  <div className="mt-2 w-8 h-[2px] rounded-full bg-[#0041FB]" />
                  <p className="mt-3 text-[13px] text-white/60 leading-relaxed max-w-[340px]">Deine Website senkt die Absprungrate drastisch. Besucher entscheiden schneller – und vertrauen dir, <strong className="text-white/80">bevor du ein Wort sagst.</strong></p>
                </div>
                <div className="shrink-0 w-[400px]">
                  <BounceRateAnimation />
                </div>
              </StackCard>

              <StackCard {...p} index={2}>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] font-mono text-white/30 tracking-widest">— 03</span>
                  <h3 className="mt-2 font-heading text-[32px] font-black leading-[1.15] tracking-[-0.02em] text-white">Mehr Kunden ohne Werbebudget</h3>
                  <div className="mt-2 w-8 h-[2px] rounded-full bg-[#0041FB]" />
                  <p className="mt-3 text-[13px] text-white/60 leading-relaxed max-w-[340px]">Eine gute Website bringt organisch Anfragen rein – ohne dass du jeden Monat Geld in Werbeanzeigen stecken musst. <strong className="text-white/80">Von 2 auf 14 Anfragen pro Monat.</strong></p>
                </div>
                <div className="shrink-0 w-[400px]">
                  <EnvelopeGridAnimation />
                </div>
              </StackCard>

              <StackCard {...p} index={3}>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] font-mono text-white/30 tracking-widest">— 04</span>
                  <h3 className="mt-2 font-heading text-[32px] font-black leading-[1.15] tracking-[-0.02em] text-white">Kürzere Entscheidungszeit beim Kunden</h3>
                  <div className="mt-2 w-8 h-[2px] rounded-full bg-[#0041FB]" />
                  <p className="mt-3 text-[13px] text-white/60 leading-relaxed max-w-[340px]">Wenn deine Website sofort zeigt, wer du bist und was du kannst, muss der Kunde nicht mehr lange überlegen. <strong className="text-white/80">Statt 3 Wochen entscheidet er in 4 Tagen.</strong></p>
                </div>
                <div className="shrink-0 w-[400px]">
                  <DecisionCalendarAnimation />
                </div>
              </StackCard>

              <StackCard {...p} index={4}>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] font-mono text-white/30 tracking-widest">— 05</span>
                  <h3 className="mt-2 font-heading text-[32px] font-black leading-[1.15] tracking-[-0.02em] text-white">Professioneller als deine Konkurrenz</h3>
                  <div className="mt-2 w-8 h-[2px] rounded-full bg-[#0041FB]" />
                  <p className="mt-3 text-[13px] text-white/60 leading-relaxed max-w-[340px]">90% der lokalen Unternehmen haben schlechte Websites. Dein neuer Auftritt sticht sofort raus – <strong className="text-white/80">fast dreimal über dem Branchenschnitt.</strong></p>
                </div>
                <div className="shrink-0 w-[400px]">
                  <PerformanceBarAnimation />
                </div>
              </StackCard>

              <StackCard {...p} index={5}>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] font-mono text-white/30 tracking-widest">— 06</span>
                  <h3 className="mt-2 font-heading text-[32px] font-black leading-[1.15] tracking-[-0.02em] text-white">Deine Website verkauft auch um 23 Uhr</h3>
                  <div className="mt-2 w-8 h-[2px] rounded-full bg-[#0041FB]" />
                  <p className="mt-3 text-[13px] text-white/60 leading-relaxed max-w-[340px]">Dein bester Mitarbeiter braucht keinen Feierabend. Anfragen kommen rein – auch nachts, am Wochenende, im Urlaub. <strong className="text-white/80">41% landen außerhalb deiner Geschäftszeiten.</strong></p>
                </div>
                <div className="shrink-0 w-[400px]">
                  <ClockAnimation />
                </div>
              </StackCard>

              <StackCard
                {...p}
                index={6}
                cta={
                  <a
                    href="https://calendly.com/maxdalke233/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blue-button rounded-2xl px-14 py-5 text-[14px] font-extrabold tracking-[0.08em] uppercase text-white hover:scale-[1.02] transition-all duration-200 inline-block"
                    style={{ boxShadow: "0 8px 40px rgba(0,65,251,0.45), 0 2px 12px rgba(0,65,251,0.30)" }}
                  >
                    Jetzt kostenloses Erstgespräch sichern
                  </a>
                }
              >
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] font-mono text-white/30 tracking-widest">— 07</span>
                  <h3 className="mt-2 font-heading text-[32px] font-black leading-[1.15] tracking-[-0.02em] text-white">Dein Auftritt der für sich spricht</h3>
                  <div className="mt-2 w-8 h-[2px] rounded-full bg-[#0041FB]" />
                  <p className="mt-3 text-[13px] text-white/60 leading-relaxed max-w-[340px]">Kunden empfehlen dich weiter – und schicken den Link zu deiner Website. Wenn die überzeugt, <strong className="text-white/80">brauchst du kein Verkaufsgespräch mehr.</strong></p>
                </div>
                <div className="shrink-0 w-[400px]">
                  <NetworkAnimation />
                </div>
              </StackCard>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MOBILE — simple static list (below md)
      ══════════════════════════════════════════════════════════ */}
      <section className="md:hidden relative bg-black py-16 border-t border-white/[0.06]">
        <div className="blue-glow-blob pointer-events-none absolute top-0 right-[-60px] h-[400px] w-[400px] opacity-[0.25]" />

        {/* Header */}
        <div className="px-5 text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0041FB]/40 bg-white px-4 py-1.5 text-[10px] font-semibold tracking-[0.12em] text-[#0041FB] uppercase mb-4">
            Das CopyStudio-Prinzip sorgt für diese Ergebnisse
          </span>
          <h2 className="font-heading text-[36px] font-black leading-[1.05] tracking-[-0.03em] text-white">
            Dein Marketing sollte keine bloßen Wörter verkörpern …
          </h2>
          <p className="mt-3 text-[13px] text-white/60 leading-relaxed">
            Das ändert sich, wenn <strong className="text-white/80">deine Botschaft</strong> die Sprache deiner Zielgruppe spricht:
          </p>
        </div>

        {/* Card stack — same sticky overlap mechanism as desktop */}
        <div ref={mobileStackRef} className="relative px-4">

          <MobileCard {...pm} index={0}>
            <span className="text-[10px] font-mono text-white/30 tracking-widest">— 01</span>
            <h3 className="font-heading text-[24px] font-black leading-[1.15] tracking-[-0.02em] text-white">Mehr Anfragen über Google</h3>
            <div className="w-8 h-[2px] rounded-full bg-[#0041FB]" />
            <p className="text-[13px] text-white/60 leading-relaxed">Deine neue Website ist SEO-optimiert und lädt blitzschnell. Kunden finden <strong className="text-white/80">dich</strong> – nicht deine Konkurrenz. <strong className="text-white/80">Vorher Seite 3. Jetzt Seite 1.</strong></p>
            <GoogleSearchAnimation />
          </MobileCard>

          <MobileCard {...pm} index={1}>
            <span className="text-[10px] font-mono text-white/30 tracking-widest">— 02</span>
            <h3 className="font-heading text-[24px] font-black leading-[1.15] tracking-[-0.02em] text-white">Höheres Vertrauen ab der ersten Sekunde</h3>
            <div className="w-8 h-[2px] rounded-full bg-[#0041FB]" />
            <p className="text-[13px] text-white/60 leading-relaxed">Deine Website senkt die Absprungrate drastisch. Besucher entscheiden schneller – und vertrauen dir, <strong className="text-white/80">bevor du ein Wort sagst.</strong></p>
            <BounceRateAnimation />
          </MobileCard>

          <MobileCard {...pm} index={2}>
            <span className="text-[10px] font-mono text-white/30 tracking-widest">— 03</span>
            <h3 className="font-heading text-[24px] font-black leading-[1.15] tracking-[-0.02em] text-white">Mehr Kunden ohne Werbebudget</h3>
            <div className="w-8 h-[2px] rounded-full bg-[#0041FB]" />
            <p className="text-[13px] text-white/60 leading-relaxed">Eine gute Website bringt organisch Anfragen rein – ohne Werbebudget. <strong className="text-white/80">Von 2 auf 14 Anfragen pro Monat.</strong></p>
            <EnvelopeGridAnimation />
          </MobileCard>

          <MobileCard {...pm} index={3}>
            <span className="text-[10px] font-mono text-white/30 tracking-widest">— 04</span>
            <h3 className="font-heading text-[24px] font-black leading-[1.15] tracking-[-0.02em] text-white">Kürzere Entscheidungszeit beim Kunden</h3>
            <div className="w-8 h-[2px] rounded-full bg-[#0041FB]" />
            <p className="text-[13px] text-white/60 leading-relaxed">Wenn deine Website sofort zeigt, wer du bist, muss der Kunde nicht lange überlegen. <strong className="text-white/80">Statt 3 Wochen entscheidet er in 4 Tagen.</strong></p>
            <DecisionCalendarAnimation />
          </MobileCard>

          <MobileCard {...pm} index={4}>
            <span className="text-[10px] font-mono text-white/30 tracking-widest">— 05</span>
            <h3 className="font-heading text-[24px] font-black leading-[1.15] tracking-[-0.02em] text-white">Professioneller als deine Konkurrenz</h3>
            <div className="w-8 h-[2px] rounded-full bg-[#0041FB]" />
            <p className="text-[13px] text-white/60 leading-relaxed">90% der lokalen Unternehmen haben schlechte Websites. Dein Auftritt sticht sofort raus – <strong className="text-white/80">fast dreimal über dem Branchenschnitt.</strong></p>
            <PerformanceBarAnimation />
          </MobileCard>

          <MobileCard {...pm} index={5}>
            <span className="text-[10px] font-mono text-white/30 tracking-widest">— 06</span>
            <h3 className="font-heading text-[24px] font-black leading-[1.15] tracking-[-0.02em] text-white">Deine Website verkauft auch um 23 Uhr</h3>
            <div className="w-8 h-[2px] rounded-full bg-[#0041FB]" />
            <p className="text-[13px] text-white/60 leading-relaxed">Dein bester Mitarbeiter braucht keinen Feierabend. Anfragen kommen rein – auch nachts, am Wochenende, im Urlaub. <strong className="text-white/80">41% landen außerhalb deiner Geschäftszeiten.</strong></p>
            <ClockAnimation />
          </MobileCard>

          <MobileCard {...pm} index={6}>
            <span className="text-[10px] font-mono text-white/30 tracking-widest">— 07</span>
            <h3 className="font-heading text-[24px] font-black leading-[1.15] tracking-[-0.02em] text-white">Dein Auftritt der für sich spricht</h3>
            <div className="w-8 h-[2px] rounded-full bg-[#0041FB]" />
            <p className="text-[13px] text-white/60 leading-relaxed">Kunden empfehlen dich weiter – und schicken den Link zu deiner Website. Wenn die überzeugt, <strong className="text-white/80">brauchst du kein Verkaufsgespräch mehr.</strong></p>
            <NetworkAnimation />
          </MobileCard>

        </div>

        {/* CTA */}
        <div className="mt-6 flex justify-center px-4">
          <a
            href="https://calendly.com/maxdalke233/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="blue-button rounded-2xl px-8 py-5 text-[13px] font-extrabold tracking-[0.08em] uppercase text-white w-full max-w-[380px] inline-block text-center"
            style={{ boxShadow: "0 8px 40px rgba(0,65,251,0.45)" }}
          >
            Jetzt kostenloses Erstgespräch sichern
          </a>
        </div>
      </section>
    </>
  );
}
