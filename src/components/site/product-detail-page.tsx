import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircleMore } from "lucide-react";
import { blogPostMap } from "./blog-data";
import {
  ProductDetailPage,
  productDetailPageMap,
} from "./product-detail-data";
import { seoLandingPageMap } from "./seo-landing-data";
import { companyInfo } from "./site-data";

function buildProductParagraphs(product: ProductDetailPage) {
  return [
    `${product.shortDescription} Serigrafi baskıda doğru ürün seçimi yalnızca ürün adını bilmekle sınırlı değildir; baskı yüzeyi, kuruma yöntemi, üretim adedi, renk beklentisi, kalıp yapısı ve nihai kullanım şartları birlikte değerlendirilmelidir. Magellan Boya, ${product.focusKeyword} için ürün önerisi yaparken bu değişkenleri tek tek ele alır ve atölyenin üretim düzenine uygun bir tedarik yaklaşımı kurmayı hedefler.`,
    `${product.h1} arayan kullanıcılar genellikle fiyat, yüzey uyumu ve dayanım bilgisini aynı anda öğrenmek ister. ${product.productType} grubunda yer alan bu ürün, ${product.surfaces.join(", ")} gibi yüzeylerde kullanılabilir. Ancak her yüzeyin boya kabulü, temizlik ihtiyacı ve kuruma davranışı farklıdır. Bu nedenle özellikle yüksek adetli işlerde küçük bir numune baskı yapmak, doğru ürün ve yardımcı kimyasal seçimini netleştirir.`,
    `Kullanım alanları arasında ${product.uses.join(", ").toLocaleLowerCase("tr-TR")} bulunur. Bu uygulamalarda amaç sadece rengin yüzeye aktarılması değildir; baskının net görünmesi, kenarların temiz kalması, ürünün kullanım sırasında yüzeyden atma yapmaması ve üretim tekrarlandığında aynı sonucun alınabilmesidir. Bu yüzden boya, kalıp, rakle, ortam sıcaklığı ve kurutma sistemi aynı üretim zincirinin parçaları olarak düşünülmelidir.`,
    `Teknik seçim tarafında şu noktalar önemlidir: ${product.technicalNotes.join(" ")} Bu notlar özellikle seri üretim yapan işletmeler için değerlidir. Çünkü düşük performanslı veya yanlış seçilmiş bir ürün kısa vadede ucuz görünse bile tekrar baskı, fire, bekleme ve müşteri memnuniyetsizliği gibi ek maliyetler doğurabilir. Doğru ürün toplam üretim maliyetini düşürür ve tedarik sürecini daha öngörülebilir hale getirir.`,
    `${product.color} karakterindeki ürünlerde renk standardı, baskı kalınlığı ve yüzey rengi nihai görünümü etkileyebilir. Kurumsal marka rengi, metalik efekt, yüksek opaklık veya yıkama dayanımı gibi özel beklentiler varsa bu bilgiler sipariş öncesinde paylaşılmalıdır. Magellan Boya, mevcut numune, renk kodu veya baskı yüzeyi bilgisiyle daha doğru ürün önerisi ve fiyatlandırma yapabilir.`,
    `Fiyat bilgisi ürün tipi, ambalaj miktarı, renk beklentisi, düzenli alım planı ve sevkiyat ihtiyacına göre netleşir. ${product.focusKeyword} için en sağlıklı teklif, yüzey ve tüketim bilgisi paylaşıldığında verilir. WhatsApp üzerinden ürün adı, baskı yapılacak yüzey, yaklaşık adet ve varsa yaşanan teknik problem iletildiğinde hem ürün seçimi hem de tedarik planı daha hızlı oluşturulabilir.`,
  ];
}

