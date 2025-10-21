import { Section } from '@/components/Section'
import { Badge } from '@/components/ui/badge'
import { getEstrategia } from '@/lib/contentlayer'
import { generateMetadata } from '@/lib/seo'
import { Target, Users, Megaphone, MessageSquare, BarChart3, CheckCircle } from 'lucide-react'
import { renderMarkdown } from '@/lib/markdown'

export const metadata = generateMetadata({
  title: 'Estrategia de Campaña',
  description: 'Descubre la estrategia completa detrás de nuestra campaña cinematográfica. Objetivos, audiencias, canales y métricas de éxito.',
  url: '/estrategia'
})

const mdxComponents = {
  h1: (props: any) => (
    <h1 className="text-4xl font-bold mb-6 mt-8" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-3xl font-semibold mb-4 mt-8" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-2xl font-semibold mb-3 mt-6" {...props} />
  ),
  p: (props: any) => (
    <p className="mb-4 leading-relaxed" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-inside mb-4 space-y-2" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-primary pl-4 italic my-6" {...props} />
  ),
}

export default function EstrategiaPage() {
  const estrategia = getEstrategia()

  if (!estrategia) {
    return (
      <div className="pt-16">
        <Section>
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              La estrategia no está disponible en este momento.
            </p>
          </div>
        </Section>
      </div>
    )
  }

  return (
    <div className="pt-16">
      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {estrategia.title}
            </h1>
          </div>

          {/* Strategy Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <Target className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Objetivos</h3>
              <p className="text-sm text-muted-foreground">
                {estrategia.goals.length} objetivos estratégicos
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Audiencias</h3>
              <p className="text-sm text-muted-foreground">
                {estrategia.audience.length} segmentos objetivo
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <Megaphone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Canales</h3>
              <p className="text-sm text-muted-foreground">
                {estrategia.channels.length} canales activos
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <MessageSquare className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Mensajes</h3>
              <p className="text-sm text-muted-foreground">
                {estrategia.keyMessages.length} mensajes clave
              </p>
            </div>
          </div>

          {/* Goals Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-primary" />
              Objetivos de la Campaña
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {estrategia.goals.map((goal, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{goal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Audience Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              Audiencias Objetivo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {estrategia.audience.map((audience, index) => (
                <div key={index} className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <span className="text-sm font-medium text-blue-900">{audience}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Channels Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
              <Megaphone className="w-8 h-8 text-primary" />
              Canales de Distribución
            </h2>
            <div className="flex flex-wrap gap-3">
              {estrategia.channels.map((channel, index) => (
                <Badge key={index} variant="outline" className="text-sm px-4 py-2">
                  {channel}
                </Badge>
              ))}
            </div>
          </div>

          {/* Key Messages Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
              <MessageSquare className="w-8 h-8 text-primary" />
              Mensajes Clave
            </h2>
            <div className="space-y-4">
              {estrategia.keyMessages.map((message, index) => (
                <div key={index} className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <span className="text-sm font-medium text-yellow-900">{message}</span>
                </div>
              ))}
            </div>
          </div>

              {/* MDX Content */}
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: renderMarkdown(estrategia.body.code) }} />
              </div>

          {/* KPIs Section */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-primary" />
              Medición y KPIs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">1M+</div>
                <div className="text-sm text-muted-foreground">Visualizaciones objetivo</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">85%</div>
                <div className="text-sm text-muted-foreground">Engagement rate esperado</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">50K</div>
                <div className="text-sm text-muted-foreground">Conversiones objetivo</div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
