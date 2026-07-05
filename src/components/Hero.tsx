import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { BRAND, WHATSAPP_MESSAGES } from '#/lib/brand'
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
}: {
  src: string
  side: 'left' | 'right'
  width: number
  height: number
}) {
  const position =
    side === 'left'
      ? '-left-10 -rotate-6 sm:-left-14 md:-left-20 lg:-left-48 xl:-left-64'
      : '-right-10 rotate-6 sm:-right-14 md:-right-20 lg:-right-48 xl:-right-64'

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute top-1/2 -translate-y-1/2 select-none ${position}`}
    >
      <div className="h-20 w-20 rounded-full border-2 border-ink bg-white shadow-[4px_4px_0_var(--color-ink)] sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-64 lg:w-64 xl:h-80 xl:w-80">
        <img
          src={src}
          alt=""
          width={width}
          height={height}
          decoding="async"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative bg-bg-butter px-4 pb-8 pt-16 sm:px-6 sm:pb-16 sm:pt-20">
      <FloatingSprite
        src="/images/floating_chickenboard.webp"
        width={320}
        height={320}
        className="left-[7%] top-6 hidden w-16 -rotate-6 md:block lg:w-20"
      />
      <FloatingSprite
        src="/images/floating_burgers.webp"
        width={320}
        height={320}
        className="right-[6%] top-8 hidden w-16 rotate-12 md:block lg:w-20"
      />
      <div className="relative mx-auto max-w-3xl md:max-w-2xl lg:max-w-3xl">
        <FloatingImage
          src="/images/floating_fruitjuice.webp"
          side="left"
          width={640}
          height={380}
        />
        <FloatingImage
          src="/images/floating_tigernut.webp"
          side="right"
          width={640}
          height={353}
        />
        <h1 className="font-display mb-5 text-center text-4xl font-bold leading-tight tracking-tight text-text-dark sm:text-5xl lg:text-6xl">
          Fresh, Flavorful &<br />
          Guilt-Free <SwapWord />
          <br />
          Crafted With Love<span className="text-accent-green">.</span>
        </h1>
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <FloatingSprite
          src="/images/floating_steak.webp"
          width={320}
          height={485}
          className="left-[2%] top-0 hidden w-16 rotate-6 lg:block"
        />
        <p className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-text-body sm:text-lg">
          {BRAND.subtitle}
        </p>

        <WhatsAppCta
          message={WHATSAPP_MESSAGES.order}
          className="bauhaus-btn bg-whatsapp text-sm text-ink sm:text-base"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Order Now →
        </WhatsAppCta>
      </div>
      <div className="relative mx-auto mt-16 max-w-md sm:mt-24 sm:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
        <FloatingSprite
          src="/images/floating_fries.webp"
          width={320}
          height={641}
          className="-top-[6.5rem] left-[4%] z-10 hidden w-16 -rotate-6 sm:block lg:-top-[8.5rem] lg:w-20"
        />
        <FloatingSprite
          src="/images/floating_pizza.webp"
          width={320}
          height={320}
          className="-bottom-14 right-[3%] z-10 hidden w-16 rotate-6 sm:block sm:w-20"
        />
        <HeroSlider />
      </div>
    </section>
  )
}
