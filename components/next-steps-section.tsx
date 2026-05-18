"use client";

import { useEffect, useState } from "react";

/* ── Animated Video-Call Widget for Step 02 ── */
const SPEAKER_PATTERN = [
  { speaker: "DU", ms: 1700 },
  { speaker: "CS", ms: 2200 },
  { speaker: "DU", ms: 900 },
  { speaker: "CS", ms: 2800 },
];

function WaveformBars({ active }: { active: boolean }) {
  return (
    <div className="flex items-end gap-[2px] h-[9px]">
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className="w-[2px] rounded-full bg-[#e85d44]"
          style={{
            height: active ? undefined : "3px",
            animation: active
              ? `waveBar 0.9s ease-in-out ${i * 0.12}s infinite alternate`
              : "none",
            transition: "height 0.2s ease",
          }}
        />
      ))}
    </div>
  );
}

function VideoCallWidget() {
  const [active, setActive] = useState<"DU" | "CS">("DU");
  const [step, setStep] = useState(0);

  useEffect(() => {
    const { ms } = SPEAKER_PATTERN[step];
    const timer = setTimeout(() => {
      const next = (step + 1) % SPEAKER_PATTERN.length;
      setStep(next);
      setActive(SPEAKER_PATTERN[next].speaker as "DU" | "CS");
    }, ms);
    return () => clearTimeout(timer);
  }, [step]);

  return (
    <>
      <style>{`
        @keyframes waveBar {
          from { height: 3px; }
          to   { height: 9px; }
        }
        @keyframes recPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(232,93,68,0.5); }
          50%       { box-shadow: 0 0 0 5px rgba(232,93,68,0); }
        }
      `}</style>

      <div className="w-full h-[120px] rounded-xl bg-[#f5f0ec] border border-black/[0.05] flex items-center justify-center p-3">
        <div className="w-full h-full rounded-lg bg-white border border-black/[0.08] shadow-sm flex flex-col justify-between p-2.5">

          {/* Two tiles */}
          <div className="flex gap-2 flex-1">
            {(["DU", "CS"] as const).map((tile) => {
              const isActive = active === tile;
              return (
                <div
                  key={tile}
                  className="flex-1 rounded-lg flex flex-col items-center justify-center gap-1.5 transition-all duration-300"
                  style={{
                    background: isActive ? "rgba(232,93,68,0.08)" : "#f0ebe7",
                    border: isActive ? "1.5px solid rgba(232,93,68,0.55)" : "1.5px solid transparent",
                    boxShadow: isActive ? "0 0 10px rgba(232,93,68,0.15)" : "none",
                  }}
                >
                  <div
                    className="h-5 w-5 rounded-full transition-all duration-300"
                    style={{
                      background: isActive ? "rgba(232,93,68,0.75)" : "rgba(0,0,0,0.15)",
                      boxShadow: isActive ? "0 0 0 3px rgba(232,93,68,0.2)" : "none",
                    }}
                  />
                  <WaveformBars active={isActive} />
                  <span
                    className="text-[7px] font-bold tracking-widest transition-colors duration-300"
                    style={{ color: isActive ? "#e85d44" : "rgba(0,0,0,0.35)" }}
                  >
                    {tile}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Controls bar */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-2.5 w-2.5 rounded-full bg-black/10" />
              ))}
            </div>
            <div
              className="h-3.5 w-3.5 rounded-full bg-[#e85d44]"
              style={{ animation: "recPulse 1.4s ease-in-out infinite" }}
            />
            <span className="text-[7px] font-semibold text-black/30 tracking-[0.08em]">
              15 – 20 MIN · LIVE
            </span>
          </div>

        </div>
      </div>
    </>
  );
}

/* ── Animated Form Widget for Step 01 ── */
function FormWidget() {
  return (
    <>
      <style>{`
        @keyframes cs-dot-pulse {
          0%, 24%   { background: rgba(0,0,0,0.12); transform: scale(1); box-shadow: none; }
          30%        { background: rgba(232,75,26,0.85); transform: scale(1.1); box-shadow: 0 0 0 4px rgba(232,75,26,0.12); }
          40%, 100% { background: rgba(0,0,0,0.12); transform: scale(1); box-shadow: none; }
        }
        @keyframes cs-fill-grow {
          0%, 5%      { width: 0%; }
          35%         { width: 78%; }
          93%         { width: 78%; }
          93.1%, 100% { width: 0%; }
        }
        @keyframes cs-caret-move {
          0%, 8%    { left: 0%; opacity: 0; }
          9%        { left: 0%; opacity: 1; }
          35%       { left: calc(78% - 1px); opacity: 1; }
          36%       { left: calc(78% - 1px); opacity: 0; }
          93%, 100% { left: 0%; opacity: 0; }
        }
        @keyframes cs-pill-appear {
          0%, 55%     { transform: scale(0.7); opacity: 0; }
          63%         { transform: scale(1.08); opacity: 1; }
          68%, 93%    { transform: scale(1.0); opacity: 1; }
          93.1%, 100% { transform: scale(0.7); opacity: 0; }
        }
        @keyframes cs-check-draw {
          0%, 71%     { stroke-dashoffset: 28; opacity: 0; }
          72%         { stroke-dashoffset: 28; opacity: 1; }
          82%, 93%    { stroke-dashoffset: 0; opacity: 1; }
          93.1%, 100% { stroke-dashoffset: 28; opacity: 0; }
        }
      `}</style>
      <div className="w-full h-[120px] rounded-xl bg-[#f5f0ec] border border-black/[0.05] flex items-center justify-center p-3">
        <div className="w-full h-full rounded-lg bg-white border border-black/[0.08] shadow-sm flex flex-col p-3 gap-2">
          {/* Avatar dot */}
          <div style={{
            width: 8, height: 8, borderRadius: "50%",
            background: "rgba(0,0,0,0.12)", flexShrink: 0,
            animation: "cs-dot-pulse 4.4s ease-in-out infinite",
          }} />
          {/* Input track */}
          <div style={{ position: "relative", height: 6, background: "rgba(10,10,10,0.06)", borderRadius: 3 }}>
            <div style={{
              position: "absolute", left: 0, top: 0,
              height: "100%", borderRadius: 3,
              background: "rgba(10,10,10,0.28)",
              animation: "cs-fill-grow 4.4s cubic-bezier(.5,.1,.5,1) infinite",
            }} />
            <div style={{
              position: "absolute", top: -4,
              width: 1.5, height: "calc(100% + 8px)",
              background: "#e85d44", borderRadius: 1,
              animation: "cs-caret-move 4.4s cubic-bezier(.5,.1,.5,1) infinite",
            }} />
          </div>
          {/* Pill + checkmark */}
          <div className="mt-auto flex items-center gap-2">
            <div style={{
              height: 20, padding: "0 10px", borderRadius: 5,
              background: "#e85d44",
              display: "flex", alignItems: "center",
              boxShadow: "0 2px 8px rgba(232,93,68,0.35)",
              transformOrigin: "left center",
              animation: "cs-pill-appear 4.4s cubic-bezier(.5,.1,.5,1) infinite",
              opacity: 0,
            }}>
              <span style={{ fontSize: 7, fontWeight: 700, color: "white", letterSpacing: "0.12em", fontFamily: "monospace" }}>TERMIN</span>
            </div>
            <svg width="16" height="16" fill="none" stroke="#e85d44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="m4.5 12.75 6 6 9-13.5" style={{
                strokeDasharray: 28, strokeDashoffset: 28,
                animation: "cs-check-draw 4.4s ease-out infinite",
                opacity: 0,
              }} />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

/* ── Animated Agreement Widget for Step 03 ── */
function AgreementWidget() {
  return (
    <>
      <style>{`
        @keyframes ag-fill-grow {
          0%          { width: 0%; }
          55%         { width: 100%; }
          93%         { width: 100%; }
          93.1%, 100% { width: 0%; }
        }
        @keyframes ag-text-fade {
          0%, 50%     { opacity: 0; }
          62%         { opacity: 1; }
          93%         { opacity: 1; }
          93.1%, 100% { opacity: 0; }
        }
        @keyframes ag-check-pop {
          0%, 55%     { transform: scale(0); opacity: 0; }
          63%         { transform: scale(1.15); opacity: 1; }
          68%, 93%    { transform: scale(1); opacity: 1; }
          93.1%, 100% { transform: scale(0); opacity: 0; }
        }
        @keyframes ag-stroke-draw {
          0%, 62%     { stroke-dashoffset: 18; opacity: 0; }
          63%         { stroke-dashoffset: 18; opacity: 1; }
          72%, 93%    { stroke-dashoffset: 0; opacity: 1; }
          93.1%, 100% { stroke-dashoffset: 18; opacity: 0; }
        }
      `}</style>
      <div className="w-full h-[120px] rounded-xl bg-[#f5f0ec] border border-black/[0.05] flex items-center justify-center p-3">
        <div className="w-full h-full rounded-lg bg-white border border-black/[0.08] shadow-sm flex flex-col p-2.5 gap-1.5">
          {/* Label */}
          <span style={{
            fontSize: 10, fontFamily: "monospace", fontWeight: 700,
            letterSpacing: "0.24em", color: "rgba(0,0,0,0.28)",
            textTransform: "uppercase",
          }}>VEREINBARUNG</span>
          {/* Divider */}
          <div style={{ height: 1, background: "rgba(0,0,0,0.08)", flexShrink: 0 }} />
          {/* Track */}
          <div style={{
            height: 28, borderRadius: 7, flexShrink: 0,
            background: "rgba(232,75,26,0.08)",
            position: "relative", overflow: "hidden",
          }}>
            {/* Fill */}
            <div style={{
              position: "absolute", inset: 0, borderRadius: 7,
              background: "#e85d44",
              boxShadow: "0 2px 12px rgba(232,93,68,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
              animation: "ag-fill-grow 4.6s cubic-bezier(.5,.1,.5,1) infinite",
              width: "0%",
            }}>
              <span style={{
                fontSize: 11, fontWeight: 500, color: "white",
                whiteSpace: "nowrap",
                animation: "ag-text-fade 4.6s linear infinite",
                opacity: 0,
              }}>Wir starten gemeinsam.</span>
            </div>
          </div>
          {/* Check circle */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: 1 }}>
            <div style={{
              width: 24, height: 24, borderRadius: "50%",
              background: "#e85d44",
              boxShadow: "0 6px 16px rgba(232,75,26,0.35)",
              display: "flex", alignItems: "center", justifyContent: "center",
              animation: "ag-check-pop 4.6s cubic-bezier(.6,0,.3,1) infinite",
              transform: "scale(0)", opacity: 0,
            }}>
              <svg width="14" height="11" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 14 11">
                <path
                  d="M1.5 5.5 L5.5 9.5 L12.5 1.5"
                  style={{
                    strokeDasharray: 18,
                    strokeDashoffset: 18,
                    animation: "ag-stroke-draw 4.6s linear infinite",
                    opacity: 0,
                  }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ── Steps data ── */
const steps = [
  {
    number: "01",
    title: "Unverbindliches Erstgespräch buchen",
    description: (
      <>
        Füll das <strong className="text-black font-bold">kurze Formular</strong> aus und such dir einen
        Termin aus, der für dich passt.{" "}
        <strong className="text-black font-bold">Kostenlos, unverbindlich, kein Verkaufsdruck.</strong>
      </>
    ),
    illustration: <FormWidget />,
  },
  {
    number: "02",
    title: "Wir lernen dein Business kennen",
    description: (
      <>
        In einem <strong className="text-black font-bold">15–20-minütigen Video-Call</strong> schauen wir uns an,
        wo du gerade stehst, was deine Website können muss und ob wir der{" "}
        <strong className="text-black font-bold">richtige Partner</strong> für dich sind.{" "}
        <strong className="text-black font-bold">Ehrlich und auf Augenhöhe.</strong>
      </>
    ),
    illustration: <VideoCallWidget />,
  },
  {
    number: "03",
    title: "Du entscheidest – wir legen los",
    description: (
      <>
        Wenn es <strong className="text-black font-bold">für beide Seiten passt</strong>, bekommst du ein
        klares Angebot. <strong className="text-black font-bold">Kein Kleingedrucktes, keine Überraschungen.</strong>{" "}
        Und dann bauen wir dir den Auftritt, den dein Business verdient.
      </>
    ),
    illustration: <AgreementWidget />,
  },
];

export default function NextStepsSection() {
  return (
    <section className="bg-[#faf7f4] pt-12 pb-24 md:pt-14 md:pb-32">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10 lg:px-16">

        <div className="flex justify-center mb-7">
          <span className="inline-flex items-center rounded-full border border-[#ff5000]/40 bg-[#ff5000]/08 px-4 py-1.5 text-[10px] font-bold tracking-[0.14em] uppercase text-[#ff5000]">
            So läuft es ab
          </span>
        </div>

        <h2 className="font-heading text-[30px] md:text-[44px] lg:text-[52px] font-black leading-[1.08] tracking-[-0.025em] text-black text-center mb-12 md:mb-16">
          Deine nächsten Schritte
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl bg-white border border-black/[0.07] p-7 flex flex-col gap-5"
            >
              <div className="flex items-center gap-3">
                <span className="font-heading text-[36px] font-black leading-none text-[#e85d44] tracking-[-0.02em] shrink-0">
                  {step.number}
                </span>
                <div className="flex-1 h-px bg-black/[0.07]" />
              </div>
              {step.illustration}
              <h3 className="font-heading text-[16px] font-black text-black leading-[1.3] tracking-[-0.01em]">
                {step.title}
              </h3>
              <p className="text-[13px] leading-[1.7] text-black/50">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            className="orange-button rounded-xl px-10 py-4 text-[12px] font-extrabold tracking-[0.08em] uppercase text-white hover:scale-[1.02] transition-all duration-200"
            style={{ boxShadow: "0 8px 40px rgba(232,93,68,0.45), 0 2px 12px rgba(232,93,68,0.30)" }}
          >
            Jetzt kostenloses Erstgespräch sichern
          </button>
        </div>

      </div>
    </section>
  );
}
