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
          Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz) und § 18 MStV
        </p>

        <div className="space-y-12 text-[15px] leading-[1.8] text-white/65">

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              Anbieter
            </h2>
            <p>
              CopyStudio Marketing LLC<br />
              1209 Mountain Road PL NE, STE R<br />
              Albuquerque, NM 87110<br />
              USA
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              Vertreten durch
            </h2>
            <p>Niki Dalke und Moritz Foerster</p>
          </section>

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              Kontakt
            </h2>
            <p>
              Telefon:{" "}
              <a
                href="tel:+491726450623"
                className="text-[#0041FB] hover:underline"
              >
                +49 172 6450623
              </a>
              <br />
              E-Mail:{" "}
              <a
                href="mailto:info@copystudio.marketing"
                className="text-[#0041FB] hover:underline"
              >
                info@copystudio.marketing
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>
              Niki Dalke und Moritz Foerster<br />
              CopyStudio Marketing LLC<br />
              1209 Mountain Road PL NE, STE R<br />
              Albuquerque, NM 87110, USA
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              EU-Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0041FB] hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              .<br />
              Unsere E-Mail-Adresse findest du oben im Impressum.
            </p>
            <p className="mt-4">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              Haftung für Inhalte
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir
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
              Die durch die CopyStudio Marketing LLC erstellten Inhalte und Werke auf diesen Seiten
              sind urheberrechtlich geschützt. Als Unternehmen mit Sitz in den USA beansprucht die
              CopyStudio Marketing LLC den Schutz ihrer Inhalte nach US-amerikanischem Urheberrecht.
              Für Nutzer in Deutschland und der EU gilt ergänzend das deutsche Urheberrechtsgesetz
              (UrhG), soweit anwendbar — auf Grundlage der Berner Übereinkunft zum Schutz von Werken
              der Literatur und Kunst, der sowohl die USA als auch die EU-Mitgliedstaaten angehören.
            </p>
            <p className="mt-4">
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
              Gebrauch gestattet. Soweit Inhalte auf dieser Seite nicht von uns erstellt wurden,
              werden die Urheberrechte Dritter beachtet und entsprechend gekennzeichnet. Solltest du
              auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden
              Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir entsprechende Inhalte
              umgehend entfernen.
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.07]">
          <p className="text-[12px] text-white/25 font-mono tracking-widest uppercase">
            © 2026 CopyStudio Marketing LLC · alle Rechte vorbehalten
          </p>
        </div>
      </main>
    </div>
  );
}
