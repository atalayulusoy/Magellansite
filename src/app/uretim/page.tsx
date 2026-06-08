import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";

export const metadata: Metadata = {
  title: {
    absolute: "Serigrafi Boya İmalatı ve Üretim Süreci | Magellan Boya",
  },
  description:
    "Magellan Boya serigrafi boya imalatında renk analizi, formül geliştirme, kalite kontrol, dolum ve hızlı sevkiyat süreçleri uygular.",
  alternates: {
    canonical: "https://www.magellanboya.com/uretim",
  },
  openGraph: {
    title: "Serigrafi Boya İmalatı ve Üretim Süreci | Magellan Boya",
    description:
      "Serigrafi boya imalatı, formül geliştirme, kalite kontrol ve sevkiyat süreçleri.",
    url: "https://www.magellanboya.com/uretim",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serigrafi Boya İmalatı | Magellan Boya",
    description:
      "Magellan Boya serigrafi boya imalatı ve üretim süreci.",
  },
};

export default function ProductionPage() {
  return <HomePage page="production" />;
}
