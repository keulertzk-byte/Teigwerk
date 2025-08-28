import Image from "next/image";
import Link from "next/link";
import HeroSlideshow from "./components/HeroSlideshow";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-[#D1BA9C]/60 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-0 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/Logo.svg"
              alt="Teigwerk Logo"
              width={187}
              height={94}
              className="object-contain"
            />
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="font-body-medium text-lg text-black hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/products" className="font-body-medium text-lg text-black hover:text-primary transition-colors">
              Sortiment
            </Link>
            <Link href="#contact" className="font-body-medium text-lg text-black hover:text-primary transition-colors">
              Kontakt
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HeroSlideshow />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <div className="mb-8">
            <Image
              src="/Teigwerk Logo Weiss.png"
              alt="Teigwerk Logo"
              width={900}
              height={900}
              className="mx-auto mb-6"
            />
          </div>
          <h1 className="font-headline text-5xl md:text-7xl mb-8">
            Weil{" "}
            <span style={{ color: "#BA8D60" }}>gutes Brot</span>
            <br />
            den Unterschied macht
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products"
              className="font-cta bg-secondary hover:bg-primary text-white px-8 py-4 rounded-full transition-colors inline-flex items-center justify-center"
            >
              Sortiment entdecken
            </Link>
            <Link 
              href="#contact"
              className="font-cta border border-white/80 hover:bg-white hover:text-foreground text-white px-8 py-4 rounded-full transition-colors inline-flex items-center justify-center"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <div className="py-10 bg-[#D1BA9C]/60"></div>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#D1BA9C]/60">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="/Teigwerk Bakery.jpg"
                alt="Teigwerk Bakery"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-headline text-3xl md:text-4xl text-black leading-tight mb-6">
                Tradition trifft auf moderne Gastronomie
              </h2>
              <p className="font-body text-xl md:text-2xl text-black leading-relaxed">
                Wir bei Teigwerk kombinieren bewährte Handwerkstechniken mit modernen Ansätzen, um Backwaren zu schaffen, die Tradition und Innovation perfekt verbinden.
                <br /><br />
                Handwerk trifft auf Professionalität.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-[#D1BA9C]/60">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl text-black mb-4">
              Unser Sortiment
            </h2>
            <p className="font-body text-xl md:text-2xl text-black max-w-2xl mx-auto">
              Vom klassischen Sauerteigbrot bis zum saftigen Bananenbrot. 
              <br />
              <strong>Homemade. Honest. From Cologne.</strong>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 category-container">
            {/* Brote & Klassiker */}
            <Link href="/products?category=Brote%20%26%20Klassiker" className="category-item group cursor-pointer transition-all duration-500 ease-in-out hover:flex-grow">
              <div className="relative h-96 mb-6 overflow-hidden rounded-2xl">
                <Image
                  src="/Sauerteigbrot.jpeg"
                  alt="Brote & Klassiker"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-headline text-2xl md:text-3xl text-black mb-2 text-center">
                Brote & Klassiker
              </h3>
              <p className="font-body text-xl md:text-2xl text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Traditionelle Brote und bewährte Klassiker aus der Backstube.
              </p>
            </Link>

            {/* Burgerbuns */}
            <Link href="/products?category=Burger%20Buns" className="category-item group cursor-pointer transition-all duration-500 ease-in-out hover:flex-grow">
              <div className="relative h-96 mb-6 overflow-hidden rounded-2xl">
                <Image
                  src="/burger buns landingpage.png"
                  alt="Burgerbuns"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-headline text-2xl md:text-3xl text-black mb-2 text-center">
                Burger Buns
              </h3>
              <p className="font-body text-xl md:text-2xl text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Perfekte Buns für Burger, Sandwiches und Street Food Kreationen.
              </p>
            </Link>

            {/* Trendgebäcke */}
            <Link href="/products?category=Trendgeb%C3%A4cke" className="category-item group cursor-pointer transition-all duration-500 ease-in-out hover:flex-grow">
              <div className="relative h-96 mb-6 overflow-hidden rounded-2xl">
                <Image
                  src="/Mohnbagel.png"
                  alt="Trendgebäcke"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-headline text-2xl md:text-3xl text-black mb-2 text-center">
                Trendgebäcke
              </h3>
              <p className="font-body text-xl md:text-2xl text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Moderne Kreationen und innovative Backwaren im Trend der Zeit.
              </p>
            </Link>

            {/* Süßes & Besonderes */}
            <Link href="/products?category=S%C3%BC%C3%9Fes%20%26%20Besonderes" className="category-item group cursor-pointer transition-all duration-500 ease-in-out hover:flex-grow">
              <div className="relative h-96 mb-6 overflow-hidden rounded-2xl">
                <Image
                  src="/Bananenbrot.png"
                  alt="Süßes & Besonderes"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-headline text-2xl md:text-3xl text-black mb-2 text-center">
                Süßes & Besonderes
              </h3>
              <p className="font-body text-xl md:text-2xl text-black text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Süße Leckereien und besondere Spezialitäten für jeden Anlass.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl text-black mb-8">
              Unsere Partner
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto mb-20">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-6 pb-4" style={{width: 'max-content'}}>
                
                {/* Existing logos */}
                <div className="flex-shrink-0 w-60 flex items-center justify-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
                  <Image
                    src="/Kunde_Beigel Logo.jpeg"
                    alt="Kunde Beigel Logo"
                    width={150}
                    height={75}
                    className="object-contain"
                  />
                </div>

                <div className="flex-shrink-0 w-60 flex items-center justify-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
                  <Image
                    src="/Kunde_Feinripp Logo.png"
                    alt="Kunde Feinripp Logo"
                    width={150}
                    height={75}
                    className="object-contain"
                  />
                </div>

                {/* New logos */}
                <div className="flex-shrink-0 w-60 flex items-center justify-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
                  <Image
                    src="/Kunde_Burritos Logo.jpg"
                    alt="Kunde Burritos Logo"
                    width={150}
                    height={75}
                    className="object-contain"
                  />
                </div>

                <div className="flex-shrink-0 w-60 flex items-center justify-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
                  <Image
                    src="/Kunde_Montys Logo.jpg"
                    alt="Kunde Montys Logo"
                    width={150}
                    height={75}
                    className="object-contain"
                  />
                </div>

                <div className="flex-shrink-0 w-60 flex items-center justify-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
                  <Image
                    src="/Kunde_Perfetto Logo.png"
                    alt="Kunde Perfetto Logo"
                    width={150}
                    height={75}
                    className="object-contain"
                  />
                </div>

                <div className="flex-shrink-0 w-60 flex items-center justify-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
                  <Image
                    src="/Kunde_St Louis Logo.svg"
                    alt="Kunde St Louis Logo"
                    width={150}
                    height={75}
                    className="object-contain"
                  />
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-[#D1BA9C]/60">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl text-black mb-8">
              Eindrücke aus den Küchen unserer Partner
            </h2>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-4 pb-6" style={{width: 'max-content'}}>
                
                {/* Gallery Item 1 - Small */}
                <div className="flex-shrink-0 relative h-80 w-60 rounded-2xl overflow-hidden">
                  <Image
                    src="/Kunde_Bagel.jpeg"
                    alt="Partner kitchen - Bagel preparation"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Gallery Item 2 - Largest */}
                <div className="flex-shrink-0 relative h-96 w-80 rounded-2xl overflow-hidden">
                  <Image
                    src="/Kunde_Bob & Mary.png"
                    alt="Partner kitchen - Bob & Mary"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Gallery Item 3 - Medium */}
                <div className="flex-shrink-0 relative h-88 w-72 rounded-2xl overflow-hidden">
                  <Image
                    src="/Kunde_Burritos.png"
                    alt="Partner kitchen - Burritos"
                    fill
                    className="object-cover"
                  />
                </div>


                {/* Gallery Item 4 - Medium-Small */}
                <div className="flex-shrink-0 relative h-84 w-64 rounded-2xl overflow-hidden">
                  <Image
                    src="/Kunde_Jim & June.png"
                    alt="Partner kitchen - Jim & June"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Gallery Item 5 - Small */}
                <div className="flex-shrink-0 relative h-80 w-60 rounded-2xl overflow-hidden">
                  <Image
                    src="/Kunde_Montys.png"
                    alt="Partner kitchen - Montys"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Gallery Item 6 - Largest */}
                <div className="flex-shrink-0 relative h-96 w-80 rounded-2xl overflow-hidden">
                  <Image
                    src="/Kunde_Perfetto.png"
                    alt="Partner kitchen - Perfetto"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Gallery Item 7 - Medium */}
                <div className="flex-shrink-0 relative h-88 w-72 rounded-2xl overflow-hidden">
                  <Image
                    src="/Kunde_St Louis .png"
                    alt="Partner kitchen - St Louis"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Gallery Item 8 - Small */}
                <div className="flex-shrink-0 relative h-80 w-60 rounded-2xl overflow-hidden">
                  <Image
                    src="/Kunde_Sandwiches.avif"
                    alt="Partner kitchen - Sandwiches"
                    fill
                    className="object-cover"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-foreground text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl md:text-5xl mb-6">
                Kontaktieren Sie uns
              </h2>
              <p className="font-body text-xl mb-8">
                Interesse an einer Partnerschaft oder Fragen zu unserem Sortiment? Wir freuen uns auf Ihre Nachricht.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h3 className="font-headline text-2xl mb-6">Teigwerk Kontakt</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">📍</span>
                    </div>
                    <div>
                      <p className="font-body-medium text-white">Adresse</p>
                      <p className="font-body text-gray-300">Walter-Gropius-Straße 8<br />50126 Bergheim</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✉️</span>
                    </div>
                    <div>
                      <p className="font-body-medium text-white">E-Mail</p>
                      <p className="font-body text-gray-300">j.haiar@outlook.de</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block font-body-medium text-white mb-2">
                        Vorname *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-secondary focus:bg-white/20 transition-colors"
                        placeholder="Ihr Vorname"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block font-body-medium text-white mb-2">
                        Nachname *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-secondary focus:bg-white/20 transition-colors"
                        placeholder="Ihr Nachname"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-body-medium text-white mb-2">
                      E-Mail Adresse *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-secondary focus:bg-white/20 transition-colors"
                      placeholder="ihre.email@beispiel.de"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block font-body-medium text-white mb-2">
                      Unternehmen
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-secondary focus:bg-white/20 transition-colors"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block font-body-medium text-white mb-2">
                      Betreff *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-secondary focus:bg-white/20 transition-colors"
                    >
                      <option value="">Bitte wählen Sie ein Thema</option>
                      <option value="partnership">Partnerschaft Anfrage</option>
                      <option value="wholesale">Großhandel</option>
                      <option value="general">Allgemeine Anfrage</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-body-medium text-white mb-2">
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-secondary focus:bg-white/20 transition-colors resize-none"
                      placeholder="Teilen Sie uns mit, wie wir Ihnen helfen können..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full font-cta bg-secondary hover:bg-primary text-white py-4 px-8 rounded-full transition-colors duration-300"
                  >
                    Nachricht senden
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#D1BA9C]/60 py-12 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
