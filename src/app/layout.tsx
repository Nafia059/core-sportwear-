import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coresportswears.com"),
  title: {
    default: "Core Sportswears | Custom Sportswear Manufacturer & Exporter | Sialkot, Pakistan",
    template: "%s | Core Sportswears",
  },
  description:
    "Core Sportswears is a leading custom sportswear manufacturer and exporter from Sialkot, Pakistan. We produce custom ski & snow wear, streetwear, sportswear, bags & accessories with no MOQ for trial samples. Quality is everything.",
  keywords: [
    "sportswear manufacturer Pakistan", "custom sportswear Sialkot", "sportswear exporter Pakistan",
    "custom ski jackets manufacturer", "streetwear manufacturer Pakistan", "basketball jersey manufacturer",
    "soccer jersey manufacturer Pakistan", "private label sportswear", "custom sportswear manufacturer",
    "Sialkot sportswear factory", "bulk sportswear supplier", "OEM sportswear Pakistan",
    "custom hoodies manufacturer", "football jersey manufacturer Pakistan", "cricket uniform manufacturer",
  ],
  authors: [{ name: "Core Sportswears" }],
  creator: "Core Sportswears",
  publisher: "Core Sportswears",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://coresportswears.com",
    siteName: "Core Sportswears",
    title: "Core Sportswears | Custom Sportswear Manufacturer & Exporter | Sialkot, Pakistan",
    description:
      "Custom sportswear, ski & snow wear, streetwear, bags manufacturer and exporter from Sialkot, Pakistan. No MOQ for trial samples. Quality is everything.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Core Sportswears - Custom Sportswear Manufacturer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Core Sportswears | Custom Sportswear Manufacturer",
    description: "Custom sportswear, ski & snow wear, streetwear manufacturer from Sialkot, Pakistan.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: "https://coresportswears.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="geo.region" content="PK" />
        <meta name="geo.placename" content="Sialkot" />
        <meta name="geo.position" content="32.4586;74.5091" />
        <meta name="ICBM" content="32.4586, 74.5091" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <JsonLd name="Core Sportswears" description="Custom sportswear manufacturer and exporter from Sialkot, Pakistan" type="Organization" />
        <JsonLd name="Core Sportswears" description="Custom sportswear manufacturer and exporter" type="WebSite" />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
