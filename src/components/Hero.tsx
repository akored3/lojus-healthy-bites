import { BRAND, WHATSAPP_MESSAGES, whatsappLink } from '#/lib/brand'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-warm px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-12">
      <div
        aria-hidden="true"
        className="bauhaus-halftone absolute inset-0 opacity-[0.14]"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-14 top-[38%] hidden -translate-y-1/2 -rotate-6 select-none md:block lg:-left-20"
        >
          <div className="h-40 w-40 overflow-hidden rounded-full border-[1.5px] border-[#1a1a1a] shadow-[2px_2px_0_#1a1a1a] lg:h-56 lg:w-56">
            <img src="/images/floating-juice.png" alt="" className="h-full w-full object-cover" />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-14 top-[38%] hidden -translate-y-1/2 rotate-6 select-none md:block lg:-right-20"
        >
          <div className="h-40 w-40 overflow-hidden rounded-full border-[1.5px] border-[#1a1a1a] shadow-[2px_2px_0_#1a1a1a] lg:h-56 lg:w-56">
            <img src="/images/floating-pizza.png" alt="" className="h-full w-full object-cover" />
          </div>
        </div>
        <h1 className="mb-5 text-3xl font-bold leading-tight text-text-dark sm:text-4xl lg:text-5xl">
          Fresh, Flavorful &<br />
          Guilt-Free{' '}
          <span className="bite-wrap text-accent-tangerine">
            <span className="bite-text">Bites</span>
          </span>
          <br />
          Crafted With Love<span className="text-accent-tangerine">.</span>
        </h1>

        <p className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-text-body sm:text-base">
          {BRAND.subtitle}
        </p>

        <a
          href={whatsappLink(WHATSAPP_MESSAGES.order)}
          target="_blank"
          rel="noopener noreferrer"
          className="bauhaus-btn bg-accent-tangerine text-sm text-text-dark sm:text-base"
        >
          Order Now →
        </a>
      </div>
    </section>
  )
}
