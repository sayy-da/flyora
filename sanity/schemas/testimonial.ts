import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonials & Reviews',
  type: 'document',
  fields: [
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'clientAvatar',
      title: 'Client Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'location',
      title: 'Location / Country',
      type: 'string',
      description: 'e.g. London, UK or Dubai, UAE',
    }),
    defineField({
      name: 'rating',
      title: 'Rating (1-5 Stars)',
      type: 'number',
      initialValue: 5,
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: 'reviewText',
      title: 'Review / Testimonial Content',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tourPackage',
      title: 'Associated Tour Package (Optional)',
      type: 'reference',
      to: [{ type: 'tourPackage' }],
    }),
    defineField({
      name: 'featured',
      title: 'Show on Homepage',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'clientName',
      subtitle: 'location',
      media: 'clientAvatar',
    },
  },
})
