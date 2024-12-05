import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function Banner() {
  return (
    <div className="container mx-auto px-6 py-12">
      <Card className="w-full max-w-[1400px] mx-auto overflow-hidden rounded-2xl border-none">
        <div className="relative w-full aspect-[30/7]">
          <Image
            src="/Banner.jpg"
            alt="Sentosa Banner"
            fill
            priority
            sizes="(max-width: 1400px) 100vw, 1400px"
            className="object-cover rounded-2xl"
          />
        </div>
      </Card>
    </div>
  )
}

