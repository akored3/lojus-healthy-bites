export type GalleryClip = {
  id: string
  title: string
  poster: string
  src: string | null
}

export const GALLERY_CLIPS: readonly GalleryClip[] = [
  {
    id: 'parfait',
    title: 'Parfait, layer by layer',
    poster: '/images/carousel_parfait.webp',
    src: null,
  },
  {
    id: 'pizza',
    title: 'Fresh from the oven',
    poster: '/images/carousel_pizza.webp',
    src: null,
  },
  {
    id: 'ingredients',
    title: 'Market runs, every morning',
    poster: '/images/whyus_ingredients.webp',
    src: null,
  },
  {
    id: 'juice',
    title: 'Cold-pressed, no shortcuts',
    poster: '/images/carousel_juice.webp',
    src: null,
  },
]
