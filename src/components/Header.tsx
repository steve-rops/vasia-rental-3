import { useEffect, useState } from 'react'
import { Button } from './ui/button'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled more than 10 pixels
      setIsScrolled(window.scrollY > 80)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`
        sticky z-20 top-0 justify-between p-4 flex items-center bg-background transition-shadow duration-300
        ${isScrolled ? 'border-b border-border' : 'border-b border-transparent'}
      `}
    >
      <img
        src="/logo.svg"
        alt="Vasia Rental Logo"
        className="h-8 md:h-12 w-auto"
      />

      <div className="gap-2 flex ">
        <Button variant="ghost" size="sm">
          EN
        </Button>
        <Button size="sm" variant="outline">
          Contact Us
        </Button>
      </div>
    </header>
  )
}
