import { UtensilsCrossed } from 'lucide-react'
import { MENU_CATEGORIES, type MenuCategory } from '#/lib/menu'

type Corner = 'tl' | 'tr' | 'bl' | 'br'

const CORNER_POSITION: Record<Corner, string> = {
  tl: 'top-4 -left-12 -rotate-6 sm:top-8 sm:-left-16 md:-left-20 lg:-left-24',
  tr: 'top-4 -right-12 rotate-6 sm:top-8 sm:-right-16 md:-right-20 lg:-right-24',
  bl: 'bottom-4 -left-12 rotate-6 sm:bottom-8 sm:-left-16 md:-left-20 lg:-left-24',
  br: 'bottom-4 -right-12 -rotate-6 sm:bottom-8 sm:-right-16 md:-right-20 lg:-right-24',
}

const ACCENT_BG: Record<MenuCategory['accent'], string> = {
  tangerine: 'bg-accent-tangerine',
  sky: 'bg-accent-sky',
  lemon: 'bg-accent-lemon',
}

const ACCENT_DOT: Record<MenuCategory['accent'], string> = {
  tangerine: 'bg-accent-tangerine',
  sky: 'bg-accent-sky',
  lemon: 'bg-accent-lemon',
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

function MenuCard({ category }: { category: MenuCategory }) {
  return (
    <article className="bauhaus-card relative flex flex-col bg-white p-6 text-center transition-transform duration-200 hover:-translate-y-1 sm:p-8">
      <div
        aria-hidden="true"
        className={`absolute right-4 top-4 h-3 w-3 rotate-45 border-[2px] border-ink ${ACCENT_DOT[category.accent]}`}
      />

      <div className="mx-auto">
        <span
          className={`bauhaus-chip inline-flex items-center px-5 py-1.5 text-sm text-ink sm:text-base ${ACCENT_BG[category.accent]}`}
        >
          {category.title}
        </span>
      </div>

      <ul className="mt-6 flex flex-col gap-2.5 text-sm text-text-body sm:text-base">
        {category.variants.map((variant) => (
          <li key={variant} className="flex items-center justify-center gap-2">
            <span
              aria-hidden="true"
              className={`h-1.5 w-1.5 rounded-full ${ACCENT_DOT[category.accent]}`}
            />
            {variant}
          </li>
        ))}
      </ul>
    </article>
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

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <span className="bauhaus-chip inline-flex items-center gap-2 bg-accent-green px-4 py-1.5 text-xs text-white sm:text-sm">
            <UtensilsCrossed className="h-4 w-4" aria-hidden="true" />
            Menu
          </span>
          <h2 className="mt-5 text-3xl font-bold text-text-dark sm:text-4xl lg:text-5xl">
            Our Full Menu
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-text-body sm:text-base">
            A handcrafted lineup of parfaits, mini pizzas, and juices — every bite made fresh, just for you.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {MENU_CATEGORIES.map((category) => (
            <MenuCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
