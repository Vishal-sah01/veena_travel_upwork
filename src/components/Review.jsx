'use client'

import { Star, Users2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { useState, useEffect } from 'react'

const reviews = [
  {
    tag: "Family",
    title: "Highlights of Kashmir",
    rating: 5,
    text: "\"Kashmir highlights tour : We enjoyed lot, best arrangements. Pankaj and Rohit guide us in good way,they are best tour managers\"",
    reviewer: "Vanita",
    travelDate: "Travelled in Nov, 2024",
    managers: ["Pankaj Ubale", "Rohit Burse"]
  },
  {
    tag: "Family",
    title: "Highlights of Kerala",
    rating: 5,
    text: "\"The whole experience was amazing. Special thank you to Mandar Bhave and Sairaj Choudhary for making my 1st tour with Veena World a mem...\"",
    reviewer: "Vibhavari",
    travelDate: "Travelled in Nov, 2024",
    managers: ["Mandar Bhave", "Sairaj Choudhary"]
  },
  {
    tag: "Family",
    title: "Best of Andaman",
    rating: 5,
    text: "\"Superb in all respects. The itinerary was excellent. Everything wnt off as per plan. All arrangements were A class. The Tour Manager d...\"",
    reviewer: "Pushpito",
    travelDate: "Travelled in Nov, 2024",
    managers: ["Sanjiv Nandodkar"]
  },
  {
    tag: "Family",
    title: "Magical Rajasthan",
    rating: 5,
    text: "\"The heritage hotels, desert safari, and cultural shows were absolutely spectacular. Our tour managers made sure everything was perfect...\"",
    reviewer: "Pradeep",
    travelDate: "Travelled in Oct, 2024",
    managers: ["Amit Sharma", "Priya Patel"]
  },
  {
    tag: "Family",
    title: "Northeast Explorer",
    rating: 4,
    text: "\"Beautiful landscapes, monasteries, and local cuisine. The tea gardens of Assam were breathtaking. Would highly recommend this tour to...\"",
    reviewer: "Meera",
    travelDate: "Travelled in Sep, 2024",
    managers: ["Rajesh Kumar"]
  },
  {
    tag: "Family",
    title: "South India Temple Tour",
    rating: 5,
    text: "\"An incredible spiritual journey through ancient temples. The architecture and history were fascinating. Our tour managers were very kn...\"",
    reviewer: "Suresh",
    travelDate: "Travelled in Oct, 2024",
    managers: ["Deepak Menon", "Lakshmi Nair"]
  }
]

export default function TourReviews() {
  const [api, setApi] = useState(null)
  const [current, setCurrent] = useState(0)
  const numSlides = Math.ceil(reviews.length / 3)

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
    <div className="bg-[#1F2937] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-white mb-2">
            Veena World tour reviews
          </h1>
          <p className="text-gray-300">
            What are you waiting for? Chalo Bag Bharo Nikal Pado!
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {Array.from({ length: numSlides }).map((_, slideIndex) => (
                <CarouselItem key={slideIndex} className="pl-4 basis-full">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reviews.slice(slideIndex * 3, (slideIndex + 1) * 3).map((review, index) => (
                      <Card key={index} className="bg-white">
                        <CardHeader className="space-y-2">
                          <div className="flex justify-between items-start">
                            <span className="inline-block px-3 py-1 text-sm text-red-600 bg-red-50 rounded-full">
                              {review.tag}
                            </span>
                            <div className="flex items-center">
                              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                              <span className="ml-1 text-lg font-medium">{review.rating}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold">{review.title}</h3>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-gray-600 text-sm">{review.text}</p>
                          {review.text.endsWith('...') && (
                            <Button variant="link" className="text-blue-600 p-0 h-auto text-sm">
                              Read more
                            </Button>
                          )}
                          <div className="pt-4 border-t">
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="font-medium text-sm">{review.reviewer}</p>
                                <p className="text-xs text-gray-500">{review.travelDate}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <Users2 className="w-4 h-4 text-gray-400" />
                                <div className="text-blue-600 text-xs">
                                  {review.managers.map((manager, i) => (
                                    <span key={i}>
                                      {manager}
                                      {i < review.managers.length - 1 && ", "}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute -left-12 bg-white/20 hover:bg-white/40 text-white border-none" />
            <CarouselNext className="absolute -right-12 bg-white/20 hover:bg-white/40 text-white border-none" />

            {/* Scroll Dots */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {Array.from({ length: numSlides }).map((_, index) => (
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

        <div className="text-center mt-16">
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium">
            Read more Reviews
          </Button>
        </div>
      </div>
    </div>
  )
}

