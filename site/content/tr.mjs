// Hesap makinesi dokümantasyonunun Türkçe metinleri. en.mjs ile aynı yapı.

export default {
  siteName: "JavaScript için Telegram Stars hesap makinesi",
  short: "Stars hesap makinesi",

  ui: {
    navLabel: "Dokümantasyon bölümleri",
    langsLabel: "Diller",
    footerBy: (brand) => `Hediye kasaları ve oyunlar sunan Telegram Mini App ${brand} tarafından açık kaynak olarak geliştirildi.`,
    moreLabel: "Gift Club'dan daha fazlası",
    sourceOnGithub: "GitHub'da kaynak kod",
    sisters: { dataset: "Telegram verileri", calculator: "Yıldız hesap makinesi", verifier: "Provably fair verifier" },
    updated: "Fiyatların okunduğu tarih",
    faqHeading: "Sorular",
    relatedHeading: "Gift Club'da sıradaki yazı",
  },

  nav: { home: "Genel bakış", api: "API", embed: "Gömme" },

  home: {
    title: () => "Telegram Stars hesap makinesi: npm paketi ve web bileşeni",
    description: ({ F, n }) =>
      `Bağımlılıksız JavaScript, Fragment'te ve ${n(F.stores)} ülkenin App Store'unda istediğin miktarda Telegram Stars'ın fiyatını hesaplar. npm paketi ve hazır widget, MIT.`,
    h1: "JavaScript için Telegram Stars hesap makinesi",
    lead: ({ F, n }) =>
      `İstediğin miktarda Telegram Stars'ın Fragment'te ve ${n(F.stores)} ülkenin App Store'unda ne kadar tuttuğunu Node.js'te veya tarayıcıda hesapla. Bağımlılık yok, ağ isteği yok.`,
    answer: ({ F, money, pct }) =>
      `1.000 Telegram Stars, Fragment'te <strong>${money(F.usd1000)}</strong>, ABD App Store'unda <strong>${money(F.app1000)}</strong> tutar; yani Fragment'te her Yıldız ${pct(F.saving)} daha ucuzdur. Paket bu rakamları her miktar ve ülke için döndürür.`,
    tableCaption: "App Store (ABD) ve Fragment, paketten",
    cols: { stars: "Yıldız", fragment: "Fragment", appStore: "App Store (ABD)" },
    installHeading: "Kurulum",
    installText: ({ F, money }) =>
      `<code>compare()</code> iki fiyatı, App Store'da satın alınacak paketleri ve tasarrufu döndürür. Fragment ${F.min} Yıldızdan başlayan her miktarı tanesi ${money(F.perStar)} fiyatla satar; App Store sabit paketler sattığı için plan, paketlerle oluşturulabilen en küçük miktara yukarı yuvarlar.`,
    widgetHeading: "Hazır widget",
    widgetText:
      "Tek bir script etiketi dokuz dilde <code>&lt;telegram-stars-calculator&gt;</code> öğesi ekler. Tamamen sayfanın içinde çalışır, bağlantı göstermez ve istek göndermez.",
    demoLink: "Widget'ı dene",
    featuresHeading: "Neler yapar",
    features: ({ F, n }) => [
      `${n(F.stores)} App Store ülkesinde 1 ile ${n(100000)} arasındaki her miktarın fiyatını, her mağazanın kendi para biriminde hesaplar.`,
      "Satın alınacak App Store paketlerini bulur: istenen miktara eşit veya ondan büyük en küçük miktar, en az satın alma ile.",
      "Fragment'in dolar fiyatını, tarihli bir merkez bankası kuruyla her mağazanın kendi para birimine çevirir.",
      "TypeScript tipleri, ES modülleri ve testlerle gelir; Node 18+ ve tüm modern tarayıcılarda çalışır.",
    ],
    countriesHeading: "Kapsanan ülkeler",
    sourceNote: (dataset, d) => `Fiyatlar ${dataset} kaynağından alınır, ${d} tarihine kadar okunmuştur. Her fiyat Apple'ın o ülkede gösterdiği fiyattır; hiçbiri dönüştürülmemiştir.`,
    faq: ({ F, money }) => [
      {
        q: "1.000 Telegram Stars kaç dolar eder?",
        a: `Fragment'te ${money(F.usd1000)}, ABD App Store'unda ${money(F.app1000)}.`,
      },
      {
        q: "Paket canlı fiyat çeker mi?",
        a: "Hayır. Tarihli bir anlık görüntü içerir, bu yüzden sonuçlar tekrarlanabilir ve çevrimdışı çalışır. Daha yeni fiyatlar için paketi güncelle.",
      },
      {
        q: "Ticari bir uygulamada veya botta kullanabilir miyim?",
        a: "Evet, MIT lisanslıdır.",
      },
      {
        q: "Neden Google Play fiyatı yok?",
        a: "Google Play okunabilecek herkese açık bir fiyat listesi yayımlamıyor; bu yüzden paket yalnızca Fragment ve App Store'u kapsar.",
      },
    ],
  },

  api: {
    title: "Telegram Stars hesap makinesi API başvurusu (JavaScript)",
    description: "Telegram Stars hesap makinesi paketinin tüm fonksiyonları: compare, appStorePlan, fragmentPlan, starsToUsd, usdToStars ve fiyat sabitleri.",
    h1: "API başvurusu",
    intro: "Tüm fonksiyonlar saf ve eşzamanlıdır. Miktarlar 1–100.000 Yıldız aralığına sınırlanır; ülke, <code>\"us\"</code> veya <code>\"de\"</code> gibi bir ISO kodudur.",
    compare: "Bir ülkede <code>stars</code> satın almanın her iki yolu. <code>saving</code>, bir Yıldızın Fragment'te ne kadar ucuz olduğunu kesir olarak verir; anlık görüntüde o para birimi için kur yoksa <code>null</code> olur.",
    appStorePlan: "Satın alınacak App Store paketleri: ülkenin paketleriyle oluşturulabilen, <code>stars</code> değerine eşit veya ondan büyük en küçük toplam, en az satın alma ile. Bilinmeyen bir ülke için <code>RangeError</code> fırlatır.",
    fragmentPlan: "Fragment'in <code>stars</code> için fiyatı (en az kendi minimumu kadar), dolar olarak ve anlık görüntüde kur varsa <code>currency</code> cinsinden.",
    convert: "Fragment'in sabit oranıyla Yıldızdan dolara ve geri dönüşüm.",
    constants: "Anlık görüntünün kendisi: her ülkenin paketleri ve okunma tarihi, Fragment'in oranı ve minimumu, döviz kurları.",
    typesHeading: "TypeScript",
    types: "Tipler <code>src/index.d.ts</code> içinde gelir ve otomatik yüklenir.",
  },

  embed: {
    title: "Web sitene Telegram Stars hesap makinesi göm",
    description: "Ücretsiz Telegram Stars fiyat hesap makinesini tek bir iframe ile veya temalandırılabilir web bileşeni olarak her siteye ekle. Üyelik yok, anahtar yok.",
    h1: "Hesap makinesini sitene göm",
    intro: "Sayfana Telegram Stars hesap makinesi koymanın iki yolu. İkisi de ücretsiz.",
    iframeHeading: "Seçenek 1: iframe",
    iframeText: "Bunu hesap makinesinin görünmesini istediğin yere yapıştır. Güncel fiyatları gösterir ve 320 px genişliğinden itibaren sütunlara sığar.",
    creditText: "Altına kaynak satırı eklemen hoş olur ama zorunlu değil:",
    frameTitle: "Telegram Stars hesap makinesi",
    previewHeading: "Önizleme",
    componentHeading: "Seçenek 2: web bileşeni",
    componentText: "Kendi sunucunda barındırılır ve tamamen biçimlendirilebilir: betik senin sayfanda çalışır, bağlantı göstermez ve istek yapmaz.",
    themeText: "CSS değişkenleriyle temana uydur:",
    faq: [
      { q: "Gömmek ücretsiz mi?", a: "Evet, ticari siteler dahil her site için." },
      { q: "Gömülü hesap makinesi ziyaretçileri izler mi?", a: "Web bileşeni çerez bırakmaz ve ağ isteği yapmaz. iframe, ziyaretleri Google Analytics ile sayan bir giftclub.app sayfasıdır; hiç üçüncü taraf isteği istemiyorsan web bileşenini kullan." },
      { q: "Hangi dilleri destekliyor?", a: "Web bileşeni İngilizce, Rusça, Ukraynaca, İspanyolca, Lehçe, İtalyanca, Türkçe, Almanca ve Fransızca konuşur." },
    ],
  },

  demo: {
    title: "Telegram Stars hesap makinesi widget demosu",
    description: "<telegram-stars-calculator> web bileşeninin canlı demosu.",
    h1: "Widget demosu",
    text: (brand) => `Bu depodan çalışan <code>&lt;telegram-stars-calculator&gt;</code> öğesi. Tüm paketlerin tabloda göründüğü tam hesap makinesi ${brand} üzerinde.`,
  },
};
