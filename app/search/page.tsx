"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EventCard } from "@/components/event-card"
import { SearchBar } from "@/components/search-bar"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const events = [
    {
      id: 1,
      name: "Rauw Alejandro",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dc28d04bcd8caa93ff9dee21f7f6c7a3%281%29-BLcRCQAzRwMEqvwX8ObrpvRXy7eNoD.webp",
      date: "sáb, 08 de nov de 2025",
      venue: "Palacio de los Deportes",
      url: "/event/rauw-alejandro",
    },
    {
      id: 2,
      name: "Caifanes",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a884850d5fdf35c2d650dfebaa967aad-2fLKO09aiJKcn4IYAz6XIcq077ib9n.webp",
      date: "vie, 5 de dic de 2025",
      venue: "Palacio de los Deportes",
      url: "/event/caifanes",
    },
    {
      id: 3,
      name: "Rels B",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dc28d04bcd8caa93ff9dee21f7f6c7a3%281%29-BLcRCQAzRwMEqvwX8ObrpvRXy7eNoD.webp",
      date: "próximamente",
      venue: "Por confirmar",
      url: "/event/rels-b",
    },
    {
      id: 4,
      name: "Pedro Fernández",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cdd39e1cb7754203218f79e2dd392e64-JvrwJJZEHxvyh2fH2nFOKKS7PfmfXf.webp",
      date: "próximamente",
      venue: "Por confirmar",
      url: "/event/pedro-fernandez",
    },
    {
      id: 5,
      name: "Ha*Ash",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3270ae35e582df4f75869fd03245a186-aRV8JoG3za8HZBc09D9L9UQF3QDTIJ.webp",
      date: "próximamente",
      venue: "Por confirmar",
      url: "/event/ha-ash",
    },
    {
      id: 6,
      name: "Maluma",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a90b0b892fdf8b1f4fd64f86ced62338-isGdNjLWv9hiM6OzSGGuZpr0T0sZoc.webp",
      date: "próximamente",
      venue: "Por confirmar",
      url: "/event/maluma",
    },
    {
      id: 7,
      name: "Reik",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bef878967fbecf48c9a43a5615c87103-w0jkCRtUZHSZ0OKAi77d4vULU562O7.webp",
      date: "próximamente",
      venue: "Por confirmar",
      url: "/event/reik",
    },
    {
      id: 8,
      name: "Imagine Dragons",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a682eae3520512cc77d05399026a8c19-zB1QONdvnDF08kcf9vzMcnJmD57Pwk.webp",
      date: "próximamente",
      venue: "Por confirmar",
      url: "/event/imagine-dragons",
    },
  ]

  useEffect(() => {
    setLoading(true)
    // Simulamos una búsqueda
    setTimeout(() => {
      const filteredResults = events.filter(
        (event) =>
          event.name.toLowerCase().includes(query.toLowerCase()) ||
          event.venue.toLowerCase().includes(query.toLowerCase()) ||
          event.date.toLowerCase().includes(query.toLowerCase()),
      )
      setResults(filteredResults)
      setLoading(false)
    }, 500)
  }, [query])

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-4">
        <SearchBar />

        <div className="mt-8">
          <h1 className="text-2xl font-bold mb-4">
            Resultados de búsqueda para: <span className="text-purple-900">{query}</span>
          </h1>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-900"></div>
            </div>
          ) : results.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {results.map((event) => (
                <EventCard
                  key={event.id}
                  name={event.name}
                  image={event.image}
                  date={event.date}
                  venue={event.venue}
                  url={event.url}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No se encontraron resultados para "{query}"</p>
              <p className="mt-2 text-gray-500">Intenta con otra búsqueda o explora eventos populares</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
