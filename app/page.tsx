import { Header } from "@/components/header"
import { TrendingPills } from "@/components/trending-pills"
import { Footer } from "@/components/footer"
import { FeaturedCarousel } from "@/components/featured-carousel"
import { FeaturedEvents } from "@/components/featured-events"
import { SoccerMatches } from "@/components/soccer-matches"
import { PaymentInfo } from "@/components/payment-info"
import Image from "next/image"
import Link from "next/link"

// Importar el componente Fireworks
import { Fireworks } from "@/components/fireworks"

// Agregar el componente Fireworks al inicio del componente principal
export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Fireworks />
      <Header />

      {/* Banner principal */}
      <div className="relative w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sh_clf25_414x90_x2_MX-WN9XheEhc9PZQ6r9b81tOYpG99dw7a.jpeg"
          alt="Liga de Campeones Final"
          width={1200}
          height={180}
          className="w-full h-auto"
        />
        <div className="absolute top-0 right-0 p-4">
          <Link
            href="/event/champions-league-final"
            className="bg-white text-purple-900 font-bold py-3 px-8 rounded-md hover:bg-purple-100 transition-colors text-lg"
          >
            Boletos
          </Link>
        </div>
      </div>

      {/* Carrusel principal */}
      <FeaturedCarousel />

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
