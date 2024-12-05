'use client'

import * as React from "react"
import useEmblaCarousel from 'embla-carousel-react'
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from "@/lib/utils"

const destinations = [
  {
    name: "Rajasthan",
    tours: 25,
    departures: 164,
    guestsTravelled: 59348,
    image: "https://placehold.co/600x400"
  },
  {
    name: "Kerala",
    tours: 20,
    departures: 144,
    guestsTravelled: 43609,
    image: "https://placehold.co/600x400"
  },
  {
    name: "Jammu and Kashmir",
    tours: 18,
    departures: 123,
    guestsTravelled: 60125,
    image: "https://placehold.co/600x400"
  },
  {
    name: "Sikkim Darjeeling",
    tours: 10,
    departures: 37,
    guestsTravelled: 17234,
    image: "https://placehold.co/600x400"
  },
  {
    name: "Europe",
    tours: 88,
    departures: 80,
    guestsTravelled: 85655,
    image: "https://placehold.co/600x400"
  },
  {
    name: "South East Asia",
    tours: 57,
    departures: 230,
    guestsTravelled: 127030,
    image: "https://placehold.co/600x400"
  },
  {
    name: "Dubai Egypt Israel",
    tours: 25,
    departures: 61,
    guestsTravelled: 35792,
    image: "https://placehold.co/600x400"
  },
  {
    name: "Australia New Zealand",
    tours: 38,
    departures: 35,
    guestsTravelled: 11721,
    image: "https://placehold.co/600x400"
  }
]

const carouselSlides = [
  {
    image: "/carousel1.jpg",
    alt: "Travel destination showcase"
  },
  {
    image: "/carousel2.jpg",
    alt: "Featured travel experience"
  }
]

export default function TravelShowcase() {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Carousel Section */}
        <div className="lg:col-span-4 relative">
          <div className="overflow-hidden rounded-lg" ref={emblaRef}>
            <div className="flex">
              {carouselSlides.map((slide, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                  <div className="relative h-[500px] overflow-hidden rounded-lg">
                    <div className="absolute inset-0">
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          console.error(`Failed to load image: ${slide.image}`);
                          e.target.src = "https://placehold.co/800x500";
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/40" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  index === selectedIndex ? "bg-white" : "bg-white/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bento Grid Section */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <Card key={index} className="group relative overflow-hidden">
              <div className="relative h-[200px] overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="object-cover w-full h-full transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
                  <h3 className="text-xl font-bold">{destination.name}</h3>
                  <div className="space-y-1 text-sm">
                    <p className="flex justify-between">
                      <span>{destination.tours} tours</span>
                      <span>{destination.departures} departures</span>
                    </p>
                    <p>{destination.guestsTravelled.toLocaleString()} guests travelled</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

