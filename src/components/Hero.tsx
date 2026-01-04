import { Bath, Bed } from 'lucide-react'
import { Button } from './ui/button'
import { CustomSection } from './ui/customSection'

export const Hero = () => {
  return (
    <CustomSection className="bg-secondary">
      <div className="flex lg:flex-row flex-col-reverse gap-6 py-10 items-center ">
        {/* Text Content */}
        <div className="flex flex-col gap-6  flex-1 ">
          <div className="flex flex-col gap-4 text-left">
            <h1 className="text-text-main text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
              Modern Living in the Heart of the City
            </h1>
            <h2 className="text-text-secondary text-base font-normal leading-relaxed">
              Experience our newly renovated, sunlight-filled studio. Featuring
              floor-to-ceiling windows, smart home integration, and premium
              finishes. Ready for move-in today.
            </h2>
          </div>

          <div className="divide-x flex items-center gap-4">
            <div className="flex  items-center gap-2 pr-4 ">
              <Bed className="text-primary" />{' '}
              <div className="flex items-baseline gap-1">
                <span className="text-xl font bold">1</span>{' '}
                <span className="text-muted-foreground">bedroom</span>
              </div>
            </div>
            <div className="flex  items-center gap-2 pr-4 ">
              <Bath className="text-primary" />{' '}
              <div className="flex items-baseline gap-1">
                <span className="text-xl font bold">1</span>{' '}
                <span className="text-muted-foreground">bathroom</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button className="h-12  text-base">View Gallery</Button>
            <Button variant="outline" className="h-12 text-base">
              Book a Tour
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
