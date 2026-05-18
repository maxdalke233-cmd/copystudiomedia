"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import CopyStudioLogo from "@/components/copystudio-logo";

const navLinks = [
  { label: "Problem",    id: "problem"    },
  { label: "Prinzip",    id: "prinzip"    },
  { label: "Leistungen", id: "leistungen" },
  { label: "Methode",    id: "methode"    },
  { label: "Vergleich",  id: "vergleich"  },
  { label: "Über uns",   id: "ueber-uns"  },
  { label: "FAQ",        id: "faq"        },
];

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [activeSection, setActiveSection] = useState<string>("problem");
  const [mobileOpen, setMobileOpen]   = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 25, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div
          className={`glass-nav-pill pointer-events-auto h-[54px] w-full flex items-center pl-4 pr-2 transition-all duration-500 ease-in-out relative overflow-hidden ${
            scrolled ? "max-w-[940px] shadow-[0_8px_40px_rgba(0,0,0,0.65)]" : "max-w-[1140px]"
          }`}
        >
          {/* Scroll progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ff5000] origin-left"
            style={{ scaleX }}
          />

          {/* Orange accent */}
          <div className="w-[3px] h-[20px] rounded-full bg-[#ff5000] shrink-0 mr-4" />

          {/* Brand */}
          <div className="shrink-0 flex items-center">
            <CopyStudioLogo />
          </div>

          {/* Divider — desktop only */}
          <div className="hidden md:block w-px h-[20px] bg-white/15 mx-4 shrink-0" />

          {/* Nav links — desktop */}
          <nav className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-[13px] font-medium transition-colors duration-200 flex items-center gap-1 cursor-pointer px-2.5 py-2 rounded-full hover:bg-white/[0.05] whitespace-nowrap ${
                  activeSection === link.id ? "text-white" : "text-white/55 hover:text-white"
                }`}
              >
                <span className="relative">
                  {link.label}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-[4px] left-0 right-0 h-[2px] rounded-full bg-[#ff5000]"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </span>
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="ml-auto flex items-center gap-2" style={{ marginRight: "5px" }}>
            {/* CTA — desktop */}
            <button
              className="hidden md:flex orange-button rounded-full px-4 py-[7px] text-[13px] font-extrabold text-white items-center gap-2 hover:scale-[1.02] transition-all duration-200"
            >
              Erstgespräch sichern
              <ArrowRight className="h-3.5 w-3.5" />
            </button>

            {/* Hamburger — mobile */}
            <button
              className="md:hidden flex items-center justify-center h-9 w-9 rounded-full bg-white/[0.08] hover:bg-white/[0.14] transition-colors duration-200"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menü"
            >
              {mobileOpen
                ? <X className="h-4 w-4 text-white" />
                : <Menu className="h-4 w-4 text-white" />
              }
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed top-[74px] left-4 right-4 z-40 rounded-2xl overflow-hidden"
            style={{
              background: "rgba(10,10,10,0.96)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 24px 60px rgba(0,0,0,0.7)",
            }}
          >
            <nav className="flex flex-col py-3">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                  onClick={() => scrollTo(link.id)}
                  className={`text-left px-5 py-3.5 text-[15px] font-medium transition-colors duration-150 flex items-center justify-between ${
                    activeSection === link.id
                      ? "text-white bg-white/[0.06]"
                      : "text-white/55 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <div className="h-1.5 w-1.5 rounded-full bg-[#ff5000]" />
                  )}
                </motion.button>
              ))}

              {/* Mobile CTA */}
              <div className="px-4 pt-2 pb-4 mt-1 border-t border-white/[0.06]">
                <button
                  className="w-full orange-button rounded-xl py-3.5 text-[13px] font-extrabold tracking-[0.06em] uppercase text-white flex items-center justify-center gap-2"
                  onClick={() => setMobileOpen(false)}
                >
                  Erstgespräch sichern
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
