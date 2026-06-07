'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    // Scroll während des Loadings sperren
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    let raf = 0;
    const start = performance.now();
    const DURATION_MS = 5000; // Loading-Screen läuft fest ca. 5 Sekunden

    const finish = () => {
      setProgress(100);
      // Kurze Pause auf 100%, dann Fade-out + Unmount
      window.setTimeout(() => setDone(true), reduceMotion ? 0 : 250);
      window.setTimeout(
        () => {
          document.body.style.overflow = prevOverflow;
          setHidden(true);
        },
        reduceMotion ? 0 : 250 + 450,
      );
    };

    if (reduceMotion) {
      finish();
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }

    const tick = (now: number) => {
      const elapsed = now - start;
      const ratio = Math.min(elapsed / DURATION_MS, 1);
      setProgress(ratio * 100);

      if (ratio >= 1) {
        finish();
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (hidden) return null;

  const pct = Math.round(progress);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100dvh',
        minHeight: '100vh',
        zIndex: 2147483647,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '36px',
        backgroundColor: '#090909',
        opacity: done ? 0 : 1,
        transition: 'opacity 450ms ease',
        pointerEvents: done ? 'none' : 'auto',
      }}
    >
      {/* Logo */}
      <img
        src="/images/logo-dalke.png"
        alt="Dalke Web"
        style={{
          height: '96px',
          width: 'auto',
          objectFit: 'contain',
          filter: 'drop-shadow(0 0 28px rgba(0, 65, 251, 0.25))',
        }}
      />

      {/* Fortschrittsbalken */}
      <div style={{ width: 'min(320px, 72vw)' }}>
        <div
          style={{
            position: 'relative',
            height: '4px',
            width: '100%',
            borderRadius: '999px',
            backgroundColor: 'rgba(255,255,255,0.10)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              width: `${pct}%`,
              borderRadius: '999px',
              background:
                'linear-gradient(90deg, #0034C8 0%, #0041FB 100%)',
              boxShadow: '0 0 16px rgba(0, 65, 251, 0.55)',
              transition: 'width 120ms linear',
            }}
          />
        </div>

        <div
          style={{
            marginTop: '12px',
            display: 'flex',
            justifyContent: 'flex-end',
            fontSize: '13px',
            fontVariantNumeric: 'tabular-nums',
            color: 'rgba(255,255,255,0.55)',
          }}
        >
          {pct}%
        </div>
      </div>

      {/* Claim */}
      <p
        style={{
          margin: 0,
          maxWidth: '440px',
          padding: '0 24px',
          textAlign: 'center',
          fontSize: '14px',
          lineHeight: 1.55,
          color: 'rgba(255,255,255,0.55)',
        }}
      >
        Die bestbewertete Websiten-Agentur im{' '}
        <span style={{ color: 'rgba(255,255,255,0.85)' }}>Main-Tauber-</span> und{' '}
        <span style={{ color: 'rgba(255,255,255,0.85)' }}>Rhein-Neckar-Kreis</span>
      </p>
    </div>
  );
}
