import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung der Teigwerk GmbH - Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.',
  alternates: {
    canonical: '/datenschutz',
  },
  openGraph: {
    title: 'Datenschutzerklärung | Das Teigwerk',
    description: 'Datenschutzerklärung der Teigwerk GmbH - Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.',
    url: 'https://www.das-teigwerk.de/datenschutz',
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function Datenschutz() {
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
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="font-headline text-4xl md:text-5xl text-black mb-8">
              Datenschutzerklärung
            </h1>

            <div className="bg-[#D1BA9C]/30 rounded-2xl p-8 mb-8">
              <p className="font-body text-xl text-black mb-6">
                Die vollständige Datenschutzerklärung finden Sie auf unserer Impressum-Seite.
              </p>

              <Link
                href="/impressum#datenschutzerklärung"
                className="font-cta bg-secondary hover:bg-primary text-white px-8 py-4 rounded-full transition-colors inline-flex items-center justify-center"
              >
                Zur Datenschutzerklärung
              </Link>
            </div>

            <div className="space-y-6 font-body text-lg text-black text-left">
              <section>
                <h2 className="font-headline text-2xl text-black mb-4">Kurze Übersicht</h2>
                <p className="mb-4">
                  Diese Datenschutzerklärung informiert über die Verarbeitung personenbezogener Daten bei Nutzung der Website <strong>www.das-teigwerk.de</strong>.
                </p>
              </section>

              <section>
                <h3 className="font-headline text-xl text-black mb-3">Verantwortlicher</h3>
                <p className="mb-4">
                  <strong>Teigwerk GmbH</strong><br />
                  Walter-Gropius-Straße 8, 50126 Bergheim<br />
                  E-Mail: <a href="mailto:j.haiar@outlook.de" className="text-primary hover:underline">j.haiar@outlook.de</a>
                </p>
              </section>

              <section>
                <h3 className="font-headline text-xl text-black mb-3">Ihre Rechte</h3>
                <p className="mb-4">
                  Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch bezüglich Ihrer personenbezogenen Daten.
                </p>
              </section>

              <section>
                <h3 className="font-headline text-xl text-black mb-3">Kontakt für Datenschutzfragen</h3>
                <p>
                  Für Fragen zum Datenschutz wenden Sie sich gerne an: <a href="mailto:j.haiar@outlook.de" className="text-primary hover:underline">j.haiar@outlook.de</a>
                </p>
              </section>
            </div>
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
                <li className="font-body text-black">Teigwerk GmbH</li>
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
              © 2025 Teigwerk. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}