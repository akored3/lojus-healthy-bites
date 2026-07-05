import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { UtensilsCrossed, X } from 'lucide-react'
import { MENU_CATEGORIES } from '#/lib/menu'
import type { MenuCategory, MenuVariant } from '#/lib/menu'
import { formatPrice, orderItemMessage } from '#/lib/brand'
import { ACCENT_BG, CARD_BG, ON_ACCENT_TEXT } from '#/lib/accents'
import {
  popIn,
  riseIn,
  slideIn,
  SPRING_SOFT,
  VIEWPORT_ONCE,
} from '#/lib/reveal'
import { SectionHeader } from './SectionHeader'
import { WhatsAppCta } from './WhatsAppCta'
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

const ROW_HOVER_BG: Record<MenuCategory['accent'], string> = {
  tangerine:
    'hover:bg-accent-tangerine/10 focus-visible:bg-accent-tangerine/10',
  pink: 'hover:bg-accent-pink/10 focus-visible:bg-accent-pink/10',
  lemon: 'hover:bg-accent-lemon/15 focus-visible:bg-accent-lemon/15',
  green: 'hover:bg-accent-green/10 focus-visible:bg-accent-green/10',
}

const CARD_STAGGER = 0.12
const PILL_OFFSET = 0.18
const DOT_OFFSET = 0.28
const ITEMS_OFFSET = 0.34
const ITEM_STAGGER = 0.06

function MenuCornerImage({
  src,
  corner,
  width,
  height,
}: {
  src: string
  corner: Corner
  width: number
  height: number
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute select-none ${CORNER_POSITION[corner]}`}
    >
      <div className={CORNER_SIZE[corner]}>
        <img
          src={src}
          alt=""
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain"
        />
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
  const cardDelay = index * CARD_STAGGER

  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT_ONCE}
      variants={riseIn(cardDelay)}
      whileHover={{ y: -5 }}
      className={`bauhaus-card relative mx-auto flex w-full max-w-sm flex-col self-start p-5 text-center sm:p-6 md:p-4 lg:p-6 ${CARD_BG[category.accent]}`}
    >
      <motion.span
        aria-hidden="true"
        variants={popIn(cardDelay + DOT_OFFSET, 45)}
        className={`absolute right-4 top-4 h-3 w-3 border-[2px] border-ink ${ACCENT_BG[category.accent]}`}
      />

      <div className="mx-auto">
        <motion.span
          variants={popIn(cardDelay + PILL_OFFSET, 0, 0.5)}
          className={`bauhaus-chip items-center px-5 py-1.5 text-sm sm:text-base md:px-3 md:py-1 md:text-xs lg:px-5 lg:py-1.5 lg:text-base ${ACCENT_BG[category.accent]} ${ON_ACCENT_TEXT[category.accent]}`}
        >
          {category.title}
        </motion.span>
      </div>

      <div className="bauhaus-card mt-6 bg-white p-4 sm:p-5 md:p-3 lg:p-5">
        <ul className="scrollbar-hide flex max-h-60 flex-col gap-2.5 overflow-y-auto text-sm text-text-body sm:max-h-none sm:overflow-visible sm:text-base md:gap-1.5 md:text-xs lg:gap-2.5 lg:text-sm xl:text-base">
          {category.variants.map((variant, itemIdx) => {
            const itemDelay = cardDelay + ITEMS_OFFSET + itemIdx * ITEM_STAGGER
            return (
              <motion.li key={variant.name} variants={slideIn(itemDelay)}>
                <button
                  type="button"
                  onClick={() => onSelect(variant, category.accent)}
                  aria-label={`View ${variant.name}, ${formatPrice(variant.price)}`}
                  className={`group flex w-full cursor-pointer items-center gap-2 rounded-md px-2 py-2 transition-colors duration-200 focus-visible:outline-none md:gap-1.5 md:px-1 md:py-1 lg:gap-2 lg:px-2 lg:py-2 ${ROW_HOVER_BG[category.accent]}`}
                >
                  <motion.span
                    aria-hidden="true"
                    variants={popIn(itemDelay)}
                    className={`inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full transition-transform duration-200 motion-reduce:transition-none group-hover:scale-[1.7] group-focus-visible:scale-[1.7] ${ACCENT_BG[category.accent]}`}
                  />
                  <span className="relative min-w-0 flex-1 text-left">
                    {variant.name}
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-200 ease-out motion-reduce:transition-none group-hover:scale-x-100 group-focus-visible:scale-x-100 ${ACCENT_BG[category.accent]}`}
                    />
                  </span>
                  <span className="flex-shrink-0 text-xs font-bold tabular-nums text-accent-green sm:text-sm md:text-[10px] lg:text-xs xl:text-sm">
                    {formatPrice(variant.price)}
                  </span>
                </button>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </motion.article>
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
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const trigger = document.activeElement as HTMLElement | null
    closeRef.current?.focus()

    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key !== 'Tab') return
      const focusables =
        dialogRef.current?.querySelectorAll<HTMLElement>('button, a[href]')
      if (!focusables?.length) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', handleKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prevOverflow
      trigger?.focus()
    }
  }, [onClose])

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="menu-item-modal-title"
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
    >
      <motion.div
        aria-hidden="true"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/40"
      />
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{
          opacity: 0,
          y: 12,
          scale: 0.97,
          transition: { duration: 0.15 },
        }}
        transition={SPRING_SOFT}
        className={`relative w-full max-w-sm bauhaus-card p-6 text-center sm:p-8 ${CARD_BG[accent]}`}
      >
        <button
          ref={closeRef}
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
          className="font-display mt-4 text-2xl font-bold tracking-tight text-text-dark sm:text-3xl"
        >
          {variant.name}
        </h3>
        <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-text-body sm:text-base">
          {variant.blurb}
        </p>
        <p className="mt-4 text-2xl font-bold tabular-nums text-accent-green sm:text-3xl">
          {formatPrice(variant.price)}
        </p>

        <div className="mt-8 flex justify-end">
          <WhatsAppCta
            message={orderItemMessage(variant.name, variant.price)}
            className="bauhaus-btn bg-whatsapp text-sm text-ink sm:text-base"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Order Now →
          </WhatsAppCta>
        </div>
      </motion.div>
    </div>
  )
}

