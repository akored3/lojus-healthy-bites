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
      ? '-left-14 -rotate-6 lg:-left-20'
      : '-right-14 rotate-6 lg:-right-20'

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute top-[38%] hidden -translate-y-1/2 select-none sm:block ${position}`}
    >
      <div className="h-24 w-24 overflow-hidden rounded-full border-[1.5px] border-ink shadow-[2px_2px_0_var(--color-ink)] sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-56 lg:w-56">
        <img src={src} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-warm px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-20">
      <div className="relative mx-auto max-w-3xl text-center">
        <FloatingImage src="/images/floating-juice.png" side="left" />
        <FloatingImage src="/images/floating-pizza.png" side="right" />

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
