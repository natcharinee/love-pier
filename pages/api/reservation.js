import { sendRestaurantEmail } from '../../lib/sendEmail'

function pickString(value) {
  return typeof value === 'string' ? value.trim() : ''
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const name = pickString(req.body?.name)
  const phone = pickString(req.body?.phone)
  const email = pickString(req.body?.email)
  const date = pickString(req.body?.date)
  const time = pickString(req.body?.time)
  const guests = pickString(req.body?.guests)
  const seating = pickString(req.body?.seating)
  const occasion = pickString(req.body?.occasion)
  const notes = pickString(req.body?.notes)

  if (!name || !phone || !email || !date || !time || !guests) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const text = [
    'New reservation request from Love Pier website',
    '',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Date: ${date}`,
    `Time: ${time}`,
    `Guests: ${guests}`,
    `Seating: ${seating || '—'}`,
    `Occasion: ${occasion || '—'}`,
    notes ? '' : null,
    notes ? 'Notes:' : null,
    notes || null,
  ]
    .filter((line) => line !== null)
    .join('\n')

  try {
    await sendRestaurantEmail({
      subject: `[Love Pier Reservation] ${date} ${time} — ${name}`,
      text,
      replyTo: email,
      fields: {
        Name: name,
        Phone: phone,
        Email: email,
        Date: date,
        Time: time,
        Guests: guests,
        Seating: seating || '—',
        Occasion: occasion || '—',
      },
    })
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Reservation email failed:', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
