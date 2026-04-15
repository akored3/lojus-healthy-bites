type Corner = 'tl' | 'tr' | 'bl' | 'br'

const CORNER_POSITION: Record<Corner, string> = {
  tl: 'top-4 -left-12 -rotate-6 sm:top-8 sm:-left-16 md:-left-20 lg:-left-24',
  tr: 'top-4 -right-12 rotate-6 sm:top-8 sm:-right-16 md:-right-20 lg:-right-24',
  bl: 'bottom-4 -left-12 rotate-6 sm:bottom-8 sm:-left-16 md:-left-20 lg:-left-24',
  br: 'bottom-4 -right-12 -rotate-6 sm:bottom-8 sm:-right-16 md:-right-20 lg:-right-24',
}

function MenuCornerImage({ src, corner }: { src: string; corner: Corner }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute select-none ${CORNER_POSITION[corner]}`}
    >
      <div className="h-28 w-28 sm:h-36 sm:w-36 md:h-52 md:w-52 lg:h-64 lg:w-64">
        <img src={src} alt="" className="h-full w-full object-contain" />
      </div>
    </div>
  )
}

export function Menu() {
  return (
    <section
      id="full-menu"
      className="relative overflow-hidden bg-bg-cream px-4 py-20 sm:px-6 sm:py-28"
    >
      <MenuCornerImage src="/images/menu_tl.png" corner="tl" />
      <MenuCornerImage src="/images/menu_tr.png" corner="tr" />
      <MenuCornerImage src="/images/menu_bl.png" corner="bl" />
      <MenuCornerImage src="/images/menu_br.png" corner="br" />

      <div className="relative mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-text-dark sm:text-4xl lg:text-5xl">
          Our Full Menu
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-text-body sm:text-base">
          Handcrafted parfaits, mini pizzas, and juices — every bite made fresh, just for you.
        </p>

        <div className="mt-14 grid min-h-[360px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {/* cards drop in here once variants are confirmed */}
        </div>
      </div>
    </section>
  )
}
