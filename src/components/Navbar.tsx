import { Menu, X } from 'lucide-react'
import { NAV_LINKS, WHATSAPP_MESSAGES } from '#/lib/brand'
import { useActiveSection } from '#/lib/useActiveSection'
import { Wordmark } from './Wordmark'
import { WhatsAppCta } from './WhatsAppCta'
import { WhatsAppIcon } from './WhatsAppIcon'

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace('#', '')).filter(
  (id) => id.length > 0,
)

const closeMobileMenu = () => {
  const cb = document.getElementById('nav-toggle') as HTMLInputElement | null
  if (cb) cb.checked = false
}

function navLinkClasses(isActive: boolean, variant: 'desktop' | 'mobile') {
  const base =
    variant === 'desktop'
      ? 'inline-flex items-center rounded-full border-[2px] px-3.5 py-1.5 text-xs font-bold transition-colors sm:text-sm'
      : 'mobile-link block rounded-full border-[2px] px-4 py-2 text-center text-sm font-bold transition-colors'

  return isActive
    ? `${base} border-ink bg-accent-green text-white shadow-[2px_2px_0_var(--color-ink)]`
    : `${base} border-transparent text-text-menu hover:border-ink hover:bg-bg-sage`
}

export function Navbar() {
  const { activeId, atTop } = useActiveSection(SECTION_IDS)
  const isActive = (href: string) =>
    href === '#' ? atTop : !atTop && activeId === href.replace('#', '')

  return (
    <header className="fixed inset-x-0 top-0 z-[200] px-4 pt-4">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border-[3px] border-ink bg-bg-cream px-4 py-2 shadow-[6px_6px_0_var(--color-ink)] sm:px-5"
      >
        <a
          href="#"
          className="flex items-center gap-2"
          aria-label="Loju's Healthy Bites home"
        >
          <Wordmark size="sm" />
        </a>

        <ul className="hidden items-center gap-1 rounded-full border-[2px] border-ink bg-white px-2 py-1 shadow-[3px_3px_0_var(--color-ink)] md:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href)
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={navLinkClasses(active, 'desktop')}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <WhatsAppCta
          message={WHATSAPP_MESSAGES.order}
          className="bauhaus-btn hidden bg-whatsapp text-xs text-ink md:inline-flex"
        >
          Order on WhatsApp
        </WhatsAppCta>

        <input
          id="nav-toggle"
          type="checkbox"
          className="peer sr-only"
          aria-label="Toggle navigation menu"
        />
        <label
          htmlFor="nav-toggle"
          className="nav-toggle-label inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[2.5px] border-ink bg-white shadow-[3px_3px_0_var(--color-ink)] peer-focus-visible:ring-2 peer-focus-visible:ring-ink peer-focus-visible:ring-offset-2 md:hidden"
        >
          <Menu className="icon-menu h-5 w-5" aria-hidden="true" />
          <X className="icon-close h-5 w-5" aria-hidden="true" />
        </label>

        <div className="mobile-panel pointer-events-none absolute inset-x-0 top-[calc(100%+0.75rem)] hidden px-4 peer-checked:pointer-events-auto peer-checked:block md:peer-checked:hidden">
          <ul className="bauhaus-card mx-auto flex max-w-6xl flex-col gap-2 bg-bg-cream p-4">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href)
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMobileMenu}
                    aria-current={active ? 'page' : undefined}
                    className={navLinkClasses(active, 'mobile')}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
            <li className="mt-1 flex justify-center">
              <WhatsAppCta
                message={WHATSAPP_MESSAGES.order}
                onClick={closeMobileMenu}
                aria-label="Order on WhatsApp"
                className="mobile-cta group relative flex h-12 items-center justify-start gap-2 overflow-hidden rounded-full border-[2.5px] border-ink bg-whatsapp pl-[0.875rem] font-bold text-ink"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0" />
                <span className="mobile-cta-text inline-block whitespace-nowrap pr-2 text-sm">
                  Order on WhatsApp
                </span>
              </WhatsAppCta>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