export function Menu() {
  const [selected, setSelected] = useState<{
    variant: MenuVariant
    accent: MenuCategory['accent']
  } | null>(null)

  return (
    <section
      id="full-menu"
      className="relative overflow-hidden border-t-[3px] border-ink bg-band-sage px-8 py-20 sm:px-6 sm:py-28"
    >
      <MenuCornerImage
        src="/images/menu_tl.webp"
        corner="tl"
        width={400}
        height={600}
      />
      <MenuCornerImage
        src="/images/menu_tr.webp"
        corner="tr"
        width={400}
        height={400}
      />
      <MenuCornerImage
        src="/images/menu_ml.webp"
        corner="ml"
        width={400}
        height={400}
      />
      <MenuCornerImage
        src="/images/menu_mr.webp"
        corner="mr"
        width={400}
        height={571}
      />
      <MenuCornerImage
        src="/images/menu_bl.webp"
        corner="bl"
        width={400}
        height={400}
      />
      <MenuCornerImage
        src="/images/menu_br.webp"
        corner="br"
        width={400}
        height={400}
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          icon={UtensilsCrossed}
          chipClass="bg-accent-tangerine text-ink"
          tickClass="bg-accent-green"
          title="Our Full Menu"
          subtitle="A handcrafted lineup of parfaits, mini pizzas, and juices — every bite made fresh, just for you."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-4 lg:gap-6">
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

      <AnimatePresence>
        {selected && (
          <MenuItemModal
            variant={selected.variant}
            accent={selected.accent}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
