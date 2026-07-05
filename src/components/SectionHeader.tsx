import type { LucideIcon } from 'lucide-react'

export function SectionHeader({
  icon: Icon,
  chipClass,
  tickClass,
  title,
  subtitle,
  headingId,
  onDark = false,
}: {
  icon: LucideIcon
  chipClass: string
  tickClass: string
  title: string
  subtitle: string
  headingId?: string
  onDark?: boolean
}) {
  return (
    <div className="text-center">
      <span
        aria-hidden="true"
        className={`bauhaus-chip inline-flex h-10 w-10 items-center justify-center ${chipClass}`}
      >
        <Icon className="h-4 w-4" />
      </span>
      <h2
        id={headingId}
        className={`font-display mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${onDark ? 'text-bg-cream' : 'text-text-dark'}`}
      >
        {title}
      </h2>
      <span
        aria-hidden="true"
        className={`mx-auto mt-3 block h-1.5 w-14 rounded-full border-[2px] border-ink ${tickClass}`}
      />
      <p
        className={`mx-auto mt-4 max-w-xl text-sm leading-relaxed sm:text-base ${onDark ? 'text-bg-cream' : 'text-text-menu'}`}
      >
        {subtitle}
      </p>
    </div>
  )
}
