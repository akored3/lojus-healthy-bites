export type Accent = 'tangerine' | 'pink' | 'lemon' | 'green'

export const ACCENT_BG: Record<Accent, string> = {
  tangerine: 'bg-accent-tangerine',
  pink: 'bg-accent-pink',
  lemon: 'bg-accent-lemon',
  green: 'bg-accent-green',
}

export const CARD_BG: Record<Accent, string> = {
  tangerine: 'bg-bg-tangerine',
  pink: 'bg-pink-light',
  lemon: 'bg-bg-lemon',
  green: 'bg-bg-sage',
}

export const ON_ACCENT_TEXT: Record<Accent, string> = {
  tangerine: 'text-ink',
  pink: 'text-white',
  lemon: 'text-ink',
  green: 'text-white',
}
