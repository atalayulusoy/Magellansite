import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";

export const metadata: Metadata = {
  title: {
    absolute: "Serigrafi Boya Siparişi ve İletişim | Magellan Boya",
  },
  description:
    "Serigrafi boya, plastisol boya ve yardımcı kimyasallar için iletişime geçin.",
  alternates: {
    canonical: "https://magellanboya.com/iletisim",
  },
  openGraph: {
    title: "Serigrafi Boya Siparişi ve İletişim | Magellan Boya",
    description:
      "Serigrafi boya, plastisol boya ve yardımcı kimyasallar için iletişime geçin.",
    url: "https://magellanboya.com/iletisim",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serigrafi Boya Siparişi ve İletişim | Magellan Boya",
    description:
      "Serigrafi boya, plastisol boya ve yardımcı kimyasallar için iletişim bilgileri.",
  },
};

export default function ContactPage() {
  return <HomePage page="contact" />;
}
