'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

interface FeedbackFormProps {
  className?: string
}

interface FormData {
  name: string
  email: string
  message: string
  consent: boolean
}

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

export function FeedbackForm({ className = '' }: FeedbackFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    consent: false
  })
  
  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.consent) {
      setFormState({
        status: 'error',
        message: 'Debes aceptar el tratamiento de datos para enviar el formulario.'
      })
      return
    }

    setFormState({ status: 'loading', message: '' })

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setFormState({
          status: 'success',
          message: '¡Gracias por tu feedback! Te responderemos pronto.'
        })
        setFormData({ name: '', email: '', message: '', consent: false })
      } else {
        const error = await response.json()
        setFormState({
          status: 'error',
          message: error.message || 'Error al enviar el formulario. Inténtalo de nuevo.'
        })
      }
    } catch (error) {
      setFormState({
        status: 'error',
        message: 'Error de conexión. Inténtalo de nuevo más tarde.'
      })
    }
  }

  const handleInputChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }))
  }

  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      consent: e.target.checked
    }))
  }

  return (
    <Card className={`max-w-2xl mx-auto ${className}`}>
      <CardHeader>
        <CardTitle className="text-2xl text-center">
          Envíanos tu Feedback
        </CardTitle>
        <p className="text-muted-foreground text-center">
          Tu opinión es importante para nosotros. Comparte tus ideas, sugerencias o comentarios.
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nombre *
              </label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange('name')}
                required
                placeholder="Tu nombre completo"
                disabled={formState.status === 'loading'}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email *
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange('email')}
                required
                placeholder="tu@email.com"
                disabled={formState.status === 'loading'}
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Mensaje *
            </label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={handleInputChange('message')}
              required
              placeholder="Cuéntanos qué piensas sobre la campaña, qué te gustaría ver, o cualquier sugerencia..."
              rows={6}
              disabled={formState.status === 'loading'}
            />
          </div>
          
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              checked={formData.consent}
              onChange={handleConsentChange}
              disabled={formState.status === 'loading'}
              className="mt-1"
            />
            <label htmlFor="consent" className="text-sm text-muted-foreground">
              Acepto el tratamiento de mis datos personales para responder a mi consulta. 
              <a href="/privacy" className="text-primary hover:underline ml-1">
                Ver política de privacidad
              </a>
            </label>
          </div>
          
          {/* Status Message */}
          {formState.message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-center gap-2 p-3 rounded-md ${
                formState.status === 'success' 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}
            >
              {formState.status === 'success' ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <AlertCircle className="w-5 h-5" />
              )}
              <span className="text-sm">{formState.message}</span>
            </motion.div>
          )}
          
          <Button
            type="submit"
            className="w-full"
            disabled={formState.status === 'loading'}
          >
            {formState.status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Enviando...
              </>
            ) : (
              'Enviar Feedback'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
