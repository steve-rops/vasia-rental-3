import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardHeader } from './ui/card'
import { CustomSection } from './ui/customSection'
import { SectionSubtitle } from './ui/sectionSubtitle'
import { SectionTitle } from './ui/sectionTitle'
import type { Locales } from '@/lib/i18n'
import { features } from '@/data/features'

export const Features = () => {
  const { t, i18n } = useTranslation()
  const locale = i18n.language as Locales

  return (
    <CustomSection className="flex-col">
      <div className="w-full">
        <SectionTitle>{t('features.title')}</SectionTitle>
        <SectionSubtitle>{t('features.subtitle')}</SectionSubtitle>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {features.map((f) => {
          const Icon = f.icon
          return (
            <Card
              key={f.title[locale]}
              className="gap-0 group hover:border-primary/30 hover:shadow-lg transition-all duration-200 "
            >
              <CardHeader className="">
                <div className="w-fit rounded-full p-2 bg-primary/20">
                  <Icon className="text-primary" />
                </div>
              </CardHeader>
              <CardContent className="grid grid-rows-2">
                <div className="font-bold">{f.title[locale]}</div>
                <div className="text-xs">{f.description[locale]}</div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </CustomSection>
  )
}
