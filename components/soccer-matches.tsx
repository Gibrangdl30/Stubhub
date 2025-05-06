"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const soccerMatches = [
  {
    id: 1,
    title: "Pachuca vs. América",
    venue: "Estadio Hidalgo",
    date: "Miércoles 7 de mayo",
    time: "21:10 hrs",
    image: "/images/pachuca-america.png",
    url: "/event/pachuca-america",
    homeTeam: "Pachuca",
    awayTeam: "América",
    homeTeamLogo: "https://logodownload.org/wp-content/uploads/2019/09/pachuca-logo-0.png",
    awayTeamLogo: "https://logodownload.org/wp-content/uploads/2018/07/club-america-logo-escudo.png",
  },
  {
    id: 2,
    title: "León vs. Cruz Azul",
    venue: "Estadio Nou Camp",
    date: "Jueves 8 de mayo",
    time: "21:10 hrs",
    image: "/images/leon-cruz-azul.png",
    url: "/event/leon-cruz-azul",
    homeTeam: "León",
    awayTeam: "Cruz Azul",
    homeTeamLogo: "https://logodownload.org/wp-content/uploads/2019/09/club-leon-logo-0.png",
    awayTeamLogo: "https://logodownload.org/wp-content/uploads/2018/07/cruz-azul-logo-escudo.png",
  },
  {
    id: 3,
    title: "Rayados vs. Toluca",
    venue: "Estadio BBVA",
    date: "Miércoles 7 de mayo",
    time: "19:00 hrs",
    image: "/images/monterrey-toluca.png",
    url: "/event/rayados-toluca",
    homeTeam: "Monterrey",
    awayTeam: "Toluca",
    homeTeamLogo: "https://logodownload.org/wp-content/uploads/2019/09/monterrey-logo-0.png",
    awayTeamLogo: "https://logodownload.org/wp-content/uploads/2019/09/toluca-logo-0.png",
  },
]

export function SoccerMatches() {
  return (
    <section className="px-4 py-8 md:px-8">
      <h2 className="text-2xl font-bold mb-6">Partidos de fútbol</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {soccerMatches.map((match, index) => (
          <motion.div
            key={match.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
          >
            <Link href={match.url} className="block">
              <div className="relative h-40">
                <Image src={match.image || "/placeholder.svg"} alt={match.title} fill className="object-cover" />
              </div>

              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 relative">
                      <Image
                        src={match.homeTeamLogo || "/placeholder.svg"}
                        alt={match.homeTeam}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium mt-1">{match.homeTeam}</span>
                  </div>

                  <div className="text-center">
                    <span className="text-xl font-bold">VS</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 relative">
                      <Image
                        src={match.awayTeamLogo || "/placeholder.svg"}
                        alt={match.awayTeam}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium mt-1">{match.awayTeam}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{match.date}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{match.time}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{match.venue}</span>
                  </div>
                </div>

                <Button className="w-full bg-purple-900 hover:bg-purple-800">Ver boletos</Button>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
