'use client'

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star, MessageCircle, Info } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
const tours = [
  {
    title: "European Splendours",
    image: "/SingaporeC.jpg",
    rating: 5,
    reviews: 36,
    days: 10,
    countries: 10,
    cities: 16,
    dates: 9,
    emi: 8430,
    price: 250000
  },
  {
    title: "European Jewels with Versailles",
    image: "/europe.jpg",
    rating: 5,
    reviews: 92,
    days: 15,
    countries: 12,
    cities: 23,
    dates: 11,
    emi: 12308,
    price: 365000
  },
  {
    title: "European Wonders",
    image: "/dubai.jpg",
    rating: 5,
    reviews: 37,
    days: 13,
    countries: 11,
    cities: 22,
    dates: 11,
    emi: 10453,
    price: 310000
  },
  {
    title: "European Panorama",
    image: "/australia.jpg",
    rating: 5,
    reviews: 21,
    days: 8,
    countries: 8,
    cities: 11,
    dates: 12,
    emi: 7587,
    price: 225000
  },
  {
    title: "Swiss Alpine Explorer",
    image: "/duba.jpg",
    rating: 5,
    reviews: 45,
    days: 9,
    countries: 3,
    cities: 8,
    dates: 14,
    emi: 9800,
    price: 290000
  },
  {
    title: "Italian Renaissance",
    image: "/kashmir.jpg",
    rating: 5,
    reviews: 63,
    days: 11,
    countries: 2,
    cities: 7,
    dates: 10,
    emi: 10100,
    price: 299000
  },
  {
    title: "Greek Islands Odyssey",
    image: "/KeralaC.jpg",
    rating: 5,
    reviews: 41,
    days: 12,
    countries: 1,
    cities: 6,
    dates: 8,
    emi: 9300,
    price: 275000
  },
  {
    title: "Spanish Fiesta",
    image: "/ManaliC.jpg",
    rating: 5,
    reviews: 52,
    days: 10,
    countries: 2,
    cities: 9,
    dates: 12,
    emi: 8900,
    price: 265000
  }
]

export default function TourCarousel() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Discover Europe</h1>
        <div className="w-32 h-1 bg-blue-600 mx-auto"></div>
      </div>

      <Tabs defaultValue="popular" className="mb-8">
        <TabsList className="w-full justify-start overflow-x-auto">
          <TabsTrigger value="popular" className="text-sm">
            Popular European Trails
          </TabsTrigger>
          <TabsTrigger value="golden" className="text-sm">
            Golden Combinations
          </TabsTrigger>
          <TabsTrigger value="scandinavia" className="text-sm">
            Splendid Scandinavia
          </TabsTrigger>
          <TabsTrigger value="mediterranean" className="text-sm">
            Mediterranean Marvels
          </TabsTrigger>
          <TabsTrigger value="eastern" className="text-sm">
            Eastern Europe
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <Carousel
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1
        }}
        className="w-full"
      >
        <CarouselContent>
          {tours.map((tour, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
              <Card className="m-1">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3]">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent">
                      <Badge className="absolute top-3 left-3 bg-orange-500/90 text-xs z-10">
                        GROUP TOUR
                      </Badge>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-sm mb-1">{tour.title}</h3>
                    <div className="flex items-center mb-1">
                      {Array(tour.rating).fill(null).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="ml-1 text-xs text-gray-600">
                        {tour.reviews} Reviews
                      </span>
                    </div>
                    <div className="flex items-center mb-2">
                      <Badge variant="secondary" className="text-xs">
                        <Info className="w-3 h-3 mr-1" />
                        All Inclusive
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-2 text-xs">
                      <div>
                        <div className="font-semibold">Days: {tour.days}</div>
                        <div>{tour.countries} Countries, {tour.cities} Cities</div>
                      </div>
                      <div>
                        <div className="font-semibold">Departures</div>
                        <div>{tour.dates} Dates</div>
                      </div>
                    </div>
                    <div className="mb-2 text-xs">
                      <div>EMI from <span className="text-blue-600 font-semibold">₹{tour.emi}/mo</span></div>
                      <div>
                        Starts from{" "}
                        <span className="font-semibold">₹{tour.price.toLocaleString()}</span>
                      </div>
                      <div className="text-gray-500">per person on twin sharing</div>
                    </div>
                    <Button size="sm" className="w-full mb-1 text-xs">View Tour Details</Button>
                    <Button size="sm" variant="outline" className="w-full text-xs">
                      <MessageCircle className="w-3 h-3 mr-1" />
                      Talk to a Travel Expert
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  )
}

