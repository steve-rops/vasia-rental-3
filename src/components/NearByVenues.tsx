import { CustomSection } from './ui/customSection'
import { SectionSubtitle } from './ui/sectionSubtitle'
import { SectionTitle } from './ui/sectionTitle'

export interface Venue {
  id: string
  name: string
  distance: string
}

const venues: Array<Venue> = [
  { id: '1', name: 'Central Square', distance: '700m' },
  { id: '2', name: 'Police Station', distance: '700m' },
  { id: '3', name: 'Gym', distance: 'Walking distance' },
  { id: '4', name: 'Bakery–Café', distance: 'Walking distance' },
  { id: '5', name: 'Supermarket', distance: 'Walking distance' },
]

export const NearByVenues = () => {
  return (
    <CustomSection className="flex-col">
      <div>
        <SectionTitle>Nearby Venues</SectionTitle>
        <SectionSubtitle>
          Everything you need is just a short walk away.
        </SectionSubtitle>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-center w-full ">
        <div className="flex flex-col w-full">
          {venues.map((venue) => (
            <div key={venue.id} className="flex items-baseline w-full py-3">
              <span className="text-[#111418] font-bold text-base shrink-0">
                {venue.name}
              </span>
              {/* Dotted Leader Line */}
              <span className="flex-1 mx-3 border-b-2 border-dotted border-[#dce0e5] relative -top-1"></span>
              <span className="text-[#637288] text-sm font-medium whitespace-nowrap">
                {venue.distance}
              </span>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/2 h-64 rounded-xl overflow-hidden shadow-lg relative ">
          <img
            src="/images/image-2.jpeg"
            alt="Abstract green gradient representation of the area"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </CustomSection>
  )
}
