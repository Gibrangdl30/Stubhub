import { EventDetails } from "@/components/event-details"
import { TicketOptions } from "@/components/ticket-options"

export default function PachucaAmericaPage() {
  const eventDetails = {
    id: "pachuca-america",
    title: "Pachuca vs. América",
    date: "Miércoles 7 de mayo",
    time: "21:10 hrs México",
    venue: "Estadio Hidalgo",
    address: "Blvd. Felipe Ángeles s/n, Zona Plateada, 42083 Pachuca, Hgo.",
    description:
      "Disfruta del emocionante partido de la Liga MX entre Pachuca y América en el Estadio Hidalgo. ¡No te pierdas la acción en vivo!",
    image: "/images/estadio-hidalgo-map.png",
    additionalInfo: [
      "23:10 hrs ET y 20:10 hrs Pacífico Estados Unidos",
      "Acceso a todas las instalaciones del estadio",
      "Estacionamiento disponible (no incluido)",
      "Prohibido el ingreso con alimentos y bebidas externas",
    ],
  }

  const ticketOptions = [
    { zone: "NORTE", price: 1200, discount: 30, availability: "Alta" },
    { zone: "ORIENTE", price: 1200, discount: 30, availability: "Media" },
    { zone: "PONIENTE", price: 1200, discount: 30, availability: "Media" },
    { zone: "SUR", price: 1200, discount: 30, availability: "Alta" },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8">
      <div className="w-full max-w-7xl mx-auto">
        <EventDetails event={eventDetails} />
        <TicketOptions options={ticketOptions} eventId={eventDetails.id} />
      </div>
    </main>
  )
}
