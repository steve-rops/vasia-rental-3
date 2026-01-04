import type { ReactNode } from 'react'

export const CustomSection = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <section
      className={`px-4 md:px-10 lg:px-20 gap-6 flex flex-1 justify-center py-5 lg:py-14 ${className}`}
    >
      {children}
    </section>
  )
}
