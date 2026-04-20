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
    accent: 'tangerine',
    variants: [
      'Berry Bliss',
      'Tropical Paradise',
      'Chocolate Banana Crunch',
      'Apple Cinnamon Delight',
      'Peach Almond Dream',
      'Mango Coconut Crunch',
      'Honey Granola Swirl',
      'Vanilla Berry Layer',
    ],
  },
  {
    id: 'mini-pizzas',
    title: 'Mini Pizzas',
    accent: 'lemon',
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
    accent: 'sky',
    variants: [
      'Tigernut',
      'Fruit Naturel',
      'Green Detox',
      'Mango Smoothie',
      'Berry Blast',
      'Watermelon Cooler',
      'Pineapple Ginger',
      'Carrot Orange Zing',
    ],
  },
]
