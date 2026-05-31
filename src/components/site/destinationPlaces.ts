export type Place = { name: string; desc: string; img: string };

const img = (seed: string) =>
  `https://picsum.photos/seed/${encodeURIComponent(seed)}/800/600`;

export const destinationPlaces: Record<string, { title: string; subtitle: string; places: Place[] }> = {
  kashi: {
    title: "Kashi",
    subtitle: "Top 10 Sacred Places in Varanasi",
    places: [
      { name: "Kashi Vishwanath Temple", desc: "One of the twelve Jyotirlingas, the spiritual heart of Varanasi dedicated to Lord Shiva.", img: img("kashi vishwanath temple varanasi") },
      { name: "Dashashwamedh Ghat", desc: "The most vibrant ghat where the legendary Ganga Aarti takes place every evening.", img: img("dashashwamedh ghat varanasi") },
      { name: "Ganga Aarti", desc: "A mesmerizing fire ritual performed by priests on the banks of the holy Ganga.", img: img("ganga aarti varanasi") },
      { name: "Assi Ghat", desc: "A peaceful southern ghat — perfect for sunrise yoga and quiet reflection.", img: img("assi ghat varanasi") },
      { name: "Manikarnika Ghat", desc: "The sacred cremation ghat believed to grant moksha — liberation from rebirth.", img: img("manikarnika ghat") },
      { name: "Sarnath", desc: "Where Lord Buddha gave his first sermon — home to ancient stupas and museums.", img: img("sarnath stupa") },
      { name: "Tulsi Manas Temple", desc: "Marble temple where Tulsidas composed the Ramcharitmanas, surrounded by lush gardens.", img: img("tulsi manas mandir varanasi") },
      { name: "Banaras Hindu University", desc: "A sprawling campus housing the beautiful New Vishwanath Temple and Bharat Kala Bhavan museum.", img: img("banaras hindu university") },
      { name: "Ramnagar Fort", desc: "An 18th-century riverside fort and museum showcasing royal heritage of Kashi.", img: img("ramnagar fort varanasi") },
      { name: "Kaal Bhairav Temple", desc: "Ancient temple of the fierce protector of Kashi — visited by every devout pilgrim.", img: img("kaal bhairav temple") },
    ],
  },
  gaya: {
    title: "Gaya",
    subtitle: "Top 10 Sacred Places in Gaya",
    places: [
      { name: "Vishnupad Temple", desc: "Marks the footprint of Lord Vishnu — the spiritual center of Gaya.", img: img("vishnupad temple gaya") },
      { name: "Falgu River", desc: "The sacred river where Pind Daan rituals are performed for ancestors.", img: img("falgu river gaya") },
      { name: "Mangla Gauri Temple", desc: "One of the 18 Shakti Peethas, dedicated to Goddess Sati.", img: img("mangla gauri temple") },
      { name: "Akshayavat", desc: "The eternal banyan tree where final Pind Daan offerings are made.", img: img("akshayavat gaya banyan") },
      { name: "Brahmayoni Hill", desc: "424 stone steps lead to a sacred hilltop with panoramic views of Gaya.", img: img("brahmayoni hill gaya") },
      { name: "Surya Kund", desc: "Sacred water tank near Vishnupad believed to have healing powers.", img: img("surya kund gaya") },
      { name: "Bodhi Tree (nearby)", desc: "Ancient tree under which Buddha attained enlightenment, a short trip away.", img: img("bodhi tree bodhgaya") },
      { name: "Pretshila Hill", desc: "Hilltop pilgrimage site for ancestral rituals with panoramic views.", img: img("pretshila hill gaya") },
      { name: "Ramshila Hill", desc: "Sacred hill with the Patal Devi Temple and serene walking paths.", img: img("ramshila hill gaya") },
      { name: "Dungeshwari Caves", desc: "The hill caves where Buddha meditated for years before enlightenment.", img: img("dungeshwari caves") },
    ],
  },
  bodhgaya: {
    title: "Buddha Gaya",
    subtitle: "Top 10 Sacred Places in Bodh Gaya",
    places: [
      { name: "Mahabodhi Temple", desc: "UNESCO World Heritage site marking where Buddha attained enlightenment.", img: img("mahabodhi temple bodhgaya") },
      { name: "Bodhi Tree", desc: "Sacred descendant of the original tree under which Buddha meditated.", img: img("bodhi tree bodhgaya") },
      { name: "Great Buddha Statue", desc: "A stunning 80-foot tall Buddha statue — a symbol of peace.", img: img("great buddha statue bodhgaya") },
      { name: "Thai Monastery", desc: "Beautiful golden monastery built in classic Thai architectural style.", img: img("thai monastery bodhgaya") },
      { name: "Japanese Temple (Indosan Nipponji)", desc: "Tranquil Japanese temple known for its peaceful meditation hall.", img: img("japanese temple bodhgaya") },
      { name: "Tibetan Karma Temple", desc: "Houses a magnificent Dharma Chakra and prayer wheels.", img: img("tibetan temple bodhgaya") },
      { name: "Royal Bhutanese Monastery", desc: "Showcases stunning Bhutanese clay carvings and murals.", img: img("bhutanese monastery bodhgaya") },
      { name: "Animeshlochan Chaitya", desc: "Where Buddha gazed at the Bodhi tree in gratitude for a week.", img: img("animeshlochan chaitya") },
      { name: "Muchalinda Lake", desc: "Sacred lake where the serpent king sheltered Buddha during a storm.", img: img("muchalinda lake bodhgaya") },
      { name: "Archaeological Museum", desc: "Houses artifacts and sculptures from the Pala and Gupta periods.", img: img("bodhgaya museum") },
    ],
  },
  prayagraj: {
    title: "Prayagraj",
    subtitle: "Top 10 Sacred Places in Prayagraj",
    places: [
      { name: "Triveni Sangam", desc: "The holy confluence of Ganga, Yamuna and the mythical Saraswati.", img: img("triveni sangam prayagraj") },
      { name: "Allahabad Fort", desc: "Mighty Mughal fort built by Akbar, housing the sacred Akshayavat tree.", img: img("allahabad fort") },
      { name: "Anand Bhavan", desc: "Historic ancestral home of the Nehru family, now a museum.", img: img("anand bhavan allahabad") },
      { name: "Hanuman Mandir (Bade Hanumanji)", desc: "Famous reclining Hanuman statue near the Sangam.", img: img("hanuman mandir prayagraj") },
      { name: "Khusro Bagh", desc: "Walled Mughal garden with three magnificent sandstone tombs.", img: img("khusro bagh allahabad") },
      { name: "All Saints Cathedral", desc: "Stunning 19th-century Gothic-style cathedral, a colonial-era marvel.", img: img("all saints cathedral allahabad") },
      { name: "Alopi Devi Mandir", desc: "Unique Shakti Peetha temple where a wooden palanquin is worshipped.", img: img("alopi devi temple") },
      { name: "Mankameshwar Temple", desc: "Ancient Shiva temple on the banks of the Yamuna fulfilling devotees' wishes.", img: img("mankameshwar temple prayagraj") },
      { name: "Shankar Viman Mandapam", desc: "Four-storeyed South Indian style temple near the Sangam.", img: img("shankar viman mandapam") },
      { name: "Kumbh Mela Grounds", desc: "Vast sacred grounds that host the world's largest spiritual gathering.", img: img("kumbh mela prayagraj") },
    ],
  },
  ayodhya: {
    title: "Ayodhya",
    subtitle: "Top 10 Sacred Places in Ayodhya",
    places: [
      { name: "Ram Mandir", desc: "The grand temple marking the birthplace of Lord Rama — Ayodhya's spiritual heart.", img: img("ram mandir ayodhya") },
      { name: "Hanuman Garhi", desc: "Hilltop temple of Lord Hanuman, guardian deity of Ayodhya, reached by 76 steps.", img: img("hanuman garhi ayodhya") },
      { name: "Kanak Bhawan", desc: "Beautiful temple gifted to Sita, adorned with gold-crowned idols of Ram and Sita.", img: img("kanak bhawan ayodhya") },
      { name: "Nageshwarnath Temple", desc: "Ancient Shiva temple believed to be established by Kush, son of Lord Rama.", img: img("nageshwarnath temple ayodhya") },
      { name: "Ram Ki Paidi", desc: "Series of ghats on the Saryu river, glowing beautifully during evening aarti.", img: img("ram ki paidi saryu ayodhya") },
      { name: "Saryu River", desc: "The holy river of Ayodhya where pilgrims take a sacred dip and offer prayers.", img: img("saryu river ayodhya") },
      { name: "Treta Ke Thakur", desc: "Ancient temple housing idols said to date back to the time of Lord Rama.", img: img("treta ke thakur ayodhya") },
      { name: "Dashrath Mahal", desc: "Royal residence of King Dashrath, father of Lord Rama, now a serene temple.", img: img("dashrath mahal ayodhya") },
      { name: "Guptar Ghat", desc: "Tranquil riverside ghat where Lord Rama is believed to have taken jal samadhi.", img: img("guptar ghat ayodhya") },
      { name: "Bharat Kund", desc: "Sacred tank where Bharat performed penance awaiting Lord Rama's return.", img: img("bharat kund ayodhya") },
    ],
  },
};
