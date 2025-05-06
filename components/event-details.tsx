import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface EventDetailsProps {
  eventData: {
    id: string
    title: string
    location: string
    venue: string
    date: string
    time: string
    price: number
    currency: string
    image: string
  }
}

export function EventDetails({ eventData }: EventDetailsProps) {
  return (
    <div className="bg-white rounded-lg border p-4">
      <Tabs defaultValue="map">
        <TabsList className="mb-4">
          <TabsTrigger value="map">Mapa de asientos</TabsTrigger>
          <TabsTrigger value="list">Lista de boletos</TabsTrigger>
        </TabsList>

        <TabsContent value="map" className="mt-0">
          <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-[400px]">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Mapa de asientos"
              width={300}
              height={300}
              className="max-w-full h-auto"
            />
          </div>

          <div className="mt-4">
            <h3 className="font-bold text-lg">Pista</h3>
            <div className="flex justify-between items-center mt-2 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
              <div>
                <p className="font-medium">2 boletos</p>
                <p className="text-sm text-gray-500">Transferencia electrónica</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">USD 345</p>
                <p className="text-sm text-gray-500">cada uno</p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="list" className="mt-0">
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
              <div>
                <p className="font-medium">Pista</p>
                <p className="text-sm text-gray-500">2 boletos • Transferencia electrónica</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">USD 345</p>
                <p className="text-sm text-gray-500">cada uno</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
