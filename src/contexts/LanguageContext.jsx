import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "hyc-lang";
const LanguageContext = createContext(null);

// UI chrome strings. Package content lives in src/data and is translated only
// where the client supplied Marathi — `pick` handles that fallback.
const strings = {
  "nav.international": { en: "International", mr: "आंतरराष्ट्रीय" },
  "nav.domestic": { en: "Domestic", mr: "देशांतर्गत" },
  "nav.customize": { en: "Customize", mr: "कस्टमाईज" },
  "nav.about": { en: "About", mr: "आमच्याविषयी" },
  "nav.why": { en: "Why HYC", mr: "आमची वैशिष्ट्ये" },
  "nav.contact": { en: "Contact", mr: "संपर्क" },
  "nav.bookNow": { en: "Book Now", mr: "बुक करा" },

  "hero.titleTop": { en: "Discover Your", mr: "शोधा आपले" },
  "hero.titleAccent": { en: "Dream Destination", mr: "स्वप्नातील ठिकाण" },
  "hero.subtitle": {
    en: "Tailor-made journeys across 12 countries and 30 domestic circuits — planned end to end, priced up front.",
    mr: "12 देश आणि 30 देशांतर्गत सहली — संपूर्ण नियोजन, आणि आधीच स्पष्ट केलेले दर.",
  },
  "hero.ctaPrimary": { en: "Explore Packages", mr: "पॅकेजेस पाहा" },
  "hero.ctaSecondary": { en: "Talk to Us", mr: "आमच्याशी बोला" },
  "hero.statCountries": { en: "Countries", mr: "देश" },
  "hero.statDomestic": { en: "Domestic Tours", mr: "देशांतर्गत सहली" },
  "hero.statSupport": { en: "Travel Support", mr: "प्रवास सहाय्य" },

  "intl.eyebrow": { en: "International", mr: "आंतरराष्ट्रीय" },
  "intl.titleLead": { en: "Journeys Across", mr: "सहली" },
  "intl.titleAccent": { en: "12 Countries", mr: "12 देशांमध्ये" },
  "intl.sightseeing": { en: "Sightseeing", mr: "प्रेक्षणीय स्थळे" },
  "intl.startingRate": { en: "Starting rate", mr: "किमान दर" },
  "intl.perPerson": { en: "per person", mr: "प्रति व्यक्ती" },
  "intl.enquire": { en: "Enquire", mr: "चौकशी करा" },
  "intl.filterAll": { en: "All Regions", mr: "सर्व प्रदेश" },

  "dom.eyebrow": { en: "Domestic", mr: "देशांतर्गत" },
  "dom.titleLead": { en: "Tours Across", mr: "सहली" },
  "dom.titleAccent": { en: "India & Nepal", mr: "भारत आणि नेपाळ" },
  "dom.colTour": { en: "Tour", mr: "सहल" },
  "dom.colDays": { en: "Days", mr: "दिवस" },
  "dom.colTravel": { en: "Travel", mr: "प्रवास" },
  "dom.colMeals": { en: "Meals", mr: "भोजन" },
  "dom.colStay": { en: "Stay", mr: "निवास" },
  "dom.colHighlights": { en: "Highlights", mr: "ठळक स्थळे" },
  "dom.colFrom": { en: "From", mr: "पासून" },
  "dom.search": { en: "Search tours or places…", mr: "सहल किंवा स्थळ शोधा…" },
  "dom.noResults": { en: "No tours match that search.", mr: "या शोधाशी जुळणारी सहल नाही." },
  "dom.showing": { en: "Showing", mr: "दर्शवित आहे" },
  "dom.of": { en: "of", mr: "पैकी" },
  "dom.tours": { en: "tours", mr: "सहली" },
  "dom.moreSoon": {
    en: "Remaining itineraries are being added. Call us for any tour not listed here.",
    mr: "उर्वरित सहली लवकरच जोडल्या जातील. येथे नसलेल्या सहलीसाठी आम्हाला कॉल करा.",
  },

  "special.eyebrow": { en: "HYC Travels Special", mr: "HYC Travels ची वैशिष्ट्ये" },

  "cust.titleLead": { en: "Build Your", mr: "तयार करा आपले" },
  "cust.titleAccent": { en: "Perfect Package", mr: "योग्य पॅकेज" },
  "cust.subtitle": {
    en: "Pick a tour and party size for an indicative starting cost, then send us the enquiry for a firm quote.",
    mr: "सहल व प्रवाशांची संख्या निवडा, अंदाजे किमान खर्च पाहा, आणि निश्चित दरासाठी चौकशी पाठवा.",
  },
  "cust.selectTour": { en: "Select a tour", mr: "सहल निवडा" },
  "cust.chooseTour": { en: "Choose a destination", mr: "ठिकाण निवडा" },
  "cust.travellers": { en: "Travellers", mr: "प्रवासी" },
  "cust.groupIntl": { en: "International", mr: "आंतरराष्ट्रीय" },
  "cust.groupDom": { en: "Domestic", mr: "देशांतर्गत" },
  "cust.startingTotal": { en: "Starting total", mr: "किमान एकूण" },
  "cust.indicative": {
    en: "Indicative only — calculated from the published starting rate. Final cost depends on dates, hotels and availability.",
    mr: "हा केवळ अंदाज आहे — प्रसिद्ध केलेल्या किमान दरावर आधारित. अंतिम खर्च तारखा, हॉटेल व उपलब्धतेवर अवलंबून.",
  },
  "cust.getQuote": { en: "Get Detailed Quote", mr: "सविस्तर दर मिळवा" },
  "cust.callInstead": { en: "Call Instead", mr: "त्याऐवजी कॉल करा" },
  "cust.forTravellers": { en: "for", mr: "यासाठी" },
  "cust.excludesFlights": { en: "Excludes flights & visa", mr: "विमान तिकीट व व्हिसा वगळून" },

  "contact.eyebrow": { en: "Get in touch", mr: "संपर्क साधा" },
  "contact.title": { en: "Plan Your Next Journey", mr: "आपली पुढील सहल ठरवा" },
  "contact.subtitle": {
    en: "Call or message us for a tailored itinerary and a firm quote.",
    mr: "आपल्या आवडीनुसार सहल व निश्चित दरासाठी आम्हाला कॉल किंवा मेसेज करा.",
  },
  "contact.call": { en: "Call", mr: "कॉल करा" },
  "contact.whatsapp": { en: "WhatsApp", mr: "व्हॉट्सॲप" },
  "contact.email": { en: "Email", mr: "ईमेल" },
  "contact.instagram": { en: "Instagram", mr: "इन्स्टाग्राम" },

  "common.nights": { en: "N", mr: "रात्री" },
  "common.days": { en: "D", mr: "दिवस" },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "en";
    return window.localStorage.getItem(STORAGE_KEY) === "mr" ? "mr" : "en";
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    // Screen readers and font stacks need to know which language is rendering.
    document.documentElement.lang = lang === "mr" ? "mr" : "en";
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggle: () => setLang((l) => (l === "en" ? "mr" : "en")),
      t: (key) => strings[key]?.[lang] ?? strings[key]?.en ?? key,
      // Falls back to English when the client did not supply a Marathi version,
      // so a partially translated record still renders completely.
      pick: (field) => {
        if (field == null) return "";
        if (typeof field === "string") return field;
        return field[lang] ?? field.en ?? "";
      },
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
