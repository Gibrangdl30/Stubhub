"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Stage3DViewProps {
  seatSection?: string
  seatRow?: string
  seatNumber?: number
}

export function Stage3DView({ seatSection = "B", seatRow = "5", seatNumber = 10 }: Stage3DViewProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState<"stage" | "seat">("stage")

  useEffect(() => {
    if (!containerRef.current) return

    // Configuración básica
    const width = containerRef.current.clientWidth
    const height = 400
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xf5f5f5)

    // Cámara
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 15
    camera.position.y = 5

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(width, height)
    containerRef.current.innerHTML = ""
    containerRef.current.appendChild(renderer.domElement)

    // Controles
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.maxPolarAngle = Math.PI / 2
    controls.minDistance = 5
    controls.maxDistance = 50

    // Luces
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(0, 10, 10)
    scene.add(directionalLight)

    // Escenario
    const stageGeometry = new THREE.BoxGeometry(20, 1, 10)
    const stageMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 })
    const stage = new THREE.Mesh(stageGeometry, stageMaterial)
    stage.position.y = -0.5
    scene.add(stage)

    // Pantalla de fondo
    const screenGeometry = new THREE.BoxGeometry(18, 8, 0.5)
    const screenMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 })
    const screen = new THREE.Mesh(screenGeometry, screenMaterial)
    screen.position.set(0, 4, -4.5)
    scene.add(screen)

    // Texto "ESCENARIO"
    const textGeometry = new THREE.BoxGeometry(10, 1, 0.5)
    const textMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff })
    const text = new THREE.Mesh(textGeometry, textMaterial)
    text.position.set(0, 0, 5.1)
    scene.add(text)

    // Asientos (representación simplificada)
    const seatRowCount = 10
    const seatPerRow = 20
    const seatSize = 0.8
    const seatGap = 0.2

    const seatGeometry = new THREE.BoxGeometry(seatSize, seatSize, seatSize)
    const seatMaterial = new THREE.MeshPhongMaterial({ color: 0x4a5568 })
    const selectedSeatMaterial = new THREE.MeshPhongMaterial({ color: 0x9f7aea })

    const seats: THREE.Mesh[] = []
    const totalWidth = seatPerRow * (seatSize + seatGap)
    const startX = -totalWidth / 2 + seatSize / 2

    for (let row = 0; row < seatRowCount; row++) {
      for (let col = 0; col < seatPerRow; col++) {
        const seat = new THREE.Mesh(seatGeometry, seatMaterial)
        const x = startX + col * (seatSize + seatGap)
        const z = 8 + row * (seatSize + seatGap)
        seat.position.set(x, 0, z)

        // Marcar el asiento seleccionado
        const isSelected = seatSection === "B" && seatRow === String(row + 1) && seatNumber === col + 1
        if (isSelected) {
          seat.material = selectedSeatMaterial
        }

        scene.add(seat)
        seats.push(seat)
      }
    }

    // Posicionar la cámara según el modo de vista
    if (viewMode === "seat") {
      // Encontrar el asiento seleccionado
      const rowIndex = Number.parseInt(seatRow) - 1
      const colIndex = seatNumber - 1
      if (rowIndex >= 0 && rowIndex < seatRowCount && colIndex >= 0 && colIndex < seatPerRow) {
        const x = startX + colIndex * (seatSize + seatGap)
        const z = 8 + rowIndex * (seatSize + seatGap)

        // Posicionar la cámara detrás y ligeramente por encima del asiento
        camera.position.set(x, 2, z + 2)
        camera.lookAt(0, 2, 0) // Mirar hacia el escenario
      }
    }

    // Animación
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    setLoading(false)

    // Limpieza
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ""
      }
      renderer.dispose()
    }
  }, [seatSection, seatRow, seatNumber, viewMode])

  const toggleViewMode = () => {
    setViewMode(viewMode === "stage" ? "seat" : "stage")
  }

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">Vista 3D del escenario</h3>
          <Button variant="outline" size="sm" onClick={toggleViewMode}>
            {viewMode === "stage" ? "Ver desde mi asiento" : "Vista general"}
          </Button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-900"></div>
          </div>
        ) : (
          <div>
            <div ref={containerRef} className="w-full h-[400px] rounded-md overflow-hidden"></div>
            <div className="mt-4 text-sm text-gray-600">
              <p>
                {viewMode === "stage"
                  ? "Arrastra para mover la vista. Usa la rueda del ratón para acercar o alejar."
                  : `Vista desde la Sección ${seatSection}, Fila ${seatRow}, Asiento ${seatNumber}`}
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
