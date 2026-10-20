import { useState } from 'react'
import { site, whatsappLink } from '../data/site.js'
import { contact } from '../data/home.js'

const icons = {
  pin: <path d="M12 2a7 7 0 0 0-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />,
  phone: <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />,
  mail: <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1 2.4V17h16V7.4l-8 5-8-5zM5.2 7 12 11.2 18.8 7H5.2z" />,
}

function InfoCard({ icon, title, children }) {
  return (
    <div className="ct-info">
      <span className="ct-info-icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">{icons[icon]}</svg>
      </span>
      <div className="ct-info-body">
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  )
}

// No backend yet: the form opens WhatsApp with the details filled in,
// so every enquiry still reaches the team.
function ContactForm() {
  const empty = { name: '', email: '', phone: '', option: '', message: '' }
  const [form, setForm] = useState(empty)
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const text = [
      'New enquiry from the website',
      `Name: ${form.name}`,
      form.email && `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      form.option && `Interested in: ${form.option}`,
      form.message && `Message: ${form.message}`,
    ].filter(Boolean).join('\n')
    window.open(whatsappLink(text), '_blank', 'noopener')
  }

  return (
    <form className="ct-form" onSubmit={submit}>
      <h3 className="ct-form-title">{contact.formTitle}</h3>
      <label htmlFor="ct-name">Your name</label>
      <input id="ct-name" name="name" required autoComplete="name" value={form.name} onChange={update} />

      <div className="ct-row">
        <div>
          <label htmlFor="ct-email">Your email <span className="ct-opt">(optional)</span></label>
          <input id="ct-email" name="email" type="email" autoComplete="email" value={form.email} onChange={update} />
        </div>
        <div>
          <label htmlFor="ct-phone">Contact number</label>
          <input id="ct-phone" name="phone" type="tel" inputMode="tel" required autoComplete="tel" value={form.phone} onChange={update} />
        </div>
      </div>

      <label htmlFor="ct-option">Interested in</label>
      <select id="ct-option" name="option" value={form.option} onChange={update}>
        <option value="">Select your option</option>
        {contact.options.map((o) => <option key={o}>{o}</option>)}
      </select>

      <label htmlFor="ct-message">Message <span className="ct-opt">(optional)</span></label>
      <textarea id="ct-message" name="message" rows="4" value={form.message} onChange={update} />

      <button type="submit" className="ct-submit">Send message</button>
      <p className="ct-note">Opens WhatsApp with your details filled in.</p>
    </form>
  )
}

export default function ContactSection() {
  return (
    <section className="ct" id="contact" aria-labelledby="ct-title">
      <div className="wrap">
        <div className="ct-head">
          <p className="ct-kicker">{contact.kicker}</p>
          <h2 id="ct-title" className="ct-title">{contact.title}</h2>
        </div>

        <div className="ct-infos">
          <InfoCard icon="pin" title="Address">
            <a href={site.address.mapUrl} target="_blank" rel="noreferrer">{contact.addressShort}</a>
          </InfoCard>
          <InfoCard icon="phone" title="Call us">
            <a href={`tel:${site.mobile.tel}`}>{site.mobile.display}</a>
          </InfoCard>
          <InfoCard icon="mail" title="Email us">
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </InfoCard>
        </div>

        <div className="ct-main">
          <div className="ct-map">
            <iframe
              title="Map to Kerala Finishing School"
              src={site.address.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a className="ct-map-link" href={site.address.mapUrl} target="_blank" rel="noreferrer">
              Open in Google Maps
            </a>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}