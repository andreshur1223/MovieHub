import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  tags?: string[]
}

export function generateMetadata({
  title = 'Hub de Campaña Cinematográfica',
  description = 'Descubre el universo completo de nuestra próxima película. Tráilers, making-of, posters oficiales y toda la estrategia detrás del lanzamiento.',
  image = '/images/og-default.jpg',
  url = '/',
  type = 'website',
  publishedTime,
  modifiedTime,
  authors = ['Equipo de Marketing'],
  tags = []
}: SEOProps = {}): Metadata {
  const fullTitle = title.includes('Hub de Campaña') ? title : `${title} | Hub de Campaña Cinematográfica`
  
  return {
    title: fullTitle,
    description,
    keywords: ['película', 'campaña', 'marketing', 'cinema', 'tráiler', 'making of', ...tags],
    authors: authors.map(name => ({ name })),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: 'Hub de Campaña Cinematográfica',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'es_ES',
      type,
      publishedTime,
      modifiedTime,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: process.env.NEXT_PUBLIC_ENV === 'prod',
      follow: true,
      googleBot: {
        index: process.env.NEXT_PUBLIC_ENV === 'prod',
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export function generateMovieSchema({
  name,
  description,
  image,
  trailer,
  datePublished,
  director = 'Director Ejemplo',
  genre = 'Drama',
  duration = 'PT120M'
}: {
  name: string
  description: string
  image: string
  trailer?: string
  datePublished: string
  director?: string
  genre?: string
  duration?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Movie',
    name,
    description,
    image,
    trailer: trailer ? {
      '@type': 'VideoObject',
      name: `${name} - Tráiler`,
      description: `Tráiler oficial de ${name}`,
      thumbnailUrl: image,
      uploadDate: datePublished,
      contentUrl: trailer,
    } : undefined,
    datePublished,
    director: {
      '@type': 'Person',
      name: director,
    },
    genre,
    duration,
    inLanguage: 'es',
    countryOfOrigin: 'ES',
  }
}
