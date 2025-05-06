import Link from "next/link"
import { Header } from "@/components/header"
import { EventDetails } from "@/components/event-details"
import { TicketOptions } from "@/components/ticket-options"

export default function EventPage({ params }: { params: { id: string } }) {
  // En un caso real, obtendríamos los datos del evento desde una API
  const eventData = {
    id: params.id,
    title: "Rauw Alejandro",
    location: "Ciudad de México",
    venue: "Palacio de los Deportes",
    date: "sáb, 08 de nov de 2025",
    time: "8:00 p.m.",
    price: 7029,
    currency: "MXN",
    image: "/placeholder.svg?height=400&width=800",
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center mb-4">
          <Link href="/" className="text-gray-500 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Link>
          <div>
            <h1 className="text-xl font-bold">
              Boletos <span className="text-teal-500">Rauw Alejandro</span> {eventData.location}
            </h1>
            <p className="text-sm text-gray-600">
              {eventData.date} • {eventData.time} at{" "}
              <Link href="#" className="text-teal-500">
                {eventData.venue}
              </Link>
              , {eventData.location}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <EventDetails eventData={eventData} />
          </div>

          <div className="md:col-span-1">
            <TicketOptions eventData={eventData} />
          </div>
        </div>
      </div>
    </main>
  )
}
