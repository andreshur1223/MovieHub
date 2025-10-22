'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useComments } from '@/lib/CommentsContext'

export function CommentsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Intentar usar el contexto, pero usar datos de ejemplo si no está disponible
  let comments: Comment[] = []
  try {
    const commentsContext = useComments()
    comments = commentsContext.comments
  } catch (error) {
    // Contexto no disponible, usar datos de ejemplo
    console.log('CommentsContext no disponible, usando datos de ejemplo')
    comments = [
      {
        id: '1',
        name: 'María González',
        comment: 'El tráiler oficial me dejó sin palabras. La calidad visual es impresionante y la música es perfecta. ¡No puedo esperar a ver la película completa!',
        rating: 5,
        date: '2024-01-20',
        avatar: 'MG'
      },
      {
        id: '2',
        name: 'Carlos Ruiz',
        comment: 'El making-of es fascinante. Ver el proceso creativo detrás de escenas me hace apreciar aún más el trabajo del equipo. Excelente contenido.',
        rating: 5,
        date: '2024-01-19',
        avatar: 'CR'
      },
      {
        id: '3',
        name: 'Ana Martínez',
        comment: 'El poster oficial es una obra de arte. Los colores y la composición capturan perfectamente la esencia de la película. ¡Increíble trabajo de diseño!',
        rating: 5,
        date: '2024-01-18',
        avatar: 'AM'
      }
    ]
  }

  // Auto-advance del carrusel cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === comments.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [comments.length])

  const nextComment = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === comments.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevComment = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? comments.length - 1 : prevIndex - 1
    )
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Si no hay comentarios, no mostrar nada
  if (comments.length === 0) {
    return null
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Lo que dicen nuestros fans</h3>
        <p className="text-muted-foreground">
          Descubre las opiniones de la comunidad sobre nuestra campaña
        </p>
      </div>

      <div className="relative">
        {/* Carrusel Container */}
        <div className="overflow-hidden rounded-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 shadow-lg border"
            >
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                    {comments[currentIndex].avatar}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-lg">{comments[currentIndex].name}</h4>
                    <div className="flex items-center gap-1">
                      {renderStars(comments[currentIndex].rating)}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-3">
                    {formatDate(comments[currentIndex].date)}
                  </p>
                  
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-primary/20" />
                    <p className="text-gray-700 leading-relaxed pl-4">
                      {comments[currentIndex].comment}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          onClick={prevComment}
          title="Comentario anterior"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          onClick={nextComment}
          title="Siguiente comentario"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {comments.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              title={`Ver comentario ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="text-2xl font-bold text-primary">{comments.length}</div>
          <div className="text-sm text-muted-foreground">Comentarios</div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="text-2xl font-bold text-primary">
            {(comments.reduce((acc, comment) => acc + comment.rating, 0) / comments.length).toFixed(1)}
          </div>
          <div className="text-sm text-muted-foreground">Calificación promedio</div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="text-2xl font-bold text-primary">
            {Math.round((comments.filter(c => c.rating >= 4).length / comments.length) * 100)}%
          </div>
          <div className="text-sm text-muted-foreground">Satisfacción</div>
        </div>
      </div>
    </div>
  )
}