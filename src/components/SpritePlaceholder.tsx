export function SpritePlaceholder({
  label,
  className,
}: {
  label: string
  className: string
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute select-none items-center justify-center rounded-2xl border-[3px] border-dashed text-xs font-bold ${className}`}
    >
      {label}
    </div>
  )
}
