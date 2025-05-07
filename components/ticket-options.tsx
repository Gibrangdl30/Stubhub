"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Info, CreditCard, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface TicketOption {
  id: string
  zone: string
  price: number
  normalPrice: number
  discount?: number
  availability: string
  description?: string
}

interface TicketOptionsProps {
  options: TicketOption[]
  eventId: string
}

export function TicketOptions({ options, eventId }: TicketOptionsProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)

  const handleSelectOption = (optionId: string) => {
    setSelectedOption(optionId)
  }

  // Asegurarse de que options es un array y no es undefined
  const safeOptions = Array.isArray(options) ? options : []

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Opciones de Boletos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {safeOptions.map((option) => {
          // Asegurarse de que todas las propiedades necesarias existen
          const id = option?.id || `option-${Math.random()}`
          const zone = option?.zone || "Zona no especificada"
          const price = option?.price || 0
          const normalPrice = option?.normalPrice || 0
          const discount = option?.discount || 30
          const availability = option?.availability || "No especificada"
          const description = option?.description || ""

          const isSelected = selectedOption === id

          return (
            <motion.div
              key={id}
              whileHover={{ y: -5 }}
              className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                isSelected ? "border-purple-500 bg-purple-50" : "border-gray-200"
              }`}
              onClick={() => handleSelectOption(id)}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">{zone}</h3>
                {isSelected && <Check className="text-purple-500 h-5 w-5" />}
              </div>

              <div className="mb-3">
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">${price.toLocaleString()}</span>
                  {normalPrice > 0 && (
                    <span className="ml-2 text-sm line-through text-gray-500">${normalPrice.toLocaleString()}</span>
                  )}
                </div>

                {discount > 0 && (
                  <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded mt-1">
                    {discount}% DESCUENTO
                  </span>
                )}
              </div>

              <div className="flex items-center text-sm text-gray-600 mb-3">
                <Info className="h-4 w-4 mr-1" />
                <span>Disponibilidad: {availability}</span>
              </div>

              {description && <p className="text-sm text-gray-600 mb-3">{description}</p>}

              {isSelected && (
                <div className="mt-4 space-y-4">
                  <div>
                    <label htmlFor={`quantity-${id}`} className="block text-sm font-medium text-gray-700 mb-1">
                      Cantidad de boletos
                    </label>
                    <Input
                      type="number"
                      id={`quantity-${id}`}
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
                      className="w-full"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Favor de agregar la cantidad exacta acorde a los boletos que va a comprar
                    </p>
                  </div>

                  <Button className="w-full bg-purple-900 hover:bg-purple-800">Realizar Pago</Button>

                  <div className="text-xs text-gray-600 space-y-2">
                    <div className="flex items-start">
                      <Clock className="h-3 w-3 mr-1 mt-0.5 text-gray-500" />
                      <p>El envío de los boletos es inmediato, de 5 a 10 minutos después del pago.</p>
                    </div>
                    <div className="flex items-start">
                      <CreditCard className="h-3 w-3 mr-1 mt-0.5 text-gray-500" />
                      <p>Aceptamos todas las tarjetas de crédito y débito.</p>
                    </div>
                    <div className="flex items-start">
                      <Send className="h-3 w-3 mr-1 mt-0.5 text-gray-500" />
                      <p>Reporte su pago a los números de teléfono o correo electrónico proporcionados.</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
