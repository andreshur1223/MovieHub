// Vercel Analytics Configuration
// Este archivo se puede usar para configurar analytics en el futuro

export const analyticsConfig = {
  // Vercel Analytics
  vercelAnalytics: {
    enabled: process.env.NEXT_PUBLIC_ENV === 'prod',
    debug: process.env.NEXT_PUBLIC_ENV === 'dev'
  },
  
  // Google Analytics (para futuras implementaciones)
  googleAnalytics: {
    enabled: false,
    measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  },
  
  // Otros analytics (para futuras implementaciones)
  otherAnalytics: {
    enabled: false
  }
}

// Función para inicializar analytics
export function initializeAnalytics() {
  if (typeof window !== 'undefined' && analyticsConfig.vercelAnalytics.enabled) {
    // Aquí se puede añadir código para inicializar analytics
    console.log('Analytics initialized for production')
  }
}
