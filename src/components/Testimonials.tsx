import type { CSSProperties } from 'react'
import { Quote, Star } from 'lucide-react'
import { TESTIMONIALS } from '#/lib/testimonials'
import type { Testimonial } from '#/lib/testimonials'
import { useInView } from '#/lib/useInView'

const CARD_BG: Record<Testimonial['accent'], string> = {
  tangerine: 'bg-bg-tangerine',
  sky: 'bg-sky-light',
  lemon: 'bg-bg-lemon',
  green: 'bg-bg-rose',
  rose: 'bg-bg-mint',
}

const QUOTE_COLOR: Record<Testimonial['accent'], string> = {
  tangerine: 'bg-accent-tangerine text-white',
  sky: 'bg-accent-sky text-white',
  lemon: 'bg-accent-lemon text-ink',
  green: 'bg-accent-green text-white',
  rose: 'bg-accent-tangerine text-white',
}

const CARD_STAGGER_MS = 140
const QUOTE_OFFSET_MS = 180
const STARS_OFFSET_MS = 260
const TEXT_OFFSET_MS = 340
const AUTHOR_OFFSET_MS = 440

function StarRow({ rating, delayMs }: { rating: number; delayMs: number }) {
  return (
    <div
      className="testimonial-stars flex gap-1"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? 'fill-accent-lemon text-accent-lemon' : 'text-text-body/30'}`}
          style={{ '--star-delay': `${delayMs + i * 60}ms` } as CSSProperties}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

function TestimonialCard({
  item,
  index,
}: {
  item: Testimonial
  index: number
}) {
  const cardDelay = index * CARD_STAGGER_MS
  const cardStyle = {
    '--card-delay': `${cardDelay}ms`,
    '--quote-delay': `${cardDelay + QUOTE_OFFSET_MS}ms`,
    '--stars-delay': `${cardDelay + STARS_OFFSET_MS}ms`,
    '--text-delay': `${cardDelay + TEXT_OFFSET_MS}ms`,
    '--author-delay': `${cardDelay + AUTHOR_OFFSET_MS}ms`,
  } as CSSProperties

  const tilt = index % 2 === 0 ? '-rotate-2' : 'rotate-2'

  return (
    <article
      className={`testimonial-card bauhaus-card relative flex w-[78%] shrink-0 snap-start flex-col gap-4 p-6 transition-transform duration-200 hover:-translate-y-1 sm:w-[55%] md:w-[calc((100%-3rem)/3)] md:p-7 ${CARD_BG[item.accent]}`}
      style={cardStyle}
    >
      <span
        aria-hidden="true"
        className={`testimonial-quote bauhaus-chip absolute -left-3 -top-3 h-10 w-10 ${QUOTE_COLOR[item.accent]} ${tilt}`}
      >
        <Quote className="h-4 w-4" />
      </span>

      <StarRow
        rating={item.rating}
        delayMs={index * CARD_STAGGER_MS + STARS_OFFSET_MS}
      />

      <p className="testimonial-text flex-1 text-sm leading-relaxed text-text-dark sm:text-base">
        &ldquo;{item.quote}&rdquo;
      </p>

      <footer className="testimonial-author border-t-2 border-dashed border-ink/20 pt-3">
        <p className="text-sm font-bold text-text-dark">{item.name}</p>
        <p className="text-xs text-text-body">{item.location}</p>
      </footer>
    </article>
  )
}

export function Testimonials() {
  const { ref, inView } = useInView<HTMLElement>(0.1)

  return (
    <section
      ref={ref}
      id="testimonials"
      data-testimonials-visible={inView}
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-bg-lemon px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <span
            aria-label="Testimonials"
            className="bauhaus-chip inline-flex h-10 w-10 items-center justify-center bg-accent-tangerine text-white"
          >
            <Quote className="h-4 w-4" aria-hidden="true" />
          </span>
          <h2
            id="testimonials-heading"
            className="mt-5 text-3xl font-bold text-text-dark sm:text-4xl lg:text-5xl"
          >
            Loved by Lagos
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-text-body sm:text-base">
            Real people, real bites, real reviews.
          </p>
        </div>

        <div className="mt-12 -mx-4 sm:-mx-6">
          <div className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-6 pt-4 sm:px-6">
            {TESTIMONIALS.map((item, idx) => (
              <TestimonialCard key={item.id} item={item} index={idx} />
            ))}
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-text-body sm:text-sm">
          Swipe to see more &rarr;
        </p>
      </div>
    </section>
  )
}
