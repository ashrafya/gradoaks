'use client'

import { useState, useRef, useEffect } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'How big does my order need to be?',
    a: 'A minimum of 12 pieces per order. Most classes order between 60 and 120 items across a few products.',
  },
  {
    q: 'Can I order as an individual without a class rep?',
    a: "Not currently. GradOaks is built around class group orders. If your school doesn't have a rep yet, applying takes about two minutes.",
  },
  {
    q: 'Do you do custom designs from scratch?',
    a: "Yes. Many classes come to us with a rough concept and we refine it. There's no extra charge for design back-and-forth before production.",
  },
  {
    q: 'Can we choose our own colours?',
    a: "Within our available colourways, yes. Your rep's dashboard shows the full palette. If you're chasing something specific, reach out — we'll tell you what's possible.",
  },
  {
    q: 'How long does delivery take?',
    a: 'Three weeks from when the order closes. We build that deadline into the rep timeline so your class knows what to expect.',
  },
  {
    q: 'Where does the order ship?',
    a: "Directly to your school. Every item is individually labelled with the student's name before it leaves our facility — your rep just hands them out.",
  },
  {
    q: 'What happens if something arrives wrong?',
    a: "We fix it — no argument. Contact us within 7 days of delivery with a photo and we'll reprint and reship the affected items.",
  },
  {
    q: "What's the quality like?",
    a: 'Our hoodies are 400gsm fleece with embroidered crests. Our crewnecks and tees are screen-printed to last. Every order goes through a quality inspection before it ships.',
  },
  {
    q: 'How does rep commission work?',
    a: "You earn a cut of every item your class orders. It's calculated when the order closes and sent to you directly once items ship.",
  },
]

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0)
    }
  }, [isOpen])

  return (
    <div>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={isOpen}
      >
        <dt className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-fg)]">
          {q}
        </dt>
        <span
          className="ml-4 shrink-0 text-[var(--color-muted-fg)] transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          {isOpen ? <Minus size={16} strokeWidth={2} /> : <Plus size={16} strokeWidth={2} />}
        </span>
      </button>
      <div
        ref={contentRef}
        style={{ height, overflow: 'hidden', transition: 'height 280ms cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        <dd
          className="pb-5 text-base leading-relaxed text-[var(--color-muted-fg)]"
          style={{ opacity: isOpen ? 1 : 0, transition: 'opacity 200ms ease' }}
        >
          {a}
        </dd>
      </div>
    </div>
  )
}

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <dl className="flex flex-col">
      {faqs.map(({ q, a }, i) => (
        <div
          key={q}
          style={{
            borderTop: '1px solid var(--color-border)',
            ...(i === faqs.length - 1 ? { borderBottom: '1px solid var(--color-border)' } : {}),
          }}
        >
          <FAQItem
            q={q}
            a={a}
            isOpen={open === i}
            onToggle={() => setOpen(open === i ? null : i)}
          />
        </div>
      ))}
    </dl>
  )
}
