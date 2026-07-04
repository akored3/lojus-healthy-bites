import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import appCss from '../styles.css?url'
import { BRAND } from '#/lib/brand'
import { RESTAURANT_SCHEMA } from '#/lib/schema'

const TITLE = "Loju's Healthy Bites — Fresh, Flavorful & Guilt-Free Bites"
const DESCRIPTION =
  "Loju's Healthy Bites — parfaits, mini pizzas, fresh juices, and wholesome fast food crafted with love. Order on WhatsApp for pickup or delivery."
const OG_IMAGE = `${BRAND.url}/og.jpg`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
      },
      { name: 'theme-color', content: '#2b6b2f' },
      { name: 'robots', content: 'index, follow' },
      { title: TITLE },
      { name: 'description', content: DESCRIPTION },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: BRAND.name },
      { property: 'og:title', content: TITLE },
      { property: 'og:description', content: DESCRIPTION },
      { property: 'og:url', content: `${BRAND.url}/` },
      { property: 'og:image', content: OG_IMAGE },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      {
        property: 'og:image:alt',
        content: "Layered fruit and yogurt parfaits from Loju's Healthy Bites",
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: TITLE },
      { name: 'twitter:description', content: DESCRIPTION },
      { name: 'twitter:image', content: OG_IMAGE },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'canonical', href: `${BRAND.url}/` },
      { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/logo192.png',
      },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/manifest.json' },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700;1,9..144,500&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(RESTAURANT_SCHEMA).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
