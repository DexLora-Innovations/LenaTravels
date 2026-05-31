export type Lang = "en" | "hi" | "ta";

export type Place = { name: string; desc: string; img: string };

const img = (seed: string) =>
  `https://picsum.photos/seed/${encodeURIComponent(seed)}/800/600`;

// image seeds shared across languages so URLs stay stable
const seeds: Record<string, string[]> = {
  kashi: [
    "kashi vishwanath temple varanasi", "dashashwamedh ghat varanasi", "ganga aarti varanasi",
    "assi ghat varanasi", "manikarnika ghat", "sarnath stupa", "tulsi manas mandir varanasi",
    "banaras hindu university", "ramnagar fort varanasi", "kaal bhairav temple",
  ],
  gaya: [
    "vishnupad temple gaya", "falgu river gaya", "mangla gauri temple", "akshayavat gaya banyan",
    "brahmayoni hill gaya", "surya kund gaya", "bodhi tree bodhgaya", "pretshila hill gaya",
    "ramshila hill gaya", "dungeshwari caves",
  ],
  bodhgaya: [
    "mahabodhi temple bodhgaya", "bodhi tree bodhgaya", "great buddha statue bodhgaya",
    "thai monastery bodhgaya", "japanese temple bodhgaya", "tibetan temple bodhgaya",
    "bhutanese monastery bodhgaya", "animeshlochan chaitya", "muchalinda lake bodhgaya", "bodhgaya museum",
  ],
  prayagraj: [
    "triveni sangam prayagraj", "allahabad fort", "anand bhavan allahabad", "hanuman mandir prayagraj",
    "khusro bagh allahabad", "all saints cathedral allahabad", "alopi devi temple",
    "mankameshwar temple prayagraj", "shankar viman mandapam", "kumbh mela prayagraj",
  ],
  ayodhya: [
    "ram mandir ayodhya", "hanuman garhi ayodhya", "kanak bhawan ayodhya", "nageshwarnath temple ayodhya",
    "ram ki paidi saryu ayodhya", "saryu river ayodhya", "treta ke thakur ayodhya",
    "dashrath mahal ayodhya", "guptar ghat ayodhya", "bharat kund ayodhya",
  ],
};

type PlaceText = { name: string; desc: string };
type DestText = { title: string; places: PlaceText[] };

function buildPlaces(dest: Record<string, DestText>) {
  const out: Record<string, { title: string; places: Place[] }> = {};
  for (const key of Object.keys(dest)) {
    out[key] = {
      title: dest[key].title,
      places: dest[key].places.map((p, i) => ({ ...p, img: img(seeds[key][i]) })),
    };
  }
  return out;
}

export type Translation = {
  nav: { subtitle: string; about: string; destinations: string; package: string; contact: string; book: string };
  hero: {
    badge: string; title1: string; title2: string; desc: string; book: string; view: string;
    scroll: string; statYears: string; statPilgrims: string; statCities: string;
  };
  about: { eyebrow: string; title1: string; title2: string; subtitle: string; s1: string; s2: string; s3: string };
  destinations: {
    eyebrow: string; title1: string; title2: string; title3: string; subtitle: string; explore: string;
    cards: { key: string; title: string; subtitle: string; desc: string }[];
  };
  pkg: {
    eyebrow: string; title1: string; title2: string; subtitle: string; train: string; flight: string;
    days: string; perPerson: string; popular: string; flightNote: string; book: string;
    everything: string; quote: string; includes: string[];
  };
  services: { eyebrow: string; title1: string; title2: string; subtitle: string; items: { t: string; d: string }[] };
  why: { eyebrow: string; title1: string; title2: string; cardTitle: string; cardSub: string; reasons: string[] };
  moments: { eyebrow: string; title1: string; title2: string; subtitle: string; labels: string[] };
  testimonials: { eyebrow: string; title1: string; title2: string; reviews: { text: string; name: string; place: string }[] };
  contact: {
    eyebrow: string; title1: string; title2: string; subtitle: string;
    call: string; email: string; office: string; officeVal: string;
    name: string; phone: string; interest: string; message: string; placeholder: string;
    options: string[]; sent: string; send: string;
  };
  footer: { tagline: string; quickLinks: string; links: string[]; reach: string };
  modal: { explore: string; loading: string; close: string; itinerary: string; book: string };
  places: Record<string, { title: string; places: Place[] }>;
};

