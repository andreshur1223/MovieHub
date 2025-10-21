# Script para desplegar a GitHub Pages
# Ejecutar: .\deploy-gh.ps1

Write-Host "🚀 Desplegando MovieHub a GitHub Pages..." -ForegroundColor Green

# Configurar variables de entorno
$env:NEXT_PUBLIC_BASE_PATH = "/MovieHub"
$env:NODE_ENV = "production"

Write-Host "📦 Construyendo proyecto..." -ForegroundColor Yellow
pnpm build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build exitoso" -ForegroundColor Green
    
    Write-Host "🌐 Desplegando a GitHub Pages..." -ForegroundColor Yellow
    pnpm deploy:gh
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "🎉 ¡Despliegue exitoso!" -ForegroundColor Green
        Write-Host "📍 URL: https://andreshur1223.github.io/MovieHub/" -ForegroundColor Cyan
        Write-Host "⏱️  Puede tardar 5-10 minutos en estar disponible" -ForegroundColor Yellow
    } else {
        Write-Host "❌ Error en el despliegue" -ForegroundColor Red
    }
} else {
    Write-Host "❌ Error en el build" -ForegroundColor Red
}
