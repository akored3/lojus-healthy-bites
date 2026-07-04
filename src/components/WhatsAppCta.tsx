import { whatsappLink } from '#/lib/brand'

export function WhatsAppCta({
  message,
  className,
  onClick,
  'aria-label': ariaLabel,
  children,
}: {
  message: string
  className: string
  onClick?: () => void
  'aria-label'?: string
  children: React.ReactNode
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </a>
  )
}
