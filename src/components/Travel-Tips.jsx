'use client'

import Image from 'next/image'
import Link from 'next/link'

const travelTips = [
  {
    id: 1,
    title: "তীনা ওয়ার্ল্ড ট্রাভেল মিশন - গৃহিণী থেকে বিশ্বভ্রমণকারী",
    image: "/rajasthan.jpg",
    href: "#"
  },
  {
    id: 2,
    title: "Nothing Matters!",
    image: "/asia.jpg",
    href: "#"
  },
  {
    id: 3,
    title: "ಚೀತಾಪುರದ ಮುಖ್ಯವಲ್ಲ!",
    image: "/kashmir.jpg",
    href: "#"
  },
  {
    id: 4,
    title: "Is the UK, Great Britain, and England the same?",
    image: "/kerala.jpg",
    href: "#"
  },
  {
    id: 5,
    title: "Get a Slice of Paradise in Serbia's Tourist Places",
    image: "/GwaliorC.jpg",
    href: "#"
  }
]

export default function TravelTips() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-3xl font-bold mb-8">
        Travel tips, hacks, tricks and a whole lot more...
        <div className="w-48 h-2 bg-blue-600 mx-auto mt-2" />
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-[1400px] mx-auto">
        {travelTips.map((tip) => (
          <Link key={tip.id} href={tip.href} className="group w-full">
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={tip.image}
                  alt={tip.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-2">
                <h2 className="text-[11px] sm:text-xs font-semibold line-clamp-2">{tip.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

