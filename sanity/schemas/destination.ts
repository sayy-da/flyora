import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'destination',
  title: 'Destinations',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Destination Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'flag',
      title: 'Country Flag Emoji',
      type: 'string',
      description: 'e.g. 🇯🇵, 🇬🇷, 🇮🇩, 🇨🇭, 🇲🇦',
    }),
    defineField({
      name: 'region',
      title: 'Region / Continent',
      type: 'string',
      options: {
        list: [
          { title: 'Asia', value: 'Asia' },
          { title: 'Europe', value: 'Europe' },
          { title: 'Tropical', value: 'Tropical' },
          { title: 'Americas', value: 'Americas' },
          { title: 'Africa', value: 'Africa' },
          { title: 'Middle East', value: 'Middle East' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Tag Badge',
      type: 'string',
      description: 'e.g. Cultural Classic, Trending Coastal, Island Escape',
    }),
    defineField({
      name: 'image',
      title: 'Destination Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating (1-5)',
      type: 'number',
      initialValue: 4.9,
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: 'reviewsCount',
      title: 'Total Reviews Count',
      type: 'number',
      initialValue: 100,
    }),
    defineField({
      name: 'toursCount',
      title: 'Number of Tours Available',
      type: 'number',
      description: 'e.g. 24',
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
    }),
    defineField({
      name: 'isPopular',
      title: 'Featured as Popular Destination',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'country',
      media: 'image',
    },
  },
})
