# 🚀 Guía de Despliegue en Vercel - MovieHub

## Configuración Inicial

### 1. Crear cuenta en Vercel
- Ve a [vercel.com](https://vercel.com)
- Inicia sesión con tu cuenta de GitHub
- Autoriza el acceso a tu repositorio

### 2. Importar proyecto
- Haz clic en "New Project"
- Selecciona "Import Git Repository"
- Busca y selecciona `andreshur1223/MovieHub`
- Haz clic en "Import"

### 3. Configuración del proyecto
Vercel detectará automáticamente:
- **Framework**: Next.js
- **Build Command**: `pnpm build`
- **Output Directory**: `.next`
- **Install Command**: `pnpm install`

### 4. Variables de entorno
En el dashboard de Vercel, ve a:
**Settings** → **Environment Variables**

Añade las siguientes variables:

| Variable | Valor | Descripción |
|----------|-------|-------------|
| `RESEND_API_KEY` | `re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` | Tu API key de Resend |
| `FEEDBACK_TO_EMAIL` | `tu_email@dominio.com` | Email donde recibir feedback |
| `SITE_URL` | `https://tu-proyecto.vercel.app` | URL de tu sitio |
| `NEXT_PUBLIC_ENV` | `prod` | Entorno de producción |

### 5. Desplegar
- Haz clic en "Deploy"
- Espera a que se complete el build (2-3 minutos)
- Tu sitio estará disponible en: `https://tu-proyecto.vercel.app`

## Configuración de Resend (Para el formulario de feedback)

### 1. Crear cuenta en Resend
- Ve a [resend.com](https://resend.com)
- Crea una cuenta gratuita
- Verifica tu email

### 2. Obtener API Key
- Ve a "API Keys" en el dashboard
- Crea una nueva API key
- Copia la key (empieza con `re_`)

### 3. Configurar dominio (Opcional)
- Ve a "Domains" en Resend
- Añade tu dominio personalizado
- Configura los registros DNS

## Actualizaciones Futuras

### Flujo de trabajo para actualizaciones:

1. **Hacer cambios localmente:**
   ```bash
   # Editar archivos
   # Probar cambios
   pnpm dev
   ```

2. **Commit y push:**
   ```bash
   git add .
   git commit -m "Descripción de los cambios"
   git push origin main
   ```

3. **Despliegue automático:**
   - Vercel detectará automáticamente los cambios
   - Iniciará un nuevo build
   - Desplegará la nueva versión

### Previews de desarrollo:
- Cada push a una rama diferente creará un preview
- Útil para probar cambios antes de desplegar a producción

## Configuración Avanzada

### Dominio personalizado:
1. Ve a **Settings** → **Domains** en Vercel
2. Añade tu dominio personalizado
3. Configura los DNS según las instrucciones
4. Actualiza `SITE_URL` en las variables de entorno

### Analytics (Futuro):
```bash
pnpm add @vercel/analytics
```

### Monitoreo:
- Vercel proporciona métricas automáticas
- Logs de funciones serverless
- Métricas de performance

## Troubleshooting

### Build falla:
- Verifica que todas las dependencias estén en `package.json`
- Revisa los logs de build en Vercel
- Asegúrate de que `pnpm` esté disponible

### Variables de entorno:
- Verifica que estén configuradas en Vercel
- Asegúrate de que los nombres coincidan exactamente
- Reinicia el deployment después de cambiar variables

### API no funciona:
- Verifica que `RESEND_API_KEY` esté configurada
- Revisa los logs de funciones en Vercel
- Asegúrate de que el endpoint esté correctamente configurado

## URLs Importantes

- **Repositorio**: https://github.com/andreshur1223/MovieHub
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Resend Dashboard**: https://resend.com/dashboard
- **Tu sitio**: `https://tu-proyecto.vercel.app`

## Soporte

Si tienes problemas:
1. Revisa los logs en Vercel Dashboard
2. Consulta la documentación de Vercel
3. Crea un issue en GitHub
4. Revisa el CHANGELOG.md para actualizaciones