export function ProductDetailPageView({
  product,
}: {
  product: ProductDetailPage;
}) {
  const paragraphs = buildProductParagraphs(product);
  const relatedProducts = product.relatedProductSlugs
    .map((slug) => productDetailPageMap.get(slug))
    .filter(
      (item): item is ProductDetailPage =>
        item !== undefined && item.slug !== product.slug
    );
  const relatedBlogs = product.relatedBlogSlugs
    .map((slug) => blogPostMap.get(slug))
    .filter((item): item is NonNullable<typeof item> => item !== undefined);
  const relatedLandingPages = product.relatedLandingSlugs
    .map((slug) => seoLandingPageMap.get(slug))
    .filter((item): item is NonNullable<typeof item> => item !== undefined);

  const whatsappMessage = encodeURIComponent(
    `Merhaba, ${product.h1} için fiyat ve teknik bilgi almak istiyorum.`
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
              href={`/urun-kategori/${product.categorySlug}`}
              className="button-secondary inline-flex items-center justify-center text-sm"
            >
              {product.categoryLabel}
            </Link>
            <a
              href={`${companyInfo.whatsappHref}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="button-primary inline-flex items-center justify-center text-sm"
            >
              Teklif Al
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
            <Link
              href={`/urun-kategori/${product.categorySlug}`}
              className="transition hover:text-white"
            >
              {product.categoryLabel}
            </Link>
            <span>/</span>
            <span className="text-white/72">{product.focusKeyword}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[0.58fr_0.42fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/62">
                <span className="h-2 w-2 rounded-full bg-[var(--accent-1)]" />
                {product.eyebrow}
              </p>
              <h1 className="mt-7 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {product.h1}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
                {product.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`${companyInfo.whatsappHref}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary inline-flex items-center justify-center"
                >
                  WhatsApp&apos;tan Teklif Al
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href={`/urun-kategori/${product.categorySlug}`}
                  className="button-secondary inline-flex items-center justify-center"
                >
                  Kategoriyi İncele
                </Link>
              </div>
            </div>

            <div className="glass-panel overflow-hidden rounded-[2rem] p-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem] border border-white/10 bg-white">
                <Image
                  src={product.image}
                  alt={product.h1}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-contain p-5"
                />
              </div>
            </div>
          </div>

          <article className="mt-14 grid gap-6 lg:grid-cols-[0.7fr_0.3fr]">
            <div className="glass-panel rounded-[2rem] p-6 sm:p-9">
              <div className="space-y-7 text-base leading-8 text-white/72">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <aside className="space-y-5">
              <div className="glass-panel rounded-[2rem] p-6">
                <h2 className="font-display text-2xl font-semibold text-white">
                  Kullanım Yüzeyleri
                </h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {product.surfaces.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/62"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-panel rounded-[2rem] p-6">
                <h2 className="font-display text-2xl font-semibold text-white">
                  Teknik Notlar
                </h2>
                <div className="mt-5 space-y-3">
                  {product.technicalNotes.map((item) => (
                    <div key={item} className="flex gap-3 text-sm text-white/70">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-2)]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-panel rounded-[2rem] p-6">
                <h2 className="font-display text-2xl font-semibold text-white">
                  İlgili Sayfalar
                </h2>
                <div className="mt-5 space-y-3">
                  {relatedLandingPages.map((page) => (
                    <Link
                      key={page.slug}
                      href={`/${page.slug}`}
                      className="block rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white/70 transition hover:border-white/20 hover:bg-white/[0.09] hover:text-white"
                    >
                      {page.eyebrow}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </article>

          <section className="mt-16 grid gap-5 md:grid-cols-3">
            {product.faq.map((item) => (
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
            <article className="glass-panel rounded-[2rem] p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-white/48">
                Benzer Ürünler
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {relatedProducts.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/urun/${item.slug}`}
                    className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white/70 transition hover:border-white/20 hover:bg-white/[0.09] hover:text-white"
                  >
                    {item.focusKeyword}
                  </Link>
                ))}
              </div>
            </article>

            <article className="glass-panel rounded-[2rem] p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-white/48">
                Teknik Rehberler
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {relatedBlogs.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white/70 transition hover:border-white/20 hover:bg-white/[0.09] hover:text-white"
                  >
                    {item.eyebrow}
                  </Link>
                ))}
              </div>
            </article>
          </section>
        </div>
      </section>
    </main>
  );
}

export function buildProductDetailText(product: ProductDetailPage) {
  return [
    product.h1,
    product.description,
    ...buildProductParagraphs(product),
    ...product.faq.flatMap((item) => [item.question, item.answer]),
  ].join(" ");
}