const en: Translation = {
  nav: { subtitle: "Kashi Yatra Specialists", about: "About", destinations: "Destinations", package: "Package", contact: "Contact", book: "Book Yatra" },
  hero: {
    badge: "ॐ · 15+ Years of Trusted Pilgrimages", title1: "Experience the Divine", title2: "Journey to Kashi",
    desc: "Walk the eternal ghats of Varanasi, witness the sacred Ganga Aarti, and surrender to the soul of India — guided by 15 years of devoted service.",
    book: "Book Now →", view: "View Packages", scroll: "Scroll", statYears: "Years", statPilgrims: "Pilgrims", statCities: "Holy Cities",
  },
  about: {
    eyebrow: "About Us", title1: "Devoted to Your", title2: "Sacred Journey",
    subtitle: "With over 15 years of experience, Lena Travels specializes in spiritual journeys across Uttar Pradesh and beyond. We ensure a peaceful, well-managed pilgrimage — from train to temple.",
    s1: "Years of Experience", s2: "Happy Pilgrims", s3: "Fully Managed Tours",
  },
  destinations: {
    eyebrow: "Holy Destinations", title1: "Where", title2: "Souls", title3: "Find Peace",
    subtitle: "Curated pilgrimages to the most sacred cities of North India.", explore: "Explore →",
    cards: [
      { key: "kashi", title: "Kashi", subtitle: "Varanasi", desc: "The eternal city of Lord Shiva — ghats, aarti, and moksha." },
      { key: "gaya", title: "Gaya", subtitle: "Bihar", desc: "Sacred land of Vishnupad — perform pind daan for ancestors." },
      { key: "bodhgaya", title: "Buddha Gaya", subtitle: "Bodh Gaya", desc: "Where Lord Buddha attained enlightenment beneath the Bodhi tree." },
      { key: "prayagraj", title: "Prayagraj", subtitle: "Allahabad", desc: "Triveni Sangam — the holy confluence of three sacred rivers." },
      { key: "ayodhya", title: "Ayodhya", subtitle: "Uttar Pradesh", desc: "Birthplace of Lord Rama — home to the magnificent Ram Mandir." },
    ],
  },
  pkg: {
    eyebrow: "Featured Package", title1: "Kashi Yatra", title2: "Sacred Package",
    subtitle: "Two carefully crafted pilgrimage experiences — fully managed from your doorstep to the ghats.",
    train: "Train Package", flight: "Flight Package", days: "days", perPerson: "per person", popular: "Most Popular",
    flightNote: "Premium fast pilgrimage — pricing on request", book: "Book Now", everything: "Everything Included",
    quote: "“All arrangements including stay and food are completely managed by Lena Travels.”",
    includes: ["Travel (Train / Flight)", "Comfortable Accommodation", "All Meals Included", "Local Transport", "Temple Visits", "Guided Tour"],
  },
  services: {
    eyebrow: "Our Services", title1: "Crafted with", title2: "Devotion",
    subtitle: "Every detail of your pilgrimage handled with care, so you can focus on the divine.",
    items: [
      { t: "Complete Travel Management", d: "End-to-end planning and coordination of every step." },
      { t: "Accommodation Booking", d: "Comfortable, vetted stays close to the ghats and temples." },
      { t: "Food Arrangements", d: "Pure vegetarian sattvic meals throughout your yatra." },
      { t: "Guided Temple Visits", d: "Knowledgeable local pandits explain every ritual." },
      { t: "Group Tours", d: "Travel in the warm company of fellow devotees." },
      { t: "Safe & Comfortable", d: "Trusted vehicles, verified guides, dedicated care." },
    ],
  },
  why: {
    eyebrow: "Why Choose Us", title1: "The Difference of", title2: "Devotion",
    cardTitle: "A pilgrimage of a lifetime", cardSub: "Trusted since 2009",
    reasons: ["15+ Years of Trusted Experience", "Loved by Thousands of Pilgrims", "Honest, Affordable Pricing", "End-to-End Tour Management", "Expert Local Guides & Pandits", "24/7 On-Tour Support"],
  },
  moments: {
    eyebrow: "Happy Journey Memories", title1: "Our", title2: "Pilgrim Moments",
    subtitle: "Real photos from our recent yatras — smiles, prayers, and unforgettable memories shared by our pilgrim families.",
    labels: ["Sangat at the Ghats", "Darshan at the Temple", "Boarding the Yatra Train", "Sacred Bhojan Together", "Group Memories at Bodh Gaya", "Ganga Boat Ride"],
  },
  testimonials: {
    eyebrow: "Testimonials", title1: "Words from our", title2: "Pilgrims",
    reviews: [
      { text: "Very well organized trip — everything was taken care of from boarding the train to the final aarti. Truly a divine experience.", name: "Anjali Sharma", place: "Lucknow" },
      { text: "The best experience visiting Kashi with this travel service. Knowledgeable guides, clean stay, and pure sattvic meals.", name: "Ramesh Gupta", place: "Delhi" },
      { text: "After 15 years of wanting to visit Prayagraj, Lena Travels made it effortless. They treat pilgrims like family.", name: "Sunita Devi", place: "Jaipur" },
    ],
  },
  contact: {
    eyebrow: "Contact Us", title1: "Begin Your", title2: "Yatra",
    subtitle: "Tell us about your pilgrimage dream. We'll craft a soulful journey for you.",
    call: "Call Us", email: "Email", office: "Office", officeVal: "Varanasi, Uttar Pradesh, India",
    name: "Name", phone: "Phone", interest: "Package Interest", message: "Message",
    placeholder: "Tell us about your travel dates and group size...",
    options: ["Kashi Yatra — Train (9 days)", "Kashi Yatra — Flight (6 days)", "Gaya Pilgrimage", "Buddha Gaya Tour", "Prayagraj Snan", "Custom Itinerary"],
    sent: "✓ We'll be in touch soon", send: "Send Inquiry",
  },
  footer: {
    tagline: "Guiding pilgrims to the sacred soul of India for over 15 years. Specialists in spiritual journeys to Kashi, Gaya, Buddha Gaya & Prayagraj.",
    quickLinks: "Quick Links", links: ["About", "Destinations", "Package", "Contact"], reach: "Reach Us",
  },
  modal: { explore: "Explore", loading: "Loading sacred places...", close: "Close", itinerary: "View Itinerary", book: "Book This Yatra →" },
  places: buildPlaces({
    kashi: { title: "Kashi", places: [
      { name: "Kashi Vishwanath Temple", desc: "One of the twelve Jyotirlingas, the spiritual heart of Varanasi dedicated to Lord Shiva." },
      { name: "Dashashwamedh Ghat", desc: "The most vibrant ghat where the legendary Ganga Aarti takes place every evening." },
      { name: "Ganga Aarti", desc: "A mesmerizing fire ritual performed by priests on the banks of the holy Ganga." },
      { name: "Assi Ghat", desc: "A peaceful southern ghat — perfect for sunrise yoga and quiet reflection." },
      { name: "Manikarnika Ghat", desc: "The sacred cremation ghat believed to grant moksha — liberation from rebirth." },
      { name: "Sarnath", desc: "Where Lord Buddha gave his first sermon — home to ancient stupas and museums." },
      { name: "Tulsi Manas Temple", desc: "Marble temple where Tulsidas composed the Ramcharitmanas, surrounded by lush gardens." },
      { name: "Banaras Hindu University", desc: "A sprawling campus housing the beautiful New Vishwanath Temple and Bharat Kala Bhavan museum." },
      { name: "Ramnagar Fort", desc: "An 18th-century riverside fort and museum showcasing royal heritage of Kashi." },
      { name: "Kaal Bhairav Temple", desc: "Ancient temple of the fierce protector of Kashi — visited by every devout pilgrim." },
    ]},
    gaya: { title: "Gaya", places: [
      { name: "Vishnupad Temple", desc: "Marks the footprint of Lord Vishnu — the spiritual center of Gaya." },
      { name: "Falgu River", desc: "The sacred river where Pind Daan rituals are performed for ancestors." },
      { name: "Mangla Gauri Temple", desc: "One of the 18 Shakti Peethas, dedicated to Goddess Sati." },
      { name: "Akshayavat", desc: "The eternal banyan tree where final Pind Daan offerings are made." },
      { name: "Brahmayoni Hill", desc: "424 stone steps lead to a sacred hilltop with panoramic views of Gaya." },
      { name: "Surya Kund", desc: "Sacred water tank near Vishnupad believed to have healing powers." },
      { name: "Bodhi Tree (nearby)", desc: "Ancient tree under which Buddha attained enlightenment, a short trip away." },
      { name: "Pretshila Hill", desc: "Hilltop pilgrimage site for ancestral rituals with panoramic views." },
      { name: "Ramshila Hill", desc: "Sacred hill with the Patal Devi Temple and serene walking paths." },
      { name: "Dungeshwari Caves", desc: "The hill caves where Buddha meditated for years before enlightenment." },
    ]},
    bodhgaya: { title: "Buddha Gaya", places: [
      { name: "Mahabodhi Temple", desc: "UNESCO World Heritage site marking where Buddha attained enlightenment." },
      { name: "Bodhi Tree", desc: "Sacred descendant of the original tree under which Buddha meditated." },
      { name: "Great Buddha Statue", desc: "A stunning 80-foot tall Buddha statue — a symbol of peace." },
      { name: "Thai Monastery", desc: "Beautiful golden monastery built in classic Thai architectural style." },
      { name: "Japanese Temple (Indosan Nipponji)", desc: "Tranquil Japanese temple known for its peaceful meditation hall." },
      { name: "Tibetan Karma Temple", desc: "Houses a magnificent Dharma Chakra and prayer wheels." },
      { name: "Royal Bhutanese Monastery", desc: "Showcases stunning Bhutanese clay carvings and murals." },
      { name: "Animeshlochan Chaitya", desc: "Where Buddha gazed at the Bodhi tree in gratitude for a week." },
      { name: "Muchalinda Lake", desc: "Sacred lake where the serpent king sheltered Buddha during a storm." },
      { name: "Archaeological Museum", desc: "Houses artifacts and sculptures from the Pala and Gupta periods." },
    ]},
    prayagraj: { title: "Prayagraj", places: [
      { name: "Triveni Sangam", desc: "The holy confluence of Ganga, Yamuna and the mythical Saraswati." },
      { name: "Allahabad Fort", desc: "Mighty Mughal fort built by Akbar, housing the sacred Akshayavat tree." },
      { name: "Anand Bhavan", desc: "Historic ancestral home of the Nehru family, now a museum." },
      { name: "Hanuman Mandir (Bade Hanumanji)", desc: "Famous reclining Hanuman statue near the Sangam." },
      { name: "Khusro Bagh", desc: "Walled Mughal garden with three magnificent sandstone tombs." },
      { name: "All Saints Cathedral", desc: "Stunning 19th-century Gothic-style cathedral, a colonial-era marvel." },
      { name: "Alopi Devi Mandir", desc: "Unique Shakti Peetha temple where a wooden palanquin is worshipped." },
      { name: "Mankameshwar Temple", desc: "Ancient Shiva temple on the banks of the Yamuna fulfilling devotees' wishes." },
      { name: "Shankar Viman Mandapam", desc: "Four-storeyed South Indian style temple near the Sangam." },
      { name: "Kumbh Mela Grounds", desc: "Vast sacred grounds that host the world's largest spiritual gathering." },
    ]},
    ayodhya: { title: "Ayodhya", places: [
      { name: "Ram Mandir", desc: "The grand temple marking the birthplace of Lord Rama — Ayodhya's spiritual heart." },
      { name: "Hanuman Garhi", desc: "Hilltop temple of Lord Hanuman, guardian deity of Ayodhya, reached by 76 steps." },
      { name: "Kanak Bhawan", desc: "Beautiful temple gifted to Sita, adorned with gold-crowned idols of Ram and Sita." },
      { name: "Nageshwarnath Temple", desc: "Ancient Shiva temple believed to be established by Kush, son of Lord Rama." },
      { name: "Ram Ki Paidi", desc: "Series of ghats on the Saryu river, glowing beautifully during evening aarti." },
      { name: "Saryu River", desc: "The holy river of Ayodhya where pilgrims take a sacred dip and offer prayers." },
      { name: "Treta Ke Thakur", desc: "Ancient temple housing idols said to date back to the time of Lord Rama." },
      { name: "Dashrath Mahal", desc: "Royal residence of King Dashrath, father of Lord Rama, now a serene temple." },
      { name: "Guptar Ghat", desc: "Tranquil riverside ghat where Lord Rama is believed to have taken jal samadhi." },
      { name: "Bharat Kund", desc: "Sacred tank where Bharat performed penance awaiting Lord Rama's return." },
    ]},
  }),
};

