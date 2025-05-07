import { EventDetails } from "@/components/event-details"
import { TicketOptions } from "@/components/ticket-options"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PachucaAmericaPage() {
  const eventDetails = {
    id: "pachuca-america",
    title: "Pachuca vs. América",
    date: "Miércoles 7 de mayo",
    time: "21:10 hrs México",
    venue: "Estadio Hidalgo",
    address: "Blvd. Luis Donaldo Colosio 3000, Arboledas de Santa Elena, 42184 Pachuca de Soto, Hgo.",
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
    {
      id: "norte",
      zone: "NORTE",
      price: 1200,
      discount: 30,
      availability: "Alta",
      description: "Zona Norte con vista frontal al campo",
    },
    {
      id: "oriente",
      zone: "ORIENTE",
      price: 1200,
      discount: 30,
      availability: "Media",
      description: "Zona Oriente con vista lateral al campo",
    },
    {
      id: "poniente",
      zone: "PONIENTE",
      price: 1200,
      discount: 30,
      availability: "Media",
      description: "Zona Poniente con vista lateral al campo",
    },
    {
      id: "sur",
      zone: "SUR",
      price: 1200,
      discount: 30,
      availability: "Alta",
      description: "Zona Sur con vista frontal al campo",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
        <EventDetails event={eventDetails} />
        <TicketOptions options={ticketOptions} eventId={eventDetails.id} />
      </div>
      <Footer />
    </main>
  )
}
