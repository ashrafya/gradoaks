import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers to the most common questions about GradOaks orders, reps, shipping, and customisation.',
}

const sections = [
  {
    heading: 'Ordering',
    faqs: [
      {
        q: 'How big does my order need to be?',
        a: 'A minimum of 12 pieces per order. Most classes order between 60 and 120 items across a few products.',
      },
      {
        q: 'Can I order as an individual without a class rep?',
        a: 'Not currently. GradOaks is built around class group orders. If your school doesn\'t have a rep yet, applying takes about two minutes.',
      },
      {
        q: 'What if I miss the order deadline?',
        a: 'Orders close when your rep closes them. Late additions can sometimes be accommodated for a small rush fee — contact your rep first.',
      },
      {
        q: 'Can I mix products in one order?',
        a: 'Yes. Most classes order a combination of hoodies, crewnecks, and one or two accessories. The minimum applies to the total, not per product.',
      },
    ],
  },
  {
    heading: 'Design & Customisation',
    faqs: [
      {
        q: 'Do you do custom designs from scratch?',
        a: 'Yes. Many classes come to us with a rough concept and we refine it. There\'s no extra charge for design back-and-forth before production.',
      },
      {
        q: 'What file format do you need for class graphics?',
        a: 'Vector files (AI, EPS, SVG) are ideal. High-res PNG works too. Your rep\'s dashboard has a submission guide and we review everything before it goes to print.',
      },
      {
        q: 'Can we choose our own colours?',
        a: 'Within our available colourways, yes. Your rep\'s dashboard shows the full palette. If you\'re chasing something specific, reach out — we\'ll tell you what\'s possible.',
      },
      {
        q: 'Do all items in an order have to use the same design?',
        a: 'No. Different product types can carry different designs. The class hoodie and the class tee don\'t need to match.',
      },
    ],
  },
  {
    heading: 'Shipping & Delivery',
    faqs: [
      {
        q: 'How long does delivery take?',
        a: 'Three weeks from when the order closes. We build that deadline into the rep timeline so your class knows what to expect.',
      },
      {
        q: 'Where does the order ship?',
        a: 'Directly to your school. Every item is individually labelled with the student\'s name before it leaves our facility — your rep just hands them out.',
      },
      {
        q: 'Do you ship to individual addresses?',
        a: 'Not for class orders. One shipment, one school, one handout. It keeps things clean and ensures nobody\'s chasing down a package.',
      },
      {
        q: 'Do you ship outside Canada?',
        a: 'Not right now. We currently serve Canadian schools only.',
      },
    ],
  },
  {
    heading: 'Quality & Issues',
    faqs: [
      {
        q: 'What happens if something arrives wrong?',
        a: 'We fix it — no argument. Contact us within 7 days of delivery with a photo and we\'ll reprint and reship the affected items.',
      },
      {
        q: 'Are the items actually made in Canada?',
        a: 'Yes. Every piece is produced in Canada. We know who made it and how. That\'s not a marketing line — it\'s a requirement we hold ourselves to.',
      },
      {
        q: 'What\'s the quality like?',
        a: 'Our hoodies are 400gsm fleece with embroidered crests. Our crewnecks and tees are screen-printed to last. Every order goes through a quality inspection before it ships.',
      },
    ],
  },
  {
    heading: 'The Rep Program',
    faqs: [
      {
        q: 'Do I need sales experience to be a rep?',
        a: 'No. You\'re not cold-calling anyone — your classmates already want grad gear. You\'re just the person who makes it happen.',
      },
      {
        q: 'What does being a rep actually involve?',
        a: 'Setting up your school page, sharing the order link with your class, and collecting submissions. Most reps spend about two hours total.',
      },
      {
        q: 'How does rep commission work?',
        a: 'You earn a cut of every item your class orders. It\'s calculated when the order closes and sent to you directly once items ship.',
      },
      {
        q: 'Can there be more than one rep per school?',
        a: 'One rep per grad class per year. If your school already has one, reach out to them directly — or apply for next year\'s class.',
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 lg:px-8">
      {/* Header */}
      <div className="mb-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          FAQ
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold leading-none tracking-tight text-[var(--color-fg)] sm:text-6xl">
          GOT QUESTIONS.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-[var(--color-secondary)]">
          If something isn&apos;t answered here, reach out — we reply fast.
        </p>
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-20">
        {sections.map(({ heading, faqs }) => (
          <div key={heading}>
            <h2 className="mb-8 font-[family-name:var(--font-heading)] text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
              {heading}
            </h2>
            <dl className="flex flex-col">
              {faqs.map(({ q, a }, i) => (
                <div
                  key={q}
                  className="flex flex-col gap-2 py-7"
                  style={{
                    borderTop: '1px solid var(--color-border)',
                    ...(i === faqs.length - 1 ? { borderBottom: '1px solid var(--color-border)' } : {}),
                  }}
                >
                  <dt className="font-[family-name:var(--font-heading)] text-base font-semibold text-[var(--color-fg)]">
                    {q}
                  </dt>
                  <dd className="text-sm leading-relaxed text-[var(--color-muted-fg)]">{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      {/* Footer nudge */}
      <div className="mt-24 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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
