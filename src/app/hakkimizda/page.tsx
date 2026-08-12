import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";

export const metadata: Metadata = {
  title: {
    absolute: "Hakkımızda | Serigrafi ve Baskı Boyaları | Magellan Boya",
  },
  description:
    "Magellan Boya; serigrafi, emprime, plastisol, PVC, UV ve tekstil baskı boyaları ile yardımcı kimyasallarda profesyonel ürün, teknik destek ve tedarik çözümleri sunar.",
  alternates: {
    canonical: "https://magellanboya.com/hakkimizda",
  },
  openGraph: {
    title: "Hakkımızda | Serigrafi ve Baskı Boyaları | Magellan Boya",
    description:
      "Magellan Boya; serigrafi, emprime, plastisol, PVC, UV ve tekstil baskı boyaları ile yardımcı kimyasallarda profesyonel ürün, teknik destek ve tedarik çözümleri sunar.",
    url: "https://magellanboya.com/hakkimizda",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hakkımızda | Serigrafi ve Baskı Boyaları | Magellan Boya",
    description:
      "Serigrafi, emprime, plastisol, PVC, UV ve tekstil baskı boyaları için Magellan Boya.",
  },
};

export default function AboutPage() {
  return <HomePage page="about" />;
}
