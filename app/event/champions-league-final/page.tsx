import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Mail, Phone, Calendar, MapPin, Clock, User } from "lucide-react"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StripePaymentButton } from "@/components/stripe-payment-button"
import { CountdownTimer } from "@/components/countdown-timer"

export default function ChampionsLeagueFinalPage() {
  // Precios
  const cardPrice = 15000
  const transferPrice = 12500
  const ticketsRemaining = 4

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
              Boletos <span className="text-teal-500">Final Liga de Campeones</span> Londres
            </h1>
            <p className="text-sm text-gray-600">
              sáb, 31 de may de 2025 • 8:00 p.m. at{" "}
              <Link href="#" className="text-teal-500">
                Estadio de Wembley
              </Link>
              , Londres, Reino Unido
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sh_clf25_414x90_x2_MX-WN9XheEhc9PZQ6r9b81tOYpG99dw7a.jpeg"
                alt="Final Liga de Campeones"
                width={800}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Información del evento</h2>
                <p className="mb-4">
                  La final de la UEFA Champions League 2025 se celebrará en el icónico Estadio de Wembley en Londres.
                  Este evento es la culminación del torneo de clubes más prestigioso del mundo, donde los dos mejores
                  equipos de Europa se enfrentarán por el título de campeón.
                </p>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 mb-4">
                  <h3 className="font-bold text-purple-900 mb-2">El evento comienza en:</h3>
                  <CountdownTimer targetDate="2025-05-31T20:00:00" className="justify-center" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 mr-2 text-purple-900 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Fecha y hora</h3>
                      <p className="text-sm">Sábado, 31 de mayo de 2025, 8:00 p.m.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-2 text-purple-900 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Lugar</h3>
                      <p className="text-sm">Estadio de Wembley, Londres</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 mr-2 text-purple-900 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Duración</h3>
                      <p className="text-sm">2 horas aproximadamente</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <Tabs defaultValue="info">
                  <TabsList className="w-full rounded-none border-b">
                    <TabsTrigger value="info" className="flex-1">
                      Información importante
                    </TabsTrigger>
                    <TabsTrigger value="travel" className="flex-1">
                      Información de viaje
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="info" className="p-6">
                    <div className="space-y-4">
                      <div className="border-b pb-3">
                        <h3 className="font-semibold mb-1">Equipos</h3>
                        <p className="text-sm">
                          Los equipos finalistas se determinarán tras las semifinales de la UEFA Champions League.
                        </p>
                      </div>

                      <div className="border-b pb-3">
                        <h3 className="font-semibold mb-1">Restricciones</h3>
                        <p className="text-sm">
                          No se permite el ingreso con cámaras profesionales, bebidas alcohólicas, objetos punzantes,
                          pirotecnia o cualquier otro objeto que pueda ser considerado peligroso.
                        </p>
                      </div>

                      <div className="border-b pb-3">
                        <h3 className="font-semibold mb-1">Acceso al estadio</h3>
                        <p className="text-sm">
                          Se recomienda llegar al estadio con al menos 2 horas de anticipación debido a los controles de
                          seguridad.
                        </p>
                      </div>

                      <div className="border-b pb-3">
                        <h3 className="font-semibold mb-1">Servicios</h3>
                        <p className="text-sm">
                          El estadio cuenta con servicios de comida y bebida, tiendas oficiales, y asistencia médica.
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="travel" className="p-6">
                    <div className="space-y-4">
                      <div className="border-b pb-3">
                        <h3 className="font-semibold mb-1">Transporte</h3>
                        <p className="text-sm">
                          El Estadio de Wembley está bien conectado por transporte público. Se recomienda utilizar el
                          metro (estaciones Wembley Park o Wembley Central) o los autobuses locales.
                        </p>
                      </div>

                      <div className="border-b pb-3">
                        <h3 className="font-semibold mb-1">Alojamiento</h3>
                        <p className="text-sm">
                          Se recomienda reservar alojamiento con anticipación debido a la alta demanda durante el
                          evento.
                        </p>
                      </div>

                      <div className="border-b pb-3">
                        <h3 className="font-semibold mb-1">Documentación</h3>
                        <p className="text-sm">
                          Los visitantes internacionales deben asegurarse de tener pasaporte válido y, si es necesario,
                          visa para ingresar al Reino Unido.
                        </p>
                      </div>

                      <div className="border-b pb-3">
                        <h3 className="font-semibold mb-1">Paquetes de viaje</h3>
                        <p className="text-sm">
                          Ofrecemos paquetes que incluyen boleto, alojamiento y traslados. Contacta con nuestro equipo
                          para más información.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
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
                  <User className="h-5 w-5 text-purple-900 mr-2" />
                  <h3 className="font-bold">¿Quieres vender tus entradas?</h3>
                </div>
                <p className="text-sm mb-4">
                  Si ya tienes boletos y no podrás asistir, podemos ayudarte a venderlos de forma segura.
                </p>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/vender-entradas">Vender mis entradas</Link>
                </Button>
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
                    33 2235 2984
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
