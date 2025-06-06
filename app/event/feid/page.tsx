import Link from "next/link"
import Image from "https://lh3.googleusercontent.com/fife/ALs6j_HkyvQlzXQj_DyZROtlDQTfqTrtuVSE0z8nfMXLtIAI3OZKK9_3vZ_wxUrKjw6JWoFbQ1AzRt4ncVtMoZaBpmFx2_VdVffINMotH707xIckoWT8S5PGu_a66q2t02_gLXLGYbh7319qKx-L6xN1NCcSJc3HoYtJV8L6YBEBthp8DhVXUKro_0MFW-HmCgAEVghKZz4F9bxdidaTz_stydQXQyOCSj6TaNyhwqU1fMViz2pKM8nPAR0vjb_NW5QJeVSQ4o6GcVxRsYd7MJCoODvkHtGX8vyPDqbpL8cfRSfm91RG-zww68lJSltvh3cksGZxEN9WSC26JG6Hvj0af-LASfBwHKl30YIhxdt6aljHTToYjoqNyRQz4XyHMbmmWlwfnG-VpqpNwS7zZ4CDPDuUVw5iVQawjNSG1s30qfVi58LfmifG1RlJfJBrQ80JFYYTM0NJXVQyYI73AIzZHP8hxLI_cBAPQuZCvqF10YInxtSAufHjdhkgTp3WPIl1e93MvpqVz_jSQT-atEFTQcL-DNJ8jlClxnni7Mi8-Y75vDPdw6wrUT5GuO5VB_PxhQFdGtar_2vab0kOv_W5rHz6ZswMjhsKCTXwcRJZrtjeYrxK2T2QMQSKdJcHvGQMgjNGCu7Kff4TnpASR0iGOIqFiOXZ3CiojUnOik_sV6Q3AnqnbbtaJ82GPYEgGDbTPi2-r8WTKBE5awJgtPzoje7RlmV1tEk5Fadt_5ioOY4egC5CqU1HMVm7nnwKOSxMgPK96q-hzaF1fyuwhiIQw6-GG-_kK1yzh6EsIJUc9i5lkAg9cXGRJHd2KEhe8dRMEmRX-qeIdVQUpfvfQYY1rxdUR3ro9H6fY9cKy70swyD5Qj-iKZA5kYoPzwZOcY8gOUW4Ln8fYMqxSDc9TouXWpJpBbI2TjfGdyHQ3K2avFXvQMJaERtJJ_DeeWY3WB9r8GRCwq4jcMAel5ah1BGxyaVE-BDtn_qo1EsX1m0gbsfdmGdZ7aA67NmenCBpe8NbH76Io0jwyh1KdK9XgjYWrw9R8gTh094NP3pnoQr4e3r_Wbp6wMxvPLUnNGlRWWUToZ6nP0WXFFEICmMdnoBk7wFO1IH7kO1pIN7j0CAJ65eZVIS-IwAQe4RHWM62aAI7SPJW5j_L61bCMdJNP86im9Al4FBKbR4UbXeOI4poLUTkue06vfdk5825RJUz0D6b_TAkER81Z1KDDgdyO445N8ZctN6-nd0Yfo4SBFg4kFk5TOfHO-bEqKFRbtA7bpG5Y4qJyMjl-z5MstFtN2R-gab5SQb-wNk7zpjsUWe3lM31SWEacABhho5aWU6c1mGa6P5QZivyj_1NQ-L68spjwjQ7oAY2C4UjyTqMHWyOxamzUP5mWLc49dDoXfKR8xp60hkwLLQClq2nS5Zk6qCJken6UlWt0eQO6Zh_r59fouheS2ap3lB4Qg4e_1JW4O4G6vhqf8ociRldY_mYdsTYKDseM02o6IMuYa2K4kIgDV8i4PoaP-B1M97rZEnAfqE0pznP55oTTmJ8xQXSMSA_9y6XXnS3DnKtgCrdtBeU0keWefkLBnNl80e0ib5lVTvJ-7zVYNA7zuhzgO4=s1547-w1547-h1080-n-k?authuser=0&hl=es-US"
import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Mail, Phone, Calendar, MapPin, Clock, User } from "lucide-react"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CountdownTimer } from "@/components/countdown-timer"
import { StripePaymentButton } from "@/components/stripe-payment-button"

