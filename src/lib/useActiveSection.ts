import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: readonly string[]): {
  activeId: string
  atTop: boolean
} {
  const [activeId, setActiveId] = useState<string>('')
  const [atTop, setAtTop] = useState<boolean>(true)

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    elements.forEach((el) => observer.observe(el))

    const onScroll = () => setAtTop(window.scrollY < 120)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [sectionIds.join(',')])

  return { activeId, atTop }
}
