import { BRAND, WHATSAPP_MESSAGES, whatsappLink } from '#/lib/brand'
import { HeroSlider } from './HeroSlider'
import { WhatsAppIcon } from './WhatsAppIcon'

function FloatingImage({
  src,
  side,
}: {
  src: string
  side: 'left' | 'right'
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
      <div className="h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-72 lg:w-72 xl:h-96 xl:w-96">
        <img src={src} alt="" className="h-full w-full object-contain" />
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative bg-bg-warm px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-20">
      <div className="relative mx-auto max-w-3xl md:max-w-2xl lg:max-w-3xl">
        <FloatingImage src="/images/floating_fruitjuice-removebg-preview.png" side="left" />
        <FloatingImage src="/images/floating_tigernut-removebg-preview.png" side="right" />
        <h1 className="mb-5 text-center text-3xl font-bold leading-tight text-text-dark sm:text-4xl lg:text-5xl">
          Fresh, Flavorful &<br />
          Guilt-Free{' '}
          <span className="bite-wrap text-accent-tangerine">
            <span className="bite-text">Bites</span>
          </span>
          <br />
          Crafted With Love<span className="text-accent-tangerine">.</span>
        </h1>
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <p className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-text-body sm:text-lg">
          {BRAND.subtitle}
        </p>

        <a
          href={whatsappLink(WHATSAPP_MESSAGES.order)}
          target="_blank"
          rel="noopener noreferrer"
          className="bauhaus-btn bg-whatsapp text-sm text-white sm:text-base"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Order Now →
        </a>
      </div>
      <div className="mt-16 sm:mt-24">
        <HeroSlider />
      </div>
    </section>
  )
}
