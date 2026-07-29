// Tour catalogue exactly as supplied by HYC Travels.
//
// Every user-facing string that the client sent in both languages is stored as
// { en, mr }. Anything the client only sent in English falls back to English at
// render time (see `pick` in LanguageContext) rather than being machine
// translated — invented Marathi for prices or place names would be worse than
// showing the original.
//
// Rates are "starting from", per person, on double-sharing accommodation.
// International rates EXCLUDE flights and visa.

export const REGIONS = [
  { id: "middle-east", name: { en: "Middle East", mr: "मध्य पूर्व" } },
  { id: "south-east-asia", name: { en: "South East Asia", mr: "आग्नेय आशिया" } },
  { id: "long-haul", name: { en: "Long Haul", mr: "लॉन्ग हॉल - दूरदेश" } },
];

export const internationalPackages = [
  {
    id: 1,
    region: "middle-east",
    name: { en: "U.A.E. – Dubai", mr: "यू.ए.ई. - दुबई" },
    nights: 3,
    days: 4,
    price: 24999,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop",
    sightseeing: {
      en: ["Dubai City Tour", "Burj Khalifa", "Desert Safari", "Dubai Mall + Fountain", "Marina Dhow Cruise"],
      mr: ["दुबई सिटी टूर", "बुर्ज खलिफा", "डेझर्ट सफारी", "दुबई मॉल + फाउंटन शो", "मरीना धाऊ क्रूझ"],
    },
  },
  {
    id: 2,
    region: "middle-east",
    name: { en: "Abu Dhabi", mr: "अबू धाबी" },
    nights: 2,
    days: 3,
    price: 22999,
    image: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=600&h=400&fit=crop",
    sightseeing: {
      en: ["Sheikh Zayed Grand Mosque", "Louvre Abu Dhabi", "Ferrari World", "Corniche", "Emirates Palace", "Qasr Al Watan"],
      mr: ["शेख झायेद ग्रँड मशीद", "लौव्हर अबू धाबी", "फेरारी वर्ल्ड", "कॉर्निश", "एमिरेट्स पॅलेस", "कसर अल वतन"],
    },
  },
  {
    id: 3,
    region: "south-east-asia",
    name: { en: "Thailand – Bangkok + Pattaya", mr: "थायलंड - बँकॉक + पट्टाया" },
    nights: 4,
    days: 5,
    price: 29999,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    sightseeing: {
      en: ["Grand Palace", "Chao Phraya Cruise", "Coral Island", "Alcazar Show", "Nong Nooch Village", "Safari World", "Floating Market"],
      mr: ["ग्रँड पॅलेस", "चाओ फ्राया क्रूझ", "कोरल आयलंड", "अल्काझार शो", "नोंग नूच व्हिलेज", "सफारी वर्ल्ड", "फ्लोटिंग मार्केट"],
    },
  },
  {
    id: 4,
    region: "south-east-asia",
    name: { en: "Singapore", mr: "सिंगापूर" },
    nights: 3,
    days: 4,
    price: 32999,
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=400&fit=crop",
    sightseeing: {
      en: ["City Tour", "Gardens by the Bay", "Marina Bay Sands", "Sentosa Island", "Universal Studios", "Night Safari"],
      mr: ["सिटी टूर", "गार्डन्स बाय द बे", "मरीना बे सँड्स", "सेंटोसा आयलंड", "युनिव्हर्सल स्टुडिओ", "नाईट सफारी"],
    },
  },
  {
    id: 5,
    region: "south-east-asia",
    name: { en: "Malaysia – Kuala Lumpur + Genting", mr: "मलेशिया - क्वालंपूर + गेंटिंग" },
    nights: 4,
    days: 5,
    price: 27999,
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&h=400&fit=crop",
    sightseeing: {
      en: ["KL City Tour", "Petronas Towers", "Batu Caves", "Genting Highlands + Cable Car", "Sunway Lagoon"],
      mr: ["के.एल. सिटी टूर", "पेट्रोनास टॉवर्स", "बातू लेणी", "गेंटिंग हायलँड्स + केबल कार", "सनवे लॅगून"],
    },
  },
  {
    id: 6,
    region: "south-east-asia",
    name: { en: "Indonesia – Bali", mr: "इंडोनेशिया - बाली" },
    nights: 4,
    days: 5,
    price: 34999,
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&h=400&fit=crop",
    sightseeing: {
      en: ["Uluwatu Temple", "Nusa Penida Island", "Ubud Monkey Forest", "Tegalalang Rice Terrace", "Water Sports", "Tanah Lot Temple"],
      mr: ["उलुवातू मंदिर", "नुसा पेनिदा बेट", "उबुद मंकी फॉरेस्ट", "तेगलालांग भात शेती", "वॉटर स्पोर्ट्स", "तानाह लोट मंदिर"],
    },
  },
  {
    id: 7,
    region: "south-east-asia",
    name: { en: "Vietnam – Ho Chi Minh + Da Nang + Hoi An", mr: "व्हिएतनाम - हो चि मिन्ह + दा नांग + होई अन" },
    nights: 5,
    days: 6,
    price: 32999,
    image: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=600&h=400&fit=crop",
    sightseeing: {
      en: ["Cu Chi Tunnels", "Mekong Delta", "Ba Na Hills + Golden Bridge", "Hoi An Ancient Town", "Marble Mountains"],
      mr: ["कु ची बोगदे", "मेकॉंग डेल्टा", "बा ना हिल्स + गोल्डन ब्रिज", "होई अन प्राचीन शहर", "मार्बल माउंटन्स"],
    },
  },
  {
    id: 8,
    region: "south-east-asia",
    name: { en: "Maldives", mr: "मालदीव" },
    nights: 4,
    days: 5,
    price: 49999,
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&h=400&fit=crop",
    sightseeing: {
      en: ["Resort Island Stay", "Water Sports", "Sunset Fishing", "Dolphin Cruise", "Sandbank Picnic", "Snorkeling"],
      mr: ["रिसॉर्ट आयलंडमध्ये निवास", "वॉटर स्पोर्ट्स", "सनसेट फिशिंग", "डॉल्फिन क्रूझ", "सँडबँक पिकनिक", "स्नॉर्कलिंग"],
    },
  },
  {
    id: 9,
    region: "long-haul",
    name: { en: "U.K. – London", mr: "यू.के. - लंडन" },
    nights: 5,
    days: 6,
    price: 89999,
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop",
    sightseeing: {
      en: ["London City Tour", "Buckingham Palace", "London Eye", "Thames River Cruise", "Big Ben", "Madame Tussauds", "Oxford Street"],
      mr: ["लंडन सिटी टूर", "बकिंगहॅम पॅलेस", "लंडन आय", "थेम्स नदी क्रूझ", "बिग बेन", "मादाम तुसाद", "ऑक्सफर्ड स्ट्रीट"],
    },
  },
  {
    id: 10,
    region: "long-haul",
    name: { en: "Japan – Tokyo + Osaka + Kyoto", mr: "जपान - टोकियो + ओसाका + क्योटो" },
    nights: 6,
    days: 7,
    price: 119999,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop",
    sightseeing: {
      en: ["Mt. Fuji + Lake Kawaguchi", "Tokyo City Tour", "Disneyland / DisneySea", "Kyoto Temples", "Osaka Castle", "Bullet Train Experience"],
      mr: ["माउंट फुजी + लेक कावागुची", "टोकियो सिटी टूर", "डिस्नेलँड / डिस्नीसि", "क्योटो मंदिरे", "ओसाका किल्ला", "बुलेट ट्रेनचा अनुभव"],
    },
  },
  {
    id: 11,
    region: "long-haul",
    name: { en: "Australia – Sydney + Melbourne", mr: "ऑस्ट्रेलिया - सिडनी + मेलबर्न" },
    nights: 7,
    days: 8,
    price: 149999,
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&h=400&fit=crop",
    sightseeing: {
      en: ["Sydney Opera House", "Harbour Bridge", "Blue Mountains", "Great Ocean Road", "Penguin Parade", "Melbourne City Tour"],
      mr: ["सिडनी ऑपेरा हाऊस", "हार्बर ब्रिज", "ब्लू माउंटन्स", "ग्रेट ओशन रोड", "पेंग्विन परेड", "मेलबर्न सिटी टूर"],
    },
  },
  {
    id: 12,
    region: "long-haul",
    name: { en: "U.S.A. – New York + Las Vegas + Grand Canyon", mr: "यू.एस.ए. - न्यूयॉर्क + लास वेगास + ग्रँड कॅनियन" },
    nights: 8,
    days: 9,
    price: 179999,
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop",
    sightseeing: {
      en: ["Statue of Liberty", "Empire State Building", "Times Square", "Grand Canyon West Rim", "Hoover Dam", "Las Vegas Night Tour"],
      mr: ["स्टॅच्यू ऑफ लिबर्टी", "एम्पायर स्टेट बिल्डिंग", "टाइम्स स्क्वेअर", "ग्रँड कॅनियन वेस्ट रिम", "हूवर धरण", "लास वेगास नाईट टूर"],
    },
  },
];

