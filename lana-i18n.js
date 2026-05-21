// Shared i18n helper for Lana Projects detail pages.
(function () {
  const translations = {
    en: {
      "project.residences.kicker": "Coming Soon",
      "project.residences.title": "Lana Residences",
      "project.residences.lede": "A refined residential project planned for buyers and renters who want a prime Saida location, practical amenities, and a polished living experience.",
      "project.residences.cta.primary": "Request Availability",
      "project.residences.cta.whatsapp": "WhatsApp",
      "project.residences.overview.h2": "Project Overview",
      "project.residences.overview.p1": "Lana Residences is designed as a premium mixed-use residential address with apartments, convenient nearby services, and limited unit availability.",
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

      "project.building.kicker": "Available - Limited Units",
      "project.building.title": "Lana Signature Building",
      "project.building.lede": "Modern apartments with elegant interiors, private garden options, and a practical Saida location for daily living.",
      "project.building.cta.primary": "Schedule Viewing",
      "project.building.cta.whatsapp": "WhatsApp",
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

      "project.villa.kicker": "New Project",
      "project.villa.title": "Lana Villa",
      "project.villa.lede": "A contemporary three-floor villa designed for privacy, comfort, balconies, parking, and modern family living.",
      "project.villa.cta.primary": "Book a Viewing",
      "project.villa.cta.whatsapp": "WhatsApp",
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
      "project.list.perFloor": "Size"
    },
    ar: {
      "project.residences.kicker": "قريبا",
      "project.residences.title": "Lana Residences",
      "project.residences.lede": "مشروع سكني راق مخطط للراغبين بالشراء أو الإيجار في موقع مميز في صيدا، مع خدمات قريبة وتجربة سكنية منظمة.",
      "project.residences.cta.primary": "اطلب التوفر",
      "project.residences.cta.whatsapp": "واتساب",
      "project.residences.overview.h2": "نظرة عامة",
      "project.residences.overview.p1": "صمم Lana Residences كعنوان سكني راق يضم شققا مختارة وخدمات قريبة وتوفرا محدودا للوحدات.",
      "project.residences.overview.p2": "المشروع مناسب لمن يبحث عن سكن هادئ في صيدا مع وصول سهل إلى التسوق، المدارس، الرعاية الصحية، والساحل.",
      "project.residences.details.h3": "تفاصيل أساسية",
      "project.residences.details.status": "قريبا",
      "project.residences.details.unitType": "شقق",
      "project.residences.details.bedrooms": "2-3",
      "project.residences.details.size": "110-220م2",
      "project.residences.details.options": "شراء / إيجار",
      "project.residences.gallery.h2": "صور المشروع",
      "project.residences.next.h2": "احصل على التوفر الحالي قبل طرح الوحدات.",
      "project.residences.next.p": "أرسل ميزانيتك، المساحة المطلوبة، والموعد المناسب. سنرد عليك بأحدث المعلومات وخيارات المعاينة.",

      "project.building.kicker": "متاح - وحدات محدودة",
      "project.building.title": "Lana Signature Building",
      "project.building.lede": "شقق عصرية بتشطيبات أنيقة، خيارات حدائق خاصة، وموقع عملي في صيدا للحياة اليومية.",
      "project.building.cta.primary": "احجز معاينة",
      "project.building.cta.whatsapp": "واتساب",
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

      "project.villa.kicker": "مشروع جديد",
      "project.villa.title": "Lana Villa",
      "project.villa.lede": "فيلا عصرية من ثلاثة طوابق مصممة للخصوصية والراحة، مع شرفات، موقف سيارات، وحياة عائلية حديثة.",
      "project.villa.cta.primary": "احجز زيارة",
      "project.villa.cta.whatsapp": "واتساب",
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
      "project.villa.next.p": "اسأل عن الأسعار، مواعيد المعاينة، وأحدث معلومات الشراء.",

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
      "project.list.perFloor": "المساحة"
    }
  };

  function getEffectiveLang() {
    const stored = localStorage.getItem("lana_lang");
    if (stored === "ar" || stored === "en") return stored;

    try {
      const lang = new URLSearchParams(window.location.search).get("lang");
      if (lang === "ar" || lang === "en") return lang;
    } catch (_) {}

    return (document.documentElement.lang || "").toLowerCase().startsWith("ar") ? "ar" : "en";
  }

  function applyI18n() {
    const lang = getEffectiveLang();
    const dictionary = translations[lang] || translations.en;

    document.documentElement.lang = lang;
    document.body.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const value = dictionary[el.getAttribute("data-i18n-attr")];
      if (value != null) el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const value = dictionary[el.getAttribute("data-i18n-ph")];
      if (value != null) el.setAttribute("placeholder", value);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const value = dictionary[el.getAttribute("data-i18n-aria")];
      if (value != null) el.setAttribute("aria-label", value);
    });
  }

  window.__lanaApplyI18n = applyI18n;
})();
