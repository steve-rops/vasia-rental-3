import type { HTMLAttributes, ReactNode } from 'react'

type CustomSectionProps = HTMLAttributes<HTMLElement> & {
  className?: string
  children: ReactNode
}

export const CustomSection = ({
  className = '',
  children,
  ...props
}: CustomSectionProps) => {
  return (
    <section
      {...props}
      className={`px-4 md:px-10 lg:px-20 gap-6 flex flex-1 justify-center py-5 lg:py-14 ${className}`}
    >
      {children}
    </section>
  )
}
