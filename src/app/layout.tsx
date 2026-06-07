import type { Metadata } from "next";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/sora";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.magellanboya.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "MAGELLAN SERİGRAFİ BOYALARI",
  title: {
    default:
      "Serigrafi Boyaları Üreticisi | Türkiye Geneli Hızlı Gönderim | Magellan",
    template: "%s | Magellan Serigrafi Boyaları",
  },
  description:
    "Magellan Serigrafi Boyaları; serigrafi boyaları, tekstil baskı, poşet baskı, deri boyası ve endüstriyel baskı boyalarında üretici firma olarak tüm Türkiye'ye hızlı gönderim sunar.",
  keywords: [
    "serigrafi boyaları",
    "serigrafi boyası",
    "serigrafi boya üreticisi",
    "endüstriyel baskı boyaları",
    "tekstil baskı boyaları",
    "poşet baskı boyaları",
    "deri boyası",
    "plastisol boya",
    "UV serigrafi boyası",
    "Türkiye geneli hızlı gönderim",
    "Magellan Serigrafi Boyaları",
  ],
  openGraph: {
    title: "Serigrafi Boyaları Üreticisi | Magellan",
    description:
      "Serigrafi, tekstil, poşet, deri ve endüstriyel baskı boyalarında üretici firma. Tüm Türkiye'ye hızlı gönderim.",
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
    title: "Serigrafi Boyaları Üreticisi | Magellan",
    description:
      "Serigrafi ve endüstriyel baskı sektörüne yüksek kaliteli boya üretimi ve Türkiye geneli hızlı gönderim.",
    images: ["/magellan-label.png"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/magellan-logo-square.png",
        type: "image/png",
      },
    ],
    shortcut: ["/magellan-logo-square.png"],
    apple: [
      {
        url: "/magellan-logo-square.png",
        type: "image/png",
      },
    ],
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
