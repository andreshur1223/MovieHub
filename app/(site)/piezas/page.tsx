import { Section } from '@/components/Section'
import { PieceCard } from '@/components/PieceCard'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getAllPiezas, getAllTags, getAllPhases } from '@/lib/contentlayer'
import { generateMetadata } from '@/lib/seo'
import Link from 'next/link'
import { Filter, Grid, List } from 'lucide-react'

export const metadata = generateMetadata({
  title: 'Todas las Piezas',
  description: 'Explora todas las piezas de nuestra campaña cinematográfica. Tráilers, making-of, posters y contenido exclusivo.',
  url: '/piezas'
})

export default function PiezasPage() {
  const piezas = getAllPiezas()
  const tags = getAllTags()
  const phases = getAllPhases()

  return (
    <div className="pt-16">
      <Section
        title="Todas las Piezas"
        subtitle="Explora el universo completo de nuestra campaña cinematográfica"
        className="bg-gray-50"
      >
        {/* Filters */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              <span className="font-medium">Filtrar por fase:</span>
            </div>
            {phases.map((phase) => (
              <Badge key={phase} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                {phase}
              </Badge>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Pieces Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {piezas.map((pieza) => (
              <PieceCard key={pieza.slug} pieza={pieza} />
            ))}
          </div>
          
          {piezas.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No hay piezas disponibles en este momento.
              </p>
            </div>
          )}
        </div>
      </Section>
    </div>
  )
}
