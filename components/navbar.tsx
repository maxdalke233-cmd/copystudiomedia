"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import CopyStudioLogo from "@/components/copystudio-logo";


const navLinks = [
  { label: "Start",       id: "start"      },
  { label: "Projekte",    id: "projekte"   },
  { label: "Leistungen",  id: "leistungen" },
  { label: "Referenzen",  id: "referenzen" },
  { label: "Über uns",    id: "ueber-uns"  },
  { label: "FAQ",         id: "faq"        },
];

const mobileGroups = [
  {
    label: "ANGEBOT",
    links: ["start", "projekte", "leistungen"],
  },
  {
    label: "VERTRAUEN",
    links: ["referenzen", "ueber-uns"],
  },
  {
    label: "MEHR",
    links: ["faq"],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [activeSection, setActiveSection] = useState<string>("start");
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
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div
          className="glass-nav-pill pointer-events-auto h-[54px] w-full max-w-[1140px] flex items-center pl-4 pr-3 relative overflow-hidden"
          style={{ borderRadius: "0 0 16px 16px" }}
        >
          {/* Scroll progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0041FB] origin-left"
            style={{ scaleX }}
          />

          {/* Shimmer sweep */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(0,65,251,0.18) 30%, rgba(255,255,255,0.38) 50%, rgba(0,65,251,0.18) 70%, transparent 100%)",
              mixBlendMode: "screen",
            }}
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatDelay: 6 }}
          />

          {/* Brand */}
          <div className="shrink-0 flex items-center">
            <CopyStudioLogo />
          </div>

          {/* Right side */}
          <div className="ml-auto flex items-center gap-2">
            {/* WhatsApp button */}
            <motion.a
              href="https://wa.me/4915906744569"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex items-center justify-center h-9 w-9 rounded-full shrink-0 relative"
              style={{ background: "#0041FB" }}
              animate={{
                boxShadow: [
                  "0 0 0px 0px rgba(0,65,251,0)",
                  "0 0 14px 5px rgba(0,65,251,0.7)",
                  "0 0 0px 0px rgba(0,65,251,0)",
                ],
              }}
              transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] fill-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </motion.a>

            {/* Menü button */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menü"
              className="flex items-center gap-2 px-3.5 py-[7px] rounded-xl bg-white/[0.08] border border-white/[0.10] hover:bg-white/[0.13] transition-colors duration-200"
            >
              <span className="text-[13px] font-medium text-white">Menü</span>
              {mobileOpen
                ? <X className="h-[14px] w-[14px] text-white" />
                : <Menu className="h-[14px] w-[14px] text-white" />
              }
            </button>
          </div>
        </div>
      </header>

      {/* Menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed top-[54px] left-4 right-4 z-40 rounded-2xl overflow-hidden"
            style={{
              background: "rgba(10,10,10,0.96)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 24px 60px rgba(0,0,0,0.7)",
            }}
          >
            <nav className="flex flex-col py-3">
              {mobileGroups.map((group, gi) => {
                const groupLinks = navLinks.filter((l) => group.links.includes(l.id));
                const baseDelay = navLinks.findIndex((l) => l.id === groupLinks[0]?.id) * 0.04;
                return (
                  <div key={group.label}>
                    {gi > 0 && <div className="mx-4 my-1.5 h-px bg-white/[0.06]" />}
                    <p className="px-5 pt-2 pb-1 text-[10px] font-bold tracking-[0.14em] text-white/25">
                      {group.label}
                    </p>
                    {groupLinks.map((link, i) => {
                      const globalI = navLinks.findIndex((l) => l.id === link.id);
                      return (
                        <motion.button
                          key={link.id}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: baseDelay + i * 0.04, duration: 0.2 }}
                          onClick={() => scrollTo(link.id)}
                          className={`w-full text-left px-5 py-3 text-[15px] font-medium transition-colors duration-150 flex items-center justify-between ${
                            activeSection === link.id
                              ? "text-white bg-white/[0.06]"
                              : "text-white/55 hover:text-white hover:bg-white/[0.04]"
                          }`}
                        >
                          {link.label}
                          {activeSection === link.id && (
                            <div className="h-1.5 w-1.5 rounded-full bg-[#0041FB]" />
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                );
              })}

              {/* Mobile CTA */}
              <div className="px-4 pt-3 pb-4 mt-1 border-t border-white/[0.06]">
                <a
                  href="https://calendly.com/maxdalke233/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full blue-button rounded-xl py-3.5 text-[13px] font-extrabold tracking-[0.06em] uppercase text-white flex items-center justify-center gap-2"
                  onClick={() => setMobileOpen(false)}
                >
                  Erstgespräch sichern
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
