import { Bath, Bed, Sofa } from 'lucide-react'
import { Card, CardContent, CardHeader } from './ui/card'
import { CustomSection } from './ui/customSection'
import { SectionSubtitle } from './ui/sectionSubtitle'
import { SectionTitle } from './ui/sectionTitle'
import type { ReactNode } from 'react'

type Feature = {
  icon: ReactNode
  title: string
  description: string
}

const features: Array<Feature> = [
  {
    icon: <Bed className="text-primary w-6 h-6" />,
    title: 'Comfortable Bedroom',
    description:
      "One private bedroom featuring a comfortable bed for a restful night's sleep.",
  },
  {
    icon: <Bath className="text-primary w-6 h-6" />,
    title: 'Fully Equipped Kitchen',
    description:
      'Prepare meals with ease using modern appliances and ample space.',
  },
  {
    icon: <Sofa className="text-primary w-6 h-6" />,
    title: 'Cozy Living Area',
    description:
      'A welcoming space to relax, complete with access to a private balcony.',
  },
]

export const Features = () => {
  return (
    <CustomSection className="flex-col">
      <div className="w-full">
        <SectionTitle>Living Spaces</SectionTitle>
        <SectionSubtitle>
          Designed for comfort and functionality with modern finishes
          throughout.
        </SectionSubtitle>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {features.map((f) => (
          <Card
            key={f.title}
            className="gap-0 group hover:border-primary/30 hover:shadow-lg transition-all duration-200 "
          >
            <CardHeader className="">
              <div className="w-fit rounded-full p-2 bg-primary/20">
                {f.icon}
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
