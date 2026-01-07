import { Bath, Bed } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from './ui/button'
import { CustomSection } from './ui/customSection'
import type { Dispatch } from 'react'
import { scrollToContactForm } from '@/lib/utils'

type Type = 'contact' | 'modal'

interface HeroProps {
  openModal?: boolean
  setModalOpen: Dispatch<React.SetStateAction<boolean>>
}

export const Hero = ({ setModalOpen }: HeroProps) => {
  const { t } = useTranslation()

  const handleClick = (type: Type) => {
    if (type === 'contact') {
      scrollToContactForm()
    }

    // 3. Logic to open the modal
    if (type === 'modal') {
      setModalOpen(true)
    }
  }

  return (
    <CustomSection className="bg-secondary">
      <div className="flex lg:flex-row flex-col-reverse gap-6 py-10 items-center ">
        {/* Text Content */}
        <div className="flex flex-col gap-6  flex-1 ">
          <div className="flex flex-col gap-4 text-left">
            <h1 className="text-4xl font-black leading-tight ">
              {t('hero.h1')}
            </h1>
            <h2 className="text-text-secondary text-base font-normal leading-relaxed">
              {t('hero.p')}
            </h2>
          </div>

          <div className="divide-x flex items-center gap-4">
            <div className="flex  items-center gap-2 pr-4 ">
              <Bed className="text-primary" />{' '}
              <div className="flex items-baseline gap-1">
                {/* <span className="text-xl font bold">1</span>{' '}
                <span className="text-muted-foreground">bedroom</span> */}
                {t('hero.icons.bedrooms')}
              </div>
            </div>
            <div className="flex  items-center gap-2 pr-4 ">
              <Bath className="text-primary" />{' '}
              <div className="flex items-baseline gap-1">
                {/* <span className="text-xl font bold">1</span>{' '}
                <span className="text-muted-foreground">bathroom</span> */}
                {t('hero.icons.bathrooms')}
              </div>
            </div>
          </div>

          <div className="flex gap-4 flex-wrap ">
            <Button
              onClick={() => handleClick('contact')}
              className="h-12 w-full md:w-fit flex-1 text-base"
            >
              {t('hero.btns.contact')}
            </Button>
            <Button
              onClick={() => handleClick('modal')}
              variant="outline"
              className="h-12 w-full md:w-fit text-base"
            >
              {t('hero.btns.gallery')}
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-1/2 flex-1">
          <img
            src="/hero.jpeg"
            className="object-cover rounded-lg aspect-square"
          />
        </div>
      </div>
    </CustomSection>
  )
}
