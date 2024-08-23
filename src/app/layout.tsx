import type { Metadata } from "next";
import { Lora, Inter } from 'next/font/google';

import "./global.css";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { baseUrl } from "./sitemap";
import cx from "@/cx";

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter', })
const lora = Lora({ subsets: ['latin'], display: 'swap', variable: '--font-lora', })

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Lightningspirit`s blog',
    template: '%s | Lightningspirit`s blog',
  },
  description: 'Written by Vitor De Carvalho, Software Developer, Hacker, Musician, Astrophysics lover, who lives in sunny Lisbon, Portugal.',
  openGraph: {
    title: 'Lightningspirit`s blog',
    description: 'Written by Vitor De Carvalho, Software Developer, Hacker, Musician, Astrophysics lover, who lives in sunny Lisbon, Portugal.',
    url: baseUrl,
    siteName: 'Lightningspirit`s blog',
    locale: 'en_US',
    type: 'website',
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cx(
        inter.variable,
        lora.variable,
      )}
    >
      <body className="antialiased max-w-screen-md min-h-svh grid grid-rows-[auto_1fr_auto] mx-4 pt-8 pb-16 lg:mx-auto space-y-16">
        <Header />
        <main className={cx(
          "prose dark:prose-invert prose-ul:pl-0",
          "prose-code:before:content-none prose-code:after:content-none",
          "mt-6"
        )}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
