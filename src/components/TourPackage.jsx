'use client'

import Image from 'next/image'
import Link from 'next/link'

const cities = [
  {
    name: "Ahmedabad",
    tours: 145,
    image: "/kerala.jpg"
  },
  {
    name: "Bangalore",
    tours: 139,
    image: "/dubai.jpg"
  },
  {
    name: "Kolkata",
    tours: 145,
    image: "/rajasthan.jpg"
  },
  {
    name: "Mumbai",
    tours: 277,
    image: "/australia.jpg"
  },
  {
    name: "Pune",
    tours: 27,
    image: "/kashmir.jpg"
  }
]

export default function TourPackage() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Plan an unforgettable trip from your city
          <div className="w-40 h-1 bg-blue-600 mx-auto mt-2" />
        </h2>
      </div>

      {/* Tour Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {cities.map((city, index) => (
          <Link 
            href={`/tours/${city.name.toLowerCase()}`} 
            key={index}
            className={`
              bg-gray-50/50 rounded-lg p-3 flex items-center gap-3 hover:shadow-md transition-shadow
              border-2 border-gray-200 hover:border-blue-200
              ${index >= 3 ? 'md:col-span-1' : ''}
            `}
          >
            {/* City Image */}
            <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 
                          ring-2 ring-gray-300 shadow-lg transform transition-transform 
                          duration-300 hover:scale-105">
              <Image
                src={city.image}
                alt={city.name}
                fill
                className="object-cover"
              />
            </div>

            {/* City Info */}
            <div>
              <p className="text-gray-500 text-xs">Tour Packages from</p>
              <h3 className="text-lg font-medium text-gray-900">{city.name}</h3>
              <p className="text-gray-500 text-sm">{city.tours} tours</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
