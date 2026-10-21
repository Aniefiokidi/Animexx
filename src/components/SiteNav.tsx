'use client'

import { useState } from 'react'
import { CONTACT } from './contact-details'

const links = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Qualifications', href: '#qualifications' },
  { name: 'Contact', href: '#contact' },
]

export default function SiteNav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur" style={{ borderBottom: '1px solid var(--line)' }}>
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-3" aria-label="Animexx Nigeria Limited, back to top">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="" width={46} height={32} className="h-8 w-auto" />
          <span className="text-sm font-bold uppercase tracking-[0.08em]" style={{ color: 'var(--ink)' }}>Animexx</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[15px] font-medium hover:underline hover:underline-offset-4" style={{ color: 'var(--ink)' }}>{l.name}</a>
          ))}
          <a href={CONTACT.primary.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-red px-5 py-2 text-sm">Book now</a>
        </nav>
        <button
          type="button"
          className="rounded-md p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" className="wrap grid gap-1 pb-4 md:hidden" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-3 text-base font-medium" style={{ color: 'var(--ink)' }}>{l.name}</a>
          ))}
          <a href={CONTACT.primary.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-red mt-2">Book on WhatsApp</a>
        </nav>
      )}
    </header>
  )
}