const hi: Translation = {
  nav: { subtitle: "काशी यात्रा विशेषज्ञ", about: "हमारे बारे में", destinations: "गंतव्य", package: "पैकेज", contact: "संपर्क", book: "यात्रा बुक करें" },
  hero: {
    badge: "ॐ · 15+ वर्षों की विश्वसनीय तीर्थयात्राएँ", title1: "अनुभव करें दिव्यता", title2: "काशी की यात्रा",
    desc: "वाराणसी के शाश्वत घाटों पर चलें, पवित्र गंगा आरती के साक्षी बनें, और भारत की आत्मा में समर्पित हों — 15 वर्षों की समर्पित सेवा के साथ।",
    book: "अभी बुक करें →", view: "पैकेज देखें", scroll: "स्क्रॉल करें", statYears: "वर्ष", statPilgrims: "तीर्थयात्री", statCities: "पवित्र नगर",
  },
  about: {
    eyebrow: "हमारे बारे में", title1: "समर्पित आपकी", title2: "पवित्र यात्रा को",
    subtitle: "15 वर्षों से अधिक के अनुभव के साथ, लीना ट्रैवल्स उत्तर प्रदेश और उससे आगे की आध्यात्मिक यात्राओं में विशेषज्ञ है। हम ट्रेन से मंदिर तक एक शांतिपूर्ण, सुव्यवस्थित तीर्थयात्रा सुनिश्चित करते हैं।",
    s1: "वर्षों का अनुभव", s2: "प्रसन्न तीर्थयात्री", s3: "पूर्ण प्रबंधित यात्राएँ",
  },
  destinations: {
    eyebrow: "पवित्र गंतव्य", title1: "जहाँ", title2: "आत्माएँ", title3: "शांति पाती हैं",
    subtitle: "उत्तर भारत के सबसे पवित्र नगरों की चयनित तीर्थयात्राएँ।", explore: "जानें →",
    cards: [
      { key: "kashi", title: "काशी", subtitle: "वाराणसी", desc: "भगवान शिव का शाश्वत नगर — घाट, आरती और मोक्ष।" },
      { key: "gaya", title: "गया", subtitle: "बिहार", desc: "विष्णुपद की पवित्र भूमि — पूर्वजों के लिए पिंड दान करें।" },
      { key: "bodhgaya", title: "बुद्ध गया", subtitle: "बोध गया", desc: "जहाँ भगवान बुद्ध ने बोधि वृक्ष के नीचे ज्ञान प्राप्त किया।" },
      { key: "prayagraj", title: "प्रयागराज", subtitle: "इलाहाबाद", desc: "त्रिवेणी संगम — तीन पवित्र नदियों का पावन संगम।" },
      { key: "ayodhya", title: "अयोध्या", subtitle: "उत्तर प्रदेश", desc: "भगवान राम की जन्मभूमि — भव्य राम मंदिर का घर।" },
    ],
  },
  pkg: {
    eyebrow: "विशेष पैकेज", title1: "काशी यात्रा", title2: "पवित्र पैकेज",
    subtitle: "दो सावधानीपूर्वक तैयार की गई तीर्थयात्रा अनुभव — आपके द्वार से घाटों तक पूर्ण प्रबंधित।",
    train: "ट्रेन पैकेज", flight: "फ्लाइट पैकेज", days: "दिन", perPerson: "प्रति व्यक्ति", popular: "सबसे लोकप्रिय",
    flightNote: "प्रीमियम तीव्र तीर्थयात्रा — मूल्य अनुरोध पर", book: "अभी बुक करें", everything: "सब कुछ शामिल",
    quote: "“ठहरने और भोजन सहित सभी व्यवस्थाएँ पूरी तरह से लीना ट्रैवल्स द्वारा प्रबंधित की जाती हैं।”",
    includes: ["यात्रा (ट्रेन / फ्लाइट)", "आरामदायक आवास", "सभी भोजन शामिल", "स्थानीय परिवहन", "मंदिर दर्शन", "गाइडेड टूर"],
  },
  services: {
    eyebrow: "हमारी सेवाएँ", title1: "बनाया गया", title2: "भक्ति से",
    subtitle: "आपकी तीर्थयात्रा का हर विवरण ध्यान से संभाला जाता है, ताकि आप ईश्वर पर ध्यान केंद्रित कर सकें।",
    items: [
      { t: "पूर्ण यात्रा प्रबंधन", d: "हर कदम की संपूर्ण योजना और समन्वय।" },
      { t: "आवास बुकिंग", d: "घाटों और मंदिरों के पास आरामदायक, जाँचे-परखे आवास।" },
      { t: "भोजन व्यवस्था", d: "आपकी पूरी यात्रा में शुद्ध शाकाहारी सात्विक भोजन।" },
      { t: "गाइडेड मंदिर दर्शन", d: "जानकार स्थानीय पंडित हर अनुष्ठान समझाते हैं।" },
      { t: "समूह यात्राएँ", d: "सहयात्री भक्तों की गर्मजोशी भरी संगति में यात्रा करें।" },
      { t: "सुरक्षित और आरामदायक", d: "विश्वसनीय वाहन, सत्यापित गाइड, समर्पित देखभाल।" },
    ],
  },
  why: {
    eyebrow: "हमें क्यों चुनें", title1: "अंतर", title2: "भक्ति का",
    cardTitle: "जीवन भर की तीर्थयात्रा", cardSub: "2009 से विश्वसनीय",
    reasons: ["15+ वर्षों का विश्वसनीय अनुभव", "हजारों तीर्थयात्रियों का प्रिय", "ईमानदार, किफायती मूल्य", "संपूर्ण यात्रा प्रबंधन", "विशेषज्ञ स्थानीय गाइड और पंडित", "24/7 यात्रा सहायता"],
  },
  moments: {
    eyebrow: "सुखद यात्रा स्मृतियाँ", title1: "हमारे", title2: "तीर्थयात्री पल",
    subtitle: "हमारी हाल की यात्राओं की वास्तविक तस्वीरें — हमारे तीर्थयात्री परिवारों द्वारा साझा की गई मुस्कान, प्रार्थना और अविस्मरणीय यादें।",
    labels: ["घाटों पर संगत", "मंदिर में दर्शन", "यात्रा ट्रेन में सवार होना", "साथ में पवित्र भोजन", "बोध गया में समूह स्मृतियाँ", "गंगा नौका विहार"],
  },
  testimonials: {
    eyebrow: "प्रशंसापत्र", title1: "हमारे तीर्थयात्रियों के", title2: "शब्द",
    reviews: [
      { text: "बहुत अच्छी तरह से व्यवस्थित यात्रा — ट्रेन में चढ़ने से लेकर अंतिम आरती तक सब कुछ संभाला गया। वास्तव में एक दिव्य अनुभव।", name: "अंजलि शर्मा", place: "लखनऊ" },
      { text: "इस यात्रा सेवा के साथ काशी जाने का सबसे अच्छा अनुभव। जानकार गाइड, साफ-सुथरा आवास और शुद्ध सात्विक भोजन।", name: "रमेश गुप्ता", place: "दिल्ली" },
      { text: "15 वर्षों तक प्रयागराज जाने की इच्छा के बाद, लीना ट्रैवल्स ने इसे सहज बना दिया। वे तीर्थयात्रियों को परिवार जैसा मानते हैं।", name: "सुनीता देवी", place: "जयपुर" },
    ],
  },
  contact: {
    eyebrow: "संपर्क करें", title1: "आरंभ करें अपनी", title2: "यात्रा",
    subtitle: "हमें अपनी तीर्थयात्रा के सपने के बारे में बताएं। हम आपके लिए एक भावपूर्ण यात्रा तैयार करेंगे।",
    call: "हमें कॉल करें", email: "ईमेल", office: "कार्यालय", officeVal: "वाराणसी, उत्तर प्रदेश, भारत",
    name: "नाम", phone: "फ़ोन", interest: "पैकेज रुचि", message: "संदेश",
    placeholder: "हमें अपनी यात्रा की तिथियों और समूह के आकार के बारे में बताएं...",
    options: ["काशी यात्रा — ट्रेन (9 दिन)", "काशी यात्रा — फ्लाइट (6 दिन)", "गया तीर्थयात्रा", "बुद्ध गया टूर", "प्रयागराज स्नान", "अनुकूलित यात्रा"],
    sent: "✓ हम जल्द ही संपर्क करेंगे", send: "पूछताछ भेजें",
  },
  footer: {
    tagline: "15 वर्षों से अधिक समय से तीर्थयात्रियों को भारत की पवित्र आत्मा तक मार्गदर्शन। काशी, गया, बुद्ध गया और प्रयागराज की आध्यात्मिक यात्राओं के विशेषज्ञ।",
    quickLinks: "त्वरित लिंक", links: ["हमारे बारे में", "गंतव्य", "पैकेज", "संपर्क"], reach: "हम तक पहुँचें",
  },
  modal: { explore: "जानें", loading: "पवित्र स्थान लोड हो रहे हैं...", close: "बंद करें", itinerary: "यात्रा कार्यक्रम देखें", book: "यह यात्रा बुक करें →" },
  places: buildPlaces({
    kashi: { title: "काशी", places: [
      { name: "काशी विश्वनाथ मंदिर", desc: "बारह ज्योतिर्लिंगों में से एक, भगवान शिव को समर्पित वाराणसी का आध्यात्मिक हृदय।" },
      { name: "दशाश्वमेध घाट", desc: "सबसे जीवंत घाट जहाँ हर शाम प्रसिद्ध गंगा आरती होती है।" },
      { name: "गंगा आरती", desc: "पवित्र गंगा के तट पर पुजारियों द्वारा किया जाने वाला मनमोहक अग्नि अनुष्ठान।" },
      { name: "अस्सी घाट", desc: "एक शांत दक्षिणी घाट — सूर्योदय योग और शांत चिंतन के लिए उत्तम।" },
      { name: "मणिकर्णिका घाट", desc: "पवित्र दाह संस्कार घाट जो मोक्ष — पुनर्जन्म से मुक्ति प्रदान करता है।" },
      { name: "सारनाथ", desc: "जहाँ भगवान बुद्ध ने अपना पहला उपदेश दिया — प्राचीन स्तूपों और संग्रहालयों का घर।" },
      { name: "तुलसी मानस मंदिर", desc: "संगमरमर का मंदिर जहाँ तुलसीदास ने रामचरितमानस रचा, हरे-भरे बगीचों से घिरा।" },
      { name: "बनारस हिंदू विश्वविद्यालय", desc: "एक विशाल परिसर जिसमें सुंदर नया विश्वनाथ मंदिर और भारत कला भवन संग्रहालय है।" },
      { name: "रामनगर किला", desc: "18वीं सदी का नदी किनारे का किला और संग्रहालय जो काशी की शाही विरासत दर्शाता है।" },
      { name: "काल भैरव मंदिर", desc: "काशी के उग्र रक्षक का प्राचीन मंदिर — हर श्रद्धालु तीर्थयात्री द्वारा देखा जाता है।" },
    ]},
    gaya: { title: "गया", places: [
      { name: "विष्णुपद मंदिर", desc: "भगवान विष्णु के चरण चिह्न का प्रतीक — गया का आध्यात्मिक केंद्र।" },
      { name: "फल्गु नदी", desc: "पवित्र नदी जहाँ पूर्वजों के लिए पिंड दान अनुष्ठान किए जाते हैं।" },
      { name: "मंगला गौरी मंदिर", desc: "18 शक्तिपीठों में से एक, देवी सती को समर्पित।" },
      { name: "अक्षयवट", desc: "शाश्वत बरगद का पेड़ जहाँ अंतिम पिंड दान अर्पित किया जाता है।" },
      { name: "ब्रह्मयोनि पर्वत", desc: "424 पत्थर की सीढ़ियाँ गया के मनोरम दृश्य वाले पवित्र शिखर तक ले जाती हैं।" },
      { name: "सूर्य कुंड", desc: "विष्णुपद के पास पवित्र जल कुंड जिसमें उपचार शक्ति मानी जाती है।" },
      { name: "बोधि वृक्ष (निकट)", desc: "प्राचीन वृक्ष जिसके नीचे बुद्ध ने ज्ञान प्राप्त किया, थोड़ी दूरी पर।" },
      { name: "प्रेतशिला पर्वत", desc: "पूर्वजों के अनुष्ठानों के लिए मनोरम दृश्य वाला पहाड़ी तीर्थ स्थल।" },
      { name: "रामशिला पर्वत", desc: "पाताल देवी मंदिर और शांत पैदल मार्गों वाला पवित्र पहाड़।" },
      { name: "दुंगेश्वरी गुफाएँ", desc: "पहाड़ी गुफाएँ जहाँ बुद्ध ने ज्ञान से पहले वर्षों ध्यान किया।" },
    ]},
    bodhgaya: { title: "बुद्ध गया", places: [
      { name: "महाबोधि मंदिर", desc: "यूनेस्को विश्व धरोहर स्थल जहाँ बुद्ध ने ज्ञान प्राप्त किया।" },
      { name: "बोधि वृक्ष", desc: "मूल वृक्ष का पवित्र वंशज जिसके नीचे बुद्ध ने ध्यान किया।" },
      { name: "महान बुद्ध प्रतिमा", desc: "80 फुट ऊँची शानदार बुद्ध प्रतिमा — शांति का प्रतीक।" },
      { name: "थाई मठ", desc: "शास्त्रीय थाई स्थापत्य शैली में निर्मित सुंदर स्वर्णिम मठ।" },
      { name: "जापानी मंदिर (इंडोसन निप्पोनजी)", desc: "अपने शांत ध्यान कक्ष के लिए प्रसिद्ध शांत जापानी मंदिर।" },
      { name: "तिब्बती कर्म मंदिर", desc: "एक भव्य धर्मचक्र और प्रार्थना पहियों का घर।" },
      { name: "रॉयल भूटानी मठ", desc: "शानदार भूटानी मिट्टी की नक्काशी और भित्ति चित्र प्रदर्शित करता है।" },
      { name: "अनिमेषलोचन चैत्य", desc: "जहाँ बुद्ध ने एक सप्ताह कृतज्ञता से बोधि वृक्ष को निहारा।" },
      { name: "मुचलिंद झील", desc: "पवित्र झील जहाँ नाग राजा ने तूफान के दौरान बुद्ध को आश्रय दिया।" },
      { name: "पुरातत्व संग्रहालय", desc: "पाल और गुप्त काल की कलाकृतियाँ और मूर्तियाँ संरक्षित करता है।" },
    ]},
    prayagraj: { title: "प्रयागराज", places: [
      { name: "त्रिवेणी संगम", desc: "गंगा, यमुना और पौराणिक सरस्वती का पवित्र संगम।" },
      { name: "इलाहाबाद किला", desc: "अकबर द्वारा निर्मित विशाल मुगल किला, जिसमें पवित्र अक्षयवट वृक्ष है।" },
      { name: "आनंद भवन", desc: "नेहरू परिवार का ऐतिहासिक पैतृक घर, अब एक संग्रहालय।" },
      { name: "हनुमान मंदिर (बड़े हनुमानजी)", desc: "संगम के पास प्रसिद्ध लेटे हुए हनुमान की प्रतिमा।" },
      { name: "खुसरो बाग", desc: "तीन भव्य बलुआ पत्थर के मकबरों वाला चारदीवारी मुगल उद्यान।" },
      { name: "ऑल सेंट्स कैथेड्रल", desc: "शानदार 19वीं सदी का गॉथिक शैली का कैथेड्रल, औपनिवेशिक काल का चमत्कार।" },
      { name: "अलोपी देवी मंदिर", desc: "अनोखा शक्तिपीठ मंदिर जहाँ लकड़ी की पालकी की पूजा होती है।" },
      { name: "मनकामेश्वर मंदिर", desc: "यमुना के तट पर प्राचीन शिव मंदिर जो भक्तों की मनोकामनाएँ पूरी करता है।" },
      { name: "शंकर विमान मंडपम", desc: "संगम के पास चार मंजिला दक्षिण भारतीय शैली का मंदिर।" },
      { name: "कुंभ मेला मैदान", desc: "विशाल पवित्र मैदान जो दुनिया के सबसे बड़े आध्यात्मिक समागम की मेजबानी करता है।" },
    ]},
    ayodhya: { title: "अयोध्या", places: [
      { name: "राम मंदिर", desc: "भगवान राम की जन्मभूमि का प्रतीक भव्य मंदिर — अयोध्या का आध्यात्मिक हृदय।" },
      { name: "हनुमान गढ़ी", desc: "अयोध्या के रक्षक देवता भगवान हनुमान का पहाड़ी मंदिर, 76 सीढ़ियों से पहुँचा जाता है।" },
      { name: "कनक भवन", desc: "सीता को उपहार में दिया गया सुंदर मंदिर, राम और सीता की स्वर्ण-मुकुट मूर्तियों से सुशोभित।" },
      { name: "नागेश्वरनाथ मंदिर", desc: "प्राचीन शिव मंदिर जिसे भगवान राम के पुत्र कुश ने स्थापित किया माना जाता है।" },
      { name: "राम की पैड़ी", desc: "सरयू नदी के घाटों की श्रृंखला, शाम की आरती के दौरान सुंदर ढंग से जगमगाती है।" },
      { name: "सरयू नदी", desc: "अयोध्या की पवित्र नदी जहाँ तीर्थयात्री पवित्र डुबकी लगाते और प्रार्थना करते हैं।" },
      { name: "त्रेता के ठाकुर", desc: "प्राचीन मंदिर जिसमें भगवान राम के काल की मानी जाने वाली मूर्तियाँ हैं।" },
      { name: "दशरथ महल", desc: "भगवान राम के पिता राजा दशरथ का शाही निवास, अब एक शांत मंदिर।" },
      { name: "गुप्तार घाट", desc: "शांत नदी किनारे घाट जहाँ माना जाता है भगवान राम ने जल समाधि ली।" },
      { name: "भरत कुंड", desc: "पवित्र कुंड जहाँ भरत ने भगवान राम की वापसी की प्रतीक्षा में तपस्या की।" },
    ]},
  }),
};

