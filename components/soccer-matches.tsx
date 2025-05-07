"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export function SoccerMatches() {
  const matches = [
    {
      id: "monterrey-toluca",
      homeTeam: "Rayados",
      awayTeam: "Toluca",
      homeTeamLogo: "/images/monterrey-logo.png",
      awayTeamLogo: "/https://www.google.com/imgres?q=toluca&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa4%2FClub_Toluca_Logo.svg%2F160px-Club_Toluca_Logo.svg.png&imgrefurl=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FDeportivo_Toluca_F%25C3%25BAtbol_Club&docid=SMuD1PCfYe9bbM&tbnid=ODCZOjfyDDWbzM&vet=12ahUKEwjCxcfxoZKNAxUqKEQIHZvVGlAQM3oECHEQAA..i&w=160&h=160&hcb=2&ved=2ahUKEwjCxcfxoZKNAxUqKEQIHZvVGlAQM3oECHEQAA",
      stadium: "Estadio BBVA",
      date: "Miércoles 7 de mayo",
      time: "19:00 hrs México",
      timeET: "21:00 hrs ET",
      timePT: "18:00 hrs Pacífico",
      prices: [
        { zone: "PTE 101-102, 137-138", price: "$900", normalPrice: "$6,300" },
        { zone: "PONIENTE 103, 136", price: "$900", normalPrice: "$6,300" },
        { zone: "PTE 104-106, 133-135", price: "$1,000", normalPrice: "$1,450" },
        { zone: "OTE 118-121", price: "$1,000", normalPrice: "$1,450" },
      ],
      discount: "30%",
    },
    {
      id: "pachuca-america",
      homeTeam: "Pachuca",
      awayTeam: "América",
      homeTeamLogo: "/images/pachuca-logo.jpeg",
      awayTeamLogo: "/https://www.google.com/imgres?q=america%20fc&imgurl=https%3A%2F%2Fi.pinimg.com%2F474x%2Ffc%2Fac%2F5e%2Ffcac5ebf295f2e00258b4d12a0b64bcd.jpg&imgrefurl=https%3A%2F%2Fmx.pinterest.com%2Fjjms007%2Fam%25C3%25A9rica%2F&docid=ewquzsXl41bydM&tbnid=UXOX6XvZxTt5eM&vet=12ahUKEwj8-MClopKNAxUqHEQIHZbKMtAQM3oECBwQAA..i&w=320&h=480&hcb=2&ved=2ahUKEwj8-MClopKNAxUqHEQIHZbKMtAQM3oECBwQAA",
      stadium: "Estadio Hidalgo",
      date: "Miércoles 7 de mayo",
      time: "21:10 hrs México",
      timeET: "23:10 hrs ET",
      timePT: "20:10 hrs Pacífico",
      prices: [
        { zone: "NORTE", price: "$1,200.00", normalPrice: "$1,700.00" },
        { zone: "ORIENTE", price: "$800.00", normalPrice: "$1,000.00" },
        { zone: "PONIENTE", price: "$900.00", normalPrice: "$1,000.00" },
        { zone: "SUR", price: "$1,200.00", normalPrice: "$1,700.00" },
      ],
      discount: "30%",
    },
    {
      id: "leon-cruz-azul",
      homeTeam: "León",
      awayTeam: "Cruz Azul",
      homeTeamLogo: "/images/leon-logo.jpeg",
      awayTeamLogo: "/images/cruz-azul-logo.png",
      stadium: "Estadio Nou Camp",
      date: "Jueves 8 de mayo",
      time: "21:10 hrs México",
      timeET: "23:10 hrs ET",
      timePT: "20:10 hrs Pacífico",
      prices: [
        { zone: "SOL", price: "$1,000", normalPrice: "$1,300" },
        { zone: "PREF", price: "$1,500", normalPrice: "$1,700" },
        { zone: "ZONA A", price: "$1,700", normalPrice: "$2,000" },
      ],
      discount: "30%",
    },
  ]

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Partidos de Fútbol Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.map((match) => (
          <Link href={`/event/${match.id}`} key={match.id} className="block">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 relative bg-white rounded-full p-1">
                      <Image
                        src={match.homeTeamLogo || "/placeholder.svg"}
                        alt={match.homeTeam}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="font-bold">{match.homeTeam}</span>
                  </div>
                  <span className="text-xl font-bold">VS</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold">{match.awayTeam}</span>
                    <div className="w-10 h-10 relative bg-white rounded-full p-1">
                      <Image
                        src={match.awayTeamLogo || "/placeholder.svg"}
                        alt={match.awayTeam}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <p className="text-gray-600">{match.stadium}</p>
                    <p className="font-semibold">{match.date}</p>
                    <p className="text-sm text-gray-500">{match.time}</p>
                    <p className="text-xs text-gray-400">
                      {match.timeET} / {match.timePT}
                    </p>
                  </div>
                  <Badge className="bg-red-600 hover:bg-red-700">-{match.discount}</Badge>
                </div>

                <div className="mt-3 border-t pt-3">
                  <p className="font-semibold text-sm mb-1">Precios:</p>
                  <ul className="text-sm text-gray-600">
                    {match.prices.map((price, index) => (
                      <li key={index} className="flex justify-between mb-1">
                        <span>{price.zone}</span>
                        <div className="text-right">
                          <span className="font-medium">{price.price}</span>
                          {price.normalPrice && (
                            <span className="text-xs text-gray-500 line-through ml-1">{price.normalPrice}</span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium transition-colors duration-300">
                  Ver Boletos
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
