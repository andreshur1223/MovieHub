# Hub de Campaña Cinematográfica

Un hub web completo para campañas de lanzamiento de películas, construido con Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, Contentlayer (MDX), Framer Motion, y Resend para feedback.

## 🎬 Características

- **Hero Section** con video de fondo y CTAs prominentes
- **3 Piezas Destacadas** con tarjetas interactivas
- **Sección de Estrategia** con justificación completa de la campaña
- **Blog/Listado de Piezas** con navegación por fases y tags
- **Páginas de Detalle** con contenido MDX renderizado
- **Formulario de Feedback** que envía emails via Resend
- **SEO Optimizado** con OpenGraph y Schema.org
- **Animaciones Sutiles** con Framer Motion
- **Diseño Responsivo** y accesible

## 🚀 Instalación y Configuración

### 1. Crear el Proyecto

```bash
# Crear proyecto Next.js
pnpm create next-app movie-campaign-hub --ts --app --eslint
cd movie-campaign-hub

# O usar este repositorio directamente
git clone <tu-repo>
cd movie-campaign-hub
```

### 2. Instalar Dependencias

```bash
# Dependencias principales
pnpm add tailwindcss postcss autoprefixer @radix-ui/react-icons framer-motion next-seo
pnpm add contentlayer next-contentlayer gray-matter reading-time
pnpm add zod resend clsx tailwind-merge class-variance-authority

# Dependencias de desarrollo
pnpm add -D contentlayer

# Inicializar shadcn/ui
pnpm dlx shadcn-ui@latest init
pnpm dlx shadcn-ui@latest add button input textarea badge card
```

### 3. Configurar Variables de Entorno

```bash
# Copiar archivo de ejemplo
cp env.example .env.local

# Editar .env.local con tus valores
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
FEEDBACK_TO_EMAIL=marketing@midominio.com
SITE_URL=https://midominio.com
NEXT_PUBLIC_ENV=dev
```

### 4. Configurar Tailwind CSS

```bash
# Inicializar Tailwind (si no existe)
pnpm dlx tailwindcss init -p
```

### 5. Construir Contenido

```bash
# Construir contenido MDX
pnpm contentlayer build

# O usar el script de build
pnpm run contentlayer
```

### 6. Ejecutar en Desarrollo

```bash
pnpm dev
```

