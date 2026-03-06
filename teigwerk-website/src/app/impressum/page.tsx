import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Impressum & Datenschutz',
  description: 'Impressum und Datenschutzerklärung der Teigwerk GmbH - Rechtliche Informationen und Datenschutzhinweise für www.das-teigwerk.de',
  alternates: {
    canonical: '/impressum',
  },
  openGraph: {
    title: 'Impressum & Datenschutz | Das Teigwerk',
    description: 'Impressum und Datenschutzerklärung der Haiar Brot GmbH - Rechtliche Informationen und Datenschutzhinweise.',
    url: 'https://www.das-teigwerk.de/impressum',
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-[#D1BA9C]/60 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-0 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <img
                src="/Logo.svg"
                alt="Das Teigwerk - Handwerkliche Backwaren aus Köln"
                width={187}
                height={94}
                className="object-contain"
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="font-body-medium text-lg text-black hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/products" className="font-body-medium text-lg text-black hover:text-primary transition-colors">
              Sortiment
            </Link>
            <Link href="/#contact" className="font-body-medium text-lg text-black hover:text-primary transition-colors">
              Kontakt
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl md:text-5xl text-black mb-12">
            Impressum
          </h1>

          <div className="space-y-8 font-body text-lg text-black">
            <p className="italic mb-8">Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)</p>

            <section>
              <p className="mb-4">
                <strong>Unternehmen:</strong> Haiar Brot GmbH<br />
                <strong>Vertreten durch:</strong> Geschäftsführer Jan Haiar<br />
                <strong>Anschrift:</strong> Walter-Gropius-Straße 8, 50126 Bergheim, Deutschland<br />
                <strong>E‑Mail:</strong> <a href="mailto:j.haiar@outlook.de" className="text-primary hover:underline">j.haiar@outlook.de</a><br />
                <strong>Website:</strong> <a href="https://www.das-teigwerk.de" className="text-primary hover:underline">https://www.das-teigwerk.de</a>
              </p>

              <p className="mb-4">
                <strong>Registereintrag:</strong><br />
                Amtsgericht Köln, HRB 88257
              </p>
            </section>

            <section>
              <h2 className="font-headline text-2xl text-black mb-4">Online‑Streitbeilegung / Verbraucher­schlichtung</h2>
              <p className="mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online‑Streitbeilegung (OS) bereit: <code className="bg-gray-100 px-2 py-1 rounded">https://ec.europa.eu/consumers/odr/</code>.
              </p>
              <p className="mb-4">
                Wir sind nicht verpflichtet und grundsätzlich nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucher­schlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-2xl text-black mb-4">Haftung für Inhalte</h2>
              <p className="mb-4">
                Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität können wir jedoch keine Gewähr übernehmen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-2xl text-black mb-4">Haftung für Links</h2>
              <p className="mb-4">
                Unsere Website enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese Inhalte ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-2xl text-black mb-4">Urheberrecht</h2>
              <p className="mb-4">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>

            <hr className="border-gray-300 my-12" />

            <section>
              <h1 className="font-headline text-4xl md:text-5xl text-black mb-8">
                Datenschutzerklärung
              </h1>

              <p className="italic mb-8">Stand: 16.09.2025</p>

              <p className="mb-8">
                Diese Datenschutzerklärung informiert über die Verarbeitung personenbezogener Daten bei Nutzung der Website <strong><a href="http://www.das-teigwerk.de" className="text-primary hover:underline">www.das-teigwerk.de</a></strong> („Website").
              </p>

              <h2 className="font-headline text-2xl text-black mb-4">1. Verantwortlicher</h2>
              <p className="mb-6">
                <strong>Haiar Brot GmbH</strong><br />
                Walter-Gropius-Straße 8, 50126 Bergheim, Deutschland<br />
                E‑Mail: <a href="mailto:j.haiar@outlook.de" className="text-primary hover:underline">j.haiar@outlook.de</a>
              </p>

              <h2 className="font-headline text-2xl text-black mb-4">2. Zwecke, Rechtsgrundlagen, Empfänger, Speicherdauer</h2>
              <p className="mb-4">
                Wir verarbeiten personenbezogene Daten zur Bereitstellung und Sicherheit der Website, zur Beantwortung von Anfragen sowie ggf. zur Reichweitenmessung/Verbesserung unseres Angebots.
              </p>
              <p className="mb-4">
                <strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertrag/Anbahnung), Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen an einer sicheren, effizienten und wirtschaftlichen Bereitstellung der Website) sowie – soweit erforderlich – Art. 6 Abs. 1 lit. a DSGVO i. V. m. § 25 Abs. 1 TDDDG (Einwilligung für nicht zwingend erforderliche Technologien).
              </p>
              <p className="mb-4">
                <strong>Empfänger:</strong> IT‑/Hosting‑Dienstleister als Auftragsverarbeiter sowie Behörden im Rahmen gesetzlicher Pflichten.
              </p>
              <p className="mb-6">
                <strong>Speicherdauer:</strong> grundsätzlich bis zur Zweckerfüllung bzw. nach Maßgabe gesetzlicher Aufbewahrungsfristen.
              </p>

              <h2 className="font-headline text-2xl text-black mb-4">3. Hosting und Server‑Logfiles</h2>
              <p className="mb-4">
                Beim Zugriff auf unsere Website verarbeitet der Server automatisch Informationen in sogenannten Logfiles (z. B. IP‑Adresse, Datum/Uhrzeit der Anfrage, Zeitzone, aufgerufene Adresse/URL, HTTP‑Statuscode, übertragene Datenmenge, Referrer‑URL, Browser/ Betriebssystem).
              </p>
              <p className="mb-4">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (betriebssichere Bereitstellung und Missbrauchsprävention).
              </p>
              <p className="mb-6">
                <strong>Speicherdauer:</strong> die Logdaten werden nach einer angemessenen Frist automatisch gelöscht.
              </p>

              <h2 className="font-headline text-2xl text-black mb-4">4. Cookies und ähnliche Technologien</h2>
              <p className="mb-4">
                Wir verwenden – soweit erforderlich – Cookies oder vergleichbare Technologien. <strong>Technisch notwendige</strong> Cookies sind für die Bereitstellung der Website erforderlich (z. B. zur Darstellung und Sicherheit). <strong>Nicht notwendige</strong> Cookies/Technologien setzen wir nur nach Ihrer Einwilligung (§ 25 Abs. 1 TDDDG, Art. 6 Abs. 1 lit. a DSGVO). Sie können Einwilligungen jederzeit mit Wirkung für die Zukunft widerrufen und Cookies in Ihrem Browser löschen.
              </p>

              <h2 className="font-headline text-2xl text-black mb-4">5. Kontaktaufnahme (Kontaktformular/E‑Mail)</h2>
              <p className="mb-4">
                Wenn Sie uns per Kontaktformular oder E‑Mail kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten (z. B. Name, E‑Mail‑Adresse, Inhalt der Nachricht) zur Bearbeitung Ihres Anliegens.
              </p>
              <p className="mb-4">
                <strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertrag/Anbahnung) und Art. 6 Abs. 1 lit. f DSGVO (allgemeine Anfragen).
              </p>
              <p className="mb-6">
                <strong>Speicherdauer:</strong> bis zur abschließenden Bearbeitung; darüber hinaus, wenn gesetzliche Aufbewahrungspflichten bestehen.
              </p>

              <h2 className="font-headline text-2xl text-black mb-4">6. Eingebettete Inhalte/Dienste Dritter</h2>
              <p className="mb-6">
                Sofern wir Inhalte oder Dienste Dritter einbinden (z. B. Karten, Social‑Media‑Inhalte, Schriften‑CDNs), erhalten diese Anbieter ggf. Ihre IP‑Adresse und können eigene Cookies/Technologien einsetzen. Solche Einbindungen erfolgen nur, soweit sie für die Darstellung/Funktion erforderlich sind oder nach Ihrer Einwilligung. Details zu eingesetzten Diensten benennen wir hier, sobald sie tatsächlich verwendet werden.
              </p>

              <h2 className="font-headline text-2xl text-black mb-4">7. Datensicherheit</h2>
              <p className="mb-6">
                Wir treffen technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten (Art. 32 DSGVO). Die Übertragung zwischen Ihrem Browser und unserem Server ist in der Regel TLS/SSL‑verschlüsselt.
              </p>

              <h2 className="font-headline text-2xl text-black mb-4">8. Ihre Rechte</h2>
              <p className="mb-4">
                Sie haben gegenüber dem Verantwortlichen die Rechte auf <strong>Auskunft</strong>, <strong>Berichtigung</strong>, <strong>Löschung</strong>, <strong>Einschränkung</strong>, <strong>Datenübertragbarkeit</strong> sowie <strong>Widerspruch</strong> gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO. Sofern eine Verarbeitung auf <strong>Einwilligung</strong> beruht, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.
              </p>
              <p className="mb-6">
                <strong>Beschwerderecht:</strong> Sie haben das Recht, sich bei einer Datenschutz‑Aufsichtsbehörde zu beschweren, insbesondere in dem Mitgliedstaat Ihres Aufenthaltsorts oder des Orts des mutmaßlichen Verstoßes.
              </p>

              <h2 className="font-headline text-2xl text-black mb-4">9. Aktualität dieser Erklärung</h2>
              <p className="mb-8">
                Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu aktualisieren. Die jeweils aktuelle Fassung ist auf dieser Seite abrufbar.
              </p>

              <hr className="border-gray-300 my-8" />

              <p className="italic text-sm text-gray-600">
                <strong>Hinweis (keine Rechtsberatung):</strong> Diese Seiten wurden nach bestem Wissen erstellt und sollten anhand eurer tatsächlichen Prozesse, eingesetzten Tools und Verträge (Auftragsverarbeitung, Drittlandübermittlungen etc.) final geprüft und ggf. ergänzt werden.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#D1BA9C]/60 py-12 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="font-logo text-2xl text-black mb-4">
                DAS TEIGWERK
              </div>
            </div>
            <div>
              <h4 className="font-headline text-lg text-black mb-4">Kontakt</h4>
              <ul className="space-y-2">
                <li className="font-body text-black">Walter-Gropius-Straße 8</li>
                <li className="font-body text-black">50126 Bergheim</li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline text-lg text-black mb-4">Impressum</h4>
              <ul className="space-y-2">
                <li className="font-body text-black">Haiar Brot GmbH</li>
                <li className="font-body text-black">Geschäftsführer: Jan Haiar</li>
                <li className="font-body text-black">Köln HRB 88257</li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline text-lg text-black mb-4">Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/impressum" className="font-body text-black hover:text-primary transition-colors">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link href="/datenschutz" className="font-body text-black hover:text-primary transition-colors">
                    Datenschutz
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="font-body text-black">
              © 2025 Haiar Brot GmbH. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
