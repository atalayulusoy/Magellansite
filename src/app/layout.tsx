import type { Metadata } from "next";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/sora";
import "./globals.css";

const siteUrl = "https://magellanboya.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Magellan Boya",
  title: {
    default:
      "Serigrafi Baskı Boyaları | Serigrafi Boya İmalatçısı | Magellan Boya",
    template: "%s | Magellan Boya",
  },
  description:
    "Magellan Boya; serigrafi baskı boyaları, emprime baskı boyası, plastisol boya, tekstil baskı boyaları, PVC ve UV boya, emülsiyon, inceltici ve yardımcı kimyasallar üretir.",
  keywords: [
    "serigrafi boyaları",
    "serigrafi baskı boyaları",
    "serigrafi boya",
    "serigrafi boya imalatçısı",
    "serigrafi boya imalatı",
    "serigrafi boya üreticisi",
    "plastisol boya",
    "plastisol boyaları",
    "plastisol boya imalatçısı",
    "emprime baskı boyası",
    "emprime baskı boyaları",
    "serigrafi baskı boyası",
    "tekstil baskı boyaları",
    "ipek baskı boyası",
    "emülsiyon serigrafi",
    "serigrafi emülsiyon",
    "serigrafi boya çeşitleri",
    "uygun fiyatlı serigrafi boya",
    "toptan serigrafi boya",
    "serigrafi yardımcı kimyasalları",
    "serigrafi boya tedarikçisi",
    "Magellan Boya",
  ],
  openGraph: {
    title:
      "Serigrafi Baskı Boyaları | Serigrafi Boya İmalatçısı | Magellan Boya",
    description:
      "Magellan Boya; serigrafi baskı boyaları, emprime baskı boyası, plastisol boya, tekstil baskı boyaları, PVC ve UV boya, emülsiyon, inceltici ve yardımcı kimyasallar üretir.",
    url: siteUrl,
    siteName: "Magellan Boya",
    images: [
      {
        url: "/magellan-label.png",
        width: 1536,
        height: 1024,
        alt: "Magellan Boya serigrafi boya etiketi",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Serigrafi Baskı Boyaları | Serigrafi Boya İmalatçısı | Magellan Boya",
    description:
      "Magellan Boya; serigrafi baskı boyaları, emprime baskı boyası, plastisol boya, tekstil baskı boyaları ve serigrafi yardımcı kimyasalları üretir.",
    images: ["/magellan-label.png"],
  },
  alternates: {
    canonical: "https://magellanboya.com/",
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
