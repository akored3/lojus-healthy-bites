export type MenuVariant = {
  name: string
  blurb: string
  price: number
}

export type MenuCategory = {
  id: string
  title: string
  accent: 'tangerine' | 'sky' | 'lemon' | 'green'
  variants: readonly MenuVariant[]
}

export function formatPrice(price: number): string {
  return `₦${price.toLocaleString('en-NG')}`
}

export const MENU_CATEGORIES: readonly MenuCategory[] = [
  {
    id: 'parfaits',
    title: 'Parfaits',
    accent: 'tangerine',
    variants: [
      {
        name: 'Berry Bliss',
        blurb: 'Greek yogurt, granola, fresh mixed berries',
        price: 2500,
      },
      {
        name: 'Tropical Paradise',
        blurb: 'Mango, pineapple, coconut, yogurt, granola',
        price: 2500,
      },
      {
        name: 'Chocolate Banana Crunch',
        blurb: 'Cocoa yogurt, banana, dark-chocolate granola',
        price: 2800,
      },
      {
        name: 'Apple Cinnamon Delight',
        blurb: 'Cinnamon yogurt, apple, toasted oats',
        price: 2500,
      },
      {
        name: 'Peach Almond Dream',
        blurb: 'Yogurt, peach, toasted almonds, honey',
        price: 2800,
      },
      {
        name: 'Mango Coconut Crunch',
        blurb: 'Mango, toasted coconut, yogurt, granola',
        price: 2500,
      },
      {
        name: 'Honey Granola Swirl',
        blurb: 'Honey yogurt, house granola, seeds',
        price: 2300,
      },
      {
        name: 'Vanilla Berry Layer',
        blurb: 'Vanilla yogurt, granola, seasonal berries',
        price: 2500,
      },
    ],
  },
  {
    id: 'mini-pizzas',
    title: 'Mini Pizzas',
    accent: 'lemon',
    variants: [
      { name: 'Margherita', blurb: 'Tomato, mozzarella, fresh basil', price: 3000 },
      {
        name: 'BBQ Chicken',
        blurb: 'Grilled chicken, BBQ sauce, red onion, mozzarella',
        price: 3800,
      },
      { name: 'Pepperoni', blurb: 'Pepperoni, tomato, mozzarella, oregano', price: 3500 },
      {
        name: 'Veggie Supreme',
        blurb: 'Peppers, mushrooms, onion, olives, mozzarella',
        price: 3500,
      },
      { name: 'Four Cheese', blurb: 'Mozzarella, cheddar, parmesan, feta', price: 3500 },
    ],
  },
  {
    id: 'juices',
    title: 'Juices & Smoothies',
    accent: 'sky',
    variants: [
      { name: 'Tigernut', blurb: 'Fresh-pressed tigernut, dates, coconut', price: 2000 },
      { name: 'Fruit Naturel', blurb: 'Orange, apple, pineapple, lime', price: 1800 },
      { name: 'Green Detox', blurb: 'Cucumber, apple, celery, ginger, lemon', price: 2200 },
      { name: 'Mango Smoothie', blurb: 'Mango, banana, yogurt, honey', price: 2200 },
      { name: 'Berry Blast', blurb: 'Mixed berries, banana, almond milk', price: 2500 },
      { name: 'Watermelon Cooler', blurb: 'Watermelon, lime, mint', price: 1800 },
      { name: 'Pineapple Ginger', blurb: 'Pineapple, ginger, lime', price: 2000 },
      { name: 'Carrot Orange Zing', blurb: 'Carrot, orange, ginger', price: 2000 },
    ],
  },
]
