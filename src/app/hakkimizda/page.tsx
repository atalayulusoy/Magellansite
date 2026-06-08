import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";

export const metadata: Metadata = {
  title: {
    absolute: "Serigrafi Boya Üreticisi | Hakkımızda | Magellan Boya",
  },
  description:
    "Magellan Boya, serigrafi boya imalatı, plastisol boya ve tekstil baskı ürünleri alanında üretim ve tedarik hizmeti sunar.",
  alternates: {
    canonical: "https://www.magellanboya.com/hakkimizda",
  },
  openGraph: {
    title: "Serigrafi Boya Üreticisi | Hakkımızda | Magellan Boya",
    description:
      "Magellan Boya, serigrafi boya imalatı, plastisol boya ve tekstil baskı ürünleri alanında üretim ve tedarik hizmeti sunar.",
    url: "https://www.magellanboya.com/hakkimizda",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serigrafi Boya Üreticisi | Hakkımızda | Magellan Boya",
    description:
      "Serigrafi boya imalatı, plastisol boya ve tekstil baskı ürünleri için Magellan Boya.",
  },
};

export default function AboutPage() {
  return <HomePage page="about" />;
}
