import { BRAND, WHATSAPP_MESSAGES, whatsappLink } from '#/lib/brand'
import { HeroSlider } from './HeroSlider'
import { WhatsAppIcon } from './WhatsAppIcon'

function CircleBadge({
  src,
  className,
}: {
  src: string
  className: string
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none rounded-full border-[3px] border-sky-light bg-white shadow-[6px_6px_0_#1a1a1a] ${className}`}
    >
      <img src={src} alt="" className="h-full w-full object-contain" />
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative bg-bg-butter px-4 pb-8 pt-16 sm:px-6 sm:pb-12 sm:pt-20">
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-12">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold leading-tight text-text-dark sm:text-4xl lg:text-5xl">
              Fresh, Flavorful &<br />
              Guilt-Free{' '}
              <span className="bite-wrap text-accent-tangerine">
                <span className="bite-text">Bites</span>
              </span>
              <br />
              Crafted With Love
              <span className="text-accent-tangerine">.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-text-body sm:text-lg md:mx-0">
              {BRAND.subtitle}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <a
                href="#full-menu"
                className="bauhaus-btn bg-white text-sm text-ink sm:text-base"
              >
                View Menu
              </a>
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

          <div className="relative mx-auto h-[18rem] w-full max-w-md sm:h-[22rem] md:h-[26rem] lg:h-[30rem]">
            <CircleBadge
              src="/images/floating_fruitjuice-removebg-preview.png"
              className="absolute left-0 top-0 z-0 h-44 w-44 -rotate-6 sm:h-52 sm:w-52 md:h-56 md:w-56 lg:h-64 lg:w-64"
            />
            <CircleBadge
              src="/images/floating_tigernut-removebg-preview.png"
              className="absolute bottom-0 right-0 z-10 h-44 w-44 rotate-6 sm:h-52 sm:w-52 md:h-56 md:w-56 lg:h-64 lg:w-64"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 sm:mt-24">
        <HeroSlider />
      </div>
    </section>
  )
}
