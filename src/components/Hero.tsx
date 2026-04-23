import { BRAND, WHATSAPP_MESSAGES, whatsappLink } from '#/lib/brand'
import { HeroSlider } from './HeroSlider'
import { WhatsAppIcon } from './WhatsAppIcon'

function FloatingImage({
  src,
  side,
  label,
  sublabel,
}: {
  src: string
  side: 'left' | 'right'
  label: string
  sublabel: string
}) {
  const position =
    side === 'left'
      ? '-left-4 -rotate-6 sm:-left-6 md:-left-8 lg:-left-20 xl:-left-32'
      : '-right-4 rotate-6 sm:-right-6 md:-right-8 lg:-right-20 xl:-right-32'

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute top-1/2 -translate-y-1/2 select-none ${position}`}
    >
      <div className="flex h-36 w-28 flex-col items-center justify-between overflow-hidden rounded-[50%] border-[3px] border-ink bg-accent-green px-3 pb-3 pt-3 shadow-[6px_6px_0_#1a1a1a] sm:h-48 sm:w-36 md:h-56 md:w-40 lg:h-80 lg:w-60 xl:h-96 xl:w-72">
        <div className="flex flex-1 items-center justify-center">
          <img
            src={src}
            alt=""
            className="h-full w-full object-contain"
          />
        </div>
        <div className="pb-1 text-center sm:pb-2">
          <div className="text-xs font-bold leading-tight text-white sm:text-sm md:text-base lg:text-xl xl:text-2xl">
            {label}
          </div>
          <div className="text-[8px] leading-tight text-white/80 sm:text-[10px] md:text-xs lg:text-sm">
            {sublabel}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative bg-bg-butter px-4 pb-8 pt-16 sm:px-6 sm:pb-12 sm:pt-20">
      <div className="relative mx-auto max-w-3xl md:max-w-2xl lg:max-w-3xl">
        <FloatingImage
          src="/images/floating_fruitjuice-removebg-preview.png"
          side="left"
          label="FRESH"
          sublabel="Cold-pressed, never stored"
        />
        <FloatingImage
          src="/images/floating_tigernut-removebg-preview.png"
          side="right"
          label="HANDMADE"
          sublabel="Traditional & pure"
        />
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
