import { describe, expect, it } from 'vitest'
import { BRAND, formatPrice, orderItemMessage, whatsappLink } from './brand'

describe('whatsappLink', () => {
  it('targets the brand number', () => {
    expect(whatsappLink('hi')).toBe(
      `https://wa.me/${BRAND.whatsappNumber}?text=hi`,
    )
  })

  it('URL-encodes the message', () => {
    const link = whatsappLink("Hi Loju's! I'd like 2 & more")
    expect(link).not.toContain(' ')
    expect(link).not.toContain('&text')
    expect(decodeURIComponent(link.split('?text=')[1])).toBe(
      "Hi Loju's! I'd like 2 & more",
    )
  })
})

describe('formatPrice', () => {
  it('formats naira with thousands separator', () => {
    expect(formatPrice(2500)).toBe('₦2,500')
    expect(formatPrice(800)).toBe('₦800')
  })
})

describe('orderItemMessage', () => {
  it('includes item name and formatted price', () => {
    expect(orderItemMessage('Berry Bliss', 2500)).toBe(
      "Hi Loju's! I'd like to order one Berry Bliss (₦2,500).",
    )
  })

  it('omits the price tag when no price is given', () => {
    expect(orderItemMessage('Berry Bliss')).toBe(
      "Hi Loju's! I'd like to order one Berry Bliss.",
    )
  })
})
