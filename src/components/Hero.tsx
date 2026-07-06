import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { BRAND, WHATSAPP_MESSAGES } from '#/lib/brand'
import { fadeUp, popIn, riseIn } from '#/lib/reveal'
import { FloatingSprite } from './FloatingSprite'
import { HeroSlider } from './HeroSlider'
import { WhatsAppCta } from './WhatsAppCta'
import { WhatsAppIcon } from './WhatsAppIcon'

const SWAP_WORDS = [
  { text: 'Bites', color: 'text-accent-tangerine' },
  { text: 'Drinks', color: 'text-accent-green' },
] as const

function SwapWord() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % SWAP_WORDS.length),
      3200,
    )
    return () => clearInterval(id)
  }, [])

  const word = SWAP_WORDS[index]

  return (
    <span className="bite-wrap">
      <span className="sr-only">Bites &amp; Drinks</span>
      {/* Invisible longest word keeps the grid cell at constant width so the
          centered headline doesn't jiggle when the visible word swaps. */}
      <span className="swap-word invisible" aria-hidden="true">
        Drinks
      </span>
      <AnimatePresence initial={false}>
        <motion.span
          key={word.text}
          aria-hidden="true"
          className={`swap-word ${word.color}`}
          initial={{ y: '0.6em', opacity: 0, filter: 'blur(8px)' }}
          animate={{ y: '0em', opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: '-0.6em', opacity: 0, filter: 'blur(8px)' }}
          transition={{ type: 'spring', stiffness: 320, damping: 30 }}
        >
          {word.text}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

function FloatingImage({
  src,
  side,
  width,
  height,
  delay,
}: {
  src: string
  side: 'left' | 'right'
  width: number
  height: number
  delay: number
}) {
  const position =
    side === 'left'
      ? '-left-14 md:-left-20 lg:-left-48 xl:-left-64'
      : '-right-14 md:-right-20 lg:-right-48 xl:-right-64'
  const rotate = side === 'left' ? -6 : 6

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute top-1/2 hidden -translate-y-1/2 select-none sm:block ${position}`}
    >
      <motion.div variants={popIn(delay, rotate, 0.5)}>
        <div className="h-28 w-28 rounded-full border-2 border-ink bg-white shadow-[4px_4px_0_var(--color-ink)] md:h-36 md:w-36 lg:h-64 lg:w-64 xl:h-80 xl:w-80">
          <img
            src={src}
            alt=""
            width={width}
            height={height}
            decoding="async"
            className="h-full w-full object-contain"
          />
        </div>
      </motion.div>
    </div>
  )
}

export function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      className="relative bg-bg-butter px-4 pb-8 pt-16 sm:px-6 sm:pb-16 sm:pt-20"
    >
      <div className="relative isolate mx-auto max-w-3xl md:max-w-2xl lg:max-w-3xl">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
        >
          <motion.div
            variants={popIn(0.1, 0, 0.6)}
            className="relative h-44 w-44 rounded-full bg-bg-lemon sm:h-72 sm:w-72 lg:h-80 lg:w-80"
          >
            <motion.span
              variants={popIn(0.55, 12)}
              className="absolute -left-2 bottom-8 block h-5 w-5 border-2 border-ink bg-accent-green sm:-left-3 sm:h-6 sm:w-6"
            />
            <motion.span
              variants={popIn(0.65)}
              className="absolute -right-1 top-6 block h-6 w-6 bg-accent-tangerine [clip-path:polygon(50%_0,100%_100%,0_100%)] sm:-right-2 sm:h-7 sm:w-7"
            />
          </motion.div>
        </div>
        <FloatingImage
          src="/images/floating_fruitjuice.webp"
          side="left"
          width={640}
          height={380}
          delay={0.6}
        />
        <FloatingImage
          src="/images/floating_tigernut.webp"
          side="right"
          width={640}
          height={353}
          delay={0.7}
        />
        <h1 className="font-display mb-5 px-4 text-center text-3xl font-bold leading-tight tracking-tight text-text-dark sm:px-0 sm:text-5xl lg:text-6xl">
          <motion.span variants={fadeUp(0)} className="block">
            Fresh, Flavorful &amp;
          </motion.span>
          <motion.span variants={fadeUp(0.08)} className="block">
            Guilt-Free <SwapWord />
          </motion.span>
          <motion.span variants={fadeUp(0.16)} className="block">
            Crafted With Love<span className="text-accent-green">.</span>
          </motion.span>
        </h1>
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.p
          variants={fadeUp(0.28)}
          className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-text-body sm:text-lg"
        >
          {BRAND.subtitle}
        </motion.p>

        <motion.div variants={popIn(0.4, 0, 0.5)} className="inline-block">
          <WhatsAppCta
            message={WHATSAPP_MESSAGES.order}
            className="bauhaus-btn bg-whatsapp text-sm text-ink sm:text-base"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Order Now →
          </WhatsAppCta>
        </motion.div>
      </div>
      <div className="relative mx-auto mt-16 max-w-md sm:mt-24 sm:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
        <FloatingSprite
          src="/images/floating_pizza.webp"
          width={320}
          height={320}
          className="-bottom-14 right-[3%] z-10 hidden w-16 rotate-6 sm:block sm:w-20"
        />
        <motion.div variants={riseIn(0.35)}>
          <HeroSlider />
        </motion.div>
      </div>
    </motion.section>
  )
}
