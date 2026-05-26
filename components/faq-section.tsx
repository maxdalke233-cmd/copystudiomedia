"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Was kostet eine Website bei euch?",
    a: "Das kommt auf den Umfang an. Eine einfache, professionelle Website startet ab X €. Im kostenlosen Erstgespräch schauen wir uns an was du brauchst und du bekommst ein transparentes Angebot – ohne versteckte Kosten, ohne Überraschungen.",
  },
  {
    q: "Wie lange dauert es, bis meine Website fertig ist?",
    a: "In der Regel 2–4 Wochen, je nach Umfang. Du bekommst regelmäßig Zwischenstände und kannst jederzeit Feedback geben. Wir launchen erst, wenn du zu 100% zufrieden bist.",
  },
  {
    q: "Ich hab schon eine Website – könnt ihr die verbessern oder brauche ich eine komplett neue?",
    a: "Beides ist möglich. Manchmal reicht ein Redesign, manchmal ist ein Neuaufbau sinnvoller. Das finden wir im Erstgespräch gemeinsam raus – ehrlich und ohne dir etwas aufzuschwatzen.",
  },
  {
    q: "Muss ich die Texte und Bilder selbst liefern?",
    a: "Nein. Wir übernehmen die kompletten Texte für dich – so formuliert, dass Kunden sich sofort angesprochen fühlen. Bilder können wir entweder von dir verwenden oder mit professionellem Stockmaterial arbeiten.",
  },
  {
    q: "Kann ich die Website danach selbst bearbeiten?",
    a: "Ja. Du bekommst ein einfaches System, mit dem du Texte, Bilder und Inhalte selbst anpassen kannst – ohne Programmierkenntnisse. Und wenn du mal nicht weiterkommst, sind wir da.",
  },
  {
    q: "Was passiert nach dem Launch – kümmert ihr euch auch danach noch?",
    a: "Auf jeden Fall. Wir lassen dich nicht alleine. Nach dem Launch bekommst du Support, Updates und auf Wunsch die langfristige Betreuung. Deine Website soll nicht nur einmal gut aussehen, sondern dauerhaft funktionieren.",
  },
  {
    q: "Funktioniert die Website auch auf dem Handy?",
    a: "Selbstverständlich. Über 70% deiner Kunden kommen übers Handy. Jede Website von uns ist von Anfang an für Smartphone, Tablet und Desktop optimiert.",
  },
  {
    q: "Hilft ihr auch dabei, bei Google gefunden zu werden?",
    a: "Ja. Jede Website wird mit den wichtigsten SEO-Grundlagen gebaut – schnelle Ladezeiten, saubere Struktur, die richtigen Keywords. Damit deine Kunden dich finden, wenn sie nach deiner Leistung suchen.",
  },
  {
    q: "Ich kenne mich mit Technik nicht aus – ist das ein Problem?",
    a: "Überhaupt nicht. Die meisten unserer Kunden sind keine Technik-Experten – und das müssen sie auch nicht sein. Wir kümmern uns um alles Technische. Du sagst uns was du brauchst, wir setzen es um.",
  },
  {
    q: "Warum sollte ich nicht einfach selber eine Website mit Baukasten bauen?",
    a: "Kannst du. Aber mal ehrlich: Würdest du deine Buchhaltung auch selbst machen, nur weil es eine App dafür gibt? Ein Baukasten gibt dir ein Template. Wir geben dir einen Auftritt, der verkauft. Der Unterschied ist: Bei uns sieht deine Website nicht aus wie die von 10.000 anderen – und sie bringt tatsächlich Anfragen.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const rawTop = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [3.5, 3.5, 34]
  );

  const smoothTop = useSpring(rawTop, {
    stiffness: 38,
    damping: 18,
    mass: 1.4,
  });

  const stickyTop = useTransform(smoothTop, (v) => `${v}vh`);

  return (
    <section ref={sectionRef} id="faq" className="bg-black pt-12 pb-24 md:pt-14 md:pb-32 border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-16 lg:gap-24">

          {/* Left */}
          <motion.div className="lg:sticky lg:self-start" style={{ top: stickyTop }}>
            {/* Glass pill label */}
            <div className="mb-6 flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#0041FB]/50 bg-[#0041FB]/10 backdrop-blur-md px-5 py-2 text-[13px] font-bold tracking-[0.10em] uppercase text-[#0041FB] shadow-[0_4px_20px_rgba(0,65,251,0.25)]">
                Häufige Fragen
              </span>
            </div>

            {/* All white text */}
            <p className="font-heading text-[28px] md:text-[32px] lg:text-[36px] font-black leading-[1.15] tracking-[-0.02em] text-white text-center lg:text-left">
              Warte mal kurz. Du hast dich noch nicht für ein Erstgespräch eingetragen? Dann lass uns gemeinsam herausfinden, was dich noch zögern lässt. Und dann meldest du dich. Deal?
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="https://calendly.com/maxdalke233/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="blue-button rounded-full px-6 py-3 text-[13px] font-extrabold text-white hover:scale-[1.02] transition-all duration-200 inline-block"
              >
                Erstgespräch sichern →
              </a>
            </div>
          </motion.div>

          {/* Right — glass accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden bg-white/[0.04] transition-all duration-300"
                style={open === i ? {
                  border: "1px solid rgba(0,65,251,0.55)",
                  boxShadow: "0 0 40px rgba(0,65,251,0.18), 0 4px 24px rgba(0,65,251,0.12)",
                } : {
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex items-center justify-between gap-4 w-full text-left px-6 py-5 group"
                >
                  <span className="text-[15px] md:text-[16px] font-semibold text-white/80 group-hover:text-white transition-colors duration-200 leading-snug">
                    {faq.q}
                  </span>
                  <span className="shrink-0 h-6 w-6 rounded-full border border-white/20 flex items-center justify-center text-white/40 group-hover:border-[#0041FB]/60 group-hover:text-[#0041FB] transition-all duration-200">
                    {open === i ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                  </span>
                </button>
                {open === i && (
                  <div className="px-5 pb-4 border-t border-white/[0.06]">
                    <p className="pt-3 text-[13px] text-white/45 leading-[1.7]">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
