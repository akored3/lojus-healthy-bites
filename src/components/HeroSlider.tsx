const SLIDES = [
  { src: '/images/fruitjuice_shot.png', alt: 'Fresh-pressed Fruit Naturel juices' },
  { src: '/images/parfait_shot.png', alt: 'Layered fruit and yogurt parfait' },
  { src: '/images/pizza_shot.jpg', alt: 'Wood-fired mini pizza' },
]

export function HeroSlider() {
  const track = [...SLIDES, SLIDES[0]]

  return (
    <div
      className="bauhaus-card-lg relative mx-auto mt-12 aspect-[4/3] w-full max-w-md overflow-hidden sm:mt-16 sm:aspect-[16/9] sm:max-w-4xl"
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
            className="h-full w-1/4 shrink-0 object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>
    </div>
  )
}
