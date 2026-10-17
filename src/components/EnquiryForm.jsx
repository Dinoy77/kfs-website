import { useState } from 'react'
import { programs } from '../data/programs.js'
import { whatsappLink } from '../data/site.js'

// No backend yet: the form builds a WhatsApp message with the details
// and opens it, so every enquiry still reaches the team.
export default function EnquiryForm({ defaultProgram = '' }) {
  const [form, setForm] = useState({ name: '', phone: '', program: defaultProgram, message: '' })
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const text = [
      'New enquiry from the website',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.program && `Interested in: ${form.program}`,
      form.message && `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(whatsappLink(text), '_blank', 'noopener')
  }

  return (
    <form className="enquiry" onSubmit={submit}>
      <label>
        Your name
        <input name="name" required autoComplete="name" value={form.name} onChange={update} />
      </label>
      <label>
        Phone number
        <input name="phone" required type="tel" autoComplete="tel" inputMode="tel" value={form.phone} onChange={update} />
      </label>
      <label>
        Program
        <select name="program" value={form.program} onChange={update}>
          <option value="">Not sure yet</option>
          <option>B-Pharm lateral entry scholarship</option>
          {programs.map((p) => <option key={p.slug}>{p.title}</option>)}
          <option>KEAM coaching</option>
          <option>NEET coaching</option>
        </select>
      </label>
      <label>
        <span>Message <span className="optional">(optional)</span></span>
        <textarea name="message" rows="3" value={form.message} onChange={update} />
      </label>
      <button className="btn btn-primary" type="submit">Send enquiry on WhatsApp</button>
      <p className="form-note">Opens WhatsApp with your details filled in. We reply during office hours.</p>
    </form>
  )
}
