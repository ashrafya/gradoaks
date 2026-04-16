'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitRepForm(formData: FormData) {
  const mode = formData.get('mode') as string
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string
  const school = formData.get('school') as string | null
  const city = formData.get('city') as string | null
  const gradYear = formData.get('gradYear') as string | null

  const subject = mode === 'rep'
    ? `New Rep Application — ${name} (${school ?? ''})`
    : `New Buyer Inquiry — ${name}`

  const body = mode === 'rep'
    ? `
<h2>New Rep Application</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>School:</strong> ${school}</p>
<p><strong>City & Province:</strong> ${city}</p>
<p><strong>Grad Year:</strong> ${gradYear}</p>
<p><strong>Message:</strong><br/>${message}</p>
`
    : `
<h2>New Buyer Inquiry</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong><br/>${message}</p>
`

  await resend.emails.send({
    from: 'GradOaks <onboarding@resend.dev>',
    to: 'yawar1ashraf@gmail.com',
    replyTo: email,
    subject,
    html: body,
  })
}
