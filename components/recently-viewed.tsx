import Image from "next/image"
import Link from "next/link"

export function RecentlyViewed() {
  const recentEvents = [
    {
      id: 1,
      date: "sáb, 08 de nov de 2025 • 8:00 p.m.",
      title: "Boletos Rauw Alejandro Ciudad de México",
      venue: "Palacio de los Deportes, Ciudad de México, Ciudad de México",
      image: "/images/rauw-alejandro-new2.png",
    },
    {
      id: 2,
      date: "sáb, 4 de oct de 2025 • 9:00 p.m.",
      title: "Boletos Caifanes Zapopan",
      venue: "Auditorio Telmex, Zapopan, JAL",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga%20%281%29-xCDd5ZLbk1xB9sNRkAW0AOa92mGWc5.webp",
    },
  ]

  return (
    <section className="px-4 py-4 md:px-8">
      <h2 className="text-xl font-bold mb-4">Últimos eventos visitados</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recentEvents.map((event) => (
          <Link key={event.id} href={`/event/${event.id === 1 ? "rauw-alejandro" : "caifanes"}`} className="block">
            <div className="rounded overflow-hidden">
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                width={200}
                height={150}
                className="w-full h-auto object-cover"
              />
              <div className="mt-2">
                <p className="text-xs text-gray-500">{event.date}</p>
                <h3 className="font-medium text-sm">{event.title}</h3>
                <p className="text-xs text-gray-500">{event.venue}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Sigue explorando</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Link href="/event/rels-b" className="block">
            <div className="rounded overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dc28d04bcd8caa93ff9dee21f7f6c7a3%281%29-BLcRCQAzRwMEqvwX8ObrpvRXy7eNoD.webp"
                alt="Rels B"
                width={200}
                height={150}
                className="w-full h-auto object-cover"
              />
              <div className="mt-2">
                <h3 className="font-medium text-sm">Rels B</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
