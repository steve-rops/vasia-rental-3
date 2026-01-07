import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export const SectionSubtitle = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <h5 className={cn('text-sm text-muted-foreground', className)}>
      {children}
    </h5>
  )
}
