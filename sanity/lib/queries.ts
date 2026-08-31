import { groq } from 'next-sanity'

// Fetch all popular destinations
export const popularDestinationsQuery = groq`
  *[_type == "destination" && isPopular == true] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    country,
    flag,
    region,
    tag,
    "image": image.asset->url,
    rating,
    reviewsCount,
    toursCount,
    description
  }
`

// Fetch all destinations
export const allDestinationsQuery = groq`
  *[_type == "destination"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    country,
    flag,
    region,
    tag,
    "image": image.asset->url,
    rating,
    reviewsCount,
    toursCount,
    description,
    isPopular
  }
`

// Fetch single destination by slug
export const destinationBySlugQuery = groq`
  *[_type == "destination" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    country,
    flag,
    region,
    tag,
    "image": image.asset->url,
    rating,
    reviewsCount,
    toursCount,
    description,
    isPopular
  }
`

// Fetch featured tour packages
export const featuredToursQuery = groq`
  *[_type == "tourPackage" && isActive == true && isFeatured == true] {
    _id,
    title,
    "slug": slug.current,
    duration,
    tag,
    overview,
    "coverImage": coverImage.asset->url,
    includedServices,
    customizable,
    "categoryName": category->name,
    "categorySlug": category->slug.current,
    "destinationName": destination->name,
    "destinationSlug": destination->slug.current
  }
`

// Fetch all tour packages
export const allToursQuery = groq`
  *[_type == "tourPackage" && isActive == true] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    duration,
    tag,
    overview,
    "coverImage": coverImage.asset->url,
    "gallery": gallery[].asset->url,
    includedServices,
    excludedServices,
    customizable,
    isFeatured,
    "categoryName": category->name,
    "categorySlug": category->slug.current,
    "destinationName": destination->name,
    "destinationSlug": destination->slug.current
  }
`

// Fetch single tour package by slug
export const tourBySlugQuery = groq`
  *[_type == "tourPackage" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    duration,
    tag,
    overview,
    "coverImage": coverImage.asset->url,
    "gallery": gallery[].asset->url,
    itinerary,
    includedServices,
    excludedServices,
    customizable,
    isFeatured,
    "categoryName": category->name,
    "categorySlug": category->slug.current,
    "destinationName": destination->name,
    "destinationSlug": destination->slug.current
  }
`

// Fetch tours by destination slug
export const toursByDestinationQuery = groq`
  *[_type == "tourPackage" && destination->slug.current == $slug && isActive == true] {
    _id,
    title,
    "slug": slug.current,
    duration,
    tag,
    overview,
    "coverImage": coverImage.asset->url,
    includedServices,
    customizable
  }
`

// Fetch tours by category slug
export const toursByCategoryQuery = groq`
  *[_type == "tourPackage" && category->slug.current == $slug && isActive == true] {
    _id,
    title,
    "slug": slug.current,
    duration,
    tag,
    overview,
    "coverImage": coverImage.asset->url,
    includedServices,
    customizable,
    "destinationName": destination->name
  }
`

// Fetch all travel agency services
export const travelServicesQuery = groq`
  *[_type == "travelService"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    iconName,
    shortDescription,
    "serviceImage": serviceImage.asset->url,
    features,
    ctaText
  }
`

// Fetch single service by slug
export const serviceBySlugQuery = groq`
  *[_type == "travelService" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    iconName,
    shortDescription,
    fullDescription,
    "serviceImage": serviceImage.asset->url,
    features,
    ctaText
  }
`

// Fetch all categories
export const tourCategoriesQuery = groq`
  *[_type == "category"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    description
  }
`

// Fetch single category by slug
export const categoryBySlugQuery = groq`
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    description
  }
`

// Fetch testimonials for homepage
export const testimonialsQuery = groq`
  *[_type == "testimonial" && featured == true] {
    _id,
    clientName,
    "clientAvatar": clientAvatar.asset->url,
    location,
    rating,
    reviewText
  }
`

// Fetch all testimonials
export const allTestimonialsQuery = groq`
  *[_type == "testimonial"] {
    _id,
    clientName,
    "clientAvatar": clientAvatar.asset->url,
    location,
    rating,
    reviewText,
    "tourTitle": tourPackage->title
  }
`

