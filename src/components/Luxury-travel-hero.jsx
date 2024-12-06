'use client'

import * as React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Button } from '@/components/ui/button'
import { Phone, ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  '/rajasthan.jpg',
  '/kerala.jpg',
  '/europe.jpg',
  '/australia.jpg',
  '/dubai.jpg',
]

export default function LuxuryTravelHero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
  })

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-lg bg-white">
      <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-4 py-8">
        <div className="relative">
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex h-[300px] sm:h-[400px] -ml-[10%] touch-pan-y">
              {images.map((src, index) => (
                <div
                  className="flex-[0_0_70%] min-w-0 pl-[10%]"
                  key={index}
                >
                  <div className="h-full transition-transform duration-600">
                    <div
                      className="relative h-full overflow-hidden rounded-2xl"
                      style={{
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden',
                      }}
                    >
                      <img
                        className="absolute inset-0 w-full h-full object-cover"
                        src={src}
                        alt={`Luxury destination ${index + 1}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <h2 className="text-xl font-bold text-yellow-300 drop-shadow-lg">
                          Your personal invite into a world of LUXURY
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
            Discover the World,{' '}
            <span className="block">specially curated for you!</span>
          </h1>
          <p className="text-base text-muted-foreground">
            Our exclusive customized holidays division can cater to every travel need:
            hotel, air tickets, VISA, sightseeings, transfer or the entire package,
            all designed keeping in mind your interests!
          </p>
          <p className="text-base">Tell us what you want and we will design it for you.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-5 text-base w-full sm:w-auto">
              Enquire now
            </Button>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">or</span>
              <a
                href="tel:18002279791"
                className="flex items-center gap-2 text-[#3B4B96] hover:underline text-lg font-semibold"
              >
                <Phone className="h-5 w-5" />
                1800 22 7979
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

