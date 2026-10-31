import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner.jsx'
import { site } from '../data/site.js'
import './About.css'
import './Apply.css'

// Application form. Sends everything (with documents) to /submit-application.php,
// which emails it to the KFS team. The PHP file only works on the cPanel server,
// not on Vercel or localhost.

const ENDPOINT = '/submit-application.php'
const MAX_MB = 2
const COURSES = ['B Pharm', 'D Pharm', 'B Pharm Lateral Entry']
const APPLICATION_FEE = '₹1,000'

const FILES = [
  { name: 'photo', label: 'Candidate photo', hint: 'JPG or PNG, max 2 MB', accept: '.jpg,.jpeg,.png', types: ['jpg', 'jpeg', 'png'], required: true },
  { name: 'tenth', label: '10th certificate / marksheet', hint: 'PDF, JPG or PNG, max 2 MB', accept: '.pdf,.jpg,.jpeg,.png', types: ['pdf', 'jpg', 'jpeg', 'png'], required: true },
  { name: 'twelfth', label: '12th certificate / marksheet', hint: 'PDF, JPG or PNG, max 2 MB', accept: '.pdf,.jpg,.jpeg,.png', types: ['pdf', 'jpg', 'jpeg', 'png'], required: true },
  { name: 'scorecard', label: 'Entrance exam score card', hint: 'Upload if you have written an entrance exam. PDF, JPG or PNG, max 2 MB', accept: '.pdf,.jpg,.jpeg,.png', types: ['pdf', 'jpg', 'jpeg', 'png'], required: false },
]

// Order matters: the first field with a problem gets the focus
function validate(fd) {
  const v = (k) => String(fd.get(k) || '').trim()
  const e = {}
  if (!v('name')) e.name = 'Please enter your full name.'
  if (!v('dob')) e.dob = 'Please enter your date of birth.'
  if (!v('gender')) e.gender = 'Please select your gender.'
  if (!v('parent')) e.parent = 'Please enter your father / guardian name.'
  if (v('phone').replace(/\D/g, '').length < 10) e.phone = 'Please enter a valid 10-digit phone number.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v('email'))) e.email = 'Please enter a valid email address.'
  if (!v('address')) e.address = 'Please enter your address.'
  if (!v('city')) e.city = 'Please enter your city / district.'
  if (!v('state')) e.state = 'Please enter your state.'
  if (!v('course')) e.course = 'Please select a course.'
  for (const f of FILES) {
    const file = fd.get(f.name)
    const has = file && file.size > 0
    if (!has) {
      if (f.required) e[f.name] = `Please upload your ${f.label.toLowerCase()}.`
      continue
    }
    const ext = file.name.split('.').pop().toLowerCase()
    if (!f.types.includes(ext)) e[f.name] = `Only ${f.types.join(', ').toUpperCase()} files are allowed.`
    else if (file.size > MAX_MB * 1024 * 1024) e[f.name] = `This file is larger than ${MAX_MB} MB.`
  }
  return e
}

function Field({ id, label, required, error, hint, children }) {
  return (
    <div className={`af-field ${error ? 'has-error' : ''}`}>
      <label htmlFor={id}>{label}{required && <span aria-hidden="true"> *</span>}</label>
      {children}
      {hint && !error && <small id={`${id}-hint`}>{hint}</small>}
      {error && <small className="af-error" id={`${id}-error`}>{error}</small>}
    </div>
  )
}

