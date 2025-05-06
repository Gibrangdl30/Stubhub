"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="flex items-center border rounded-full overflow-hidden px-4 py-2 bg-gray-50 shadow-sm">
        <Search className="h-4 w-4 text-gray-400 mr-2" />
        <Input
          type="text"
          placeholder="Buscar evento, artista o equipo"
          className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 flex-grow"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button type="submit" variant="ghost" size="sm" className="text-purple-900 hover:text-purple-700">
          Buscar
        </Button>
      </div>
    </form>
  )
}
