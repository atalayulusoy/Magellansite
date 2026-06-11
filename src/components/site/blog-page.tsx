import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircleMore } from "lucide-react";
import { BlogPost, blogPosts } from "./blog-data";
import { seoLandingPageMap } from "./seo-landing-data";
import { companyInfo } from "./site-data";

function buildBlogParagraphs(post: BlogPost) {
  return [
    `${post.intro} Bu konu yalnızca teorik bir bilgi değildir; doğru ürün seçimi, doğru uygulama ve doğru tedarik planı kurulmadığında baskı kalitesi, fire oranı ve teslim süresi doğrudan etkilenir. Magellan Boya, ${post.focusKeyword} konusunda karar verirken yüzey, üretim adedi, renk beklentisi ve kullanım koşullarını birlikte değerlendirmeyi önerir. Böylece işletme yalnızca bir boya satın almaz, üretim hattında daha öngörülebilir sonuç alabileceği bir sistem kurar.`,
    `${post.productContext} Serigrafi sektöründe her ürün grubunun kendine ait davranışı vardır. Plastisol, PVC, UV, su bazlı tekstil boyası, emülsiyon, inceltici ve geciktirici gibi ürünler birbirinden bağımsız görünse de sahada çoğu zaman aynı üretim zincirinin parçasıdır. Bu nedenle ürün önerisi yapılırken yalnızca ürün adı değil, baskı yapılacak malzeme, ortam sıcaklığı, kurutma yöntemi, hedef dayanım ve baskı sonrası kullanım şartları da dikkate alınmalıdır.`,
    `${post.applicationContext} Özellikle ticari üretim yapan atölyelerde aynı kaliteyi tekrar edebilmek çok değerlidir. Bir marka için hazırlanan tişört, bir ambalaj üzerindeki logo, bir suni deri yüzeyindeki baskı ya da bir uyarı levhasındaki yazı farklı teknik ihtiyaçlar doğurur. Doğru boya seçildiğinde çizgi netliği artar, renk daha kontrollü görünür, yüzeyden atma riski azalır ve üretim temposu daha rahat yönetilir. Yanlış seçimde ise ürün ucuz görünse bile tekrar baskı, temizlik, bekleme ve müşteri memnuniyetsizliği gibi maliyetler ortaya çıkabilir.`,
    `Magellan Boya açısından iyi bir yönlendirme, müşterinin gerçek üretim koşullarını anlamakla başlar. Kullanılan elek numarası, rakle yapısı, baskı adedi, yüzey hazırlığı, kuruma süresi ve ürünün nihai kullanım alanı sorulduğunda amaç süreci zorlaştırmak değildir. Bu bilgiler doğru ürüne hızlı ulaşmak için gereklidir. Serigrafi baskıda küçük bir teknik fark, özellikle yüksek adetli işlerde büyük sonuçlar doğurabilir. Bu nedenle numune, renk beklentisi veya mevcut sorun paylaşıldığında daha isabetli bir ürün grubu seçilebilir.`,
    post.technicalNotes.join(" "),
    `Fiyat tarafında da aynı yaklaşım geçerlidir. ${post.focusKeyword} için tek bir sabit fiyat mantığı çoğu zaman sağlıklı değildir; ürün tipi, ambalaj miktarı, renk, özel üretim ihtiyacı ve sevkiyat planı fiyatı etkileyebilir. Bu yüzden Magellan Boya, uygun fiyatlı ve rekabetçi teklif verirken ürünün uygulama performansını da dikkate alır. En doğru teklif, müşterinin ihtiyacı netleştiğinde verilir. Bu yaklaşım hem gereksiz ürün alımını azaltır hem de uzun vadede daha verimli bir tedarik ilişkisi kurar.`,
    `Düzenli üretim yapan işletmeler için tedarik sürekliliği en az ürün kalitesi kadar önemlidir. Bir atölyenin sık kullandığı boya, yardımcı kimyasal veya kalıp hazırlama ürünü stokta olmadığında üretim planı aksayabilir. Bu nedenle ürün grubu, aylık tüketim, teslimat beklentisi ve sezon yoğunluğu birlikte planlanmalıdır. Magellan Boya, İstanbul merkezli yapısıyla hem yerel işletmelere hem de Türkiye genelindeki müşterilere hızlı iletişim ve planlı sevkiyat yaklaşımı sunar.`,
    `Bu konuda en sık yapılan hatalar şunlardır: ${post.mistakes.join(" ")} Bu hataların ortak noktası, kararın yalnızca tek bir kritere göre verilmesidir. Oysa serigrafi baskıda ürün, yüzey, ekipman ve operatör alışkanlığı birlikte çalışır. Bir problem yaşandığında önce tüm zinciri okumak, sonra ürünü veya yardımcı kimyasalı değiştirmek daha doğru sonuç verir. Bu yaklaşım hem maliyeti kontrol eder hem de baskı kalitesini daha hızlı toparlar.`,
    `Profesyonel bir üretim planında deneme baskısı önemli bir güvenlik adımıdır. Yeni bir yüzey, yeni bir renk, farklı bir kumaş veya farklı bir plastik türü söz konusuysa küçük bir test, büyük üretim öncesinde yol gösterir. Test baskısında tutunma, kuruma, renk yoğunluğu, esneklik, çizilme dayanımı ve yıkama performansı gibi başlıklar gözlenebilir. Bu sonuçlar doğru okunduğunda ürün seçimi daha net hale gelir ve seri üretime daha sağlam başlanır.`,
    `${post.cta} Ürünler sayfasından mevcut grupları inceleyebilir, iletişim sayfasından konum ve telefon bilgilerine ulaşabilir ya da WhatsApp üzerinden doğrudan fiyat ve teknik destek talebi oluşturabilirsiniz. Magellan Boya'nın amacı yalnızca ürün satmak değil, serigrafi baskı yapan işletmelerin daha net, daha dayanıklı ve daha sürdürülebilir sonuç almasına yardımcı olmaktır.`,
  ];
}

