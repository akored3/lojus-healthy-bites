import { useRef, useState } from 'react'
import { motion } from 'motion/react'
import { ArrowLeft, ArrowRight, Play } from 'lucide-react'
import { GALLERY_CLIPS } from '#/lib/gallery'
import type { GalleryClip } from '#/lib/gallery'
import { popIn, riseIn, VIEWPORT_ONCE } from '#/lib/reveal'
import { SectionHeader } from './SectionHeader'

const CARD_STAGGER = 0.12
const CHIP_OFFSET = 0.2
const TITLE_OFFSET = 0.3

function ClipCard({
  clip,
  index,
  playing,
  onPlay,
}: {
  clip: GalleryClip
  index: number
  playing: boolean
  onPlay: () => void
}) {
  const cardDelay = index * CARD_STAGGER

  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT_ONCE}
      variants={riseIn(cardDelay)}
      whileHover={{ x: -2, y: -2 }}
      className="bauhaus-card-lg bauhaus-lift relative aspect-[9/16] w-[62%] shrink-0 snap-start bg-white sm:w-[38%] md:w-[30%] lg:w-[22%]"
    >
      {playing && clip.src ? (
        <video
          src={clip.src}
          poster={clip.poster}
          controls
          autoPlay
          playsInline
          preload="none"
          className="h-full w-full object-cover"
        />
      ) : (
        <>
          <img
            src={clip.poster}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            {clip.src ? (
              <motion.button
                type="button"
                onClick={onPlay}
                variants={popIn(cardDelay + CHIP_OFFSET)}
                aria-label={`Play ${clip.title}`}
                className="bauhaus-chip h-12 w-12 cursor-pointer bg-accent-lemon text-ink"
              >
                <Play className="h-5 w-5" aria-hidden="true" />
              </motion.button>
            ) : (
              <motion.span
                variants={popIn(cardDelay + CHIP_OFFSET)}
                className="bauhaus-chip bg-white/90 px-3 py-1 text-[10px] uppercase tracking-widest text-ink"
              >
                Clip coming soon
              </motion.span>
            )}
          </div>
          <motion.span
            variants={popIn(cardDelay + TITLE_OFFSET, -2)}
            className="bauhaus-chip absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] bg-bg-cream px-3 py-1 text-xs text-ink"
          >
            {clip.title}
          </motion.span>
        </>
      )}
    </motion.article>
  )
}

export function Gallery() {
  const rowRef = useRef<HTMLDivElement>(null)
  const [playingId, setPlayingId] = useState<string | null>(null)

  const scrollByCard = (direction: -1 | 1) => {
    const row = rowRef.current
    if (!row) return
    row.scrollBy({
      left: direction * row.clientWidth * 0.8,
      behavior: 'smooth',
    })
  }

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="relative overflow-hidden border-y-[3px] border-ink bg-band-basil px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          chipClass="bg-accent-lemon"
          tickClass="bg-accent-tangerine"
          title="Fresh From the Kitchen"
          subtitle="Short clips of the good stuff — prepped, poured, and packed to order."
          headingId="gallery-heading"
          onDark
        />

        <div className="mt-12 -mx-4 sm:-mx-6">
          <div
            ref={rowRef}
            tabIndex={0}
            role="group"
            aria-label="Kitchen clips"
            className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-6 pt-4 sm:px-6"
          >
            {GALLERY_CLIPS.map((clip, idx) => (
              <ClipCard
                key={clip.id}
                clip={clip}
                index={idx}
                playing={playingId === clip.id}
                onPlay={() => setPlayingId(clip.id)}
              />
            ))}
          </div>
        </div>

        <div className="mt-2 hidden items-center justify-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous clips"
            className="needs-js bauhaus-chip h-10 w-10 cursor-pointer bg-white text-ink"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next clips"
            className="needs-js bauhaus-chip h-10 w-10 cursor-pointer bg-white text-ink"
          >
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
        <p className="mt-4 text-center text-xs font-bold text-bg-cream/80 md:hidden">
          Swipe to see more &rarr;
        </p>
      </div>
    </section>
  )
}
