import { describe, expect, it } from 'vitest'
import { MENU_CATEGORIES } from './menu'

describe('MENU_CATEGORIES', () => {
  it('has unique category ids', () => {
    const ids = MENU_CATEGORIES.map((c) => c.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('has at least one variant per category', () => {
    for (const category of MENU_CATEGORIES) {
      expect(category.variants.length).toBeGreaterThan(0)
    }
  })

  it('has unique variant names within each category', () => {
    for (const category of MENU_CATEGORIES) {
      const names = category.variants.map((v) => v.name)
      expect(new Set(names).size).toBe(names.length)
    }
  })

  it('has a positive whole-naira price on every variant', () => {
    for (const category of MENU_CATEGORIES) {
      for (const variant of category.variants) {
        expect(variant.price).toBeGreaterThan(0)
        expect(Number.isInteger(variant.price)).toBe(true)
      }
    }
  })
})
