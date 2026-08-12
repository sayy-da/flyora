import { client } from './client'
import {
  allDestinationsQuery,
  destinationBySlugQuery,
  allToursQuery,
  tourBySlugQuery,
  toursByDestinationQuery,
  toursByCategoryQuery,
  travelServicesQuery,
  serviceBySlugQuery,
  tourCategoriesQuery,
  categoryBySlugQuery,
  allTestimonialsQuery,
} from './queries'

export interface TourPackage {
  _id: string
  title: string
  slug: string
  price: number
  discountPrice?: number
  duration: { days: number; nights: number }
  tag?: string
  overview: string
  coverImage: string
  gallery?: string[]
  itinerary?: { dayNumber: number; title: string; description: string; meals?: string }[]
  includedServices?: string[]
  excludedServices?: string[]
  customizable?: boolean
  isFeatured?: boolean
  categoryName?: string
  categorySlug?: string
  destinationName?: string
  destinationSlug?: string
}

export interface Destination {
  _id: string
  name: string
  slug: string
  country: string
  flag?: string
  region: 'Asia' | 'Europe' | 'Tropical' | 'Americas' | 'Africa' | 'Middle East' | string
  tag?: string
  image: string
  rating: number
  reviewsCount: number
  toursCount: number
  startingPrice: number
  description: string
  isPopular?: boolean
}

export interface TravelService {
  _id: string
  title: string
  slug: string
  iconName: string
  shortDescription: string
  fullDescription?: any
  serviceImage?: string
  features: string[]
  ctaText?: string
}

export interface Category {
  _id: string
  name: string
  slug: string
  image?: string
  description?: string
}

export interface Testimonial {
  _id: string
  clientName: string
  clientAvatar?: string
  location?: string
  rating: number
  reviewText: string
  tourTitle?: string
}

// ---------------------------------------------------------------------------
// Fallback Mock Data matching Sanity Schemas perfectly
// ---------------------------------------------------------------------------

export const FALLBACK_DESTINATIONS: Destination[] = [
  {
    _id: 'dest-1',
    name: 'Kyoto',
    slug: 'kyoto',
    country: 'Japan',
    flag: '🇯🇵',
    region: 'Asia',
    tag: 'Cultural Classic',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    rating: 4.95,
    reviewsCount: 142,
    toursCount: 18,
    startingPrice: 1850,
    description: 'Immerse in ancient temples, bamboo groves, tea ceremonies, and exquisite traditional ryokan hospitality.',
    isPopular: true,
  },
  {
    _id: 'dest-2',
    name: 'Santorini',
    slug: 'santorini',
    country: 'Greece',
    flag: '🇬🇷',
    region: 'Europe',
    tag: 'Coastal Luxury',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    rating: 4.92,
    reviewsCount: 210,
    toursCount: 24,
    startingPrice: 2200,
    description: 'Whitewashed cliffside villas, unforgettable Aegean sunsets, and volcanic vineyard wine tours.',
    isPopular: true,
  },
  {
    _id: 'dest-3',
    name: 'Bali',
    slug: 'bali',
    country: 'Indonesia',
    flag: '🇮🇩',
    region: 'Tropical',
    tag: 'Island Escape',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    rating: 4.88,
    reviewsCount: 189,
    toursCount: 32,
    startingPrice: 1250,
    description: 'Cascading rice terraces, sacred water temples, surf beaches, and holistic wellness retreats.',
    isPopular: true,
  },
  {
    _id: 'dest-4',
    name: 'Swiss Alps',
    slug: 'swiss-alps',
    country: 'Switzerland',
    flag: '🇨🇭',
    region: 'Europe',
    tag: 'Alpine Luxury',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    rating: 4.97,
    reviewsCount: 96,
    toursCount: 14,
    startingPrice: 3400,
    description: 'Panoramic mountain railways, glacier peaks, Zermatt chalets, and world-class alpine adventures.',
    isPopular: true,
  },
  {
    _id: 'dest-5',
    name: 'Marrakech',
    slug: 'marrakech',
    country: 'Morocco',
    flag: '🇲🇦',
    region: 'Africa',
    tag: 'Exotic Heritage',
    image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=1200&q=80',
    rating: 4.86,
    reviewsCount: 115,
    toursCount: 16,
    startingPrice: 1450,
    description: 'Vibrant medina souks, ornate luxury riads, spice markets, and Sahara desert stargazing.',
    isPopular: true,
  },
  {
    _id: 'dest-6',
    name: 'Maui',
    slug: 'maui',
    country: 'United States',
    flag: '🇺🇸',
    region: 'Americas',
    tag: 'Tropical Paradise',
    image: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=1200&q=80',
    rating: 4.91,
    reviewsCount: 178,
    toursCount: 20,
    startingPrice: 2800,
    description: 'Volcanic craters, scenic Road to Hana, golden sand beaches, and seasonal humpback whale watching.',
    isPopular: false,
  },
]

