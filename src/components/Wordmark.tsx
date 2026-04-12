type Size = 'sm' | 'md' | 'lg'

const SIZES: Record<Size, string> = {
  sm: 'text-xl sm:text-2xl',
  md: 'text-2xl sm:text-3xl',
  lg: 'text-4xl sm:text-5xl',
}

export function Wordmark({ size = 'md' }: { size?: Size }) {
  return (
    <span
      className={`relative inline-flex items-baseline font-bold tracking-tight text-ink ${SIZES[size]}`}
      aria-label="Loju's Healthy Bites"
    >
      <span aria-hidden="true" className="relative">
        L
        <span className="relative inline-block">
          <span
            aria-hidden="true"
            className="absolute inset-[12%] -z-10 rounded-full bg-accent-lemon"
          />
          o
        </span>
        ju
      </span>
      <span
        aria-hidden="true"
        className="mx-[0.08em] inline-block h-[0.22em] w-[0.22em] translate-y-[-0.65em] rounded-full bg-accent-tangerine shadow-[1.5px_1.5px_0_var(--color-ink)]"
      />
      <span aria-hidden="true">s</span>
    </span>
  )
}
