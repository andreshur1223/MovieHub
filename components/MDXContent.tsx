'use client'

import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { formatDateShort, getPhaseLabel, getPhaseColor } from '@/lib/utils'
import type { Pieza } from '@/lib/data'

interface MDXContentProps {
  pieza: Pieza
  nextPieza?: Pieza | null
  previousPieza?: Pieza | null
}

const mdxComponents = {
  img: (props: any) => (
    <Image
      {...props}
      alt={props.alt || ''}
      width={800}
      height={400}
      className="rounded-lg my-6"
    />
  ),
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
  code: (props: any) => (
    <code className="bg-muted px-2 py-1 rounded text-sm font-mono" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-6" {...props} />
  ),
}

export function MDXContent({ pieza, nextPieza, previousPieza }: MDXContentProps) {
  const MDXComponent = useMDXComponent(pieza.body.code)

  return (
    <article className="max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-8">
        {/* Cover Image */}
        <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
          <Image
            src={pieza.cover}
            alt={pieza.title}
            fill
            className="object-cover"
            priority
          />
          
          {/* Phase badge */}
          <div className="absolute top-4 left-4">
            <Badge className={getPhaseColor(pieza.phase)}>
              {getPhaseLabel(pieza.phase)}
            </Badge>
          </div>
        </div>

        {/* Title and Meta */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {pieza.title}
          </h1>
          
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDateShort(pieza.releaseDate)}</span>
            </div>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {pieza.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
          
          {/* CTA */}
          {pieza.ctaHref && pieza.ctaLabel && (
            <div className="pt-4">
              <Button asChild size="lg">
                <Link href={pieza.ctaHref}>
                  {pieza.ctaLabel}
                </Link>
              </Button>
            </div>
          )}
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <MDXComponent components={mdxComponents} />
      </div>

      {/* Navigation */}
      {(nextPieza || previousPieza) && (
        <nav className="mt-12 pt-8 border-t">
          <div className="flex justify-between items-center">
            {previousPieza ? (
              <Link
                href={previousPieza.url}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <div className="text-left">
                  <div className="text-sm">Anterior</div>
                  <div className="font-medium">{previousPieza.title}</div>
                </div>
              </Link>
            ) : (
              <div />
            )}
            
            {nextPieza && (
              <Link
                href={nextPieza.url}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="text-right">
                  <div className="text-sm">Siguiente</div>
                  <div className="font-medium">{nextPieza.title}</div>
                </div>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </nav>
      )}
    </article>
  )
}
