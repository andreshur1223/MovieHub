'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Play, Calendar, ArrowRight } from 'lucide-react'
import { formatDateShort, getPhaseLabel, getPhaseColor } from '@/lib/utils'
import type { Pieza } from '@/lib/data'

interface PieceCardProps {
  pieza: Pieza
  featured?: boolean
}

export function PieceCard({ pieza, featured = false }: PieceCardProps) {
  const isVideo = pieza.mediaType === 'video'
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
        {/* Media */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={pieza.cover}
            alt={pieza.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Video overlay */}
          {isVideo && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="bg-white/90 rounded-full p-3 group-hover:bg-white transition-colors">
                <Play className="w-6 h-6 text-black ml-1" />
              </div>
            </div>
          )}
          
          {/* Phase badge */}
          <div className="absolute top-3 left-3">
            <Badge className={getPhaseColor(pieza.phase)}>
              {getPhaseLabel(pieza.phase)}
            </Badge>
          </div>
          
          {/* Featured badge */}
          {featured && (
            <div className="absolute top-3 right-3">
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                Destacada
              </Badge>
            </div>
          )}
        </div>

        <CardContent className="p-6">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
              {pieza.title}
            </h3>
            
            <p className="text-muted-foreground text-sm line-clamp-3">
              {pieza.summary}
            </p>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{formatDateShort(pieza.releaseDate)}</span>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {pieza.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {pieza.tags.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{pieza.tags.length - 3}
                </Badge>
              )}
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0">
          <div className="flex gap-2 w-full">
            <Button asChild className="flex-1">
              <Link href={pieza.url}>
                Ver Detalles
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            
            {pieza.ctaHref && pieza.ctaLabel && (
              <Button asChild variant="outline">
                <Link href={pieza.ctaHref}>
                  {pieza.ctaLabel}
                </Link>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
