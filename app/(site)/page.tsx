import { Hero } from '@/components/Hero'
import { Section } from '@/components/Section'
import { PieceCard } from '@/components/PieceCard'
import { Button } from '@/components/ui/button'
import { getFeaturedPiezas, getEstrategia } from '@/lib/contentlayer'
import { generateMovieSchema } from '@/lib/seo'
import Link from 'next/link'
import { ArrowRight, Target, Users, Megaphone, BarChart3 } from 'lucide-react'

export default function HomePage() {
  const featuredPiezas = getFeaturedPiezas()
  const estrategia = getEstrategia()

  const movieSchema = generateMovieSchema({
    name: 'El Universo Cinematográfico',
    description: 'Descubre el universo completo de nuestra próxima película. Tráilers, making-of, posters oficiales y toda la estrategia detrás del lanzamiento.',
    image: '/images/og-default.jpg',
    trailer: 'https://www.youtube.com/watch?v=example',
    datePublished: '2024-01-15',
    director: 'Director Ejemplo',
    genre: 'Drama',
    duration: 'PT120M'
  })

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(movieSchema) }}
      />

      {/* Hero Section */}
      <Hero
        title="El Universo Cinematográfico"
        subtitle="Descubre el universo completo de nuestra próxima película. Tráilers, making-of, posters oficiales y toda la estrategia detrás del lanzamiento."
        backgroundImage="/images/hero-bg.jpg"
        videoUrl="https://www.youtube.com/embed/example"
        ctaText="Ver Tráiler"
        ctaHref="#trailer"
        secondaryCtaText="Explorar Piezas"
        secondaryCtaHref="/piezas"
      />

      {/* Featured Pieces */}
      <Section
        title="Piezas Destacadas"
        subtitle="Las mejores piezas de nuestra campaña cinematográfica"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPiezas.map((pieza) => (
            <PieceCard key={pieza.slug} pieza={pieza} featured />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button asChild size="lg">
            <Link href="/piezas">
              Ver Todas las Piezas
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Strategy Preview */}
      <Section
        title="Nuestra Estrategia"
        subtitle="Una campaña cinematográfica diseñada para conectar con audiencias globales"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
              <Target className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Objetivos</h3>
              <p className="text-sm text-muted-foreground">
                {estrategia?.goals.length || 0} objetivos estratégicos definidos
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Audiencias</h3>
              <p className="text-sm text-muted-foreground">
                {estrategia?.audience.length || 0} segmentos objetivo
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
              <Megaphone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Canales</h3>
              <p className="text-sm text-muted-foreground">
                {estrategia?.channels.length || 0} canales de distribución
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
              <BarChart3 className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">KPIs</h3>
              <p className="text-sm text-muted-foreground">
                Métricas de rendimiento definidas
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/estrategia">
                Ver Estrategia Completa
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section
        className="bg-primary text-primary-foreground"
      >
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Tienes algo que decir?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Tu feedback es fundamental para mejorar nuestra campaña. 
            Comparte tus ideas y sugerencias con nosotros.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/feedback">
              Enviar Feedback
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  )
}
