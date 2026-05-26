import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — CopyStudio Web",
  description: "Impressum von CopyStudio Web.",
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#090909] text-white font-body">
      {/* Back nav */}
      <div className="mx-auto max-w-[860px] px-6 md:px-10 pt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[13px] text-white/40 hover:text-white transition-colors duration-200"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Zurück zur Startseite
        </Link>
      </div>

      <main className="mx-auto max-w-[860px] px-6 md:px-10 py-16 md:py-24">
        <h1 className="font-heading text-[40px] md:text-[56px] font-black leading-[1.05] tracking-[-0.03em] text-white mb-3">
          Impressum
        </h1>
        <p className="text-[13px] text-white/30 mb-14 font-mono tracking-widest uppercase">
          Angaben gemäß § 5 TMG
        </p>

        <div className="space-y-12 text-[15px] leading-[1.8] text-white/65">

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              Verantwortlich
            </h2>
            <p>
              Maxim Dalke<br />
              CopyStudio Web<br />
              {/* ADRESSE EINTRAGEN */}
              [Straße und Hausnummer]<br />
              [PLZ] [Ort]<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              Kontakt
            </h2>
            <p>
              E-Mail:{" "}
              <a
                href="mailto:info@copystudio.media"
                className="text-[#0041FB] hover:underline"
              >
                info@copystudio.media
              </a>
              <br />
              Telefon:{" "}
              <a
                href="tel:+4915906744569"
                className="text-[#0041FB] hover:underline"
              >
                +49 159 0674 4569
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              Umsatzsteuer-ID
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
              [USt-IdNr. eintragen, sofern vorhanden]
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              Haftung für Inhalte
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
              als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen.
            </p>
            <p className="mt-4">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
              erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
              Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
              entfernen.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              Haftung für Links
            </h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
              übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich.
            </p>
            <p className="mt-4">
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
              Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
            <p className="mt-4">
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
              gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
              werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
              gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
              bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0041FB] hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              .
            </p>
            <p className="mt-4">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.07]">
          <p className="text-[12px] text-white/25 font-mono tracking-widest uppercase">
            © 2026 CopyStudio Web · Maxim Dalke
          </p>
        </div>
      </main>
    </div>
  );
}
