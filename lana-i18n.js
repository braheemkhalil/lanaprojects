// Shared i18n helper for Lana Projects pages (homepage + project details)
(function () {
  function getLang() {
    return localStorage.getItem('lana_lang') || 'en';
  }

  // IMPORTANT: must match keys used in index.html
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

      "project.building.kicker": "Available - Limited Units",
      "project.building.title": "Lana Signature Building",
      "project.building.lede": "Modern apartments with elegant interiors, private garden options, and a practical Saida location for daily living.",
      "project.building.cta.primary": "Schedule Viewing",
      "project.building.cta.whatsapp": "WhatsApp",
      "project.building.overview.h2": "Project Overview",
      "project.building.overview.p1": "Lana Signature Building is built for clients who want a polished apartment with reliable guidance from inquiry through viewing and next steps.",
      "project.building.overview.p2": "Availability is limited, so the best way to confirm the right unit is to request the latest floor options, pricing, and viewing schedule.",
      "project.building.details.h3": "Key Details",
      "project.building.details.status": "Available",
      "project.building.details.unitType": "Apartments",
      "project.building.details.bedrooms": "1-3",
      "project.building.details.size": "110-220m2",
      "project.building.details.options": "Buy / Rent",

      "project.villa.kicker": "New Project",
      "project.villa.title": "Lana Villa",
      "project.villa.lede": "A contemporary three-floor villa designed for privacy, comfort, balconies, parking, and modern family living.",
      "project.villa.cta.primary": "Book a Viewing",
      "project.villa.cta.whatsapp": "WhatsApp",
      "project.villa.overview.h2": "Project Overview",
      "project.villa.overview.p1": "Lana Villa is made for buyers who want more privacy than an apartment while keeping convenient access to Saida and nearby services.",
      "project.villa.overview.p2": "The residence is arranged across three floors, giving families separation between living, sleeping, and hosting spaces.",
      "project.villa.details.h3": "Key Details",
      "project.villa.details.status": "New project",
      "project.villa.details.unitType": "Villa",
      "project.villa.details.bedrooms": "3",
      "project.villa.details.size": "70m2 per floor",
      "project.villa.details.options": "Buy only",

      "project.gallery.label": "GALLERY",
      "project.gallery.title.villa": "Villa Images",
      "project.gallery.title.building": "Project Images",
      "project.next.privateViewing.label": "PRIVATE VIEWING",
      "project.cta.nextStep.label": "NEXT STEP",
      "project.cta.backTo": "Back to Projects",
      "project.cta.requestDetails": "Request Details",
      "project.cta.primary.generic": "Request Details",
      "project.cta.primary.villa": "Request Details",
      "project.cta.primary.villa.alt": "Book a Viewing",

      "project.residences.gallery.h2": "Project Images",
      "project.building.gallery.h2": "Project Images",
      "project.villa.gallery.h2": "Villa Images",

      "project.residences.next.h2": "Get current availability before units are released.",
      "project.residences.next.p": "Send your budget, preferred size, and timeline. We will reply with the latest information and viewing options.",
      "project.building.next.h2": "See available units in person.",
      "project.building.next.p": "Tell us whether you want to buy or rent, your budget, and your preferred viewing time.",
      "project.villa.next.h2": "Request the current villa details.",
      "project.villa.next.p": "Ask for pricing, viewing times, and the latest purchase information.",

      "project.villa.details.h2": "Project Overview",
      "project.villa.overview.p1": "Lana Villa is made for buyers who want more privacy than an apartment while keeping convenient access to Saida and nearby services.",
      "project.villa.overview.p2": "The residence is arranged across three floors, giving families separation between living, sleeping, and hosting spaces.",
      "project.villa.keyDetails.h3": "Key Details",
      "project.villa.key.status": "New project",
      "project.villa.key.unitType": "Villa",
      "project.villa.key.floors": "3",
      "project.villa.key.size": "70m2 per floor",
      "project.villa.key.options": "Buy only",

      "project.building.details.h2": "Project Overview",
      "project.building.overview.p1": "Lana Signature Building is built for clients who want a polished apartment with reliable guidance from inquiry through viewing and next steps.",
      "project.building.overview.p2": "Availability is limited, so the best way to confirm the right unit is to request the latest floor options, pricing, and viewing schedule.",
      "project.building.keyDetails.h3": "Key Details",
      "project.building.key.status": "Available",
      "project.building.key.unitType": "Apartments",
      "project.building.key.bedrooms": "1-3",
      "project.building.key.size": "110-220m2",
      "project.building.key.options": "Buy / Rent",

      // Common list labels
      "project.list.status": "Status",
      "project.list.unitType": "Unit Type",
      "project.list.propertyType": "Property Type",
      "project.list.bedrooms": "Bedrooms",
      "project.list.size": "Size Range",
      "project.list.options": "Options",
      "project.list.floors": "Floors",
      "project.list.perFloor": "Size",
      "project.list.sizeRangeLabel": "Size Range",
      "project.list.floorsLabel": "Floors",

      // Villa/signature page-specific headers/sections
      "project.villa.overview.h2": "Project Overview",
      "project.villa.keyDetails.h3": "Key Details",
      "project.building.overview.h2": "Project Overview",
      "project.building.keyDetails.h3": "Key Details"
    },
    ar: {
      "project.residences.kicker": "قريباً",

      "project.residences.title": "Lana Residences",
      "project.residences.lede": "مشروع سكني راقٍ مُخطط للمشترين والمستأجرين الذين يبحثون عن موقع مميز في صيدا، مع مرافق عملية وتجربة سكنية مرتّبة.",
      "project.residences.cta.primary": "اطلب التوفر",
      "project.residences.cta.whatsapp": "واتساب",
      "project.residences.overview.h2": "نظرة عامة",
      "project.residences.overview.p1": "صُممت Lana Residences كعنوان سكني فاخر متعدد الاستخدامات، مع شقق ومرافق قريبة وخيارات محدودة من الوحدات.",
      "project.residences.overview.p2": "المشروع موجّه للعملاء الذين يريدون قاعدة منزلية هادئة في صيدا مع وصول سهل إلى التسوق، والرعاية الصحية، والمدارس، والساحل.",
      "project.residences.details.h3": "تفاصيل أساسية",
      "project.residences.details.status": "قريباً",
      "project.residences.details.unitType": "شقق",
      "project.residences.details.bedrooms": "2-3",
      "project.residences.details.size": "110-220م²",
      "project.residences.details.options": "شراء / إيجار",

      "project.building.kicker": "متاح - وحدات محدودة",
      "project.building.title": "Lana Signature Building",
      "project.building.lede": "شقق عصرية بتشطيبات راقية، مع خيارات حدائق خاصة، وموقع عملي في صيدا للحياة اليومية.",
      "project.building.cta.primary": "احجز موعداً للزيارة",
      "project.building.cta.primary.generic": "احجز موعداً للزيارة",
      "project.building.cta.whatsapp": "واتساب",
      "project.building.overview.h2": "نظرة عامة",
      "project.building.overview.p1": "تم تصميم Lana Signature Building للعملاء الذين يبحثون عن شقة أنيقة مع توجيه موثوق من مرحلة الاستفسار وحتى الزيارة والخطوات التالية.",
      "project.building.overview.p2": "التوفر محدود، لذلك أفضل طريقة للتأكد من الوحدة المناسبة هي طلب أحدث خيارات الطوابق، الأسعار، وجدول الزيارات.",
      "project.building.details.h3": "تفاصيل أساسية",
      "project.building.details.status": "متاح",
      "project.building.details.unitType": "شقق",
      "project.building.details.bedrooms": "1-3",
      "project.building.details.size": "110-220م²",
      "project.building.details.options": "شراء / إيجار",

      "project.villa.kicker": "مشروع جديد",
      "project.villa.title": "Lana Villa",
      "project.villa.lede": "فيلا عصرية من ثلاثة طوابق مصممة للخصوصية والراحة، مع شرفات ومواقف سيارات وحياة عائلية حديثة.",
      "project.villa.cta.primary": "احجز موعداً للزيارة",
      "project.villa.cta.whatsapp": "واتساب",
      "project.villa.overview.h2": "نظرة عامة",
      "project.villa.overview.p1": "Lana Villa مناسبة للمشترين الذين يريدون خصوصية أكبر من الشقق مع الحفاظ على سهولة الوصول إلى صيدا والخدمات القريبة.",
      "project.villa.overview.p2": "توزّع الإقامة على ثلاثة طوابق لتوفير فصل بين مناطق العيش والنوم والاستقبال.",
      "project.villa.details.h3": "تفاصيل أساسية",
      "project.villa.details.status": "مشروع جديد",
      "project.villa.details.unitType": "فيلا",
      "project.villa.details.bedrooms": "3",
      "project.villa.details.size": "70م² لكل طابق",
      "project.villa.details.options": "شراء فقط",

      "project.gallery.label": "المعرض",
      "project.villa.gallery.h2": "صور الفيلا",
      "project.building.gallery.h2": "صور المشروع",

      "project.cta.nextStep.label": "الخطوة التالية",
      "project.next.privateViewing.label": "عرض خاص",

      "project.cta.backTo": "العودة إلى المشاريع",
      "project.cta.requestDetails": "اطلب التفاصيل",
      "project.cta.bookViewing": "احجز موعداً للزيارة",
      "project.cta.primary.generic": "اطلب التفاصيل",

      "project.residences.gallery.h2": "صور المشروع",
      "project.residences.next.h2": "احصل على التوفر الحالي قبل إطلاق الوحدات.",
      "project.residences.next.p": "أرسل ميزانيتك والمساحة المفضلة وخطة الوقت. سنردّ عليك بأحدث المعلومات وخيارات الزيارة.",
      "project.building.next.h2": "شاهد الوحدات المتوفرة شخصياً.",
      "project.building.next.p": "أخبرنا إن كنت ترغب بالشراء أو الإيجار، وميزانيتك ووقت الزيارة المناسب لك.",
      "project.villa.next.h2": "اطلب تفاصيل الفيلا الحالية.",
      "project.villa.next.p": "اطلب الأسعار وأوقات الزيارة وأحدث معلومات الشراء.",

      "project.list.status": "الحالة",
      "project.list.unitType": "نوع الوحدة",
      "project.list.bedrooms": "عدد الغرف",
      "project.list.size": "نطاق المساحة",
      "project.list.options": "الخيارات",
      "project.list.propertyType": "نوع العقار",
      "project.list.floors": "عدد الطوابق",
      "project.list.perFloor": "المساحة",

      "project.villa.overview.h2": "نظرة عامة",
      "project.villa.keyDetails.h3": "تفاصيل أساسية",
      "project.building.overview.h2": "نظرة عامة",
      "project.building.keyDetails.h3": "تفاصيل أساسية",

      "project.cta.scheduleViewing": "احجز موعداً للزيارة",
      "project.cta.bookViewing": "احجز موعداً للزيارة"
    }
  };

  function getEffectiveLang() {
    const stored = localStorage.getItem('lana_lang');
    if (stored) return stored;

    // Fallback: allow ?lang=ar on project URLs
    try {
      const params = new URLSearchParams(window.location.search);
      const qLang = params.get('lang');
      if (qLang === 'ar' || qLang === 'en') return qLang;
    } catch (_) {}

    // Fallback: read from document lang attribute
    const docLang = (document.documentElement.getAttribute('lang') || '').toLowerCase();
    if (docLang.startsWith('ar')) return 'ar';

    return 'en';
  }

  function applyI18n() {
    const lang = getEffectiveLang();
    const d = translations[lang] || translations.en;

    document.documentElement.lang = lang;
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Basic swap: any element with data-i18n-attr maps to a translation key.
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const key = el.getAttribute('data-i18n-attr');
      const v = d[key];
      if (v != null) el.textContent = v;
    });

    // Placeholder / aria-label support (optional)
    document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
      const key = el.getAttribute('data-i18n-ph');
      const v = d[key];
      if (v != null) el.setAttribute('placeholder', v);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      const v = d[key];
      if (v != null) el.setAttribute('aria-label', v);
    });

    // Update navbar/contact button text if present using common data-i18n-attr keys
    // (Not required for these project pages, but keeps behavior consistent.)
  }

  window.__lanaApplyI18n = applyI18n;
})();

