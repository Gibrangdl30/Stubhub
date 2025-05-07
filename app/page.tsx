import { Header } from "@/components/header"
import { TrendingPills } from "@/components/trending-pills"
import { Footer } from "@/components/footer"
import { FeaturedEvents } from "@/components/featured-events"
import { SoccerMatches } from "@/components/soccer-matches"
import { PaymentInfo } from "@/components/payment-info"
import Image from "next/image"
import Link from "next/link"
import { Fireworks } from "@/components/fireworks"

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Fireworks />
      <Header />

      {/* Banner principal con botón más grande */}
      <div className="relative w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sh_clf25_414x90_x2_MX-WN9XheEhc9PZQ6r9b81tOYpG99dw7a.jpeg"
          alt="Liga de Campeones Final"
          width={1200}
          height={180}
          className="w-full h-auto"
        />
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
          <Link
            href="/event/champions-league-final"
            className="bg-white text-purple-900 font-bold py-4 px-10 rounded-md hover:bg-purple-100 transition-colors text-xl shadow-lg"
          >
            Boletos
          </Link>
        </div>
      </div>

      {/* Reemplazar el carrusel con la imagen estática del logo */}
      <div className="w-full bg-[#4169e1] py-8">
        <div className="container mx-auto px-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picsart_25-05-06_20-17-04-454-X5iXKDtSfDAe9g6XTqjoxcqgAafj6p.png"
            alt="StubHub Logo"
            width={1200}
            height={300}
            className="w-full max-w-4xl mx-auto h-auto"
          />
        </div>
      </div>

      {/* Trending Pills */}
      <TrendingPills />

      {/* Eventos destacados */}
      <FeaturedEvents />

      {/* Partidos de fútbol */}
      <SoccerMatches />

      {/* Payment Info */}
      <PaymentInfo />

      {/* Footer */}
      <Footer />
    </main>
  )
}
