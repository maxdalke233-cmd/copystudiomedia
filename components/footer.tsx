import Image from "next/image";

const seiteLinks = [
  "Problem", "Prinzip", "Leistungen", "Methode", "Über uns", "FAQ",
];

const kontaktLinks = [
  { label: "info@copystudio.media", href: "mailto:info@copystudio.media" },
  { label: "Instagram",             href: "#" },
  { label: "LinkedIn",              href: "#" },
];

const rechtlichesLinks = [
  { label: "Impressum",    href: "#" },
  { label: "Datenschutz", href: "#" },
];

function ColHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-6 h-[2px] bg-[#ff5000] shrink-0" />
      <span className="text-[11px] font-bold tracking-[0.12em] text-[#ff5000] uppercase">
        {label}
      </span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.06]">
      {/* Main grid */}
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16 pt-20 pb-10 grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-12">

        {/* Col 1 — logo + description */}
        <div>
          <div className="mb-6">
            <Image
              src="/images/copystudio-media-logo.png"
              alt="CopyStudio MEDIA"
              width={180}
              height={48}
              style={{ height: "42px", width: "auto" }}
            />
          </div>
          <p className="text-[13px] leading-[1.7] text-white/45 max-w-[280px]">
            Wir produzieren hochwertigen Media-Content und entwickeln
            datengetriebene Kreativstrategien für Agenturen, Coaches,
            Dienstleister und Personenmarken. Wann bist du dran?
          </p>
        </div>

        {/* Col 2 — Seite */}
        <div>
          <ColHeader label="Seite" />
          <ul className="space-y-3">
            {seiteLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-[14px] text-white/45 hover:text-white/80 transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Kontakt */}
        <div>
          <ColHeader label="Kontakt" />
          <ul className="space-y-3">
            {kontaktLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-[14px] text-white/45 hover:text-white/80 transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Rechtliches */}
        <div>
          <ColHeader label="Rechtliches" />
          <ul className="space-y-3">
            {rechtlichesLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-[14px] text-white/45 hover:text-white/80 transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Large watermark */}
      <div className="overflow-hidden select-none pointer-events-none">
        <p
          className="text-center font-heading font-black tracking-[-0.04em]"
          style={{ fontSize: "clamp(36px, 11vw, 155px)", lineHeight: 1, whiteSpace: "nowrap" }}
        >
          <span style={{ color: "#ffffff", opacity: 0.12 }}>CopyStudio</span>
          <span style={{ color: "#ff5000", opacity: 0.85 }}>.</span>
          <span style={{ color: "#ffffff", opacity: 0.12 }}>Media</span>
        </p>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16 py-6 border-t border-white/[0.06]">
        <p className="text-[11px] font-medium tracking-[0.06em] text-white/28 uppercase">
          © 2026 CopyStudio.Media · Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
