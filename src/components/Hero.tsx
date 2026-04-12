import { BRAND, WHATSAPP_MESSAGES, whatsappLink } from '#/lib/brand'

function BiteClipDefs() {
  return (
    <svg
      aria-hidden="true"
      className="absolute h-0 w-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Main clip: rectangle with two scalloped bites punched out (evenodd) */}
        <clipPath id="bite-clip" clipPathUnits="objectBoundingBox">
          <path
            fillRule="evenodd"
            d={[
              // Outer rectangle
              'M0,0 H1 V1 H0 Z',
              // Upper-right bite — 5 overlapping tooth-mark circles
              'M0.97,0.08 A0.06,0.08 0 1,1 0.97,0.24 A0.06,0.08 0 1,1 0.97,0.08',
              'M0.91,0.02 A0.05,0.07 0 1,1 0.91,0.16 A0.05,0.07 0 1,1 0.91,0.02',
              'M0.86,0.10 A0.04,0.06 0 1,1 0.86,0.22 A0.04,0.06 0 1,1 0.86,0.10',
              'M0.94,0.18 A0.05,0.06 0 1,1 0.94,0.30 A0.05,0.06 0 1,1 0.94,0.18',
              'M0.88,0.00 A0.04,0.05 0 1,1 0.88,0.10 A0.04,0.05 0 1,1 0.88,0.00',
              // Lower-right bite — 4 smaller tooth marks
              'M0.92,0.78 A0.05,0.06 0 1,1 0.92,0.90 A0.05,0.06 0 1,1 0.92,0.78',
              'M0.86,0.82 A0.04,0.06 0 1,1 0.86,0.94 A0.04,0.06 0 1,1 0.86,0.82',
              'M0.80,0.86 A0.04,0.05 0 1,1 0.80,0.96 A0.04,0.05 0 1,1 0.80,0.86',
              'M0.96,0.82 A0.04,0.07 0 1,1 0.96,0.96 A0.04,0.07 0 1,1 0.96,0.82',
            ].join(' ')}
          />
        </clipPath>
        {/* Inverse clip: only the bite holes (for the reveal texture) */}
        <clipPath id="bite-holes" clipPathUnits="objectBoundingBox">
          {/* Upper bite circles */}
          <ellipse cx="0.97" cy="0.16" rx="0.06" ry="0.08" />
          <ellipse cx="0.91" cy="0.09" rx="0.05" ry="0.07" />
          <ellipse cx="0.86" cy="0.16" rx="0.04" ry="0.06" />
          <ellipse cx="0.94" cy="0.24" rx="0.05" ry="0.06" />
          <ellipse cx="0.88" cy="0.05" rx="0.04" ry="0.05" />
          {/* Lower bite circles */}
          <ellipse cx="0.92" cy="0.84" rx="0.05" ry="0.06" />
          <ellipse cx="0.86" cy="0.88" rx="0.04" ry="0.06" />
          <ellipse cx="0.80" cy="0.91" rx="0.04" ry="0.05" />
          <ellipse cx="0.96" cy="0.89" rx="0.04" ry="0.07" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-warm px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-12">
      <BiteClipDefs />
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
            <span className="bite-reveal" aria-hidden="true" />
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
