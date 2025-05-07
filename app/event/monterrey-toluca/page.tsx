import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Shield, CreditCard, Clock, Send } from "lucide-react"

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
    image: "https://www.estadio-bbva.mx/imagesSitio/files/MapaPB.jpg",
    additionalInfo: [
      "21:00 hrs ET y 18:00 hrs Pacífico Estados Unidos",
      "Acceso a todas las instalaciones del estadio",
      "Estacionamiento disponible (no incluido)",
      "Prohibido el ingreso con alimentos y bebidas externas",
    ],
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-4">{eventDetails.title}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {eventDetails.date}, {eventDetails.time}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                {eventDetails.venue}
              </Badge>
            </div>

            <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
              <Image
                src={eventDetails.image || "/placeholder.svg"}
                alt="Mapa del Estadio BBVA"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Descripción del Evento</h2>
              <p className="text-gray-700">{eventDetails.description}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Información Adicional</h2>
              <ul className="list-disc pl-5 space-y-1">
                {eventDetails.additionalInfo.map((info, index) => (
                  <li key={index} className="text-gray-700">
                    {info}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Opciones de Boletos</h2>

                <div className="space-y-4 mb-6">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-bold">PTE 101-102, 137-138</h3>
                      <Badge className="bg-red-600">-30%</Badge>
                    </div>
                    <div className="flex items-baseline mb-2">
                      <span className="text-2xl font-bold">$900</span>
                      <span className="ml-2 text-sm line-through text-gray-500">$1,300</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Disponibilidad: ULTIMOS BOLETOS DISPONINLBILIDAD ALTA</p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-bold">BOLETOS, AGOTADOS</h3>
                      <Badge className="bg-red-600">-30%</Badge>
                    </div>
                    <div className="flex items-baseline mb-2">
                      <span className="text-2xl font-bold">$1,000</span>
                      <span className="ml-2 text-sm line-through text-gray-500">$1,450</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Disponibilidad: ALTA</p>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                    Cantidad de boletos
                  </label>
                  <Input type="number" id="quantity" min="1" defaultValue="1" className="w-full" />
                  <p className="text-xs text-gray-500 mt-1">
                    Favor de agregar la cantidad exacta acorde a los boletos que va a comprar
                  </p>
                </div>

                <Button className="w-full bg-purple-900 hover:bg-purple-800 mb-4">Realizar Pago</Button>

                <div className="text-sm text-gray-600 space-y-3">
                  <div className="flex items-start">
                    <Clock className="h-4 w-4 mr-2 mt-0.5 text-gray-500" />
                    <p>El envío de los boletos es inmediato, de 5 a 10 minutos después del pago.</p>
                  </div>
                  <div className="flex items-start">
                    <CreditCard className="h-4 w-4 mr-2 mt-0.5 text-gray-500" />
                    <p>Aceptamos todas las tarjetas de crédito y débito.</p>
                  </div>
                  <div className="flex items-start">
                    <Send className="h-4 w-4 mr-2 mt-0.5 text-gray-500" />
                    <p>Reporte su pago a los números de teléfono o correo electrónico proporcionados.</p>
                  </div>
                </div>

                <div className="mt-6 border-t pt-4">
                  <div className="flex items-center mb-3">
                    <Shield className="h-5 w-5 text-green-600 mr-2" />
                    <h3 className="font-bold">Garantía 100%</h3>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <p className="text-sm">
                        <strong>Respaldamos todos los pedidos</strong>
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <p className="text-sm">
                        <strong>Los boletos son originales</strong> y llegarán a tiempo para el evento
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <p className="text-sm">
                        <strong>Reembolso total si el evento se cancela</strong> y no se reprograma
                      </p>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
