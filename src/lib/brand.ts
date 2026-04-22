export const BRAND = {
  name: "Loju's Healthy Bites",
  short: "Loju's",
  tagline: 'Fresh, Flavorful & Guilt-Free Bites.',
  subtitle:
    'Parfaits, mini pizzas, fresh juices, and wholesome fast food, crafted with love and delivered with care.',
  phone: '+234 913 892 8572',
  whatsappNumber: '2349138928572',
  email: 'slenderbrizzy@gmail.com',
} as const

export const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Menu', href: '#full-menu' },
  { label: 'Why Us', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
] as const

export function whatsappLink(message: string): string {
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_MESSAGES = {
  order: 'Hi, I would like to place an order.',
  reviews: 'Hi, I saw your reviews and I want to order.',
  fab: "Hi, I would like to place an order. Please share today's menu.",
} as const

export function orderItemMessage(itemName: string): string {
  return `Hi Loju's! I'd like to order one ${itemName}.`
}
