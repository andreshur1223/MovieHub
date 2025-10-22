'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Play, ArrowRight, Pause } from 'lucide-react'
import { useState, useRef, useEffect, useCallback } from 'react'

interface HeroProps {
  title: string
  subtitle: string
  backgroundImage?: string
  videoUrl?: string
  ctaText?: string
  ctaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
}

export function Hero({
  title,
  subtitle,
  backgroundImage = '/images/hero-bg.jpg',
  videoUrl,
  ctaText = 'Ver Tráiler',
  ctaHref = '#trailer',
  secondaryCtaText = 'Explorar Piezas',
  secondaryCtaHref = '/piezas'
}: HeroProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Función para manejar mensajes del iframe de YouTube
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://www.youtube.com') return
      
      if (event.data === 'video-ended' || 
          (typeof event.data === 'string' && event.data.includes('video-ended'))) {
        handleVideoEnd()
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [handleVideoEnd])

  const handleVideoEnd = useCallback(() => {
    setIsPlaying(false)
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    // Restaurar el iframe a su estado inicial
    if (iframeRef.current && videoUrl) {
      iframeRef.current.src = `${videoUrl}?autoplay=0&mute=1&controls=1&showinfo=0&rel=0&enablejsapi=1`
    }
  }, [videoUrl])

  const handlePlayVideo = () => {
    if (videoUrl && iframeRef.current) {
      const newSrc = `${videoUrl}?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&enablejsapi=1`
      iframeRef.current.src = newSrc
      setIsPlaying(true)
      
      // Timer de respaldo: asumir que el video dura aproximadamente 2-3 minutos
      // Esto es un fallback en caso de que el evento de YouTube no funcione
      timerRef.current = setTimeout(() => {
        handleVideoEnd()
      }, 180000) // 3 minutos como máximo
    }
  }

  const handlePauseVideo = () => {
    if (iframeRef.current && videoUrl) {
      const newSrc = `${videoUrl}?autoplay=0&mute=1&controls=1&showinfo=0&rel=0&enablejsapi=1`
      iframeRef.current.src = newSrc
      setIsPlaying(false)
      
      // Limpiar el timer si se pausa manualmente
      if (timerRef.current) {
        clearTimeout(timerRef.current)
        timerRef.current = null
      }
    }
  }

  // Limpiar timer al desmontar el componente
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [])
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {videoUrl ? (
          <div className="relative w-full h-full">
            <iframe
              ref={iframeRef}
              src={`${videoUrl}?autoplay=0&mute=1&controls=1&showinfo=0&rel=0&enablejsapi=1`}
              className="absolute inset-0 w-full h-full object-cover"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Tráiler de la película"
            />
            <div className={`absolute inset-0 transition-opacity duration-300 ${isPlaying ? 'bg-black/20' : 'bg-black/50'}`} />
          </div>
        ) : (
          <>
            <Image
              src={backgroundImage}
              alt="Fondo hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isPlaying ? 0 : 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isPlaying ? 0 : 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isPlaying ? 0 : 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={isPlaying ? handlePauseVideo : handlePlayVideo}
              size="lg"
              className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-3"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              {isPlaying ? 'Pausar' : ctaText}
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-3"
            >
              <Link 
                href={secondaryCtaHref} 
                className="flex items-center gap-2"
                target={secondaryCtaHref.startsWith('http') ? '_blank' : undefined}
                rel={secondaryCtaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {secondaryCtaText}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isPlaying ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