const ta: Translation = {
  nav: { subtitle: "காசி யாத்திரை நிபுணர்கள்", about: "எங்களைப் பற்றி", destinations: "இடங்கள்", package: "தொகுப்பு", contact: "தொடர்பு", book: "யாத்திரை பதிவு" },
  hero: {
    badge: "ॐ · 15+ ஆண்டுகள் நம்பகமான யாத்திரைகள்", title1: "தெய்வீகத்தை அனுபவியுங்கள்", title2: "காசிக்கான பயணம்",
    desc: "வாரணாசியின் நித்திய படித்துறைகளில் நடந்து, புனித கங்கா ஆரத்தியைக் கண்டு, இந்தியாவின் ஆன்மாவில் சரணடையுங்கள் — 15 ஆண்டு அர்ப்பணிப்பு சேவையுடன்.",
    book: "இப்போது பதிவு →", view: "தொகுப்புகளைப் பார்", scroll: "கீழே செல்", statYears: "ஆண்டுகள்", statPilgrims: "யாத்ரீகர்கள்", statCities: "புனித நகரங்கள்",
  },
  about: {
    eyebrow: "எங்களைப் பற்றி", title1: "அர்ப்பணிப்பு உங்கள்", title2: "புனித பயணத்திற்கு",
    subtitle: "15 ஆண்டுகளுக்கும் மேலான அனுபவத்துடன், லீனா டிராவல்ஸ் உத்தரப் பிரதேசம் மற்றும் அதற்கு அப்பால் ஆன்மீக பயணங்களில் நிபுணத்துவம் பெற்றுள்ளது. ரயிலில் இருந்து கோயில் வரை அமைதியான, நன்கு நிர்வகிக்கப்பட்ட யாத்திரையை உறுதி செய்கிறோம்.",
    s1: "ஆண்டுகள் அனுபவம்", s2: "மகிழ்ச்சியான யாத்ரீகர்கள்", s3: "முழுமையாக நிர்வகிக்கப்பட்ட சுற்றுலாக்கள்",
  },
  destinations: {
    eyebrow: "புனித இடங்கள்", title1: "எங்கே", title2: "ஆன்மாக்கள்", title3: "அமைதி காண்கின்றன",
    subtitle: "வட இந்தியாவின் மிகவும் புனிதமான நகரங்களுக்கான தேர்ந்தெடுக்கப்பட்ட யாத்திரைகள்.", explore: "அறிய →",
    cards: [
      { key: "kashi", title: "காசி", subtitle: "வாரணாசி", desc: "சிவபெருமானின் நித்திய நகரம் — படித்துறைகள், ஆரத்தி, மோட்சம்." },
      { key: "gaya", title: "கயா", subtitle: "பீகார்", desc: "விஷ்ணுபதத்தின் புனித பூமி — மூதாதையர்களுக்கு பிண்ட தானம் செய்யுங்கள்." },
      { key: "bodhgaya", title: "புத்த கயா", subtitle: "போத் கயா", desc: "புத்த பகவான் போதி மரத்தடியில் ஞானம் பெற்ற இடம்." },
      { key: "prayagraj", title: "பிரயாக்ராஜ்", subtitle: "அலகாபாத்", desc: "திரிவேணி சங்கமம் — மூன்று புனித நதிகளின் சங்கமம்." },
      { key: "ayodhya", title: "அயோத்தி", subtitle: "உத்தரப் பிரதேசம்", desc: "ராமரின் பிறப்பிடம் — அற்புதமான ராம் மந்திர் உள்ள இடம்." },
    ],
  },
  pkg: {
    eyebrow: "சிறப்பு தொகுப்பு", title1: "காசி யாத்திரை", title2: "புனித தொகுப்பு",
    subtitle: "கவனமாக வடிவமைக்கப்பட்ட இரண்டு யாத்திரை அனுபவங்கள் — உங்கள் வீட்டிலிருந்து படித்துறை வரை முழுமையாக நிர்வகிக்கப்படுகிறது.",
    train: "ரயில் தொகுப்பு", flight: "விமான தொகுப்பு", days: "நாட்கள்", perPerson: "ஒருவருக்கு", popular: "மிகவும் பிரபலம்",
    flightNote: "பிரீமியம் விரைவு யாத்திரை — விலை கோரிக்கையின் பேரில்", book: "இப்போது பதிவு", everything: "அனைத்தும் உள்ளடக்கம்",
    quote: "“தங்குமிடம் மற்றும் உணவு உட்பட அனைத்து ஏற்பாடுகளும் முழுமையாக லீனா டிராவல்ஸால் நிர்வகிக்கப்படுகிறது.”",
    includes: ["பயணம் (ரயில் / விமானம்)", "வசதியான தங்குமிடம்", "அனைத்து உணவும் உள்ளடக்கம்", "உள்ளூர் போக்குவரத்து", "கோயில் தரிசனம்", "வழிகாட்டப்பட்ட சுற்றுலா"],
  },
  services: {
    eyebrow: "எங்கள் சேவைகள்", title1: "உருவாக்கப்பட்டது", title2: "பக்தியுடன்",
    subtitle: "உங்கள் யாத்திரையின் ஒவ்வொரு விவரமும் கவனமாக கையாளப்படுகிறது, நீங்கள் தெய்வீகத்தில் கவனம் செலுத்த.",
    items: [
      { t: "முழுமையான பயண நிர்வாகம்", d: "ஒவ்வொரு படியின் முழுமையான திட்டமிடல் மற்றும் ஒருங்கிணைப்பு." },
      { t: "தங்குமிட பதிவு", d: "படித்துறைகள் மற்றும் கோயில்களுக்கு அருகில் வசதியான, சரிபார்க்கப்பட்ட தங்குமிடங்கள்." },
      { t: "உணவு ஏற்பாடுகள்", d: "உங்கள் யாத்திரை முழுவதும் தூய சைவ சாத்வீக உணவு." },
      { t: "வழிகாட்டப்பட்ட கோயில் தரிசனம்", d: "அறிவார்ந்த உள்ளூர் பண்டிதர்கள் ஒவ்வொரு சடங்கையும் விளக்குகிறார்கள்." },
      { t: "குழு சுற்றுலாக்கள்", d: "சக பக்தர்களின் அன்பான தோழமையில் பயணியுங்கள்." },
      { t: "பாதுகாப்பு மற்றும் வசதி", d: "நம்பகமான வாகனங்கள், சரிபார்க்கப்பட்ட வழிகாட்டிகள், அர்ப்பணிப்பு கவனிப்பு." },
    ],
  },
  why: {
    eyebrow: "எங்களை ஏன் தேர்வு செய்ய", title1: "வேறுபாடு", title2: "பக்தியின்",
    cardTitle: "வாழ்நாள் யாத்திரை", cardSub: "2009 முதல் நம்பகம்",
    reasons: ["15+ ஆண்டுகள் நம்பகமான அனுபவம்", "ஆயிரக்கணக்கான யாத்ரீகர்களின் அன்பு", "நேர்மையான, மலிவான விலை", "முழுமையான சுற்றுலா நிர்வாகம்", "நிபுணத்துவ உள்ளூர் வழிகாட்டிகள் & பண்டிதர்கள்", "24/7 சுற்றுலா ஆதரவு"],
  },
  moments: {
    eyebrow: "மகிழ்ச்சியான பயண நினைவுகள்", title1: "எங்கள்", title2: "யாத்ரீக தருணங்கள்",
    subtitle: "எங்கள் சமீபத்திய யாத்திரைகளின் உண்மையான புகைப்படங்கள் — எங்கள் யாத்ரீக குடும்பங்கள் பகிர்ந்த புன்னகைகள், பிரார்த்தனைகள் மற்றும் மறக்க முடியாத நினைவுகள்.",
    labels: ["படித்துறைகளில் சங்கத்தினர்", "கோயிலில் தரிசனம்", "யாத்திரை ரயிலில் ஏறுதல்", "ஒன்றாக புனித போஜனம்", "போத் கயாவில் குழு நினைவுகள்", "கங்கா படகு பயணம்"],
  },
  testimonials: {
    eyebrow: "சான்றுகள்", title1: "எங்கள் யாத்ரீகர்களின்", title2: "வார்த்தைகள்",
    reviews: [
      { text: "மிகச் சிறப்பாக ஏற்பாடு செய்யப்பட்ட பயணம் — ரயிலில் ஏறுவது முதல் இறுதி ஆரத்தி வரை அனைத்தும் கவனிக்கப்பட்டது. உண்மையில் ஒரு தெய்வீக அனுபவம்.", name: "அஞ்சலி ஷர்மா", place: "லக்னோ" },
      { text: "இந்த பயண சேவையுடன் காசிக்கு சென்ற சிறந்த அனுபவம். அறிவார்ந்த வழிகாட்டிகள், சுத்தமான தங்குமிடம், தூய சாத்வீக உணவு.", name: "ரமேஷ் குப்தா", place: "டெல்லி" },
      { text: "15 ஆண்டுகளாக பிரயாக்ராஜ் செல்ல விரும்பிய பிறகு, லீனா டிராவல்ஸ் அதை எளிதாக்கியது. அவர்கள் யாத்ரீகர்களை குடும்பமாக நடத்துகிறார்கள்.", name: "சுனிதா தேவி", place: "ஜெய்ப்பூர்" },
    ],
  },
  contact: {
    eyebrow: "தொடர்பு கொள்ள", title1: "தொடங்குங்கள் உங்கள்", title2: "யாத்திரை",
    subtitle: "உங்கள் யாத்திரை கனவைப் பற்றி எங்களிடம் சொல்லுங்கள். உங்களுக்காக ஒரு ஆன்மீக பயணத்தை உருவாக்குவோம்.",
    call: "எங்களை அழைக்க", email: "மின்னஞ்சல்", office: "அலுவலகம்", officeVal: "வாரணாசி, உத்தரப் பிரதேசம், இந்தியா",
    name: "பெயர்", phone: "தொலைபேசி", interest: "தொகுப்பு ஆர்வம்", message: "செய்தி",
    placeholder: "உங்கள் பயண தேதிகள் மற்றும் குழு அளவு பற்றி எங்களிடம் சொல்லுங்கள்...",
    options: ["காசி யாத்திரை — ரயில் (9 நாட்கள்)", "காசி யாத்திரை — விமானம் (6 நாட்கள்)", "கயா யாத்திரை", "புத்த கயா சுற்றுலா", "பிரயாக்ராஜ் ஸ்நானம்", "தனிப்பயன் திட்டம்"],
    sent: "✓ விரைவில் தொடர்பு கொள்வோம்", send: "விசாரணை அனுப்பு",
  },
  footer: {
    tagline: "15 ஆண்டுகளுக்கும் மேலாக யாத்ரீகர்களை இந்தியாவின் புனித ஆன்மாவிற்கு வழிநடத்துகிறோம். காசி, கயா, புத்த கயா & பிரயாக்ராஜ் ஆன்மீக பயணங்களில் நிபுணர்கள்.",
    quickLinks: "விரைவு இணைப்புகள்", links: ["எங்களைப் பற்றி", "இடங்கள்", "தொகுப்பு", "தொடர்பு"], reach: "எங்களை அணுக",
  },
  modal: { explore: "அறிய", loading: "புனித இடங்கள் ஏற்றப்படுகிறது...", close: "மூடு", itinerary: "பயணத் திட்டம் பார்", book: "இந்த யாத்திரையை பதிவு →" },
  places: buildPlaces({
    kashi: { title: "காசி", places: [
      { name: "காசி விஸ்வநாதர் கோயில்", desc: "பன்னிரண்டு ஜோதிர்லிங்கங்களில் ஒன்று, சிவபெருமானுக்கு அர்ப்பணிக்கப்பட்ட வாரணாசியின் ஆன்மீக இதயம்." },
      { name: "தசாஸ்வமேத் படித்துறை", desc: "ஒவ்வொரு மாலையும் புகழ்பெற்ற கங்கா ஆரத்தி நடைபெறும் மிகவும் துடிப்பான படித்துறை." },
      { name: "கங்கா ஆரத்தி", desc: "புனித கங்கைக் கரையில் பூசாரிகளால் நிகழ்த்தப்படும் மயக்கும் தீ வழிபாடு." },
      { name: "அஸ்ஸி படித்துறை", desc: "அமைதியான தெற்கு படித்துறை — சூரிய உதய யோகா மற்றும் அமைதியான தியானத்திற்கு ஏற்றது." },
      { name: "மணிகர்ணிகா படித்துறை", desc: "மோட்சம் — மறுபிறப்பிலிருந்து விடுதலை அளிக்கும் என நம்பப்படும் புனித தகனப் படித்துறை." },
      { name: "சாரநாத்", desc: "புத்த பகவான் தனது முதல் உபதேசத்தை அளித்த இடம் — பழமையான ஸ்தூபிகள் மற்றும் அருங்காட்சியகங்களின் இடம்." },
      { name: "துளசி மானஸ் கோயில்", desc: "துளசிதாஸ் ராமசரிதமானஸை இயற்றிய பளிங்கு கோயில், பசுமையான தோட்டங்களால் சூழப்பட்டது." },
      { name: "பனாரஸ் இந்து பல்கலைக்கழகம்", desc: "அழகான புதிய விஸ்வநாதர் கோயில் மற்றும் பாரத கலா பவன் அருங்காட்சியகம் கொண்ட பரந்த வளாகம்." },
      { name: "ராம்நகர் கோட்டை", desc: "காசியின் அரச பாரம்பரியத்தை வெளிப்படுத்தும் 18ம் நூற்றாண்டு நதிக்கரை கோட்டை மற்றும் அருங்காட்சியகம்." },
      { name: "கால பைரவர் கோயில்", desc: "காசியின் கடுமையான பாதுகாவலரின் பழமையான கோயில் — ஒவ்வொரு பக்த யாத்ரீகரும் தரிசிக்கும் இடம்." },
    ]},
    gaya: { title: "கயா", places: [
      { name: "விஷ்ணுபத கோயில்", desc: "விஷ்ணு பகவானின் பாதச்சுவட்டைக் குறிக்கும் — கயாவின் ஆன்மீக மையம்." },
      { name: "பல்கு நதி", desc: "மூதாதையர்களுக்கு பிண்ட தான சடங்குகள் செய்யப்படும் புனித நதி." },
      { name: "மங்கள கௌரி கோயில்", desc: "18 சக்தி பீடங்களில் ஒன்று, சதி தேவிக்கு அர்ப்பணிக்கப்பட்டது." },
      { name: "அக்ஷயவட்", desc: "இறுதி பிண்ட தான காணிக்கைகள் செலுத்தப்படும் நித்திய ஆலமரம்." },
      { name: "பிரம்மயோனி மலை", desc: "424 கல் படிகள் கயாவின் பரந்த காட்சியுடன் கூடிய புனித மலை உச்சிக்கு அழைத்துச் செல்கின்றன." },
      { name: "சூர்ய குண்டம்", desc: "விஷ்ணுபதத்திற்கு அருகில் குணப்படுத்தும் சக்தி கொண்டதாக நம்பப்படும் புனித நீர் தடாகம்." },
      { name: "போதி மரம் (அருகில்)", desc: "புத்தர் ஞானம் பெற்ற பழமையான மரம், சிறிது தூரத்தில்." },
      { name: "பிரேத்ஷிலா மலை", desc: "மூதாதையர் சடங்குகளுக்கான பரந்த காட்சி கொண்ட மலை உச்சி யாத்திரை இடம்." },
      { name: "ராம்ஷிலா மலை", desc: "பாதாள தேவி கோயில் மற்றும் அமைதியான நடைபாதைகள் கொண்ட புனித மலை." },
      { name: "துங்கேஸ்வரி குகைகள்", desc: "ஞானம் பெறும் முன் புத்தர் ஆண்டுகள் தியானம் செய்த மலை குகைகள்." },
    ]},
    bodhgaya: { title: "புத்த கயா", places: [
      { name: "மகாபோதி கோயில்", desc: "புத்தர் ஞானம் பெற்ற இடத்தைக் குறிக்கும் யுனெஸ்கோ உலக பாரம்பரிய தளம்." },
      { name: "போதி மரம்", desc: "புத்தர் தியானம் செய்த மூல மரத்தின் புனித வழித்தோன்றல்." },
      { name: "பெரிய புத்தர் சிலை", desc: "80 அடி உயரமான அற்புதமான புத்தர் சிலை — அமைதியின் சின்னம்." },
      { name: "தாய் மடம்", desc: "உன்னதமான தாய் கட்டிடக்கலை பாணியில் கட்டப்பட்ட அழகான தங்க மடம்." },
      { name: "ஜப்பானிய கோயில் (இந்தோசன் நிப்போன்ஜி)", desc: "அமைதியான தியான மண்டபத்திற்கு பெயர் பெற்ற அமைதியான ஜப்பானிய கோயில்." },
      { name: "திபெத்திய கர்ம கோயில்", desc: "அற்புதமான தர்ம சக்கரம் மற்றும் பிரார்த்தனை சக்கரங்கள் கொண்டது." },
      { name: "அரச பூட்டானிய மடம்", desc: "அற்புதமான பூட்டானிய களிமண் சிற்பங்கள் மற்றும் சுவரோவியங்களை வெளிப்படுத்துகிறது." },
      { name: "அனிமேஷலோசன சைத்யா", desc: "புத்தர் ஒரு வாரம் நன்றியுடன் போதி மரத்தைப் பார்த்த இடம்." },
      { name: "முசலிந்த ஏரி", desc: "புயலின் போது நாக மன்னன் புத்தருக்கு தஞ்சம் அளித்த புனித ஏரி." },
      { name: "தொல்லியல் அருங்காட்சியகம்", desc: "பால மற்றும் குப்த காலத்தின் கலைப்பொருட்கள் மற்றும் சிற்பங்களைக் கொண்டுள்ளது." },
    ]},
    prayagraj: { title: "பிரயாக்ராஜ்", places: [
      { name: "திரிவேணி சங்கமம்", desc: "கங்கா, யமுனா மற்றும் புராண சரஸ்வதியின் புனித சங்கமம்." },
      { name: "அலகாபாத் கோட்டை", desc: "அக்பரால் கட்டப்பட்ட வலிமையான முகலாய கோட்டை, புனித அக்ஷயவட் மரத்தைக் கொண்டது." },
      { name: "ஆனந்த் பவன்", desc: "நேரு குடும்பத்தின் வரலாற்று மூதாதையர் இல்லம், இப்போது அருங்காட்சியகம்." },
      { name: "ஹனுமான் கோயில் (படே ஹனுமான்ஜி)", desc: "சங்கமத்திற்கு அருகில் புகழ்பெற்ற சயனிக்கும் ஹனுமான் சிலை." },
      { name: "குஸ்ரோ பாக்", desc: "மூன்று அற்புதமான மணற்கல் கல்லறைகள் கொண்ட சுவர் சூழ்ந்த முகலாய தோட்டம்." },
      { name: "ஆல் சைண்ட்ஸ் கதீட்ரல்", desc: "அற்புதமான 19ம் நூற்றாண்டு கோதிக் பாணி கதீட்ரல், காலனித்துவ கால அதிசயம்." },
      { name: "அலோபி தேவி கோயில்", desc: "மரப் பல்லக்கு வழிபடப்படும் தனித்துவமான சக்தி பீட கோயில்." },
      { name: "மன்கமேஸ்வர் கோயில்", desc: "பக்தர்களின் விருப்பங்களை நிறைவேற்றும் யமுனைக் கரையில் பழமையான சிவன் கோயில்." },
      { name: "சங்கர் விமான மண்டபம்", desc: "சங்கமத்திற்கு அருகில் நான்கு மாடி தென்னிந்திய பாணி கோயில்." },
      { name: "கும்பமேளா மைதானம்", desc: "உலகின் மிகப்பெரிய ஆன்மீக கூட்டத்தை நடத்தும் பரந்த புனித மைதானம்." },
    ]},
    ayodhya: { title: "அயோத்தி", places: [
      { name: "ராம் மந்திர்", desc: "ராமரின் பிறப்பிடத்தைக் குறிக்கும் பிரம்மாண்ட கோயில் — அயோத்தியின் ஆன்மீக இதயம்." },
      { name: "ஹனுமான் கர்ஹி", desc: "அயோத்தியின் பாதுகாவல் தெய்வமான ஹனுமானின் மலை கோயில், 76 படிகள் வழியாக அடையப்படுகிறது." },
      { name: "கனக் பவன்", desc: "சீதைக்கு அன்பளிப்பாக வழங்கப்பட்ட அழகான கோயில், ராமர் சீதை தங்க முடி சிலைகளால் அலங்கரிக்கப்பட்டது." },
      { name: "நாகேஸ்வர்நாத் கோயில்", desc: "ராமரின் மகன் குசனால் நிறுவப்பட்டதாக நம்பப்படும் பழமையான சிவன் கோயில்." },
      { name: "ராம் கி பைடி", desc: "சரயூ நதியின் படித்துறைகளின் தொடர், மாலை ஆரத்தியின் போது அழகாக ஒளிர்கிறது." },
      { name: "சரயூ நதி", desc: "யாத்ரீகர்கள் புனித நீராடி பிரார்த்திக்கும் அயோத்தியின் புனித நதி." },
      { name: "த்ரேதா கே தாகுர்", desc: "ராமர் காலத்தைச் சேர்ந்ததாக கூறப்படும் சிலைகளைக் கொண்ட பழமையான கோயில்." },
      { name: "தசரத் மஹால்", desc: "ராமரின் தந்தை தசரத மன்னரின் அரச இல்லம், இப்போது அமைதியான கோயில்." },
      { name: "குப்தார் படித்துறை", desc: "ராமர் ஜல சமாதி அடைந்ததாக நம்பப்படும் அமைதியான நதிக்கரை படித்துறை." },
      { name: "பரத் குண்டம்", desc: "ராமரின் திரும்புதலை எதிர்பார்த்து பரதன் தவம் செய்த புனித தடாகம்." },
    ]},
  }),
};

export const translations: Record<Lang, Translation> = { en, hi, ta };
