import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, MapPin, Info, Calendar, Mail, Phone } from "lucide-react"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function CaifanesPage() {
  // Precios con descuento
  const originalPrice = 2200
  const discountedPrice = 1400

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
              Boletos <span className="text-teal-500">Caifanes</span> Zapopan
            </h1>
            <p className="text-sm text-gray-600">
              sáb, 4 de oct de 2025 • 9:00 p.m. at{" "}
              <Link href="#" className="text-teal-500">
                Auditorio Telmex
              </Link>
              , Zapopan, JAL
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="mb-6 bg-black p-4 rounded-lg flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga%20%281%29-xCDd5ZLbk1xB9sNRkAW0AOa92mGWc5.webp"
                alt="Caifanes"
                width={600}
                height={300}
                className="w-auto h-auto max-h-[300px] object-contain"
              />
            </div>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Información del evento</h2>
                <p className="mb-4">
                  Caifanes es una de banda mexicana de Rock alternativo. Su música ha sido considerada por la crítica
                  como uno de los actos más innovadores e influyentes en el rock latinoamericano durante el siglo XX.
                  Estuvo activa de 1986 a 1995, y de 2011 hasta la actualidad.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 mr-2 text-purple-900 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Fecha y hora</h3>
                      <p className="text-sm">sáb, 4 de oct de 2025, 9:00 p.m.</p>
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
                      <p className="text-sm">2 hrs aproximadamente</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Info className="h-5 w-5 mr-2 text-purple-900 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Límite de boletos</h3>
                      <p className="text-sm">8 boletos por persona</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Información importante</h2>

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
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-1">
            <Card className="mb-4">
              <CardContent className="p-4">
                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 mb-4">
                  <p className="font-bold text-yellow-800">¡OFERTA ESPECIAL!</p>
                  <p className="text-yellow-800">
                    Boletos con descuento - ¡Antes ${originalPrice}, ahora solo ${discountedPrice}!
                  </p>
                </div>

                <h3 className="font-bold mb-2">Boletos disponibles</h3>
                <div className="mb-4 border rounded-lg p-3 bg-gray-50">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <p className="font-medium">ZONA C 8 - Fila B</p>
                      <p className="text-sm text-gray-600">Asiento 10</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center">
                        <p className="text-xl font-bold">${discountedPrice}</p>
                        <p className="ml-2 text-sm line-through text-gray-500">${originalPrice}</p>
                      </div>
                      <p className="text-xs text-gray-500">por boleto</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">1 boleto disponible</p>
                  <Button className="w-full bg-purple-900 hover:bg-purple-800" asChild>
                    <Link href="/comprar">Comprar ahora</Link>
                  </Button>
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
                <p className="font-medium text-purple-900">stubooficial2025@outlook.com</p>
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
