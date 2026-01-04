import type { ReactNode } from 'react'

export const SectionSubtitle = ({ children }: { children: ReactNode }) => {
  return <h5 className="text-sm text-muted-foreground">{children}</h5>
}
