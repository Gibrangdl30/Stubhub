import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"

export function PaymentInfo() {
  return (
    <section className="px-4 py-6 md:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Información de Pago</h2>

        <Card className="mb-4">
          <CardContent className="p-4">
            <h3 className="font-bold text-lg mb-2">Pago con tarjeta</h3>
            <div className="mb-4">
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                    <script async src="https://js.stripe.com/v3/buy-button.js"></script>
                    <stripe-buy-button
                      buy-button-id="buy_btn_1RKuC9DmbPVIe78Qcd3um9rH"
                      publishable-key="pk_live_51RJVg0DmbPVIe78Q9S3NUPRaGC842f1uwbNY5htrYteg2p4TTFKHQoCFh0lyaEQi1dOah5M2VpMYrGicNV36K4fP00zwV4vBDO"
                    >
                    </stripe-buy-button>
                  `,
                }}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="p-4">
            <h3 className="font-bold text-lg mb-2">Transferencia bancaria</h3>
            <p className="mb-2">
              También puedes realizar tu pago mediante transferencia bancaria a la siguiente cuenta:
            </p>

            <div className="bg-gray-100 p-3 rounded-md mb-4">
              <p className="font-medium">Banco: Inbursa</p>
              <p className="font-medium">
                CLABE: <span className="text-green-600">036260711506296288</span>
              </p>
            </div>

            <div className="text-sm text-gray-600">
              <p>Una vez realizado el pago, envía el comprobante a nuestro WhatsApp para confirmar tu compra.</p>
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
              <p className="mb-2">Para información general:</p>
              <p className="font-medium text-purple-900">stubhub.com.mx</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
