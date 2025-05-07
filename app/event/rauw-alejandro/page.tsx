import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Mail, Phone } from "lucide-react"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { StripePaymentButton } from "@/components/stripe-payment-button"
import { CountdownTimer } from "@/components/countdown-timer"

export default function RauwAlejandroPage() {
  // Precio original y con descuento
  const cardPrice = 2200
  const transferPrice = 1600
  const ticketsRemaining = 2

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-4 flex-grow">
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
              Boletos <span className="text-teal-500">Rauw Alejandro</span> Ciudad de México
            </h1>
            <p className="text-sm text-gray-600">
              sáb, 08 de nov de 2025 • 8:00 p.m. at{" "}
              <Link href="#" className="text-teal-500">
                Palacio de los Deportes
              </Link>
              , Ciudad de México
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="mb-6 relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <Image
                  src="/images/rauw-alejandro-new2.png"
                  alt="Rauw Alejandro"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover rounded-lg"
                  priority
                />
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Información del evento</h2>
                <p className="mb-4">
                  No te pierdas a Rauw Alejandro en concierto en el Palacio de los Deportes de la Ciudad de México. El
                  artista puertorriqueño presentará todos sus éxitos en una noche inolvidable.
                </p>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 mb-4">
                  <h3 className="font-bold text-purple-900 mb-2">El evento comienza en:</h3>
                  <CountdownTimer targetDate="2025-11-08T20:00:00" className="justify-center" />
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-4">
                  <p className="font-bold text-yellow-800">¡OFERTA ESPECIAL!</p>
                  <p className="text-yellow-800">
                    Aprovecha nuestro descuento especial pagando por transferencia bancaria.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold mb-2">Opciones de pago</h3>

                <div className="mb-6 border-b pb-4">
                  <h4 className="font-semibold text-lg">Pago con tarjeta</h4>
                  <p className="text-3xl font-bold mb-1">${cardPrice}</p>
                  <div className="flex items-center mb-2">
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded">
                      ¡Solo quedan {ticketsRemaining} boletos!
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">cada uno</p>

                  <StripePaymentButton className="mb-4" />

                  <div className="mt-2 text-center">
                    <Link
                      href="https://buy.stripe.com/eVaeX5gtr2qE8da002?locale=es-419"
                      target="_blank"
                      className="text-sm text-purple-900 hover:underline"
                    >
                      Abrir página de pago completa
                    </Link>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-lg">Transferencia bancaria</h4>
                  <div className="flex items-center mb-2">
                    <p className="text-3xl font-bold">${transferPrice}</p>
                    <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
                      ¡AHORRA ${cardPrice - transferPrice}!
                    </span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded">
                      ¡Solo quedan {ticketsRemaining} boletos!
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">cada uno</p>

                  <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                    <Link href="/comprar">Comprar con descuento</Link>
                  </Button>

                  <div className="bg-gray-100 p-3 rounded-md mt-4 mb-4">
                    <p className="font-medium text-sm">Datos bancarios:</p>
                    <p className="font-medium text-sm">Banco: Inbursa</p>
                    <p className="font-medium text-sm">
                      CLABE: <span className="text-green-600">036260711506296288</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-4 mb-4">
              <CardContent className="p-4">
                <div className="flex items-center mb-3">
                  <Phone className="h-5 w-5 text-purple-900 mr-2" />
                  <h3 className="font-bold">Teléfonos de contacto</h3>
                </div>
                <p className="text-sm mb-2">Para cualquier duda o consulta:</p>
                <p className="font-medium">
                  <a href="tel:3322091849" className="text-purple-900 hover:underline">
                    33 2209 1849
                  </a>
                </p>
                <p className="font-medium">
                  <a href="tel:3322352984" className="text-purple-900 hover:underline">
                    33 22352984
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="mb-4">
              <CardContent className="p-4">
                <div className="flex items-center mb-3">
                  <Mail className="h-5 w-5 text-purple-900 mr-2" />
                  <h3 className="font-bold">Correo de contacto</h3>
                </div>
                <p className="text-sm mb-2">Para información general:</p>
                <p className="font-medium text-purple-900">stubhub.com.mx</p>
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
        </div>
      </div>

      <Footer />
    </main>
  )
}
