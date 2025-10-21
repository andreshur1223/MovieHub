import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

export function formatDateShort(date: string | Date) {
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date))
}

export function getPhaseLabel(phase: string) {
  const labels = {
    teaser: 'Teaser',
    lanzamiento: 'Lanzamiento',
    post: 'Post-lanzamiento'
  }
  return labels[phase as keyof typeof labels] || phase
}

export function getPhaseColor(phase: string) {
  const colors = {
    teaser: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    lanzamiento: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    post: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
  }
  return colors[phase as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
}
