import { BRAND, WHATSAPP_MESSAGES, whatsappLink } from './brand'
import { MENU_CATEGORIES } from './menu'

export const RESTAURANT_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: BRAND.name,
  url: `${BRAND.url}/`,
  image: `${BRAND.url}/og.jpg`,
  logo: `${BRAND.url}/logo512.png`,
  telephone: BRAND.phone,
  email: BRAND.email,
  servesCuisine: ['Healthy', 'Parfaits', 'Pizza', 'Juices & Smoothies'],
  priceRange: '₦₦',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lagos',
    addressCountry: 'NG',
  },
  hasMenu: {
    '@type': 'Menu',
    hasMenuSection: MENU_CATEGORIES.map((category) => ({
      '@type': 'MenuSection',
      name: category.title,
      hasMenuItem: category.variants.map((variant) => ({
        '@type': 'MenuItem',
        name: variant.name,
        description: variant.blurb,
        offers: {
          '@type': 'Offer',
          price: String(variant.price),
          priceCurrency: 'NGN',
        },
      })),
    })),
  },
  potentialAction: {
    '@type': 'OrderAction',
    target: whatsappLink(WHATSAPP_MESSAGES.order),
  },
}
