import Image from "next/image"
import Link from "next/link"

interface EventCardProps {
  name: string
  image: string
  date?: string
  venue?: string
  url: string
}

export function EventCard({ name, image, date, venue, url }: EventCardProps) {
  return (
    <Link href={url} className="block">
      <div className="rounded overflow-hidden">
        <div className="relative aspect-square overflow-hidden bg-black">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-contain" />
        </div>
        <div className="mt-2">
          {date && <p className="text-xs text-gray-500">{date}</p>}
          <h3 className="font-medium text-sm">{name}</h3>
          {venue && <p className="text-xs text-gray-500">{venue}</p>}
        </div>
      </div>
    </Link>
  )
}
