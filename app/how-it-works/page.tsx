import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'One rep. One link. One order — sorted. Here\'s how GradOaks gets your class gear from idea to doorstep in three steps.',
}

const steps = [
  {
    num: '01',
    title: 'Find Your School',
    desc: 'Look up your school to see if a rep is already running an order — or claim the spot yourself. Takes about two minutes to get set up.',
    image: '/images/students-outside-school.png',
    imageAlt: 'Students outside their school in custom grad hoodies',
  },
  {
    num: '02',
    title: 'Lock In the Look',
    desc: 'Pick your styles, colours, and class design. Your rep gets a simple dashboard to collect everything from the class — we review it all before anything goes to print.',
    image: '/images/students-classroom.png',
    imageAlt: 'Students in classroom wearing custom grad gear',
  },
  {
    num: '03',
    title: 'It Shows Up',
    desc: 'Your full order arrives at school within 3 weeks, packed and labelled per person. Your rep hands them out. Done.',
    image: '/images/class-group-bleachers.png',
    imageAlt: 'Class group on bleachers in their grad hoodies',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            The Process
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl font-bold leading-none tracking-tight text-[var(--color-fg)] sm:text-7xl">
            THREE STEPS. DONE.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-[var(--color-secondary)]">
            One rep, one link, one order — your whole class sorted without a single group chat.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/rep"
              className="inline-flex items-center gap-2 rounded-sm bg-[var(--color-accent)] px-8 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-[var(--color-accent-hover)] cursor-pointer"
            >
              Start Your Order
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
            <Link
              href="/rep"
              className="inline-flex items-center gap-2 rounded-sm border border-[var(--color-border)] px-8 py-4 text-sm font-medium text-[var(--color-fg)] transition-all duration-200 hover:border-[var(--color-fg)] cursor-pointer"
            >
              Become a Rep
            </Link>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section style={{ borderTop: '1px solid var(--color-border)' }}>
        {steps.map(({ num, title, desc, image, imageAlt }, i) => (
          <div key={num} className="relative h-[90vh] min-h-[580px] overflow-hidden flex items-center">

            {/* Full-bleed background image */}
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="100vw"
            />

            {/* Dark gradient scrim — stronger on text side */}
            <div
              className="absolute inset-0"
              style={{
                background: i % 2 === 0
                  ? 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.1) 100%)'
                  : 'linear-gradient(to left, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.1) 100%)',
              }}
            />

            {/* Step number — massive watermark */}
            <span
              className="absolute font-[family-name:var(--font-display)] font-bold leading-none select-none pointer-events-none"
              style={{
                fontSize: 'clamp(160px, 22vw, 320px)',
                color: 'rgba(255,255,255,0.04)',
                top: '50%',
                transform: 'translateY(-50%)',
                ...(i % 2 === 0 ? { right: '2%' } : { left: '2%' }),
              }}
              aria-hidden="true"
            >
              {num}
            </span>

            {/* Text content */}
            <div
              className="relative mx-auto w-full max-w-7xl px-6 lg:px-8 flex"
              style={{ justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end' }}
            >
              <div className="max-w-md">
                {/* Step pill */}
                <div
                  className="inline-flex items-center gap-2 mb-6"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    borderRadius: 999,
                    padding: '6px 16px',
                  }}
                >
                  <span
                    className="flex items-center justify-center text-xs font-bold text-white"
                    style={{
                      width: 20, height: 20, borderRadius: 999,
                      background: 'var(--color-accent)',
                    }}
                  >
                    {parseInt(num)}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/70">
                    Step {num}
                  </span>
                </div>

                <h2 className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-white sm:text-5xl">
                  {title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/70">
                  {desc}
                </p>
              </div>
            </div>

          </div>
        ))}
      </section>

      {/* CTA */}
      <section
        style={{ borderTop: '1px solid var(--color-border)' }}
        className="py-32 text-center"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-5xl font-bold leading-none tracking-tight text-[var(--color-fg)] sm:text-6xl lg:text-7xl">
            READY WHEN YOU ARE.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base text-[var(--color-muted-fg)]">
            Orders ship directly to your school within 3 weeks. Minimum of 12 pieces per order.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/rep"
              className="inline-flex items-center gap-2 rounded-sm bg-[var(--color-accent)] px-10 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-[var(--color-accent-hover)] cursor-pointer"
            >
              Start Your Order
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
            <Link
              href="/rep"
              className="inline-flex items-center gap-2 rounded-sm border border-[var(--color-border)] px-10 py-4 text-sm font-medium text-[var(--color-fg)] transition-all duration-200 hover:border-[var(--color-fg)] cursor-pointer"
            >
              Become a Rep
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
