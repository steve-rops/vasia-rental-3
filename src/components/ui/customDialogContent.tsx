import { useEffect, useState } from 'react'
import type { CarouselApi } from '@/components/ui/carousel'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export const CustomDialogContent = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  // Update the state whenever the carousel moves
  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    // 1. Set a large max-width and remove padding (p-0)
    <DialogContent className="max-w-3xl md:max-w-4xl p-0 border-none  overflow-hidden">
      {/* 2. Padding only for the header section */}
      <div className="p-6 pb-2">
        <DialogHeader>
          <div className="flex justify-between items-end">
            <div className="flex flex-col justify-center w-full">
              <DialogTitle className="text-primary text-2xl">
                Image Gallery
              </DialogTitle>
              <DialogDescription>Explore the property</DialogDescription>
            </div>
            {/* Optional: Counter also visible in the header for desktop */}
            <div className="hidden md:block">
              <div className="font-semibold md:flex ">
                {current} <span className="">/</span> {count}
              </div>
            </div>
          </div>
        </DialogHeader>
      </div>

      <div className="w-full">
        {/* 3. Ensure the carousel is relative so buttons stay inside */}
        <Carousel setApi={setApi} className="w-full relative">
          <CarouselContent>
            {Array.from({ length: 18 }, (_, i) => i + 1).map((el) => (
              <CarouselItem key={el}>
                <div className="aspect-video w-full">
                  <img
                    className="w-full h-full object-cover"
                    src={`/images/image-${el}.jpeg`}
                    alt="Property"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Responsive Buttons:
              - Mobile: static/relative position below the image, centered flexbox
              - Desktop (md): absolute position on the left/right sides
          */}
          <div className="flex items-center justify-center gap-4 my-4 md:mt-0">
            <CarouselPrevious className="static md:absolute md:left-4 translate-y-0 md:-translate-y-1/2" />
            <div className="font-semibold text-sm md:hidden">
              {current} <span className="">/</span> {count}
            </div>
            <CarouselNext className="static md:absolute md:right-4 translate-y-0 md:-translate-y-1/2" />
          </div>
        </Carousel>
      </div>
    </DialogContent>
  )
}
