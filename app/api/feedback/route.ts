import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const feedbackSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido').max(100, 'El nombre es demasiado largo'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres').max(1000, 'El mensaje es demasiado largo'),
})

// Simple rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 5 // 5 requests per window

  const record = rateLimitStore.get(ip)
  
  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }
  
  if (record.count >= maxRequests) {
    return false
  }
  
  record.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { message: 'Demasiadas solicitudes. Inténtalo de nuevo en 15 minutos.' },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = feedbackSchema.parse(body)

    // Check if required environment variables are set
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY no está configurado')
      return NextResponse.json(
        { message: 'Error de configuración del servidor' },
        { status: 500 }
      )
    }

    if (!process.env.FEEDBACK_TO_EMAIL) {
      console.error('FEEDBACK_TO_EMAIL no está configurado')
      return NextResponse.json(
        { message: 'Error de configuración del servidor' },
        { status: 500 }
      )
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'MovieHub <noreply@midominio.com>',
      to: [process.env.FEEDBACK_TO_EMAIL],
      subject: `Nuevo feedback de ${validatedData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Nuevo Feedback - MovieHub
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Información del Usuario</h3>
            <p><strong>Nombre:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-ES')}</p>
            <p><strong>IP:</strong> ${ip}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Mensaje</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${validatedData.message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px;">
            <p>Este mensaje fue enviado desde el formulario de feedback de MovieHub.</p>
            <p>Para responder al usuario, utiliza el email: ${validatedData.email}</p>
          </div>
        </div>
      `,
      text: `
Nuevo Feedback - MovieHub

Información del Usuario:
- Nombre: ${validatedData.name}
- Email: ${validatedData.email}
- Fecha: ${new Date().toLocaleString('es-ES')}
- IP: ${ip}

Mensaje:
${validatedData.message}

---
Este mensaje fue enviado desde el formulario de feedback de MovieHub.
Para responder al usuario, utiliza el email: ${validatedData.email}
      `,
    })

    if (error) {
      console.error('Error enviando email:', error)
      return NextResponse.json(
        { message: 'Error al enviar el feedback. Inténtalo de nuevo.' },
        { status: 500 }
      )
    }

    console.log('Email enviado exitosamente:', data)

    return NextResponse.json(
      { message: 'Feedback enviado exitosamente', id: data?.id },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error en API feedback:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          message: 'Datos inválidos', 
          errors: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

// Handle preflight requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
