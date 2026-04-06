import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

type Body = {
  name: string
  email: string
  phone?: string
  message: string
  preferredDate?: string
  urgency?: string
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const sendViaBrevoApi = async ({
  apiKey,
  from,
  to,
  subject,
  html,
  text,
}: {
  apiKey: string
  from: string
  to: string
  subject: string
  html: string
  text: string
}) => {
  const resp = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'api-key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sender: { email: from, name: 'Dr. Idiong Office' },
      to: [{ email: to }],
      subject,
      htmlContent: html,
      textContent: text,
    }),
  })

  const data = await resp.json().catch(() => null)
  if (!resp.ok) {
    throw new Error(`Brevo API send failed (${resp.status}): ${JSON.stringify(data)}`)
  }

  return data
}

export async function POST(request: Request) {
  try {
    const body: Body = await request.json()

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ ok: false, error: 'Missing required fields: name, email, message' }, { status: 400 })
    }

    const safeName = escapeHtml(body.name)
    const safeEmail = escapeHtml(body.email)
    const safePhone = escapeHtml(body.phone || 'N/A')
    const safePreferredDate = escapeHtml(body.preferredDate || 'N/A')
    const safeUrgency = escapeHtml(body.urgency || 'N/A')
    const safeMessage = escapeHtml(body.message)

    const subject = `New booking request from ${body.name}`
    const adminHtml = `
      <h2>New booking request</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Phone:</strong> ${safePhone}</p>
      <p><strong>Preferred date:</strong> ${safePreferredDate}</p>
      <p><strong>Urgency:</strong> ${safeUrgency}</p>
      <h3>Message</h3>
      <p>${safeMessage}</p>
    `
    const adminText = `${body.name} (${body.email})\nPhone: ${body.phone || 'N/A'}\nPreferred date: ${body.preferredDate || 'N/A'}\nUrgency: ${body.urgency || 'N/A'}\n\n${body.message}`

    const confirmationSubject = 'Booking confirmation received - Dr. (Amb) Aniefiok Idiong'
    const confirmationHtml = `
      <h2>Booking Confirmation</h2>
      <p>Hello ${safeName},</p>
      <p>Thank you for contacting Dr. (Amb) Aniefiok Idiong. Your booking request has been received.</p>
      <p><strong>Submitted details:</strong></p>
      <ul>
        <li><strong>Email:</strong> ${safeEmail}</li>
        <li><strong>Phone:</strong> ${safePhone}</li>
        <li><strong>Preferred date:</strong> ${safePreferredDate}</li>
        <li><strong>Urgency:</strong> ${safeUrgency}</li>
      </ul>
      <p>Our team will contact you within 24 hours.</p>
      <p>Regards,<br/>Dr. Idiong's Office</p>
    `
    const confirmationText = `Hello ${body.name},\n\nThank you for contacting Dr. (Amb) Aniefiok Idiong. Your booking request has been received.\n\nSubmitted details:\nEmail: ${body.email}\nPhone: ${body.phone || 'N/A'}\nPreferred date: ${body.preferredDate || 'N/A'}\nUrgency: ${body.urgency || 'N/A'}\n\nOur team will contact you within 24 hours.\n\nRegards,\nDr. Idiong's Office`

    // Read SMTP credentials from env vars
    const host = process.env.SMTP_HOST || process.env.BREVO_SMTP_HOST || 'smtp-relay.brevo.com'
    const port = Number(process.env.SMTP_PORT || process.env.BREVO_SMTP_PORT || 587)
    const user = process.env.SMTP_USER || process.env.BREVO_SMTP_LOGIN
    const pass = process.env.SMTP_PASS || process.env.BREVO_SMTP_KEY || process.env.BREVO_API_KEY
    const to = process.env.TO_EMAIL || process.env.OFFICE_EMAIL || user
    const from = process.env.FROM_EMAIL || process.env.BREVO_FROM_EMAIL || user
    const mailtrapToken = process.env.MAILTRAP_API_TOKEN
    const brevoApiKey = process.env.BREVO_API_KEY || (pass?.startsWith('xkeysib-') ? pass : undefined)

    // If Mailtrap API token is provided, use Mailtrap HTTP API for sending
    if (mailtrapToken) {
      try {
        console.log('send-email: using Mailtrap API token to send email')
        const apiUrl = 'https://send.api.mailtrap.io/api/send'
        const payload = {
          from: { email: from || 'hello@mailtrap.io', name: 'Contact Form' },
          to: [{ email: process.env.TO_EMAIL || to }],
          subject,
          text: adminText,
          html: adminHtml,
        }

        const resp = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${mailtrapToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })

        const respJson = await resp.json().catch(() => null)
        if (!resp.ok) {
          console.error('Mailtrap API error', resp.status, respJson)
          return NextResponse.json({ ok: false, error: respJson || `Mailtrap API status ${resp.status}` }, { status: 500 })
        }

        console.log('send-email: Mailtrap API accepted message', respJson)
        return NextResponse.json({ ok: true, provider: 'mailtrap', resp: respJson })
      } catch (apiErr: any) {
        console.error('send-email Mailtrap API error:', apiErr)
        // fall through to SMTP/local fallback below
      }
    }

    if ((!host || !user || !pass) && !brevoApiKey) {
      // SMTP not configured — fall back to saving the request locally for testing
      console.warn('SMTP credentials missing, saving contact locally for testing', { host: !!host, port, user: !!user })
      try {
        const tmpDir = path.join(process.cwd(), 'tmp')
        await fs.mkdir(tmpDir, { recursive: true })
        const filePath = path.join(tmpDir, 'contacts.json')
        let existing: any[] = []
        try {
          const raw = await fs.readFile(filePath, 'utf8')
          existing = JSON.parse(raw || '[]')
        } catch (e) {
          existing = []
        }
        existing.push({
          receivedAt: new Date().toISOString(),
          body,
        })
        await fs.writeFile(filePath, JSON.stringify(existing, null, 2), 'utf8')
        return NextResponse.json({ ok: true, savedLocal: true, path: filePath })
      } catch (fsErr: any) {
        console.error('Fallback save error:', fsErr)
        return NextResponse.json({ ok: false, error: 'SMTP not configured and fallback save failed' }, { status: 500 })
      }
    }

    if ((!host || !user || !pass) && brevoApiKey && from && to) {
      console.log('send-email: SMTP incomplete, using Brevo API directly')
      const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('Mail send timed out')), 15000))
      await Promise.race([
        Promise.all([
          sendViaBrevoApi({
            apiKey: brevoApiKey,
            from,
            to,
            subject,
            html: adminHtml,
            text: adminText,
          }),
          sendViaBrevoApi({
            apiKey: brevoApiKey,
            from,
            to: body.email,
            subject: confirmationSubject,
            html: confirmationHtml,
            text: confirmationText,
          }),
        ]),
        timeout,
      ])

      return NextResponse.json({ ok: true, provider: 'brevo-api' })
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
      // avoid hanging forever on network issues
      connectionTimeout: 10000, // 10s
      greetingTimeout: 10000,
      socketTimeout: 15000,
    })

    try {
      console.log('send-email: transporter ready, sending booking notification to office', to)
      const officeMail = transporter.sendMail({
        from,
        to,
        subject,
        html: adminHtml,
        text: adminText,
      })

      const confirmationMail = transporter.sendMail({
        from,
        to: body.email,
        subject: confirmationSubject,
        html: confirmationHtml,
        text: confirmationText,
      })

      const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('Mail send timed out')), 15000))
      await Promise.race([Promise.all([officeMail, confirmationMail]), timeout])

      console.log('send-email: office notification and booking confirmation sent')
      return NextResponse.json({ ok: true, provider: 'smtp' })
    } catch (smtpErr: any) {
      const canFallbackToBrevo = Boolean(brevoApiKey && from && to)
      if (!canFallbackToBrevo) {
        throw smtpErr
      }

      console.warn('send-email: SMTP failed, falling back to Brevo API', smtpErr?.message || smtpErr)
      const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('Mail send timed out')), 15000))
      await Promise.race([
        Promise.all([
          sendViaBrevoApi({
            apiKey: brevoApiKey as string,
            from,
            to,
            subject,
            html: adminHtml,
            text: adminText,
          }),
          sendViaBrevoApi({
            apiKey: brevoApiKey as string,
            from,
            to: body.email,
            subject: confirmationSubject,
            html: confirmationHtml,
            text: confirmationText,
          }),
        ]),
        timeout,
      ])

      return NextResponse.json({ ok: true, provider: 'brevo-api', fallbackFrom: 'smtp' })
    }
  } catch (err: any) {
    console.error('send-email error:', err)
    return NextResponse.json({ ok: false, error: String(err?.message || err) }, { status: 500 })
  }
}
