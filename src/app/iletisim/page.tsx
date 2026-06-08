import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";

export const metadata: Metadata = {
  title: {
    absolute: "Serigrafi Boya Siparişi ve İletişim | Magellan Boya",
  },
  description:
    "Serigrafi boya, plastisol boya ve yardımcı kimyasallar için Magellan Boya ile iletişime geçin.",
  alternates: {
    canonical: "https://www.magellanboya.com/iletisim",
  },
  openGraph: {
    title: "Serigrafi Boya Siparişi ve İletişim | Magellan Boya",
    description:
      "Serigrafi boya, plastisol boya ve yardımcı kimyasallar için Magellan Boya ile iletişime geçin.",
    url: "https://www.magellanboya.com/iletisim",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serigrafi Boya Siparişi ve İletişim | Magellan Boya",
    description:
      "Serigrafi boya, plastisol boya ve yardımcı kimyasallar için Magellan Boya iletişim bilgileri.",
  },
};

export default function ContactPage() {
  return <HomePage page="contact" />;
}
