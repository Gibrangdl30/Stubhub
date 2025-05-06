import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Clock, AlertCircle, CheckCircle2 } from "lucide-react"

export default function ComprarPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-2">Finalizar compra</h1>
          <p className="text-gray-600 mb-6">Sigue las instrucciones para completar tu compra y recibir tus boletos</p>

          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-green-600 mr-2" />
                <h2 className="text-xl font-semibold">Transferencia bancaria</h2>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-4 border">
                <h3 className="font-semibold mb-2">Datos bancarios:</h3>
                <p className="mb-1">
                  <span className="font-medium">Banco:</span> Inbursa
                </p>
                <p className="mb-1">
                  <span className="font-medium">CLABE:</span>{" "}
                  <span className="text-green-600 font-medium">036260711506296288</span>
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-purple-900 mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Envío inmediato</h3>
                    <p className="text-sm text-gray-600">
                      Los boletos se envían a tu cuenta de Ticketmaster en un lapso de 5 a 10 minutos después de
                      confirmar tu pago.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-purple-900 mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Importante</h3>
                    <p className="text-sm text-gray-600">
                      Después de realizar la transferencia, es necesario que envíes:
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 ml-2 mt-1">
                      <li>Comprobante de pago</li>
                      <li>Número de teléfono de contacto</li>
                      <li>
                        En el concepto de pago, incluye tu correo electrónico registrado en Ticketmaster para el envío
                        de boletos
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-purple-900 mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Teléfonos de contacto</h3>
                    <p className="text-sm text-gray-600">
                      <a href="tel:3322091849" className="text-purple-900 hover:underline">
                        33 2209 1849
                      </a>{" "}
                      o{" "}
                      <a href="tel:3322352984" className="text-purple-900 hover:underline">
                        33 2235 2984
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-purple-900 mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Correo electrónico</h3>
                    <p className="text-sm text-gray-600">
                      <span className="text-purple-900">stubhub.com.mx</span>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
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
