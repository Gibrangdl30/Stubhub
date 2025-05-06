"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Ticket } from "@/components/ticket"

export function TicketGenerator() {
  const [tickets, setTickets] = useState<any[]>([])
  const [formData, setFormData] = useState({
    nombre: "",
    asiento: "",
    seccion: "Pista",
    precio: "7,029.00",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const generateTicket = () => {
    const newTicket = {
      id: Date.now(),
      nombre: formData.nombre || "Invitado",
      asiento: formData.asiento || "General",
      seccion: formData.seccion,
      precio: formData.precio,
      fecha: "08 de noviembre de 2025",
      hora: "8:00 PM",
      evento: "Rauw Alejandro",
      lugar: "Palacio de los Deportes, Ciudad de México",
    }

    setTickets((prev) => [...prev, newTicket])
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Información del Boleto</h2>

            <div className="space-y-4">
              <div>
                <Label htmlFor="nombre">Nombre del Asistente</Label>
                <Input
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Nombre completo"
                />
              </div>

              <div>
                <Label htmlFor="asiento">Número de Asiento</Label>
                <Input
                  id="asiento"
                  name="asiento"
                  value={formData.asiento}
                  onChange={handleChange}
                  placeholder="Ej: A12 o General"
                />
              </div>

              <div>
                <Label htmlFor="seccion">Sección</Label>
                <Input
                  id="seccion"
                  name="seccion"
                  value={formData.seccion}
                  onChange={handleChange}
                  placeholder="Ej: Pista, VIP, etc."
                />
              </div>

              <div>
                <Label htmlFor="precio">Precio</Label>
                <Input
                  id="precio"
                  name="precio"
                  value={formData.precio}
                  onChange={handleChange}
                  placeholder="Precio en MXN"
                />
              </div>

              <Button onClick={generateTicket} className="w-full bg-purple-900 hover:bg-purple-800">
                Generar Boleto
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Boletos Generados</h2>

        {tickets.length === 0 ? (
          <div className="text-center p-8 border rounded-lg bg-gray-50">
            <p className="text-gray-500">No hay boletos generados. Completa el formulario para crear boletos.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {tickets.map((ticket) => (
              <Ticket key={ticket.id} ticket={ticket} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
