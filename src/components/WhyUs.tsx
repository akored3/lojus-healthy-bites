import type { CSSProperties } from 'react'
import { ArrowRight, Heart, Sparkles } from 'lucide-react'
import { WHY_US_ITEMS  } from '#/lib/why-us'
import type {WhyUsItem} from '#/lib/why-us';
import { useInView } from '#/lib/useInView'

const CARD_BG: Record<WhyUsItem['accent'], string> = {
  tangerine: 'bg-bg-tangerine',
  sky: 'bg-sky-light',
  lemon: 'bg-bg-lemon',
  green: 'bg-bg-mint',
}

const HEART_COLOR: Record<WhyUsItem['accent'], string> = {
  tangerine: 'text-accent-tangerine',
  sky: 'text-accent-sky',
  lemon: 'text-accent-lemon',
  green: 'text-accent-green',
}

const CARD_STAGGER_MS = 200
const IMAGE_OFFSET_MS = 240
const HEART_OFFSET_MS = 320
const TITLE_OFFSET_MS = 380
const DESC_OFFSET_MS = 460
const CTA_OFFSET_MS = 560

function WhyUsCard({ item, index }: { item: WhyUsItem; index: number }) {
  const cardDelay = index * CARD_STAGGER_MS
  const cardStyle = {
    '--card-delay': `${cardDelay}ms`,
    '--image-delay': `${cardDelay + IMAGE_OFFSET_MS}ms`,
    '--heart-delay': `${cardDelay + HEART_OFFSET_MS}ms`,
    '--title-delay': `${cardDelay + TITLE_OFFSET_MS}ms`,
    '--desc-delay': `${cardDelay + DESC_OFFSET_MS}ms`,
    '--cta-delay': `${cardDelay + CTA_OFFSET_MS}ms`,
  } as CSSProperties

  const reverse = index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
  const tilt = index % 2 === 1 ? 'rotate-3' : '-rotate-3'

  return (
    <article
      className={`whyus-card bauhaus-card relative flex flex-col items-center gap-5 p-6 text-center transition-transform duration-200 hover:-translate-y-1 sm:p-8 md:items-center md:gap-8 md:p-10 md:text-left ${reverse} ${CARD_BG[item.accent]}`}
      style={cardStyle}
    >
      <Heart
        aria-hidden="true"
        className={`whyus-heart absolute left-4 top-4 h-5 w-5 sm:left-6 sm:top-5 ${HEART_COLOR[item.accent]}`}
      />

      <div className="whyus-image-wrap flex-shrink-0">
        <div
          className={`bauhaus-card h-32 w-32 overflow-hidden bg-white p-0 sm:h-40 sm:w-40 ${tilt}`}
        >
          <img src={item.image} alt="" className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="flex-1">
        <h3 className="whyus-title text-xl font-bold text-text-dark sm:text-2xl">
          {item.title}
        </h3>
        <p className="whyus-desc mt-2 max-w-xl text-sm leading-relaxed text-text-body sm:text-base">
          {item.description}
        </p>
        <div className="mt-5 flex justify-center md:justify-start">
          <a
            href="#full-menu"
            className="whyus-cta bauhaus-btn bg-accent-green text-xs text-white sm:text-sm"
          >
            View Menu
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  )
}

export function WhyUs() {
  const { ref, inView } = useInView<HTMLElement>(0.15)

  return (
    <section
      ref={ref}
      id="about"
      data-whyus-visible={inView}
      className="relative overflow-hidden bg-bg-rose px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="relative mx-auto max-w-4xl">
        <div className="text-center">
          <span
            aria-label="Why us"
            className="bauhaus-chip inline-flex h-10 w-10 items-center justify-center bg-accent-sky text-ink"
          >
            <Sparkles className="h-4 w-4" aria-hidden="true" />
          </span>
          <h2 className="mt-5 text-3xl font-bold text-text-dark sm:text-4xl lg:text-5xl">
            Why Loju's?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-text-body sm:text-base">
            Real food, made by hand, delivered the moment you tap.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-6 sm:gap-8">
          {WHY_US_ITEMS.map((item, idx) => (
            <WhyUsCard key={item.id} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
