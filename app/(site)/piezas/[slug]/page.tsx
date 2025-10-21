import { notFound } from 'next/navigation'
import { MDXContent } from '@/components/MDXContent'
import { getPiezaBySlug, getNextPieza, getPreviousPieza } from '@/lib/contentlayer'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'

interface PiezaPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const { getAllPiezas } = await import('@/lib/contentlayer')
  const piezas = getAllPiezas()
  
  return piezas.map((pieza) => ({
    slug: pieza.slug,
  }))
}

export async function generateMetadata({ params }: PiezaPageProps) {
  const pieza = getPiezaBySlug(params.slug)
  
  if (!pieza) {
    return generateSEOMetadata({
      title: 'Pieza no encontrada',
      description: 'La pieza solicitada no existe.'
    })
  }

  return generateSEOMetadata({
    title: pieza.seoTitle || pieza.title,
    description: pieza.seoDescription || pieza.summary,
    image: pieza.ogImage || pieza.cover,
    url: pieza.url,
    type: 'article',
    publishedTime: pieza.releaseDate,
    tags: pieza.tags
  })
}

export default function PiezaPage({ params }: PiezaPageProps) {
  const pieza = getPiezaBySlug(params.slug)
  
  if (!pieza) {
    notFound()
  }

  const nextPieza = getNextPieza(params.slug)
  const previousPieza = getPreviousPieza(params.slug)

  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-8">
        <MDXContent 
          pieza={pieza} 
          nextPieza={nextPieza}
          previousPieza={previousPieza}
        />
      </div>
    </div>
  )
}
