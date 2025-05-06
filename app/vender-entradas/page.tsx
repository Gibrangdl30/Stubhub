import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, AlertCircle } from "lucide-react"

export default function VenderEntradasPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-2">Vende tus entradas</h1>
          <p className="text-gray-600 mb-6">
            Si ya tienes boletos y no podrás asistir, podemos ayudarte a venderlos de forma segura.
          </p>

          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <AlertCircle className="h-6 w-6 text-purple-900 mr-2" />
                <h2 className="text-xl font-semibold">Instrucciones para vender tus entradas</h2>
              </div>

              <div className="space-y-4 mb-6">
                <p>
                  Para vender tus entradas, por favor envía un correo electrónico a{" "}
                  <a href="mailto:mariodavalosprz@gmail.com" className="text-purple-900 font-medium hover:underline">
                    mariodavalosprz@gmail.com
                  </a>{" "}
                  con la siguiente información:
                </p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Nombre del evento</li>
                  <li>Fecha del evento</li>
                  <li>Número de boletos que deseas vender</li>
                  <li>Sección, fila y asientos (si aplica)</li>
                  <li>Precio de venta deseado</li>
                  <li>Tu información de contacto</li>
                  <li>Una foto o captura de pantalla de los boletos</li>
                </ul>

                <p>
                  Nuestro equipo se pondrá en contacto contigo a la brevedad para coordinar la venta de tus entradas.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border mb-6">
                <h3 className="font-semibold mb-2">Formulario de contacto</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nombre">Nombre completo</Label>
                      <Input id="nombre" placeholder="Tu nombre" />
                    </div>
                    <div>
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input id="email" type="email" placeholder="tu@email.com" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input id="telefono" placeholder="Tu número de teléfono" />
                  </div>
                  <div>
                    <Label htmlFor="evento">Evento</Label>
                    <Input id="evento" placeholder="Nombre del evento" />
                  </div>
                  <div>
                    <Label htmlFor="boletos">Número de boletos</Label>
                    <Input id="boletos" type="number" min="1" placeholder="Cantidad de boletos" />
                  </div>
                  <div>
                    <Label htmlFor="detalles">Detalles de los boletos</Label>
                    <Textarea id="detalles" placeholder="Sección, fila, asientos, precio deseado, etc." rows={4} />
                  </div>
                  <Button type="submit" className="w-full bg-purple-900 hover:bg-purple-800">
                    Enviar información
                  </Button>
                </form>
              </div>

              <div className="text-sm text-gray-600">
                <p className="font-semibold mb-2">Importante:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Solo aceptamos boletos originales y verificables.</li>
                  <li>
                    La venta de boletos está sujeta a nuestros términos y condiciones, incluyendo una comisión por
                    servicio.
                  </li>
                  <li>No garantizamos la venta de todos los boletos.</li>
                  <li>El pago se realizará una vez que los boletos hayan sido vendidos.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center mb-3">
                  <Phone className="h-5 w-5 text-purple-900 mr-2" />
                  <h3 className="font-bold">Teléfonos de contacto</h3>
                </div>
                <p className="mb-2">Para cualquier duda o consulta:</p>
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

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center mb-3">
                  <Mail className="h-5 w-5 text-purple-900 mr-2" />
                  <h3 className="font-bold">Correo de contacto</h3>
                </div>
                <p className="mb-2">Para venta de boletos:</p>
                <p className="font-medium text-purple-900">mariodavalosprz@gmail.com</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-between mt-6">
            <Button variant="outline" asChild>
              <Link href="/">Volver al inicio</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
