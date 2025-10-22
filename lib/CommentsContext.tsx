'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export interface Comment {
  id: string
  name: string
  comment: string
  rating: number
  date: string
  avatar?: string
  email?: string
}

interface CommentsContextType {
  comments: Comment[]
  addComment: (comment: Omit<Comment, 'id' | 'date' | 'avatar'>) => void
}

const CommentsContext = createContext<CommentsContextType | undefined>(undefined)

// Datos de ejemplo para los comentarios iniciales
const initialComments: Comment[] = [
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
  },
  {
    id: '4',
    name: 'David López',
    comment: 'La estrategia de campaña es muy inteligente. Me encanta cómo están usando las redes sociales para crear comunidad. ¡Sigan así!',
    rating: 4,
    date: '2024-01-17',
    avatar: 'DL'
  },
  {
    id: '5',
    name: 'Laura Sánchez',
    comment: 'El contenido detrás de escenas es oro puro. Ver cómo se crean los efectos especiales es increíble. ¡Más contenido así por favor!',
    rating: 5,
    date: '2024-01-16',
    avatar: 'LS'
  },
  {
    id: '6',
    name: 'Roberto García',
    comment: 'La página web está muy bien diseñada y es fácil de navegar. El contenido es de alta calidad y muy informativo.',
    rating: 4,
    date: '2024-01-15',
    avatar: 'RG'
  }
]

export function CommentsProvider({ children }: { children: ReactNode }) {
  const [comments, setComments] = useState<Comment[]>(initialComments)

  const addComment = (newComment: Omit<Comment, 'id' | 'date' | 'avatar'>) => {
    const comment: Comment = {
      ...newComment,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      avatar: newComment.name.split(' ').map(n => n[0]).join('').toUpperCase()
    }
    
    setComments(prev => [comment, ...prev])
  }

  return (
    <CommentsContext.Provider value={{ comments, addComment }}>
      {children}
    </CommentsContext.Provider>
  )
}

export function useComments() {
  const context = useContext(CommentsContext)
  if (context === undefined) {
    throw new Error('useComments must be used within a CommentsProvider')
  }
  return context
}
