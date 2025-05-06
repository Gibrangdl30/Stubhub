"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const events = [
  {
    id: 1,
    title: "Zoé en Estadio GNP",
    description: "¡La espera terminó! Zoé regresa con un show legendario",
    date: "01 de octubre de 2025",
    image: "/images/zoe-concert.png",
    url: "/event/zoe",
  },
  {
    id: 2,
    title: "Imagine Dragons",
    description: "La banda internacional llega a México con su gira mundial",
    date: "Próximamente",
    image: "/images/imagine-dragons-concert.png",
    url: "/event/imagine-dragons",
  },
  {
    id: 3,
    title: "Ha*Ash en Auditorio Nacional",
    description: "El dúo más exitoso del pop latino en concierto",
    date: "12 de junio de 2025",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3270ae35e582df4f75869fd03245a186-aRV8JoG3za8HZBc09D9L9UQF3QDTIJ.webp",
    url: "/event/ha-ash-nacional",
  },
  {
    id: 4,
    title: "Maluma en Palacio de los Deportes",
    description: "El ídolo colombiano presenta su nuevo tour",
    date: "08 de agosto de 2025",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a90b0b892fdf8b1f4fd64f86ced62338-isGdNjLWv9hiM6OzSGGuZpr0T0sZoc.webp",
    url: "/event/maluma-palacio",
  },
]

export function FeaturedCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current) => (current === events.length - 1 ? 0 : current + 1))
  }

  const prev = () => {
    setCurrent((current) => (current === 0 ? events.length - 1 : current - 1))
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <Image
            src={events[current].image || "/placeholder.svg"}
            alt={events[current].title}
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{events[current].title}</h2>
              <p className="text-lg mb-2 text-gray-200">{events[current].description}</p>
              <p className="text-sm mb-4">{events[current].date}</p>
              <Button asChild className="bg-purple-700 hover:bg-purple-600 text-white" size="lg">
                <Link href={events[current].url}>Ver boletos</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 z-10 rounded-full h-12 w-12"
        onClick={prev}
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 z-10 rounded-full h-12 w-12"
        onClick={next}
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {events.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === current ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  )
}
