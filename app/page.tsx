import { Header } from "@/components/header"
import { FeaturedEvents } from "@/components/featured-events"
import { SoccerMatches } from "@/components/soccer-matches"
import { RecentlyViewed } from "@/components/recently-viewed"
import { TrendingPills } from "@/components/trending-pills"
import { SearchBar } from "@/components/search-bar"
import { Fireworks } from "@/components/fireworks"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image src="/images/stubhub-banner.jpg" alt="StubHub Banner" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Encuentra tus boletos para los mejores eventos
          </h1>
          <div className="w-full max-w-2xl">
            <SearchBar />
          </div>
          <button className="mt-6 bg-purple-700 hover:bg-purple-800 text-white py-4 px-10 text-xl rounded-md shadow-lg transition-all">
            Comprar Boletos
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <TrendingPills />
        <FeaturedEvents />
        <SoccerMatches />
        <RecentlyViewed />
      </div>

      <Fireworks />
      <Footer />
    </main>
  )
}
