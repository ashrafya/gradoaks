import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import FAQAccordion from './faq-accordion'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers to the most common questions about GradOaks orders, reps, shipping, and customisation.',
}

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold leading-none tracking-tight text-[var(--color-accent)] sm:text-6xl">
          FAQ
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-secondary)]">
          If something isn&apos;t answered here, reach out — we reply fast.
        </p>
      </div>

      {/* FAQs */}
      <FAQAccordion />

      {/* Footer nudge */}
      <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[var(--color-muted-fg)]">
          Still have a question?
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-secondary)] transition-colors duration-150 hover:text-[var(--color-fg)]"
          >
            See how it works <ArrowRight size={14} strokeWidth={2} />
          </Link>
          <Link
            href="/rep"
            className="inline-flex items-center gap-2 rounded-sm bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[var(--color-accent-hover)]"
          >
            Become a Rep
          </Link>
        </div>
      </div>
    </div>
  )
}