export const FALLBACK_TOURS: TourPackage[] = [
  {
    _id: 'tour-1',
    title: 'Kyoto Zen & Heritage Odyssey',
    slug: 'kyoto-zen-heritage-odyssey',
    price: 2450,
    discountPrice: 2150,
    duration: { days: 8, nights: 7 },
    tag: 'Best Seller',
    overview: 'Experience the soul of traditional Japan with private tea master sessions, guided visits to UNESCO temples, bullet train journeys, and traditional kaiseki dining in Arashiyama.',
    coverImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1528164344705-47542687990d?auto=format&fit=crop&w=1200&q=80',
    ],
    itinerary: [
      { dayNumber: 1, title: 'Arrival in Kansai & Ryokan Welcome', description: 'Private transfer from Kansai International Airport to your authentic ryokan. Welcome match tea and multi-course kaiseki dinner.', meals: 'Dinner' },
      { dayNumber: 2, title: 'Golden Pavilion & Arashiyama Bamboo Grove', description: 'Guided morning tour of Kinkaku-ji (Golden Pavilion), followed by a serene walking tour through Arashiyama Bamboo Forest.', meals: 'Breakfast, Lunch' },
      { dayNumber: 3, title: 'Fushimi Inari & Gion Geisha District', description: 'Walk through 10,000 torii gates at Fushimi Inari Shrine and explore historic Gion with a local cultural historian.', meals: 'Breakfast' },
      { dayNumber: 4, title: 'Tea Ceremony & Zen Meditation', description: 'Participate in a private green tea ceremony with a Master and practice morning Zen meditation at Daitoku-ji Temple.', meals: 'Breakfast, Tea' },
      { dayNumber: 5, title: 'Nara Deer Park Day Excursion', description: 'Take a private express train to Nara to visit Todai-ji giant Buddha temple and feed friendly sacred deer in Nara Park.', meals: 'Breakfast, Lunch' },
      { dayNumber: 6, title: 'Culinary Masterclass & Nishiki Market', description: 'Explore Nishiki Market ("Kyoto Kitchen") with a chef followed by a private sushi and ramen preparation workshop.', meals: 'Breakfast, Dinner' },
      { dayNumber: 7, title: 'Kiyomizu-dera & Sunset over Higashiyama', description: 'Panoramic views from Kiyomizu-dera wooden terrace and farewell dinner in a converted 100-year-old Machiya.', meals: 'Breakfast, Farewell Dinner' },
      { dayNumber: 8, title: 'Farewell Kyoto', description: 'Relaxed morning breakfast and private transfer to Kansai Airport for your return flight home.', meals: 'Breakfast' },
    ],
    includedServices: ['4-Star & 5-Star Ryokan Accommodation', 'Private English Speaking Guide', 'All Temple & Shrine Entrance Tickets', 'Daily Gourmet Breakfast & Select Dining', 'Airport Transfers & JR Rail Pass'],
    excludedServices: ['International Airfare', 'Travel Insurance', 'Personal Expenses & Souvenirs'],
    customizable: true,
    isFeatured: true,
    categoryName: 'Cultural',
    categorySlug: 'cultural',
    destinationName: 'Kyoto',
    destinationSlug: 'kyoto',
  },
  {
    _id: 'tour-2',
    title: 'Santorini Sunset & Volcanic Wine Escape',
    slug: 'santorini-sunset-volcanic-wine-escape',
    price: 2950,
    discountPrice: 2600,
    duration: { days: 6, nights: 5 },
    tag: 'Honeymoon Choice',
    overview: 'Sail across the Aegean Sea on a private luxury catamaran, stay in cliffside cave suites in Oia, and sample world-famous Assyrtiko wines produced from volcanic soils.',
    coverImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    ],
    itinerary: [
      { dayNumber: 1, title: 'Arrival in Santorini & Oia Cliffside Check-in', description: 'Private chauffeur from Thira Airport to your cliffside suite with private plunge pool overlooking the caldera.', meals: 'Welcome Drinks & Dinner' },
      { dayNumber: 2, title: 'Catamaran Sunset Cruise & Hot Springs', description: 'Half-day private catamaran sailing around the caldera, red beach, black sand beach, and thermal hot springs with BBQ lunch.', meals: 'Breakfast, Lunch' },
      { dayNumber: 3, title: 'Volcanic Wine Tour & Tasting', description: 'Visit 3 award-winning vineyards in Pyrgos and Megalochori with an expert sommelier.', meals: 'Breakfast, Wine Pairing' },
      { dayNumber: 4, title: 'Fira to Oia Caldera Hike', description: 'Guided scenic morning walk along the caldera edge path, taking in breathtaking Aegean vistas.', meals: 'Breakfast' },
      { dayNumber: 5, title: 'Akrotiri Ruins & Leisure Day', description: 'Explore ancient Minoan ruins at Akrotiri followed by a romantic seaside dinner in Ammoudi Bay.', meals: 'Breakfast, Dinner' },
      { dayNumber: 6, title: 'Departure from Santorini', description: 'Morning espresso over the caldera before your transfer to the airport or ferry terminal.', meals: 'Breakfast' },
    ],
    includedServices: ['Luxury Caldera Suite with Plunge Pool', 'Private Sunset Catamaran Charter', 'Sommelier Wine Tasting Tour', 'Daily Gourmet Breakfast', 'Luxury Airport Transfers'],
    excludedServices: ['International Flights', 'Gratuities'],
    customizable: true,
    isFeatured: true,
    categoryName: 'Honeymoon',
    categorySlug: 'honeymoon',
    destinationName: 'Santorini',
    destinationSlug: 'santorini',
  },
  {
    _id: 'tour-3',
    title: 'Bali Tropical Wellness & Temple Sanctuary',
    slug: 'bali-tropical-wellness-temple-sanctuary',
    price: 1650,
    discountPrice: 1420,
    duration: { days: 7, nights: 6 },
    tag: 'Trending',
    overview: 'Rejuvenate body and mind in Ubud’s lush rainforest luxury villas, explore sacred water temples, and soak in the sun along Seminyak’s golden sunset beaches.',
    coverImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    ],
    itinerary: [
      { dayNumber: 1, title: 'Arrival in Denpasar & Ubud Villa Check-in', description: 'Private driver transfer to your private pool jungle villa in Ubud.', meals: 'Dinner' },
      { dayNumber: 2, title: 'Tegallalang Rice Terraces & Holy Water Cleansing', description: 'Visit Tegallalang rice fields and participate in a sacred purification ritual at Tirta Empul Temple.', meals: 'Breakfast, Lunch' },
      { dayNumber: 3, title: 'Yoga, Spa & Monkey Forest', description: 'Morning yoga session overlooking the Ayung river, 2-hour Balinese massage, and afternoon stroll through Sacred Monkey Forest.', meals: 'Breakfast' },
      { dayNumber: 4, title: 'Mount Batur Sunrise Trek', description: 'Optional early morning volcano trek for sunrise above the clouds, followed by hot springs relaxation.', meals: 'Breakfast, Snacks' },
      { dayNumber: 5, title: 'Transfer to Seminyak Coast', description: 'Move to a beachfront luxury resort in Seminyak. Afternoon sunset lounge experience.', meals: 'Breakfast' },
      { dayNumber: 6, title: 'Uluwatu Temple & Kecak Fire Dance', description: 'Visit cliffside Uluwatu Temple and witness the iconic Kecak dance performance at sunset.', meals: 'Breakfast, Seafood Dinner' },
      { dayNumber: 7, title: 'Farewell Bali', description: 'Relaxed beach morning before your transfer to Ngurah Rai Airport.', meals: 'Breakfast' },
    ],
    includedServices: ['5-Star Jungle & Beachfront Resorts', 'Private AC Vehicle & Driver Guide', 'Daily Yoga & Spa Voucher', 'All Temple Admissions', 'Daily Breakfast'],
    excludedServices: ['Flights', 'Personal Expenses'],
    customizable: true,
    isFeatured: true,
    categoryName: 'Nature',
    categorySlug: 'nature',
    destinationName: 'Bali',
    destinationSlug: 'bali',
  },
  {
    _id: 'tour-4',
    title: 'Swiss Alps Grand Express & Matterhorn Explorer',
    slug: 'swiss-alps-grand-express-matterhorn',
    price: 3800,
    discountPrice: 3450,
    duration: { days: 9, nights: 8 },
    tag: 'Alpine Luxury',
    overview: 'Travel onboard the glacier express train across snow-capped peaks, stay in iconic Zermatt chalets facing the Matterhorn, and sail on Lake Geneva.',
    coverImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    ],
    itinerary: [
      { dayNumber: 1, title: 'Arrival in Zurich & Lucerne Transfer', description: 'First class train transfer to Lucerne. Lake cruise welcome dinner.', meals: 'Dinner' },
      { dayNumber: 2, title: 'Mount Pilatus Dragon Ride', description: 'Ascend Mount Pilatus via the steepest cogwheel railway in the world.', meals: 'Breakfast' },
      { dayNumber: 3, title: 'Glacier Express to Zermatt', description: 'Board the Excellence Class Glacier Express through the Swiss Grand Canyon to car-free Zermatt.', meals: 'Breakfast, 5-Course Lunch' },
      { dayNumber: 4, title: 'Gornergrat Railway & Matterhorn Views', description: 'Take the open-air cogwheel train to Gornergrat at 3,089m elevation for unbeatable views of Matterhorn.', meals: 'Breakfast' },
      { dayNumber: 5, title: 'Interlaken & Jungfraujoch Top of Europe', description: 'Ascend to Jungfraujoch - Europe’s highest railway station at 3,454 meters.', meals: 'Breakfast' },
      { dayNumber: 6, title: 'Chillon Castle & Montreux Riviera', description: 'Travel to Montreux on Lake Geneva and tour historic Chillon Castle.', meals: 'Breakfast' },
      { dayNumber: 7, title: 'Swiss Fondue & Chocolate Tasting', description: 'Private tasting tour at a traditional Swiss cheese dairy and chocolate atelier.', meals: 'Breakfast, Dinner' },
      { dayNumber: 8, title: 'Geneva City Tour', description: 'Guided city walk through Old Town Geneva and UN headquarters area.', meals: 'Breakfast' },
      { dayNumber: 9, title: 'Departure', description: 'Train to Geneva Airport for return flight.', meals: 'Breakfast' },
    ],
    includedServices: ['1st Class Swiss Travel Pass', 'Excellence Class Glacier Express Seat', '5-Star Swiss Hotel Accommodations', 'Mountain Cable Car & Railway Passes', 'Daily Breakfast'],
    excludedServices: ['International Flights', 'Travel Insurance'],
    customizable: true,
    isFeatured: true,
    categoryName: 'Luxury',
    categorySlug: 'luxury',
    destinationName: 'Swiss Alps',
    destinationSlug: 'swiss-alps',
  },
]

