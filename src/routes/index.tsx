import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '#/components/Navbar'
import { Hero } from '#/components/Hero'
import { Menu } from '#/components/Menu'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24">
        <Hero />
        <Menu />
      </main>
    </>
  )
}
