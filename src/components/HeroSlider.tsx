const SLIDES = [
  {
    src: '/images/carousel_juice.webp',
    alt: 'Fresh-pressed Fruit Naturel juices',
    width: 1536,
    height: 1024,
  },
  {
    src: '/images/carousel_parfait.webp',
    alt: 'Layered fruit and yogurt parfait',
    width: 1536,
    height: 1024,
  },
  {
    src: '/images/carousel_pizza.webp',
    alt: 'Wood-fired mini pizza',
    width: 600,
    height: 424,
  },
]

export function HeroSlider() {
  const track = [...SLIDES, SLIDES[0]]

  return (
    <div
      className="bauhaus-card-lg relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden sm:aspect-[16/9] sm:max-w-4xl lg:max-w-5xl xl:max-w-6xl"
      aria-label="Food gallery"
      role="region"
    >
      <div className="hero-carousel flex h-full w-[400%]">
        {track.map((slide, i) => (
          <img
            key={i}
            src={slide.src}
            alt={i < SLIDES.length ? slide.alt : ''}
            aria-hidden={i >= SLIDES.length}
            width={slide.width}
            height={slide.height}
            className="h-full w-1/4 shrink-0 object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
        ))}
      </div>
    </div>
  )
}
