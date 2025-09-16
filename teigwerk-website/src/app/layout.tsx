import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.das-teigwerk.de'),
  title: {
    default: 'Das Teigwerk',
    template: '%s | Das Teigwerk',
  },
  description:
    'Handwerkliche Backwaren aus Köln: Das Teigwerk liefert frische Brote, Burger Buns & Spezialitäten an Gastronomie, Cafés & Großhandel in Köln, Düsseldorf, Bonn & NRW.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Das Teigwerk',
    description:
      'Handwerkliche Backwaren aus Köln für Gastronomie, Cafés & Großhandel – Lieferung in Köln, Düsseldorf, Bonn & NRW.',
    url: 'https://www.das-teigwerk.de',
    siteName: 'Das Teigwerk',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Das Teigwerk',
    description:
      'Backwaren aus Köln – Lieferung in Köln, Düsseldorf, Bonn & NRW.',
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
