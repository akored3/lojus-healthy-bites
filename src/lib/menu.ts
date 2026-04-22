export type MenuVariant = {
  name: string
  blurb: string
}

export type MenuCategory = {
  id: string
  title: string
  accent: 'tangerine' | 'sky' | 'lemon' | 'green'
  variants: readonly MenuVariant[]
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
      },
      {
        name: 'Tropical Paradise',
        blurb: 'Mango, pineapple, coconut, yogurt, granola',
      },
      {
        name: 'Chocolate Banana Crunch',
        blurb: 'Cocoa yogurt, banana, dark-chocolate granola',
      },
      {
        name: 'Apple Cinnamon Delight',
        blurb: 'Cinnamon yogurt, apple, toasted oats',
      },
      {
        name: 'Peach Almond Dream',
        blurb: 'Yogurt, peach, toasted almonds, honey',
      },
      {
        name: 'Mango Coconut Crunch',
        blurb: 'Mango, toasted coconut, yogurt, granola',
      },
      {
        name: 'Honey Granola Swirl',
        blurb: 'Honey yogurt, house granola, seeds',
      },
      {
        name: 'Vanilla Berry Layer',
        blurb: 'Vanilla yogurt, granola, seasonal berries',
      },
    ],
  },
  {
    id: 'mini-pizzas',
    title: 'Mini Pizzas',
    accent: 'lemon',
    variants: [
      { name: 'Margherita', blurb: 'Tomato, mozzarella, fresh basil' },
      {
        name: 'BBQ Chicken',
        blurb: 'Grilled chicken, BBQ sauce, red onion, mozzarella',
      },
      { name: 'Pepperoni', blurb: 'Pepperoni, tomato, mozzarella, oregano' },
      {
        name: 'Veggie Supreme',
        blurb: 'Peppers, mushrooms, onion, olives, mozzarella',
      },
      { name: 'Four Cheese', blurb: 'Mozzarella, cheddar, parmesan, feta' },
    ],
  },
  {
    id: 'juices',
    title: 'Juices & Smoothies',
    accent: 'sky',
    variants: [
      { name: 'Tigernut', blurb: 'Fresh-pressed tigernut, dates, coconut' },
      { name: 'Fruit Naturel', blurb: 'Orange, apple, pineapple, lime' },
      { name: 'Green Detox', blurb: 'Cucumber, apple, celery, ginger, lemon' },
      { name: 'Mango Smoothie', blurb: 'Mango, banana, yogurt, honey' },
      { name: 'Berry Blast', blurb: 'Mixed berries, banana, almond milk' },
      { name: 'Watermelon Cooler', blurb: 'Watermelon, lime, mint' },
      { name: 'Pineapple Ginger', blurb: 'Pineapple, ginger, lime' },
      { name: 'Carrot Orange Zing', blurb: 'Carrot, orange, ginger' },
    ],
  },
]
