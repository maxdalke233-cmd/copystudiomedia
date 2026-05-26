import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz — CopyStudio Web",
  description: "Datenschutzerklärung von CopyStudio Web.",
};

export default function DatenschutzPage() {
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
          Datenschutz&shy;erklärung
        </h1>
        <p className="text-[13px] text-white/30 mb-14 font-mono tracking-widest uppercase">
          Gemäß DSGVO &amp; BDSG
        </p>

        <div className="space-y-12 text-[15px] leading-[1.8] text-white/65">

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="font-semibold text-white/80 mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem
              Text aufgeführten Datenschutzerklärung.
            </p>
            <h3 className="font-semibold text-white/80 mb-2 mt-6">Datenerfassung auf dieser Website</h3>
            <p>
              <strong className="text-white/80">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
              Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
            <p className="mt-4">
              <strong className="text-white/80">Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z.&nbsp;B.
              durch Ausfüllen eines Kontaktformulars oder beim Buchen eines Gesprächstermins).
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website
              durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B.
              Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>
            <p className="mt-4">
              <strong className="text-white/80">Wofür nutzen wir Ihre Daten?</strong><br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
              gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>
            <p className="mt-4">
              <strong className="text-white/80">Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
              Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein
              Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine
              Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung
              jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten
              Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              2. Hosting
            </h2>
            <p>
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website
              erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich
              v.&nbsp;a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
              Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine
              Website generiert werden, handeln.
            </p>
            <p className="mt-4">
              Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
              potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse
              einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch
              einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              3. Allgemeine Hinweise und Pflichtinformationen
            </h2>
            <h3 className="font-semibold text-white/80 mb-2">Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
              behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <h3 className="font-semibold text-white/80 mb-2 mt-6">Verantwortliche Stelle</h3>
            <p>
              Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
              Maxim Dalke<br />
              CopyStudio Web<br />
              [Straße und Hausnummer]<br />
              [PLZ] [Ort]<br />
              E-Mail:{" "}
              <a href="mailto:info@copystudio.media" className="text-[#0041FB] hover:underline">
                info@copystudio.media
              </a>
            </p>
            <h3 className="font-semibold text-white/80 mb-2 mt-6">Speicherdauer</h3>
            <p>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
              wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
              Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen
              oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht,
              sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
              personenbezogenen Daten haben.
            </p>
            <h3 className="font-semibold text-white/80 mb-2 mt-6">Ihre Rechte</h3>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
              unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft
              und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung
              oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene
              Daten können Sie sich jederzeit an uns wenden:
            </p>
            <p className="mt-3">
              E-Mail:{" "}
              <a href="mailto:info@copystudio.media" className="text-[#0041FB] hover:underline">
                info@copystudio.media
              </a>
            </p>
            <h3 className="font-semibold text-white/80 mb-2 mt-6">Beschwerderecht</h3>
            <p>
              Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht bei
              der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in datenschutzrechtlichen
              Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem unser Unternehmen
              seinen Sitz hat.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              4. Datenerfassung auf dieser Website
            </h2>
            <h3 className="font-semibold text-white/80 mb-2">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
              Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="mt-3 space-y-1 pl-5 list-disc marker:text-[#0041FB]">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mt-4">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien
              Darstellung und der Optimierung seiner Website.
            </p>

            <h3 className="font-semibold text-white/80 mb-2 mt-6">Kontaktanfragen</h3>
            <p>
              Wenn Sie uns per E-Mail, Telefon oder über unser Buchungsformular (Calendly) kontaktieren,
              wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name,
              Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mt-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
              sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
              vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
              Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
              gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
            </p>

            <h3 className="font-semibold text-white/80 mb-2 mt-6">Calendly</h3>
            <p>
              Zur Buchung von Gesprächsterminen nutzen wir den Dienst Calendly (Calendly LLC,
              271 17th St NW, Atlanta, GA 30363, USA). Wenn Sie über Calendly einen Termin buchen,
              werden die von Ihnen eingegebenen Daten an Calendly übertragen und dort verarbeitet.
              Calendly ist unter dem EU-US Data Privacy Framework zertifiziert. Weitere Informationen
              zum Datenschutz bei Calendly finden Sie unter:{" "}
              <a
                href="https://calendly.com/pages/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0041FB] hover:underline"
              >
                calendly.com/pages/privacy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              5. Soziale Medien
            </h2>
            <p>
              Auf dieser Website sind Links zu unseren Social-Media-Profilen eingebunden. Die zugehörigen
              Dienste (Instagram, LinkedIn) werden von den jeweiligen Unternehmen betrieben. Wenn Sie
              auf einen dieser Links klicken, werden Sie auf die externen Seiten weitergeleitet und
              deren Datenschutzbestimmungen gelten. Eine Übertragung von Daten an die Anbieter findet
              nur statt, wenn Sie aktiv auf einen Link klicken.
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.07] flex items-center justify-between flex-wrap gap-4">
          <p className="text-[12px] text-white/25 font-mono tracking-widest uppercase">
            © 2026 CopyStudio Web · Maxim Dalke
          </p>
          <Link href="/impressum" className="text-[12px] text-white/30 hover:text-white transition-colors duration-200">
            Impressum
          </Link>
        </div>
      </main>
    </div>
  );
}
