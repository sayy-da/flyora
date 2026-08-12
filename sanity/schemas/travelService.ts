import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'travelService',
  title: 'Travel Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      description: 'e.g. Flight Booking, Visa Processing, Hotel Reservation, Custom Itineraries',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'iconName',
      title: 'Lucide Icon Name',
      type: 'string',
      description: 'e.g. Plane, FileCheck, Hotel, Compass, ShieldCheck, MapPin, Globe',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Summary',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fullDescription',
      title: 'Detailed Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'serviceImage',
      title: 'Service Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'features',
      title: 'Key Service Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. 24/7 Support, Express Visa Processing, Lowest Flight Fare Guarantee',
    }),
    defineField({
      name: 'ctaText',
      title: 'Call to Action Button Text',
      type: 'string',
      initialValue: 'Enquire Now',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'shortDescription',
      media: 'serviceImage',
    },
  },
})
