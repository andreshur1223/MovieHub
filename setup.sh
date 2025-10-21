#!/bin/bash

# Script de configuración para Movie Campaign Hub
# Ejecutar con: chmod +x setup.sh && ./setup.sh

echo "🎬 Configurando Movie Campaign Hub..."

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: No se encontró package.json. Ejecuta este script desde la raíz del proyecto."
    exit 1
fi

# Instalar dependencias
echo "📦 Instalando dependencias..."
pnpm install

# Verificar si existe .env.local
if [ ! -f ".env.local" ]; then
    echo "⚙️ Creando archivo de variables de entorno..."
    cp env.example .env.local
    echo "✅ Archivo .env.local creado. Por favor, edítalo con tus valores reales."
else
    echo "✅ Archivo .env.local ya existe."
fi

# Construir contenido MDX
echo "📝 Construyendo contenido MDX..."
pnpm contentlayer build

# Verificar que las imágenes de ejemplo existen
if [ ! -d "public/images" ]; then
    echo "📁 Creando directorio de imágenes..."
    mkdir -p public/images
fi

# Crear imágenes placeholder si no existen
echo "🖼️ Creando imágenes placeholder..."
if [ ! -f "public/images/hero-bg.jpg" ]; then
    echo "Creando imagen placeholder para hero..."
    # Usar una imagen placeholder de Picsum
    curl -o public/images/hero-bg.jpg "https://picsum.photos/1920/1080"
fi

if [ ! -f "public/images/og-default.jpg" ]; then
    echo "Creando imagen placeholder para OpenGraph..."
    curl -o public/images/og-default.jpg "https://picsum.photos/1200/630"
fi

if [ ! -f "public/images/trailer-cover.jpg" ]; then
    echo "Creando imagen placeholder para tráiler..."
    curl -o public/images/trailer-cover.jpg "https://picsum.photos/800/450"
fi

if [ ! -f "public/images/making-of-cover.jpg" ]; then
    echo "Creando imagen placeholder para making-of..."
    curl -o public/images/making-of-cover.jpg "https://picsum.photos/800/450"
fi

if [ ! -f "public/images/poster-cover.jpg" ]; then
    echo "Creando imagen placeholder para poster..."
    curl -o public/images/poster-cover.jpg "https://picsum.photos/800/450"
fi

# Verificar configuración de Tailwind
if [ ! -f "tailwind.config.ts" ]; then
    echo "🎨 Configurando Tailwind CSS..."
    pnpm dlx tailwindcss init -p
fi

# Verificar configuración de shadcn/ui
if [ ! -d "components/ui" ]; then
    echo "🎨 Configurando shadcn/ui..."
    pnpm dlx shadcn-ui@latest init --yes
    pnpm dlx shadcn-ui@latest add button input textarea badge card
fi

# Ejecutar linting
echo "🔍 Ejecutando linting..."
pnpm lint

# Construir el proyecto para verificar que todo funciona
echo "🏗️ Construyendo proyecto..."
pnpm build

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 ¡Configuración completada exitosamente!"
    echo ""
    echo "📋 Próximos pasos:"
    echo "1. Edita .env.local con tus valores reales"
    echo "2. Reemplaza las imágenes placeholder con contenido real"
    echo "3. Personaliza el contenido MDX en content/"
    echo "4. Ejecuta 'pnpm dev' para iniciar el servidor de desarrollo"
    echo ""
    echo "🚀 Para iniciar el servidor de desarrollo:"
    echo "   pnpm dev"
    echo ""
    echo "📚 Para más información, consulta el README.md"
else
    echo "❌ Error durante la construcción. Revisa los errores arriba."
    exit 1
fi
