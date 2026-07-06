import { useState } from 'react'
import { Pause, Play } from 'lucide-react'

const SLIDES = [
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
  {
    src: '/images/carousel_juice.webp',
    alt: 'Fresh-pressed Fruit Naturel juices',
    width: 1536,
    height: 1024,
  },
]

export function HeroSlider() {
  const [paused, setPaused] = useState(false)
  const track = [...SLIDES, SLIDES[0]]

  return (
    <div
      className={`bauhaus-card-lg hero-frame relative mx-auto aspect-[4/3] w-full max-w-md sm:aspect-[16/9] sm:max-w-4xl lg:max-w-5xl xl:max-w-6xl ${paused ? 'carousel-paused' : ''}`}
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
      <div
        aria-hidden="true"
        className="absolute bottom-3 left-3 flex gap-1.5 sm:bottom-4 sm:left-4"
      >
        <span className="hero-tick hero-tick-1 h-2.5 w-2.5 border-2 border-ink bg-accent-lemon" />
        <span className="hero-tick hero-tick-2 h-2.5 w-2.5 border-2 border-ink bg-white" />
        <span className="hero-tick hero-tick-3 h-2.5 w-2.5 border-2 border-ink bg-white" />
      </div>
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-label="Pause slideshow"
        aria-pressed={paused}
        className="needs-js bauhaus-chip absolute bottom-2 right-2 h-9 w-9 cursor-pointer bg-white text-ink sm:bottom-3 sm:right-3"
      >
        {paused ? (
          <Play className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Pause className="h-4 w-4" aria-hidden="true" />
        )}
      </button>
    </div>
  )
}
