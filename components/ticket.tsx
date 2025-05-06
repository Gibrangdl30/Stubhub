"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Printer } from "lucide-react"
import QRCode from "qrcode"

interface TicketProps {
  ticket: {
    id: number
    nombre: string
    asiento: string
    seccion: string
    precio: string
    fecha: string
    hora: string
    evento: string
    lugar: string
  }
}

export function Ticket({ ticket }: TicketProps) {
  const ticketRef = useRef<HTMLDivElement>(null)
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("")

  useEffect(() => {
    // Generar un código QR único basado en los datos del boleto
    const ticketData = JSON.stringify({
      id: ticket.id,
      nombre: ticket.nombre,
      evento: ticket.evento,
      fecha: ticket.fecha,
      seccion: ticket.seccion,
      asiento: ticket.asiento,
      timestamp: new Date().toISOString(),
    })

    QRCode.toDataURL(ticketData, {
      errorCorrectionLevel: "H",
      margin: 1,
      width: 200,
    })
      .then((url) => {
        setQrCodeUrl(url)
      })
      .catch((err) => {
        console.error("Error generando QR:", err)
      })
  }, [ticket])

  const handlePrint = () => {
    if (ticketRef.current) {
      const printWindow = window.open("", "_blank")
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Boleto - ${ticket.evento}</title>
              <style>
                body { font-family: Arial, sans-serif; }
                .ticket { max-width: 800px; margin: 0 auto; padding: 20px; border: 2px solid #333; }
                .header { display: flex; justify-content: space-between; border-bottom: 1px solid #eee; padding-bottom: 10px; }
                .qr-code { text-align: center; margin: 20px 0; }
                .details { margin-top: 20px; }
                .row { display: flex; margin-bottom: 10px; }
                .label { font-weight: bold; width: 120px; }
                .value { flex: 1; }
                @media print {
                  body { margin: 0; padding: 0; }
                  .ticket { border: none; }
                }
              </style>
            </head>
            <body>
              <div class="ticket">
                <div class="header">
                  <h1>${ticket.evento}</h1>
                  <div>
                    <p>Precio: $${ticket.precio}</p>
                  </div>
                </div>
                <div class="qr-code">
                  <img src="${qrCodeUrl}" width="200" height="200" alt="QR Code">
                </div>
                <div class="details">
                  <div class="row">
                    <div class="label">Nombre:</div>
                    <div class="value">${ticket.nombre}</div>
                  </div>
                  <div class="row">
                    <div class="label">Evento:</div>
                    <div class="value">${ticket.evento}</div>
                  </div>
                  <div class="row">
                    <div class="label">Fecha:</div>
                    <div class="value">${ticket.fecha}</div>
                  </div>
                  <div class="row">
                    <div class="label">Hora:</div>
                    <div class="value">${ticket.hora}</div>
                  </div>
                  <div class="row">
                    <div class="label">Lugar:</div>
                    <div class="value">${ticket.lugar}</div>
                  </div>
                  <div class="row">
                    <div class="label">Sección:</div>
                    <div class="value">${ticket.seccion}</div>
                  </div>
                  <div class="row">
                    <div class="label">Asiento:</div>
                    <div class="value">${ticket.asiento}</div>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `)
        printWindow.document.close()
        printWindow.focus()
        printWindow.print()
      }
    }
  }

  const handleDownload = () => {
    // Crear un enlace para descargar el QR
    const link = document.createElement("a")
    link.href = qrCodeUrl
    link.download = `boleto-${ticket.id}-${ticket.evento.replace(/\s+/g, "-").toLowerCase()}.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div ref={ticketRef} className="p-6 border-b">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold">{ticket.evento}</h3>
              <p className="text-sm text-gray-600">{ticket.lugar}</p>
            </div>
            <div className="text-right">
              <p className="font-bold">${ticket.precio}</p>
            </div>
          </div>

          <div className="flex justify-center my-4">
            <div className="bg-white p-2 border">
              {qrCodeUrl ? (
                <Image
                  src={qrCodeUrl || "/placeholder.svg"}
                  alt="QR Code"
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
              ) : (
                <div className="w-[200px] h-[200px] bg-gray-200 animate-pulse flex items-center justify-center">
                  <p className="text-gray-500 text-sm">Generando QR...</p>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold">Nombre:</p>
              <p>{ticket.nombre}</p>
            </div>
            <div>
              <p className="font-semibold">Fecha:</p>
              <p>{ticket.fecha}</p>
            </div>
            <div>
              <p className="font-semibold">Hora:</p>
              <p>{ticket.hora}</p>
            </div>
            <div>
              <p className="font-semibold">Sección:</p>
              <p>{ticket.seccion}</p>
            </div>
            <div>
              <p className="font-semibold">Asiento:</p>
              <p>{ticket.asiento}</p>
            </div>
          </div>
        </div>

        <div className="flex p-4 bg-gray-50">
          <Button variant="outline" className="flex items-center mr-2" onClick={handlePrint}>
            <Printer className="h-4 w-4 mr-2" />
            Imprimir
          </Button>
          <Button variant="outline" className="flex items-center" onClick={handleDownload}>
            <Download className="h-4 w-4 mr-2" />
            Descargar QR
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
