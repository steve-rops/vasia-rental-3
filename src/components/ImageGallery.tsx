import { useTranslation } from 'react-i18next'
import { CustomSection } from './ui/customSection'
import { SectionTitle } from './ui/sectionTitle'
import { SectionSubtitle } from './ui/sectionSubtitle'
import { Button } from './ui/button'
import type { Dispatch } from 'react'

export interface GalleryImage {
  url: string
  spanClass?: string
  alt?: string
}

interface HeroProps {
  openModal?: boolean
  setModalOpen: Dispatch<React.SetStateAction<boolean>>
}

const images: Array<GalleryImage> = [
  {
    url: '/images/image-5.jpeg',
  },
  {
    url: '/images/image-9.jpeg',
  },
  {
    url: '/images/image-14.jpeg',
  },
  {
    url: '/images/image-15.jpeg',
  },
]

export const ImageGallery = ({ setModalOpen }: HeroProps) => {
  const { t } = useTranslation()

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setModalOpen(true)
  }

  return (
    <CustomSection className="flex-col bg-accent rounded-md ">
      <div className="flex items-center justify-between">
        <div>
          <SectionTitle>{t('gallery.title')}</SectionTitle>
          <SectionSubtitle>{t('gallery.subtitle')}</SectionSubtitle>
        </div>

        <Button onClick={(e) => handleClick(e)} className="hidden lg:block">
          {t('gallery.btn')}
        </Button>
      </div>

      {/* Desktop Grid: Fixed to allow span classes to work */}
      <div className="hidden lg:grid grid-cols-2 gap-4 w-full">
        {images.map((img, index) => (
          <div
            onClick={(e) => handleClick(e)}
            key={index}
            className={`group relative overflow-hidden rounded-xl bg-gray-100 cursor-pointer shadow-sm h-64     `}
          >
            <div
              className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url("${img.url}")` }}
            />
          </div>
        ))}
      </div>

      {/* Mobile Stack: Added height to prevent layout collapse */}
      <div className="lg:hidden flex justify-center w-full">
        <div
          onClick={(e) => handleClick(e)}
          className="relative h-32"
          style={{ width: `${128 + (images.length - 1) * 24}px` }}
        >
          {images.map((img, index) => (
            <img
              src={img.url}
              key={index}
              alt={img.alt || 'Gallery preview'}
              className="absolute h-32 w-32 object-cover rounded-lg shadow-md border-2 border-white"
              style={{
                left: `${index * 24}px`,
                zIndex: index,
                transform: `rotate(${index * 2}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      <Button
        onClick={(e) => handleClick(e)}
        variant="outline"
        size="sm"
        className="lg:hidden w-fit mx-auto"
      >
        {t('gallery.btn')}
      </Button>
    </CustomSection>
  )
}
