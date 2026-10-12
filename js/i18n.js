(() => {
  const originalTextNodes = new WeakMap();
  const translations = {
    hu: {
      nav: ["Kezdőlap", "Szolgáltatások és árak", "Galéria", "Kapcsolat", "GYIK"],
      pages: {
        index: {
          title: "Mobil autókozmetika",
          subtitle: "Frissen tisztított autó közvetlenül hozzád érkezik",
          description: "Professzionális autótisztítás, amely házhoz megy. Élvezd a prémium autókozmetika kényelmét anélkül, hogy elhagynád az otthonod vagy az irodád.",
          packages: "Csomagok és árak megtekintése",
          book: "Időpontfoglalás",
          about: "A FreshCab-ről",
          how: "Hogyan működik?",
          howSub: "Négy egyszerű lépés a friss, tiszta autóhoz",
          faq: "Gyakran ismételt kérdések"
        },
        services: {
          title: "Szolgáltatások és árak",
          subtitle: "Válaszd ki a járművedhez illő csomagot",
          heading: "Autókozmetikai csomagok",
          sub: "Válaszd ki az autódhoz illő ápolási szintet. Minden szolgáltatást a helyszíneden, gondos odafigyeléssel végzünk el.",
          addon: "Választható kiegészítő szolgáltatások",
          addonSub: "Tedd még teljesebbé a csomagodat ezekkel az extrákkal"
        },
        gallery: {
          title: "Galéria",
          subtitle: "Tekintsd meg munkáimat – főként autókozmetikai projektek utáni képeket",
          intro: "Elégedett ügyfelek valódi eredményei. Nézd meg részletes autókozmetikai projektjeimet, és a szolgáltatások minden apró részletére fordított figyelmet."
        },
        contact: {
          title: "Kapcsolat",
          subtitle: "Vedd fel velem a kapcsolatot az időpontfoglaláshoz",
          heading: "Lépj kapcsolatba velem",
          intro: "Szeretnéd, hogy autód beltere újra friss és tiszta legyen? Írj még ma, hogy időpontot egyeztessünk vagy feltehesd kérdéseidet."
        }
      },
      common: {
        choose: ["Basic kiválasztása", "Standard kiválasztása", "Premium kiválasztása"],
        sedan: "Szedán / kombi",
        suv: "SUV / egyterű",
        popular: "Legnépszerűbb",
        service: "Szolgáltatás",
        description: "Leírás",
        price: "Ár",
        whatsapp: "WhatsApp-üzenet küldése",
        viewServices: "Szolgáltatásaink megtekintése",
        bookWhatsapp: "Foglalás WhatsAppon"
      }
    },
    en: {
      nav: ["Home", "Services & Pricing", "Gallery", "Contact", "FAQ"],
      pages: {
        index: { title: "Mobile Car Detailing", subtitle: "Fresh, clean car delivered to your location", description: "Professional car cleaning service that comes to you. Experience the convenience of premium detailing without leaving your home or office.", packages: "View Packages & Pricing", book: "Book an Appointment", about: "About FreshCab", how: "How It Works", howSub: "Four simple steps to a fresh, clean car", faq: "Frequently Asked Questions" },
        services: { title: "Services & Pricing", subtitle: "Choose the perfect package for your vehicle", heading: "Detailing Packages", sub: "Choose the level of care that fits your car. All services are performed at your location with careful attention to detail.", addon: "Optional Add-On Services", addonSub: "Enhance your detailing package with these extras" },
        gallery: { title: "Gallery", subtitle: "See my work - mostly after photos of car detailing projects", intro: "Real results from satisfied customers. Browse through my detailed car projects to see the quality and attention to detail in every service." },
        contact: { title: "Contact Us", subtitle: "Get in touch to book your appointment", heading: "Get In Touch", intro: "Ready to give your car's interior a fresh, clean look? Contact me today to schedule your appointment or ask any questions." }
      },
      common: { choose: ["Choose Basic", "Choose Standard", "Choose Premium"], sedan: "Sedan / Wagon", suv: "SUV / Minivan", popular: "Most Popular", service: "Service", description: "Description", price: "Price", whatsapp: "Send WhatsApp Message", viewServices: "View Our Services", bookWhatsapp: "Book via WhatsApp" }
    }
  };

  const page = location.pathname.includes("services") ? "services" : location.pathname.includes("gallery") ? "gallery" : location.pathname.includes("contact") ? "contact" : "index";
  const set = (selector, value, html = false) => {
    const nodes = document.querySelectorAll(selector);
    nodes.forEach((node, index) => {
      const text = Array.isArray(value) ? value[index] : value;
      if (text !== undefined) {
        if (!node.dataset.i18nOriginal) node.dataset.i18nOriginal = html ? node.innerHTML : node.textContent;
        node.dataset.i18nManaged = "true";
        html ? (node.innerHTML = text) : (node.textContent = text);
      }
    });
  };

  const staticHungarian = {
    "Welcome to": "Üdvözlünk a",
    ", your trusted mobile car detailing service in Hungary.": ", a megbízható mobil autókozmetikai szolgáltatásod Magyarországon.",
    "I'm Daniel, the owner and operator of FreshCab. I worked as a": "Daniel vagyok, a FreshCab tulajdonosa és szakembere. Korábban",
    "detailer for 1.5 years in Hungary, then lived abroad for a year before returning home.": "1,5 évig dolgoztam autókozmetikusként Magyarországon, majd egy évig külföldön éltem, mielőtt hazatértem.",
    "before returning home. I specialize in delivering quality work and great attention to detail. As a car enthusiast, I understand that your": "Szeretem a minőségi munkát és nagy figyelmet fordítok a részletekre. Autórajongóként tudom, hogy az autód",
    "car is more than just transportation — it's your personal space, and it deserves to be clean, fresh, and comfortable.": "több egyszerű közlekedési eszköznél – a személyes tered, ezért megérdemli, hogy tiszta, friss és kényelmes legyen.",
    "Since I wasn’t able to bring all my professional equipment with me": "Mivel nem tudtam magammal hozni minden professzionális felszerelésemet",
    "when relocating, at the moment I offer a selection of essential": "a költözéskor, jelenleg alapvető autókozmetikai szolgáltatásokat kínálok.",
    "detailing services. However, my goal is to continuously expand and": "Célom azonban, hogy folyamatosan bővítsem és fejlesszem az eszközeimet,",
    "upgrade my tools here in Hungary so that I can soon": "hogy hamarosan még több fejlett, magas színvonalú szolgáltatást",
    "provide a wider range of advanced, high-quality services.": "nyújthassak Magyarországon.",
    "As a mobile service, I bring eco-friendly cleaning products and": "Mobil szolgáltatásként környezetbarát tisztítószereket és a szükséges",
    "the necessary equipment directly to your location — whether you're": "felszerelést közvetlenül hozzád viszem – akár otthon, a munkahelyeden",
    "at home, at work, or anywhere within my service area. Convenience": "vagy a szolgáltatási területem bármely pontján. Kényelem",
    "and care, delivered to you.": "és odafigyelés, közvetlenül neked.",
    "Mobile Service - I Come to You": "Mobil szolgáltatás – házhoz megyek",
    "Honest & Transparent Pricing": "Őszinte és átlátható árak",
    "Attention to Every Detail": "Figyelem minden részletre",
    "Flexible Scheduling": "Rugalmas időpont-egyeztetés",
    "Stress-Free Car Care": "Gondtalan autóápolás",
    "Expanding Service Range Over Time": "Folyamatosan bővülő szolgáltatási kínálat",
    "Contact Me": "Vedd fel velem a kapcsolatot",
    "Reach out via WhatsApp or Phone to discuss your needs and get a": "Írj WhatsAppon vagy hívj telefonon, beszéljük át az igényeidet és kérj",
    "quote.": "árajánlatot.",
    "Schedule Appointment": "Egyeztess időpontot",
    "Choose a convenient time and location that works for you.": "Válassz egy számodra kényelmes időpontot és helyszínt.",
    "Cleaning Service": "Tisztítási szolgáltatás",
    "I'll arrive with all equipment and complete the service in 1-2": "A szükséges felszereléssel érkezem, és 1–2 óra alatt elvégzem a",
    "hours.": "szolgáltatást.",
    "Enjoy Your Clean Car": "Élvezd a tiszta autót",
    "Sit into a fresh, clean interior and enjoy the difference!": "Ülj be a friss, tiszta utastérbe, és élvezd a különbséget!",
    "How long does a cleaning take?": "Mennyi ideig tart a tisztítás?",
    "Do I need to be present during the service?": "Jelen kell lennem a szolgáltatás alatt?",
    "What cleaning products and equipment do you use?": "Milyen tisztítószereket és felszerelést használsz?",
    "What payment methods do you accept?": "Milyen fizetési módokat fogadsz el?",
    "Do you come to my location or do I come to you?": "Te jössz hozzám, vagy nekem kell hozzád mennem?",
    "Do I need to prepare anything before you arrive?": "Kell valamit előkészítenem érkezésed előtt?",
    "Can you remove all stains and odors?": "Minden foltot és szagot el tudsz távolítani?",
    "Do you work in all weather conditions?": "Minden időjárási körülmény között dolgozol?",
    "Quick responses and easy scheduling": "Gyors válaszok és egyszerű időpont-egyeztetés",
    "Send WhatsApp Message": "WhatsApp-üzenet küldése",
    "Phone": "Telefon",
    "Call or text for immediate assistance": "Hívj vagy írj azonnali segítségért",
    "Or": "Vagy",
    "Email": "E-mail",
    "Send detailed inquiries or requests": "Küldd el részletes kérdésedet vagy kérésedet",
    "Email me": "Írj e-mailt",
    "Location & Service Area": "Helyszín és szolgáltatási terület",
    "Mobile service available throughout the region": "Mobil szolgáltatás a teljes régióban elérhető",
    "Business Hours": "Nyitvatartás",
    "Monday - Friday:": "Hétfő - Péntek:",
    "Saturday- Sunday:": "Szombat - Vasárnap:",
    "preferred time.": "számodra megfelelő időpontot.",
    "Professional mobile car detailing service bringing quality and": "Professzionális mobil autókozmetika, amely minőséget és kényelmet",
    "convenience to your doorstep in Hungary.": "visz közvetlenül az ajtódhoz Magyarországon.",
    "Individual Service Provider": "Egyéni szolgáltató",
    "Quick Links": "Gyorslinkek",
    "Web Development": "Webfejlesztés",
    "All rights reserved.": "Minden jog fenntartva.",
    "Herceghalom and the surrounding Pest County area": "Herceghalom és Pest megye környéke",
    "Everything in Basic, plus:": "A Basic minden szolgáltatása, ezen felül:",
    "Everything in Standard, plus:": "A Standard minden szolgáltatása, ezen felül:"
  };

  function translateStaticContent(language) {
    if (language !== "hu") {
      document.querySelectorAll("[data-i18n-managed]").forEach((node) => {
        if (node.dataset.i18nOriginal.includes("<")) node.innerHTML = node.dataset.i18nOriginal;
        else node.textContent = node.dataset.i18nOriginal;
      });
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        if (originalTextNodes.has(walker.currentNode)) walker.currentNode.nodeValue = originalTextNodes.get(walker.currentNode);
      }
      return;
    }
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!node.parentElement.closest(".language-switcher")) {
        if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.nodeValue);
        nodes.push(node);
      }
    }
    nodes.forEach((node) => {
      const original = node.nodeValue.trim();
      if (staticHungarian[original]) {
        node.nodeValue = node.nodeValue.replace(original, staticHungarian[original]);
      }
    });
    set(".about-intro", "Üdvözlünk a <strong>Fresh<span class=\"logo-accent\">Cab</span></strong> oldalán, a megbízható mobil autókozmetikai szolgáltatásodnál Magyarországon.", true);
    set(".about-text p.about-text", [
      "Dani vagyok, a FreshCab tulajdonosa és szakembere. Korábban másfél évig dolgoztam autókozmetikusként Magyarországon, majd egy év külföldi élet után hazatértem. Fontos számomra a minőségi munka, és nagy figyelmet fordítok a részletekre. Autórajongóként tudom, hogy az autód több egyszerű közlekedési eszköznél: a személyes tered, ezért megérdemli, hogy tiszta, friss és kényelmes legyen.",
      "Mivel a költözéskor nem tudtam minden professzionális felszerelésemet magammal hozni, jelenleg alapvető autókozmetikai szolgáltatásokat kínálok. Célom, hogy folyamatosan bővítsem és fejlesszem az eszközeimet, és Magyarországon is egyre több magas színvonalú szolgáltatást nyújthassak.",
      "Mobil szolgáltatóként környezetbarát tisztítószerekkel és a szükséges felszereléssel közvetlenül hozzád megyek – akár az otthonodba, a munkahelyedre vagy a szolgáltatási területem bármely pontjára. Kényelem és odafigyelés, házhoz szállítva."
    ]);
    set(".step-title", ["Vedd fel velem a kapcsolatot", "Egyeztess időpontot", "Tisztítási szolgáltatás", "Élvezd a tiszta autót"]);
    set(".step-description", ["Írj WhatsAppon vagy hívj telefonon, beszéljük át az igényeidet és kérj árajánlatot.", "Válassz egy számodra kényelmes időpontot és helyszínt.", "A szükséges felszereléssel érkezem, és 1–2 óra alatt elvégzem a szolgáltatást.", "Ülj be a friss, tiszta utastérbe, és élvezd a különbséget!"]);
    set(".highlight-item span:last-child", ["Mobil szolgáltatás – házhoz megyek", "Őszinte és átlátható árak", "Figyelem minden részletre", "Rugalmas időpont-egyeztetés", "Gondtalan autóápolás", "Folyamatosan bővülő szolgáltatási kínálat"]);
    set(".faq-question span:first-child", ["Mennyi ideig tart a tisztítás?", "Jelen kell lennem a szolgáltatás alatt?", "Milyen tisztítószereket és felszerelést használsz?", "Milyen fizetési módokat fogadsz el?", "Te jössz hozzám, vagy nekem kell hozzád mennem?", "Kell valamit előkészítenem érkezésed előtt?", "Minden foltot és szagot el tudsz távolítani?", "Minden időjárási körülmény között dolgozol?"]);
  }

  function applyLanguage(language) {
    const t = translations[language];
    translateStaticContent(language);
    document.documentElement.lang = language;
    document.title = `FreshCab - ${t.pages[page].title}`;
    set(".nav-link", t.nav);
    set(".page-title", t.pages[page].title);
    set(".page-subtitle", t.pages[page].subtitle);
    if (page === "index") {
      set(".hero-title", t.pages.index.title); set(".hero-subtitle", t.pages.index.subtitle); set(".hero-description", t.pages.index.description);
      set(".hero-buttons .btn-primary", t.pages.index.packages); set(".hero-buttons .btn-secondary", t.pages.index.book);
      set(".about .section-title", t.pages.index.about); set(".how-it-works .section-title", t.pages.index.how); set(".how-it-works .section-subtitle", t.pages.index.howSub); set("#faq .section-title", t.pages.index.faq);
      set(".cta-title", language === "hu" ? "Készen állsz a friss, tiszta autóra?" : "Ready for a Fresh, Clean Car?");
      set(".cta-text", language === "hu" ? "Foglalj időpontot még ma, és tapasztald meg a professzionális mobil autókozmetika kényelmét." : "Book your appointment today and experience the convenience of professional mobile detailing.");
      set(".cta-buttons .btn-primary", t.common.bookWhatsapp);
      set(".cta-buttons .btn-secondary", language === "hu" ? "Kapcsolat" : "Contact Us");
      set(".faq-answer p", language === "hu" ? [
        "<strong>A legtöbb belsőtisztítási szolgáltatás 1–2 órát vesz igénybe</strong>, a választott csomagtól és a jármű állapotától függően. Az alapcsomagok általában gyorsabban elkészülnek, míg a mélytisztítást is tartalmazó <strong>prémium szolgáltatások</strong> <strong>akár 4 órát is igénybe vehetnek.</strong>",
        "Nem szükséges <strong>végig jelen lenned</strong> a szolgáltatás alatt, de <strong>a kezdéskor hozzáférésre van szükségem az autóhoz</strong>, a végén pedig át kell adnod a kulcsokat. Sok ügyfél csak átadja a kulcsokat, majd folytatja a napját otthon vagy a munkahelyén.",
        "Mivel a költözéskor nem tudtam minden professzionális felszerelésemet magammal hozni, jelenleg alapvető, minőségi eszközökkel és <strong>minden felületen biztonságosan használható tisztítószerekkel</strong> dolgozom. Felszerelésem többek között <strong>egy nagy teljesítményű hordozható porszívóból, belső tisztítóecsetekből, mikroszálas kendőkből és hatékony tisztítószerekből</strong> áll. Ahogy bővítem a felszerelésemet, idővel még fejlettebb szolgáltatásokat is kínálhatok.",
        "Elfogadok <strong>készpénzes, banki átutalásos és mobilfizetéses</strong> fizetést. A szolgáltatás díját annak befejezésekor kell rendezni. Az időpont-egyeztetéskor minden szükséges fizetési információt megadok.",
        "<strong>Én megyek hozzád!</strong> Ez a mobil autókozmetika egyik legnagyobb előnye. A szükséges felszerelést és tisztítószereket elviszem az otthonodhoz, a munkahelyedre vagy a szolgáltatási területen belül bármely helyszínre. Csak <strong>hozzáférésre van szükségem az autódhoz</strong>.",
        "<strong>Nincs szükség különösebb előkészületre.</strong> Ha tudod, kérjük, <strong>érkezésem előtt vedd ki a személyes tárgyaidat</strong>, hogy alaposabban tudjak takarítani. Ha ez nem lehetséges, a szolgáltatás alatt biztonságos helyre teszem őket, majd tiszta műanyag zacskóban visszateszem az autóba.",
        "<strong>A legtöbb folt és szag javítható</strong> a jelenlegi eszközeimmel és tisztítószereimmel. <strong>Néhány régebbi vagy mélyebb folt nem biztos, hogy teljesen eltűnik</strong>, de mindig arra törekszem, hogy biztonságosan a lehető legjobb eredményt érjem el. A felszerelésem bővítésével még hatékonyabb helyreállítási lehetőségeket kínálhatok.",
        "Enyhébb időjárási körülmények között tudok dolgozni, de <strong>a heves eső vagy az erős szél befolyásolhatja a tisztítási folyamatot</strong>. Ha az időjárás nem megfelelő, <strong>felár nélkül egyeztethetünk új időpontot</strong> a legjobb eredmény érdekében."
      ] : [
        "<strong>Most interior cleaning services take between 1-2 hours</strong>, depending on the package you choose and the condition of your vehicle. Basic packages are typically faster, while <strong>premium services</strong> with deep cleaning <strong>take longer, up to 4 hours.</strong>",
        "<strong>You don't need to be present</strong> for the entire service, but <strong>I'll need access to your vehicle</strong> at the <strong>start</strong> and to <strong>hand over the keys when finished.</strong> Many clients drop off their keys and continue with their day at home or work.",
        "Since I wasn’t able to bring all of my professional equipment when relocating to Hungary, I currently work with essential, quality tools and <strong>cleaning products that are safe for all surfaces.</strong> My setup includes a <strong>powerful portable vacuum, interior brushes, microfiber cloths, and effective cleaning solutions.</strong> As I continue to expand my equipment here, I’ll be able to offer even more advanced services over time.",
        "I accept <strong>cash, bank transfer, and mobile payment apps</strong>. Payment is due upon completion of the service. I'll provide you with all payment details when we schedule your appointment.",
        "<strong>I come to you!</strong> That's the beauty of mobile detailing. I'll bring all necessary equipment and supplies to your home, office, or any location within the service area. All I need is <strong>access to your car</strong>.",
        "<strong>No special preparation is required.</strong> If you can, please <strong>remove any personal belongings beforehand</strong> to help ensure thorough cleaning. If not, I’ll safely set them aside during the service and return them to the car in a clean plastic bag once I’m finished.",
        "<strong>I can improve most stains and odors</strong> with my current tools and products. <strong>Some older or deeper stains may not disappear completely</strong>, but I always work to achieve the best possible result safely. As I expand my equipment, I’ll be able to offer deeper restoration options.",
        "Light weather conditions are fine, but <strong>heavy rain or strong wind can affect the cleaning process</strong>. If the weather is unsuitable, <strong>we can reschedule at no extra cost</strong> to ensure the best results."
      ], true);
    }
    if (page === "services") {
      set(".pricing .section-title", t.pages.services.heading); set(".pricing .section-subtitle", t.pages.services.sub);
      set(".addons .section-title", t.pages.services.addon); set(".addons .section-subtitle", t.pages.services.addonSub);
      set(".pricing-badge", t.common.popular); set(".price-period", t.common.sedan); set(".price-period-small", t.common.suv);
      set(".pricing-card .btn", t.common.choose); set(".addons-table .col-service", t.common.service); set(".addons-table .col-description", t.common.description); set(".addons-table .col-price", t.common.price);
      set(".pricing-subtitle", language === "hu"
        ? ["Gyors belső frissítés, hogy a mindennapi autózás tiszta és kényelmes legyen.", "Alapos belső tisztítás alap külső mosással a láthatóan frissebb autóért.", "Mélyreható belső és külső tisztítás, maximális figyelemmel minden részletre."]
        : ["A quick interior refresh to keep your daily driver clean and comfortable.", "A thorough interior clean with a basic exterior wash for a clearly fresher car.", "Deep interior & exterior cleaning with maximum attention to every detail."]);
      document.querySelectorAll("[data-label='Service']").forEach((el) => (el.dataset.label = t.common.service));
      document.querySelectorAll("[data-label='Description']").forEach((el) => (el.dataset.label = t.common.description));
      document.querySelectorAll("[data-label='Price']").forEach((el) => (el.dataset.label = t.common.price));
      if (language === "hu") {
        set(".pricing-features li", [
          "✓ Porszívózás minden ülésen és a padlón", "✓ Szőnyegek tisztítása", "✓ Műszerfal portalanítása", "✓ Ajtópanelek áttörlése", "✓ Belső érintési pontok fertőtlenítése", "✓ Kormánykerék tisztítása", "✓ Belső ablakok tisztítása", "✓ Pohártartók és rekeszek tisztítása", "✓ Csomagtér tisztítása", "✓ A Basic minden szolgáltatása, ezen felül:", "✓ Alap külső mosás", "✓ Alap kárpittisztítás", "✓ Műszerfal és középkonzol ápolása", "✓ Nehezen elérhető részek porszívózása", "✓ Belső illatosítás / szagtalanítás", "✓ Lábtér részletes tisztítása", "✓ Enyhe állatszőr-eltávolítás", "✓ Tükrök tisztítása (belül és kívül)", "✓ A Standard minden szolgáltatása, ezen felül:", "✓ Mély külső tisztítás biztonságos vegyszerekkel", "✓ Ajtókeretek és ajtótömítések tisztítása és ápolása", "✓ Pótkerék környékének tisztítása", "✓ Kárpit mélytisztítása és szőnyegsamponozás", "✓ Haladó folt- és szageltávolító kezelés", "✓ Mély belső porszívózás, az ülések alatt is (szükség esetén üléskiszereléssel)", "✓ Szellőzők és belső rések részletes tisztítása", "✓ Bőrtisztítás és bőrápolás", "✓ Tetőkárpit folttisztítása", "✓ Motortér tisztítása (igény szerint)", "✓ Üléssínek és mechanikák részletes tisztítása", "✓ Esőtaszító kezelés a külső ablakokon", "✓ Páramentesítő kezelés a belső üvegeken", "✓ Külső fényezés viaszolása és fényesítése"
        ]);
        set(".addon-service strong", ["Prémium illatosítás", "Állatszőr-eltávolítás", "Bőrápolás", "Fertőtlenítő kezelés", "Külső műanyag elemek felújítása", "Esőtaszító üvegkezelés", "Motortér kozmetikai tisztítása", "Só- és téli foltok eltávolítása", "Szagtalanító ködkezelés", "Bőr mélytisztítása", "Felni- és gumiabroncs-mélytisztítás + ápolás", "Utastérszűrő-csere segítség", "Gumiszőnyeg mélytisztítása", "Kerékjárati ívek tisztítása (kézi)", "Belső üveg páramentesítő kezelése", "Kárpit mélytisztítása", "Fényszóró-polírozás (enyhe felújítás)"]);
        set(".addon-description", ["Illatosító kezelés szagsemlegesítéssel a friss, kellemes utastérért.", "Speciális eszközökkel eltávolítjuk a makacs állatszőrt minden felületről.", "Prémium bőrápolás a nedvesség visszaállításáért és a repedezés megelőzéséért.", "Teljes belső fertőtlenítés professzionális fertőtlenítőszerekkel.", "A kifakult külső műanyagok mély, ápolt felületének helyreállítása.", "Hidrofób bevonat a külső üvegeken a jobb esőbeni kilátásért.", "A hozzáférhető motortéri felületek kíméletes tisztítása és műanyagápolása.", "A téli só- és fehér foltok célzott eltávolítása a szőnyegekről és padlóról.", "Ködösítő szagtalanítás, amely semlegesíti az általános belső szagokat.", "Erősen szennyezett bőrfelületek intenzív tisztítása ápolás előtt.", "Felnik és gumiabroncsok részletes tisztítása, majd gumiápolás.", "Segítség az utastérszűrő cseréjében (a szűrőt az ügyfél biztosítja).", "Gumiszőnyegek intenzív súrolása a beágyazódott szennyeződések eltávolításáért.", "Kerékjárati ívek kézi tisztítása a felgyülemlett útszennyeződés eltávolításáért.", "Páramentesítő bevonat a belső üvegeken a kondenzáció csökkentéséért.", "Erősen szennyezett ülések és szőnyegek intenzív tisztítása professzionális géppel.", "Enyhe sárgulás és homályosság csökkentése kézi vagy gépi polírozással."]);
      }
    }
    if (page === "gallery") {
      set(".gallery-intro", t.pages.gallery.intro);
      set(".project-subtitle", language === "hu"
        ? ["Prémium csomag és havi előfizetés", "Prémium csomag", "Standard csomag", "Prémium csomag és havi előfizetés", "Prémium csomag", "Prémium csomag és havi előfizetés", "Standard csomag", "Prémium csomag és mélytisztításos helyreállítás"]
        : ["Premium Package Service & Monthly Subscription", "Premium Package Service", "Standard Package Service", "Premium Package Service & Monthly Subscription", "Premium Package Service", "Premium Package Service & Monthly Subscription", "Standard Package Service", "Premium Package & Deep Cleaning Restoration"]);
    }
    if (page === "contact") {
      set(".contact-info-centered .section-title", t.pages.contact.heading);
      set(".contact-intro", t.pages.contact.intro);
      set(".contact-cta .btn-primary", t.common.bookWhatsapp);
      set(".contact-cta .btn-secondary", t.common.viewServices);
      set(".business-hours strong", language === "hu" ? ["Hétfő - Péntek:", "Szombat - Vasárnap:"] : ["Monday - Friday:", "Saturday - Sunday:"]);
      set(".business-hours > p", language === "hu" ? "Rugalmas időpont-egyeztetés lehetséges. Írj, és beszéljük meg a számodra megfelelő időpontot." : "Flexible scheduling available. Contact us to discuss your preferred time.");
    }
    if (page === "services") {
      set(".cta-title", language === "hu" ? "Készen állsz a szolgáltatás lefoglalására?" : "Ready to Book Your Service?");
      set(".cta-text", language === "hu" ? "Írj WhatsAppon az időpont-egyeztetéshez, és beszéljük át az igényeidet." : "Contact me via WhatsApp to schedule your appointment and discuss your specific needs.");
      set(".cta-buttons .btn-primary", t.common.bookWhatsapp);
    }
    if (page === "gallery") {
      set(".cta-title", language === "hu" ? "Szeretnél hasonló eredményt?" : "Want Results Like These?");
      set(".cta-text", language === "hu" ? "Foglalj autókozmetikai szolgáltatást még ma, és tapasztald meg a változást saját autódon." : "Book your detailing service today and see the transformation for yourself.");
      set(".cta-buttons .btn-primary", t.common.bookWhatsapp);
      set(".cta-buttons .btn-secondary", language === "hu" ? "Csomagok megtekintése" : "View Packages");
    }
    set(".service-area .contact-link", language === "hu" ? "Herceghalom és Pest megye környéke" : "Herceghalom and the surrounding Pest County area");
    set(".footer-links a", language === "hu" ? ["Kezdőlap", "Szolgáltatások és árak", "Galéria", "Kapcsolat", "GYIK"] : ["Home", "Services & Pricing", "Gallery", "Contact", "FAQ"]);
    set(".footer-heading", language === "hu" ? ["Gyorslinkek", "Kapcsolat"] : ["Quick Links", "Contact"]);
    set(".footer-title", language === "hu" ? "FreshCab – Autókozmetika" : "FreshCab – Car Detailing");
    set(".footer-status", language === "hu" ? "Egyéni szolgáltató" : "Individual Service Provider");
    set(".footer-bottom p", language === "hu" ? "© 2026 FreshCab Autókozmetika. Minden jog fenntartva." : "© 2026 FreshCab Car Detailing. All rights reserved.");
    set(".footer-content .footer-text", language === "hu" ? "Professzionális mobil autókozmetika, amely minőséget és kényelmet visz közvetlenül az ajtódhoz Magyarországon." : "Professional mobile car detailing service bringing quality and convenience to your doorstep in Hungary.");
    set(".footer > .container > .footer-section p.footer-text", language === "hu" ? "Tetszik ez a weboldal? Modern, magas minőségű weboldalakat is tervezek és készítek szabadúszó fejlesztőként. Ha weboldalra van szükséged a vállalkozásodhoz, vagy van egy ötleted, amelyet szeretnél megvalósítani, írj üzenetet vagy e-mailt – örömmel segítek." : "Like this website? I also design and build modern, high-quality websites as a freelance developer. If you need a website for your business or have an idea you want to bring to life, feel free to send me a message or email — I'm happy to help.");
    const description = document.querySelector('meta[name="description"]');
    if (description && language === "hu") description.content = page === "services" ? "FreshCab autókozmetikai csomagok és forintos árak Magyarországon." : "FreshCab – professzionális mobil autókozmetika Magyarországon.";
    set(".language-switcher button", ["HU", "EN"]);
    document.querySelectorAll(".language-switcher button").forEach((button) => button.classList.toggle("active", button.dataset.language === language));
    localStorage.setItem("freshcab-language", language);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav-menu");
    if (nav) {
      const li = document.createElement("li");
      li.className = "language-switcher";
      li.innerHTML = '<button type="button" data-language="hu">HU</button><button type="button" data-language="en">EN</button>';
      nav.appendChild(li);
      li.addEventListener("click", (event) => {
        const button = event.target.closest("button");
        if (button) applyLanguage(button.dataset.language);
      });
    }
    applyLanguage(localStorage.getItem("freshcab-language") || "hu");
  });
})();
