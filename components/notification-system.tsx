"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Bell, Calendar, Clock, Info, Ticket, X } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

interface Notification {
  id: string
  type: "event" | "price" | "reminder" | "system"
  title: string
  message: string
  date: string
  read: boolean
  action?: {
    text: string
    url: string
  }
}

interface NotificationSystemProps {
  eventId?: string
  eventName?: string
}

export function NotificationSystem({ eventId, eventName }: NotificationSystemProps) {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [showNotifications, setShowNotifications] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)
  const [emailNotifications, setEmailNotifications] = useState(false)
  const [priceAlerts, setPriceAlerts] = useState(false)
  const [reminderSet, setReminderSet] = useState(false)
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [dialogOpen, setDialogOpen] = useState(false)

  // Simular carga de notificaciones
  useEffect(() => {
    // En un caso real, estos datos vendrían de una API
    const mockNotifications: Notification[] = [
      {
        id: "1",
        type: "event",
        title: "¡Nuevos boletos disponibles!",
        message: "Se han liberado nuevos boletos para el evento que estás siguiendo.",
        date: "2023-12-20T14:30:00",
        read: false,
        action: {
          text: "Ver boletos",
          url: "/event/zoe",
        },
      },
      {
        id: "2",
        type: "price",
        title: "Alerta de precio",
        message: "Los precios para el evento que sigues han bajado un 15%.",
        date: "2023-12-18T10:15:00",
        read: false,
        action: {
          text: "Ver oferta",
          url: "/event/rauw-alejandro",
        },
      },
      {
        id: "3",
        type: "reminder",
        title: "Recordatorio de evento",
        message: "El evento 'Zoé en Estadio GNP' comienza en 7 días.",
        date: "2023-12-15T09:00:00",
        read: true,
      },
      {
        id: "4",
        type: "system",
        title: "Confirmación de compra",
        message: "Tu compra de boletos ha sido confirmada. Revisa tu correo electrónico para más detalles.",
        date: "2023-12-10T16:45:00",
        read: true,
      },
      {
        id: "5",
        type: "event",
        title: "Cambio de horario",
        message: "El horario del evento 'Rels B' ha sido modificado. Ahora comienza a las 21:00.",
        date: "2023-12-05T11:20:00",
        read: true,
      },
    ]

    setNotifications(mockNotifications)
    setUnreadCount(mockNotifications.filter((n) => !n.read).length)
  }, [])

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((notification) => {
        if (notification.id === id && !notification.read) {
          setUnreadCount((prev) => prev - 1)
          return { ...notification, read: true }
        }
        return notification
      }),
    )
  }

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        read: true,
      })),
    )
    setUnreadCount(0)
  }

  const deleteNotification = (id: string) => {
    const notification = notifications.find((n) => n.id === id)
    if (notification && !notification.read) {
      setUnreadCount((prev) => prev - 1)
    }
    setNotifications(notifications.filter((notification) => notification.id !== id))
  }

  const handleSetReminder = () => {
    if (!eventId || !eventName) return

    const newNotification: Notification = {
      id: `new-${Date.now()}`,
      type: "reminder",
      title: "Recordatorio configurado",
      message: `Has configurado un recordatorio para el evento "${eventName}".`,
      date: new Date().toISOString(),
      read: false,
    }

    setNotifications([newNotification, ...notifications])
    setUnreadCount((prev) => prev + 1)
    setReminderSet(true)
    setDialogOpen(false)
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "event":
        return <Calendar className="h-5 w-5 text-blue-500" />
      case "price":
        return <Ticket className="h-5 w-5 text-green-500" />
      case "reminder":
        return <Clock className="h-5 w-5 text-purple-500" />
      case "system":
        return <Info className="h-5 w-5 text-gray-500" />
      default:
        return <Bell className="h-5 w-5 text-gray-500" />
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMins / 60)
    const diffDays = Math.floor(diffHours / 24)

    if (diffMins < 60) {
      return `Hace ${diffMins} minutos`
    } else if (diffHours < 24) {
      return `Hace ${diffHours} horas`
    } else if (diffDays < 7) {
      return `Hace ${diffDays} días`
    } else {
      return date.toLocaleDateString()
    }
  }

  return (
    <div>
      <div className="relative">
        <Button
          variant="outline"
          size="icon"
          className="relative"
          onClick={() => setShowNotifications(!showNotifications)}
        >
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </Button>

        <AnimatePresence>
          {showNotifications && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-lg shadow-lg z-50 border"
            >
              <div className="p-3 border-b flex justify-between items-center">
                <h3 className="font-bold">Notificaciones</h3>
                <div className="flex space-x-2">
                  {unreadCount > 0 && (
                    <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                      Marcar todo como leído
                    </Button>
                  )}
                  <Button variant="ghost" size="sm" onClick={() => setShowNotifications(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="max-h-96 overflow-y-auto">
                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-3 border-b hover:bg-gray-50 ${notification.read ? "" : "bg-blue-50"}`}
                      onClick={() => markAsRead(notification.id)}
                    >
                      <div className="flex">
                        <div className="mr-3">{getNotificationIcon(notification.type)}</div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h4 className={`font-medium ${notification.read ? "" : "font-bold"}`}>
                              {notification.title}
                            </h4>
                            <button
                              className="text-gray-400 hover:text-gray-600"
                              onClick={(e) => {
                                e.stopPropagation()
                                deleteNotification(notification.id)
                              }}
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-xs text-gray-500">{formatDate(notification.date)}</span>
                            {notification.action && (
                              <a
                                href={notification.action.url}
                                className="text-xs text-purple-600 hover:text-purple-800"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {notification.action.text}
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-6 text-center text-gray-500">No tienes notificaciones</div>
                )}
              </div>

              <div className="p-3 border-t">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-purple-600 hover:text-purple-800 hover:bg-purple-50"
                  onClick={() => setDialogOpen(true)}
                >
                  Configurar notificaciones
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Configurar notificaciones</DialogTitle>
            <DialogDescription>
              Personaliza cómo y cuándo quieres recibir notificaciones sobre eventos y ofertas.
            </DialogDescription>
          </DialogHeader>

          <div className="py-4 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Notificaciones por correo electrónico</h4>
                  <p className="text-sm text-gray-500">Recibe actualizaciones en tu bandeja de entrada</p>
                </div>
                <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
              </div>

              {emailNotifications && (
                <div className="pl-6 border-l-2 border-gray-200">
                  <Label htmlFor="email" className="block mb-2">
                    Correo electrónico
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Alertas de precio</h4>
                  <p className="text-sm text-gray-500">Recibe notificaciones cuando los precios cambien</p>
                </div>
                <Switch checked={priceAlerts} onCheckedChange={setPriceAlerts} />
              </div>

              {priceAlerts && (
                <div className="pl-6 border-l-2 border-gray-200">
                  <div className="flex space-x-2">
                    <Badge variant="outline" className="bg-green-50">
                      Cuando bajen los precios
                    </Badge>
                    <Badge variant="outline" className="bg-red-50">
                      Cuando suban los precios
                    </Badge>
                  </div>
                </div>
              )}
            </div>

            {eventId && eventName && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Recordatorio de evento</h4>
                    <p className="text-sm text-gray-500">Recibe un recordatorio antes de {eventName}</p>
                  </div>
                  <Switch checked={reminderSet} onCheckedChange={setReminderSet} />
                </div>

                {reminderSet && (
                  <div className="pl-6 border-l-2 border-gray-200">
                    <div className="flex space-x-2">
                      <Badge variant="outline" className="bg-purple-50">
                        1 día antes
                      </Badge>
                      <Badge variant="outline" className="bg-purple-50">
                        1 semana antes
                      </Badge>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Notificaciones SMS</h4>
                  <p className="text-sm text-gray-500">Recibe alertas por mensaje de texto</p>
                </div>
                <Switch />
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancelar
            </Button>
            <Button className="bg-purple-900 hover:bg-purple-800" onClick={handleSetReminder}>
              Guardar preferencias
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
