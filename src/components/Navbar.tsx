import { Menu, X } from 'lucide-react'
import { NAV_LINKS, WHATSAPP_MESSAGES, whatsappLink } from '#/lib/brand'
import { Wordmark } from './Wordmark'

const closeMobileMenu = () => {
  const cb = document.getElementById('nav-toggle') as HTMLInputElement | null
  if (cb) cb.checked = false
}

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-[200] px-4 pt-4">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border-[3px] border-[#1a1a1a] bg-[#fffef0] px-4 py-2 shadow-[6px_6px_0_#1a1a1a] sm:px-5"
      >
        <a href="#" className="flex items-center gap-2" aria-label="Loju's Healthy Bites home">
          <Wordmark size="sm" />
        </a>

        <ul className="hidden items-center gap-1 rounded-full border-[2px] border-[#1a1a1a] bg-white px-2 py-1 shadow-[3px_3px_0_#1a1a1a] md:flex">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={i === 0 ? 'page' : undefined}
                className={`inline-flex items-center rounded-full border-[2px] px-3.5 py-1.5 text-xs font-bold transition-colors sm:text-sm ${
                  i === 0
                    ? 'border-[#1a1a1a] bg-[#38bdf8] text-[#1a1a1a] shadow-[2px_2px_0_#1a1a1a]'
                    : 'border-transparent text-[#2d3525] hover:border-[#1a1a1a] hover:bg-[#e0f2fe]'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={whatsappLink(WHATSAPP_MESSAGES.order)}
          target="_blank"
          rel="noopener noreferrer"
          className="bauhaus-btn hidden bg-[#25d366] text-xs text-white lg:inline-flex"
        >
          Order on WhatsApp
        </a>

        <input id="nav-toggle" type="checkbox" className="peer sr-only" aria-hidden="true" />
        <label
          htmlFor="nav-toggle"
          className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[2.5px] border-[#1a1a1a] bg-white shadow-[3px_3px_0_#1a1a1a] md:hidden"
          aria-label="Toggle navigation menu"
        >
          <Menu className="h-5 w-5 peer-checked:hidden" aria-hidden="true" />
          <X className="hidden h-5 w-5 peer-checked:block" aria-hidden="true" />
        </label>

        <div className="pointer-events-none absolute inset-x-0 top-[calc(100%+0.75rem)] hidden px-4 peer-checked:pointer-events-auto peer-checked:block md:peer-checked:hidden">
          <ul className="bauhaus-card mx-auto flex max-w-6xl flex-col gap-2 bg-[#fffef0] p-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="block rounded-full border-[2px] border-transparent px-4 py-2 text-sm font-bold text-[#2d3525] hover:border-[#1a1a1a] hover:bg-[#e0f2fe]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={whatsappLink(WHATSAPP_MESSAGES.order)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="bauhaus-btn mt-1 w-full bg-[#25d366] text-sm text-white"
              >
                Order on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
