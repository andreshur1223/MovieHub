// Datos estáticos para las piezas (alternativa a Contentlayer)
export interface Pieza {
  title: string
  slug: string
  summary: string
  cover: string
  mediaType: 'image' | 'video'
  videoUrl?: string
  tags: string[]
  phase: 'teaser' | 'lanzamiento' | 'post'
  releaseDate: string
  ctaLabel?: string
  ctaHref?: string
  featured?: boolean
  seoTitle?: string
  seoDescription?: string
  ogImage?: string
  url: string
  body: {
    code: string
  }
}

export interface Estrategia {
  title: string
  goals: string[]
  audience: string[]
  channels: string[]
  keyMessages: string[]
  url: string
  body: {
    code: string
  }
}

// Datos de ejemplo para las piezas
export const piezasData: Pieza[] = [
  {
    title: "Tráiler Oficial - El Universo Cinematográfico",
    slug: "trailer-oficial",
    summary: "Descubre el primer vistazo oficial a nuestra próxima película. Una experiencia visual que te transportará a un mundo completamente nuevo.",
    cover: "/images/tron-3.jpg",
    mediaType: "video",
    videoUrl: "https://www.youtube.com/embed/example-trailer",
    tags: ["tráiler", "oficial", "lanzamiento", "cinematográfico"],
    phase: "teaser",
    releaseDate: "2024-01-15",
    ctaLabel: "Ver en YouTube",
    ctaHref: "https://www.youtube.com/watch?v=example-trailer",
    featured: true,
    seoTitle: "Tráiler Oficial - El Universo Cinematográfico",
    seoDescription: "Descubre el primer vistazo oficial a nuestra próxima película. Una experiencia visual que te transportará a un mundo completamente nuevo.",
    ogImage: "/images/tron-3.jpg",
    url: "/piezas/trailer-oficial",
    body: {
      code: `
# El Universo Cinematográfico - Tráiler Oficial

Bienvenidos al primer vistazo oficial de **El Universo Cinematográfico**, una película que promete revolucionar el género y llevarnos a través de una experiencia visual sin precedentes.

## Una Experiencia Visual Única

Este tráiler oficial presenta los elementos clave de nuestra historia:

- **Personajes icónicos** que cobrarán vida en la pantalla grande
- **Mundos fantásticos** creados con tecnología de vanguardia
- **Una banda sonora épica** que complementa cada momento
- **Efectos visuales impresionantes** que desafían la imaginación

## Detrás de Cámaras

El proceso de creación de este tráiler involucró:

1. **Pre-producción**: 6 meses de planificación y storyboarding
2. **Producción**: 3 meses de rodaje en locaciones internacionales
3. **Post-producción**: 4 meses de edición y efectos especiales

## Reacción del Público

Desde su lanzamiento, el tráiler ha generado:

- **2.5M visualizaciones** en las primeras 24 horas
- **95% de reacciones positivas** en redes sociales
- **Trending #1** en Twitter durante 3 días consecutivos

## Próximos Pasos

Este es solo el comienzo. Mantente atento para:

- **Making-of exclusivo** disponible próximamente
- **Posters oficiales** en alta resolución
- **Entrevistas con el elenco** y equipo creativo
- **Contenido interactivo** en nuestras redes sociales

---

*¿Qué opinas del tráiler? Comparte tus teorías y expectativas en nuestras redes sociales usando el hashtag #ElUniversoCinematografico*
      `
    }
  },
  {
    title: "Making Of - Detrás de Escenas",
    slug: "making-of-detras-escenas",
    summary: "Sumérgete en el proceso creativo detrás de El Universo Cinematográfico. Descubre cómo se crearon las escenas más impactantes.",
    cover: "/images/tron-10.jpg",
    mediaType: "video",
    videoUrl: "https://www.youtube.com/embed/example-making-of",
    tags: ["making of", "detrás de escenas", "producción", "creativo"],
    phase: "lanzamiento",
    releaseDate: "2024-01-22",
    ctaLabel: "Ver Documental Completo",
    ctaHref: "https://www.youtube.com/watch?v=example-making-of",
    featured: true,
    seoTitle: "Making Of - Detrás de Escenas de El Universo Cinematográfico",
    seoDescription: "Sumérgete en el proceso creativo detrás de El Universo Cinematográfico. Descubre cómo se crearon las escenas más impactantes.",
    ogImage: "/images/tron-10.jpg",
    url: "/piezas/making-of-detras-escenas",
    body: {
      code: `
# Making Of - Detrás de Escenas

Descubre los secretos detrás de la creación de **El Universo Cinematográfico** en este documental exclusivo que te llevará tras bambalinas.

## El Proceso Creativo

### Pre-producción (6 meses)

Durante esta fase crucial, nuestro equipo trabajó en:

- **Desarrollo del guión**: 12 versiones hasta llegar al resultado final
- **Diseño de producción**: Creación de más de 500 bocetos conceptuales
- **Casting**: Más de 2,000 audiciones para encontrar el elenco perfecto
- **Locaciones**: Exploración de 15 países para encontrar los escenarios ideales

### Producción (3 meses)

El rodaje principal incluyó:

- **120 días de filmación** en 8 países diferentes
- **Más de 200 personas** en el equipo técnico
- **Tecnología IMAX** para las escenas más impactantes
- **Efectos prácticos** combinados con CGI de última generación

## Momentos Destacados

### La Escena del Amanecer

Una de las secuencias más complejas de la película:

- **3 semanas de preparación** para una escena de 5 minutos
- **Efectos especiales prácticos** con más de 500 extras
- **Post-producción de 2 meses** para perfeccionar cada detalle

### El Diseño de Vestuario

Nuestro diseñador de vestuario trabajó durante 8 meses:

- **Más de 1,000 piezas** de vestuario creadas
- **Técnicas artesanales tradicionales** combinadas con tecnología moderna
- **Colaboración con diseñadores internacionales** para piezas especiales

## Tecnología Innovadora

### Cámaras de Última Generación

Utilizamos tecnología de vanguardia:

- **Cámaras RED Komodo** para máxima calidad
- **Sistemas de estabilización** personalizados
- **Drones especializados** para tomas aéreas imposibles

### Post-producción

El proceso de edición incluyó:

- **Más de 1,000 horas** de material filmado
- **Equipos de edición** trabajando 24/7 durante 4 meses
- **Efectos visuales** creados por 3 estudios internacionales

## Testimonios del Equipo

> "Fue el proyecto más desafiante y gratificante de mi carrera. Cada día aprendíamos algo nuevo." - **Director Principal**

> "La colaboración entre todos los departamentos fue excepcional. Todos trabajamos hacia una visión común." - **Productor Ejecutivo**

> "Los actores se entregaron completamente al proyecto. Su dedicación fue inspiradora." - **Director de Casting**

## Próximos Contenidos

Mantente atento para más contenido exclusivo:

- **Entrevistas con el elenco** sobre sus experiencias
- **Tutoriales técnicos** sobre efectos especiales
- **Galería de imágenes** del proceso de producción
- **Contenido interactivo** en realidad virtual

---

*Este making-of es solo una muestra del increíble trabajo detrás de El Universo Cinematográfico. ¡No te pierdas el resto del contenido exclusivo!*
      `
    }
  },
  {
    title: "Poster Oficial - Diseño y Concepto",
    slug: "poster-oficial-diseno",
    summary: "Explora el proceso creativo detrás del poster oficial. Desde el concepto inicial hasta el diseño final que captura la esencia de la película.",
    cover: "/images/tron.jpg",
    mediaType: "image",
    tags: ["poster", "oficial", "diseño", "arte", "concepto"],
    phase: "post",
    releaseDate: "2024-01-29",
    ctaLabel: "Descargar en HD",
    ctaHref: "/downloads/poster-oficial-hd.jpg",
    featured: true,
    seoTitle: "Poster Oficial - Diseño y Concepto de El Universo Cinematográfico",
    seoDescription: "Explora el proceso creativo detrás del poster oficial. Desde el concepto inicial hasta el diseño final que captura la esencia de la película.",
    ogImage: "/images/tron.jpg",
    url: "/piezas/poster-oficial-diseno",
    body: {
      code: `
# Poster Oficial - Diseño y Concepto

Descubre el fascinante proceso creativo detrás del **poster oficial** de El Universo Cinematográfico, una obra de arte que captura la esencia de nuestra historia.

## El Concepto Inicial

### Inspiración y Referencias

El diseño del poster se inspiró en:

- **Movimientos artísticos clásicos** como el Art Nouveau y el Surrealismo
- **Elementos cinematográficos** de películas icónicas del género
- **Simbolismo universal** que conecta con audiencias globales
- **Tendencias contemporáneas** en diseño gráfico

### Proceso de Conceptualización

Nuestro equipo creativo desarrolló **15 conceptos diferentes** antes de llegar al diseño final:

1. **Concepto Minimalista**: Enfoque en tipografía y espacios en blanco
2. **Concepto Cinematográfico**: Elementos visuales de la película
3. **Concepto Abstracto**: Representación simbólica de los temas
4. **Concepto Fotográfico**: Uso de fotografía del elenco principal
5. **Concepto Final**: Combinación de todos los elementos anteriores

## Desarrollo del Diseño

### Fase de Bocetos

Durante 3 semanas, nuestro diseñador principal creó:

- **Más de 200 bocetos** explorando diferentes composiciones
- **Variaciones de color** para encontrar la paleta perfecta
- **Experimentos tipográficos** con diferentes fuentes
- **Composiciones alternativas** para diferentes formatos

### Elementos Clave del Diseño

#### Tipografía

La elección tipográfica fue crucial:

- **Fuente principal**: Diseño personalizado inspirado en la época
- **Jerarquía visual**: Títulos, subtítulos y créditos bien diferenciados
- **Legibilidad**: Optimizada para diferentes tamaños y formatos

#### Paleta de Colores

La paleta de colores transmite emociones específicas:

- **Dorado**: Representa la grandeza y la épica
- **Azul profundo**: Simboliza la profundidad y el misterio
- **Blanco**: Añade elegancia y contraste
- **Negro**: Proporciona dramatismo y sofisticación

#### Composición

La composición sigue principios de diseño clásico:

- **Regla de los tercios** para equilibrio visual
- **Puntos focales** que guían la mirada del espectador
- **Espacios negativos** que respiran y dan claridad
- **Simetría dinámica** que crea tensión visual

## Proceso Técnico

### Herramientas y Software

El poster fue creado utilizando:

- **Adobe Photoshop** para manipulación de imágenes
- **Adobe Illustrator** para elementos vectoriales
- **Cinema 4D** para elementos 3D
- **Tabletas gráficas** para trabajo manual

### Resolución y Formatos

Preparamos el poster en múltiples formatos:

- **Resolución 4K** para impresión de alta calidad
- **Formatos digitales** optimizados para web y redes sociales
- **Versiones internacionales** adaptadas a diferentes mercados
- **Variaciones de color** para diferentes soportes

## Versiones Especiales

### Edición Limitada

Creamos una versión especial para coleccionistas:

- **Elementos holográficos** que cambian según el ángulo
- **Textura táctil** en elementos específicos
- **Numeración limitada** con certificado de autenticidad
- **Embalaje premium** diseñado especialmente

### Versiones Internacionales

Adaptamos el diseño para diferentes mercados:

- **Versión asiática**: Elementos culturales específicos
- **Versión europea**: Enfoque en arte clásico
- **Versión americana**: Estilo más comercial
- **Versión latinoamericana**: Colores vibrantes y energía

## Impacto y Recepción

### Reacción del Público

El poster oficial ha generado:

- **Más de 1M de descargas** en las primeras 48 horas
- **Trending en redes sociales** durante una semana
- **Reconocimiento internacional** en festivales de diseño
- **Análisis detallados** por parte de críticos de arte

### Reconocimientos

El diseño ha recibido:

- **Premio de Diseño Cinematográfico** en el Festival Internacional
- **Mención Especial** por Innovación Visual
- **Nominación** al Mejor Poster del Año
- **Exhibición** en museos de arte contemporáneo

## Descarga y Uso

### Uso Personal

Puedes descargar el poster para:

- **Uso personal** en tu espacio privado
- **Colección personal** de arte cinematográfico
- **Referencia artística** para proyectos creativos

### Uso Comercial

Para uso comercial, contacta con nosotros para:

- **Licencias de uso** para productos derivados
- **Colaboraciones** con marcas afines
- **Proyectos especiales** que requieran el diseño

---

*El poster oficial de El Universo Cinematográfico es más que una imagen promocional; es una obra de arte que representa la visión completa de nuestro proyecto cinematográfico.*
      `
    }
  }
]

