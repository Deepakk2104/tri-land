/* ============ Azerbaijan Travel Packages — shared data ============ */
window.ATP_DATA = (function(){

const PACKAGES = [
  {
    id:'weekend-baku', cat:'Cultural', title:'Weekend Baku Escape', dur:'2N / 3D', nights:2, group:'1–6', price:'$349', priceNum:349, per:'/ person', rating:4.7, reviews:64, popular:true,
    desc:'A fast, vivid first taste of Baku — Old City, Flame Towers and the seafront boulevard.',
    longDesc:'Short on time but craving something different? This long-weekend escape packs the essential Baku into three days — the UNESCO-listed Old City, the iconic Flame Towers, and an evening stroll along the Caspian boulevard. Ideal for a quick getaway from the Gulf or India.',
    highlights:['UNESCO Old City (Icherisheher)','Flame Towers & Highland Park views','Caspian seafront boulevard','Nizami Street & local bazaar'],
    itinerary:[
      {t:'Arrival & Old City', d:'Airport pickup and hotel check-in. Evening walking tour of Icherisheher — the Maiden Tower and Palace of the Shirvanshahs — followed by dinner in the Old City.'},
      {t:'Modern Baku', d:'Highland Park for the Flame Towers panorama, the Heydar Aliyev Center, then the seafront boulevard. Free evening on Nizami Street.'},
      {t:'Departure', d:'Souvenir time at the local bazaar and airport drop-off, timed to your flight.'}
    ]
  },
  {
    id:'baku-city', cat:'Cultural', title:'Baku City Package', dur:'3N / 4D', nights:3, group:'1–6', price:'$499', priceNum:499, per:'/ person', rating:4.8, reviews:88, popular:false,
    desc:'The capital in full — UNESCO Old City, modern Baku and a Gobustan day trip.',
    longDesc:'Four days to know Baku properly. Beyond the Old City and Flame Towers, you head out to Gobustan for prehistoric petroglyphs and bubbling mud volcanoes, and visit the ancient Ateshgah fire temple — the literal heart of the Land of Fire.',
    highlights:['UNESCO Old City','Gobustan petroglyphs & mud volcanoes','Ateshgah Fire Temple & Yanardag','Heydar Aliyev Center'],
    itinerary:[
      {t:'Arrival', d:'Airport pickup, check-in, and an orientation walk along the boulevard.'},
      {t:'Old & New Baku', d:'Full-day city tour: Icherisheher, Maiden Tower, Flame Towers viewpoint and the Heydar Aliyev Center.'},
      {t:'Gobustan & Fire', d:'Day trip to Gobustan petroglyphs and mud volcanoes, then Ateshgah Fire Temple and the Yanardag burning mountain.'},
      {t:'Departure', d:'Free morning for shopping, then airport drop-off.'}
    ]
  },
  {
    id:'baku-gabala', cat:'Cultural', title:'Baku + Gabala', dur:'4N / 5D', nights:4, group:'1–8', price:'$699', priceNum:699, per:'/ person', rating:4.8, reviews:51, popular:false,
    desc:'City and mountains — pair cosmopolitan Baku with the alpine resort town of Gabala.',
    longDesc:'The best of two worlds: two days in the capital and two in the green, mountainous north. Gabala brings cable cars, waterfalls and crisp alpine air — a refreshing contrast to the Caspian capital.',
    highlights:['Baku city highlights','Gabala cable car & Tufandag','Nohur Lake','Seven Beauties waterfall'],
    itinerary:[
      {t:'Arrival', d:'Pickup and Baku evening orientation.'},
      {t:'Baku City', d:'Old City, Flame Towers and Heydar Aliyev Center.'},
      {t:'Drive to Gabala', d:'Scenic drive north, stopping at Shamakhi’s Juma Mosque. Evening at leisure in Gabala.'},
      {t:'Gabala', d:'Tufandag cable car, Nohur Lake and the Seven Beauties waterfall.'},
      {t:'Return & Departure', d:'Drive back to Baku and airport drop-off.'}
    ]
  },
  {
    id:'halal', cat:'Halal', title:'Azerbaijan Halal Tour', dur:'5N / 6D', nights:5, group:'2–8', price:'$849', priceNum:849, per:'/ person', rating:4.9, reviews:73, popular:true,
    desc:'Confirmed halal dining and prayer-friendly itinerary across Baku and the regions.',
    longDesc:'Built for Muslim travellers who want zero guesswork. Every restaurant is confirmed halal in advance, the itinerary is paced around prayer times, and stays are family-safe. Covers Baku, Gabala and the key fire sites.',
    highlights:['100% confirmed halal dining','Prayer-time-friendly schedule','Baku + Gabala','Family-safe accommodation'],
    itinerary:[
      {t:'Arrival', d:'Pickup, check-in at a halal-friendly hotel, welcome dinner.'},
      {t:'Baku Old & New', d:'Old City, Flame Towers, Heydar Aliyev Center with prayer breaks built in.'},
      {t:'Fire & Gobustan', d:'Ateshgah Fire Temple, Yanardag and Gobustan.'},
      {t:'To Gabala', d:'Scenic drive north; Juma Mosque stop in Shamakhi.'},
      {t:'Gabala', d:'Cable car, Nohur Lake and mountain air.'},
      {t:'Departure', d:'Return to Baku and airport drop-off.'}
    ]
  },
  {
    id:'complete', cat:'Cultural', title:'Azerbaijan Complete Tour', dur:'5N / 6D', nights:5, group:'1–8', price:'$899', priceNum:899, per:'/ person', rating:4.8, reviews:120, popular:true,
    desc:'Baku, Gabala and Shahdag in one — our most-booked all-rounder itinerary.',
    longDesc:'Our flagship. Six days covering the cosmopolitan capital, the fire temples, the green mountains of Gabala and the dramatic peaks of Shahdag. The single best introduction to the whole country.',
    highlights:['Baku, Gabala & Shahdag','Fire temples & Gobustan','Cable cars & alpine scenery','Most-booked itinerary'],
    itinerary:[
      {t:'Arrival', d:'Pickup, check-in and boulevard orientation.'},
      {t:'Baku City', d:'Old City, Flame Towers and the Heydar Aliyev Center.'},
      {t:'Fire & Gobustan', d:'Ateshgah, Yanardag and Gobustan petroglyphs.'},
      {t:'Gabala', d:'Drive north; Tufandag cable car and Nohur Lake.'},
      {t:'Shahdag', d:'Mountain resort day — views, walks and cable cars.'},
      {t:'Departure', d:'Return to Baku and airport drop-off.'}
    ]
  },
  {
    id:'ski', cat:'Ski', title:'Ski & Snow — Shahdag', dur:'5N / 6D', nights:5, group:'2–8', price:'$799', priceNum:799, per:'/ person', rating:4.7, reviews:38, popular:false,
    desc:'First snow or fresh powder at Shahdag, with cosy stays and city time in Baku.',
    longDesc:'For many of our Gulf and Indian travellers, this is their first time seeing snow. Shahdag is Azerbaijan’s premier ski resort — gentle slopes for beginners, proper runs for the experienced, and toboggan fun for everyone. Bookended with two days in Baku.',
    highlights:['Shahdag ski resort','Beginner & intermediate slopes','Equipment rental support','Baku city time'],
    itinerary:[
      {t:'Arrival', d:'Pickup and Baku check-in.'},
      {t:'Baku City', d:'Old City and Flame Towers before heading to the mountains.'},
      {t:'To Shahdag', d:'Drive to the resort; gear fitting and easy first runs.'},
      {t:'Ski Day', d:'Full day on the slopes with optional instructor.'},
      {t:'Snow & Return', d:'Morning toboggan time, then drive back to Baku.'},
      {t:'Departure', d:'Airport drop-off.'}
    ]
  },
  {
    id:'family', cat:'Family', title:'Azerbaijan Family Package', dur:'6N / 7D', nights:6, group:'Family of 4', price:'$1,099', priceNum:1099, per:'/ family', rating:4.9, reviews:42, popular:false,
    desc:'Paced for kids — cable cars, mud volcanoes, parks and easy halal-friendly food.',
    longDesc:'Designed around families: shorter driving days, plenty of hands-on fun (mud volcanoes, cable cars, parks), flexible meal stops and family rooms throughout. Priced per family of four.',
    highlights:['Kid-friendly pacing','Cable cars & mud volcanoes','Parks & interactive museums','Family rooms throughout'],
    itinerary:[
      {t:'Arrival', d:'Pickup and check-in; gentle evening boulevard walk.'},
      {t:'Baku Fun', d:'Old City, funicular and Highland Park views.'},
      {t:'Gobustan', d:'Mud volcanoes and petroglyphs — a kids’ favourite.'},
      {t:'To Gabala', d:'Scenic drive with stops; evening at leisure.'},
      {t:'Gabala', d:'Cable car, lake and open-air fun.'},
      {t:'Free Day', d:'Flexible day for rest, pool or shopping.'},
      {t:'Departure', d:'Return to Baku and airport drop-off.'}
    ]
  },
  {
    id:'honeymoon', cat:'Honeymoon', title:'Honeymoon Package', dur:'5N / 6D', nights:5, group:'Couple', price:'$1,299', priceNum:1299, per:'/ couple', rating:5.0, reviews:57, popular:true,
    desc:'Caspian seafronts, rooftop dinners and mountain backdrops — romantic and unique.',
    longDesc:'A honeymoon nobody back home has done. Think rooftop dinners over the Caspian, a private cable car in Gabala, candlelit evenings and effortless logistics. Romantic, unique and refreshingly uncrowded — priced per couple.',
    highlights:['Rooftop & candlelit dinners','Private transfers throughout','Gabala cable car for two','Honeymoon room setup'],
    itinerary:[
      {t:'Arrival', d:'Private pickup, romantic hotel check-in and welcome dinner.'},
      {t:'Baku for Two', d:'Old City, Flame Towers and a rooftop Caspian dinner.'},
      {t:'Fire & Stars', d:'Ateshgah Fire Temple and Yanardag, evening at leisure.'},
      {t:'To Gabala', d:'Scenic drive north to the mountains.'},
      {t:'Gabala', d:'Cable car for two, Nohur Lake and a quiet mountain evening.'},
      {t:'Departure', d:'Return to Baku and airport drop-off.'}
    ]
  },
  {
    id:'grand', cat:'Cultural', title:'Grand Azerbaijan Tour', dur:'7N / 8D', nights:7, group:'1–8', price:'$1,199', priceNum:1199, per:'/ person', rating:4.9, reviews:64, popular:false,
    desc:'The deep dive — Baku, Gabala, Sheki, Shahdag and Gobustan over eight days.',
    longDesc:'For travellers who want the whole country. Eight days threading the capital, the silk town of Sheki with its mirrored Khan’s Palace, the green mountains of Gabala, the peaks of Shahdag and the ancient fire of Gobustan.',
    highlights:['Baku, Gabala, Sheki & Shahdag','Sheki Khan’s Palace','Fire temples & Gobustan','Most comprehensive route'],
    itinerary:[
      {t:'Arrival', d:'Pickup and Baku check-in.'},
      {t:'Baku City', d:'Old City, Flame Towers and Heydar Aliyev Center.'},
      {t:'Fire & Gobustan', d:'Ateshgah, Yanardag and Gobustan.'},
      {t:'To Sheki', d:'Drive via Shamakhi; evening in the silk town.'},
      {t:'Sheki', d:'Khan’s Palace, caravanserai and old craft workshops.'},
      {t:'To Gabala', d:'Mountain drive; cable car and Nohur Lake.'},
      {t:'Shahdag', d:'Peaks, walks and alpine air.'},
      {t:'Departure', d:'Return to Baku and airport drop-off.'}
    ]
  },
  {
    id:'group', cat:'Group', title:'Group Tour (8+)', dur:'5N / 6D', nights:5, group:'8+ people', price:'$649', priceNum:649, per:'/ person', rating:4.7, reviews:29, popular:false,
    desc:'Best per-person value for friends, clubs and extended families travelling together.',
    longDesc:'Travelling as a crowd? This is our best per-person value. A shared coach, a dedicated guide and the country’s highlights — Baku, the fire sites and Gabala — built for groups of eight or more.',
    highlights:['Best per-person value','Dedicated group guide','Private coach','Baku + Gabala highlights'],
    itinerary:[
      {t:'Arrival', d:'Group pickup and check-in.'},
      {t:'Baku City', d:'Old City, Flame Towers and the boulevard.'},
      {t:'Fire & Gobustan', d:'Ateshgah, Yanardag and Gobustan.'},
      {t:'To Gabala', d:'Scenic drive and cable car.'},
      {t:'Gabala', d:'Lake, waterfall and free time.'},
      {t:'Departure', d:'Return to Baku and airport drop-off.'}
    ]
  }
];

const INCLUSIONS = [
  'Airport pickup & drop-off (private transfers)',
  'Hotel accommodation with daily breakfast',
  'English-speaking local guide',
  'All sightseeing & entrance fees per itinerary',
  'Air-conditioned private transport',
  '24/7 in-country emergency contact'
];
const EXCLUSIONS = [
  'International flights',
  'Azerbaijan e-Visa fee (guidance provided)',
  'Lunches & dinners unless specified',
  'Personal expenses & tips',
  'Travel insurance',
  'Optional activities'
];
const FAQS = [
  {q:'Do I need a visa for Azerbaijan?', a:'Most nationalities — including India and the GCC — are eligible for the ASAN e-Visa or visa-on-arrival. We provide step-by-step guidance for a small service fee and confirm your eligibility before you book.'},
  {q:'How and when do I pay?', a:'A deposit secures your dates; the balance is due before arrival. We accept cards via Stripe and Razorpay, and bank transfer. You’ll get a clear written quote first — no hidden costs.'},
  {q:'Can the itinerary be customised?', a:'Absolutely. Every package is a starting point. Tell us your dates, group and interests on WhatsApp and we’ll tailor it — add nights, swap cities, or combine packages.'},
  {q:'Is the trip suitable for families / Muslim travellers?', a:'Yes. We offer family-paced and fully halal-friendly versions with confirmed halal dining and prayer-friendly scheduling. Just let us know your needs.'},
  {q:'What’s your cancellation policy?', a:'Flexible. Most bookings are refundable up to a set window before travel. The exact terms are stated on your written quote before any payment.'}
];

const DESTINATIONS = [
  {id:'baku', name:'Baku', sub:'Caspian capital · UNESCO Old City', big:true},
  {id:'gabala', name:'Gabala', sub:'Alpine resort town'},
  {id:'shahdag', name:'Shahdag', sub:'Ski & snow'},
  {id:'sheki', name:'Sheki', sub:'Silk Road heritage'},
  {id:'gobustan', name:'Gobustan', sub:'Petroglyphs & mud volcanoes'},
  {id:'lahij', name:'Lahij', sub:'Coppersmith mountain village'}
];

const TESTIMONIALS = [
  {q:'They confirmed every halal restaurant before we left and replied on WhatsApp within minutes. Easiest international trip we have planned.', n:'Sara K.', c:'Dubai, UAE', col:'#16514F'},
  {q:'Booked our honeymoon and it felt completely bespoke — rooftop dinner in Baku, cable car in Gabala. Nobody back home had been!', n:'Aman & Priya', c:'Mumbai, India', col:'#B5392E'},
  {q:'The visa guidance alone was worth it. Clear steps, honest answers, and the ground guide in Baku was excellent.', n:'Thomas R.', c:'Manchester, UK', col:'#C2632A'},
  {q:'First time my kids saw snow — Shahdag was magical and the pacing was perfect for a family of four.', n:'Fatima A.', c:'Riyadh, KSA', col:'#0E3B3C'},
  {q:'Transparent pricing, no surprises, and a real human on chat the whole way. Highly recommend.', n:'Daniel & Mei', c:'Singapore', col:'#6b4e9e'},
  {q:'We were a group of twelve and everything ran like clockwork. Great value per person.', n:'Rohit S.', c:'Delhi, India', col:'#C2392A'}
];

const CATS = ['All','Cultural','Honeymoon','Halal','Ski','Family','Group'];
const TAG_COLORS = {Cultural:'#0E3B3C',Honeymoon:'#B5392E',Halal:'#16514F',Ski:'#3a6ea5',Family:'#C2632A',Group:'#6b4e9e'};

return {PACKAGES, INCLUSIONS, EXCLUSIONS, FAQS, DESTINATIONS, TESTIMONIALS, CATS, TAG_COLORS};
})();

/* ---------- shared helpers ---------- */
window.ATP = {
  hexA(hex,a){const n=parseInt(hex.slice(1),16);return `rgba(${n>>16&255},${n>>8&255},${n&255},${a})`;},
  byId(id){return window.ATP_DATA.PACKAGES.find(p=>p.id===id);},
  qs(k){return new URLSearchParams(location.search).get(k);}
};
