import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'tourPackage',
  title: 'Tour Packages & Deals',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Package Title',
      type: 'string',
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
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'destination',
      title: 'Destination',
      type: 'reference',
      to: [{ type: 'destination' }],
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'object',
      fields: [
        { name: 'days', title: 'Days', type: 'number' },
        { name: 'nights', title: 'Nights', type: 'number' },
      ],
    }),
    defineField({
      name: 'tag',
      title: 'Tag / Badge',
      type: 'string',
      description: 'e.g. Nature, Adventure, Honeymoon, Best Seller',
    }),
    defineField({
      name: 'overview',
      title: 'Overview & Description',
      type: 'text',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'itinerary',
      title: 'Day-by-Day Itinerary',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Day',
          fields: [
            { name: 'dayNumber', title: 'Day Number', type: 'number' },
            { name: 'title', title: 'Day Title', type: 'string' },
            { name: 'description', title: 'Activities & Details', type: 'text' },
            { name: 'meals', title: 'Meals Included', type: 'string', description: 'e.g. Breakfast, Lunch' },
          ],
        },
      ],
    }),
    defineField({
      name: 'includedServices',
      title: 'Inclusions',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. 4-Star Hotel Accommodation, Airport Transfers, Daily Breakfast',
    }),
    defineField({
      name: 'excludedServices',
      title: 'Exclusions',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. International Flights, Personal Expenses, Visa Fees',
    }),
    defineField({
      name: 'customizable',
      title: 'Allow Customization',
      type: 'boolean',
      initialValue: true,
      description: 'Show "Customize This Trip" button for visitors',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active / Available',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tag',
      media: 'coverImage',
    },
  },
})
