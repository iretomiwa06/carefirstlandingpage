import { useState } from 'react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { services } from '../data'

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

const info = [
  { icon: 'pin', title: 'Visit us', text: '14 Wellness Avenue, Lagos' },
  { icon: 'phone', title: 'Call us', text: '0800-000-0000 (24/7 emergency)' },
  { icon: 'mail', title: 'Email', text: 'care@carefirst.example' },
  { icon: 'clock', title: 'Opening hours', text: 'Clinics Mon – Sat, 8am – 6pm. Emergency 24 hours.' },
]

const empty = { name: '', email: '', phone: '', department: '', date: '', message: '' }
const today = new Date().toISOString().split('T')[0]

function validate(v) {
  const errors = {}
  if (!v.name.trim()) errors.name = 'Please enter your name'
  if (!/^\S+@\S+\.\S+$/.test(v.email)) errors.email = 'Enter a valid email address'
  if (v.phone && !/^[+\d\s()-]{7,}$/.test(v.phone)) errors.phone = 'Enter a valid phone number'
  if (!v.message.trim()) errors.message = 'Tell us how we can help'
  return errors
}

function Field({ label, name, error, children }) {
  return (
    <div className={`field ${error ? 'invalid' : ''}`}>
      <label htmlFor={name}>{label}</label>
      {children}
      {error && <span className="error" role="alert">{error}</span>}
    </div>
  )
}

function Contact() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [submitError, setSubmitError] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setSending(true)
    setSubmitError('')
    try {
      const body = new FormData()
      body.append('access_key', ACCESS_KEY)
      body.append('subject', `New appointment request from ${values.name}`)
      body.append('from_name', 'CareFirst Website')
      Object.entries(values).forEach(([key, value]) => body.append(key, value))

      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body })
      const data = await res.json()
      if (data.success) {
        setSent(true)
      } else {
        setSubmitError(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setSubmitError('Could not send your request. Check your connection and try again.')
    } finally {
      setSending(false)
    }
  }

  function reset() {
    setValues(empty)
    setErrors({})
    setSubmitError('')
    setSent(false)
  }

  return (
    <>
      <PageHero
        title="Contact & Appointments"
        subtitle="Send us a message or request an appointment and we will get back to you quickly."
      />
      <section className="section">
        <div className="container contact-grid">
          <div className="info-list">
            {info.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="card info-card">
                  <span className="icon-bubble sm"><Icon name={item.icon} size={22} /></span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="card form-card">
              {sent ? (
                <div className="success">
                  <svg className="tick" viewBox="0 0 52 52" width="72" height="72" aria-hidden="true">
                    <circle cx="26" cy="26" r="25" fill="none" stroke="#14b8a6" strokeWidth="2" />
                    <path d="M15 27l8 8 14-16" fill="none" stroke="#14b8a6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h2>Request received</h2>
                  <p>Thank you, {values.name.split(' ')[0]}. We have your request and will get back to you soon.</p>
                  <button type="button" className="btn btn-ghost" onClick={reset}>Send another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h2>Request an appointment</h2>
                  <Field label="Full name" name="name" error={errors.name}>
                    <input id="name" name="name" value={values.name} onChange={handleChange} placeholder="Your full name" autoComplete="name" />
                  </Field>
                  <div className="row">
                    <Field label="Email" name="email" error={errors.email}>
                      <input id="email" name="email" type="email" value={values.email} onChange={handleChange} placeholder="you@example.com" autoComplete="email" />
                    </Field>
                    <Field label="Phone (optional)" name="phone" error={errors.phone}>
                      <input id="phone" name="phone" type="tel" value={values.phone} onChange={handleChange} placeholder="0800 000 0000" autoComplete="tel" />
                    </Field>
                  </div>
                  <div className="row">
                    <Field label="Department" name="department">
                      <select id="department" name="department" value={values.department} onChange={handleChange}>
                        <option value="">Choose a department</option>
                        {services.map((s) => (
                          <option key={s.name} value={s.name}>{s.name}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Preferred date" name="date">
                      <input id="date" name="date" type="date" min={today} value={values.date} onChange={handleChange} />
                    </Field>
                  </div>
                  <Field label="How can we help?" name="message" error={errors.message}>
                    <textarea id="message" name="message" rows="4" value={values.message} onChange={handleChange} placeholder="Tell us a little about what you need" />
                  </Field>
                  {submitError && (
                    <p className="error" role="alert" style={{ marginBottom: '1rem' }}>{submitError}</p>
                  )}
                  <button className="btn" type="submit" disabled={sending}>
                    {sending ? 'Sending...' : <>Send request <Icon name="arrow" size={18} /></>}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default Contact