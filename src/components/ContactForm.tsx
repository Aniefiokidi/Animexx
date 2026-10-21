'use client'

import { useState } from 'react'

const empty = { name: '', phone: '', email: '', preferredDate: '', urgency: 'routine', message: '' }

// Sends to /api/send-email. Shows the result on the page instead of a browser alert.
export default function ContactForm() {
  const [form, setForm] = useState(empty)
  const [state, setState] = useState<{ kind: 'idle' | 'sending' | 'sent' | 'error'; text?: string }>({ kind: 'idle' })
  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setState({ kind: 'sending' })
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 15000)
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form), signal: controller.signal,
      })
      const json = await res.json().catch(() => null)
      if (!res.ok || !json?.ok || json?.savedLocal) throw new Error('not sent')
      setState({ kind: 'sent', text: `Thank you, ${form.name.split(' ')[0]}. Your message has been sent and the office will reply within one working day.` })
      setForm(empty)
    } catch {
      setState({ kind: 'error', text: 'Your message could not be sent. Please WhatsApp or call 0802 304 2500 instead.' })
    } finally {
      clearTimeout(timer)
    }
  }

  return (
    <form onSubmit={submit} className="grid content-start gap-5 rounded-2xl bg-white p-6 sm:p-8" style={{ border: '1px solid var(--line)' }}>
      <h3 className="text-2xl font-semibold">Send a message</h3>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="name">Full name</label>
          <input className="field" id="name" name="name" required autoComplete="name" value={form.name} onChange={set} />
        </div>
        <div>
          <label className="label" htmlFor="phone">Phone number</label>
          <input className="field" id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="080..." value={form.phone} onChange={set} />
        </div>
      </div>
      <div>
        <label className="label" htmlFor="email">Email</label>
        <input className="field" id="email" name="email" type="email" required autoComplete="email" value={form.email} onChange={set} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="preferredDate">Preferred date</label>
          <input className="field" id="preferredDate" name="preferredDate" type="date" value={form.preferredDate} onChange={set} />
        </div>
        <div>
          <label className="label" htmlFor="urgency">How soon?</label>
          <select className="field" id="urgency" name="urgency" value={form.urgency} onChange={set}>
            <option value="routine">Routine</option>
            <option value="urgent">This week</option>
            <option value="emergency">As soon as possible</option>
          </select>
        </div>
      </div>
      <div>
        <label className="label" htmlFor="message">How can we help?</label>
        <textarea className="field resize-y" id="message" name="message" rows={5} required value={form.message} onChange={set}
          placeholder="Tell us briefly what you would like to see the doctor about." />
      </div>
      <button type="submit" className="btn btn-red w-full py-4 text-base" disabled={state.kind === 'sending'}>
        {state.kind === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      {state.text && (
        <p role="status" className="rounded-lg p-3 text-sm" style={{ background: state.kind === 'sent' ? '#e8f5ee' : 'var(--red-wash)', color: state.kind === 'sent' ? '#0d5c32' : 'var(--red-dark)' }}>
          {state.text}
        </p>
      )}
      <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>Your details are private and used only to reply to you.</p>
    </form>
  )
}
