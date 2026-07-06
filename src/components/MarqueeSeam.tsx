const SHAPE_CLASS = {
  triangle: 'bg-accent-tangerine [clip-path:polygon(50%_0,100%_100%,0_100%)]',
  square: 'bg-accent-lemon',
  circle: 'rounded-full bg-accent-pink',
} as const

const SEQUENCE = [
  { label: 'Parfaits', shape: 'triangle' },
  { label: 'Mini Pizzas', shape: 'square' },
  { label: 'Fresh Juices', shape: 'circle' },
  { label: 'Order on WhatsApp', shape: 'triangle' },
] as const

function TrackHalf() {
  return (
    <div className="flex items-center text-xs font-bold uppercase tracking-[0.2em] text-bg-cream sm:text-sm">
      {Array.from({ length: 3 }, (_, rep) =>
        SEQUENCE.map((item) => (
          <span key={`${rep}-${item.label}`} className="flex items-center">
            <span className="whitespace-nowrap">{item.label}</span>
            <span
              className={`mx-4 inline-block h-3 w-3 shrink-0 ${SHAPE_CLASS[item.shape]}`}
            />
          </span>
        )),
      )}
    </div>
  )
}

export function MarqueeSeam() {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-t-[3px] border-ink bg-ink py-2.5"
    >
      <div className="marquee-track flex w-max items-center">
        <TrackHalf />
        <TrackHalf />
      </div>
    </div>
  )
}
