import { useTranslation } from 'react-i18next'
import { DynamicIcon } from 'lucide-react/dynamic'
import { Card, CardContent, CardHeader } from './ui/card'
import { CustomSection } from './ui/customSection'
import { SectionSubtitle } from './ui/sectionSubtitle'
import { SectionTitle } from './ui/sectionTitle'
import type { IconName } from 'lucide-react/dynamic'

type Feature = {
  icon: IconName
  title: string
  description: string
}

export const Features = () => {
  const { t } = useTranslation()

  const features = t('features.elements', {
    returnObjects: true,
  }) as Array<Feature>

  return (
    <CustomSection className="flex-col">
      <div className="w-full">
        <SectionTitle>{t('features.title')}</SectionTitle>
        <SectionSubtitle>{t('features.subtitle')}</SectionSubtitle>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {features.map((f) => (
          <Card
            key={f.title}
            className="gap-0 group hover:border-primary/30 hover:shadow-lg transition-all duration-200 "
          >
            <CardHeader className="">
              <div className="w-fit rounded-full p-2 bg-primary/20">
                <DynamicIcon name={f.icon} color="var(--primary)" />
              </div>
            </CardHeader>
            <CardContent className="grid grid-rows-2">
              <div className="font-bold">{f.title}</div>
              <div className="text-xs">{f.description}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </CustomSection>
  )
}
