'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const packages = [
  {
    id: 1,
    title: "India packages",
    image: "/kerala.jpg",
    href: "/india-packages"
  },
  {
    id: 2,
    title: "World packages",
    image: "/dubai.jpg",
    href: "/world-packages"
  },
  {
    id: 3,
    title: "All packages",
    image: "/australia.jpg",
    href: "/all-packages"
  }
]

export default function TravelPackages() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <Link 
              key={pkg.id} 
              href={pkg.href}
              className="group relative rounded-lg overflow-hidden"
            >
              <div className="relative aspect-[2/1]">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-80"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="px-4 py-2 bg-white/90 rounded-lg text-sm font-medium shadow-lg">
                    {pkg.title}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-white shadow-lg mt-0 mb-8">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6">Find the best travel packages at Veena World</h2>
          
          <p className="mb-6 text-gray-700 text-sm">
            Booking a travel package when it comes to travelling to new parts of the country or the world is a practice that has slowly gained a lot of popularity. Today, whenever it is about planning a holiday trip, many people have a preferred travel portal in India that is best for their specific needs. Owing to the faith bestowed in our travel services by our patrons, Veena World has established its niche and is counted among the top 10 travel agencies in Mumbai.
          </p>

          <p className="mb-6 text-gray-700 text-sm">
            We at Veena World understand that nowadays, travelling has become much more than just visiting a new destination. That is why each of our vacation packages offers you the respite that you anticipate from a holiday.
          </p>

          <h3 className="text-xl font-bold mb-6">What makes us one of the best travel companies in India?</h3>

          {isExpanded ? (
            <>
              <p className="mb-6 text-gray-700 text-sm">
                We, at Veena World, know that there is nothing better than the experiences and memories you are able to create when you travel to new places with our holiday packages. With Veena World's packages, you can head out and indulge in the exploration of an unknown destination or revisit your favourite spots in places that hold a lot of memories.
              </p>

              <p className="mb-6 text-gray-700 text-sm">
                Whether you want to head out for a solo trip or travel with a bunch of like-minded people, Veena World, one of the best travel companies in India, has got you covered. Recognized among the best travel companies in Mumbai and the whole of the country, we offer customised and bespoke services whenever you book holiday packages online with us.
              </p>

              <h3 className="text-2xl font-bold mb-4">Bringing you the best travel packages online</h3>
              
              <p className="mb-6 text-gray-700 text-sm">
                Making a niche for ourselves as a top online travel company in India, Veena World excels in offering the best in domestic and international tour packages. Our product offerings include guided group tours, speciality tours, exclusive customised holiday packages, corporate MICE travel, and inbound travel. Behind our repute of being the best travel company in India is the vision to provide exclusivity in our tailor-made tours and packages that take you to a huge number of destinations in India and all around the world. Our travel company in India offers speciality tour packages such as Women's Special, Honeymoon Tours, Seniors' Packages, Singles Tour Packages, and Weekend Tours, which has helped us differentiate our offerings from other travel companies in Mumbai in both the domestic and international sectors. We offer a wide array of more than 2500 dream vacation options as well as a guest base of more than 5 lakh satisfied guests in a period of 8 years, which has played a major role in us becoming one of the top travel companies in Mumbai.
              </p>
            </>
          ) : null}

          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </>
  )
}

