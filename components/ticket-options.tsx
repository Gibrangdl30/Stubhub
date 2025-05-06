import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield } from "lucide-react"

interface TicketOptionsProps {
  eventData: {
    id: string
    title: string
    location: string
    venue: string
    date: string
    time: string
    price: number
    currency: string
    image: string
  }
}

export function TicketOptions({ eventData }: TicketOptionsProps) {
  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-4">
          <h3 className="font-bold mb-2">Pista</h3>
          <p className="text-3xl font-bold mb-1">${eventData.price}</p>
          <p className="text-sm text-gray-500 mb-4">cada uno</p>

          <div className="mb-4">
            <div className="flex items-start mb-4">
              <div className="mr-3 mt-1">
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold">Transferencia electrónica</h4>
                <p className="text-sm text-gray-600">
                  When your mobile tickets are ready, accept the ticket transfer offer from your email account. You will
                  need an iPhone or Android phone to use your tickets. Your tickets will be ready by:{" "}
                  <span className="font-semibold">sáb, 8 de nov de 2025</span>
                </p>
              </div>
            </div>
          </div>

          <Button className="w-full bg-purple-900 hover:bg-purple-800 text-white">Comprar ahora</Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
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
            <li className="flex items-start">
              <span className="text-gray-400 mr-2">•</span>
              <p className="text-sm">
                <strong>Atención al cliente</strong> hasta tu asiento
              </p>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
