import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export const SectionTitle = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <h4 className={cn('text-primary/80 text-3xl w-full', className)}>
      {children}
    </h4>
  )
}
