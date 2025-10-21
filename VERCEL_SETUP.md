# 🚀 Configuración de Variables de Entorno en Vercel

## ❌ Error Actual
```
Error: Missing API key. Pass it to the constructor `new Resend("re_123")`
```

## ✅ Solución

### 1. **Obtener API Key de Resend**

1. Ve a [resend.com](https://resend.com)
2. Crea una cuenta o inicia sesión
3. Ve a **API Keys** en el dashboard
4. Haz clic en **Create API Key**
5. Dale un nombre (ej: "MovieHub Production")
6. Copia la API key (empieza con `re_`)

### 2. **Configurar Variables en Vercel**

1. Ve a tu proyecto en [vercel.com](https://vercel.com)
2. Haz clic en **Settings**
3. Ve a **Environment Variables**
4. Añade estas variables:

#### **Variables Requeridas:**

| Variable | Valor | Descripción |
|----------|-------|-------------|
| `RESEND_API_KEY` | `re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` | Tu API key de Resend |
| `FEEDBACK_TO_EMAIL` | `tu-email@dominio.com` | Email donde recibir feedback |
| `SITE_URL` | `https://tu-proyecto.vercel.app` | URL de tu sitio |
| `NEXT_PUBLIC_ENV` | `prod` | Entorno de producción |

### 3. **Configuración Paso a Paso**

#### **Paso 1: RESEND_API_KEY**
```
Name: RESEND_API_KEY
Value: re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Environment: Production, Preview, Development
```

#### **Paso 2: FEEDBACK_TO_EMAIL**
```
Name: FEEDBACK_TO_EMAIL
Value: marketing@tudominio.com
Environment: Production, Preview, Development
```

#### **Paso 3: SITE_URL**
```
Name: SITE_URL
Value: https://moviehub-tu-usuario.vercel.app
Environment: Production, Preview, Development
```

#### **Paso 4: NEXT_PUBLIC_ENV**
```
Name: NEXT_PUBLIC_ENV
Value: prod
Environment: Production, Preview, Development
```

### 4. **Redesplegar**

Después de añadir las variables:

1. Ve a **Deployments**
2. Haz clic en los **3 puntos** del último deployment
3. Selecciona **Redeploy**
4. O simplemente haz un nuevo push:
   ```bash
   git add .
   git commit -m "Fix Resend API key configuration"
   git push origin main
   ```

### 5. **Verificar Configuración**

Para verificar que las variables están configuradas:

1. Ve a **Settings** → **Environment Variables**
2. Deberías ver las 4 variables listadas
3. Haz clic en **View** para verificar los valores (sin mostrar la API key completa)

### 6. **Probar el Formulario**

1. Ve a tu sitio: `https://tu-proyecto.vercel.app/feedback`
2. Llena el formulario de feedback
3. Envía el mensaje
4. Verifica que recibes el email

## 🔧 Configuración Alternativa (Si no tienes Resend)

Si prefieres usar otro servicio de email, puedes:

### **Opción 1: EmailJS (Gratis)**
```bash
pnpm add @emailjs/browser
```

### **Opción 2: Nodemailer con Gmail**
```bash
pnpm add nodemailer
```

### **Opción 3: Deshabilitar temporalmente**
Modifica `app/api/feedback/route.ts` para devolver éxito sin enviar email:

```typescript
// Comentar estas líneas temporalmente:
// const resend = new Resend(process.env.RESEND_API_KEY)
// const { data, error } = await resend.emails.send({...})

// Y devolver éxito directamente:
return NextResponse.json(
  { message: 'Feedback recibido (modo demo)' },
  { status: 200 }
)
```

## 📧 Configuración de Dominio en Resend

Para usar un dominio personalizado:

1. Ve a **Domains** en Resend
2. Añade tu dominio
3. Configura los registros DNS
4. Usa el dominio en el `from` del email:
   ```typescript
   from: 'MovieHub <noreply@tudominio.com>'
   ```

## 🚨 Troubleshooting

### **Error: "Invalid API key"**
- Verifica que la API key empiece con `re_`
- Asegúrate de que no hay espacios extra
- Verifica que está configurada en el entorno correcto

### **Error: "Domain not verified"**
- Usa un email de dominio verificado
- O configura tu dominio en Resend

### **Error: "Rate limit exceeded"**
- Resend tiene límites de 100 emails/día en plan gratuito
- Considera actualizar el plan si necesitas más

## ✅ Checklist Final

- [ ] API key de Resend obtenida
- [ ] Variables configuradas en Vercel
- [ ] Deployment redeseado
- [ ] Formulario de feedback probado
- [ ] Email recibido correctamente

---

**¿Necesitas ayuda?** Revisa los logs de Vercel en **Functions** → **feedback** para más detalles del error.
