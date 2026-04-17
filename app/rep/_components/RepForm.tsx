'use client'

import { useState } from 'react'
import { ArrowUpRight, CheckCircle } from 'lucide-react'
import { FORMSPREE_ID } from '../../config'

type Mode = 'buyer' | 'rep'

const inputClass =
  'w-full rounded-xl bg-white/60 px-6 py-5 text-base text-[var(--color-fg)] placeholder:text-[var(--color-secondary)] outline-none border border-[var(--color-border)] transition-all duration-150 focus:bg-white focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_rgba(62,140,181,0.12)]'

export default function RepForm() {
  const [mode, setMode] = useState<Mode>('buyer')
  const [values, setValues] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function set(id: string, val: string) {
    setValues((p) => ({ ...p, [id]: val }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.currentTarget)
    formData.set('mode', mode)
    await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    })
    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-8 py-32 text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[var(--color-accent)]/10">
          <CheckCircle size={48} strokeWidth={1.5} className="text-[var(--color-accent)]" />
        </div>
        <div>
          <h3 className="font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--color-fg)]">
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
    <div
      className="relative overflow-hidden rounded-3xl p-10 sm:p-16"
      style={{
        background: 'linear-gradient(135deg, #e8f0f7 0%, #f5f0ea 60%, #e4ecf0 100%)',
        border: '1px solid rgba(255,255,255,0.7)',
        boxShadow: '0 32px 80px rgba(0,0,0,0.08)',
      }}
    >
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(62,140,181,0.35) 0%, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(62,140,181,0.4) 0%, transparent 70%)' }}
      />

      <div className="relative flex flex-col gap-10">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">Get in Touch</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--color-fg)] sm:text-5xl lg:text-6xl">
            WE&apos;RE ALWAYS{' '}
            <span className="text-[var(--color-accent)]">HAPPY TO HEAR FROM YOU</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-[var(--color-secondary)]">
            Use this form to get in touch — someone from our team will get back to you within 2 business days.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-5">
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
            className="relative h-8 w-16 rounded-full transition-colors duration-300 cursor-pointer focus:outline-none shadow-inner"
            style={{ backgroundColor: 'var(--color-accent)' }}
            aria-label="Toggle between buyer and rep"
          >
            <span
              className="absolute top-1.5 h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-300"
              style={{ left: 5, transform: mode === 'rep' ? 'translateX(30px)' : 'translateX(0)' }}
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Row 1: Name / Email */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={values.name ?? ''}
              onChange={(e) => set('name', e.target.value)}
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={values.email ?? ''}
              onChange={(e) => set('email', e.target.value)}
              className={inputClass}
            />
          </div>

          {/* Rep-only extra fields */}
          {mode === 'rep' && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <input
                type="text"
                name="school"
                placeholder="School Name"
                required
                value={values.school ?? ''}
                onChange={(e) => set('school', e.target.value)}
                className={inputClass}
              />
              <input
                type="text"
                name="city"
                placeholder="City & Province"
                required
                value={values.city ?? ''}
                onChange={(e) => set('city', e.target.value)}
                className={inputClass}
              />
              <input
                type="text"
                name="gradYear"
                placeholder="Grad Year"
                required
                value={values.gradYear ?? ''}
                onChange={(e) => set('gradYear', e.target.value)}
                className={inputClass}
              />
            </div>
          )}

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message"
            rows={6}
            value={values.message ?? ''}
            onChange={(e) => set('message', e.target.value)}
            className={`${inputClass} resize-none`}
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="group mt-2 flex w-full items-center justify-center gap-3 rounded-xl bg-[var(--color-accent)] py-6 text-base font-bold uppercase tracking-widest text-white transition-all duration-200 hover:bg-[var(--color-accent-hover)] shadow-lg hover:shadow-xl cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending…' : 'Submit'}
            {!loading && <ArrowUpRight size={20} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
          </button>
        </form>
      </div>
    </div>
  )
}
