"use client"

import { useState, useEffect } from "react"
import { Bell, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { NotificationSystem } from "@/components/notification-system"

export function NotificationBar() {
  const [showBar, setShowBar] = useState(false)
  const [notification, setNotification] = useState<{
    id: string
    message: string
    type: "info" | "success" | "warning" | "error"
  } | null>(null)

  useEffect(() => {
    // Mostrar la barra después de un tiempo
    const timer = setTimeout(() => {
      setShowBar(true)
      setNotification({
        id: "promo",
        message: "¡Oferta especial! 20% de descuento en boletos seleccionados. ¡Solo por hoy!",
        type: "success",
      })
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const closeBar = () => {
    setShowBar(false)
  }

  const getBarColor = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-600"
      case "warning":
        return "bg-yellow-500"
      case "error":
        return "bg-red-600"
      default:
        return "bg-blue-600"
    }
  }

  return (
    <>
      <AnimatePresence>
        {showBar && notification && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed top-0 left-0 right-0 z-50 ${getBarColor(notification.type)} text-white py-3 px-4`}
          >
            <div className="container mx-auto flex justify-between items-center">
              <div className="flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                <p>{notification.message}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-white border-white hover:bg-white/20 hover:text-white"
                >
                  Ver oferta
                </Button>
                <button onClick={closeBar} className="text-white hover:text-gray-200">
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-4 right-4 z-50">
        <NotificationSystem />
      </div>
    </>
  )
}
