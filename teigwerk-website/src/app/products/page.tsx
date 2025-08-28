"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  features: string[];
  partnerImages: string[];
}

const products: Product[] = [
  // Brote & Klassiker
  {
    id: 1,
    name: "Italienisches Landbrot mit Sauerteig",
    description: "Rustikales Sauerteigbrot in echter italienischer Tradition - locker, aromatisch und ideal für Restaurants und Cafés. Perfekt als Antipasti-Beilage oder für herzhafte Schnitten.",
    price: "",
    image: "/Sauerteigbrot.png",
    category: "Brote & Klassiker",
    features: [],
    partnerImages: ["/Kunde_Perfetto.png", "/Kunde_Landbrot.webp"]
  },
  {
    id: 4,
    name: "Kräftiges Dinkelsauerteigbrot",
    description: "Kräftig im Geschmack, hergestellt mit langer Teigführung für beste Verträglichkeiten. Ideal für Gastronomen, die vollwertige Brote anbieten wollen.",
    price: "",
    image: "/Dinkelsauerteig.png",
    category: "Brote & Klassiker",
    features: [],
    partnerImages: []
  },
  {
    id: 5,
    name: "Aromatisches Focaccia",
    description: "Saftige Focaccia mit Olivenöl, handgebacken für beste Qualität. In verschiedene Sorten erhältlich: Klassisch mit Rosmarin, Italienisch mit getrockneten Tomaten und Oliven oder Mediterran mit Gemüse.",
    price: "",
    image: "/Focaccia bread.png",
    category: "Brote & Klassiker",
    features: [],
    partnerImages: []
  },
  {
    id: 8,
    name: "Knuspriges Baguette",
    description: "Der Baguette-Klassiker mit knuspriger Kruste und luftigem Inneren.",
    price: "",
    image: "/Baguette.png",
    category: "Brote & Klassiker",
    features: [],
    partnerImages: []
  },
  // Trendgebäcke
  {
    id: 2,
    name: "Fluffige Mohnbagel",
    description: "Fluffige Bagels - außen leicht knusprig, innen weich und saftig. Ideal für Cafés und Gastronomie. Perfekt für kreative Bagel Kombinationen und Frühstücksangebote.",
    price: "",
    image: "/Mohnbagel.png",
    category: "Trendgebäcke",
    features: [],
    partnerImages: ["/Kunde_Bagel.jpeg", "/Kunde_Bagel1.webp"]
  },
  {
    id: 9,
    name: "Würzige Simits",
    description: "Original türkische Sesamringe mit knuspriger Kruste.",
    price: "",
    image: "/Simits.png",
    category: "Trendgebäcke",
    features: [],
    partnerImages: ["/Kunde_Simits.webp", "/Kunde_Simits2.webp"]
  },
  {
    id: 7,
    name: "Focaccia-Buns",
    description: "Kleine, aromatische Focaccia-Brötchen – perfekt für Buffets, Salate oder als hochwertige Beilage.",
    price: "",
    image: "/Focaccia bun.png",
    category: "Brote & Klassiker",
    features: [],
    partnerImages: []
  },
  // Burger Buns
  {
    id: 6,
    name: "American-Style Potato Buns",
    description: "Luftige, weiche Potato Burger Buns mit goldener Kruste. Entwickelt für saftige Gourmet-Burger.",
    price: "",
    image: "/Potato bun productpage.png",
    category: "Burger Buns",
    features: [],
    partnerImages: ["/Kunde_Burger1.avif", "/Kunde_Burger2.avif"]
  },
  {
    id: 11,
    name: "Luftige Brioche Buns",
    description: "Buttrig-zarte Brioche Buns mit glänzender Kruste und Sesam, perfekt für die jedem Burger ein Upgrade geben.",
    price: "",
    image: "/brioche bun.png",
    category: "Burger Buns",
    features: [],
    partnerImages: ["/Burger Kunde.jpeg"]
  },
  // Süßes & Besonderes
  {
    id: 3,
    name: "Fudgy Bananenbrot",
    description: "Saftiges Bananenbrot zum Naschen - ein süßer Klassiker, der sich vielseitig kombinieren lässt und Gäste begeistert.",
    price: "",
    image: "/bananenbrot.png",
    category: "Süßes & Besonderes",
    features: [],
    partnerImages: ["/bananenbrot.jpeg"]
  },
  {
    id: 10,
    name: "Matcha-Cookies mit weißer Schokolade",
    description: "Fudgy Cookies mit feiner Matcha-Note und süßen Schokoladenstücken - ideal für Cafés und Restaurants, die ein besonderes Gebäck suchen.",
    price: "",
    image: "/Matcha-Cookies.png",
    category: "Süßes & Besonderes",
    features: [],
    partnerImages: []
  }
];

