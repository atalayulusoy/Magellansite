import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";

export const metadata: Metadata = {
  title: {
    absolute: "Serigrafi Boya Ürün Süreci | Magellan Boya",
  },
  description:
    "Serigrafi boya ürünlerinde renk analizi, formül değerlendirme, kalite kontrol, dolum ve hızlı sevkiyat süreçlerini inceleyin.",
  alternates: {
    canonical: "https://magellanboya.com/uretim",
  },
  openGraph: {
    title: "Serigrafi Boya Ürün Süreci | Magellan Boya",
    description:
      "Serigrafi boya ürünleri, formül değerlendirme, kalite kontrol ve sevkiyat süreçleri.",
    url: "https://magellanboya.com/uretim",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serigrafi Boya Ürün Süreci | Magellan Boya",
    description:
      "Serigrafi boya ürün süreci ve sevkiyat planı.",
  },
};

export default function ProductionPage() {
  return <HomePage page="production" />;
}
