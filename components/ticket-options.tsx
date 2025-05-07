"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface TicketOption {
  id: string
  zone: string
  price: number
  maxPrice?: number
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
          const maxPrice = option?.maxPrice
          const discount = option?.discount || 0
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
                  <span className="text-2xl font-bold">${(price * (1 - discount / 100)).toFixed(2)}</span>
                  {discount > 0 && <span className="ml-2 text-sm line-through text-gray-500">${price.toFixed(2)}</span>}
                </div>

                {maxPrice && maxPrice > price && <p className="text-sm text-gray-600">Hasta ${maxPrice.toFixed(2)}</p>}

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
                <Link
                  href={`/comprar?event=${eventId}&zone=${encodeURIComponent(zone)}&price=${price * (1 - discount / 100)}`}
                >
                  <Button className="w-full bg-purple-900 hover:bg-purple-800">Seleccionar Boletos</Button>
                </Link>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
