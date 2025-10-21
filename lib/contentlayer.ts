import { piezasData, estrategiaData, type Pieza, type Estrategia } from './data'

export function getAllPiezas(): Pieza[] {
  return piezasData.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())
}

export function getFeaturedPiezas(): Pieza[] {
  return piezasData.filter(pieza => pieza.featured).slice(0, 3)
}

export function getPiezaBySlug(slug: string): Pieza | undefined {
  return piezasData.find(pieza => pieza.slug === slug)
}

export function getPiezasByPhase(phase: string): Pieza[] {
  return piezasData.filter(pieza => pieza.phase === phase)
}

export function getPiezasByTag(tag: string): Pieza[] {
  return piezasData.filter(pieza => pieza.tags.includes(tag))
}

export function getAllTags(): string[] {
  const tags = piezasData.flatMap(pieza => pieza.tags)
  return Array.from(new Set(tags)).sort()
}

export function getAllPhases(): string[] {
  const phases = piezasData.map(pieza => pieza.phase)
  return Array.from(new Set(phases)).sort()
}

export function getEstrategia(): Estrategia {
  return estrategiaData
}

export function getNextPieza(currentSlug: string): Pieza | null {
  const piezas = getAllPiezas()
  const currentIndex = piezas.findIndex(pieza => pieza.slug === currentSlug)
  return currentIndex < piezas.length - 1 ? piezas[currentIndex + 1] : null
}

export function getPreviousPieza(currentSlug: string): Pieza | null {
  const piezas = getAllPiezas()
  const currentIndex = piezas.findIndex(pieza => pieza.slug === currentSlug)
  return currentIndex > 0 ? piezas[currentIndex - 1] : null
}
