import { BRAND, WHATSAPP_MESSAGES } from '#/lib/brand'
import { HeroSlider } from './HeroSlider'
import { SpritePlaceholder } from './SpritePlaceholder'
import { WhatsAppCta } from './WhatsAppCta'
import { WhatsAppIcon } from './WhatsAppIcon'

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
      <div className="h-20 w-20 rounded-full border-2 border-ink bg-white shadow-[4px_4px_0_#1a1a1a] sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-64 lg:w-64 xl:h-80 xl:w-80">
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
    <section className="relative bg-bg-butter px-4 pb-8 pt-16 sm:px-6 sm:pb-12 sm:pt-20">
      <SpritePlaceholder
        label="P1"
        className="left-[7%] top-6 hidden h-20 w-20 -rotate-6 border-ink/40 bg-white/40 text-ink/60 md:flex lg:h-24 lg:w-24"
      />
      <SpritePlaceholder
        label="P2"
        className="right-[6%] top-8 hidden h-16 w-16 rotate-12 border-ink/40 bg-white/40 text-ink/60 md:flex lg:h-20 lg:w-20"
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
          Guilt-Free{' '}
          <span className="bite-wrap text-accent-tangerine">
            <span className="bite-text">Bites</span>
          </span>
          <br />
          Crafted With Love<span className="text-accent-tangerine">.</span>
        </h1>
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <SpritePlaceholder
          label="P5"
          className="left-[2%] top-0 hidden h-16 w-16 rotate-6 border-ink/40 bg-white/40 text-ink/60 lg:flex"
        />
        <p className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-text-body sm:text-lg">
          {BRAND.subtitle}
        </p>

        <WhatsAppCta
          message={WHATSAPP_MESSAGES.order}
          className="bauhaus-btn bg-whatsapp text-sm text-white sm:text-base"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Order Now →
        </WhatsAppCta>
      </div>
      <div className="relative mt-16 sm:mt-24">
        <SpritePlaceholder
          label="P3"
          className="-top-7 left-[5%] z-10 flex h-16 w-16 -rotate-6 border-ink/40 bg-white/60 text-ink/60 sm:-top-10 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
        />
        <SpritePlaceholder
          label="P4"
          className="-bottom-6 right-[4%] z-10 flex h-16 w-16 rotate-6 border-ink/40 bg-white/60 text-ink/60 sm:-bottom-8 sm:h-20 sm:w-20"
        />
        <HeroSlider />
      </div>
    </section>
  )
}