Visita [http://localhost:3000](http://localhost:3000) para ver el sitio.

## 📁 Estructura del Proyecto

```
movie-campaign-hub/
├── app/
│   ├── (site)/
│   │   ├── page.tsx                 # Home: hero + piezas destacadas
│   │   ├── piezas/
│   │   │   ├── page.tsx             # Listado de piezas
│   │   │   └── [slug]/
│   │   │       └── page.tsx          # Detalle de pieza
│   │   ├── estrategia/
│   │   │   └── page.tsx             # Estrategia completa
│   │   └── feedback/
│   │       └── page.tsx             # Formulario de feedback
│   ├── api/
│   │   └── feedback/
│   │       └── route.ts             # API endpoint para feedback
│   ├── layout.tsx                   # Layout principal
│   └── sitemap.ts                   # Generación de sitemap
├── components/
│   ├── ui/                          # Componentes shadcn/ui
│   ├── Hero.tsx                     # Sección hero principal
│   ├── NavBar.tsx                   # Navegación
│   ├── Footer.tsx                   # Pie de página
│   ├── PieceCard.tsx                # Tarjeta de pieza
│   ├── Section.tsx                  # Contenedor de sección
│   ├── MDXContent.tsx               # Renderizador MDX
│   └── forms/
│       └── FeedbackForm.tsx         # Formulario de feedback
├── content/
│   ├── piezas/                      # MDX de piezas
│   │   ├── trailer-oficial.mdx
│   │   ├── making-of-detras-escenas.mdx
│   │   └── poster-oficial-diseno.mdx
│   └── estrategia/
│       └── estrategia.mdx           # Estrategia de campaña
├── lib/
│   ├── utils.ts                     # Utilidades generales
│   ├── contentlayer.ts              # Helpers de Contentlayer
│   └── seo.ts                       # Configuración SEO
├── public/
│   ├── images/                      # Imágenes del sitio
│   └── robots.txt                   # Configuración robots
├── styles/
│   └── globals.css                  # Estilos globales
├── contentlayer.config.ts           # Configuración Contentlayer
├── middleware.ts                    # Middleware de seguridad
└── package.json
```

## 🎨 Personalización

### Contenido MDX

#### Crear una Nueva Pieza

1. Crea un archivo `.mdx` en `content/piezas/`
2. Añade el frontmatter con los metadatos:

```yaml
---
title: "Mi Nueva Pieza"
slug: "mi-nueva-pieza"
summary: "Descripción corta de la pieza"
cover: "/images/mi-imagen.jpg"
mediaType: "image" # o "video"
videoUrl: "https://youtube.com/embed/..." # solo si es video
tags: ["tag1", "tag2"]
phase: "teaser" # "teaser", "lanzamiento", "post"
releaseDate: "2024-01-15"
ctaLabel: "Ver Más"
ctaHref: "/enlace"
featured: true # para aparecer en destacadas
---
```

3. Añade el contenido MDX debajo del frontmatter
4. Ejecuta `pnpm contentlayer build`

#### Modificar la Estrategia

Edita `content/estrategia/estrategia.mdx` con tu contenido y metadatos.

### Estilos y Diseño

- **Colores**: Modifica las variables CSS en `styles/globals.css`
- **Componentes**: Personaliza los componentes en `components/`
- **Layout**: Ajusta el diseño en las páginas de `app/`

### SEO

- **Metadatos**: Configura en `lib/seo.ts`
- **Schema.org**: Personaliza en las páginas individuales
- **OpenGraph**: Se genera automáticamente desde los metadatos

## 📧 Configuración de Email (Resend)

1. Crea una cuenta en [Resend](https://resend.com)
2. Obtén tu API key
3. Configura el dominio en Resend
4. Añade la API key a `.env.local`

### Variables de Entorno Requeridas

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
FEEDBACK_TO_EMAIL=marketing@midominio.com
SITE_URL=https://midominio.com
NEXT_PUBLIC_ENV=prod
```

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno en el dashboard
3. Despliega automáticamente

### Otros Proveedores

El proyecto es compatible con cualquier proveedor que soporte Next.js:

- **Netlify**: Configura build command: `pnpm build`
- **Railway**: Despliega directamente desde GitHub
- **DigitalOcean App Platform**: Configura como aplicación Node.js

## 🔧 Scripts Disponibles

```bash
# Desarrollo
pnpm dev

# Construcción
pnpm build

# Producción
pnpm start

# Linting
pnpm lint

# Construir contenido MDX
pnpm contentlayer
```

## 📊 Métricas y Analytics

### Lighthouse Score Objetivo

- **Performance**: ≥ 90
- **SEO**: ≥ 95
- **Best Practices**: ≥ 90
- **Accessibility**: ≥ 90

### Métricas Recomendadas

- **Core Web Vitals**: Optimizado para LCP, FID, CLS
- **SEO**: Schema.org, OpenGraph, sitemap.xml
- **Accesibilidad**: ARIA labels, contraste AA, navegación por teclado

## 🛠️ Troubleshooting

### Problemas Comunes

1. **Error de Contentlayer**: Ejecuta `pnpm contentlayer build`
2. **Imágenes no cargan**: Verifica las rutas en `public/images/`
3. **Email no envía**: Verifica `RESEND_API_KEY` en `.env.local`
4. **Estilos no aplican**: Verifica `tailwind.config.ts`

### Logs de Desarrollo

```bash
# Ver logs detallados
DEBUG=* pnpm dev

# Solo logs de Contentlayer
DEBUG=contentlayer* pnpm contentlayer build
```

## 📝 Checklist de Lanzamiento

### Pre-lanzamiento

- [ ] Configurar variables de entorno de producción
- [ ] Verificar todas las imágenes y assets
- [ ] Probar formulario de feedback
- [ ] Validar SEO con herramientas online
- [ ] Ejecutar Lighthouse audit
- [ ] Probar en diferentes dispositivos

### Post-lanzamiento

- [ ] Configurar analytics (opcional)
- [ ] Monitorear métricas de rendimiento
- [ ] Revisar logs de errores
- [ ] Actualizar contenido regularmente
- [ ] Mantener dependencias actualizadas

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🆘 Soporte

Si tienes problemas o preguntas:

1. Revisa la documentación
2. Busca en los issues existentes
3. Crea un nuevo issue con detalles del problema
4. Contacta al equipo de desarrollo

---

**¡Disfruta creando tu hub de campaña cinematográfica! 🎬✨**
