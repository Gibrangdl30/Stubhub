import { EventDetails } from "@/components/event-details"
import { TicketOptions } from "@/components/ticket-options"

export default function LeonCruzAzulPage() {
  const eventDetails = {
    id: "leon-cruz-azul",
    title: "León vs. Cruz Azul",
    date: "Jueves 8 de mayo",
    time: "21:10 hrs México",
    venue: "Estadio Nou Camp",
    address: "Blvd. Adolfo López Mateos 1810, La Martinica, 37530 León, Gto.",
    description:
      "Disfruta del emocionante partido de la Liga MX entre León y Cruz Azul en el Estadio Nou Camp. ¡No te pierdas la acción en vivo!",
    image: "/images/estadio-nou-camp-map.png",
    additionalInfo: [
      "23:10 hrs ET y 20:10 hrs Pacífico Estados Unidos",
      "Acceso a todas las instalaciones del estadio",
      "Estacionamiento disponible (no incluido)",
      "Prohibido el ingreso con alimentos y bebidas externas",
    ],
  }

  const ticketOptions = [
    { zone: "SOL", price: 1000, maxPrice: 1300, discount: 30, availability: "Alta" },
    { zone: "PREF", price: 1500, maxPrice: 1700, discount: 30, availability: "Media" },
    { zone: "ZONA A", price: 1700, discount: 30, availability: "Baja" },
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
