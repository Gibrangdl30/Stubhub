import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Mail, Phone, Calendar, MapPin, Clock, User } from "lucide-react"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CountdownTimer } from "@/components/countdown-timer"
import { NotificationBar } from "@/components/notification-bar"

export default function TecateEmblemaPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <NotificationBar />
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
              Boletos <span className="text-teal-500">Tecate Emblema 2025</span> Ciudad de México
            </h1>
            <p className="text-sm text-gray-600">
              vie-sáb, 16-17 de mayo de 2025 • 2:00 p.m. at{" "}
              <Link href="#" className="text-teal-500">
                Autódromo Hermanos Rodríguez
              </Link>
              , Ciudad de México
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="mb-6">
              <Image
                src="/images/tecate-emblema-2025.png"
                alt="Tecate Emblema 2025"
                width={800}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Información del evento</h2>
                <p className="mb-4">
                  ¡Tecate Emblema regresa en 2025 con un line-up espectacular! El festival más esperado del año llega al
                  Autódromo Hermanos Rodríguez los días 16 y 17 de mayo con artistas de talla internacional como Alanis
                  Morissette, David Guetta, Morat, Pitbull y muchos más. Como invitado especial estará Will Smith.
                </p>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 mb-4">
                  <h3 className="font-bold text-purple-900 mb-2">El evento comienza en:</h3>
                  <CountdownTimer targetDate="2025-05-16T14:00:00" className="justify-center" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 mr-2 text-purple-900 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Fecha y hora</h3>
                      <p className="text-sm">16 y 17 de mayo de 2025, desde las 2:00 p.m.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-2 text-purple-900 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Lugar</h3>
                      <p className="text-sm">Autódromo Hermanos Rodríguez, CDMX</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 mr-2 text-purple-900 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Duración</h3>
                      <p className="text-sm">12 horas por día aproximadamente</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Line-up</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold mb-3 text-purple-800">Headliners</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                        <span className="font-medium">Alanis Morissette</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                        <span className="font-medium">David Guetta</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                        <span className="font-medium">Morat</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                        <span className="font-medium">Pitbull</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                        <span className="font-medium">Will Smith (Invitado Especial)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-3 text-purple-800">Otros artistas</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                        <span className="font-medium">Sofi Tukker</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                        <span className="font-medium">The B-52s</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                        <span className="font-medium">CD9</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                        <span className="font-medium">James Bay</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                        <span className="font-medium">María José</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                  <p className="text-sm text-purple-800">
                    Y muchos artistas más como Purple Disco Machine, Hanson, JoJo Siwa, Iñigo Quintero, Lasso, Trixie
                    Mattel, Belén Aguilera, Leo Rizzi, Jacinto, Patrick Miller y más.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <Tabs defaultValue="map">
                  <TabsList className="w-full rounded-none border-b">
                    <TabsTrigger value="map" className="flex-1">
                      Mapa del evento
                    </TabsTrigger>
                    <TabsTrigger value="info" className="flex-1">
                      Información importante
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="map" className="p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold mb-2">Mapa del Autódromo Hermanos Rodríguez</h3>
                      <div className="bg-white p-2 border rounded-lg">
                        <Image
                          src="/placeholder.svg?height=400&width=800"
                          alt="Mapa del Autódromo Hermanos Rodríguez"
                          width={800}
                          height={400}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-lg font-bold mb-2">Zonas del festival</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 border rounded-lg bg-blue-50">
                          <p className="font-medium">
                            Zona: <span className="text-blue-600">General</span>
                          </p>
                          <p className="text-sm text-gray-600 mt-2">
                            Acceso a todas las áreas generales del festival, incluyendo los escenarios principales y
                            secundarios, zona de food trucks y áreas de descanso.
                          </p>
                        </div>
                        <div className="p-4 border rounded-lg bg-purple-50">
                          <p className="font-medium">
                            Zona: <span className="text-purple-600">Comfort Pass</span>
                          </p>
                          <p className="text-sm text-gray-600 mt-2">
                            Incluye todos los beneficios de la zona General, más acceso a áreas exclusivas, baños VIP,
                            zonas de sombra y barras exclusivas con menos filas.
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="info" className="p-6">
                    <div className="space-y-4">
                      <div className="border-b pb-3">
                        <h3 className="font-semibold mb-1">Límite de edad</h3>
                        <p className="text-sm">Mayores de 18 años. Se requiere identificación oficial.</p>
                      </div>

                      <div className="border-b pb-3">
                        <h3 className="font-semibold mb-1">Restricciones</h3>
                        <p className="text-sm">
                          No se permite ingresar con alimentos ni bebidas, objetos punzocortantes, drogas, armas,
                          cámaras profesionales, selfie sticks, drones, mascotas, paraguas, sillas, mochilas grandes o
                          maletas.
                        </p>
                      </div>

                      <div className="border-b pb-3">
                        <h3 className="font-semibold mb-1">Recomendaciones</h3>
                        <p className="text-sm">
                          Llegar con anticipación, usar ropa y calzado cómodo, llevar protector solar, gorra o sombrero,
                          y mantener hidratación constante.
                        </p>
                      </div>

                      <div className="border-b pb-3">
                        <h3 className="font-semibold mb-1">Servicios</h3>
                        <p className="text-sm">
                          Estacionamiento (con costo adicional), food trucks, barras de bebidas, zonas de descanso,
                          primeros auxilios, lockers (con costo adicional), carga de celulares y Wi-Fi en áreas
                          designadas.
                        </p>
                      </div>

                      <div className="border-b pb-3">
                        <h3 className="font-semibold mb-1">Transporte</h3>
                        <p className="text-sm">
                          Se recomienda usar transporte público. La estación de Metro Ciudad Deportiva (Línea 9) se
                          encuentra a pocos minutos caminando. Habrá servicio de taxis y transporte por aplicación en
                          zonas designadas.
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
                <h3 className="font-bold mb-2">Opciones de boletos</h3>

                <div className="mb-6 border-b pb-4">
                  <h4 className="font-semibold text-lg">Abono General (2 días)</h4>
                  <p className="text-3xl font-bold mb-1">$2,100</p>
                  <div className="flex items-center mb-2">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
                      ¡Mejor opción!
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">Acceso para ambos días del festival</p>

                  <Button className="w-full bg-purple-900 hover:bg-purple-800" asChild>
                    <Link href="/comprar">Comprar ahora</Link>
                  </Button>
                </div>

                <div className="mb-6 border-b pb-4">
                  <h4 className="font-semibold text-lg">Boleto General (1 día)</h4>
                  <p className="text-3xl font-bold mb-1">$1,200</p>
                  <p className="text-sm text-gray-500 mb-4">Elige entre viernes 16 o sábado 17 de mayo</p>

                  <div className="flex space-x-2 mb-4">
                    <Button className="flex-1 bg-purple-900 hover:bg-purple-800">Viernes 16</Button>
                    <Button className="flex-1 bg-purple-900 hover:bg-purple-800">Sábado 17</Button>
                  </div>
                </div>

                <div className="mb-6 border-b pb-4">
                  <h4 className="font-semibold text-lg">Comfort Pass (2 días)</h4>
                  <p className="text-3xl font-bold mb-1">$3,900</p>
                  <div className="flex items-center mb-2">
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-0.5 rounded">
                      Experiencia VIP
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">Acceso premium para ambos días</p>

                  <Button className="w-full bg-purple-900 hover:bg-purple-800" asChild>
                    <Link href="/comprar">Comprar ahora</Link>
                  </Button>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-lg">Comfort Pass (1 día)</h4>
                  <p className="text-3xl font-bold mb-1">$1,800</p>
                  <p className="text-sm text-gray-500 mb-4">Experiencia premium para un día</p>

                  <div className="flex space-x-2 mb-4">
                    <Button className="flex-1 bg-purple-900 hover:bg-purple-800">Viernes 16</Button>
                    <Button className="flex-1 bg-purple-900 hover:bg-purple-800">Sábado 17</Button>
                  </div>
                </div>

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