const categories = ["Alle", "Brote & Klassiker", "Burger Buns", "Trendgebäcke", "Süßes & Besonderes"];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Alle");

  const filteredProducts = selectedCategory === "Alle" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-[#D1BA9C]/60 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-0 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo.svg"
              alt="Teigwerk Logo"
              width={187}
              height={94}
              className="object-contain"
            />
          </Link>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="font-body-medium text-lg text-black hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/products" className="font-body-medium text-lg text-primary">
              Sortiment
            </Link>
            <Link href="/#contact" className="font-body-medium text-lg text-black hover:text-primary transition-colors">
              Kontakt
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/90 to-secondary/90 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-headline text-5xl md:text-6xl mb-6">
            Unser Sortiment
          </h1>
          <p className="font-body text-xl md:text-2xl max-w-3xl mx-auto">
            Entdecken Sie unser komplettes Bäckerei-Sortiment für Gastronomie & Großhandel – von saftigem italienischem Landbrot über fluffige Bagels bis hin zu süßem Gebäck wie Bananenbrot, frisch gebacken und direkt für Ihr Café, Restaurant oder Hotel geliefert.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-[#D1BA9C]/60 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`font-cta px-6 py-2 rounded-full transition-colors ${
                  category === selectedCategory 
                    ? "bg-secondary text-white" 
                    : "border border-gray-300 text-gray-600 hover:border-secondary hover:text-secondary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-[#D1BA9C]/60">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-cta">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="font-headline text-2xl text-foreground">
                      {product.name}
                    </h3>
                  </div>
                  
                  <p className="font-body text-gray-600 mb-6">
                    {product.description}
                  </p>
                  
                  <div className="flex justify-center">
                    <button className="w-full font-cta bg-secondary hover:bg-primary text-white py-3 rounded-full transition-colors">
                      Entdecke mehr
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-20 bg-[#D1BA9C]/60">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-headline text-4xl md:text-5xl text-black mb-8">
            Warum DAS TEIGWERK?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🍳</span>
              </div>
              <h3 className="font-headline text-xl text-black mb-3">Handgemacht in Köln</h3>
              <p className="font-body text-black">
                Keine Industrie - echte Handwerkskunst.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌾</span>
              </div>
              <h3 className="font-headline text-xl text-black mb-3">Ehrliche Zutaten</h3>
              <p className="font-body text-black">
                Wir setzen auf Qualität, nicht auf Zusätze.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="font-headline text-xl text-black mb-3">Verlässlicher Service</h3>
              <p className="font-body text-black">
                Wir liefern, was du brauchst und wann du's brauchst.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-foreground text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-headline text-3xl md:text-4xl mb-4">
            Kontaktieren Sie uns
          </h2>
          <p className="font-body text-lg mb-8 max-w-2xl mx-auto">
            Interesse an einer Partnerschaft oder Fragen zu unserem Sortiment? Wir freuen uns auf Ihre Nachricht.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#contact"
              className="font-cta bg-secondary hover:bg-accent text-white px-8 py-4 rounded-full transition-colors inline-flex items-center justify-center"
            >
              Kontakt aufnehmen
            </Link>
            <Link 
              href="/"
              className="font-cta border border-white/80 hover:bg-white hover:text-foreground text-white px-8 py-4 rounded-full transition-colors inline-flex items-center justify-center"
            >
              Zur Startseite
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Look Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedProduct(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-cta mb-2 inline-block">
                    {selectedProduct.category}
                  </span>
                  <h2 className="font-headline text-3xl text-foreground">
                    {selectedProduct.name}
                  </h2>
                </div>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-headline text-xl mb-4">Produktbeschreibung</h3>
                  <p className="font-body text-gray-600">
                    {selectedProduct.description}
                  </p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-headline text-xl mb-4">So verwenden unsere Partner dieses Produkt</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {selectedProduct.partnerImages.map((image, index) => (
                    <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`Partner usage ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#D1BA9C]/60 py-12 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="font-logo text-2xl text-black mb-4 block">
                DAS TEIGWERK
              </Link>
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