// Shared column values — the client used the same three values for nearly every
// domestic tour, so they are defined once and referenced by key.
const TRAIN = { en: "Train 2nd SL", mr: "ट्रेन 2रा स्लीपर" };
const TRAIN_AIR = { en: "Train / Air", mr: "ट्रेन / विमान" };
const AIR = { en: "Air", mr: "विमान" };
const BD_VEG = { en: "Breakfast + Dinner (Veg)", mr: "नाश्ता + रात्रीचे जेवण (शाकाहारी)" };
const HOTEL_3 = { en: "3★ Hotel", mr: "3★ हॉटेल" };
const HOTEL_DHARAMSHALA = { en: "3★ Hotel / Dharamshala", mr: "3★ हॉटेल / धर्मशाळा" };
const HOTEL_HOUSEBOAT = { en: "3★ Hotel + Houseboat", mr: "3★ हॉटेल + हाउसबोट" };
const HOTEL_GM = { en: "3★ Hotel / GM", mr: "3★ हॉटेल / जी.एम." };

// NOTE: the client states HYC operates 30 domestic tours. The WhatsApp export
// supplied was cut off mid-way through entry 19 ("Rajasthan Full Circuit" — its
// highlights and price are missing) and entries 20-30 were never received.
// Entries 1-18 below are complete and verbatim. Marathi was supplied for
// entries 1-3 only; the rest fall back to English until the client sends more.
export const domesticPackages = [
  {
    id: 1,
    route: { en: "Girnar – Somnath – Dwarka – Bet Dwarka", mr: "गिरनार - सोमनाथ - द्वारका - बेट द्वारका" },
    days: 6,
    transport: TRAIN,
    meals: BD_VEG,
    stay: HOTEL_DHARAMSHALA,
    highlights: {
      en: ["Girnar", "Somnath", "Porbandar", "Dwarka", "Bet Dwarka", "Nageshwar"],
      mr: ["गिरनार", "सोमनाथ", "पोरबंदर", "द्वारका", "बेट द्वारका", "नागेश्वर"],
    },
    price: 16999,
  },
  {
    id: 2,
    route: { en: "Statue of Unity – Pavagadh", mr: "स्टॅच्यू ऑफ युनिटी - पावागड" },
    days: 4,
    transport: TRAIN,
    meals: BD_VEG,
    stay: HOTEL_3,
    highlights: {
      en: ["Statue of Unity", "Valley of Flowers", "Sardar Sarovar"],
      mr: ["स्टॅच्यू ऑफ युनिटी", "व्हॅली ऑफ फ्लॉवर्स", "सरदार सरोवर धरण"],
    },
    price: 12999,
  },
  {
    id: 3,
    route: { en: "Indore – Ujjain – Omkareshwar", mr: "इंदोर - उज्जैन - ओंकारेश्वर" },
    days: 4,
    transport: TRAIN,
    meals: BD_VEG,
    stay: HOTEL_3,
    highlights: {
      en: ["Mahakaleshwar", "Omkareshwar", "Indore Rajwada"],
      mr: ["महाकालेश्वर", "ओंकारेश्वर", "इंदोर राजवाडा"],
    },
    price: 11999,
  },
  {
    id: 4,
    route: { en: "Jaisalmer – Mount Abu – Jodhpur" },
    days: 5,
    transport: TRAIN,
    meals: BD_VEG,
    stay: HOTEL_3,
    highlights: { en: ["Jaisalmer Fort", "Sam Sand Dunes", "Dilwara Temple"] },
    price: 17999,
  },
  {
    id: 5,
    route: { en: "Jaipur – Pushkar – Ajmer – Udaipur – Chittorgarh" },
    days: 7,
    transport: TRAIN,
    meals: BD_VEG,
    stay: HOTEL_3,
    highlights: { en: ["Amber Fort", "City Palace", "Dargah Sharif", "Lake Pichola"] },
    price: 18999,
  },
  {
    id: 6,
    route: { en: "Balaji – Shivkanchi – Vishnukanchi – Mahabalipuram" },
    days: 5,
    transport: TRAIN,
    meals: BD_VEG,
    stay: HOTEL_3,
    highlights: { en: ["Tirupati Balaji", "Kanchipuram", "Mahabalipuram"] },
    price: 16999,
  },
  {
    id: 7,
    route: { en: "Jagannath Puri – Konark – Bhubaneswar" },
    days: 6,
    transport: TRAIN,
    meals: BD_VEG,
    stay: HOTEL_3,
    highlights: { en: ["Jagannath Temple", "Konark Sun Temple", "Lingaraj Temple"] },
    price: 17999,
  },
  {
    id: 8,
    route: { en: "Kolkata – Gangasagar" },
    days: 5,
    transport: TRAIN,
    meals: BD_VEG,
    stay: HOTEL_3,
    highlights: { en: ["Dakshineswar", "Victoria Memorial", "Howrah Bridge", "Gangasagar"] },
    price: 17999,
  },
  {
    id: 9,
    route: { en: "Gangtok – Darjeeling – Siliguri" },
    days: 6,
    transport: TRAIN,
    meals: BD_VEG,
    stay: HOTEL_3,
    highlights: { en: ["Tsomgo Lake", "Baba Mandir", "Tiger Hill", "Toy Train"] },
    price: 22999,
  },
  {
    id: 10,
    route: { en: "Munnar – Thekkady – Cochin – Trivandrum" },
    days: 7,
    transport: TRAIN,
    meals: BD_VEG,
    stay: HOTEL_3,
    highlights: { en: ["Tea Gardens", "Periyar Boat Ride", "Cochin", "Kovalam Beach"] },
    price: 24999,
  },
  {
    id: 11,
    route: { en: "Rameshwaram – Kanyakumari – Madurai" },
    days: 6,
    transport: TRAIN,
    meals: BD_VEG,
    stay: HOTEL_3,
    highlights: { en: ["Meenakshi Temple", "Rameshwaram", "Dhanushkodi"] },
    price: 18999,
  },
  {
    id: 12,
    route: { en: "Ooty – Mysore – Bangalore" },
    days: 7,
    transport: TRAIN,
    meals: BD_VEG,
    stay: HOTEL_3,
    highlights: { en: ["Mysore Palace", "Brindavan Gardens", "Ooty Lake", "Doddabetta"] },
    price: 21999,
  },
  {
    id: 13,
    route: { en: "Pokhara – Kathmandu – Manokamna" },
    days: 6,
    transport: TRAIN_AIR,
    meals: BD_VEG,
    stay: HOTEL_3,
    highlights: { en: ["Pashupatinath", "Durbar Square", "Phewa Lake"] },
    price: 28999,
  },
  {
    id: 14,
    route: { en: "Kashmir – Sonmarg – Gulmarg – Pahalgam – Srinagar" },
    days: 7,
    transport: AIR,
    meals: BD_VEG,
    stay: HOTEL_HOUSEBOAT,
    highlights: { en: ["Gulmarg Gondola", "Pahalgam", "Sonmarg", "Dal Lake"] },
    price: 42999,
  },
  {
    id: 15,
    route: { en: "Mathura – Agra – Vrindavan – Amritsar – Wagah – Vaishno Devi" },
    days: 11,
    transport: TRAIN,
    meals: BD_VEG,
    stay: HOTEL_3,
    highlights: { en: ["Taj Mahal", "Golden Temple", "Wagah Border", "Vaishno Devi"] },
    price: 29999,
  },
  {
    id: 16,
    route: { en: "Char Dham Yatra" },
    days: 16,
    transport: TRAIN,
    meals: BD_VEG,
    stay: HOTEL_GM,
    highlights: { en: ["Badrinath", "Kedarnath", "Gangotri", "Yamunotri", "Haridwar"] },
    price: 39999,
  },
  {
    id: 17,
    route: { en: "Balaji – Ooty – Mysore – Bangalore – Srirangapatna" },
    days: 7,
    transport: AIR,
    meals: BD_VEG,
    stay: HOTEL_3,
    highlights: { en: ["Tirupati", "Mysore Palace", "Ooty", "Bangalore"] },
    price: 34999,
  },
  {
    id: 18,
    route: { en: "Gujarat Darshan" },
    days: 9,
    transport: TRAIN,
    meals: BD_VEG,
    stay: HOTEL_3,
    highlights: { en: ["Dwarka", "Somnath", "Gir", "Ahmedabad", "Dakorji"] },
    price: 24999,
  },
];

// Total tours the client says HYC operates, used to caption the domestic
// section honestly while the remaining itineraries are outstanding.
export const DOMESTIC_TOTAL = 30;

export const formatINR = (amount) => `₹${amount.toLocaleString("en-IN")}`;
