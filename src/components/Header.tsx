import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from './ui/button'
import { LanguageSelector } from './ui/languageSelector'
import { scrollToContactForm } from '@/lib/utils'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useTranslation()

  const handleClick = () => {
    scrollToContactForm()
  }

  useEffect(() => {
    const handleScroll = () => {
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
      <img src="/logo.svg" alt="Vasia Rental Logo" className="h-11 md:h-12 " />

      <div className="gap-2 flex ">
        <LanguageSelector />
        <Button onClick={handleClick} className="size-sm">
          {t('header.contact')}
        </Button>
      </div>
    </header>
  )
}
