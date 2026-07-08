import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { blogPosts } from "@/components/site/blog-data";
import { productCategoryPages } from "@/components/site/product-category-data";
import { productDetailPages } from "@/components/site/product-detail-data";
import { seoLandingPages } from "@/components/site/seo-landing-data";

const siteUrl = "https://magellanboya.com";

export const metadata: Metadata = {
  title: {
    absolute: "Site İçi Arama | Magellan Boya",
  },
  description:
    "Magellan Boya içinde serigrafi boya, emprime, PVC, UV, plastisol, kimyasal, kullanım alanı ve teknik rehber araması yapın.",
  alternates: {
    canonical: `${siteUrl}/arama`,
    languages: {
      "tr-TR": `${siteUrl}/arama`,
      "x-default": `${siteUrl}/arama`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

const searchableItems = [
  ...seoLandingPages.map((page) => ({
    title: page.h1,
    description: page.description,
    href: `/${page.slug}`,
    type: page.eyebrow,
    terms: [page.h1, page.description, page.focusKeyword, ...page.relatedKeywords].join(" "),
  })),
  ...blogPosts.map((post) => ({
    title: post.h1,
    description: post.description,
    href: `/blog/${post.slug}`,
    type: post.eyebrow,
    terms: [post.h1, post.description, post.focusKeyword].join(" "),
  })),
  ...productDetailPages.map((product) => ({
    title: product.h1,
    description: product.description,
    href: `/urun/${product.slug}`,
    type: product.categoryLabel,
    terms: [
      product.h1,
      product.description,
      product.focusKeyword,
      product.productType,
      ...product.surfaces,
      ...product.uses,
    ].join(" "),
  })),
  ...productCategoryPages.map((page) => ({
    title: page.h1,
    description: page.description,
    href: `/urun-kategori/${page.slug}`,
    type: page.eyebrow,
    terms: [page.h1, page.description, page.focusKeyword, ...page.productGroups].join(" "),
  })),
];

function normalize(value: string) {
  return value.toLocaleLowerCase("tr-TR");
}

export default async function SearchPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const query = normalize(q.trim());
  const results = (query
    ? searchableItems.filter((item) => normalize(item.terms).includes(query))
    : searchableItems.slice(0, 36)
  ).slice(0, 60);

  return (
    <main className="min-h-screen bg-[#060814] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="page-noise pointer-events-none fixed inset-0 z-[1]" />
      <div className="section-shell relative z-[10]">
        <header className="flex flex-col gap-5 rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="inline-flex items-center">
            <span className="rounded-2xl bg-white px-3 py-2">
              <Image
                src="/magellan-logo-wide.png"
                alt="Magellan Boya logosu"
                width={210}
                height={65}
                className="h-10 w-32 object-contain"
                priority
              />
            </span>
          </Link>
          <Link href="/magellan-akademi" className="button-secondary inline-flex justify-center">
            Magellan Akademi
          </Link>
        </header>

        <section className="py-14">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/62">
              <Search className="h-4 w-4 text-[var(--accent-2)]" />
              Site İçi Arama
            </p>
            <h1 className="mt-7 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Serigrafi boya bilgi merkezinde ara
            </h1>
            <form action="/arama" className="mt-8 flex flex-col gap-3 sm:flex-row">
              <input
                name="q"
                defaultValue={q}
                placeholder="emprime, PVC boya, rakle izi, plastisol..."
                className="min-h-12 flex-1 rounded-2xl border border-white/10 bg-white/[0.06] px-4 text-base text-white outline-none transition placeholder:text-white/35 focus:border-white/25"
              />
              <button className="button-primary inline-flex justify-center" type="submit">
                Ara
              </button>
            </form>
          </div>

          <div className="mt-10 grid gap-4">
            {results.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="glass-panel block rounded-[1.5rem] p-5 transition hover:border-white/20 hover:bg-white/[0.08]"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-white/42">
                  {item.type}
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-white">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
