type Corner = 'tl' | 'tr' | 'bl' | 'br'

const CORNER_POSITION: Record<Corner, string> = {
  tl: 'top-6 -left-10 -rotate-6 sm:top-10 sm:-left-6 md:top-8 md:left-[4%] lg:left-[8%]',
  tr: 'top-6 -right-10 rotate-6 sm:top-10 sm:-right-6 md:top-8 md:right-[4%] lg:right-[8%]',
  bl: 'bottom-6 -left-10 rotate-6 sm:bottom-10 sm:-left-6 md:bottom-8 md:left-[4%] lg:left-[8%]',
  br: 'bottom-6 -right-10 -rotate-6 sm:bottom-10 sm:-right-6 md:bottom-8 md:right-[4%] lg:right-[8%]',
}

function MenuCornerImage({ src, corner }: { src: string; corner: Corner }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute select-none ${CORNER_POSITION[corner]}`}
    >
      <div className="h-24 w-24 sm:h-28 sm:w-28 md:h-40 md:w-40 lg:h-56 lg:w-56">
        <img src={src} alt="" className="h-full w-full object-contain" />
      </div>
    </div>
  )
}

export function Menu() {
  return (
    <section
      id="menu"
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
