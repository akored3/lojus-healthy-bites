import { useRef } from 'react'
import { motion } from 'motion/react'
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react'
import { TESTIMONIALS } from '#/lib/testimonials'
import type { Testimonial } from '#/lib/testimonials'
import { WHATSAPP_MESSAGES } from '#/lib/brand'
import { ACCENT_BG, CARD_BG, ON_ACCENT_TEXT } from '#/lib/accents'
import { fadeUp, popIn, riseIn, VIEWPORT_ONCE } from '#/lib/reveal'
import { SectionHeader } from './SectionHeader'
import { WhatsAppCta } from './WhatsAppCta'
import { WhatsAppIcon } from './WhatsAppIcon'

const CARD_STAGGER = 0.14
const QUOTE_OFFSET = 0.18
const STARS_OFFSET = 0.26
const STAR_STAGGER = 0.06
const TEXT_OFFSET = 0.34
const AUTHOR_OFFSET = 0.44

function StarRow({ rating, delay }: { rating: number; delay: number }) {
  return (
    <div
      role="img"
      className="flex gap-1"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <motion.span
          key={i}
          variants={popIn(delay + i * STAR_STAGGER)}
          aria-hidden="true"
        >
          <Star
            className={`h-4 w-4 ${i < rating ? 'fill-accent-lemon text-ink' : 'text-ink/50'}`}
          />
        </motion.span>
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
  const cardDelay = index * CARD_STAGGER
  const tilt = index % 2 === 0 ? '-rotate-2' : 'rotate-2'

  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT_ONCE}
      variants={riseIn(cardDelay)}
      whileHover={{ x: -2, y: -2 }}
      className={`bauhaus-card bauhaus-lift relative flex w-[78%] shrink-0 snap-start flex-col gap-4 p-6 sm:w-[55%] md:w-[calc((100%-3rem)/3)] md:p-7 ${CARD_BG[item.accent]}`}
    >
      <motion.span
        aria-hidden="true"
        variants={popIn(cardDelay + QUOTE_OFFSET)}
        className={`bauhaus-chip absolute -left-3 -top-3 h-10 w-10 ${ACCENT_BG[item.accent]} ${ON_ACCENT_TEXT[item.accent]} ${tilt}`}
      >
        <Quote className="h-4 w-4" />
      </motion.span>

      <StarRow rating={item.rating} delay={cardDelay + STARS_OFFSET} />

      <motion.p
        variants={fadeUp(cardDelay + TEXT_OFFSET)}
        className="font-display flex-1 text-base font-medium italic leading-relaxed text-text-dark sm:text-lg"
      >
        &ldquo;{item.quote}&rdquo;
      </motion.p>

      <motion.footer
        variants={fadeUp(cardDelay + AUTHOR_OFFSET)}
        className="flex items-center gap-3 border-t-2 border-dashed border-ink/20 pt-3"
      >
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-[1.5px] border-ink bg-white shadow-[2px_2px_0_var(--color-ink)]">
          <img
            src={item.avatar}
            alt=""
            width={96}
            height={96}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </span>
        <span>
          <span className="block text-sm font-bold text-text-dark">
            {item.name}
          </span>
          <span className="block text-xs text-text-body">{item.location}</span>
        </span>
      </motion.footer>
    </motion.article>
  )
}

export function Testimonials() {
  const rowRef = useRef<HTMLDivElement>(null)

  const scrollByCard = (direction: -1 | 1) => {
    const row = rowRef.current
    if (!row) return
    row.scrollBy({
      left: direction * row.clientWidth * 0.8,
      behavior: 'smooth',
    })
  }

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden border-t-[3px] border-ink bg-bg-cream px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          chipClass="bg-accent-green text-white"
          tickClass="bg-accent-pink"
          title="Loved by Lagos"
          subtitle="Real people, real bites, real reviews."
          headingId="testimonials-heading"
        />

        <div className="mt-12 -mx-4 sm:-mx-6">
          <div
            ref={rowRef}
            tabIndex={0}
            role="group"
            aria-label="Customer reviews"
            className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-6 pt-4 sm:px-6"
          >
            {TESTIMONIALS.map((item, idx) => (
              <TestimonialCard key={item.id} item={item} index={idx} />
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous reviews"
            className="needs-js bauhaus-chip hidden h-10 w-10 cursor-pointer bg-white text-ink md:inline-flex"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <WhatsAppCta
            message={WHATSAPP_MESSAGES.reviews}
            className="bauhaus-btn bg-whatsapp text-xs text-ink sm:text-sm"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Join them — order now
          </WhatsAppCta>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next reviews"
            className="needs-js bauhaus-chip hidden h-10 w-10 cursor-pointer bg-white text-ink md:inline-flex"
          >
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
        <p className="mt-4 text-center text-xs font-bold text-ink/70 md:hidden">
          Swipe to see more &rarr;
        </p>
      </div>
    </section>
  )
}
