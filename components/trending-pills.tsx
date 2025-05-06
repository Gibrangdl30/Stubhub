import Link from "next/link"

export function TrendingPills() {
  const trendingItems = [
    "Lady Gaga",
    "Beyoncé",
    "Katy Perry",
    "Champions League",
    "Shakira",
    "Real Madrid",
    "Olivia Rodrigo",
    "Coldplay",
    "Club World Cup",
    "NBA",
    "Premier League",
    "Oasis",
  ]

  return (
    <section className="px-4 py-4 md:px-8">
      <h2 className="text-lg font-semibold mb-2">Lo más demandado</h2>
      <div className="flex flex-wrap gap-2">
        {trendingItems.map((item, index) => (
          <Link
            key={index}
            href="#"
            className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-purple-900 hover:text-white transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>
    </section>
  )
}
