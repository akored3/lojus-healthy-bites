import { AnimatePresence, motion } from 'motion/react'
import { WHATSAPP_MESSAGES } from '#/lib/brand'
import { SPRING_POP } from '#/lib/reveal'
import { WhatsAppCta } from './WhatsAppCta'
import { WhatsAppIcon } from './WhatsAppIcon'

export function WhatsAppFab({ hidden }: { hidden: boolean }) {
  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -12 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, transition: { duration: 0.15 } }}
          transition={SPRING_POP}
          whileHover={{ scale: 1.06 }}
          className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-[250] sm:bottom-6 sm:right-6"
        >
          <WhatsAppCta
            message={WHATSAPP_MESSAGES.fab}
            aria-label="Order on WhatsApp"
            className="bauhaus-chip flex h-14 w-14 bg-whatsapp text-ink"
          >
            <WhatsAppIcon className="h-7 w-7" />
          </WhatsAppCta>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