function getRelatedLandingPages(post: BlogPost) {
  return post.relatedLandingSlugs
    .map((slug) => seoLandingPageMap.get(slug))
    .filter((page): page is NonNullable<typeof page> => page !== undefined);
}

export function BlogIndexPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#060814] text-white">
      <div className="page-noise pointer-events-none fixed inset-0 z-[1]" />
      <div className="page-grid pointer-events-none fixed inset-0 z-[1]" />
      <div className="blob blob-orange top-[-8rem] left-[-6rem]" />
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
            <Link href="/urunler" className="button-secondary inline-flex items-center justify-center text-sm">
              Ürünler
            </Link>
            <Link href="/iletisim" className="button-secondary inline-flex items-center justify-center text-sm">
              İletişim
            </Link>
            <a href={companyInfo.whatsappHref} target="_blank" rel="noreferrer" className="button-primary inline-flex items-center justify-center text-sm">
              WhatsApp
              <MessageCircleMore className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <section className="relative z-[10] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="section-shell">
          <div className="mx-auto max-w-4xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/62">
              <span className="h-2 w-2 rounded-full bg-[var(--accent-1)]" />
              Serigrafi Rehberi
            </p>
            <h1 className="mt-7 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Serigrafi Boya Bilgi Merkezi
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
              Plastisol boya, PVC serigrafi boyası, UV boya, tekstil baskı boyası,
              emülsiyon ve kalıp hazırlama süreçleri için satın alma kararını
              kolaylaştıran teknik rehberler.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="glass-panel flex h-full flex-col rounded-[2rem] p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent-2)]">
                  {post.eyebrow}
                </p>
                <h2 className="mt-4 font-display text-2xl font-semibold text-white">
                  {post.h1}
                </h2>
                <p className="mt-4 flex-1 text-sm leading-7 text-white/68">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="button-secondary mt-6 inline-flex items-center justify-center text-sm"
                >
                  Yazıyı Oku
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export function BlogPostPageView({ post }: { post: BlogPost }) {
  const paragraphs = buildBlogParagraphs(post);
  const relatedPages = getRelatedLandingPages(post);

  return (
    <main className="min-h-screen overflow-hidden bg-[#060814] text-white">
      <div className="page-noise pointer-events-none fixed inset-0 z-[1]" />
      <div className="page-grid pointer-events-none fixed inset-0 z-[1]" />
      <div className="blob blob-orange top-[-8rem] left-[-6rem]" />
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
            <Link href="/blog" className="button-secondary inline-flex items-center justify-center text-sm">
              Blog
            </Link>
            <Link href="/urunler" className="button-secondary inline-flex items-center justify-center text-sm">
              Ürünler
            </Link>
            <a href={companyInfo.whatsappHref} target="_blank" rel="noreferrer" className="button-primary inline-flex items-center justify-center text-sm">
              WhatsApp
              <MessageCircleMore className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <section className="relative z-[10] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="section-shell">
          <div className="mx-auto max-w-4xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/62">
              <span className="h-2 w-2 rounded-full bg-[var(--accent-1)]" />
              {post.eyebrow}
            </p>
            <h1 className="mt-7 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {post.h1}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
              {post.description}
            </p>
          </div>

          <article className="mt-14 grid gap-6 lg:grid-cols-[0.72fr_0.28fr]">
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
                  İçindekiler
                </h2>
                <div className="mt-5 space-y-3">
                  {[post.focusKeyword, "ürün seçimi", "fiyat ve tedarik", "sık yapılan hatalar"].map((item) => (
                    <div key={item} className="flex gap-3 text-sm text-white/70">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-2)]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-panel rounded-[2rem] p-6">
                <h2 className="font-display text-2xl font-semibold text-white">
                  Teklif Al
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/68">
                  Ürün, fiyat, ambalaj ve sevkiyat bilgisi için ihtiyacınızı
                  WhatsApp üzerinden paylaşabilirsiniz.
                </p>
                <a href={companyInfo.whatsappHref} target="_blank" rel="noreferrer" className="button-primary mt-5 inline-flex w-full items-center justify-center text-sm">
                  WhatsApp&apos;tan Sor
                </a>
                <Link href="/urunler" className="button-secondary mt-3 inline-flex w-full items-center justify-center text-sm">
                  Ürünleri İncele
                </Link>
                <Link href="/iletisim" className="button-secondary mt-3 inline-flex w-full items-center justify-center text-sm">
                  İletişim
                </Link>
              </div>

              <div className="glass-panel rounded-[2rem] p-6">
                <h2 className="font-display text-2xl font-semibold text-white">
                  İlgili Sayfalar
                </h2>
                <div className="mt-5 space-y-3">
                  {relatedPages.map((page) => (
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
        </div>
      </section>
    </main>
  );
}

export function buildBlogPostText(post: BlogPost) {
  return [post.h1, post.description, ...buildBlogParagraphs(post)].join(" ");
}
