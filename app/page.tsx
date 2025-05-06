import { Header } from "@/components/header"
import { TrendingPills } from "@/components/trending-pills"
import { Footer } from "@/components/footer"
import { FeaturedCarousel } from "@/components/featured-carousel"
import { FeaturedEvents } from "@/components/featured-events"
import { SoccerMatches } from "@/components/soccer-matches"
import { PaymentInfo } from "@/components/payment-info"

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />

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
