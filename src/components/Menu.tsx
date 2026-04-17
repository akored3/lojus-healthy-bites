import type { CSSProperties } from 'react'
import { UtensilsCrossed } from 'lucide-react'
import { MENU_CATEGORIES, type MenuCategory } from '#/lib/menu'
import { useInView } from '#/lib/useInView'

type Corner = 'tl' | 'tr' | 'bl' | 'br' | 'ml' | 'mr'

const CORNER_POSITION: Record<Corner, string> = {
  tl: 'top-4 -left-12 -rotate-6 sm:top-8 sm:-left-16 md:-left-20 lg:-left-24',
  tr: 'top-4 -right-12 rotate-6 sm:top-8 sm:-right-16 md:-right-20 lg:-right-24',
  bl: 'bottom-4 -left-12 rotate-6 sm:bottom-8 sm:-left-16 md:-left-20 lg:-left-24',
  br: 'bottom-4 -right-12 -rotate-6 sm:bottom-8 sm:-right-16 md:-right-20 lg:-right-24',
  ml: 'top-[32%] -left-8 rotate-6 hidden sm:block md:-left-12 lg:-left-16',
  mr: 'top-[34%] -right-8 -rotate-6 hidden sm:block md:-right-12 lg:-right-16',
}

const CORNER_SIZE: Record<Corner, string> = {
  tl: 'h-28 w-28 sm:h-36 sm:w-36 md:h-52 md:w-52 lg:h-64 lg:w-64',
  tr: 'h-28 w-28 sm:h-36 sm:w-36 md:h-52 md:w-52 lg:h-64 lg:w-64',
  bl: 'h-28 w-28 sm:h-36 sm:w-36 md:h-52 md:w-52 lg:h-64 lg:w-64',
  br: 'h-28 w-28 sm:h-36 sm:w-36 md:h-52 md:w-52 lg:h-64 lg:w-64',
  ml: 'h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40',
  mr: 'h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40',
}

const ACCENT_BG: Record<MenuCategory['accent'], string> = {
  tangerine: 'bg-accent-tangerine',
  sky: 'bg-accent-sky',
  lemon: 'bg-accent-lemon',
  green: 'bg-accent-green',
}

const CARD_STAGGER_MS = 160
const PILL_OFFSET_MS = 220
const DOT_OFFSET_MS = 320
const ITEMS_OFFSET_MS = 420
const ITEM_STAGGER_MS = 70

function MenuCornerImage({ src, corner }: { src: string; corner: Corner }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute select-none ${CORNER_POSITION[corner]}`}
    >
      <div className={CORNER_SIZE[corner]}>
        <img src={src} alt="" className="h-full w-full object-contain" />
      </div>
    </div>
  )
}

function MenuCard({ category, index }: { category: MenuCategory; index: number }) {
  const cardDelay = index * CARD_STAGGER_MS
  const cardStyle = {
    '--card-delay': `${cardDelay}ms`,
    '--pill-delay': `${cardDelay + PILL_OFFSET_MS}ms`,
    '--dot-delay': `${cardDelay + DOT_OFFSET_MS}ms`,
  } as CSSProperties

  return (
    <article
      className="menu-card bauhaus-card relative flex flex-col bg-white p-6 text-center transition-transform duration-200 hover:-translate-y-1 sm:p-8"
      style={cardStyle}
    >
      <span
        aria-hidden="true"
        className={`menu-dot absolute right-4 top-4 h-3 w-3 border-[2px] border-ink ${ACCENT_BG[category.accent]}`}
      />

      <div className="mx-auto">
        <span
          className={`menu-pill bauhaus-chip items-center px-5 py-1.5 text-sm text-ink sm:text-base ${ACCENT_BG[category.accent]}`}
        >
          {category.title}
        </span>
      </div>

      <ul className="mt-6 flex flex-col gap-2.5 text-sm text-text-body sm:text-base">
        {category.variants.map((variant, itemIdx) => {
          const itemDelay = cardDelay + ITEMS_OFFSET_MS + itemIdx * ITEM_STAGGER_MS
          return (
            <li
              key={variant}
              className="menu-item flex items-center justify-center gap-2"
              style={{ '--item-delay': `${itemDelay}ms` } as CSSProperties}
            >
              <span
                aria-hidden="true"
                className={`menu-bullet inline-block h-1.5 w-1.5 rounded-full ${ACCENT_BG[category.accent]}`}
              />
              {variant}
            </li>
          )
        })}
      </ul>
    </article>
  )
}

export function Menu() {
  const { ref, inView } = useInView<HTMLElement>(0.2)

  return (
    <section
      ref={ref}
      id="full-menu"
      data-menu-visible={inView}
      className="relative overflow-hidden bg-bg-cream px-4 py-20 sm:px-6 sm:py-28"
    >
      <MenuCornerImage src="/images/menu_tl.png" corner="tl" />
      <MenuCornerImage src="/images/menu_tr.png" corner="tr" />
      <MenuCornerImage src="/images/menu_ml.png" corner="ml" />
      <MenuCornerImage src="/images/menu_mr.png" corner="mr" />
      <MenuCornerImage src="/images/menu_bl.png" corner="bl" />
      <MenuCornerImage src="/images/menu_br.png" corner="br" />

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <span
            aria-label="Menu"
            className="bauhaus-chip inline-flex h-10 w-10 items-center justify-center bg-accent-green text-white"
          >
            <UtensilsCrossed className="h-4 w-4" aria-hidden="true" />
          </span>
          <h2 className="mt-5 text-3xl font-bold text-text-dark sm:text-4xl lg:text-5xl">
            Our Full Menu
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-text-body sm:text-base">
            A handcrafted lineup of parfaits, mini pizzas, and juices — every bite made fresh, just for you.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {MENU_CATEGORIES.map((category, idx) => (
            <MenuCard key={category.id} category={category} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
