"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface Seat {
  id: string
  row: string
  number: number
  price: number
  status: "available" | "reserved" | "sold" | "selected"
  type: "standard" | "vip" | "premium"
}

interface Section {
  id: string
  name: string
  rows: number
  seatsPerRow: number
  price: number
  type: "standard" | "vip" | "premium"
  color: string
}

interface InteractiveSeatMapProps {
  eventId: string
  onSeatSelect?: (selectedSeats: Seat[]) => void
}

export function InteractiveSeatMap({ eventId, onSeatSelect }: InteractiveSeatMapProps) {
  const [sections, setSections] = useState<Section[]>([])
  const [seats, setSeats] = useState<Seat[]>([])
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([])
  const [loading, setLoading] = useState(true)
  const [zoom, setZoom] = useState(1)
  const [viewMode, setViewMode] = useState<"all" | "section">("all")
  const [activeSection, setActiveSection] = useState<string | null>(null)

  // Simular carga de datos
  useEffect(() => {
    // En un caso real, estos datos vendrían de una API
    const mockSections: Section[] = [
      {
        id: "A",
        name: "Sección A - VIP",
        rows: 5,
        seatsPerRow: 10,
        price: 2500,
        type: "vip",
        color: "bg-purple-500",
      },
      {
        id: "B",
        name: "Sección B - Premium",
        rows: 8,
        seatsPerRow: 12,
        price: 1800,
        type: "premium",
        color: "bg-blue-500",
      },
      {
        id: "C",
        name: "Sección C - Estándar",
        rows: 10,
        seatsPerRow: 15,
        price: 1200,
        type: "standard",
        color: "bg-green-500",
      },
    ]

    setSections(mockSections)

    // Generar asientos para cada sección
    const allSeats: Seat[] = []
    mockSections.forEach((section) => {
      for (let row = 1; row <= section.rows; row++) {
        for (let seatNum = 1; seatNum <= section.seatsPerRow; seatNum++) {
          // Simular algunos asientos como vendidos o reservados
          let status: "available" | "reserved" | "sold" = "available"
          if (Math.random() < 0.2) {
            status = "sold"
          } else if (Math.random() < 0.1) {
            status = "reserved"
          }

          allSeats.push({
            id: `${section.id}-${row}-${seatNum}`,
            row: `${row}`,
            number: seatNum,
            price: section.price,
            status,
            type: section.type,
          })
        }
      }
    })

    setSeats(allSeats)
    setLoading(false)
  }, [eventId])

  const handleSeatClick = (seat: Seat) => {
    if (seat.status !== "available") return

    const isSelected = selectedSeats.some((s) => s.id === seat.id)
    let newSelectedSeats: Seat[]

    if (isSelected) {
      newSelectedSeats = selectedSeats.filter((s) => s.id !== seat.id)
    } else {
      // Limitar a máximo 8 asientos
      if (selectedSeats.length >= 8) return
      newSelectedSeats = [...selectedSeats, { ...seat, status: "selected" }]
    }

    setSelectedSeats(newSelectedSeats)
    if (onSeatSelect) {
      onSeatSelect(newSelectedSeats)
    }
  }

  const getSeatColor = (seat: Seat) => {
    if (seat.status === "sold") return "bg-gray-400"
    if (seat.status === "reserved") return "bg-yellow-400"
    if (selectedSeats.some((s) => s.id === seat.id)) return "bg-purple-600"

    const section = sections.find((s) => seat.id.startsWith(s.id))
    return section?.color || "bg-blue-500"
  }

  const handleZoomIn = () => {
    if (zoom < 2) setZoom(zoom + 0.2)
  }

  const handleZoomOut = () => {
    if (zoom > 0.6) setZoom(zoom - 0.2)
  }

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId)
    setViewMode("section")
  }

  const handleBackToAll = () => {
    setViewMode("all")
    setActiveSection(null)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-900"></div>
      </div>
    )
  }

  const filteredSeats = viewMode === "all" ? seats : seats.filter((seat) => seat.id.startsWith(activeSection || ""))
  const activeSection_ = sections.find((s) => s.id === activeSection)

  return (
    <div className="relative">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold">Selección de asientos</h3>
          <p className="text-sm text-gray-600">Selecciona hasta 8 asientos</p>
        </div>
        <div className="flex space-x-2">
          <Button size="sm" variant="outline" onClick={handleZoomOut}>
            -
          </Button>
          <Button size="sm" variant="outline" onClick={handleZoomIn}>
            +
          </Button>
        </div>
      </div>

      {viewMode === "section" && activeSection && (
        <Button variant="outline" size="sm" className="mb-4" onClick={handleBackToAll}>
          ← Volver a todas las secciones
        </Button>
      )}

      {viewMode === "all" && (
        <div className="mb-4 grid grid-cols-3 gap-2">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant="outline"
              className={`text-xs ${section.color.replace("bg-", "text-")} border-2 ${section.color.replace(
                "bg-",
                "border-",
              )}`}
              onClick={() => handleSectionClick(section.id)}
            >
              {section.name}
            </Button>
          ))}
        </div>
      )}

      <div className="relative overflow-auto border rounded-lg p-4 bg-gray-50" style={{ height: "400px" }}>
        <div className="relative" style={{ transform: `scale(${zoom})`, transformOrigin: "top left" }}>
          {viewMode === "all" ? (
            <div className="flex flex-col items-center mb-8">
              <div className="w-64 h-12 bg-gray-300 rounded-t-full mb-4 flex items-center justify-center">
                <span className="text-sm font-bold">ESCENARIO</span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {sections.map((section) => (
                  <motion.div
                    key={section.id}
                    className={`${section.color} p-4 rounded-lg cursor-pointer text-white text-center`}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleSectionClick(section.id)}
                  >
                    <h4 className="font-bold">{section.name}</h4>
                    <p className="text-sm">${section.price} por asiento</p>
                    <p className="text-xs mt-1">
                      {seats.filter((s) => s.id.startsWith(section.id) && s.status === "available").length} asientos
                      disponibles
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="w-64 h-12 bg-gray-300 rounded-t-full mb-8 flex items-center justify-center">
                <span className="text-sm font-bold">ESCENARIO</span>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-bold text-center">{activeSection_?.name}</h3>
                <p className="text-sm text-center text-gray-600">${activeSection_?.price} por asiento</p>
              </div>

              <div className="grid grid-cols-1 gap-y-2">
                {Array.from({ length: activeSection_?.rows || 0 }).map((_, rowIndex) => (
                  <div key={rowIndex} className="flex items-center">
                    <span className="text-xs font-bold mr-2 w-6 text-right">{String.fromCharCode(65 + rowIndex)}</span>
                    <div className="flex space-x-1">
                      {Array.from({ length: activeSection_?.seatsPerRow || 0 }).map((_, seatIndex) => {
                        const seat = filteredSeats.find(
                          (s) => s.row === String(rowIndex + 1) && s.number === seatIndex + 1,
                        )
                        if (!seat) return null

                        return (
                          <motion.div
                            key={`${rowIndex}-${seatIndex}`}
                            className={`w-6 h-6 rounded-t-lg ${getSeatColor(
                              seat,
                            )} flex items-center justify-center cursor-pointer text-white text-xs`}
                            whileHover={seat.status === "available" ? { y: -2 } : {}}
                            onClick={() => handleSeatClick(seat)}
                            title={`Fila ${seat.row}, Asiento ${seat.number} - $${seat.price}`}
                          >
                            {seat.number}
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between mb-2">
          <h3 className="font-bold">Asientos seleccionados: {selectedSeats.length}</h3>
          <p className="font-bold">
            Total: ${selectedSeats.reduce((sum, seat) => sum + seat.price, 0).toLocaleString()}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {selectedSeats.map((seat) => {
            const section = sections.find((s) => seat.id.startsWith(s.id))
            return (
              <Badge
                key={seat.id}
                variant="outline"
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => handleSeatClick(seat)}
              >
                {section?.id}-{seat.row}-{seat.number}
                <span className="ml-1">×</span>
              </Badge>
            )
          })}
        </div>

        <div className="flex space-x-2">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-400 rounded-sm mr-1"></div>
            <span className="text-xs">Vendido</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-yellow-400 rounded-sm mr-1"></div>
            <span className="text-xs">Reservado</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-purple-600 rounded-sm mr-1"></div>
            <span className="text-xs">Seleccionado</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-500 rounded-sm mr-1"></div>
            <span className="text-xs">Disponible</span>
          </div>
        </div>
      </div>
    </div>
  )
}
