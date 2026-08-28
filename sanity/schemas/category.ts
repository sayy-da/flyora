  import { defineField, defineType } from 'sanity'

  export default defineType({
    name: 'category',
    title: 'Tour Categories',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        title: 'Category Name',
        type: 'string',
        description: 'e.g. Nature, Adventure, Honeymoon, Luxury, Cultural',
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
        name: 'image',
        title: 'Category Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
      }),
    ],
    preview: {
      select: {
        title: 'name',
        media: 'image',
      },
    },
  })
