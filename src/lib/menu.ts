export type MenuCategory = {
  id: string
  title: string
  accent: 'tangerine' | 'sky' | 'lemon' | 'green'
  variants: readonly string[]
}

export const MENU_CATEGORIES: readonly MenuCategory[] = [
  {
    id: 'parfaits',
    title: 'Parfaits',
    accent: 'green',
    variants: [
      'Berry Bliss',
      'Mango Tango',
      'Tropical Crunch',
      'Classic Vanilla',
      'Granola Glow',
    ],
  },
  {
    id: 'mini-pizzas',
    title: 'Mini Pizzas',
    accent: 'sky',
    variants: [
      'Margherita',
      'BBQ Chicken',
      'Pepperoni',
      'Veggie Supreme',
      'Four Cheese',
    ],
  },
  {
    id: 'juices',
    title: 'Juices & Smoothies',
    accent: 'lemon',
    variants: [
      'Tigernut',
      'Fruit Naturel',
      'Green Detox',
      'Mango Smoothie',
      'Berry Blast',
    ],
  },
]
