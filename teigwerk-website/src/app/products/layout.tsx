import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Sortiment',
  description: 'Entdecken Sie unser komplettes Bäckerei-Sortiment für Gastronomie & Großhandel: Sauerteigbrote, Burger Buns, Bagels, Focaccia und süße Spezialitäten aus Köln.',
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: 'Sortiment | Das Teigwerk',
    description: 'Entdecken Sie unser komplettes Bäckerei-Sortiment für Gastronomie & Großhandel: Sauerteigbrote, Burger Buns, Bagels, Focaccia und süße Spezialitäten aus Köln.',
    url: 'https://www.das-teigwerk.de/products',
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}