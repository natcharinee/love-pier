import { sendRestaurantEmail } from '../../lib/sendEmail'

function pickString(value) {
  return typeof value === 'string' ? value.trim() : ''
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const subject = pickString(req.body?.subject)
  const name = pickString(req.body?.name)
  const email = pickString(req.body?.email)
  const phone = pickString(req.body?.phone)
  const company = pickString(req.body?.company)
  const message = pickString(req.body?.message)

  if (!subject || !name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const text = [
    'New message from Love Pier website (Contact form)',
    '',
    `Subject: ${subject}`,
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    company ? `Company: ${company}` : null,
    '',
    'Message:',
    message,
  ]
    .filter(Boolean)
    .join('\n')

  try {
    await sendRestaurantEmail({
      subject: `[Love Pier Contact] ${subject} — ${name}`,
      text,
      replyTo: email,
      fields: {
        Subject: subject,
        Name: name,
        Email: email,
        Phone: phone || '—',
        Company: company || '—',
      },
    })
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Contact email failed:', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
