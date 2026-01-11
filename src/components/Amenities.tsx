import { useTranslation } from 'react-i18next'
import { DynamicIcon } from 'lucide-react/dynamic'
import { CustomSection } from './ui/customSection'
import { SectionSubtitle } from './ui/sectionSubtitle'
import { SectionTitle } from './ui/sectionTitle'
import type { IconName } from 'lucide-react/dynamic'

type Amenity = {
  icon: IconName
  label: string
}

export const Amenities = () => {
  const { t } = useTranslation()
  const amenities = t('amenities.elements', {
    returnObjects: true,
  }) as Array<Amenity>

  return (
    <CustomSection className="flex-col bg-primary/5 rounded-md">
      <div>
        <SectionTitle>{t('amenities.title')}</SectionTitle>
        <SectionSubtitle>{t('amenities.subtitle')}</SectionSubtitle>
      </div>

      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        {amenities.map((am) => (
          <div
            key={am.label}
            className="flex text-xs md:text-base items-center gap-3 bg-background border border-border p-2 rounded-lg hover:border-primary/20 hover:text-primary "
          >
            <DynamicIcon color="var(--primary)" name={am.icon} />
            {am.label}
          </div>
        ))}
      </div>
    </CustomSection>
  )
}
