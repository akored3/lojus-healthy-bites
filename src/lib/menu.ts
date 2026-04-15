export type MenuCategory = {
  id: string
  title: string
  tagline: string
  image: string
  accent: 'tangerine' | 'sky' | 'lemon'
  orderMessage: string
}

export const MENU_CATEGORIES: readonly MenuCategory[] = [
  {
    id: 'parfaits',
    title: 'Parfaits',
    tagline: 'Layered yogurt, fresh fruit, and house granola.',
    image: '/images/carousel_parfait.png',
    accent: 'tangerine',
    orderMessage: 'Hi, I would like to order a parfait. Please share the flavours.',
  },
  {
    id: 'mini-pizzas',
    title: 'Mini Pizzas',
    tagline: 'Hand-stretched dough, wood-fired, loaded fresh.',
    image: '/images/carousel_pizza.jpg',
    accent: 'sky',
    orderMessage: 'Hi, I would like to order a mini pizza. Please share the options.',
  },
  {
    id: 'juices',
    title: 'Juices & Smoothies',
    tagline: 'Cold-pressed, nothing artificial, always chilled.',
    image: '/images/carousel_juice.png',
    accent: 'lemon',
    orderMessage: 'Hi, I would like to order juices or smoothies. Please share the flavours.',
  },
]
