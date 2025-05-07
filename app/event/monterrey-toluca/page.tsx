import { EventDetails } from "@/components/event-details"
import { TicketOptions } from "@/components/ticket-options"

export default function MonterreyTolucaPage() {
  const eventDetails = {
    id: "monterrey-toluca",
    title: "Rayados vs. Toluca",
    date: "Miércoles 7 de mayo",
    time: "19:00 hrs México",
    venue: "Estadio BBVA",
    address: "Av. Pablo Livas 2011, La Pastora, 67140 Guadalupe, N.L.",
    description:
      "Disfruta del emocionante partido de la Liga MX entre Rayados de Monterrey y Toluca en el Estadio BBVA. ¡No te pierdas la acción en vivo!",
    image: "/images/estadio-bbva-map.png",
    additionalInfo: [
      "21:00 hrs ET y 18:00 hrs Pacífico Estados Unidos",
      "Acceso a todas las instalaciones del estadio",
      "Estacionamiento disponible (no incluido)",
      "Prohibido el ingreso con alimentos y bebidas externas",
    ],
  }

  const ticketOptions = [
    { zone: "PTE 101-102, 137-138", price: 800, discount: 30, availability: "Alta" },
    { zone: "PONIENTE 103, 136", price: 800, discount: 30, availability: "Media" },
    { zone: "PTE 104-106, 133-135", price: 790, discount: 30, availability: "Media" },
    { zone: "OTE 118-121", price: 750, discount: 30, availability: "Alta" },
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