export default function Apply() {
  const formRef = useRef(null)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | done | failed
  const [message, setMessage] = useState('')
  const [fileNames, setFileNames] = useState({})

  useEffect(() => {
    document.title = `Application Form | ${site.name}`
  }, [])

  // Props shared by every input: id, name, error state and its description
  const a = (name) => ({
    id: `af-${name}`,
    name,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `af-${name}-error` : undefined,
  })

  async function onSubmit(ev) {
    ev.preventDefault()
    const form = formRef.current
    const fd = new FormData(form)
    const e = validate(fd)
    setErrors(e)
    const first = Object.keys(e)[0]
    if (first) {
      form.elements[first]?.focus()
      return
    }

    setStatus('sending')
    setMessage('')
    try {
      fd.append('page', window.location.href)
      const res = await fetch(ENDPOINT, { method: 'POST', body: fd })
      const data = await res.json().catch(() => null)
      if (data && data.success) {
        setStatus('done')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setStatus('failed')
        setMessage((data && data.message) || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('failed')
      setMessage('Could not submit right now. Please check your internet connection and try again.')
    }
  }

  function onFile(ev) {
    const { name, files } = ev.target
    setFileNames((s) => ({ ...s, [name]: files[0]?.name || '' }))
    if (errors[name]) setErrors((s) => ({ ...s, [name]: undefined }))
  }

  if (status === 'done') {
    return (
      <>
        <PageBanner title="Application Form" crumb="Apply" />
        <section className="af">
          <div className="wrap af-done">
            <span className="af-done-icon" aria-hidden="true">
              <svg width="40" height="40" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <h2>Application submitted!</h2>
            <p>Thank you. We have received your application and documents. Our team will contact you shortly.</p>
            <p className="af-done-small">For any questions, call <a href={`tel:${site.mobile.tel}`}>{site.mobile.display}</a>.</p>
            <Link to="/" className="ap-btn ap-btn-red">Back to home</Link>
          </div>
        </section>
      </>
    )
  }

  const sending = status === 'sending'

  return (
    <>
      <PageBanner title="Application Form" crumb="Apply" />

      <section className="af">
        <div className="wrap af-grid">
          {/* Side info */}
          <aside className="af-side">
            <h2>Before you start</h2>
            <p>Keep these ready. Each file must be <b>PDF, JPG or PNG</b> and under <b>2 MB</b>.</p>
            <ul>
              <li>A recent passport-size photo</li>
              <li>10th certificate or marksheet</li>
              <li>12th certificate or marksheet</li>
              <li>Entrance exam score card (if any)</li>
            </ul>
            <div className="af-side-help">
              <p>Need help filling the form?</p>
              <a href={`tel:${site.mobile.tel}`}>Call {site.mobile.display}</a>
            </div>
          </aside>

          <form ref={formRef} className="af-form" onSubmit={onSubmit} noValidate encType="multipart/form-data">
            <p className="af-note">Fields marked <span>*</span> are compulsory.</p>

            <fieldset>
              <legend>Personal information</legend>
              <Field id="af-name" label="Full name" required error={errors.name}>
                <input type="text" maxLength={100} autoComplete="name" {...a('name')} />
              </Field>
              <div className="af-row">
                <Field id="af-dob" label="Date of birth" required error={errors.dob}>
                  <input type="date" {...a('dob')} />
                </Field>
                <Field id="af-gender" label="Gender" required error={errors.gender}>
                  <select defaultValue="" {...a('gender')}>
                    <option value="">Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </Field>
              </div>
              <Field id="af-parent" label="Father / guardian name" required error={errors.parent}>
                <input type="text" maxLength={100} {...a('parent')} />
              </Field>
              <div className="af-row">
                <Field id="af-phone" label="Phone number" required error={errors.phone}>
                  <input type="tel" maxLength={20} inputMode="tel" autoComplete="tel" {...a('phone')} />
                </Field>
                <Field id="af-email" label="Email" required error={errors.email}>
                  <input type="email" maxLength={120} autoComplete="email" {...a('email')} />
                </Field>
              </div>
              <Field id="af-address" label="Address" required error={errors.address}>
                <textarea maxLength={400} rows={3} autoComplete="street-address" {...a('address')} />
              </Field>
              <div className="af-row">
                <Field id="af-city" label="City / district" required error={errors.city}>
                  <input type="text" maxLength={60} autoComplete="address-level2" {...a('city')} />
                </Field>
                <Field id="af-state" label="State" required error={errors.state}>
                  <input type="text" maxLength={60} defaultValue="Kerala" autoComplete="address-level1" {...a('state')} />
                </Field>
              </div>
            </fieldset>

            <fieldset>
              <legend>Course</legend>
              <Field id="af-course" label="Course applying for" required error={errors.course}>
                <select defaultValue="" {...a('course')}>
                  <option value="">Select a course</option>
                  {COURSES.map((c) => <option key={c}>{c}</option>)}
                </select>
              </Field>
            </fieldset>

            <fieldset>
              <legend>Documents</legend>
              {FILES.map((f) => (
                <Field key={f.name} id={`af-${f.name}`} label={f.label} required={f.required} error={errors[f.name]} hint={f.hint}>
                  <div className="af-file">
                    <input type="file" accept={f.accept} onChange={onFile} {...a(f.name)} />
                    <span className="af-file-btn" aria-hidden="true">Choose file</span>
                    <span className="af-file-name" aria-hidden="true">{fileNames[f.name] || 'No file chosen'}</span>
                  </div>
                </Field>
              ))}
            </fieldset>

            <div className="af-fee">
              <span>Application fee</span>
              <strong>{APPLICATION_FEE}</strong>
              <small>Our team will share the payment details after you submit.</small>
            </div>

            {/* Hidden from people; spam bots fill it in */}
            <div className="af-hp" aria-hidden="true">
              <label>Leave this empty <input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
            </div>

            {Object.values(errors).some(Boolean) && (
              <p className="af-summary" role="alert">Please correct the highlighted fields.</p>
            )}
            {status === 'failed' && <p className="af-summary" role="alert">{message}</p>}

            <button type="submit" className="ap-btn ap-btn-red af-submit" disabled={sending}>
              {sending ? 'Submitting…' : 'Submit application'}
            </button>
            <p className="af-privacy">
              By submitting, you agree to our <Link to="/privacy-policy">Privacy Policy</Link>.
            </p>
          </form>
        </div>
      </section>
    </>
  )
}