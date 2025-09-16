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
  keywords: [
    'Backwaren Köln',
    'Gastronomie Lieferant',
    'Burger Buns',
    'Sauerteigbrot',
    'Großhandel Bäckerei',
    'Restaurant Belieferung',
    'Handwerksbäckerei',
    'Düsseldorf',
    'Bonn',
    'NRW'
  ],
  authors: [{ name: 'Das Teigwerk GmbH' }],
  creator: 'Das Teigwerk GmbH',
  publisher: 'Das Teigwerk GmbH',
  category: 'Lebensmittel',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Das Teigwerk',
    description:
      'Handwerkliche Backwaren aus Köln: Das Teigwerk liefert frische Brote, Burger Buns & Spezialitäten an Gastronomie, Cafés & Großhandel in Köln, Düsseldorf, Bonn & NRW.',
    url: 'https://www.das-teigwerk.de',
    siteName: 'Das Teigwerk',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Das Teigwerk - Handwerkliche Backwaren aus Köln',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Das Teigwerk',
    description:
      'Handwerkliche Backwaren aus Köln: Lieferung für Gastronomie & Cafés in Köln, Düsseldorf, Bonn & NRW.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual code when you have it
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
