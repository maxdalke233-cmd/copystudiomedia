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
          Informationen zur Verarbeitung personenbezogener Daten im Sinne der DSGVO
        </p>

        <div className="space-y-12 text-[15px] leading-[1.8] text-white/65">

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              1. Verantwortlicher
            </h2>
            <p>
              Verantwortlicher für die Datenverarbeitung im Sinne der EU-Datenschutz-Grundverordnung
              (DSGVO) ist:
            </p>
            <p className="mt-4">
              CopyStudio Marketing LLC<br />
              1209 Mountain Road PL NE, STE R<br />
              Albuquerque, NM 87110<br />
              USA
            </p>
            <p className="mt-4">
              Vertreten durch: Niki Dalke und Moritz Foerster<br />
              Telefon:{" "}
              <a href="tel:+491726450623" className="text-[#0041FB] hover:underline">
                +49 172 6450623
              </a>
              <br />
              E-Mail:{" "}
              <a href="mailto:info@copystudio.marketing" className="text-[#0041FB] hover:underline">
                info@copystudio.marketing
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              2. Zwecke und Rechtsgrundlagen der Datenverarbeitung
            </h2>
            <p>
              Wir verarbeiten personenbezogene Daten, die du auf dieser Webseite angibst (zum
              Beispiel in Formularen), sowie Nutzungs- und Trackingdaten zu folgenden Zwecken:
            </p>
            <ul className="mt-3 space-y-1 pl-5 list-disc marker:text-[#0041FB]">
              <li>Beantwortung von Anfragen und Kontaktaufnahme (z.&nbsp;B. über Kontaktformulare oder E-Mail).</li>
              <li>
                Versand von E-Mails mit weiterführenden Inhalten, Tipps und Angeboten rund um
                Copywriting und Direktmarketing (sofern du dich hierfür angemeldet hast).
              </li>
              <li>
                Statistische Auswertung und Optimierung unserer Werbekampagnen (insbesondere
                Facebook/Meta-Ads) und dieser Webseite (z.&nbsp;B. über Cookies und Tracking-Pixel).
              </li>
              <li>Sicherstellung des technischen Betriebs, der Sicherheit und der Verbesserung unserer Webseite.</li>
            </ul>
            <p className="mt-4">Rechtsgrundlagen der Verarbeitung sind:</p>
            <ul className="mt-3 space-y-1 pl-5 list-disc marker:text-[#0041FB]">
              <li>
                Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), sofern du uns diese z.&nbsp;B. für den
                Erhalt von E-Mails oder für Statistik- und Marketing-Cookies und Tracking
                (z.&nbsp;B. Facebook-Pixel) erteilst.
              </li>
              <li>
                Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung / vorvertragliche Maßnahmen), soweit
                die Verarbeitung zur Durchführung von Verträgen oder vorvertraglichen Maßnahmen
                erforderlich ist.
              </li>
              <li>
                Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) für technisch notwendige
                Vorgänge und eine sichere, effiziente Bereitstellung unserer Webseite.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              3. Kategorien der verarbeiteten Daten
            </h2>
            <p>Wir verarbeiten insbesondere folgende Kategorien personenbezogener Daten:</p>
            <ul className="mt-3 space-y-1 pl-5 list-disc marker:text-[#0041FB]">
              <li><strong className="text-white/80">Stammdaten:</strong> Vor- und Nachname, gegebenenfalls Firmenname.</li>
              <li><strong className="text-white/80">Kontaktdaten:</strong> E-Mail-Adresse, Telefonnummer.</li>
              <li><strong className="text-white/80">Kommunikationsdaten:</strong> Inhalte der Kommunikation per E-Mail oder Formular.</li>
              <li>
                <strong className="text-white/80">Nutzungsdaten:</strong> IP-Adresse, Datum und
                Uhrzeit des Besuchs, verwendetes Endgerät, Referrer-URL, aufgerufene Seiten.
              </li>
              <li>
                <strong className="text-white/80">Trackingdaten:</strong> Informationen über den
                Besuch und die Nutzung unserer Webseite sowie Reaktionen auf Werbeanzeigen, sofern
                du dem Einsatz entsprechender Cookies und Tracking-Tools zugestimmt hast.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              4. Empfänger und Datenübermittlungen in Drittländer (insbesondere USA)
            </h2>
            <p>
              Für Betrieb, Versand und Analyse setzen wir externe Dienstleister
              (Auftragsverarbeiter) ein, zum Beispiel:
            </p>
            <ul className="mt-3 space-y-1 pl-5 list-disc marker:text-[#0041FB]">
              <li>ActiveCampaign (E-Mail- und Newsletter-Dienstleister)</li>
              <li>Hosting-Provider für unsere Webseite</li>
              <li>
                Werbe- und Analyseplattformen, insbesondere Meta Platforms (Facebook und Instagram,
                inkl. Facebook-Pixel / Conversions-API)
              </li>
            </ul>
            <p className="mt-4">
              Diese Dienstleister erhalten im erforderlichen Umfang Zugriff auf personenbezogene
              Daten. Dabei kann es zu einer Übermittlung personenbezogener Daten in Staaten
              außerhalb der Europäischen Union, insbesondere in die USA, kommen.
            </p>
            <p className="mt-4">
              Soweit vorhanden, stützen wir solche Übermittlungen auf Angemessenheitsbeschlüsse der
              EU-Kommission (z.&nbsp;B. EU-U.S. Data Privacy Framework) oder auf geeignete Garantien
              nach Art. 46 DSGVO (z.&nbsp;B. EU-Standardvertragsklauseln).
            </p>
            <p className="mt-4">
              Bitte beachte, dass in Drittländern wie den USA unter Umständen ein niedrigeres
              Datenschutzniveau als in der EU bestehen kann und staatliche Zugriffe auf Daten nicht
              ausgeschlossen werden können.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              5. Hosting
            </h2>
            <p>
              Unsere Webseite wird bei einem externen Hosting-Anbieter betrieben. Dieser verarbeitet
              im Rahmen des Hostings die für den Betrieb der Website erforderlichen Daten,
              insbesondere IP-Adressen, Verbindungsdaten sowie technische Protokolldaten. Die
              Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse an einer sicheren und stabilen Bereitstellung der Webseite). Sofern eine
              Auftragsverarbeitung stattfindet, besteht eine entsprechende Vereinbarung gemäß
              Art. 28 DSGVO.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              6. Einsatz von ActiveCampaign (E-Mail-Marketing)
            </h2>
            <p>
              Für den Versand von E-Mails und die Verwaltung unserer E-Mail-Kontakte nutzen wir den
              Dienst ActiveCampaign.
            </p>
            <p className="mt-4">
              <strong className="text-white/80">Dienstanbieter</strong><br />
              ActiveCampaign, LLC<br />
              1 North Dearborn Street, 5th Floor<br />
              Chicago, IL 60602, USA
            </p>
            <p className="mt-4">ActiveCampaign verarbeitet in unserem Auftrag insbesondere:</p>
            <ul className="mt-3 space-y-1 pl-5 list-disc marker:text-[#0041FB]">
              <li>E-Mail-Adresse, Name und ggf. weitere freiwillige Angaben</li>
              <li>Metadaten zur Anmeldung (Zeitpunkt, IP-Adresse, verwendetes Formular)</li>
              <li>
                Daten zur Nutzung unserer E-Mails (z.&nbsp;B. Öffnungen, Klicks) zur statistischen
                Auswertung und Optimierung
              </li>
            </ul>
            <p className="mt-4">
              Die Verarbeitung erfolgt auf Grundlage deiner Einwilligung (Art. 6 Abs. 1 lit. a
              DSGVO) sowie – soweit erforderlich – auf Grundlage unseres berechtigten Interesses an
              einem effektiven E-Mail-Marketing (Art. 6 Abs. 1 lit. f DSGVO). Die Anmeldung zu
              unserem E-Mail-Verteiler erfolgt im Double-Opt-In-Verfahren.
            </p>
            <p className="mt-4">
              Du kannst deine Einwilligung in den Erhalt von E-Mails jederzeit mit Wirkung für die
              Zukunft widerrufen, z.&nbsp;B. über den Abmeldelink in jeder E-Mail oder durch eine
              Nachricht an die oben genannten Kontaktdaten.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              7. Einsatz von Facebook/Meta-Ads und Facebook-Pixel
            </h2>
            <p>
              Wir nutzen Werbeanzeigen auf Facebook und Instagram sowie das sogenannte
              Facebook-Pixel (und ggf. ähnliche Technologien wie die Conversions-API) der Meta
              Platforms, um unsere Werbekampagnen zu messen und zu optimieren.
            </p>
            <p className="mt-4">
              <strong className="text-white/80">Dienstanbieter in der EU</strong><br />
              Meta Platforms Ireland Limited<br />
              4 Grand Canal Square, Grand Canal Harbour<br />
              Dublin 2, Irland
            </p>
            <p className="mt-4">
              <strong className="text-white/80">Dienstanbieter außerhalb der EU</strong><br />
              Meta Platforms, Inc.<br />
              1601 Willow Road<br />
              Menlo Park, CA 94025, USA
            </p>
            <p className="mt-4">
              Die Erfassung und Auswertung dieser Daten erfolgt nur, wenn du im Cookie-Banner deiner
              Einwilligung in Marketing-Cookies und -Tracking zugestimmt hast (Art. 6 Abs. 1 lit. a
              DSGVO in Verbindung mit § 25 TDDDG).
            </p>
            <p className="mt-4">
              Meta kann die erfassten Daten mit deinem Facebook- oder Instagram-Konto verknüpfen und
              für eigene Werbe- und Analysezwecke nutzen. Auf diese weitergehende Datenverarbeitung
              durch Meta haben wir keinen Einfluss. Weitere Informationen findest du in der
              Datenschutzrichtlinie von Meta.
            </p>
            <p className="mt-4">
              Du kannst deine Einwilligung jederzeit über die Cookie-Einstellungen auf dieser
              Webseite mit Wirkung für die Zukunft widerrufen.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              8. Terminbuchung über Calendly
            </h2>
            <p>Für die Buchung von Beratungs- und Verkaufsgesprächen nutzen wir den Dienst Calendly:</p>
            <p className="mt-4">
              Calendly LLC<br />
              271 17th St NW, Suite 1000<br />
              Atlanta, GA 30363, USA
            </p>
            <p className="mt-4">
              Wenn du über Calendly einen Termin buchst, verarbeitet Calendly in unserem Auftrag
              insbesondere:
            </p>
            <ul className="mt-3 space-y-1 pl-5 list-disc marker:text-[#0041FB]">
              <li>Name und E-Mail-Adresse</li>
              <li>Gewünschten Termin und Zeitzone</li>
              <li>Ggf. weitere Angaben, die du im Buchungsformular einträgst</li>
            </ul>
            <p className="mt-4">
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Durchführung
              vorvertraglicher Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
              an einer effizienten Terminorganisation).
            </p>
            <p className="mt-4">
              Da Calendly ein US-amerikanisches Unternehmen ist, kann es zu einer Übermittlung
              personenbezogener Daten in die USA kommen. Die Übermittlung erfolgt auf Grundlage von
              EU-Standardvertragsklauseln gemäß Art. 46 DSGVO. Weitere Informationen findest du in
              der Datenschutzrichtlinie von Calendly:{" "}
              <a
                href="https://calendly.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0041FB] hover:underline"
              >
                calendly.com/privacy
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              9. Cookies und Tracking
            </h2>
            <p>Wir verwenden auf dieser Webseite Cookies und ähnliche Technologien.</p>
            <p className="mt-4">
              Zur Verwaltung deiner Cookie-Einwilligung setzen wir den Dienst Cookiebot ein:
            </p>
            <p className="mt-4">
              Cybot A/S<br />
              Havnegade 39<br />
              1058 Kopenhagen, Dänemark
            </p>
            <p className="mt-4">
              Cookiebot speichert deine Einwilligungsentscheidung sowie technische Informationen
              (z.&nbsp;B. anonymisierte IP-Adresse, Zeitpunkt der Einwilligung, verwendeter Browser)
              zur Dokumentation und zum Nachweis der erteilten oder verweigerten Einwilligung. Da
              Cybot A/S ein EU-ansässiges Unternehmen ist, findet keine Übermittlung in Drittländer
              statt. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO
              (gesetzliche Pflicht zur Dokumentation von Einwilligungen) sowie Art. 6 Abs. 1 lit. f
              DSGVO.
            </p>
            <p className="mt-4">
              Technisch notwendige Cookies sind für den Betrieb der Seite erforderlich. Sie werden
              auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO eingesetzt.
            </p>
            <p className="mt-4">
              Statistik- und Marketing-Cookies (z.&nbsp;B. Facebook-Pixel) setzen wir nur, wenn du
              uns hierzu über das Cookie-Banner deine Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO
              in Verbindung mit § 25 TDDDG erteilst.
            </p>
            <p className="mt-4">
              Im Cookie-Banner kannst du auswählen, ob du nur notwendige Cookies zulässt oder
              zusätzlich in Statistik- und Marketing-Cookies einwilligst. Deine Einwilligung kannst
              du jederzeit mit Wirkung für die Zukunft über die Cookie-Einstellungen dieser Webseite
              widerrufen.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              10. Kontaktaufnahme per E-Mail oder Formular
            </h2>
            <p>
              Wenn du uns per E-Mail oder über ein Kontaktformular kontaktierst, verarbeiten wir die
              von dir übermittelten Daten zur Bearbeitung deiner Anfrage. Die Verarbeitung erfolgt
              auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern deine Anfrage auf einen
              Vertragsabschluss oder vorvertragliche Maßnahmen gerichtet ist. Andernfalls beruht die
              Verarbeitung auf unserem berechtigten Interesse an der effizienten Bearbeitung von
              Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p className="mt-4">
              Die Daten verbleiben bei uns, bis der Zweck der Verarbeitung entfällt oder du die
              Löschung verlangst, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              11. Speicherdauer
            </h2>
            <p>
              Wir speichern deine personenbezogenen Daten nur so lange, wie dies für die genannten
              Zwecke erforderlich ist oder wie wir gesetzlich dazu verpflichtet sind.
            </p>
            <ul className="mt-3 space-y-1 pl-5 list-disc marker:text-[#0041FB]">
              <li>Daten aus der E-Mail-Anmeldung speichern wir, solange du unsere E-Mails erhalten möchtest.</li>
              <li>
                Wenn du deine Einwilligung widerrufst oder der Nutzung deiner Daten für
                Direktwerbung widersprichst, löschen wir deine Daten aus unseren Verteilerlisten,
                sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </li>
              <li>
                Protokolldaten (z.&nbsp;B. Server-Logs) und Trackingdaten werden nach Ablauf
                technisch bzw. statistisch erforderlicher Fristen gelöscht oder anonymisiert.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              12. Deine Rechte
            </h2>
            <p>
              Du hast im Rahmen der gesetzlichen Vorgaben folgende Rechte hinsichtlich der dich
              betreffenden personenbezogenen Daten:
            </p>
            <ul className="mt-3 space-y-1 pl-5 list-disc marker:text-[#0041FB]">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch gegen bestimmte Verarbeitungen (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-4">
              Sofern die Verarbeitung auf deiner Einwilligung beruht, kannst du diese jederzeit mit
              Wirkung für die Zukunft widerrufen, ohne dass die Rechtmäßigkeit der bis zum Widerruf
              erfolgten Verarbeitung berührt wird.
            </p>
            <p className="mt-4">
              Zur Ausübung deiner Rechte kannst du uns jederzeit unter den oben angegebenen
              Kontaktdaten kontaktieren. Du hast zudem das Recht, dich bei einer
              Datenschutzaufsichtsbehörde über die Verarbeitung deiner personenbezogenen Daten zu
              beschweren.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              13. Widerspruch gegen Direktwerbung
            </h2>
            <p>
              Soweit wir personenbezogene Daten verarbeiten, um Direktwerbung zu betreiben, hast du
              das Recht, jederzeit Widerspruch gegen diese Verarbeitung einzulegen. Nach deinem
              Widerspruch werden deine Daten nicht mehr für Zwecke der Direktwerbung verarbeitet.
            </p>
            <p className="mt-4">
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur
              Übersendung von nicht ausdrücklich angeforderter Werbung wird hiermit widersprochen.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              14. Hinweis zu Art. 27 DSGVO (Vertreter in der EU)
            </h2>
            <p>
              Da die CopyStudio Marketing LLC keinen Sitz in der Europäischen Union hat und
              regelmäßig Daten von Personen in der EU verarbeitet, kann die Pflicht bestehen, einen
              Vertreter in der Europäischen Union gemäß Art. 27 DSGVO zu benennen. Ob und in welchem
              Umfang dies erforderlich ist, hängt vom konkreten Umfang und der Art unserer
              Datenverarbeitung ab.
            </p>
            <p className="mt-4">
              Sofern ein Vertreter in der Europäischen Union benannt wird, werden dessen Name und
              Kontaktdaten an dieser Stelle ergänzt.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-[18px] font-black text-white mb-4 tracking-[-0.01em]">
              15. Haftungshinweis
            </h2>
            <p>
              Diese Hinweise sollen transparent zeigen, wie wir mit deinen personenbezogenen Daten
              umgehen. Die Inhalte wurden mit größter Sorgfalt erstellt, ersetzen jedoch keine
              individuelle Rechtsberatung. Für die abschließende rechtliche Prüfung und die
              passgenaue Anpassung an das konkrete Geschäftsmodell sowie die Gesellschaftsstruktur
              der CopyStudio Marketing LLC sollte eine qualifizierte Rechtsberatung hinzugezogen
              werden.
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.07] flex items-center justify-between flex-wrap gap-4">
          <p className="text-[12px] text-white/25 font-mono tracking-widest uppercase">
            © 2026 CopyStudio Marketing LLC · alle Rechte vorbehalten
          </p>
          <Link href="/impressum" className="text-[12px] text-white/30 hover:text-white transition-colors duration-200">
            Impressum
          </Link>
        </div>
      </main>
    </div>
  );
}
