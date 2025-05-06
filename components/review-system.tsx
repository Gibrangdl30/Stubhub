"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, ThumbsUp, Flag, MessageSquare } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { motion, AnimatePresence } from "framer-motion"

interface Review {
  id: string
  author: {
    name: string
    avatar?: string
  }
  rating: number
  date: string
  content: string
  likes: number
  replies: number
  userLiked?: boolean
}

interface ReviewSystemProps {
  eventId: string
  eventName: string
}

export function ReviewSystem({ eventId, eventName }: ReviewSystemProps) {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [newReview, setNewReview] = useState("")
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [filter, setFilter] = useState<"all" | "positive" | "negative">("all")
  const [sort, setSort] = useState<"recent" | "highest" | "lowest">("recent")
  const [dialogOpen, setDialogOpen] = useState(false)

  // Simular carga de reseñas
  useEffect(() => {
    // En un caso real, estos datos vendrían de una API
    const mockReviews: Review[] = [
      {
        id: "1",
        author: {
          name: "Carlos Rodríguez",
          avatar: "https://i.pravatar.cc/150?img=1",
        },
        rating: 5,
        date: "2023-12-15",
        content:
          "¡Increíble experiencia! El sonido fue excelente y la organización impecable. Definitivamente volvería a comprar boletos para otro evento similar.",
        likes: 24,
        replies: 3,
      },
      {
        id: "2",
        author: {
          name: "Ana Martínez",
          avatar: "https://i.pravatar.cc/150?img=5",
        },
        rating: 4,
        date: "2023-12-10",
        content:
          "Muy buen evento, aunque hubo algunos problemas con la entrada. El personal fue amable y solucionaron rápidamente los inconvenientes.",
        likes: 12,
        replies: 1,
      },
      {
        id: "3",
        author: {
          name: "Miguel Ángel",
          avatar: "https://i.pravatar.cc/150?img=3",
        },
        rating: 2,
        date: "2023-12-05",
        content:
          "Decepcionante. El sonido no era bueno desde mi ubicación y había demasiada gente. No creo que vuelva a asistir a un evento en este lugar.",
        likes: 5,
        replies: 7,
      },
      {
        id: "4",
        author: {
          name: "Laura Sánchez",
          avatar: "https://i.pravatar.cc/150?img=4",
        },
        rating: 5,
        date: "2023-12-01",
        content:
          "¡Espectacular! Uno de los mejores conciertos a los que he asistido. La energía del público y del artista fue increíble. Totalmente recomendado.",
        likes: 32,
        replies: 2,
      },
      {
        id: "5",
        author: {
          name: "Roberto Gómez",
        },
        rating: 3,
        date: "2023-11-28",
        content:
          "Regular. El evento comenzó con retraso y la acústica no era la mejor. Sin embargo, el artista dio un buen espectáculo a pesar de las circunstancias.",
        likes: 8,
        replies: 0,
      },
    ]

    setReviews(mockReviews)
    setLoading(false)
  }, [eventId])

  const handleSubmitReview = () => {
    if (newReview.trim() === "" || rating === 0) return

    const newReviewObj: Review = {
      id: `new-${Date.now()}`,
      author: {
        name: "Usuario",
        avatar: "https://i.pravatar.cc/150?img=8",
      },
      rating,
      date: new Date().toISOString().split("T")[0],
      content: newReview,
      likes: 0,
      replies: 0,
      userLiked: false,
    }

    setReviews([newReviewObj, ...reviews])
    setNewReview("")
    setRating(0)
    setDialogOpen(false)
  }

  const handleLike = (reviewId: string) => {
    setReviews(
      reviews.map((review) => {
        if (review.id === reviewId) {
          const userLiked = !review.userLiked
          return {
            ...review,
            likes: userLiked ? review.likes + 1 : review.likes - 1,
            userLiked,
          }
        }
        return review
      }),
    )
  }

  const filteredReviews = reviews.filter((review) => {
    if (filter === "positive") return review.rating >= 4
    if (filter === "negative") return review.rating <= 2
    return true
  })

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sort === "recent") return new Date(b.date).getTime() - new Date(a.date).getTime()
    if (sort === "highest") return b.rating - a.rating
    if (sort === "lowest") return a.rating - b.rating
    return 0
  })

  const averageRating =
    reviews.length > 0 ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length : 0

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-900"></div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Reseñas y opiniones</h2>
          <div className="flex items-center mt-1">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-5 w-5 ${
                    star <= Math.round(averageRating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-lg font-bold">{averageRating.toFixed(1)}</span>
            <span className="ml-2 text-gray-600">({reviews.length} reseñas)</span>
          </div>
        </div>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-purple-900 hover:bg-purple-800">Escribir reseña</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Escribe tu reseña</DialogTitle>
              <DialogDescription>Comparte tu experiencia sobre {eventName}</DialogDescription>
            </DialogHeader>

            <div className="py-4">
              <div className="mb-4">
                <Label htmlFor="rating" className="block mb-2">
                  Calificación
                </Label>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-8 w-8 cursor-pointer ${
                        star <= (hoverRating || rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                    />
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <Label htmlFor="review" className="block mb-2">
                  Tu reseña
                </Label>
                <Textarea
                  id="review"
                  value={newReview}
                  onChange={(e) => setNewReview(e.target.value)}
                  placeholder="Comparte tu experiencia con este evento..."
                  rows={5}
                />
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                Cancelar
              </Button>
              <Button className="bg-purple-900 hover:bg-purple-800" onClick={handleSubmitReview}>
                Publicar reseña
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex space-x-2">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("all")}
            className={filter === "all" ? "bg-purple-900 hover:bg-purple-800" : ""}
          >
            Todas
          </Button>
          <Button
            variant={filter === "positive" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("positive")}
            className={filter === "positive" ? "bg-purple-900 hover:bg-purple-800" : ""}
          >
            Positivas
          </Button>
          <Button
            variant={filter === "negative" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("negative")}
            className={filter === "negative" ? "bg-purple-900 hover:bg-purple-800" : ""}
          >
            Negativas
          </Button>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Ordenar por:</span>
          <select
            className="border rounded-md px-2 py-1 text-sm"
            value={sort}
            onChange={(e) => setSort(e.target.value as any)}
          >
            <option value="recent">Más recientes</option>
            <option value="highest">Mayor calificación</option>
            <option value="lowest">Menor calificación</option>
          </select>
        </div>
      </div>

      <AnimatePresence>
        {sortedReviews.length > 0 ? (
          <div className="space-y-4">
            {sortedReviews.map((review) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardContent className="p-4">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={review.author.avatar || "/placeholder.svg"} alt={review.author.name} />
                          <AvatarFallback>{review.author.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="ml-3">
                          <p className="font-medium">{review.author.name}</p>
                          <div className="flex items-center">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`h-4 w-4 ${
                                    star <= review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="ml-2 text-xs text-gray-500">
                              {new Date(review.date).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3">
                      <p className="text-gray-700">{review.content}</p>
                    </div>

                    <div className="mt-4 flex items-center space-x-4">
                      <button
                        className={`flex items-center text-sm ${
                          review.userLiked ? "text-purple-600" : "text-gray-500"
                        } hover:text-purple-700`}
                        onClick={() => handleLike(review.id)}
                      >
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        <span>Útil ({review.likes})</span>
                      </button>
                      <button className="flex items-center text-sm text-gray-500 hover:text-purple-700">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        <span>Responder ({review.replies})</span>
                      </button>
                      <button className="flex items-center text-sm text-gray-500 hover:text-red-600">
                        <Flag className="h-4 w-4 mr-1" />
                        <span>Reportar</span>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 border rounded-lg bg-gray-50">
            <p className="text-gray-500">No se encontraron reseñas con los filtros seleccionados.</p>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
