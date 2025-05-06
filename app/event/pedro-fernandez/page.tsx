import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Mail, Phone, Calendar, MapPin, Clock } from "lucide-react"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PedroFernandezPage() {
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
              Boletos <span className="text-teal-500">Pedro Fernández</span> Zapopan
            </h1>
            <p className="text-sm text-gray-600">
              vie, 16 de may de 2025 • 9:00 p.m. at{" "}
              <Link href="#" className="text-teal-500">
                Auditorio Telmex
              </Link>
              , Zapopan, JAL
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cdd39e1cb7754203218f79e2dd392e64-JvrwJJZEHxvyh2fH2nFOKKS7PfmfXf.webp"
                alt="Pedro Fernández"
                width={800}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Información del evento</h2>
                <p className="mb-4">
                  Pedro Fernández, uno de los máximos exponentes de la música ranchera, se presenta en el Auditorio
                  Telmex con un espectáculo inolvidable. No te pierdas la oportunidad de disfrutar de todos sus éxitos
                  en vivo.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 mr-2 text-purple-900 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Fecha y hora</h3>
                      <p className="text-sm">Viernes, 16 de mayo de 2025, 9:00 p.m.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-2 text-purple-900 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Lugar</h3>
                      <p className="text-sm">Auditorio Telmex, Zapopan, JAL</p>
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
                <Tabs defaultValue="prices">
                  <TabsList className="w-full rounded-none border-b">
                    <TabsTrigger value="prices" className="flex-1">
                      Precios por zona
                    </TabsTrigger>
                    <TabsTrigger value="info" className="flex-1">
                      Información adicional
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="prices" className="p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold mb-4">Precios por zona</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 border rounded-lg bg-blue-50">
                          <h4 className="font-bold text-blue-800">Zona Azul</h4>
                          <p className="text-2xl font-bold">$1,200</p>
                          <p className="text-sm text-gray-600">6 boletos disponibles</p>
                        </div>
                        <div className="p-4 border rounded-lg bg-green-50">
                          <h4 className="font-bold text-green-800">Zona Verde</h4>
                          <p className="text-2xl font-bold">$800</p>
                          <p className="text-sm text-gray-600">6 boletos disponibles</p>
                        </div>
                        <div className="p-4 border rounded-lg bg-gray-50">
                          <h4 className="font-bold text-gray-800">Zona Blanca</h4>
                          <p className="text-2xl font-bold">$700</p>
                          <p className="text-sm text-gray-600">6 boletos disponibles</p>
                        </div>
                        <div className="p-4 border rounded-lg bg-purple-50">
                          <h4 className="font-bold text-purple-800">Zona Lila</h4>
                          <p className="text-2xl font-bold">$550</p>
                          <p className="text-sm text-gray-600">6 boletos disponibles</p>
                        </div>
                        <div className="p-4 border rounded-lg bg-orange-50">
                          <h4 className="font-bold text-orange-800">Zona Naranja</h4>
                          <p className="text-2xl font-bold">$450</p>
                          <p className="text-sm text-gray-600">6 boletos disponibles</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="info" className="p-6">
                    <div className="space-y-4">
                      <div className="border-b pb-3">
                        <h3 className="font-semibold mb-1">Límite de edad</h3>
                        <p className="text-sm">
                          A partir de 3 años en adelante pagan boleto, menores de 3 años no ingresan ni pagando boleto.
                        </p>
                      </div>

                      <div className="border-b pb-3">
                        <h3 className="font-semibold mb-1">Restricciones</h3>
                        <p className="text-sm">
                          No ingrese con cámaras de video/fotográficas, no ingresar alimentos/bebidas.
                        </p>
                      </div>

                      <div className="border-b pb-3">
                        <h3 className="font-semibold mb-1">Límite de acceso</h3>
                        <p className="text-sm">15 minutos antes.</p>
                      </div>

                      <div className="border-b pb-3">
                        <h3 className="font-semibold mb-1">Servicios</h3>
                        <p className="text-sm">Estacionamiento, venta de bebidas/snacks, WiFi.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-1">Página oficial</h3>
                        <a
                          href="http://www.auditorio-telmex.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-purple-900 hover:underline"
                        >
                          www.auditorio-telmex.com
                        </a>
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
                <h3 className="font-bold mb-2">Selecciona tu zona</h3>

                <div className="space-y-4 mb-4">
                  <div className="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div>
                      <p className="font-medium">Zona Azul</p>
                      <p className="text-sm text-gray-500">6 boletos disponibles</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">$1,200</p>
                      <p className="text-sm text-gray-500">por boleto</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div>
                      <p className="font-medium">Zona Verde</p>
                      <p className="text-sm text-gray-500">6 boletos disponibles</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">$800</p>
                      <p className="text-sm text-gray-500">por boleto</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div>
                      <p className="font-medium">Zona Blanca</p>
                      <p className="text-sm text-gray-500">6 boletos disponibles</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">$700</p>
                      <p className="text-sm text-gray-500">por boleto</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-purple-900 hover:bg-purple-800" asChild>
                  <Link href="/comprar">Comprar ahora</Link>
                </Button>

                <div className="bg-gray-100 p-3 rounded-md mt-4 mb-4">
                  <p className="font-medium text-sm">Datos bancarios:</p>
                  <p className="font-medium text-sm">Banco: Inbursa</p>
                  <p className="font-medium text-sm">
                    CLABE: <span className="text-green-600">036260711506296288</span>
                  </p>
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
