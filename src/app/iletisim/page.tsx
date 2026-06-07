import type { Metadata } from "next";
import { HomePage } from "@/components/site/home-page";

export const metadata: Metadata = {
  title: "İletişim | Serigrafi Boyaları Fiyat ve Hızlı Gönderim",
  description:
    "Serigrafi boyaları fiyat bilgisi, özel renk üretimi ve Türkiye geneli hızlı gönderim için Magellan ile WhatsApp, telefon veya konum üzerinden iletişime geçin.",
  alternates: {
    canonical: "/iletisim",
  },
};

export default function ContactPage() {
  return <HomePage page="contact" />;
}
