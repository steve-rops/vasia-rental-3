import {
  AirVent,
  ForkKnife,
  Heater,
  ShowerHead,
  SquareParking,
  Telescope,
  WashingMachine,
  Wifi,
} from 'lucide-react'
import { CustomSection } from './ui/customSection'
import { SectionSubtitle } from './ui/sectionSubtitle'
import { SectionTitle } from './ui/sectionTitle'
import type { ReactNode } from 'react'

const className = 'size-4 md:size-8 text-primary'

type Amenity = {
  icon: ReactNode
  label: string
}

const amenities: Array<Amenity> = [
  { icon: <Wifi className={className} />, label: 'High-Speed Wi-Fi' },
  { icon: <ForkKnife className={className} />, label: 'Modern Appliances' },
  { icon: <WashingMachine className={className} />, label: 'Washing Machine' },
  { icon: <AirVent className={className} />, label: 'Air Conditioning' },
  { icon: <Heater className={className} />, label: 'Heating' },
  { icon: <SquareParking className={className} />, label: 'Free Parking' },
  { icon: <Telescope className={className} />, label: 'Balcony' },
  { icon: <ShowerHead className={className} />, label: 'Modern Bathroom' },
]

export const Amenities = () => {
  return (
    <CustomSection className="flex-col bg-primary/5 rounded-md">
      <div>
        <SectionTitle>Amenities</SectionTitle>
        <SectionSubtitle>
          Our apartment has everything yout need
        </SectionSubtitle>
      </div>

      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        {amenities.map((am) => (
          <div className="flex text-xs md:text-base items-center gap-3 bg-background border border-border p-2 rounded-lg hover:border-primary/20 hover:text-primary ">
            {am.icon}
            {am.label}
          </div>
        ))}
      </div>
    </CustomSection>
  )
}
