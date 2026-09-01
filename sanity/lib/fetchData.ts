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
  popularDestinationsQuery,
  featuredToursQuery,
} from './queries'

export interface TourPackage {
  _id: string
  title: string
  slug: string
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
  region: string
  tag?: string
  image: string
  rating: number
  reviewsCount: number
  toursCount: number
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
// Pure Sanity Data Fetchers (Returns real data or empty array / null)
// ---------------------------------------------------------------------------

export async function getDestinations(): Promise<Destination[]> {
  try {
    const data = await client.fetch(allDestinationsQuery)
    return Array.isArray(data) ? data : []
  } catch (err) {
    console.warn('Sanity fetch failed for destinations:', err)
    return []
  }
}

export async function getPopularDestinations(): Promise<Destination[]> {
  try {
    const data = await client.fetch(popularDestinationsQuery)
    return Array.isArray(data) ? data : []
  } catch (err) {
    console.warn('Sanity fetch failed for popular destinations:', err)
    return []
  }
}

export async function getDestinationBySlug(slug: string): Promise<Destination | null> {
  try {
    const data = await client.fetch(destinationBySlugQuery, { slug })
    return data || null
  } catch (err) {
    console.warn(`Sanity fetch failed for destination ${slug}:`, err)
    return null
  }
}

export async function getTours(): Promise<TourPackage[]> {
  try {
    const data = await client.fetch(allToursQuery)
    return Array.isArray(data) ? data : []
  } catch (err) {
    console.warn('Sanity fetch failed for tours:', err)
    return []
  }
}

export async function getFeaturedTours(): Promise<TourPackage[]> {
  try {
    const data = await client.fetch(featuredToursQuery)
    return Array.isArray(data) ? data : []
  } catch (err) {
    console.warn('Sanity fetch failed for featured tours:', err)
    return []
  }
}

export async function getTourBySlug(slug: string): Promise<TourPackage | null> {
  try {
    const data = await client.fetch(tourBySlugQuery, { slug })
    return data || null
  } catch (err) {
    console.warn(`Sanity fetch failed for tour ${slug}:`, err)
    return null
  }
}

export async function getToursByDestination(slug: string): Promise<TourPackage[]> {
  try {
    const data = await client.fetch(toursByDestinationQuery, { slug })
    return Array.isArray(data) ? data : []
  } catch (err) {
    console.warn(`Sanity fetch failed for tours in destination ${slug}:`, err)
    return []
  }
}

export async function getToursByCategory(slug: string): Promise<TourPackage[]> {
  try {
    const data = await client.fetch(toursByCategoryQuery, { slug })
    return Array.isArray(data) ? data : []
  } catch (err) {
    console.warn(`Sanity fetch failed for tours in category ${slug}:`, err)
    return []
  }
}

export async function getServices(): Promise<TravelService[]> {
  try {
    const data = await client.fetch(travelServicesQuery)
    return Array.isArray(data) ? data : []
  } catch (err) {
    console.warn('Sanity fetch failed for services:', err)
    return []
  }
}

export async function getServiceBySlug(slug: string): Promise<TravelService | null> {
  try {
    const data = await client.fetch(serviceBySlugQuery, { slug })
    return data || null
  } catch (err) {
    console.warn(`Sanity fetch failed for service ${slug}:`, err)
    return null
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const data = await client.fetch(tourCategoriesQuery)
    return Array.isArray(data) ? data : []
  } catch (err) {
    console.warn('Sanity fetch failed for categories:', err)
    return []
  }
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  try {
    const data = await client.fetch(categoryBySlugQuery, { slug })
    return data || null
  } catch (err) {
    console.warn(`Sanity fetch failed for category ${slug}:`, err)
    return null
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const data = await client.fetch(allTestimonialsQuery)
    return Array.isArray(data) ? data : []
  } catch (err) {
    console.warn('Sanity fetch failed for testimonials:', err)
    return []
  }
}
