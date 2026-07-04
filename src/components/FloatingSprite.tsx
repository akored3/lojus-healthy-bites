export function FloatingSprite({
  src,
  width,
  height,
  className,
}: {
  src: string
  width: number
  height: number
  className: string
}) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      className={`pointer-events-none absolute h-auto select-none drop-shadow-[3px_4px_0_rgba(26,26,26,0.18)] ${className}`}
    />
  )
}
