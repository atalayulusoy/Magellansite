import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircleMore } from "lucide-react";
import { SeoLandingPage, seoLandingPageMap } from "./seo-landing-data";
import { companyInfo } from "./site-data";

function buildParagraphs(page: SeoLandingPage) {
  return [
    `${page.h1} arayan işletmeler için doğru ürün seçimi yalnızca boya adını belirlemekten ibaret değildir. Baskı yapılacak yüzey, kullanılacak elek yapısı, üretim hızı, kuruma beklentisi, renk örtücülüğü ve nihai kullanım şartları birlikte değerlendirilmelidir. Magellan Boya, ${page.focusKeyword} konusunda profesyonel üretim ve tedarik yaklaşımıyla çalışır; ${page.audience} için uygulanabilir, sürdürülebilir ve teknik olarak anlaşılır çözümler sunar. Her talepte önce baskının hedefi dinlenir, sonra ürün grubu ve yardımcı kimyasal ihtiyacı netleştirilir.`,
    `Bu sayfada ele alınan ana konu ${page.focusKeyword} olsa da gerçek üretim sürecinde çoğu zaman birden fazla ürün grubu birlikte çalışır. ${page.relatedKeywords.join(", ")} gibi aramalar genellikle aynı ihtiyaca bağlanır: net baskı, güçlü tutunma, doğru renk, kontrollü kuruma ve düzenli tedarik. Magellan Boya bu ihtiyacı yalnızca tek bir ürün satışı olarak görmez; baskı yüzeyine ve üretim adedine göre ürün ailesini doğru kurmayı hedefler. Böylece gereksiz deneme maliyeti azalır, üretim planı daha öngörülebilir hale gelir.`,
    `${page.productFocus} Magellan Boya'nın profesyonel ürün yaklaşımının önemli bir parçasıdır. Serigrafi baskıda iyi sonuç almak için boya ile kalıp, yardımcı kimyasal ve uygulama koşulları uyumlu olmalıdır. Örneğin bir yüzeyde hızlı kuruma avantaj sağlarken başka bir yüzeyde esneklik, örtücülük ya da dayanım daha önemli olabilir. Bu nedenle ürün seçimi yapılırken ${page.processNote}. Teknik detaylar doğru okunduğunda hem baskı kalitesi yükselir hem de seri üretimde tekrar edilebilir sonuç alınır.`,
    `Uygulama alanları ${page.surfaceExamples} gibi farklı yüzeylere uzanabilir. Her yüzeyin boya kabulü, kuruma davranışı ve kullanım sırasındaki dayanım ihtiyacı farklıdır. Tekstil baskıda yıkama dayanımı ve tutuş hissi öne çıkarken, plastik veya PVC yüzeylerde yüzeye tutunma ve çizilme dayanımı daha belirleyici olabilir. Ambalaj ve poşet baskılarında ise okunabilir logo, net çizgi, hızlı üretim ve marka görünürlüğü önem kazanır. Magellan Boya bu farklı beklentileri ürün seçimi ve teknik yönlendirme ile bir araya getirir.`,
    `Kalite tarafında odak noktası ${page.qualityNote} sağlamaktır. Serigrafi baskı yapan işletmeler için boya yalnızca renk veren bir malzeme değildir; üretim hızını, fire oranını, müşteri memnuniyetini ve tekrar sipariş güvenini doğrudan etkileyen bir girdidir. Düşük performanslı bir ürün kısa vadede ucuz gibi görünse de kalıp tıkanması, yüzeyden atma, renk solması veya tekrar baskı ihtiyacı gibi maliyetler doğurabilir. Bu yüzden Magellan Boya, ürün tavsiyesinde fiyat kadar uygulama güvenliğini de dikkate alır.`,
    `Fiyat konusu serigrafi sektöründe doğal olarak önemlidir. ${page.priceNote}. Ancak “en ucuz” ürün her zaman en verimli çözüm anlamına gelmez. Doğru ürün, doğru yüzey ve doğru uygulama ile birleştiğinde toplam maliyet düşer; çünkü daha az fire oluşur, baskı tekrarı azalır ve üretim akışı kesintiye uğramaz. Magellan Boya, uygun fiyatlı serigrafi boya ve yardımcı ürün arayan işletmelere kaliteyi koruyan, uzun vadeli ve şeffaf bir tedarik yaklaşımı sunmayı hedefler.`,
    `Toptan alım yapan veya düzenli üretim gerçekleştiren firmalar için stok sürekliliği de teknik kalite kadar önemlidir. Serigrafi boya tedarikçisi seçilirken ürün çeşitliliği, termin planı, iletişim hızı ve teknik destek birlikte değerlendirilmelidir. Magellan Boya, ihtiyaç duyulan ürün grubunu belirledikten sonra sevkiyat, ambalaj miktarı ve kullanım sıklığına göre planlama yapılmasına yardımcı olur. Böylece atölye veya üretim hattı, kritik ürünleri son anda aramak zorunda kalmadan daha düzenli çalışabilir.`,
    `Bölgesel ve şehir dışı tedariklerde lojistik planlama da ürün kalitesinin bir parçası haline gelir. Bir işletmenin doğru ürünü seçmesi kadar, o ürüne ihtiyaç duyduğu zamanda ulaşabilmesi de önemlidir. Magellan Boya, İstanbul merkezli üretim ve tedarik yapısının sağladığı esneklikle farklı şehirlerdeki müşterilerin ihtiyaçlarını değerlendirir. Ürün grubu, tüketim miktarı ve teslimat beklentisi netleştiğinde daha sağlıklı bir sevkiyat planı hazırlanabilir. Bu yaklaşım özellikle üretim hattı duran, seri sipariş alan veya sezonluk yoğunluk yaşayan işletmeler için ciddi avantaj sağlar.`,
    `Teknik destek tarafında amaç yalnızca ürün adı vermek değil, baskı sürecini doğru okumaktır. Kullanılan elek numarası, rakle yapısı, baskı adedi, ortam sıcaklığı, kurutma yöntemi ve yüzey hazırlığı ürün performansını etkileyebilir. Aynı boya farklı yüzeylerde farklı davranabileceği için, ürün seçimi pratik üretim bilgisiyle desteklenmelidir. Magellan Boya, ${page.focusKeyword} konusunda bilgi almak isteyen işletmelere bu nedenle ürün ailesi, yardımcı kimyasal ve uygulama koşullarını birlikte düşünmelerini önerir. Bu sayede yalnızca satın alma değil, üretim verimliliği de iyileşir.`,
    `Uzun vadeli çalışmalarda ürün dokümantasyonu, tekrar sipariş kolaylığı ve renk standardı önemli hale gelir. Aynı müşterinin belirli bir yüzeyde aynı sonucu yeniden alabilmesi için kullanılan ürünün, uygulama notunun ve tedarik planının kayıt altında tutulması faydalıdır. Bu profesyonel yaklaşım, özellikle marka baskısı yapan tekstil atölyeleri, ambalaj üreticileri ve kurumsal promosyon tedarikçileri için değer yaratır. Magellan Boya, ürün seçimi ve fiyatlandırma sürecini mümkün olduğunca açık tutarak müşterinin hem bugünkü hem de sonraki üretim ihtiyaçlarını daha doğru planlamasına yardımcı olur.`,
    `Magellan Boya ile çalışırken ürün seçimi için uzun ve karmaşık bir süreç gerekmez. ${page.ctaNote}. Baskı yüzeyi, mevcut boya deneyimi, hedef renk, üretim adedi ve varsa yaşanan teknik problem paylaşıldığında daha doğru yönlendirme yapılabilir. Ürünler sayfasında serigrafi boyaları, plastisol boya, emülsiyon, inceltici, geciktirici ve yardımcı kimyasal gruplarını inceleyebilir; fiyat ve tedarik detayları için WhatsApp üzerinden doğrudan iletişime geçebilirsiniz.`,
  ];
}