export const FALLBACK_SERVICES: TravelService[] = [
  {
    _id: 'srv-1',
    title: 'Visa Processing & Assistance',
    slug: 'visa-processing-assistance',
    iconName: 'FileCheck',
    shortDescription: 'Stress-free tourist, business, and express visa applications with personalized document preparation and embassy submission assistance.',
    features: [
      'Document Audit & Form Pre-Filling',
      'Embassy Slot Booking & Appointment Priority',
      'High Approval Rate Guidance',
      'Doorstep Passport Pick & Drop Option',
      '24/7 Dedicated Visa Specialist Support',
    ],
    ctaText: 'Apply For Visa',
    serviceImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
  },
  {
    _id: 'srv-2',
    title: 'Flight Booking & Charter Deals',
    slug: 'flight-booking-charter-deals',
    iconName: 'Plane',
    shortDescription: 'Access exclusive corporate discounts, business class upgrades, flexible cancellation, and 24/7 flight re-routing support worldwide.',
    features: [
      'Guaranteed Lowest Airline Fare Lock',
      'Business & First Class Upgrades',
      'Multi-City & Complex Itineraries',
      '24/7 Instant Rebooking Support',
      'Baggage & Seat Selection Included',
    ],
    ctaText: 'Search Flights',
    serviceImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
  },
  {
    _id: 'srv-3',
    title: 'Luxury Hotel & Resort Reservations',
    slug: 'luxury-hotel-resort-reservations',
    iconName: 'Hotel',
    shortDescription: 'Hand-picked luxury villas, 5-star hotels, overwater bungalows, and heritage ryokans with VIP complimentary perks.',
    features: [
      'Complimentary Room Upgrades (upon availability)',
      'Daily Free Gourmet Breakfast & Resort Credits',
      'Early Check-In & Late Check-Out',
      'Direct Partnership Rates with Marriott, Four Seasons, Aman',
      'Special Anniversary & Honeymoon Amenities',
    ],
    ctaText: 'Reserve Accommodations',
    serviceImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
  },
  {
    _id: 'srv-4',
    title: 'Customized Tour Itinerary Planning',
    slug: 'customized-tour-itinerary-planning',
    iconName: 'Compass',
    shortDescription: 'Tailor every minute of your trip to your preferences, pace, and budget with expert local destination designers.',
    features: [
      '1-on-1 Consultation with Destination Experts',
      'Tailored Day-by-Day Route & Activity Maps',
      'Private Chauffeur & English Speaking Guides',
      'Flexible Date Adjustments Without Fees',
      'Exclusive Access to Private Experiences',
    ],
    ctaText: 'Customize My Trip',
    serviceImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
  },
  {
    _id: 'srv-5',
    title: 'Corporate Travel Management',
    slug: 'corporate-travel-management',
    iconName: 'ShieldCheck',
    shortDescription: 'Streamlined travel logistics, group MICE bookings, corporate retreats, and automated travel expense invoicing.',
    features: [
      'Dedicated Account Manager',
      'Unified Corporate Invoicing & Billing',
      '24/7 Crisis Response & Traveler Tracking',
      'Corporate Loyalty Point Integration',
    ],
    ctaText: 'Corporate Contact',
    serviceImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
  },
  {
    _id: 'srv-6',
    title: 'Cruise & Island Expeditions',
    slug: 'cruise-island-expeditions',
    iconName: 'Globe',
    shortDescription: 'Set sail on Mediterranean, Caribbean, or Antarctic expedition cruises with all-inclusive staterooms and land excursions.',
    features: [
      'Luxury Ocean & River Cruise Lines',
      'Private Onboard Shore Excursions',
      'Stateroom Onboard Credit Extras',
      'Pre and Post Cruise Hotel Packages',
    ],
    ctaText: 'Explore Cruises',
    serviceImage: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
  },
]

