import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'customTripRequest',
  title: 'Custom Trip Requests & Enquiries',
  type: 'document',
  fields: [
    defineField({
      name: 'customerName',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone / WhatsApp Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'preferredDestination',
      title: 'Preferred Destination',
      type: 'string',
    }),
    defineField({
      name: 'startDate',
      title: 'Expected Departure Date',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'Expected Return Date',
      type: 'date',
    }),
    defineField({
      name: 'budgetPerPerson',
      title: 'Budget per Person ($)',
      type: 'string',
    }),
    defineField({
      name: 'adultsCount',
      title: 'Number of Adults',
      type: 'number',
      initialValue: 2,
    }),
    defineField({
      name: 'childrenCount',
      title: 'Number of Children',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'travelStyle',
      title: 'Travel Style',
      type: 'string',
      options: {
        list: [
          { title: 'Luxury', value: 'Luxury' },
          { title: 'Budget Friendly', value: 'Budget' },
          { title: 'Family Fun', value: 'Family' },
          { title: 'Honeymoon / Romantic', value: 'Honeymoon' },
          { title: 'Adventure & Wildlife', value: 'Adventure' },
          { title: 'Cultural & Heritage', value: 'Cultural' },
        ],
      },
    }),
    defineField({
      name: 'specialNotes',
      title: 'Special Preferences / Custom Requirements',
      type: 'text',
    }),
    defineField({
      name: 'status',
      title: 'Enquiry Status',
      type: 'string',
      options: {
        list: [
          { title: '🆕 New Lead', value: 'New' },
          { title: '⏳ In Contact', value: 'In Progress' },
          { title: '📄 Itinerary Sent / Quoted', value: 'Quoted' },
          { title: '✅ Booked', value: 'Booked' },
          { title: '❌ Closed / Cancelled', value: 'Closed' },
        ],
      },
      initialValue: 'New',
    }),
  ],
  preview: {
    select: {
      title: 'customerName',
      subtitle: 'preferredDestination',
    },
    prepare({ title, subtitle }) {
      return {
        title: title,
        subtitle: subtitle ? `Destination: ${subtitle}` : 'Custom Enquiry',
      }
    },
  },
})