export default function FeidPage() {
  // Precios
  const cardPrice = 2000
  const transferPrice = 2100
  const ticketsRemaining = 12

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
              Boletos <span className="text-teal-500">Feid</span> Monterrey
            </h1>
            <p className="text-sm text-gray-600">
              vie, 05 de dic de 2025 • 9:00 p.m. at{" "}
              <Link href="#" className="text-teal-500">
                Estadio BBVA
              </Link>
              , Monterrey
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga%20%286%29-4BNqdb5s9I0TVLf6UJ7dnXA1CYgPHf.jpeg"
                alt="Feid"
                width={800}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Información del evento</h2>
                <p className="mb-4">
                  ¡Feid llega al Estadio BBVA con su gira 2025! El artista colombiano presentará todos sus éxitos en una
                  noche inolvidable. No te pierdas la oportunidad de ver a "Ferxxo" en vivo en uno de los mejores
                  estadios de México.
                </p>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 mb-4">
                  <h3 className="font-bold text-purple-900 mb-2">El evento comienza en:</h3>
                  <CountdownTimer targetDate="2025-12-05T21:00:00" className="justify-center" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 mr-2 text-purple-900 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Fecha y hora</h3>
                      <p className="text-sm">Viernes, 05 de diciembre de 2025, 9:00 p.m.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-2 text-purple-900 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Lugar</h3>
                      <p className="text-sm">Estadio BBVA, Monterrey</p>
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
                <Tabs defaultValue="map">
                  <TabsList className="w-full rounded-none border-b">
                    <TabsTrigger value="map" className="flex-1">
                      Mapa de asientos
                    </TabsTrigger>
                    <TabsTrigger value="info" className="flex-1">
                      Información importante
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="map" className="p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold mb-2">Mapa del Estadio BBVA</h3>
                      <div className="bg-white p-2 border rounded-lg">
                        <Image
                          src="/placeholder.svg?height=400&width=800"
                          alt="Mapa de asientos Estadio BBVA"
                          width={800}
                          height={400}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-lg font-bold mb-2">Ubicación de tus asientos</h3>
                      <div className="p-4 border rounded-lg bg-blue-50">
                        <p className="font-medium">
                          Zona: <span className="text-blue-600">Cabecera Norte</span>
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                          Los asientos están ubicados en la zona Cabecera Norte, con buena visibilidad del escenario.
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="info" className="p-6">
                    <div className="space-y-4">
                      <div className="border-b pb-3">
                        <h3 className="font-semibold mb-1">Límite de edad</h3>
                        <p className="text-sm">No hay</p>
                      </div>

                      <div className="border-b pb-3">
                        <h3 className="font-semibold mb-1">Pagan boleto a partir de</h3>
                        <p className="text-sm">3 años</p>
                      </div>

                      <div className="border-b pb-3">
                        <h3 className="font-semibold mb-1">Restricciones</h3>
                        <p className="text-sm">
                          Se prohíbe ingresar al evento con: Objetos punzocortantes, mascotas, lasers, comida y/o
                          bebida, sombrillas, aerosoles, bolsas que superen los 30x30cm, botellas de cualquier tipo,
                          latas, sillas, cobijas, anforitas, navajas, pirotecnia, spray pimienta, drogas, sustancias
                          ilícitas, cámaras profesionales de foto y/o video o equipo de grabación de audio.
                        </p>
                      </div>

                      <div className="border-b pb-3">
                        <h3 className="font-semibold mb-1">Límite de acceso</h3>
                        <p className="text-sm">Recomendamos anticipar su llegada</p>
                      </div>

                      <div className="border-b pb-3">
                        <h3 className="font-semibold mb-1">Servicios</h3>
                        <p className="text-sm">
                          Sanitarios. Venta de alimentos, bebidas y mercancía oficial. Atención a Personas con
                          Discapacidad.
                        </p>
                      </div>

                      <div className="border-b pb-3">
                        <h3 className="font-semibold mb-1">Límite de boletos</h3>
                        <p className="text-sm">8 por persona</p>
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
