@echo off
REM Script de configuración para Movie Campaign Hub (Windows)
REM Ejecutar desde PowerShell o CMD

echo 🎬 Configurando Movie Campaign Hub...

REM Verificar que estamos en el directorio correcto
if not exist "package.json" (
    echo ❌ Error: No se encontró package.json. Ejecuta este script desde la raíz del proyecto.
    pause
    exit /b 1
)

REM Instalar dependencias
echo 📦 Instalando dependencias...
pnpm install

REM Verificar si existe .env.local
if not exist ".env.local" (
    echo ⚙️ Creando archivo de variables de entorno...
    copy env.example .env.local
    echo ✅ Archivo .env.local creado. Por favor, edítalo con tus valores reales.
) else (
    echo ✅ Archivo .env.local ya existe.
)

REM Construir contenido MDX
echo 📝 Construyendo contenido MDX...
pnpm contentlayer build

REM Verificar que las imágenes de ejemplo existen
if not exist "public\images" (
    echo 📁 Creando directorio de imágenes...
    mkdir public\images
)

REM Crear imágenes placeholder si no existen
echo 🖼️ Creando imágenes placeholder...
if not exist "public\images\hero-bg.jpg" (
    echo Creando imagen placeholder para hero...
    powershell -Command "Invoke-WebRequest -Uri 'https://picsum.photos/1920/1080' -OutFile 'public\images\hero-bg.jpg'"
)

if not exist "public\images\og-default.jpg" (
    echo Creando imagen placeholder para OpenGraph...
    powershell -Command "Invoke-WebRequest -Uri 'https://picsum.photos/1200/630' -OutFile 'public\images\og-default.jpg'"
)

if not exist "public\images\trailer-cover.jpg" (
    echo Creando imagen placeholder para tráiler...
    powershell -Command "Invoke-WebRequest -Uri 'https://picsum.photos/800/450' -OutFile 'public\images\trailer-cover.jpg'"
)

if not exist "public\images\making-of-cover.jpg" (
    echo Creando imagen placeholder para making-of...
    powershell -Command "Invoke-WebRequest -Uri 'https://picsum.photos/800/450' -OutFile 'public\images\making-of-cover.jpg'"
)

if not exist "public\images\poster-cover.jpg" (
    echo Creando imagen placeholder para poster...
    powershell -Command "Invoke-WebRequest -Uri 'https://picsum.photos/800/450' -OutFile 'public\images\poster-cover.jpg'"
)

REM Verificar configuración de Tailwind
if not exist "tailwind.config.ts" (
    echo 🎨 Configurando Tailwind CSS...
    pnpm dlx tailwindcss init -p
)

REM Verificar configuración de shadcn/ui
if not exist "components\ui" (
    echo 🎨 Configurando shadcn/ui...
    pnpm dlx shadcn-ui@latest init --yes
    pnpm dlx shadcn-ui@latest add button input textarea badge card
)

REM Ejecutar linting
echo 🔍 Ejecutando linting...
pnpm lint

REM Construir el proyecto para verificar que todo funciona
echo 🏗️ Construyendo proyecto...
pnpm build

if %errorlevel% equ 0 (
    echo.
    echo 🎉 ¡Configuración completada exitosamente!
    echo.
    echo 📋 Próximos pasos:
    echo 1. Edita .env.local con tus valores reales
    echo 2. Reemplaza las imágenes placeholder con contenido real
    echo 3. Personaliza el contenido MDX en content/
    echo 4. Ejecuta 'pnpm dev' para iniciar el servidor de desarrollo
    echo.
    echo 🚀 Para iniciar el servidor de desarrollo:
    echo    pnpm dev
    echo.
    echo 📚 Para más información, consulta el README.md
) else (
    echo ❌ Error durante la construcción. Revisa los errores arriba.
    pause
    exit /b 1
)

pause
