"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion";

function StoryCard({
  children,
  phaseOffset,
}: {
  children: React.ReactNode;
  phaseOffset: number;
}) {
  return (
    <div className="relative rounded-2xl" style={{ padding: "1.5px" }}>
      {/* Static dim base so border is visible when beam is away */}
      <div className="absolute inset-0 rounded-2xl bg-white/[0.07] pointer-events-none" />

      {/* Spinning orange beam */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <motion.div
          className="absolute"
          style={{
            width: "200%",
            height: "200%",
            top: "-50%",
            left: "-50%",
            background:
              "conic-gradient(from 0deg, transparent 0%, transparent 38%, #ff5c35 50%, #ff8040 57%, transparent 67%, transparent 100%)",
          }}
          animate={{ rotate: [phaseOffset, phaseOffset + 360] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Card content */}
      <div className="relative rounded-[14px] bg-[#080808] h-full">
        {children}
      </div>
    </div>
  );
}

export default function MeetMindsSection() {
  return (
    <section className="relative bg-black py-24 md:py-32 border-t border-white/[0.06] overflow-hidden">
      {/* Orange blur bubbles */}
      <div className="absolute top-[8%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#ff5000]/[0.11] blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#ff7000]/[0.08] blur-[110px] pointer-events-none" />
      <div className="absolute top-[45%] left-[30%] w-[300px] h-[300px] rounded-full bg-[#ff4500]/[0.06] blur-[90px] pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — portrait photo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative w-full rounded-2xl overflow-hidden"
            style={{ aspectRatio: "3/4" }}
          >
            <Image
              src="/images/founder-1.jpg"
              alt="Co-Founder und Geschäftsführer"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Right — title + bio */}
          <motion.div {...fadeUp(0.1)} className="flex flex-col">

            {/* Title */}
            <h2 className="font-serif italic font-normal text-[38px] md:text-[48px] lg:text-[54px] leading-[1.0] tracking-[-0.02em] text-white">
              Hi, ich bin Max.
            </h2>

            {/* Bio paragraphs */}
            <div className="mt-8 space-y-5 text-[14px] leading-[1.8] text-white/50">
              <p>
                Kein Agentur-Typ. Kein Studium. Kein vorgezeichneter Weg. Ich hab nach der Realschule eine Ausbildung angefangen – und nebenbei meinen eigenen Weg gebaut.
              </p>
              <p>
                Angefangen hat alles mit Social Media. Ich hab TikToks gedreht, Content erstellt, mich reingearbeitet wie Marketing wirklich funktioniert – nicht aus dem Lehrbuch, sondern durch Ausprobieren. Was funktioniert? Was bleibt hängen? Was bringt Leute dazu, auf den Button zu klicken?
              </p>
              <p>
                Dann kam Shopify. Ich habe eine eigene Barber-Brand aufgebaut – komplett alleine. Produkte, Branding, die komplette Website. Und genau da hat es Klick gemacht. Ich habe verstanden, dass eine gute Website nicht einfach nur schön aussehen muss – sondern{" "}
                <span className="font-semibold text-white/80">verkaufen. Überzeugen. Vertrauen aufbauen.</span>
              </p>
              <p>
                Gleichzeitig habe ich mich immer tiefer in{" "}
                <span className="font-semibold text-white/80">AI</span>{" "}
                reingearbeitet. Wie man Tools nutzt, um schneller und smarter zu arbeiten. Wie man Prozesse aufbaut, die normalerweise ganze Teams brauchen – aber die ich alleine umsetzen kann. Auch in meiner Ausbildung habe icrukturiert zu denken, Verantwortung zu übernehmen und Dinge durchzuziehen – auch wenn's mal nicht einfach war.
              </p>
              <p>
                Irgendwann habe ich gemerkt: Alles was ich in den letzten Jahren gelernt habe – Marketing, Design, Technik, AI – das passt zusammen. Und zwar nicht für mich, sondern für andere. Für Unternehmen, die online endlich so auftreten wollen, wie sie es verdienen.
              </p>
              <p>
                Also habe ich{" "}
                <span className="font-semibold text-white/80">CopyStudio Media</span>{" "}
                gegründet.
              </p>
              <p>
                Keine große Agentur. Kein Team mit zehn Leuten. Nur ich – mit dem Wissen, der Leidenschaft und den Tools, um dir einen digitalen Auftritt zu bauen, der wirklich funktioniert.
              </p>
            </div>

          </motion.div>
        </div>

        {/* ── History Timeline ── */}
        <div className="mt-20 border-t border-white/[0.06] pt-14">

          {/* Headline — bigger, bolder */}
          <motion.div {...fadeUp(0)} className="mb-12">
            <h3 className="font-heading font-black text-[36px] md:text-[50px] leading-[1.0] tracking-[-0.03em] text-white">
              Meine{" "}
              <span className="relative inline-block">
                Geschichte
                <span
                  className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #ff5c35, #ff8040)" }}
                />
              </span>
              <span className="text-[#ff5c35]">.</span>
            </h3>
            <p className="mt-3 text-[13px] text-white/35 max-w-[360px] leading-relaxed">
              Vom Realschüler zum Web Entwickler in 2 Jahren.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
                className="h-full"
              >
                <StoryCard phaseOffset={i * 72}>
                  <div className="p-5 flex flex-col gap-3 h-full hover:bg-[#ff5000]/[0.04] transition-colors duration-300 rounded-[14px]">
                    {/* Year chip */}
                    <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-white/25">
                      {m.year}
                    </span>

                    {/* Keyword */}
                    <p className="font-heading font-black text-[15px] leading-[1.15] tracking-[-0.01em] text-white">
                      {m.title}
                    </p>

                    {/* Short description */}
                    <p className="text-[12px] leading-[1.6] text-white/40 mt-auto">
                      {m.desc}
                    </p>

                    {/* Accent dot */}
                    <div className="h-1.5 w-1.5 rounded-full bg-[#ff5000]/60 self-end" />
                  </div>
                </StoryCard>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

const milestones = [
  {
    year: "2021",
    title: "Social Media & Content",
    desc: "TikToks, Content Creation – erstes Gespür für Marketing und was online funktioniert.",
  },
  {
    year: "2022",
    title: "Realschulabschluss",
    desc: "Schule abgeschlossen. Ausbildung gestartet – und nebenbei weiter am eigenen Ding gebaut.",
  },
  {
    year: "2023",
    title: "Eigene Barber-Brand",
    desc: "Shopify-Store aufgebaut – Branding, Website, Verkauf. Alles alleine. Hier hat es Klick gemacht.",
  },
  {
    year: "2024",
    title: "AI & Webdesign",
    desc: "Tief in AI und Website-Bau eingestiegen. Gelernt, wie man mit modernen Tools Ergebnisse liefert, die sonst ganze Teams brauchen.",
  },
  {
    year: "2025",
    title: "CopyStudio Media",
    desc: "Gründung der eigenen Dienstleistung – Websites für lokale Unternehmen, die online wachsen wollen.",
  },
];
