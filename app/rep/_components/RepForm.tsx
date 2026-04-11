'use client'

import { useState } from 'react'
import { ArrowUpRight, CheckCircle } from 'lucide-react'

type Mode = 'buyer' | 'rep'

export default function RepForm() {
  const [mode, setMode] = useState<Mode>('buyer')
  const [values, setValues] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  function set(id: string, val: string) {
    setValues((p) => ({ ...p, [id]: val }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-8 py-24 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-accent)]/10">
          <CheckCircle size={40} strokeWidth={1.5} className="text-[var(--color-accent)]" />
        </div>
        <div>
          <h3 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-fg)]">
            Got it.
          </h3>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[var(--color-secondary)]">
            We&apos;ll reach out to{' '}
            <span className="font-semibold text-[var(--color-fg)]">{values.email}</span>{' '}
            within 2 business days.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-10">
      {/* Heading */}
      <div className="text-center">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-fg)] sm:text-4xl">
          WE&apos;RE ALWAYS{' '}
          <span className="text-[var(--color-accent)]">HAPPY TO HEAR FROM YOU</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[var(--color-secondary)]">
          Use this form to get in touch, and someone from our team will get back to you asap.
        </p>
        <p className="mt-3 text-sm text-[var(--color-secondary)]">
          You can also give us a ring at:{' '}
          <a href="tel:18559054723" className="font-semibold text-[var(--color-fg)] hover:text-[var(--color-accent)] transition-colors">
            1-855-905-GRAD (1-855-905-4723)
          </a>
        </p>
      </div>

      {/* Toggle */}
      <div className="flex items-center gap-4">
        <span
          className="text-sm font-bold uppercase tracking-widest cursor-pointer transition-colors duration-150"
          style={{ color: mode === 'buyer' ? 'var(--color-accent)' : 'var(--color-muted-fg)' }}
          onClick={() => setMode('buyer')}
        >
          Buyer
        </span>
        <button
          type="button"
          onClick={() => setMode(mode === 'buyer' ? 'rep' : 'buyer')}
          className="relative h-7 w-14 rounded-full transition-colors duration-300 cursor-pointer focus:outline-none"
          style={{ backgroundColor: 'var(--color-accent)' }}
          aria-label="Toggle between buyer and rep"
        >
          <span
            className="absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-transform duration-300"
            style={{ left: 4, transform: mode === 'rep' ? 'translateX(28px)' : 'translateX(0)' }}
          />
        </button>
        <span
          className="text-sm font-bold uppercase tracking-widest cursor-pointer transition-colors duration-150"
          style={{ color: mode === 'rep' ? 'var(--color-accent)' : 'var(--color-muted-fg)' }}
          onClick={() => setMode('rep')}
        >
          Rep
        </span>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        {/* Row 1: Name / Email / Phone */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <input
            type="text"
            placeholder="Name"
            required
            value={values.name ?? ''}
            onChange={(e) => set('name', e.target.value)}
            className="rounded-sm bg-[var(--color-muted)] px-6 py-5 text-sm text-[var(--color-fg)] placeholder:text-[var(--color-secondary)] outline-none transition-colors duration-150 focus:bg-[var(--color-border)]"
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={values.email ?? ''}
            onChange={(e) => set('email', e.target.value)}
            className="rounded-sm bg-[var(--color-muted)] px-6 py-5 text-sm text-[var(--color-fg)] placeholder:text-[var(--color-secondary)] outline-none transition-colors duration-150 focus:bg-[var(--color-border)]"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={values.phone ?? ''}
            onChange={(e) => set('phone', e.target.value)}
            className="rounded-sm bg-[var(--color-muted)] px-6 py-5 text-sm text-[var(--color-fg)] placeholder:text-[var(--color-secondary)] outline-none transition-colors duration-150 focus:bg-[var(--color-border)]"
          />
        </div>

        {/* Rep-only extra fields */}
        {mode === 'rep' && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <input
              type="text"
              placeholder="School Name"
              required
              value={values.school ?? ''}
              onChange={(e) => set('school', e.target.value)}
              className="rounded-sm bg-[var(--color-muted)] px-6 py-5 text-sm text-[var(--color-fg)] placeholder:text-[var(--color-secondary)] outline-none transition-colors duration-150 focus:bg-[var(--color-border)]"
            />
            <input
              type="text"
              placeholder="City & Province"
              required
              value={values.city ?? ''}
              onChange={(e) => set('city', e.target.value)}
              className="rounded-sm bg-[var(--color-muted)] px-6 py-5 text-sm text-[var(--color-fg)] placeholder:text-[var(--color-secondary)] outline-none transition-colors duration-150 focus:bg-[var(--color-border)]"
            />
            <input
              type="text"
              placeholder="Grad Year"
              required
              value={values.gradYear ?? ''}
              onChange={(e) => set('gradYear', e.target.value)}
              className="rounded-sm bg-[var(--color-muted)] px-6 py-5 text-sm text-[var(--color-fg)] placeholder:text-[var(--color-secondary)] outline-none transition-colors duration-150 focus:bg-[var(--color-border)]"
            />
          </div>
        )}

        {/* Message */}
        <textarea
          placeholder="Message"
          rows={6}
          value={values.message ?? ''}
          onChange={(e) => set('message', e.target.value)}
          className="w-full resize-none rounded-sm bg-[var(--color-muted)] px-6 py-5 text-sm text-[var(--color-fg)] placeholder:text-[var(--color-secondary)] outline-none transition-colors duration-150 focus:bg-[var(--color-border)]"
        />

        {/* Submit */}
        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-3 rounded-sm bg-[var(--color-accent)] py-5 text-sm font-bold uppercase tracking-widest text-white transition-all duration-200 hover:bg-[var(--color-accent-hover)] cursor-pointer"
        >
          Submit
          <ArrowUpRight size={18} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </form>
    </div>
  )
}
