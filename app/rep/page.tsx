import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, DollarSign, Clock, Headphones } from 'lucide-react'
import RepForm from './_components/RepForm'

export const metadata: Metadata = {
  title: 'Become a Rep',
  description: 'Run the grad gear order for your class. No experience needed — we set you up and you earn on every order.',
}

const perks = [
  {
    icon: DollarSign,
    title: 'You earn on every order',
    desc: 'A cut of every item your class orders goes straight to you. The bigger the class, the better it gets.',
  },
  {
    icon: Clock,
    title: 'About two hours of your time',
    desc: 'Set up your school page, share the link with your class, collect orders. That\'s genuinely it.',
  },
  {
    icon: Headphones,
    title: 'We\'re behind you the whole way',
    desc: 'A real person on our team is reachable whenever something comes up. No ticket queues.',
  },
  {
    icon: CheckCircle,
    title: 'Your own rep kit',
    desc: 'Every new rep gets a GradOaks hoodie, lanyard, and order guide with your name on it — shipped free.',
  },
]

const faqs = [
  {
    q: 'Do I need sales experience?',
    a: 'No. You\'re not cold-calling anyone — your classmates already want grad gear. You\'re just the person who makes it happen.',
  },
  {
    q: 'What does it actually cost me?',
    a: 'Nothing. There\'s no upfront cost, no inventory to buy, and no minimum you need to hit to keep the role.',
  },
  {
    q: 'How does payment work?',
    a: 'Your commission is calculated when the order closes and sent to you directly once items ship to your school.',
  },
  {
    q: 'Can more than one person be a rep for the same school?',
    a: 'One rep per grad class, per year. If your school already has one listed, reach out to them — or apply for next year.',
  },
  {
    q: 'What if my class wants something we don\'t see in the shop?',
    a: 'Talk to us. We work with classes on custom designs all the time. That\'s half the point.',
  },
]

export default function RepPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                Rep Program
              </p>
              <h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl font-bold leading-none tracking-tight text-[var(--color-fg)] sm:text-7xl">
                BE THE ONE WHO RUNS IT.
              </h1>
            </div>
            <p className="max-w-md text-base leading-relaxed text-[var(--color-secondary)]">
              Every grad class needs someone to sort the gear. As a GradOaks rep you get
              your own school page, a direct line to our team, and a commission on everything
              your class orders. No experience. No risk. Just your class, sorted.
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=85"
              alt="GradOaks student reps"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Perks grid */}
      <section
        style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
        className="bg-[var(--color-card)] py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
              What you get
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-semibold text-[var(--color-fg)]">
              Worth doing. Here&apos;s why.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {perks.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-5 rounded-sm bg-[var(--color-bg)] p-7"
                style={{ border: '1px solid var(--color-border)' }}
              >
                <div className="mt-0.5 shrink-0">
                  <Icon size={22} strokeWidth={1.5} className="text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-[var(--color-fg)]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-fg)]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply form */}
      <section
        style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
        className="bg-[var(--color-card)] py-24"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <RepForm />
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{ borderTop: '1px solid var(--color-border)' }}
        className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
      >
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            FAQ
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-semibold text-[var(--color-fg)]">
            Questions worth asking.
          </h2>
        </div>

        <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {faqs.map(({ q, a }) => (
            <div key={q} className="flex flex-col gap-2">
              <dt className="font-[family-name:var(--font-heading)] text-base font-semibold text-[var(--color-fg)]">
                {q}
              </dt>
              <dd className="text-sm leading-relaxed text-[var(--color-muted-fg)]">{a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  )
}
