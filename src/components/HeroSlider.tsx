const SLIDES = [
  { src: '/images/fruitjuice_shot.png', alt: 'Fresh-pressed Fruit Naturel juices' },
  { src: '/images/parfait_shot.png', alt: 'Layered fruit and yogurt parfait' },
  { src: '/images/pizza_shot.jpg', alt: 'Wood-fired mini pizza' },
]

export function HeroSlider() {
  const track = [...SLIDES, ...SLIDES]

  return (
    <div
      className="relative mt-12 overflow-hidden sm:mt-16"
      aria-label="Food gallery"
      role="region"
    >
      <div className="hero-marquee flex w-max gap-5 sm:gap-8">
        {track.map((slide, i) => (
          <div
            key={i}
            className="bauhaus-card-lg h-48 w-64 shrink-0 sm:h-64 sm:w-80 lg:h-72 lg:w-96"
          >
            <img
              src={slide.src}
              alt={i < SLIDES.length ? slide.alt : ''}
              aria-hidden={i >= SLIDES.length}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
