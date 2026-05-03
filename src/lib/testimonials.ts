export type Testimonial = {
  id: string
  quote: string
  name: string
  location: string
  rating: 1 | 2 | 3 | 4 | 5
  accent: 'tangerine' | 'sky' | 'lemon' | 'green' | 'rose'
}

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: 'aisha',
    quote:
      "The parfait bowls have completely replaced my office breakfast. Fresh fruit, real granola, no skimping. I'm hooked.",
    name: 'Aisha O.',
    location: 'Lekki, Lagos',
    rating: 5,
    accent: 'tangerine',
  },
  {
    id: 'tunde',
    quote:
      'Ordered through WhatsApp at 11 a.m., food was at my door before lunch. The mini pizza is dangerously good.',
    name: 'Tunde A.',
    location: 'Victoria Island',
    rating: 5,
    accent: 'sky',
  },
  {
    id: 'chinaza',
    quote:
      "I drink the watermelon juice every Saturday now. You can taste that nothing's from concentrate.",
    name: 'Chinaza E.',
    location: 'Yaba, Lagos',
    rating: 5,
    accent: 'green',
  },
  {
    id: 'bola',
    quote:
      "Finally, fast food I don't feel guilty about. My kids ask for the smoothie bowls by name.",
    name: 'Bola M.',
    location: 'Ikeja, Lagos',
    rating: 5,
    accent: 'lemon',
  },
  {
    id: 'kemi',
    quote:
      "The packaging is so cute I almost didn't want to open it. Then I tasted the wrap and forgot all about that.",
    name: 'Kemi R.',
    location: 'Ajah, Lagos',
    rating: 5,
    accent: 'rose',
  },
]
