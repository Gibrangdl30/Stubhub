"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"

const featuredEvents = [
  {
    id: 1,
    title: "Zoé",
    venue: "Estadio GNP Seguros, CDMX",
    date: "01 de octubre de 2025",
    image: "/images/zoe-concert.png",
    url: "/event/zoe",
    targetDate: "2025-10-01T21:00:00",
    tickets: 6,
  },
  {
    id: 2,
    title: "Pedro Fernández",
    venue: "Auditorio Telmex, Zapopan",
    date: "16 de mayo de 2025",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cdd39e1cb7754203218f79e2dd392e64-JvrwJJZEHxvyh2fH2nFOKKS7PfmfXf.webp",
    url: "/event/pedro-fernandez",
    targetDate: "2025-05-16T21:00:00",
    tickets: 6,
  },
  {
    id: 3,
    title: "Ha*Ash",
    venue: "Auditorio Telmex, Zapopan",
    date: "30 de mayo de 2025",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3270ae35e582df4f75869fd03245a186-aRV8JoG3za8HZBc09D9L9UQF3QDTIJ.webp",
    url: "/event/ha-ash-telmex",
    targetDate: "2025-05-30T21:00:00",
    tickets: 6,
  },
  {
    id: 4,
    title: "Maluma",
    venue: "Palacio de los Deportes, CDMX",
    date: "08 de agosto de 2025",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a90b0b892fdf8b1f4fd64f86ced62338-isGdNjLWv9hiM6OzSGGuZpr0T0sZoc.webp",
    url: "/event/maluma-palacio",
    targetDate: "2025-08-08T21:00:00",
    tickets: 6,
  },
]

export function FeaturedEvents() {
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null)

  return (
    <section className="px-4 py-8 md:px-8 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Eventos destacados</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredEvents.map((event) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group"
            onMouseEnter={() => setHoveredEvent(event.id)}
            onMouseLeave={() => setHoveredEvent(null)}
          >
            <Link href={event.url} className="block">
              <div className="relative overflow-hidden rounded-lg">
                <div className="aspect-[3/2] relative">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      hoveredEvent === event.id ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{event.title}</h3>

                  <div className="flex items-center text-sm mb-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{event.date}</span>
                  </div>

                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{event.venue}</span>
                  </div>
                </div>
              </div>
            </Link>

            <div className="mt-3">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <Users className="h-4 w-4 text-purple-900 mr-1" />
                  <span className="text-sm text-gray-600">{event.tickets} boletos disponibles</span>
                </div>
                <div className="bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded">¡Últimos boletos!</div>
              </div>

              <div className="mb-3">
                <p className="text-sm text-gray-600 mb-1">El evento comienza en:</p>
                <CountdownTimer targetDate={event.targetDate} />
              </div>

              <Button asChild className="w-full mt-2 bg-purple-900 hover:bg-purple-800">
                <Link href={event.url}>Ver boletos</Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
