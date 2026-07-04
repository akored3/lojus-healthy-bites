import type { LucideIcon } from 'lucide-react'

export function SectionHeader({
  icon: Icon,
  chipClass,
  title,
  subtitle,
  headingId,
}: {
  icon: LucideIcon
  chipClass: string
  title: string
  subtitle: string
  headingId?: string
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
        className="mt-5 text-3xl font-bold text-text-dark sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-text-body sm:text-base">
        {subtitle}
      </p>
    </div>
  )
}
