import { BRAND, WHATSAPP_MESSAGES, whatsappLink } from '#/lib/brand'
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
      ? '-left-6 -rotate-6 sm:left-2 md:left-8 lg:left-16'
      : '-right-6 rotate-6 sm:right-2 md:right-8 lg:right-16'

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute top-[38%] -translate-y-1/2 select-none ${position}`}
    >
      <div className="h-16 w-16 overflow-hidden rounded-full border-[1.5px] border-ink shadow-[2px_2px_0_var(--color-ink)] sm:h-28 sm:w-28 md:h-40 md:w-40 lg:h-56 lg:w-56">
        <img src={src} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative bg-bg-warm px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-20">
      <FloatingImage src="/images/floating-juice.png" side="left" />
      <FloatingImage src="/images/floating-pizza.png" side="right" />
      <div className="relative mx-auto max-w-3xl text-center">

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
    </section>
  )
}
