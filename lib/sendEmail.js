import nodemailer from 'nodemailer'

const RESTAURANT_EMAIL = process.env.MAIL_TO || 'cafe.lovepier@gmail.com'

function smtpConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS
  )
}

async function sendViaSmtp({ subject, text, replyTo }) {
  const port = Number(process.env.SMTP_PORT || 587)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const from = process.env.MAIL_FROM || process.env.SMTP_USER

  await transporter.sendMail({
    from: `"Love Pier Website" <${from}>`,
    to: RESTAURANT_EMAIL,
    replyTo: replyTo || undefined,
    subject,
    text,
  })
}

/** FormSubmit delivers to the cafe inbox without SMTP credentials (free). */
async function sendViaFormSubmit({ subject, text, replyTo, fields = {} }) {
  const payload = {
    _subject: subject,
    _template: 'table',
    _captcha: 'false',
    _replyto: replyTo || '',
    Message: text,
    ...fields,
  }

  const res = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(RESTAURANT_EMAIL)}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    }
  )

  let data = {}
  try {
    data = await res.json()
  } catch {
    /* ignore parse errors */
  }

  if (!res.ok || data.success === false) {
    throw new Error('FORM_SUBMIT_FAILED')
  }
}

export async function sendRestaurantEmail({ subject, text, replyTo, fields }) {
  if (smtpConfigured()) {
    await sendViaSmtp({ subject, text, replyTo })
    return
  }

  await sendViaFormSubmit({ subject, text, replyTo, fields })
}
