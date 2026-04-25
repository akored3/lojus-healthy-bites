import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import { UtensilsCrossed, X } from 'lucide-react'
import { MENU_CATEGORIES, formatPrice } from '#/lib/menu'
import type { MenuCategory, MenuVariant } from '#/lib/menu'
import { orderItemMessage, whatsappLink } from '#/lib/brand'
import { useInView } from '#/lib/useInView'
import { WhatsAppIcon } from './WhatsAppIcon'

type Corner = 'tl' | 'tr' | 'bl' | 'br' | 'ml' | 'mr'

const CORNER_POSITION: Record<Corner, string> = {
  tl: 'top-3 -left-14 -rotate-6',
  tr: 'top-4 -right-14 rotate-6',
  bl: 'bottom-16 -left-14 rotate-6',
  br: 'bottom-10 -right-14 -rotate-6',
  ml: 'top-[31%] -left-10 rotate-6',
  mr: 'top-[34%] -right-10 -rotate-6',
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

const CARD_BG: Record<MenuCategory['accent'], string> = {
  tangerine: 'bg-bg-tangerine',
  sky: 'bg-sky-light',
  lemon: 'bg-bg-lemon',
  green: 'bg-bg-mint',
}

const ROW_HOVER_BG: Record<MenuCategory['accent'], string> = {
  tangerine:
    'hover:bg-accent-tangerine/10 focus-visible:bg-accent-tangerine/10',
  sky: 'hover:bg-accent-sky/10 focus-visible:bg-accent-sky/10',
  lemon: 'hover:bg-accent-lemon/15 focus-visible:bg-accent-lemon/15',
  green: 'hover:bg-accent-green/10 focus-visible:bg-accent-green/10',
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

function MenuCard({
  category,
  index,
  onSelect,
}: {
  category: MenuCategory
  index: number
  onSelect: (variant: MenuVariant, accent: MenuCategory['accent']) => void
}) {
  const cardDelay = index * CARD_STAGGER_MS
  const cardStyle = {
    '--card-delay': `${cardDelay}ms`,
    '--pill-delay': `${cardDelay + PILL_OFFSET_MS}ms`,
    '--dot-delay': `${cardDelay + DOT_OFFSET_MS}ms`,
  } as CSSProperties

  return (
    <article
      className={`menu-card bauhaus-card relative mx-auto flex w-full max-w-sm flex-col self-start p-5 text-center transition-transform duration-200 hover:-translate-y-1 sm:p-6 ${CARD_BG[category.accent]}`}
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

      <div className="bauhaus-card mt-6 bg-white p-4 sm:p-5">
        <ul className="scrollbar-hide flex max-h-60 flex-col gap-2.5 overflow-y-auto text-sm text-text-body sm:max-h-none sm:overflow-visible sm:text-base">
          {category.variants.map((variant, itemIdx) => {
            const itemDelay =
              cardDelay + ITEMS_OFFSET_MS + itemIdx * ITEM_STAGGER_MS
            return (
              <li
                key={variant.name}
                className="menu-item"
                style={{ '--item-delay': `${itemDelay}ms` } as CSSProperties}
              >
                <button
                  type="button"
                  onClick={() => onSelect(variant, category.accent)}
                  aria-label={`View ${variant.name}, ${formatPrice(variant.price)}`}
                  className={`group flex w-full cursor-pointer items-center gap-2 rounded-md px-2 py-2 transition-colors duration-200 focus-visible:outline-none ${ROW_HOVER_BG[category.accent]}`}
                >
                  <span
                    aria-hidden="true"
                    className={`menu-bullet inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full transition-transform duration-200 motion-reduce:transition-none group-hover:scale-[1.7] group-focus-visible:scale-[1.7] ${ACCENT_BG[category.accent]}`}
                  />
                  <span className="relative inline-block text-left">
                    {variant.name}
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-200 ease-out motion-reduce:transition-none group-hover:scale-x-100 group-focus-visible:scale-x-100 ${ACCENT_BG[category.accent]}`}
                    />
                  </span>
                  <span className="ml-auto flex-shrink-0 text-xs font-bold tabular-nums text-text-dark sm:text-sm">
                    {formatPrice(variant.price)}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </article>
  )
}

function MenuItemModal({
  variant,
  accent,
  onClose,
}: {
  variant: MenuVariant
  accent: MenuCategory['accent']
  onClose: () => void
}) {
  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="menu-item-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 bg-black/40"
      />
      <div
        className={`relative w-full max-w-sm bauhaus-card p-6 text-center sm:p-8 ${CARD_BG[accent]}`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[2px] border-ink bg-white transition-transform hover:-translate-y-0.5"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <span
          aria-hidden="true"
          className={`inline-block h-3 w-3 border-[2px] border-ink ${ACCENT_BG[accent]}`}
        />
        <h3
          id="menu-item-modal-title"
          className="mt-4 text-2xl font-bold text-text-dark sm:text-3xl"
        >
          {variant.name}
        </h3>
        <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-text-body sm:text-base">
          {variant.blurb}
        </p>
        <p className="mt-4 text-2xl font-bold tabular-nums text-text-dark sm:text-3xl">
          {formatPrice(variant.price)}
        </p>

        <div className="mt-8 flex justify-end">
          <a
            href={whatsappLink(orderItemMessage(variant.name, variant.price))}
            target="_blank"
            rel="noopener noreferrer"
            className="bauhaus-btn bg-whatsapp text-sm text-white sm:text-base"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Order Now →
          </a>
        </div>
      </div>
    </div>
  )
}

export function Menu() {
  const { ref, inView } = useInView<HTMLElement>(0.2)
  const [selected, setSelected] = useState<{
    variant: MenuVariant
    accent: MenuCategory['accent']
  } | null>(null)

  return (
    <section
      ref={ref}
      id="full-menu"
      data-menu-visible={inView}
      className="relative overflow-hidden bg-bg-mint px-8 py-20 sm:px-6 sm:py-28"
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
            className="bauhaus-chip inline-flex h-10 w-10 items-center justify-center bg-accent-tangerine text-white"
          >
            <UtensilsCrossed className="h-4 w-4" aria-hidden="true" />
          </span>
          <h2 className="mt-5 text-3xl font-bold text-text-dark sm:text-4xl lg:text-5xl">
            Our Full Menu
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-text-body sm:text-base">
            A handcrafted lineup of parfaits, mini pizzas, and juices — every
            bite made fresh, just for you.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
          {MENU_CATEGORIES.map((category, idx) => (
            <MenuCard
              key={category.id}
              category={category}
              index={idx}
              onSelect={(variant, accent) => setSelected({ variant, accent })}
            />
          ))}
        </div>
      </div>

      {selected && (
        <MenuItemModal
          variant={selected.variant}
          accent={selected.accent}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  )
}
