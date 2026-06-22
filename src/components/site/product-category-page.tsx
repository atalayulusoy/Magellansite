import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircleMore } from "lucide-react";
import { ProductCategoryPage, productCategoryPageMap } from "./product-category-data";
import { companyInfo, productCatalogItems } from "./site-data";

function getProductsForCategory(page: ProductCategoryPage) {
  const featured = new Set(page.featuredProducts);
  const matched = productCatalogItems.filter((product) => featured.has(product.title));

  return matched.length > 0 ? matched : productCatalogItems.slice(0, 6);
}

export function ProductCategoryPageView({ page }: { page: ProductCategoryPage }) {
  const products = getProductsForCategory(page);
  const relatedPages = page.relatedSlugs
    .map((slug) => productCategoryPageMap.get(slug))
    .filter(
      (item): item is ProductCategoryPage =>
        item !== undefined && item.slug !== page.slug
    );

  const whatsappMessage = encodeURIComponent(
    `Merhaba, ${page.focusKeyword} için ürün ve fiyat bilgisi almak istiyorum.`
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#060814] text-white">
      <div className="page-noise pointer-events-none fixed inset-0 z-[1]" />
      <div className="page-grid pointer-events-none fixed inset-0 z-[1]" />
      <div className="blob blob-orange left-[-6rem] top-[-8rem]" />
      <div className="blob blob-cyan right-[-10rem] top-[18rem]" />

      <header className="relative z-[10] px-4 pt-6 sm:px-6 lg:px-8">
        <div className="section-shell flex flex-col gap-4 rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="inline-flex items-center gap-3">
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
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/urunler"
              className="button-secondary inline-flex items-center justify-center text-sm"
            >
              Ürünler
            </Link>
            <Link
              href="/serigrafi-boyalari"
              className="button-secondary inline-flex items-center justify-center text-sm"
            >
              Serigrafi Boyaları
            </Link>
            <a
              href={`${companyInfo.whatsappHref}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="button-primary inline-flex items-center justify-center text-sm"
            >
              Fiyat Al
              <MessageCircleMore className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <section className="relative z-[10] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="section-shell">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/52"
          >
            <Link href="/" className="transition hover:text-white">
              Ana Sayfa
            </Link>
            <span>/</span>
            <Link href="/urunler" className="transition hover:text-white">
              Ürünler
            </Link>
            <span>/</span>
            <span className="text-white/72">{page.eyebrow}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[0.68fr_0.32fr] lg:items-start">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/62">
                <span className="h-2 w-2 rounded-full bg-[var(--accent-1)]" />
                {page.eyebrow}
              </p>
              <h1 className="mt-7 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {page.h1}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
                {page.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`${companyInfo.whatsappHref}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary inline-flex items-center justify-center"
                >
                  WhatsApp&apos;tan Fiyat Al
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/urunler"
                  className="button-secondary inline-flex items-center justify-center"
                >
                  Tüm Ürünleri İncele
                </Link>
              </div>
            </div>

            <aside className="glass-panel rounded-[2rem] p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-white/48">
                Hedef Arama
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-white">
                {page.focusKeyword}
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/68">
                {page.buyerIntent}
              </p>
              <div className="mt-5 grid gap-3">
                {page.productGroups.slice(0, 6).map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-white/70">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-2)]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <section className="mt-14 grid gap-6 lg:grid-cols-[0.58fr_0.42fr]">
            <article className="glass-panel rounded-[2rem] p-6 sm:p-9">
              <h2 className="font-display text-3xl font-semibold text-white">
                {page.focusKeyword} için doğru ürün nasıl seçilir?
              </h2>
              <div className="mt-6 space-y-6 text-base leading-8 text-white/72">
                <p>{page.intro}</p>
                <p>
                  Magellan Boya bu kategoriyi yalnızca ürün listesi olarak değil,
                  baskı yüzeyi, uygulama koşulu, kalite beklentisi ve düzenli
                  tedarik ihtiyacını birlikte değerlendiren bir satın alma rehberi
                  olarak ele alır.
                </p>
              </div>
            </article>

            <article className="glass-panel rounded-[2rem] p-6 sm:p-9">
              <h2 className="font-display text-3xl font-semibold text-white">
                Kullanım yüzeyleri
              </h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {page.surfaces.map((surface) => (
                  <span
                    key={surface}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/68"
                  >
                    {surface}
                  </span>
                ))}
              </div>
              <div className="mt-7 space-y-4">
                {page.technicalNotes.map((note) => (
                  <div key={note} className="flex gap-3 text-sm leading-7 text-white/70">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--accent-1)]" />
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="mt-16">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs uppercase tracking-[0.28em] text-white/48">
                Ürünler
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
                Bu kategoriyle ilgili öne çıkan Magellan ürünleri
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <article
                  key={product.title}
                  className="glass-panel group flex h-full flex-col overflow-hidden rounded-[2rem] p-3"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.55rem] border border-white/10 bg-white">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-contain p-3 transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--accent-2)]">
                      {product.category}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                      {product.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/68">
                      {product.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {product.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/62"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-16 grid gap-5 md:grid-cols-2">
            {page.faq.map((item) => (
              <article key={item.question} className="glass-panel rounded-[1.6rem] p-6">
                <h2 className="font-display text-xl font-semibold text-white">
                  {item.question}
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/68">
                  {item.answer}
                </p>
              </article>
            ))}
          </section>

          <section className="mt-16 grid gap-6 lg:grid-cols-2">
            {relatedPages.length > 0 && (
              <article className="glass-panel rounded-[2rem] p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-white/48">
                  İlgili Kategoriler
                </p>
                <h2 className="mt-4 font-display text-2xl font-semibold text-white">
                  Benzer ürün gruplarını da inceleyin
                </h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {relatedPages.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/urun-kategori/${item.slug}`}
                      className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white/70 transition hover:border-white/20 hover:bg-white/[0.09] hover:text-white"
                    >
                      {item.eyebrow}
                    </Link>
                  ))}
                </div>
              </article>
            )}

            <article className="glass-panel rounded-[2rem] p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-white/48">
                Teklif
              </p>
              <h2 className="mt-4 font-display text-2xl font-semibold text-white">
                Ürün, fiyat ve teknik seçim için hızlı iletişim
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/68">
                Baskı yüzeyinizi, hedef renginizi ve yaklaşık tüketiminizi
                paylaştığınızda size daha doğru ürün grubu ve tedarik planı
                önerilebilir.
              </p>
              <a
                href={`${companyInfo.whatsappHref}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="button-primary mt-6 inline-flex items-center"
              >
                WhatsApp&apos;tan Sor
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          </section>
        </div>
      </section>
    </main>
  );
}
