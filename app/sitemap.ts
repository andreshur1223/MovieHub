import { getAllPiezas } from '@/lib/contentlayer'

export default function sitemap() {
  const baseUrl = process.env.SITE_URL || 'https://midominio.com'
  const piezas = getAllPiezas()

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/piezas`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/estrategia`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/feedback`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  const piezaPages = piezas.map((pieza) => ({
    url: `${baseUrl}${pieza.url}`,
    lastModified: new Date(pieza.releaseDate),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...piezaPages]
}
