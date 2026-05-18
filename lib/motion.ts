"use client";

export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});