// Datos de ejemplo para la estrategia
export const estrategiaData: Estrategia = {
  title: "Estrategia de Campaña Cinematográfica",
  goals: [
    "Generar expectativa y anticipación en la audiencia objetivo",
    "Establecer una conexión emocional con los espectadores potenciales",
    "Maximizar el alcance y la visibilidad en múltiples plataformas",
    "Crear una comunidad de fans comprometidos y activos",
    "Posicionar la película como un evento cultural importante",
    "Generar conversaciones orgánicas en redes sociales"
  ],
  audience: [
    "Cineastas y entusiastas del cine (25-45 años)",
    "Fans de ciencia ficción y fantasía (18-35 años)",
    "Profesionales creativos y artistas (22-40 años)",
    "Estudiantes universitarios interesados en cultura (18-25 años)",
    "Familias con hijos adolescentes (35-50 años)",
    "Influencers y creadores de contenido digital (20-35 años)"
  ],
  channels: [
    "YouTube (canal oficial y colaboraciones)",
    "Instagram (stories, reels, posts)",
    "TikTok (contenido viral y tendencias)",
    "Twitter/X (conversaciones en tiempo real)",
    "Facebook (comunidades y grupos)",
    "LinkedIn (contenido profesional)",
    "Pinterest (mood boards y inspiración)",
    "Reddit (comunidades especializadas)",
    "Podcasts especializados en cine",
    "Blogs y medios especializados"
  ],
  keyMessages: [
    "Una experiencia cinematográfica que redefine el género",
    "Tecnología de vanguardia al servicio de la narrativa",
    "Un elenco internacional de primer nivel",
    "Una historia universal que conecta con todas las culturas",
    "Innovación en efectos visuales y sonido",
    "Un proyecto que marca un antes y un después en el cine"
  ],
  url: "/estrategia",
  body: {
    code: `
# Estrategia de Campaña Cinematográfica

## Introducción

Esta estrategia de marketing cinematográfico está diseñada para maximizar el impacto de **El Universo Cinematográfico** en el mercado global, creando una campaña integral que conecte con audiencias diversas y genere expectativa sostenida hasta el lanzamiento.

## Análisis del Mercado

### Contexto Actual

El mercado cinematográfico actual presenta oportunidades únicas:

- **Aumento del consumo digital** de contenido audiovisual
- **Demanda creciente** por experiencias inmersivas
- **Importancia de las redes sociales** en la promoción
- **Valor del contenido auténtico** y detrás de escenas

### Competencia

Nuestro análisis de la competencia revela:

- **Películas similares** en el género con diferentes enfoques
- **Estrategias de marketing** exitosas que podemos adaptar
- **Oportunidades de diferenciación** en nuestro enfoque
- **Nichos de mercado** no explotados completamente

## Objetivos Estratégicos

### Objetivos Primarios

1. **Generar expectativa y anticipación** en la audiencia objetivo
2. **Establecer una conexión emocional** con los espectadores potenciales
3. **Maximizar el alcance y la visibilidad** en múltiples plataformas

### Objetivos Secundarios

4. **Crear una comunidad de fans** comprometidos y activos
5. **Posicionar la película** como un evento cultural importante
6. **Generar conversaciones orgánicas** en redes sociales

## Audiencias Objetivo

### Segmentación Principal

#### Cineastas y Entusiastas del Cine (25-45 años)
- **Características**: Profesionales del sector, críticos, festivales
- **Comportamiento**: Consumen contenido especializado, influyen en otros
- **Estrategia**: Contenido técnico, entrevistas exclusivas, acceso VIP

#### Fans de Ciencia Ficción y Fantasía (18-35 años)
- **Características**: Consumidores ávidos del género, activos en comunidades online
- **Comportamiento**: Comparten contenido, participan en debates
- **Estrategia**: Contenido inmersivo, easter eggs, teorías de fans

#### Profesionales Creativos (22-40 años)
- **Características**: Diseñadores, artistas, creativos digitales
- **Comportamiento**: Buscan inspiración, valoran la estética
- **Estrategia**: Behind-the-scenes, procesos creativos, colaboraciones

## Canales de Distribución

### Plataformas Digitales Principales

#### YouTube
- **Estrategia**: Canal oficial con contenido semanal
- **Contenido**: Tráilers, making-of, entrevistas, análisis
- **Objetivo**: Construir suscripciones y engagement sostenido

#### Instagram
- **Estrategia**: Contenido visual impactante y stories interactivas
- **Contenido**: Imágenes exclusivas, behind-the-scenes, filtros AR
- **Objetivo**: Alcance masivo y engagement visual

#### TikTok
- **Estrategia**: Contenido viral y participación en tendencias
- **Contenido**: Challenges, duetos, contenido educativo
- **Objetivo**: Audiencia joven y viralidad orgánica

## Mensajes Clave

### Mensaje Principal
**"Una experiencia cinematográfica que redefine el género"**

### Mensajes de Apoyo

1. **"Tecnología de vanguardia al servicio de la narrativa"**
   - Destacar la innovación técnica sin perder el foco en la historia

2. **"Un elenco internacional de primer nivel"**
   - Resaltar la calidad actoral y diversidad del reparto

3. **"Una historia universal que conecta con todas las culturas"**
   - Enfatizar la relevancia global y valores universales

4. **"Innovación en efectos visuales y sonido"**
   - Mostrar la excelencia técnica y artística

5. **"Un proyecto que marca un antes y un después en el cine"**
   - Posicionar como hito cinematográfico

## Cronograma de Campaña

### Fase 1: Teaser (Mes 1-2)
- **Objetivo**: Generar curiosidad inicial
- **Contenido**: Primer teaser, imágenes conceptuales
- **Canales**: YouTube, Instagram, medios especializados

### Fase 2: Lanzamiento (Mes 3-4)
- **Objetivo**: Máxima exposición y engagement
- **Contenido**: Tráiler oficial, making-of, entrevistas
- **Canales**: Todos los canales, colaboraciones masivas

### Fase 3: Post-lanzamiento (Mes 5-6)
- **Objetivo**: Mantener momentum y preparar secuela
- **Contenido**: Contenido adicional, análisis, comunidad
- **Canales**: Enfoque en comunidades y contenido de larga duración

## Métricas y KPIs

### Métricas de Alcance
- **Visualizaciones totales**: 10M+ en todas las plataformas
- **Alcance orgánico**: 5M+ usuarios únicos
- **Impresiones**: 50M+ en redes sociales

### Métricas de Engagement
- **Tasa de engagement**: 8%+ promedio
- **Compartidos**: 500K+ acciones sociales
- **Comentarios**: 100K+ interacciones significativas

### Métricas de Conversión
- **Suscripciones**: 500K+ nuevos suscriptores
- **Seguidores**: 1M+ nuevos seguidores
- **Menciones**: 10K+ menciones orgánicas

### Métricas de Calidad
- **Sentiment positivo**: 85%+ de menciones
- **Brand awareness**: Incremento del 40%
- **Purchase intent**: Incremento del 25%

## Presupuesto y Recursos

### Distribución del Presupuesto
- **Producción de contenido**: 40%
- **Paid media**: 30%
- **Influencer collaborations**: 20%
- **Eventos y activaciones**: 10%

### Recursos Humanos
- **Equipo creativo**: 8 personas
- **Community managers**: 4 personas
- **Analistas**: 2 personas
- **Coordinadores**: 3 personas

## Evaluación y Optimización

### Revisión Semanal
- Análisis de métricas clave
- Ajustes en estrategia de contenido
- Optimización de horarios de publicación

### Revisión Mensual
- Evaluación de objetivos vs. resultados
- Análisis de competencia
- Planificación de próximos meses

### Revisión Trimestral
- Evaluación estratégica completa
- Ajustes en presupuesto y recursos
- Planificación de nuevas fases

## Conclusiones

Esta estrategia integral está diseñada para maximizar el impacto de **El Universo Cinematográfico** a través de una campaña multicanal que conecta con audiencias diversas, genera expectativa sostenida y posiciona la película como un evento cultural importante en el panorama cinematográfico actual.

La combinación de contenido de alta calidad, distribución estratégica y engagement auténtico con las comunidades objetivo nos permitirá alcanzar nuestros objetivos de alcance, engagement y posicionamiento en el mercado.
    `
  }
}
