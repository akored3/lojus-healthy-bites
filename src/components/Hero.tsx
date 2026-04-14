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
      ? '-left-10 -rotate-6 sm:-left-6 md:left-[6%] lg:left-[12%]'
      : '-right-10 rotate-6 sm:-right-6 md:right-[6%] lg:right-[12%]'

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute top-[38%] -translate-y-1/2 select-none md:top-[38%] ${position}`}
    >
      <div className="h-28 w-28 sm:overflow-hidden sm:rounded-full sm:border-[1.5px] sm:border-ink sm:shadow-[2px_2px_0_var(--color-ink)] md:h-64 md:w-64 md:overflow-visible md:rounded-none md:border-0 md:shadow-none lg:h-96 lg:w-96">
        <img
          src={src}
          alt=""
          className="h-full w-full object-contain sm:object-cover md:object-contain"
        />
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative bg-bg-warm px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-20">
      <div className="relative">
        <FloatingImage src="/images/floating_fruitjuice-removebg-preview.png" side="left" />
        <FloatingImage src="/images/floating_tigernut-removebg-preview.png" side="right" />
        <div className="mx-auto max-w-3xl text-center">

        <h1 className="mb-5 text-3xl font-bold leading-tight text-text-dark sm:text-4xl lg:text-5xl">
          Fresh, Flavorful &<br />
          Guilt-Free{' '}
          <span className="bite-wrap text-accent-tangerine">
            <span className="bite-text">Bites</span>
          </span>
          <br />
          Crafted With Love<span className="text-accent-tangerine">.</span>
        </h1>

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
      </div>
      <div className="mt-16 sm:mt-24">
        <HeroSlider />
      </div>
    </section>
  )
}
