import type { ReactNode } from 'react'

export const SectionTitle = ({ children }: { children: ReactNode }) => {
  return <h4 className="text-primary/80 text-3xl w-full">{children}</h4>
}
