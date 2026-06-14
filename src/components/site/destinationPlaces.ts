import akshayavat from "@/assets/Akshayavat.jpg";
import allSaintsCathedral from "@/assets/All Saints Cathedral.jpg";
import allahabadFort from "@/assets/Allahabad Fort.jpg";
import alopiDeviTemple from "@/assets/Alopi Devi Temple.jpg";
import anandBhavan from "@/assets/Anand Bhavan.jpg";
import animeshlochanChaitya from "@/assets/Animeshlochan Chaitya.jpg";
import archaeologicalMuseum from "@/assets/Archaeological Museum.jpg";
import assiGhat from "@/assets/Assi Ghat.jpg";
import banarasHinduUniversity from "@/assets/Banaras Hindu University.jpg";
import bharatKund from "@/assets/Bharat Kund.jpg";
import bodhiTree from "@/assets/Bodhi Tree.jpg";
import bodhiTreeNearby from "@/assets/Bodhi Tree 1.jpg";
import brahmayoniHill from "@/assets/Brahmayoni Hill.jpg";
import dashashwamedhGhat from "@/assets/Dashashwamedh Ghat.jpg";
import dashrathMahal from "@/assets/Dashrath Mahal.jpg";
import dungeshwariCaves from "@/assets/Dungeshwari Caves.jpg";
import falguRiver from "@/assets/Falgu River.jpg";
import gangaAarti from "@/assets/Ganga Aarti.jpg";
import greatBuddhaStatue from "@/assets/Great Buddha Statue.jpg";
import guptarGhat from "@/assets/Guptar Ghat.jpg";
import hanumanGarhi from "@/assets/Hanuman Garhi.jpg";
import hanumanMandir from "@/assets/Hanuman Mandir (Bade Hanumanji).jpg";
import japaneseTemple from "@/assets/Japanese Temple (Indosan Nipponji).jpg";
import kaalBhairavTemple from "@/assets/Kaal Bhairav Temple.jpg";
import kanakBhawan from "@/assets/Kanak Bhawan.jpg";
import kashiVishwanathTemple from "@/assets/Kashi Vishwanath Temple.jpg";
import khusroBagh from "@/assets/Khusro Bagh.jpg";
import kumbhMelaGrounds from "@/assets/Kumbh Mela Grounds.jpg";
import mahabodhiTemple from "@/assets/Mahabodhi Temple.jpg";
import manglaGauriTemple from "@/assets/Mangla Gauri Temple.jpg";
import manikarnikaGhat from "@/assets/Manikarnika Ghat.jpg";
import mankameshwarTemple from "@/assets/Mankameshwar Temple.jpg";
import muchalindaLake from "@/assets/Muchalinda Lake.jpg";
import nageshwarnathTemple from "@/assets/Nageshwarnath Temple.jpg";
import pretshilaHill from "@/assets/Pretshila Hill.jpg";
import ramKiPaidi from "@/assets/Ram Ki Paidi.jpg";
import ramMandir from "@/assets/Ram Mandir.jpg";
import ramshilaHill from "@/assets/Ramshila Hill.jpg";
import royalBhutaneseMonastery from "@/assets/Royal Bhutanese Monastery.jpg";
import sarnath from "@/assets/Sarnath.jpg";
import saryuRiver from "@/assets/Saryu River.jpg";
import shankarVimanMandapam from "@/assets/Shankar Viman Mandapam.jpg";
import suryaKund from "@/assets/Surya Kund.jpg";
import thaiMonastery from "@/assets/Thai Monastery.jpg";
import tibetanKarmaTemple from "@/assets/Tibetan Karma Temple.jpg";
import tretaKeThakur from "@/assets/Treta Ke Thakur.jpg";
import triveniSangam from "@/assets/Triveni Sangam.jpg";
import tulsiManasTemple from "@/assets/Tulsi Manas Temple.jpg";
import vishnupadTemple from "@/assets/Vishnupad Temple.jpg";

export type Place = {
  nameKey: string;
  descKey: string;
  img: string;
  alt: string;
  assetName: string;
};

