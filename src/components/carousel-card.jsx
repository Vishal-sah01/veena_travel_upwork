'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { cn } from "@/lib/utils"

const destinations = [
  {
    state: "Jammu & Kashmir",
    title: "Best of Jammu & Kashmir",
    places: ["Srinagar(Houseboat)", "Pahalgam", "Gulmarg", "Sonmarg"],
    days: 8,
    date: "25 Dec",
    price: 72000,
    image: "/JammuC.jpg"
  },
  {
    state: "South East Asia",
    title: "Singapore & Malaysia",
    places: ["Singapore", "Malaysia", "Kuala Lumpur", "Genting Highlands"],
    days: 7,
    date: "04 Jan",
    price: 139000,
    image: "/SingaporeC.jpg"
  },
  {
    state: "Rajasthan",
    title: "Golden Triangle",
    places: ["Jaipur", "Jodhpur", "Udaipur", "Jaisalmer"],
    days: 10,
    date: "1 Jan",
    price: 65000,
    image: "/RajasthanC.jpg"
  },
  {
    state: "Kerala",
    title: "Best of Kerala",
    places: ["Kochi", "Munnar", "Thekkady", "Alleppey Houseboat", "Varkala", "Kanyakumari", "Thiruvananthapuram"],
    days: 10,
    date: "26 Dec",
    price: 66000,
    image: "/KeralaC.jpg"
  },
  {
    state: "Madhya Pradesh",
    title: "Best of Madhya Pradesh",
    places: ["Ujjain", "Maheshwar", "Gwalior", "Jhansi", "Indore", "Mandu"],
    days: 5,
    date: "26 Dec",
    price: 45000,
    image: "/GwaliorC.jpg"
  },
  {
    state: "Himachal Pradesh",
    title: "Shimla Manali",
    places: ["Chandigarh", "Shimla", "Kufri", "Manali"],
    days: 8,
    date: "25 Dec",
    price: 54000,
    image: "/ManaliC.jpg"
  }
]

export default function TravelCarousel() {
  const [api, setApi] = useState(null)
  const [current, setCurrent] = useState(0)

  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  )

  useEffect(() => {
    if (!api) return

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const scrollTo = (index) => {
    api?.scrollTo(index)
  }

  return (
    <div className="relative">
      <Carousel
        className="w-full max-w-[1280px] px-6 mx-auto"
        plugins={[autoplay.current]}
        options={{
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent>
          {destinations.map((destination, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${destination.image})` }}
                >
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="space-y-3">
                    <div>
                      <h2 className="text-lg font-medium text-white/90">{destination.state}</h2>
                      <h1 className="text-3xl font-bold text-yellow-400">{destination.title}</h1>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 text-base text-white/90">
                      {destination.places.map((place, i) => (
                        <span key={i} className="flex items-center whitespace-nowrap">
                          {place}
                          {i < destination.places.length - 1 && (
                            <span className="mx-2 text-white/70">•</span>
                          )}
                        </span>
                      ))}
                    </div>
                    
                    <div className="text-lg text-white/90">
                      {destination.days} Days | {destination.date} | from ₹{destination.price.toLocaleString()}
                    </div>
                    
                    <div className="pt-2">
                      <Button 
                        className="bg-yellow-400 text-black hover:bg-yellow-500 transition-colors"
                      >
                        Book now
                      </Button>
                      <p className="text-sm mt-2 text-white/70">*T&C Apply</p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Scroll Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {destinations.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                current === index 
                  ? "bg-white w-6" 
                  : "bg-white/50 hover:bg-white/70"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  )
}

