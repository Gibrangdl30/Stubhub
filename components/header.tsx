"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { User, LogOut } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { NotificationSystem } from "@/components/notification-system"

export function Header() {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  const [unreadCount, setUnreadCount] = useState(3)

  useEffect(() => {
    // Verificar si hay un usuario en localStorage
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (e) {
        console.error("Error parsing user from localStorage", e)
      }
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("user")
    setUser(null)
    window.location.href = "/"
  }

  return (
    <header className="w-full">
      <div className="bg-purple-900 text-white text-center text-sm py-2">
        El mejor portal de compra y venta de boletos para eventos en vivo.{" "}
        <strong>Cada pedido está 100 % garantizado.</strong> Los precios pueden variar de su valor original.
      </div>

      <div className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="mr-4">
              <Image
                src="https://media.stubcloudstatic.com/stubhub-ithaca-product/image/upload/unifiedLogo/logo_og_image.png"
                alt="StubHub"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline" className="hidden md:inline-flex">
              Asistencia
            </Button>

            <div className="relative">
              <NotificationSystem />
            </div>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {user.name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Perfil</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/tickets">Mis boletos</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-500">
                    <LogOut className="h-4 w-4 mr-2" />
                    Cerrar sesión
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="outline" className="hidden md:inline-flex" asChild>
                <Link href="/auth">Iniciar sesión</Link>
              </Button>
            )}

            <Button className="bg-purple-900 hover:bg-purple-800">Vender entradas</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
