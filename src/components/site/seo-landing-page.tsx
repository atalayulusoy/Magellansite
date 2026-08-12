import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircleMore } from "lucide-react";
import { blogPosts } from "./blog-data";
import { SeoLandingPage, seoLandingPageMap } from "./seo-landing-data";
import { companyInfo } from "./site-data";

function buildParagraphs(page: SeoLandingPage) {
  return [
    `${page.h1} arayan işletmeler için doğru ürün seçimi yalnızca boya adını belirlemekten ibaret değildir. Baskı yapılacak yüzey, kullanılacak elek yapısı, üretim hızı, kuruma beklentisi, renk örtücülüğü ve nihai kullanım şartları birlikte değerlendirilmelidir. ${page.focusKeyword} için ürün grubu, yardımcı kimyasal ve tedarik planı birlikte düşünülerek ${page.audience} için uygulanabilir, sürdürülebilir ve teknik olarak anlaşılır çözümler seçilebilir. Her talepte önce baskının hedefi netleşir, sonra ürün grubu ve yardımcı kimyasal ihtiyacı belirlenir.`,
    `Bu sayfada ele alınan ana konu ${page.focusKeyword} olsa da gerçek üretim sürecinde çoğu zaman birden fazla ürün grubu birlikte çalışır. ${page.relatedKeywords.join(", ")} gibi aramalar genellikle aynı ihtiyaca bağlanır: net baskı, güçlü tutunma, doğru renk, kontrollü kuruma ve düzenli tedarik. Bu ihtiyacı yalnızca tek bir ürün satışı olarak değil, baskı yüzeyine ve üretim adedine göre doğru ürün ailesini kurma süreci olarak düşünün. Böylece gereksiz deneme maliyeti azalır, üretim planı daha öngörülebilir hale gelir.`,
    `${page.productFocus} profesyonel ürün seçiminin önemli bir parçasıdır. Serigrafi baskıda iyi sonuç almak için boya ile kalıp, yardımcı kimyasal ve uygulama koşulları uyumlu olmalıdır. Örneğin bir yüzeyde hızlı kuruma avantaj sağlarken başka bir yüzeyde esneklik, örtücülük ya da dayanım daha önemli olabilir. Bu nedenle ürün seçimi yapılırken ${page.processNote}. Teknik detaylar doğru okunduğunda hem baskı kalitesi yükselir hem de seri üretimde tekrar edilebilir sonuç alınır.`,
    `Uygulama alanları ${page.surfaceExamples} gibi farklı yüzeylere uzanabilir. Her yüzeyin boya kabulü, kuruma davranışı ve kullanım sırasındaki dayanım ihtiyacı farklıdır. Tekstil baskıda yıkama dayanımı ve tutuş hissi öne çıkarken, plastik veya PVC yüzeylerde yüzeye tutunma ve çizilme dayanımı daha belirleyici olabilir. Ambalaj ve poşet baskılarında ise okunabilir logo, net çizgi, hızlı üretim ve marka görünürlüğü önem kazanır. Bu farklı beklentileri ürün seçimi ve teknik yönlendirme ile birlikte değerlendirin.`,
    `Kalite tarafında odak noktası ${page.qualityNote} sağlamaktır. Serigrafi baskı yapan işletmeler için boya yalnızca renk veren bir malzeme değildir; üretim hızını, fire oranını, müşteri memnuniyetini ve tekrar sipariş güvenini doğrudan etkileyen bir girdidir. Düşük performanslı bir ürün kısa vadede ucuz gibi görünse de kalıp tıkanması, yüzeyden atma, renk solması veya tekrar baskı ihtiyacı gibi maliyetler doğurabilir. Bu yüzden ürün seçerken fiyat kadar uygulama güvenliğini de dikkate alın.`,
    `Fiyat konusu serigrafi sektöründe doğal olarak önemlidir. ${page.priceNote}. Ancak “en ucuz” ürün her zaman en verimli çözüm anlamına gelmez. Doğru ürün, doğru yüzey ve doğru uygulama ile birleştiğinde toplam maliyet düşer; çünkü daha az fire oluşur, baskı tekrarı azalır ve üretim akışı kesintiye uğramaz. Uygun fiyatlı serigrafi boya ve yardımcı ürün ararken kaliteyi koruyan, uzun vadeli ve şeffaf bir tedarik yaklaşımını tercih edin.`,
    `Toptan alım yapan veya düzenli üretim gerçekleştiren firmalar için stok sürekliliği de teknik kalite kadar önemlidir. Serigrafi boya tedarikçisi seçilirken ürün çeşitliliği, termin planı, iletişim hızı ve teknik destek birlikte değerlendirilmelidir. İhtiyaç duyulan ürün grubunu belirledikten sonra sevkiyat, ambalaj miktarı ve kullanım sıklığına göre planlama yapılabilir. Böylece atölye veya üretim hattı, kritik ürünleri son anda aramak zorunda kalmadan daha düzenli çalışabilir.`,
    `Bölgesel ve şehir dışı tedariklerde lojistik planlama da ürün kalitesinin bir parçası haline gelir. Bir işletmenin doğru ürünü seçmesi kadar, o ürüne ihtiyaç duyduğu zamanda ulaşabilmesi de önemlidir. İstanbul merkezli tedarik yapısı sayesinde farklı şehirlerdeki müşteriler için ürün grubu, tüketim miktarı ve teslimat beklentisi netleştiğinde daha sağlıklı bir sevkiyat planı hazırlanabilir. Bu yaklaşım özellikle üretim hattı duran, seri sipariş alan veya sezonluk yoğunluk yaşayan işletmeler için ciddi avantaj sağlar.`,
    `Teknik destek tarafında amaç yalnızca ürün adı vermek değil, baskı sürecini doğru okumaktır. Kullanılan elek numarası, rakle yapısı, baskı adedi, ortam sıcaklığı, kurutma yöntemi ve yüzey hazırlığı ürün performansını etkileyebilir. Aynı boya farklı yüzeylerde farklı davranabileceği için, ürün seçimi pratik üretim bilgisiyle desteklenmelidir. ${page.focusKeyword} konusunda bilgi alırken ürün ailesi, yardımcı kimyasal ve uygulama koşullarını birlikte düşünün. Bu sayede yalnızca satın alma değil, üretim verimliliği de iyileşir.`,
    `Avantajlar değerlendirilirken ${page.focusKeyword} için yalnızca ilk baskı görüntüsüne bakmak yeterli değildir. İyi bir sonuç; baskının yüzeyde tutunması, seri üretimde aynı tonun korunması, kalıp üzerinde gereksiz tıkanma oluşturmaması, operatöre pratik çalışma süresi tanıması ve müşteriye teslim edilen üründe uzun süre stabil kalmasıyla ölçülür. Bu nedenle ürün seçerken ${page.qualityNote} başlığını sadece satış cümlesi olarak değil, üretim standardının parçası olarak değerlendirin. Doğru seçim yapıldığında baskı hattı daha az durur, deneme sayısı azalır ve ekip aynı işi daha öngörülebilir şekilde tekrar edebilir.`,
    `Dezavantaj ve sınırlar da dürüstçe görülmelidir. Her boya grubu her yüzeyde, her ortamda ve her hızda aynı sonucu vermez. Çok hızlı kuruyan bir sistem yüksek tempoda avantaj sağlarken açık kalma süresi kısa olduğu için kalıp üzerinde dikkat isteyebilir. Esnek yüzeylerde dayanım için farklı bir ürün ailesi gerekirken sert yüzeylerde çizilme direnci daha belirleyici olabilir. ${page.surfaceExamples} gibi yüzeylerde bu farklar küçük görünse bile seri üretimde ciddi sonuç doğurabilir. Bu yüzden numune baskı, karışım kaydı ve kuruma testi atlanmaması gereken güvenlik adımlarıdır.`,
    `Karışım ve inceltme aşamasında temel ilke ölçülü ilerlemektir. Boyanın akışı, rakle hareketi ve elek yapısı birbirini tamamlamalıdır; fazla inceltme rengin örtücülüğünü, tutunmasını veya kuruma karakterini bozabilir. Geciktirici, sertleştirici ya da özel yardımcı ürün kullanılacaksa amaç net olmalıdır: kalıp tıkanmasını azaltmak, dayanımı artırmak, kuruma hızını yönetmek veya yüzeye uyumu güçlendirmek. ${page.processNote}. Bu bilgiler not edildiğinde aynı iş tekrar geldiğinde yalnızca ürün adı değil, uygulama standardı da tekrar üretilebilir.`,
    `Kuruma ve dayanım kontrolü, baskı sonrasındaki en kritik aşamalardan biridir. Yüzey kuru görünse bile alt katmanda solvent çıkışı, fikse eksikliği veya UV kürlenme yetersizliği kalabilir. Bu nedenle dokunma kuruması, istifleme süresi, bant testi, çizilme kontrolü ve mümkünse kullanım senaryosuna yakın küçük testler birlikte düşünülmelidir. Tekstil işlerinde yıkama, plastik ve PVC işlerinde tutunma, cam ve metal yüzeylerde çizilme dayanımı daha fazla öne çıkar. Bu kontroller üretim başlamadan önce yapılırsa müşteri tarafında oluşabilecek iade ve tekrar baskı riski düşer.`,
    `Sık yapılan hataların çoğu tek bir nedene bağlanamaz. Boya soyuluyorsa yüzey temizliği, ürün seçimi, kuruma ve sertleştirici kullanımı birlikte incelenmelidir. Baskı akıyorsa sadece boya değil, viskozite, rakle basıncı, elek gerilimi ve yüzey formu da kontrol edilmelidir. Renk farklı çıkıyorsa zemin rengi, karıştırma standardı, baskı kalınlığı ve parti takibi önem kazanır. Bu yüzden problemi tek cümleyle kapatmak yerine uygulama zincirini adım adım okumak gerekir. Böyle bir kontrol listesi, özellikle yeni yüzey ve yüksek adetli siparişlerde üretim güvenliğini artırır.`,
    `Sonuç olarak ${page.focusKeyword} konusu, yalnızca bir ürün adı ya da tek sayfalık teknik bilgi değildir; yüzey, boya, kalıp, kimyasal, kurutma ve tedarik kararlarının birlikte çalıştığı bir üretim meselesidir. Doğru ürün ailesi seçildiğinde renk daha net, tutunma daha güçlü, maliyet daha yönetilebilir ve kalite tekrarı daha kolay olur. Bu sayfanın amacı, aradığınız kavramdan doğru ürün grubuna ve uygulanabilir teknik adıma ulaşmayı kolaylaştırmaktır. Böylece bilgi merkezi, satın alma sürecini de üretim sürecini de daha anlaşılır hale getirir.`,
    `Uzun vadeli çalışmalarda ürün dokümantasyonu, tekrar sipariş kolaylığı ve renk standardı önemli hale gelir. Aynı müşterinin belirli bir yüzeyde aynı sonucu yeniden alabilmesi için kullanılan ürünün, uygulama notunun ve tedarik planının kayıt altında tutulması faydalıdır. Bu profesyonel yaklaşım, özellikle marka baskısı yapan tekstil atölyeleri, ambalaj üreticileri ve kurumsal promosyon tedarikçileri için değer yaratır. Ürün seçimi ve fiyatlandırma sürecini açık tutarak hem bugünkü hem de sonraki üretim ihtiyaçlarınızı daha doğru planlayabilirsiniz.`,
    `Ürün seçimi için uzun ve karmaşık bir süreç gerekmez. ${page.ctaNote}. Baskı yüzeyi, mevcut boya deneyimi, hedef renk, üretim adedi ve varsa yaşanan teknik problem paylaşıldığında daha doğru yönlendirme yapılabilir. Ürünler sayfasında serigrafi boyaları, plastisol boya, emülsiyon, inceltici, geciktirici ve yardımcı kimyasal gruplarını inceleyebilir; fiyat ve tedarik detayları için WhatsApp üzerinden doğrudan iletişime geçebilirsiniz.`,
  ];
}

