import type { CSSProperties } from 'react'
import { ArrowRight, Heart, Sparkles } from 'lucide-react'
import { WHY_US_ITEMS } from '#/lib/why-us'
import type { WhyUsItem } from '#/lib/why-us'
import { ACCENT_BG, CARD_BG } from '#/lib/accents'
import { useInView } from '#/lib/useInView'
import { FloatingSprite } from './FloatingSprite'
import { SectionHeader } from './SectionHeader'

const HEART_COLOR: Record<WhyUsItem['accent'], string> = {
  tangerine: 'text-accent-tangerine',
  pink: 'text-accent-pink',
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
      className={`whyus-card bauhaus-card relative flex flex-col items-center gap-5 p-4 text-center transition-transform duration-200 hover:-translate-y-1 sm:p-5 md:items-center md:gap-6 md:p-6 md:text-left ${reverse} ${CARD_BG[item.accent]}`}
      style={cardStyle}
    >
      <Heart
        aria-hidden="true"
        className={`whyus-heart absolute left-4 top-4 h-5 w-5 sm:left-6 sm:top-5 ${HEART_COLOR[item.accent]}`}
      />

      <div className="whyus-image-wrap flex-shrink-0">
        <div
          className={`bauhaus-card h-32 w-32 p-1.5 sm:h-40 sm:w-40 ${ACCENT_BG[item.accent]} ${tilt}`}
        >
          <img
            src={item.image}
            alt=""
            width={400}
            height={400}
            loading="lazy"
            decoding="async"
            className="h-full w-full rounded-[1rem] border-[2px] border-ink object-cover"
          />
        </div>
      </div>

      <div className="flex-1">
        <h3 className="whyus-title font-display text-xl font-bold tracking-tight text-text-dark sm:text-2xl">
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
      className="relative overflow-hidden border-t-[3px] border-ink bg-band-basil px-4 py-20 sm:px-6 sm:py-28"
    >
      <FloatingSprite
        src="/images/floating_pineapple.webp"
        width={320}
        height={480}
        className="right-0 top-[30%] w-14 rotate-6 sm:w-16 md:right-[6%] md:top-16 md:w-20"
      />
      <FloatingSprite
        src="/images/floating_milkshake.webp"
        width={320}
        height={480}
        className="left-0 top-[55%] w-14 -rotate-6 sm:w-16 lg:left-[3%] lg:top-[38%]"
      />
      <FloatingSprite
        src="/images/floating_orangejuice.webp"
        width={320}
        height={568}
        className="bottom-32 right-0 w-14 rotate-12 sm:w-16 md:bottom-12 md:right-[4%] md:w-20"
      />
      <div className="relative mx-auto max-w-4xl">
        <SectionHeader
          icon={Sparkles}
          chipClass="bg-accent-pink text-white"
          tickClass="bg-accent-lemon"
          title="Why Loju's?"
          subtitle="Real food, made by hand, delivered the moment you tap."
          onDark
        />

        <div className="mt-14 flex flex-col gap-6 sm:gap-8">
          {WHY_US_ITEMS.map((item, idx) => (
            <WhyUsCard key={item.id} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
