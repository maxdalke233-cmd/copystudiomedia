"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const words = ["Stillstand.", "Durchschnitt.", "Ausreden."];
const STAND_MS = 5000;
const TRANSITION_S = 0.6;

export default function CyclingWord() {
  const [index, setIndex] = useState(0);

  // A fresh 8-second timer is scheduled after each word change.
  // This avoids setInterval double-fire issues in React Strict Mode.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % words.length);
    }, STAND_MS);
    return () => clearTimeout(timer);
  }, [index]); // re-arms automatically whenever index changes

  return (
    <span style={{ display: "inline-block", verticalAlign: "bottom" }}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          initial={{ y: 14, opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0,   opacity: 1, filter: "blur(0px)" }}
          exit={{    y: -14, opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: TRANSITION_S, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic font-normal inline-block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
