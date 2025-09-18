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
    images: [
      {
        url: '/Logo.svg',
        width: 1920,
        height: 1080,
        alt: 'Das Teigwerk - Handwerkliche Backwaren aus Köln'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Das Teigwerk',
    description:
      'Backwaren aus Köln – Lieferung in Köln, Düsseldorf, Bonn & NRW.',
    images: ['/Logo.svg']
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/Logo.svg', type: 'image/svg+xml' }
    ],
    apple: '/Logo.svg',
    shortcut: '/Logo.svg'
  },
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
