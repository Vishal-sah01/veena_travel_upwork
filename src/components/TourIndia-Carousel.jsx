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
    title: "Royal Rajasthan Explorer",
    image: "/rajasthan.jpg",
    rating: 5,
    reviews: 36,
    days: 8,
    countries: 1,
    cities: 6,
    dates: 9,
    emi: 4430,
    price: 125000
  },
  {
    title: "Kerala Backwaters & Culture",
    image: "/KeralaC.jpg",
    rating: 5,
    reviews: 92,
    days: 7,
    countries: 1,
    cities: 5,
    dates: 11,
    emi: 3308,
    price: 95000
  },
  {
    title: "Golden Triangle Delight",
    image: "/asia.jpg",
    rating: 5,
    reviews: 37,
    days: 6,
    countries: 1,
    cities: 3,
    dates: 11,
    emi: 3453,
    price: 85000
  },
  {
    title: "Himalayan Adventure",
    image: "/ManaliC.jpg",
    rating: 5,
    reviews: 21,
    days: 9,
    countries: 1,
    cities: 4,
    dates: 12,
    emi: 4587,
    price: 135000
  },
  {
    title: "Northeast India Explorer",
    image: "/rajasthan.jpg",
    rating: 5,
    reviews: 45,
    days: 10,
    countries: 1,
    cities: 5,
    dates: 14,
    emi: 5800,
    price: 165000
  },
  {
    title: "Goa Beach & Heritage",
    image: "/sikkim.jpg",
    rating: 5,
    reviews: 63,
    days: 5,
    countries: 1,
    cities: 3,
    dates: 10,
    emi: 2800,
    price: 75000
  },
  {
    title: "Kashmir Paradise",
    image: "/kashmir.jpg",
    rating: 5,
    reviews: 41,
    days: 7,
    countries: 1,
    cities: 4,
    dates: 8,
    emi: 4300,
    price: 115000
  },
  {
    title: "Tamil Nadu Temple Trail",
    image: "/KeralaC.jpg",
    rating: 5,
    reviews: 52,
    days: 8,
    countries: 1,
    cities: 6,
    dates: 12,
    emi: 3900,
    price: 105000
  }
]

export default function TourCarousel() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Incredible India</h1>
        <div className="w-32 h-1 bg-blue-600 mx-auto"></div>
      </div>

      <Tabs defaultValue="popular" className="mb-8">
        <TabsList className="w-full justify-start overflow-x-auto">
          <TabsTrigger value="popular" className="text-sm">
            Royal Rajasthan
          </TabsTrigger>
          <TabsTrigger value="golden" className="text-sm">
            Wonders of South India
          </TabsTrigger>
          <TabsTrigger value="scandinavia" className="text-sm">
            East and North India
          </TabsTrigger>
          <TabsTrigger value="mediterranean" className="text-sm">
            Majestic Himalayas
          </TabsTrigger>
          <TabsTrigger value="eastern" className="text-sm">
            Vibrant Uttar Pradesh
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

