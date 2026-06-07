import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";

export const metadata: Metadata = {
  title: "Serigrafi Boyaları Üretim Süreci",
  description:
    "Magellan serigrafi boyaları üretiminde renk analizi, formül geliştirme, kalite kontrol, dolum ve hızlı sevkiyat süreçleri.",
  alternates: {
    canonical: "/uretim",
  },
};

export default function ProductionPage() {
  return <HomePage page="production" />;
}
