import { PropertyProps } from "@/interfaces";
import { ReviewProps } from "@/interfaces";

export  const REVIEWS: ReviewProps[] = [
  {
    image: "/assets/person2.jpg", 
    name: "Kerry",
    yearsOnALX: 3,
    date: "March 2024",
    tripType: "Family trip",
    review: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking."
  },
  {
    image: "/assets/person3.jpg",
    name: "Pooja",
    yearsOnALX: 1,
    date: "March 2024",
    tripType: "Family trip",
    review: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures."
  },
  {
    image: "/assets/person1.jpg",
    name: "Ben",
    yearsOnALX: 1,
    date: "August 2023",
    tripType: "Family trip",
    review: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking."
  },
  {
    image: "/assets/person4.jpg",
    name: "Marnie",
    yearsOnALX: 5,
    date: "January 2023",
    tripType: "Family trip",
    review: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures."
  }
];


export const PROPERTYLISTINGSAMPLE: PropertyProps [] = [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "/assets/image2.png",
    discount: "",
    description: "Feel like exploring the best of  Seminyak, Bali ? Start your day with a morning yoga session by your private pool before heading out to the chic boutiques nearby. Weave your way through the lively streets to find hidden artisan coffee shops or take a short walk to the beach for a sunset swim. When you're ready to chill with friends, the spacious outdoor lounge awaits. Spend the night entertaining in the open-air dining area, sipping cocktails under the stars, and enjoying the serene tranquility of your luxury villa."
  },
  {
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA"
    },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "/assets/image9.png",
    discount: "30",
    description: "Feel like exploring the  Rocky Mountains of Aspen ? Start the day with a thrilling ski run or a hike on one of the nearby trails, taking in the crisp mountain air and stunning  mountain views. Weave your way through the quaint town to find a warm lunch spot or return to the chalet for some quiet time. When you're ready to chill with friends, the living room fireplace awaits. Spend the night entertaining in the rustic-chic dining area, sipping hot cocoa, and gazing out over the snowy peaks from the comfort of the heated indoor space."
  },
  {
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA"
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "/assets/image4.png",
    discount: "",
    description: "Feel like exploring the warmth of  Palm Springs ? Start the day with a gentle walk with your  pet  through the serene desert landscape, watching the sun rise over the mountains. Weave your way around the neighborhood to find mid-century modern architecture or relax in a sunbeam by the patio. When you're ready to chill with friends, the shaded courtyard awaits. Spend the night entertaining under the clear  desert sky , sipping cool drinks, and gazing out over the incredible, star-filled vista."
  },
  {
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA"
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "/assets/image7.png",
    discount: "15",
    description: "Feel like exploring the endless energy of  New York City ? Start the day with a stroll through Central Park or a quick trip to a world-class museum, all easily accessible from your central location. Weave your way through the bustling avenues to find the best local eateries or catch a Broadway show. When you're ready to chill with friends, the spectacular penthouse views await. Spend the night entertaining in the sleek, modern lounge, sipping champagne, and gazing out over the incredible tapestry of  city lights  far below."
  },
  {
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand"
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6"
    },
    image: "/assets/image5.png",
    discount: "20",
    description: "Feel like exploring the adventure hub of  Queenstown, New Zealand ? Start the day with a paddle down the river using the  free kayaks  from your  private dock . Weave your way along the water's edge or venture into the stunning surrounding hills for a great hike. When you're ready to chill with friends, the covered deck awaits. Spend the night entertaining with a barbecue, sipping locally sourced wine, and listening to the gentle sounds of the river flowing past your charming cabin."
  },
  {
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10"
    },
    image: "/assets/image6.png",
    discount: "",
    description: "Feel like exploring the exclusive side of  Bali ? Start the day with a freshly prepared breakfast by your  private chef  before stepping directly onto the  beachfront  for a morning walk. Weave your way through the tropical gardens or spend the afternoon lounging by the infinity pool overlooking the ocean. When you're ready to chill with friends, the expansive villa patio awaits. Spend the night entertaining a large group in the open-air dining pavilion, sipping fine wine, and gazing out over the incredible, moonlit sea."
  },
  {
    name: "Lakeside Chalet",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada"
    },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "/assets/image4.png",
    discount: "10",
    description: "Feel like exploring the rugged beauty of  Banff, Canada ? Start the day with a hike on one of the spectacular, nearby  hiking trails  with unparalleled  mountain views . Weave your way through the pines down to the water's edge for a quiet moment by the  lakeside . When you're ready to chill with friends, the enclosed sunroom awaits. Spend the night entertaining around the stone hearth, sipping local craft beer, and enjoying the cozy warmth of the wooden chalet."
  },
  {
    name: "Tropical Garden Villa",
    address: {
      state: "Koh Samui",
      city: "Surat Thani",
      country: "Thailand"
    },
    rating: 4.80,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6"
    },
    image: "/assets/image9.png",
    discount: "25",
    description: "Feel like exploring the natural beauty of  Koh Samui, Thailand ? Start the day with a peaceful breakfast surrounded by the vibrant plants of your private  tropical garden . Weave your way out to discover the island's famous beaches or explore a local market, knowing your car is secure with  free parking . When you're ready to chill with friends, the covered terrace awaits. Spend the night entertaining with a Thai meal, sipping exotic drinks, and enjoying the sweet scents of the jasmine and plumeria."
  },
  {
    name: "Urban Loft",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany"
    },
    rating: 4.60,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "/assets/image10.png",
    discount: "",
    description: "Feel like exploring the history and nightlife of  Berlin ? Start the day with a walk to the Brandenburg Gate or check out an art gallery, just steps from your  city center  loft. Weave your way through the vibrant districts using the excellent public transport or catch up on work using the  free WiFi . When you're ready to chill with friends, the bright, airy living space awaits. Spend the night entertaining in the open-plan kitchen, sipping drinks, and planning your next day of urban adventure."
  },
  {
    name: "Secluded Forest Cabin",
    address: {
      state: "Whistler",
      city: "British Columbia",
      country: "Canada"
    },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "/assets/image5.png",
    discount: "40",
    description: "Feel like exploring the tranquil wilderness of  Whistler ? Start the day with a hike through the surrounding  secluded forest , breathing in the clean mountain air. Weave your way down to a nearby creek or spend the afternoon reading by the window, enjoying the absolute quiet. When you're ready to chill with friends, the outdoor  hot tub  awaits. Spend the night entertaining on the private deck, sipping warm cider, and gazing up at the incredible, star-dusted Canadian sky."
  },
  {
    name: "Cliffside Villa",
    address: {
      state: "Amalfi",
      city: "Salerno",
      country: "Italy"
    },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "/assets/image12.png",
    discount: "50",
    description: "Feel like exploring the dramatic beauty of the  Amalfi Coast ? Start the day with a refreshing dip in your  infinity pool , seemingly suspended between the sky and the sea. Weave your way down the picturesque paths to a hidden cove or simply relax on the terrace and enjoy the breathtaking  sea view . When you're ready to chill with friends, the elegant covered loggia awaits. Spend the night entertaining a private dinner, sipping fine Italian wine, and watching the lights twinkle across the Mediterranean from your  cliffside  perch."
  },
  {
    name: "Coastal Escape Villa",
    address: {
      state: "Noosa",
      city: "Queensland",
      country: "Australia"
    },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "/assets/image13.png",
    discount: "",
    description: "Feel like exploring the famous sands of  Noosa, Australia ? Start the day with a long walk on the  beachfront  with your  pet , catching the perfect waves. Weave your way through the national park trails or visit the popular Hastings Street for boutique shopping. When you're ready to chill with friends, the spacious outdoor entertaining area awaits. Spend the night barbecuing local seafood, sipping Australian bubbly, and enjoying the sound of the ocean just a few steps from your door."
  },
  {
    name: "Historical Villa",
    address: {
      state: "Florence",
      city: "Tuscany",
      country: "Italy"
    },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "/assets/image15.png",
    discount: "35",
    description: "Feel like exploring the Renaissance heart of  Florence ? Start the day with a delicious  free breakfast  in the grand dining room of this  historical villa . Weave your way through the winding streets to see the Duomo or the Uffizi Gallery, knowing you have a comfortable and authentic retreat awaiting your return. When you're ready to chill with friends, the quiet inner courtyard awaits. Spend the night entertaining in a setting steeped in centuries of Italian history, sipping a digestivo, and planning your next cultural adventure."
  },
  {
    name: "Downtown Apartment",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan"
    },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2"
    },
    image: "/assets/image16.png",
    discount: "",
    description: "Feel like exploring the incredible dynamism of  Tokyo ? Start the day with a fast trip via the excellent  public transport  system to visit Shibuya crossing or a peaceful temple. Weave your way through the neon-lit streets or spend a quiet moment catching up on communications with the  free WiFi . When you're ready to chill with friends, the streamlined apartment living area awaits. Spend the night entertaining with a take-out ramen feast, sipping sake, and marveling at the sheer energy of the  downtown  metropolis."
  },
  {
    name: "Luxury Safari Lodge",
    address: {
      state: "Serengeti",
      city: "Mara",
      country: "Tanzania"
    },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "/assets/image18.png",
    discount: "20",
    description: "Feel like exploring the immense plains of the  Serengeti ? Start the day with an early morning  guided tour  to spot the 'Big Five,' returning to a freshly prepared  free breakfast  at the lodge. Weave your way back to your private deck to watch the wildlife grazing or spend the afternoon relaxing in the communal lounge. When you're ready to chill with friends, the firepit area awaits. Spend the night entertaining under the vast African sky, sharing stories of the  safari  adventure, and listening to the sounds of the night."
  },
  {
    name: "Countryside Cottage",
    address: {
      state: "Cotswolds",
      city: "Gloucestershire",
      country: "UK"
    },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-4"
    },
    image: "/assets/image17.png",
    discount: "25",
    description: "Feel like exploring the rolling hills of the  Cotswolds ? Start the day with a gentle hike through the picturesque  countryside , passing thatched-roof homes and ancient stone walls. Weave your way to a traditional English pub for lunch or browse the local artisan shops in the village. When you're ready to chill with friends, the warm, stone  fireplace  awaits. Spend the night entertaining inside this cozy cottage, sipping tea or a pint, and enjoying the classic comfort of a UK retreat."
  },
  {
    name: "Riverfront Mansion",
    address: {
      state: "Paris",
      city: "Île-de-France",
      country: "France"
    },
    rating: 4.86,
    category: ["Riverfront", "Private Garden", "Self Checkin"],
    price: 5000,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8"
    },
    image: "/assets/image2.png",
    discount: "30",
    description: "Feel like exploring the romantic charm of  Paris ? Start the day with a coffee and pastry in your  private garden , listening to the gentle sounds of the nearby river. Weave your way along the  riverfront  to explore the major landmarks or find a secluded spot for a picnic. When you're ready to chill with friends, the elegant drawing-room awaits. Spend the night entertaining guests in grand style, sipping French wine, and enjoying the luxurious tranquility of this stately mansion."
  },
  {
    name: "Ski Chalet",
    address: {
      state: "Zermatt",
      city: "Valais",
      country: "Switzerland"
    },
    rating: 4.75,
    category: ["Mountain View", "Ski Access", "Fireplace"],
    price: 3900,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "/assets/image4.png",
    discount: "",
    description: "Feel like exploring the epic slopes of  Zermatt, Switzerland ? Start the day with an immediate run down the mountain thanks to the direct  ski access  from your chalet door. Weave your way across the challenging runs or take a gondola up for breathtaking  mountain views  of the Matterhorn. When you're ready to chill with friends, the roaring  fireplace  awaits. Spend the night entertaining with a fondue dinner, sipping strong Swiss wine, and recounting the adventures of the day on the slopes."
  },
  {
    name: "Island Paradise Villa",
    address: {
      state: "Mahe",
      city: "Victoria",
      country: "Seychelles"
    },
    rating: 4.98,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 6500,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10"
    },
    image: "/assets/image8.png",
    discount: "60",
    description: "Feel like exploring the absolute luxury of the  Seychelles ? Start the day with a personalized meal prepared by your  chef , followed by a swim in your sparkling  private pool  overlooking the ocean. Weave your way along the white sands of the  beachfront  or snorkel in the crystal-clear waters just steps away. When you're ready to chill with friends, the expansive terrace awaits. Spend the night entertaining a large group with tropical drinks, watching the sunset paint the sky, and enjoying the pure bliss of island paradise."
  },
  {
    name: "Clifftop Retreat",
    address: {
      state: "Cape Town",
      city: "W. Cape",
      country: "South Africa"
    },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "/assets/image6.png",
    discount: "",
    description: "Feel like exploring the dramatic coastline of  Cape Town ? Start the day with a swim in your  private pool  while taking in the endless  ocean view  stretching to the horizon. Weave your way down to the waterfront for a taste of the city's incredible food scene or enjoy the convenience of  self-check-in  after a day of sightseeing. When you're ready to chill with friends, the sheltered outdoor area awaits. Spend the night entertaining with a braai (BBQ), sipping incredible South African wine, and watching the waves crash below your  clifftop  haven."
  }
];