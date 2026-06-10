"use client";

import { motion } from "motion/react";
import { TrendingUp, ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/motion";

const BLUE = "#0041FB";

function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" className="h-6 w-6" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

function ClaudeLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="#D97757" aria-hidden="true">
      <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" />
    </svg>
  );
}

type Vorteil = {
  nr: string;
  icon: React.ReactNode;
  title: string;
  text: string;
};

const vorteile: Vorteil[] = [
  {
    nr: "01",
    icon: <GoogleG />,
    title: "Sichtbar auf Google",
    text: "Neue Kunden finden dich genau dann, wenn sie nach deiner Leistung suchen. Statt von der Konkurrenz übersehen zu werden, bist du ganz vorne, wenn die Kaufentscheidung fällt.",
  },
  {
    nr: "02",
    icon: <ClaudeLogo />,
    title: "Sichtbar in KI-Suchen",
    text: "Claude, ChatGPT und Perplexity empfehlen dich, während deine Konkurrenz unsichtbar bleibt. So gewinnst du Kunden, bevor sie überhaupt auf Google landen.",
  },
  {
    nr: "03",
    icon: <TrendingUp className="h-6 w-6" style={{ color: BLUE }} />,
    title: "Mehr Anfragen über die Website",
    text: "Aus Besuchern werden zahlende Kunden statt Absprünge. Deine Website verkauft für dich — auch nachts, am Wochenende und an Feiertagen.",
  },
];

function VorteilCard({ v, i }: { v: Vorteil; i: number }) {
  return (
    <motion.div {...fadeUp(0.12 + i * 0.12)} className="group relative h-full">
      {/* Glow ring (hover) */}
      <div
        className="pointer-events-none absolute -inset-[3px] rounded-[26px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,65,251,0.55) 0%, rgba(0,65,251,0.06) 45%, rgba(0,65,251,0.35) 100%)",
          filter: "blur(8px)",
        }}
      />
      <div className="relative flex h-full min-h-[380px] flex-col overflow-hidden rounded-[22px] border border-black/[0.08] bg-[#fafafa] p-9 md:p-10 transition-all duration-500 group-hover:border-[#0041FB]/30 group-hover:bg-white group-hover:shadow-[0_20px_60px_rgba(0,65,251,0.14)]">
        {/* Inner tint (hover) */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(120% 80% at 0% 0%, rgba(0,65,251,0.08) 0%, transparent 60%)",
          }}
        />

        {/* Ghost number */}
        <span className="pointer-events-none absolute -top-3 right-6 select-none font-heading text-[120px] font-black leading-none tracking-[-0.05em] text-black/[0.05] transition-colors duration-500 group-hover:text-[#0041FB]/15">
          {v.nr}
        </span>

        {/* Icon */}
        <div className="relative flex h-[52px] w-[52px] items-center justify-center rounded-2xl border border-black/[0.08] bg-white shadow-sm">
          {v.icon}
        </div>

        <h3 className="relative mt-7 font-heading text-[22px] font-black leading-[1.15] tracking-[-0.025em] text-black">
          {v.title}
        </h3>

        <p className="relative mt-4 flex-1 text-[15px] leading-[1.75] text-black/55">
          {v.text}
        </p>

        <div className="relative mt-9 border-t border-black/[0.08] pt-6">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-black/40 transition-colors duration-300 group-hover:text-[#0041FB]">
            Mehr im System
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function VorteileSection() {
  return (
    <section className="bg-white pt-20 pb-20 md:pt-24 md:pb-24">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-16">

        {/* Label */}
        <motion.p
          {...fadeUp(0)}
          className="text-center text-[11px] font-bold uppercase tracking-[0.18em] text-black/35"
        >
          Was du davon hast
        </motion.p>

        {/* Headline */}
        <motion.h2
          {...fadeUp(0.06)}
          className="mx-auto mt-4 max-w-[820px] text-center font-heading text-[36px] font-black leading-[1.02] tracking-[-0.035em] text-black sm:text-[48px] md:text-[58px]"
        >
          <span style={{ color: BLUE }}>So unterstützen wir</span> lokale Unternehmer
        </motion.h2>

        {/* Subtext */}
        <motion.p
          {...fadeUp(0.12)}
          className="mx-auto mt-5 max-w-[480px] text-center text-[15px] leading-[1.75] text-black/55"
        >
          Drei Hebel, die über Sichtbarkeit und Anfragen entscheiden — und die
          wir für dich übernehmen.
        </motion.p>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {vorteile.map((v, i) => (
            <VorteilCard key={v.nr} v={v} i={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