export const FALLBACK_CATEGORIES: Category[] = [
  {
    _id: 'cat-1',
    name: 'Cultural',
    slug: 'cultural',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    description: 'Immerse in centuries of heritage, UNESCO monuments, ancient traditions, and local culinary arts.',
  },
  {
    _id: 'cat-2',
    name: 'Honeymoon',
    slug: 'honeymoon',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
    description: 'Romantic escapes, private plunge pool villas, sunset dinners, and quiet beachfront tranquility.',
  },
  {
    _id: 'cat-3',
    name: 'Nature & Wildlife',
    slug: 'nature',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    description: 'Rainforest treks, pristine national parks, safari game drives, and natural world wonders.',
  },
  {
    _id: 'cat-4',
    name: 'Luxury',
    slug: 'luxury',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    description: 'First class travel, 5-star palatial stays, private jet charters, and dedicated 24/7 concierge.',
  },
  {
    _id: 'cat-5',
    name: 'Adventure',
    slug: 'adventure',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    description: 'Glacier hikes, mountain climbing, desert dune bashing, scuba diving, and adrenaline journeys.',
  },
]

export const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    _id: 'test-1',
    clientName: 'Eleanor Vance',
    location: 'London, UK',
    rating: 5,
    reviewText: 'Flyora crafted our Japan trip so seamlessly! From private tea ceremonies in Kyoto to effortless bullet train tickets, everything was 5-star perfection.',
    tourTitle: 'Kyoto Zen & Heritage Odyssey',
    clientAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  {
    _id: 'test-2',
    clientName: 'Marcus & Sophia Chen',
    location: 'San Francisco, USA',
    rating: 5,
    reviewText: 'Our honeymoon in Santorini exceeded every single expectation. The caldera suite and private catamaran cruise recommended by Flyora made it unforgettable.',
    tourTitle: 'Santorini Sunset & Volcanic Wine Escape',
    clientAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    _id: 'test-3',
    clientName: 'Aarav & Priya Patel',
    location: 'Mumbai, India',
    rating: 5,
    reviewText: 'The custom trip planning team understood our family requirements down to the smallest detail. Flawless hotel choices and warm local guides in Bali.',
    tourTitle: 'Bali Tropical Wellness & Temple Sanctuary',
    clientAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
]

