"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

interface StatCardProps {
  value: string;
  label: string;
}

function parseValue(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, suffix: value };
  return { num: parseInt(match[1]), suffix: match[2] };
}

export default function StatCard({ value, label }: StatCardProps) {
  const { num, suffix } = parseValue(value);
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    setCount(0);
    setDone(false);
    const duration = 2800;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * num);
      setCount(current);
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setCount(num);
        setDone(true);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, num]);

  return (
    <div ref={ref} className="glass-card fine-dark-border rounded-2xl px-5 py-4 min-w-[128px] relative z-10">
      <div className="font-heading text-[30px] font-black text-white leading-none relative inline-block">
        {count}{suffix}
        <sup className="text-[9px] text-white/28 font-normal ml-0.5">*</sup>
        {/* Orange underline */}
        <motion.span
          className="absolute -bottom-1 left-0 w-full h-[2.5px] rounded-full"
          style={{ background: "linear-gradient(90deg, #ff5000, #ff8040)", originX: 0 }}
          initial={{ scaleX: 0 }}
          animate={done ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <div className="mt-1.5 text-[11px] text-white/42">{label}</div>
    </div>
  );
}
