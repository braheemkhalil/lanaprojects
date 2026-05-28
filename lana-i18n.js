// Shared i18n helper for Lana Projects detail pages.
(function () {
  const translations = {
    en: {
      "nav.projects": "Projects",
      "nav.location": "Location",
      "nav.contact": "Contact",
      "cta.schedule": "Schedule Viewing",
      "cta.whatsapp": "WhatsApp",
      "cta.call": "Call",
      "project.residences.kicker": "Coming Soon",
      "project.residences.title": "Lana Residences",
      "project.residences.lede": "A refined residential project planned for buyers and renters who want a prime Saida location, practical amenities, and a polished living experience.",
      "project.residences.cta.primary": "Request Availability",
      "project.residences.overview.h2": "Project Overview",
      "project.residences.overview.p1": "Lana Residences is designed as a premium mixed-use residential address with apartments, nearby services, and limited unit availability.",
      "project.residences.overview.p2": "The project is positioned for clients who want a calm home base in Saida with straightforward access to shopping, healthcare, schools, and the coastline.",
      "project.residences.details.h3": "Key Details",
      "project.residences.details.status": "Coming soon",
      "project.residences.details.unitType": "Apartments",
      "project.residences.details.bedrooms": "2-3",
      "project.residences.details.size": "110-220m2",
      "project.residences.details.options": "Buy / Rent",
      "project.residences.gallery.h2": "Project Images",
      "project.residences.next.h2": "Get current availability before units are released.",
      "project.residences.next.p": "Send your budget, preferred size, and timeline. We will reply with the latest information and viewing options.",
      "project.residences.sales.h2": "Planned for practical city living.",
      "project.residences.sales.p": "Ask for the latest release plan, expected unit mix, floor options, and reservation timing before public availability changes.",
      "project.residences.highlight.1": "Apartments near daily services",
      "project.residences.highlight.2": "Buy and rent options planned",
      "project.residences.highlight.3": "Limited early availability",
      "project.residences.inquiry": "Request the current availability list",

      "project.building.kicker": "Available - Limited Units",
      "project.building.title": "Lana Signature Building",
      "project.building.lede": "Modern apartments with elegant interiors, private garden options, and a practical Saida location for daily living.",
      "project.building.cta.primary": "Schedule Viewing",
      "project.building.overview.h2": "Project Overview",
      "project.building.overview.p1": "Lana Signature Building is built for clients who want a polished apartment with reliable guidance from inquiry through viewing and next steps.",
      "project.building.overview.p2": "Availability is limited, so the best way to confirm the right unit is to request the latest floor options, pricing, and viewing schedule.",
      "project.building.keyDetails.h3": "Key Details",
      "project.building.key.status": "Available",
      "project.building.key.unitType": "Apartments",
      "project.building.key.bedrooms": "1-3",
      "project.building.key.size": "110-220m2",
      "project.building.key.options": "Buy / Rent",
      "project.building.gallery.h2": "Project Images",
      "project.building.next.h2": "See available units in person.",
      "project.building.next.p": "Tell us whether you want to buy or rent, your budget, and your preferred viewing time.",
      "project.building.sales.h2": "A ready address with limited unit choices.",
      "project.building.sales.p": "Request the current price list, floor options, private garden availability, and viewing times before the best-fit units are reserved.",
      "project.building.highlight.1": "Private garden options",
      "project.building.highlight.2": "Flexible buy or rent paths",
      "project.building.highlight.3": "Private guided viewings",
      "project.building.inquiry": "Ask for price list and floor options",

      "project.villa.kicker": "New Project",
      "project.villa.title": "Lana Villa",
      "project.villa.lede": "A contemporary three-floor villa designed for privacy, comfort, balconies, parking, and modern family living.",
      "project.villa.cta.primary": "Book a Viewing",
      "project.villa.overview.h2": "Project Overview",
      "project.villa.overview.p1": "Lana Villa is made for buyers who want more privacy than an apartment while keeping convenient access to Saida and nearby services.",
      "project.villa.overview.p2": "The residence is arranged across three floors, giving families separation between living, sleeping, and hosting spaces.",
      "project.villa.keyDetails.h3": "Key Details",
      "project.villa.key.status": "New project",
      "project.villa.key.unitType": "Villa",
      "project.villa.key.floors": "3",
      "project.villa.key.size": "70m2 per floor",
      "project.villa.key.options": "Buy only",
      "project.villa.gallery.h2": "Villa Images",
      "project.villa.next.h2": "Request the current villa details.",
      "project.villa.next.p": "Ask for pricing, viewing times, and the latest purchase information.",
      "project.villa.sales.h2": "More privacy, more room to separate daily life.",
      "project.villa.sales.p": "Ask for the current villa package, parking details, balcony layout, purchase terms, and available viewing appointments.",
      "project.villa.highlight.1": "Three-floor residence",
      "project.villa.highlight.2": "Balconies and parking",
      "project.villa.highlight.3": "Purchase-focused availability",
      "project.villa.inquiry": "Request villa pricing and viewing times",

      "project.gallery.label": "GALLERY",
      "project.cta.nextStep.label": "NEXT STEP",
      "project.next.privateViewing.label": "PRIVATE VIEWING",
      "project.cta.backTo": "Back to Projects",
      "project.cta.requestDetails": "Request Details",
      "project.cta.bookViewing": "Book a Viewing",
      "project.list.status": "Status",
      "project.list.unitType": "Unit Type",
      "project.list.propertyType": "Property Type",
      "project.list.bedrooms": "Bedrooms",
      "project.list.size": "Size Range",
      "project.list.sizeRangeLabel": "Size Range",
      "project.list.options": "Options",
      "project.list.floors": "Floors",
      "project.list.perFloor": "Size",
      "project.sales.label": "WHY THIS PROJECT",
      "project.sales.cta": "Send Inquiry",
      "project.location.label": "SAIDA LOCATION",
      "project.location.h2": "Close to daily essentials in Saida.",
      "project.location.p": "Tell us your preferred neighborhood and commute needs. We will confirm the most relevant unit options and viewing schedule."
    },
    ar: {
      "nav.projects": "المشاريع",
      "nav.location": "الموقع",
      "nav.contact": "تواصل",
      "cta.schedule": "احجز معاينة",
      "cta.whatsapp": "واتساب",
      "cta.call": "اتصال",
      "project.residences.kicker": "قريبا",
      "project.residences.title": "Lana Residences",
      "project.residences.lede": "مشروع سكني راق مخطط للراغبين بالشراء أو الإيجار في موقع مميز في صيدا، مع خدمات قريبة وتجربة سكنية منظمة.",
      "project.residences.cta.primary": "اطلب التوفر",
      "project.residences.overview.h2": "نظرة عامة",
      "project.residences.overview.p1": "صمم Lana Residences كعنوان سكني راق يضم شققا مختارة وخدمات قريبة وتوفرا محدودا للوحدات.",
      "project.residences.overview.p2": "المشروع مناسب لمن يبحث عن سكن هادئ في صيدا مع وصول سهل إلى التسوق والرعاية الصحية والمدارس والساحل.",
      "project.residences.details.h3": "تفاصيل أساسية",
      "project.residences.details.status": "قريبا",
      "project.residences.details.unitType": "شقق",
      "project.residences.details.bedrooms": "2-3",
      "project.residences.details.size": "110-220م2",
      "project.residences.details.options": "شراء / إيجار",
      "project.residences.gallery.h2": "صور المشروع",
      "project.residences.next.h2": "احصل على التوفر الحالي قبل طرح الوحدات.",
      "project.residences.next.p": "أرسل ميزانيتك والمساحة المطلوبة والموعد المناسب. سنرد عليك بأحدث المعلومات وخيارات المعاينة.",
      "project.residences.sales.h2": "مخطط لحياة عملية داخل المدينة.",
      "project.residences.sales.p": "اطلب أحدث خطة طرح، وتوزيع الوحدات المتوقع، وخيارات الطوابق، وتوقيت الحجز قبل تغير التوفر العام.",
      "project.residences.highlight.1": "شقق قرب الخدمات اليومية",
      "project.residences.highlight.2": "خيارات شراء وإيجار مخططة",
      "project.residences.highlight.3": "توفر مبكر محدود",
      "project.residences.inquiry": "اطلب قائمة التوفر الحالية",

      "project.building.kicker": "متاح - وحدات محدودة",
      "project.building.title": "Lana Signature Building",
      "project.building.lede": "شقق عصرية بتشطيبات أنيقة، وخيارات حدائق خاصة، وموقع عملي في صيدا للحياة اليومية.",
      "project.building.cta.primary": "احجز معاينة",
      "project.building.overview.h2": "نظرة عامة",
      "project.building.overview.p1": "تم تصميم Lana Signature Building للعملاء الذين يبحثون عن شقة أنيقة مع متابعة واضحة من الاستفسار حتى المعاينة والخطوات التالية.",
      "project.building.overview.p2": "التوفر محدود، لذلك أفضل طريقة لتأكيد الوحدة المناسبة هي طلب أحدث خيارات الطوابق والأسعار ومواعيد المعاينة.",
      "project.building.keyDetails.h3": "تفاصيل أساسية",
      "project.building.key.status": "متاح",
      "project.building.key.unitType": "شقق",
      "project.building.key.bedrooms": "1-3",
      "project.building.key.size": "110-220م2",
      "project.building.key.options": "شراء / إيجار",
      "project.building.gallery.h2": "صور المشروع",
      "project.building.next.h2": "شاهد الوحدات المتاحة على أرض الواقع.",
      "project.building.next.p": "أخبرنا إن كنت تبحث عن شراء أو إيجار، مع الميزانية والموعد المناسب للمعاينة.",
      "project.building.sales.h2": "عنوان جاهز مع خيارات محدودة.",
      "project.building.sales.p": "اطلب قائمة الأسعار الحالية وخيارات الطوابق وتوفر الحدائق الخاصة ومواعيد المعاينة قبل حجز الوحدات الأنسب.",
      "project.building.highlight.1": "خيارات حدائق خاصة",
      "project.building.highlight.2": "مسارات شراء أو إيجار مرنة",
      "project.building.highlight.3": "معاينات خاصة بإرشاد مباشر",
      "project.building.inquiry": "اطلب قائمة الأسعار وخيارات الطوابق",

      "project.villa.kicker": "مشروع جديد",
      "project.villa.title": "Lana Villa",
      "project.villa.lede": "فيلا عصرية من ثلاثة طوابق مصممة للخصوصية والراحة، مع شرفات وموقف سيارات وحياة عائلية حديثة.",
      "project.villa.cta.primary": "احجز معاينة",
      "project.villa.overview.h2": "نظرة عامة",
      "project.villa.overview.p1": "Lana Villa مناسبة للمشترين الذين يريدون خصوصية أكبر من الشقق مع الحفاظ على سهولة الوصول إلى صيدا والخدمات القريبة.",
      "project.villa.overview.p2": "تتوزع الإقامة على ثلاثة طوابق لتوفير فصل مريح بين مساحات المعيشة والنوم والاستقبال.",
      "project.villa.keyDetails.h3": "تفاصيل أساسية",
      "project.villa.key.status": "مشروع جديد",
      "project.villa.key.unitType": "فيلا",
      "project.villa.key.floors": "3",
      "project.villa.key.size": "70م2 لكل طابق",
      "project.villa.key.options": "شراء فقط",
      "project.villa.gallery.h2": "صور الفيلا",
      "project.villa.next.h2": "اطلب تفاصيل الفيلا الحالية.",
      "project.villa.next.p": "اسأل عن الأسعار ومواعيد المعاينة وأحدث معلومات الشراء.",
      "project.villa.sales.h2": "خصوصية أكبر ومساحة أوضح للحياة اليومية.",
      "project.villa.sales.p": "اطلب تفاصيل الفيلا الحالية، ومعلومات الموقف، وتوزيع الشرفات، وشروط الشراء، ومواعيد المعاينة المتاحة.",
      "project.villa.highlight.1": "إقامة من ثلاثة طوابق",
      "project.villa.highlight.2": "شرفات وموقف سيارات",
      "project.villa.highlight.3": "توفر مخصص للشراء",
      "project.villa.inquiry": "اطلب سعر الفيلا ومواعيد المعاينة",

      "project.gallery.label": "المعرض",
      "project.cta.nextStep.label": "الخطوة التالية",
      "project.next.privateViewing.label": "معاينة خاصة",
      "project.cta.backTo": "العودة إلى المشاريع",
      "project.cta.requestDetails": "اطلب التفاصيل",
      "project.cta.bookViewing": "احجز معاينة",
      "project.list.status": "الحالة",
      "project.list.unitType": "نوع الوحدة",
      "project.list.propertyType": "نوع العقار",
      "project.list.bedrooms": "غرف النوم",
      "project.list.size": "المساحة",
      "project.list.sizeRangeLabel": "المساحة",
      "project.list.options": "الخيارات",
      "project.list.floors": "الطوابق",
      "project.list.perFloor": "المساحة",
      "project.sales.label": "لماذا هذا المشروع",
      "project.sales.cta": "أرسل استفسارا",
      "project.location.label": "موقع صيدا",
      "project.location.h2": "قريب من الاحتياجات اليومية في صيدا.",
      "project.location.p": "أخبرنا بالحي المفضل واحتياجات التنقل، وسنؤكد لك أنسب خيارات الوحدات ومواعيد المعاينة."
    }
  };

  function readLangFromUrl() {
    try {
      const lang = new URLSearchParams(window.location.search).get("lang");
      return lang === "ar" || lang === "en" ? lang : "";
    } catch (_) {
      return "";
    }
  }

  function getEffectiveLang() {
    const fromUrl = readLangFromUrl();
    if (fromUrl) return fromUrl;

    const stored = localStorage.getItem("lana_lang");
    if (stored === "ar" || stored === "en") return stored;

    const docLang = (document.documentElement.lang || "").toLowerCase();
    if (docLang.startsWith("ar")) return "ar";

    try {
      const navLang = (navigator.language || "").toLowerCase();
      if (navLang.startsWith("ar")) return "ar";
    } catch (_) {}

    return "en";
  }

  function setText(el, value) {
    if (value != null) el.textContent = value;
  }

  function applyI18n(langOverride) {
    const lang = langOverride || getEffectiveLang();
    const dictionary = translations[lang] || translations.en;

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("lana_lang", lang);

    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      setText(el, dictionary[el.getAttribute("data-i18n-attr")]);
    });

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      setText(el, dictionary[el.getAttribute("data-i18n")]);
    });

    document.querySelectorAll("[data-i18n-ph], [data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-ph") || el.getAttribute("data-i18n-placeholder");
      const value = dictionary[key];
      if (value != null) el.setAttribute("placeholder", value);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const value = dictionary[el.getAttribute("data-i18n-aria")];
      if (value != null) el.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
      button.textContent = lang === "ar" ? "EN" : "AR";
      button.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "Switch to Arabic");
    });
  }

  function bindLanguageToggles() {
    document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        const nextLang = (document.documentElement.lang || "en").startsWith("ar") ? "en" : "ar";
        applyI18n(nextLang);
      });
    });
  }

  window.__lanaApplyI18n = applyI18n;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      bindLanguageToggles();
      applyI18n();
    });
  } else {
    bindLanguageToggles();
    applyI18n();
  }
})();
