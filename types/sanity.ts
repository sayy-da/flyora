export interface TourPackage {
  _id: string
  title: string
  slug: string
  duration?: {
    days?: number
    nights?: number
  }
  tag?: string
  overview?: string
  coverImage?: string
  includedServices?: string[]
  customizable?: boolean
  categoryName?: string
  destinationName?: string
}

export interface Destination {
  _id: string
  name: string
  slug: string
  country: string
  flag?: string
  region: string
  tag?: string
  image: string
  rating?: number
  reviewsCount?: number
  toursCount?: number
  description?: string
}

export interface TravelService {
  _id: string
  title: string
  slug: string
  iconName?: string
  shortDescription: string
  serviceImage?: string
  features?: string[]
  ctaText?: string
}

export interface TourCategory {
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
}

export interface CustomTripRequest {
  _id?: string
  customerName: string
  email: string
  phone: string
  preferredDestination?: string
  startDate?: string
  endDate?: string
  budgetPerPerson?: string
  adultsCount?: number
  childrenCount?: number
  travelStyle?: string
  specialNotes?: string
  status?: 'New' | 'In Progress' | 'Quoted' | 'Booked' | 'Closed'
}