export const destinationPlaces: Record<string, { title: string; places: Place[] }> = {
  kashi: {
    title: "Kashi",
    places: [
      {
        nameKey: "place.kashi.vishwanath.name",
        descKey: "place.kashi.vishwanath.desc",
        img: kashiVishwanathTemple,
        assetName: "Kashi Vishwanath Temple.jpg",
        alt: "Kashi Vishwanath Temple in Varanasi",
      },
      {
        nameKey: "place.kashi.dashashwamedh.name",
        descKey: "place.kashi.dashashwamedh.desc",
        img: dashashwamedhGhat,
        assetName: "Dashashwamedh Ghat.jpg",
        alt: "Dashashwamedh Ghat in Varanasi",
      },
      {
        nameKey: "place.kashi.ganga_aarti.name",
        descKey: "place.kashi.ganga_aarti.desc",
        img: gangaAarti,
        assetName: "Ganga Aarti.jpg",
        alt: "Ganga Aarti fire ritual at Varanasi ghats",
      },
      {
        nameKey: "place.kashi.assi.name",
        descKey: "place.kashi.assi.desc",
        img: assiGhat,
        assetName: "Assi Ghat.jpg",
        alt: "Assi Ghat in Varanasi",
      },
      {
        nameKey: "place.kashi.manikarnika.name",
        descKey: "place.kashi.manikarnika.desc",
        img: manikarnikaGhat,
        assetName: "Manikarnika Ghat.jpg",
        alt: "Manikarnika Ghat in Varanasi",
      },
      {
        nameKey: "place.kashi.sarnath.name",
        descKey: "place.kashi.sarnath.desc",
        img: sarnath,
        assetName: "Sarnath.jpg",
        alt: "Sarnath near Varanasi",
      },
      {
        nameKey: "place.kashi.tulsi.name",
        descKey: "place.kashi.tulsi.desc",
        img: tulsiManasTemple,
        assetName: "Tulsi Manas Temple.jpg",
        alt: "Tulsi Manas Temple in Varanasi",
      },
      {
        nameKey: "place.kashi.bhu.name",
        descKey: "place.kashi.bhu.desc",
        img: banarasHinduUniversity,
        assetName: "Banaras Hindu University.jpg",
        alt: "Banaras Hindu University in Varanasi",
      },
      {
        nameKey: "place.kashi.kaal.name",
        descKey: "place.kashi.kaal.desc",
        img: kaalBhairavTemple,
        assetName: "Kaal Bhairav Temple.jpg",
        alt: "Kaal Bhairav Temple in Varanasi",
      },
    ],
  },
  gaya: {
    title: "Gaya",
    places: [
      {
        nameKey: "place.gaya.vishnupad.name",
        descKey: "place.gaya.vishnupad.desc",
        img: vishnupadTemple,
        assetName: "Vishnupad Temple.jpg",
        alt: "Vishnupad Temple in Gaya",
      },
      {
        nameKey: "place.gaya.falgu.name",
        descKey: "place.gaya.falgu.desc",
        img: falguRiver,
        assetName: "Falgu River.jpg",
        alt: "Falgu River in Gaya",
      },
      {
        nameKey: "place.gaya.mangla.name",
        descKey: "place.gaya.mangla.desc",
        img: manglaGauriTemple,
        assetName: "Mangla Gauri Temple.jpg",
        alt: "Mangla Gauri Temple in Gaya",
      },
      {
        nameKey: "place.gaya.akshayavat.name",
        descKey: "place.gaya.akshayavat.desc",
        img: akshayavat,
        assetName: "Akshayavat.jpg",
        alt: "Akshayavat sacred banyan tree in Gaya",
      },
      {
        nameKey: "place.gaya.brahmayoni.name",
        descKey: "place.gaya.brahmayoni.desc",
        img: brahmayoniHill,
        assetName: "Brahmayoni Hill.jpg",
        alt: "Brahmayoni Hill in Gaya",
      },
      {
        nameKey: "place.gaya.surya.name",
        descKey: "place.gaya.surya.desc",
        img: suryaKund,
        assetName: "Surya Kund.jpg",
        alt: "Surya Kund in Gaya",
      },
      {
        nameKey: "place.gaya.bodhi.name",
        descKey: "place.gaya.bodhi.desc",
        img: bodhiTreeNearby,
        assetName: "Bodhi Tree 1.jpg",
        alt: "Bodhi Tree near Gaya",
      },
      {
        nameKey: "place.gaya.pretshila.name",
        descKey: "place.gaya.pretshila.desc",
        img: pretshilaHill,
        assetName: "Pretshila Hill.jpg",
        alt: "Pretshila Hill in Gaya",
      },
      {
        nameKey: "place.gaya.ramshila.name",
        descKey: "place.gaya.ramshila.desc",
        img: ramshilaHill,
        assetName: "Ramshila Hill.jpg",
        alt: "Ramshila Hill in Gaya",
      },
      {
        nameKey: "place.gaya.dungeshwari.name",
        descKey: "place.gaya.dungeshwari.desc",
        img: dungeshwariCaves,
        assetName: "Dungeshwari Caves.jpg",
        alt: "Dungeshwari Caves near Gaya",
      },
    ],
  },
  bodhgaya: {
    title: "Buddha Gaya",
    places: [
      {
        nameKey: "place.bodhgaya.mahabodhi.name",
        descKey: "place.bodhgaya.mahabodhi.desc",
        img: mahabodhiTemple,
        assetName: "Mahabodhi Temple.jpg",
        alt: "Mahabodhi Temple in Bodh Gaya",
      },
      {
        nameKey: "place.bodhgaya.bodhi.name",
        descKey: "place.bodhgaya.bodhi.desc",
        img: bodhiTree,
        assetName: "Bodhi Tree.jpg",
        alt: "Bodhi Tree in Bodh Gaya",
      },
      {
        nameKey: "place.bodhgaya.statue.name",
        descKey: "place.bodhgaya.statue.desc",
        img: greatBuddhaStatue,
        assetName: "Great Buddha Statue.jpg",
        alt: "Great Buddha Statue in Bodh Gaya",
      },
      {
        nameKey: "place.bodhgaya.thai.name",
        descKey: "place.bodhgaya.thai.desc",
        img: thaiMonastery,
        assetName: "Thai Monastery.jpg",
        alt: "Thai Monastery in Bodh Gaya",
      },
      {
        nameKey: "place.bodhgaya.japanese.name",
        descKey: "place.bodhgaya.japanese.desc",
        img: japaneseTemple,
        assetName: "Japanese Temple (Indosan Nipponji).jpg",
        alt: "Japanese Temple Indosan Nipponji in Bodh Gaya",
      },
      {
        nameKey: "place.bodhgaya.tibetan.name",
        descKey: "place.bodhgaya.tibetan.desc",
        img: tibetanKarmaTemple,
        assetName: "Tibetan Karma Temple.jpg",
        alt: "Tibetan Karma Temple in Bodh Gaya",
      },
      {
        nameKey: "place.bodhgaya.bhutanese.name",
        descKey: "place.bodhgaya.bhutanese.desc",
        img: royalBhutaneseMonastery,
        assetName: "Royal Bhutanese Monastery.jpg",
        alt: "Royal Bhutanese Monastery in Bodh Gaya",
      },
      {
        nameKey: "place.bodhgaya.animeshlochan.name",
        descKey: "place.bodhgaya.animeshlochan.desc",
        img: animeshlochanChaitya,
        assetName: "Animeshlochan Chaitya.jpg",
        alt: "Animeshlochan Chaitya in Bodh Gaya",
      },
      {
        nameKey: "place.bodhgaya.muchalinda.name",
        descKey: "place.bodhgaya.muchalinda.desc",
        img: muchalindaLake,
        assetName: "Muchalinda Lake.jpg",
        alt: "Muchalinda Lake in Bodh Gaya",
      },
      {
        nameKey: "place.bodhgaya.museum.name",
        descKey: "place.bodhgaya.museum.desc",
        img: archaeologicalMuseum,
        assetName: "Archaeological Museum.jpg",
        alt: "Archaeological Museum in Bodh Gaya",
      },
    ],
  },
  prayagraj: {
    title: "Prayagraj",
    places: [
      {
        nameKey: "place.prayagraj.sangam.name",
        descKey: "place.prayagraj.sangam.desc",
        img: triveniSangam,
        assetName: "Triveni Sangam.jpg",
        alt: "Triveni Sangam in Prayagraj",
      },
      {
        nameKey: "place.prayagraj.fort.name",
        descKey: "place.prayagraj.fort.desc",
        img: allahabadFort,
        assetName: "Allahabad Fort.jpg",
        alt: "Allahabad Fort in Prayagraj",
      },
      {
        nameKey: "place.prayagraj.anand.name",
        descKey: "place.prayagraj.anand.desc",
        img: anandBhavan,
        assetName: "Anand Bhavan.jpg",
        alt: "Anand Bhavan in Prayagraj",
      },
      {
        nameKey: "place.prayagraj.hanuman.name",
        descKey: "place.prayagraj.hanuman.desc",
        img: hanumanMandir,
        assetName: "Hanuman Mandir (Bade Hanumanji).jpg",
        alt: "Hanuman Mandir Bade Hanumanji in Prayagraj",
      },
      {
        nameKey: "place.prayagraj.khusro.name",
        descKey: "place.prayagraj.khusro.desc",
        img: khusroBagh,
        assetName: "Khusro Bagh.jpg",
        alt: "Khusro Bagh in Prayagraj",
      },
      {
        nameKey: "place.prayagraj.cathedral.name",
        descKey: "place.prayagraj.cathedral.desc",
        img: allSaintsCathedral,
        assetName: "All Saints Cathedral.jpg",
        alt: "All Saints Cathedral in Prayagraj",
      },
      {
        nameKey: "place.prayagraj.alopi.name",
        descKey: "place.prayagraj.alopi.desc",
        img: alopiDeviTemple,
        assetName: "Alopi Devi Temple.jpg",
        alt: "Alopi Devi Temple in Prayagraj",
      },
      {
        nameKey: "place.prayagraj.mankameshwar.name",
        descKey: "place.prayagraj.mankameshwar.desc",
        img: mankameshwarTemple,
        assetName: "Mankameshwar Temple.jpg",
        alt: "Mankameshwar Temple in Prayagraj",
      },
      {
        nameKey: "place.prayagraj.shankar.name",
        descKey: "place.prayagraj.shankar.desc",
        img: shankarVimanMandapam,
        assetName: "Shankar Viman Mandapam.jpg",
        alt: "Shankar Viman Mandapam in Prayagraj",
      },
      {
        nameKey: "place.prayagraj.kumbh.name",
        descKey: "place.prayagraj.kumbh.desc",
        img: kumbhMelaGrounds,
        assetName: "Kumbh Mela Grounds.jpg",
        alt: "Kumbh Mela Grounds in Prayagraj",
      },
    ],
  },
  ayodhya: {
    title: "Ayodhya",
    places: [
      {
        nameKey: "place.ayodhya.ram.name",
        descKey: "place.ayodhya.ram.desc",
        img: ramMandir,
        assetName: "Ram Mandir.jpg",
        alt: "Ram Mandir in Ayodhya",
      },
      {
        nameKey: "place.ayodhya.hanuman_garhi.name",
        descKey: "place.ayodhya.hanuman_garhi.desc",
        img: hanumanGarhi,
        assetName: "Hanuman Garhi.jpg",
        alt: "Hanuman Garhi in Ayodhya",
      },
      {
        nameKey: "place.ayodhya.kanak.name",
        descKey: "place.ayodhya.kanak.desc",
        img: kanakBhawan,
        assetName: "Kanak Bhawan.jpg",
        alt: "Kanak Bhawan in Ayodhya",
      },
      {
        nameKey: "place.ayodhya.nageshwarnath.name",
        descKey: "place.ayodhya.nageshwarnath.desc",
        img: nageshwarnathTemple,
        assetName: "Nageshwarnath Temple.jpg",
        alt: "Nageshwarnath Temple in Ayodhya",
      },
      {
        nameKey: "place.ayodhya.paidi.name",
        descKey: "place.ayodhya.paidi.desc",
        img: ramKiPaidi,
        assetName: "Ram Ki Paidi.jpg",
        alt: "Ram Ki Paidi in Ayodhya",
      },
      {
        nameKey: "place.ayodhya.saryu.name",
        descKey: "place.ayodhya.saryu.desc",
        img: saryuRiver,
        assetName: "Saryu River.jpg",
        alt: "Saryu River in Ayodhya",
      },
      {
        nameKey: "place.ayodhya.treta.name",
        descKey: "place.ayodhya.treta.desc",
        img: tretaKeThakur,
        assetName: "Treta Ke Thakur.jpg",
        alt: "Treta Ke Thakur in Ayodhya",
      },
      {
        nameKey: "place.ayodhya.dashrath.name",
        descKey: "place.ayodhya.dashrath.desc",
        img: dashrathMahal,
        assetName: "Dashrath Mahal.jpg",
        alt: "Dashrath Mahal in Ayodhya",
      },
      {
        nameKey: "place.ayodhya.guptar.name",
        descKey: "place.ayodhya.guptar.desc",
        img: guptarGhat,
        assetName: "Guptar Ghat.jpg",
        alt: "Guptar Ghat in Ayodhya",
      },
      {
        nameKey: "place.ayodhya.bharat.name",
        descKey: "place.ayodhya.bharat.desc",
        img: bharatKund,
        assetName: "Bharat Kund.jpg",
        alt: "Bharat Kund in Ayodhya",
      },
    ],
  },
};
