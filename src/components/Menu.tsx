import type { CSSProperties } from 'react'
import { UtensilsCrossed } from 'lucide-react'
import { MENU_CATEGORIES, type MenuCategory } from '#/lib/menu'
import { useInView } from '#/lib/useInView'

type Corner = 'tl' | 'tr' | 'bl' | 'br' | 'ml' | 'mr'

const CORNER_POSITION: Record<Corner, string> = {
  tl: 'top-3 -left-14 -rotate-6',
  tr: 'top-4 -right-14 rotate-6',
  bl: 'bottom-16 -left-14 rotate-6 hidden md:block',
  br: 'bottom-10 -right-14 -rotate-6 hidden md:block',
  ml: 'top-[31%] -left-10 rotate-6 hidden sm:block',
  mr: 'top-[34%] -right-10 -rotate-6 hidden sm:block',
}

const CORNER_SIZE: Record<Corner, string> = {
  tl: 'h-36 w-36 sm:h-40 sm:w-40 md:h-44 md:w-44',
  tr: 'h-36 w-36 sm:h-40 sm:w-40 md:h-44 md:w-44',
  bl: 'h-32 w-32 lg:h-36 lg:w-36',
  br: 'h-32 w-32 lg:h-36 lg:w-36',
  ml: 'h-28 w-28 md:h-32 md:w-32',
  mr: 'h-28 w-28 md:h-32 md:w-32',
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
      className="menu-card bauhaus-card relative mx-auto flex w-full max-w-sm flex-col bg-white p-5 text-center transition-transform duration-200 hover:-translate-y-1 sm:p-6"
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

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
          {MENU_CATEGORIES.map((category, idx) => (
            <MenuCard key={category.id} category={category} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
