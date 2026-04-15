import { UtensilsCrossed } from 'lucide-react'
import { whatsappLink } from '#/lib/brand'
import { MENU_CATEGORIES, type MenuCategory } from '#/lib/menu'
import { WhatsAppIcon } from './WhatsAppIcon'

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
    <article className="bauhaus-card group flex flex-col overflow-hidden bg-white transition-transform duration-200 hover:-translate-y-1 hover:-rotate-1">
      <div className={`relative aspect-[4/3] w-full border-b-[3px] border-ink ${ACCENT_BG[category.accent]}`}>
        <img
          src={category.image}
          alt={category.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 text-left sm:p-6">
        <h3 className="text-2xl font-bold text-text-dark sm:text-3xl">
          {category.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-body sm:text-base">
          {category.tagline}
        </p>

        <a
          href={whatsappLink(category.orderMessage)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Order ${category.title} on WhatsApp`}
          className="bauhaus-btn mt-6 self-start bg-whatsapp text-xs text-white sm:text-sm"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Order on WhatsApp
        </a>
      </div>
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
          <span className="bauhaus-chip inline-flex items-center gap-2 bg-accent-tangerine px-4 py-1.5 text-xs text-white sm:text-sm">
            <UtensilsCrossed className="h-4 w-4" aria-hidden="true" />
            Menu
          </span>
          <h2 className="mt-5 text-3xl font-bold text-text-dark sm:text-4xl lg:text-5xl">
            Our Full Menu
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-text-body sm:text-base">
            Handcrafted parfaits, mini pizzas, and juices — every bite made fresh, just for you.
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
