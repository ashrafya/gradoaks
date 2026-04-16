import type { Metadata } from 'next'
import { DollarSign, Clock, Headphones, CheckCircle } from 'lucide-react'
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


export default function RepPage() {
  return (
    <>
      {/* Apply form */}
      <section
        style={{ borderBottom: '1px solid var(--color-border)' }}
        className="bg-[var(--color-bg)] py-24"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <RepForm />
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
            <h2 className="mt-2 font-[family-name:var(--font-heading)] text-4xl font-semibold text-[var(--color-fg)] sm:text-5xl">
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
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-fg)]">
                    {title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-[var(--color-muted-fg)]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