// ---------------------------------------------------------------------------
// Robust Fetching Functions
// ---------------------------------------------------------------------------

export async function getDestinations(): Promise<Destination[]> {
  try {
    const data = await client.fetch(allDestinationsQuery)
    if (data && data.length > 0) return data
  } catch (err) {
    console.warn('Sanity fetch failed or unconfigured, using fallback destinations:', err)
  }
  return FALLBACK_DESTINATIONS
}

export async function getDestinationBySlug(slug: string): Promise<Destination | null> {
  try {
    const data = await client.fetch(destinationBySlugQuery, { slug })
    if (data) return data
  } catch (err) {
    console.warn(`Sanity fetch failed for destination ${slug}:`, err)
  }
  return FALLBACK_DESTINATIONS.find((d) => d.slug === slug) || FALLBACK_DESTINATIONS[0]
}

export async function getTours(): Promise<TourPackage[]> {
  try {
    const data = await client.fetch(allToursQuery)
    if (data && data.length > 0) return data
  } catch (err) {
    console.warn('Sanity fetch failed for tours, using fallback:', err)
  }
  return FALLBACK_TOURS
}

export async function getTourBySlug(slug: string): Promise<TourPackage | null> {
  try {
    const data = await client.fetch(tourBySlugQuery, { slug })
    if (data) return data
  } catch (err) {
    console.warn(`Sanity fetch failed for tour ${slug}:`, err)
  }
  return FALLBACK_TOURS.find((t) => t.slug === slug) || FALLBACK_TOURS[0]
}