function buildFaq(page: SeoLandingPage) {
  return [
    {
      question: `${page.focusKeyword} seçerken nelere dikkat edilmeli?`,
      answer:
        "Baskı yüzeyi, beklenen dayanım, renk örtücülüğü, kuruma koşulu, üretim adedi ve kullanılacak yardımcı kimyasallar birlikte değerlendirilmelidir.",
    },
    {
      question: "Magellan Boya toptan satış yapıyor mu?",
      answer:
        "Evet. Düzenli tüketim yapan atölyeler, matbaalar ve üreticiler için ürün grubu, miktar ve sevkiyat planına göre toptan tedarik çalışması yapılabilir.",
    },
    {
      question: "Fiyat bilgisi neden sayfada sabit yazmıyor?",
      answer:
        "Serigrafi boya fiyatları ürün tipi, miktar, renk, ambalaj ve teknik beklentiye göre değişebilir. En doğru fiyat için ihtiyaç bilgisiyle teklif alınması daha sağlıklıdır.",
    },
    {
      question: "Ürün seçimi için teknik destek alınabilir mi?",
      answer:
        "Evet. Baskı yapılacak yüzey, kullanılan kalıp, hedeflenen renk ve üretim koşulları paylaşıldığında uygun ürün grubu için yönlendirme yapılabilir.",
    },
  ];
}

