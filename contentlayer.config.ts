import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Pieza = defineDocumentType(() => ({
  name: 'Pieza',
  filePathPattern: `piezas/**/*.mdx`,
  fields: {
    title: {
      type: 'string',
      description: 'El título de la pieza',
      required: true,
    },
    slug: {
      type: 'string',
      description: 'El slug de la pieza',
      required: false,
    },
    summary: {
      type: 'string',
      description: 'Resumen corto de la pieza (≤160 chars)',
      required: true,
    },
    cover: {
      type: 'string',
      description: 'Ruta de la imagen de portada',
      required: true,
    },
    mediaType: {
      type: 'enum',
      options: ['image', 'video'],
      description: 'Tipo de media principal',
      required: true,
    },
    videoUrl: {
      type: 'string',
      description: 'URL del video (YouTube/Vimeo)',
      required: false,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'Tags de la pieza',
      required: true,
    },
    phase: {
      type: 'enum',
      options: ['teaser', 'lanzamiento', 'post'],
      description: 'Fase de la campaña',
      required: true,
    },
    releaseDate: {
      type: 'date',
      description: 'Fecha de lanzamiento',
      required: true,
    },
    ctaLabel: {
      type: 'string',
      description: 'Texto del botón CTA',
      required: false,
    },
    ctaHref: {
      type: 'string',
      description: 'URL del botón CTA',
      required: false,
    },
    featured: {
      type: 'boolean',
      description: 'Si debe aparecer en las destacadas',
      required: false,
      default: false,
    },
    seoTitle: {
      type: 'string',
      description: 'Título SEO personalizado',
      required: false,
    },
    seoDescription: {
      type: 'string',
      description: 'Descripción SEO personalizada',
      required: false,
    },
    ogImage: {
      type: 'string',
      description: 'Imagen OpenGraph personalizada',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/piezas/${doc._raw.flattenedPath.replace('piezas/', '')}`,
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc.slug || doc._raw.flattenedPath.replace('piezas/', '').replace('.mdx', ''),
    },
  },
}))

export const Estrategia = defineDocumentType(() => ({
  name: 'Estrategia',
  filePathPattern: `estrategia/**/*.mdx`,
  fields: {
    title: {
      type: 'string',
      description: 'El título de la estrategia',
      required: true,
    },
    goals: {
      type: 'list',
      of: { type: 'string' },
      description: 'Objetivos de la campaña',
      required: true,
    },
    audience: {
      type: 'list',
      of: { type: 'string' },
      description: 'Audiencias objetivo',
      required: true,
    },
    channels: {
      type: 'list',
      of: { type: 'string' },
      description: 'Canales de distribución',
      required: true,
    },
    keyMessages: {
      type: 'list',
      of: { type: 'string' },
      description: 'Mensajes clave',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: () => '/estrategia',
    },
  },
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Pieza, Estrategia],
})