export async function getToursByDestination(slug: string): Promise<TourPackage[]> {
  try {
    const data = await client.fetch(toursByDestinationQuery, { slug })
    if (data && data.length > 0) return data
  } catch (err) {
    console.warn(`Sanity fetch failed for tours in destination ${slug}:`, err)
  }
  return FALLBACK_TOURS.filter((t) => t.destinationSlug === slug || t.destinationName?.toLowerCase() === slug.toLowerCase())
}

export async function getToursByCategory(slug: string): Promise<TourPackage[]> {
  try {
    const data = await client.fetch(toursByCategoryQuery, { slug })
    if (data && data.length > 0) return data
  } catch (err) {
    console.warn(`Sanity fetch failed for tours in category ${slug}:`, err)
  }
  return FALLBACK_TOURS.filter((t) => t.categorySlug === slug || t.categoryName?.toLowerCase() === slug.toLowerCase())
}

export async function getServices(): Promise<TravelService[]> {
  try {
    const data = await client.fetch(travelServicesQuery)
    if (data && data.length > 0) return data
  } catch (err) {
    console.warn('Sanity fetch failed for services, using fallback:', err)
  }
  return FALLBACK_SERVICES
}

export async function getServiceBySlug(slug: string): Promise<TravelService | null> {
  try {
    const data = await client.fetch(serviceBySlugQuery, { slug })
    if (data) return data
  } catch (err) {
    console.warn(`Sanity fetch failed for service ${slug}:`, err)
  }
  return FALLBACK_SERVICES.find((s) => s.slug === slug) || FALLBACK_SERVICES[0]
}

export async function getCategories(): Promise<Category[]> {
  try {
    const data = await client.fetch(tourCategoriesQuery)
    if (data && data.length > 0) return data
  } catch (err) {
    console.warn('Sanity fetch failed for categories, using fallback:', err)
  }
  return FALLBACK_CATEGORIES
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  try {
    const data = await client.fetch(categoryBySlugQuery, { slug })
    if (data) return data
  } catch (err) {
    console.warn(`Sanity fetch failed for category ${slug}:`, err)
  }
  return FALLBACK_CATEGORIES.find((c) => c.slug === slug) || FALLBACK_CATEGORIES[0]
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const data = await client.fetch(allTestimonialsQuery)
    if (data && data.length > 0) return data
  } catch (err) {
    console.warn('Sanity fetch failed for testimonials, using fallback:', err)
  }
  return FALLBACK_TESTIMONIALS
}
