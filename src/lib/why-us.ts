export type WhyUsItem = {
  id: string
  title: string
  description: string
  accent: 'tangerine' | 'pink' | 'lemon' | 'green'
  image: string
}

export const WHY_US_ITEMS: readonly WhyUsItem[] = [
  {
    id: 'fresh',
    title: 'Fresh Ingredients',
    description:
      'Sourced daily from local markets. Nothing frozen, nothing processed.',
    accent: 'green',
    image: '/images/whyus_ingredients.webp',
  },
  {
    id: 'handcrafted',
    title: 'Handcrafted to Order',
    description:
      'Every parfait, pizza, and juice is made the moment you order. No batches, no shortcuts.',
    accent: 'tangerine',
    image: '/images/whyus_handcrafted.webp',
  },
  {
    id: 'whatsapp',
    title: 'Order on WhatsApp',
    description: "Skip the queue. Tap, send, and we'll get it to you fast.",
    accent: 'pink',
    image: '/images/whyus_delivery.webp',
  },
]
