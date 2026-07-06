export function SectionHeader({
  chipClass,
  tickClass,
  title,
  subtitle,
  headingId,
  onDark = false,
}: {
  chipClass: string
  tickClass: string
  title: string
  subtitle: string
  headingId?: string
  onDark?: boolean
}) {
  return (
    <div className="text-center">
      <span aria-hidden="true" className="relative inline-block h-11 w-12">
        <span
          className={`absolute left-0 top-0 h-9 w-9 rounded-full border-[2.5px] border-ink ${chipClass}`}
        />
        <span
          className={`absolute bottom-0 right-0 h-6 w-6 rotate-12 border-[2.5px] border-ink shadow-[2px_2px_0_var(--color-ink)] ${tickClass}`}
        />
        <span
          className={`absolute -right-1 -top-1 h-5 w-5 [clip-path:polygon(50%_0,100%_100%,0_100%)] ${onDark ? 'bg-bg-cream' : 'bg-ink'}`}
        />
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