function getRelatedPages(page: SeoLandingPage) {
  const fromPage = (page.relatedSlugs ?? [])
    .map((slug) => seoLandingPageMap.get(slug))
    .filter(
      (item): item is SeoLandingPage =>
        item !== undefined && item.slug !== page.slug
    );

  if (fromPage.length > 0) {
    return fromPage;
  }

  return [
    seoLandingPageMap.get("serigrafi-boyalari"),
    seoLandingPageMap.get("plastisol-boya"),
    seoLandingPageMap.get("toptan-serigrafi-boya"),
  ].filter(
    (item): item is SeoLandingPage =>
      item !== undefined && item.slug !== page.slug
  );
}

export function SeoLandingPageView({ page }: { page: SeoLandingPage }) {
  const paragraphs = buildParagraphs(page);
  const faq = buildFaq(page);
  const relatedPages = getRelatedPages(page);

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
            <Link
              href="/urunler"
              className="button-secondary inline-flex items-center justify-center text-sm"
            >
              Ürünleri İncele
            </Link>
            <Link
              href="/iletisim"
              className="button-secondary inline-flex items-center justify-center text-sm"
            >
              İletişim
            </Link>
            <a
              href={companyInfo.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="button-primary inline-flex items-center justify-center text-sm"
            >
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
              {page.eyebrow}
            </p>
            <h1 className="mt-7 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {page.h1}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
              {page.description}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/urunler"
                className="button-primary inline-flex items-center justify-center"
              >
                Ürünler Sayfasına Git
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={companyInfo.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="button-secondary inline-flex items-center justify-center"
              >
                Teklif Al
              </a>
              <Link
                href="/iletisim"
                className="button-secondary inline-flex items-center justify-center"
              >
                İletişime Geç
              </Link>
            </div>
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
                  Kapsanan Ürünler
                </h2>
                <div className="mt-5 space-y-3">
                  {[page.focusKeyword, ...page.relatedKeywords].map((item) => (
                    <div key={item} className="flex gap-3 text-sm text-white/70">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-2)]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-panel rounded-[2rem] p-6">
                <h2 className="font-display text-2xl font-semibold text-white">
                  Hızlı Bilgi
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/68">
                  Fiyat, ambalaj ve sevkiyat bilgisi ürün grubuna göre değişir.
                  Net teklif için ürün ihtiyacınızı WhatsApp üzerinden
                  paylaşabilirsiniz.
                </p>
                <a
                  href={companyInfo.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary mt-5 inline-flex w-full items-center justify-center text-sm"
                >
                  WhatsApp&apos;tan Sor
                </a>
                <Link
                  href="/iletisim"
                  className="button-secondary mt-3 inline-flex w-full items-center justify-center text-sm"
                >
                  İletişim Sayfası
                </Link>
              </div>

              {relatedPages.length > 0 && (
                <div className="glass-panel rounded-[2rem] p-6">
                  <h2 className="font-display text-2xl font-semibold text-white">
                    İlgili Sayfalar
                  </h2>
                  <div className="mt-5 space-y-3">
                    {relatedPages.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/${item.slug}`}
                        className="block rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white/70 transition hover:border-white/20 hover:bg-white/[0.09] hover:text-white"
                      >
                        {item.eyebrow}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </article>

          <section className="mt-8 grid gap-5 md:grid-cols-2">
            {faq.map((item) => (
              <div key={item.question} className="glass-panel rounded-[1.6rem] p-6">
                <h2 className="font-display text-xl font-semibold text-white">
                  {item.question}
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/68">
                  {item.answer}
                </p>
              </div>
            ))}
          </section>
        </div>
      </section>
    </main>
  );
}

export function buildSeoLandingText(page: SeoLandingPage) {
  return [
    page.h1,
    page.description,
    ...buildParagraphs(page),
    ...buildFaq(page).flatMap((item) => [item.question, item.answer]),
  ].join(" ");
}
