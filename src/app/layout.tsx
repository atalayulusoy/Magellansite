import type { Metadata } from "next";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/sora";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://www.magellanserigrafiboyalari.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "MAGELLAN SERİGRAFİ BOYALARI",
  title: "MAGELLAN SERİGRAFİ BOYALARI | Endüstriyel Baskı Boyaları",
  description:
    "Magellan Serigrafi Boyaları; serigrafi, tekstil, poşet, eldiven, tişört ve endüstriyel baskı boyalarında premium kalite üretim ve özel renk çözümleri sunar.",
  keywords: [
    "serigrafi boyaları",
    "endüstriyel baskı boyaları",
    "tekstil baskı boyaları",
    "poşet baskı boyaları",
    "özel renk üretimi",
    "Magellan Serigrafi Boyaları",
  ],
  openGraph: {
    title: "MAGELLAN SERİGRAFİ BOYALARI",
    description:
      "Premium görünüm, yüksek kalite üretim ve endüstriyel baskı çözümleri.",
    url: siteUrl,
    siteName: "MAGELLAN SERİGRAFİ BOYALARI",
    images: [
      {
        url: "/magellan-label.png",
        width: 1536,
        height: 1024,
        alt: "Magellan Serigrafi Boyaları ürün etiketi",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAGELLAN SERİGRAFİ BOYALARI",
    description:
      "Serigrafi ve endüstriyel baskı sektörüne yüksek kaliteli boya üretimi.",
    images: ["/magellan-label.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full scroll-smooth">
      <body className="min-h-full bg-[#060814] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
