import { Section } from '@/components/Section'
import { FeedbackForm } from '@/components/forms/FeedbackForm'
import { CommentsCarousel } from '@/components/CommentsCarousel'
import { CommentsProvider } from '@/lib/CommentsContext'
import { generateMetadata } from '@/lib/seo'
import { MessageCircle, Mail, Clock, Shield } from 'lucide-react'

export const metadata = generateMetadata({
  title: 'Feedback',
  description: 'Envíanos tu feedback sobre nuestra campaña cinematográfica. Tu opinión es importante para nosotros.',
  url: '/feedback'
})

export default function FeedbackPage() {
  return (
    <CommentsProvider>
      <div className="pt-16">
        <Section
          title="Tu Feedback Importa"
          subtitle="Comparte tus ideas, sugerencias y comentarios sobre nuestra campaña"
          className="bg-gray-50"
        >
          <div className="max-w-4xl mx-auto">
            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
                <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Comentarios</h3>
                <p className="text-sm text-muted-foreground">
                  Comparte tu opinión sobre las piezas de la campaña
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
                <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Respuesta Rápida</h3>
                <p className="text-sm text-muted-foreground">
                  Te responderemos en menos de 24 horas
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Tiempo Real</h3>
                <p className="text-sm text-muted-foreground">
                  Tu feedback llega directamente al equipo
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Privacidad</h3>
                <p className="text-sm text-muted-foreground">
                  Tus datos están protegidos y seguros
                </p>
              </div>
            </div>

            {/* Feedback Form */}
            <FeedbackForm />

            {/* Comments Carousel */}
            <div className="mt-16">
              <CommentsCarousel />
            </div>

            {/* Additional Info */}
            <div className="mt-12 text-center text-muted-foreground">
              <p className="mb-4">
                ¿Prefieres contactarnos por otros medios?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:marketing@midominio.com"
                  className="text-primary hover:underline"
                >
                  marketing@midominio.com
                </a>
                <span className="hidden sm:block">•</span>
                <a 
                  href="tel:+34900123456"
                  className="text-primary hover:underline"
                >
                  +34 900 123 456
                </a>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </CommentsProvider>
  )
}
