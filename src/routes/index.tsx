import { useEffect, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { MotionConfig } from 'motion/react'
import { Navbar } from '#/components/Navbar'
import { Hero } from '#/components/Hero'
import { MarqueeSeam } from '#/components/MarqueeSeam'
import { Menu } from '#/components/Menu'
import { WhyUs } from '#/components/WhyUs'
import { Testimonials } from '#/components/Testimonials'
import { Gallery } from '#/components/Gallery'
import { WhatsAppFab } from '#/components/WhatsAppFab'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const [menuModalOpen, setMenuModalOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.add('hydrated')
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main id="main-content" className="pt-24">
        <Hero />
        <MarqueeSeam />
        <Menu onModalOpenChange={setMenuModalOpen} />
        <WhyUs />
        <Testimonials />
        <Gallery />
        <WhatsAppFab hidden={menuModalOpen} />
      </main>
    </MotionConfig>
  )
}
