import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Shield } from "lucide-react"
import { Footer } from "@/components/footer"

export default function ImagineDragonsPage() {
  const price = 6500

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
              Boletos <span className="text-teal-500">Imagine Dragons</span> Ciudad de México
            </h1>
            <p className="text-sm text-gray-600">
              Próximamente • Por confirmar at{" "}
              <Link href="#" className="text-teal-500">
                Venue por confirmar
              </Link>
              , Ciudad de México
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/88f2c7f8d1f717bda8f4b240b0394810-fOmMRVHarhDqu0GPPPpeAUfkb35wHq.webp"
                alt="Imagine Dragons"
                width={800}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Información del evento</h2>
                <p className="mb-4">
                  Imagine Dragons llega a México con su gira mundial. No te pierdas la oportunidad de ver a esta banda
                  en vivo y disfrutar de todos sus éxitos. Fecha y lugar por confirmar. ¡Mantente atento a las
                  actualizaciones!
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold mb-2">Pista</h3>
                <p className="text-3xl font-bold mb-1">${price}</p>
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
                        When your mobile tickets are ready, accept the ticket transfer offer from your email account.
                        You will need an iPhone or Android phone to use your tickets.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="mb-4"
                  dangerouslySetInnerHTML={{
                    __html: `
                      <script async src="https://js.stripe.com/v3/buy-button.js"></script>
                      <stripe-buy-button
                        buy-button-id="buy_btn_1RKTRMDmbPVIe78QmiaOmoQv"
                        publishable-key="pk_live_51RJVg0DmbPVIe78Q9S3NUPRaGC842f1uwbNY5htrYteg2p4TTFKHQoCFh0lyaEQi1dOah5M2VpMYrGicNV36K4fP00zwV4vBDO"
                      >
                      </stripe-buy-button>
                    `,
                  }}
                />

                <div className="bg-gray-100 p-3 rounded-md mb-4">
                  <p className="font-medium text-sm">También puedes pagar por transferencia bancaria:</p>
                  <p className="font-medium text-sm">Banco: Inbursa</p>
                  <p className="font-medium text-sm">
                    CLABE: <span className="text-green-600">036260711506296288</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-4">
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
