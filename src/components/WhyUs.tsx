import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { WHY_US_ITEMS } from '#/lib/why-us'
import type { WhyUsItem } from '#/lib/why-us'
import { ACCENT_BG, CARD_BG } from '#/lib/accents'
import { fadeUp, popIn, riseIn, VIEWPORT_ONCE } from '#/lib/reveal'
import { FloatingSprite } from './FloatingSprite'
import { SectionHeader } from './SectionHeader'

const IMAGE_OFFSET = 0.24
const TITLE_OFFSET = 0.38
const DESC_OFFSET = 0.46
const CTA_OFFSET = 0.56

function WhyUsCard({ item, index }: { item: WhyUsItem; index: number }) {
  const reverse = index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
  const tilt = index % 2 === 1 ? 'rotate-3' : '-rotate-3'

  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT_ONCE}
      variants={riseIn()}
      whileHover={{ x: -2, y: -2 }}
      className={`bauhaus-card bauhaus-lift flex flex-col items-center gap-5 p-4 text-center sm:p-5 md:gap-6 md:p-6 md:text-left ${reverse} ${CARD_BG[item.accent]}`}
    >
      <motion.div
        variants={popIn(IMAGE_OFFSET, 0, 0.6)}
        className="flex-shrink-0"
      >
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
      </motion.div>

      <div className="flex-1">
        <motion.h3
          variants={fadeUp(TITLE_OFFSET)}
          className="font-display text-xl font-bold tracking-tight text-text-dark sm:text-2xl"
        >
          {item.title}
        </motion.h3>
        <motion.p
          variants={fadeUp(DESC_OFFSET)}
          className="mt-2 max-w-xl text-sm leading-relaxed text-text-body sm:text-base"
        >
          {item.description}
        </motion.p>
        <div className="mt-5 flex justify-center md:justify-start">
          <motion.a
            href="#full-menu"
            variants={fadeUp(CTA_OFFSET)}
            className="bauhaus-btn bg-accent-green text-xs text-white sm:text-sm"
          >
            View Menu
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </motion.a>
        </div>
      </div>
    </motion.article>
  )
}

export function WhyUs() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
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
          chipClass="bg-accent-pink text-white"
          tickClass="bg-accent-lemon"
          title="Why Loju's?"
          subtitle="Real food, made by hand, delivered the moment you tap."
          headingId="about-heading"
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
