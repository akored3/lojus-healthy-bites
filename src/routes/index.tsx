import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '#/components/Navbar'
import { Wordmark } from '#/components/Wordmark'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-28">
        <section className="flex min-h-[60vh] items-center justify-center px-6 py-20 text-center">
          <div className="bauhaus-card max-w-xl p-10">
            <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#525c4a]">
              Step 2 · Navbar
            </p>
            <div className="mb-4 flex justify-center">
              <Wordmark size="lg" />
            </div>
            <p className="text-sm text-[#525c4a] sm:text-base">
              Navbar is live. Scroll anchors and mobile menu are wired — next stop is the Hero.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
