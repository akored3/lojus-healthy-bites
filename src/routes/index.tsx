import { createFileRoute } from '@tanstack/react-router'
import { MotionConfig } from 'motion/react'
import { Navbar } from '#/components/Navbar'
import { Hero } from '#/components/Hero'
import { Menu } from '#/components/Menu'
import { WhyUs } from '#/components/WhyUs'
import { Testimonials } from '#/components/Testimonials'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main id="main-content" className="pt-24">
        <Hero />
        <Menu />
        <WhyUs />
        <Testimonials />
      </main>
    </MotionConfig>
  )
}