export function buildSeoLandingFaq(page: SeoLandingPage) {
  return [
    {
      question: `${page.focusKeyword} seçerken nelere dikkat edilmeli?`,
      answer:
        "Baskı yüzeyi, beklenen dayanım, renk örtücülüğü, kuruma koşulu, üretim adedi ve kullanılacak yardımcı kimyasallar birlikte değerlendirilmelidir.",
    },
    {
      question: "Toptan satış yapılır mı?",
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

function getRelatedBlogPosts(page: SeoLandingPage) {
  const pageText = [
    page.slug,
    page.focusKeyword,
    page.productFocus,
    ...page.relatedKeywords,
  ]
    .join(" ")
    .toLocaleLowerCase("tr-TR");

  const matches = blogPosts.filter((post) => {
    const postText = [post.focusKeyword, post.title, ...post.relatedLandingSlugs]
      .join(" ")
      .toLocaleLowerCase("tr-TR");

    return (
      post.relatedLandingSlugs.includes(page.slug) ||
      pageText.includes(post.focusKeyword.toLocaleLowerCase("tr-TR")) ||
      postText.includes(page.focusKeyword.toLocaleLowerCase("tr-TR"))
    );
  });

  return (matches.length > 0 ? matches : blogPosts.slice(0, 3)).slice(0, 3);
}

const authorityLinkSlugs = [
  "magellan-akademi",
  "boya-merkezi",
  "serigrafi-kullanim-alanlari",
  "teknik-bilgi-merkezi",
  "kimyasal-merkezi",
  "serigrafi-hesaplama-araclari",
  "serigrafi-wikipedia",
  "serigrafi-ai",
  "boya-karsilastirmalari",
  "pdf-merkezi",
  "organize-sanayi-bolgeleri",
  "magellan-marka-merkezi",
  "serigrafi-boyalari",
  "plastisol-boya",
  "pvc-serigrafi-boyasi",
  "uv-serigrafi-boyasi",
  "serigrafi-baski-boyasi",
  "serigrafi-kimyasallari",
];

function getAuthorityPages(page: SeoLandingPage) {
  const seen = new Set<string>();

  return [...(page.relatedSlugs ?? []), ...authorityLinkSlugs]
    .filter((slug) => {
      if (slug === page.slug || seen.has(slug)) {
        return false;
      }

      seen.add(slug);
      return true;
    })
    .map((slug) => seoLandingPageMap.get(slug))
    .filter((item): item is SeoLandingPage => item !== undefined)
    .slice(0, 24);
}

export function SeoLandingPageView({ page }: { page: SeoLandingPage }) {
  const paragraphs = buildParagraphs(page);
  const faq = buildSeoLandingFaq(page);
  const relatedPages = getRelatedPages(page);
  const relatedBlogPosts = getRelatedBlogPosts(page);
  const authorityPages = getAuthorityPages(page);

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

              <div className="glass-panel rounded-[2rem] p-6">
                <h2 className="font-display text-2xl font-semibold text-white">
                  Teknik Rehberler
                </h2>
                <div className="mt-5 space-y-3">
                  {relatedBlogPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="block rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white/70 transition hover:border-white/20 hover:bg-white/[0.09] hover:text-white"
                    >
                      {post.eyebrow}
                    </Link>
                  ))}
                </div>
              </div>
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

          <section className="glass-panel mt-8 rounded-[2rem] p-6 sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                  Konu Haritası
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-white">
                  Serigrafi bilgi merkezleri ve ilgili sayfalar
                </h2>
              </div>
              <Link
                href="/magellan-akademi"
                className="button-secondary inline-flex items-center justify-center text-sm"
              >
                Akademiye Git
              </Link>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {authorityPages.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white/68 transition hover:border-white/20 hover:bg-white/[0.09] hover:text-white"
                >
                  {item.eyebrow}
                </Link>
              ))}
            </div>
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
    ...buildSeoLandingFaq(page).flatMap((item) => [item.question, item.answer]),
  ].join(" ");
}
