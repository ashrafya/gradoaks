import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      style={{ borderTop: '1px solid var(--color-border)' }}
      className="bg-[var(--color-bg)] mt-32"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-[family-name:var(--font-display)] text-xs font-bold uppercase tracking-widest text-[var(--color-fg)]">
              GradOaks
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted-fg)] max-w-xs">
              We&apos;re just getting started. Custom grad apparel, built around your class
              and made in Canada. We think it should be better than it usually is.
            </p>
          </div>

          {/* Shop */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted-fg)]">
              Shop
            </p>
            <ul className="mt-4 space-y-3">
              {[
                { label: 'All Products', href: '/shop' },
                { label: 'Hoodies', href: '/shop?category=Hoodies' },
                { label: 'Crewnecks', href: '/shop?category=Crewnecks' },
                { label: 'Jerseys', href: '/shop?category=Jerseys' },
                { label: 'Accessories', href: '/shop?category=Accessories' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-[var(--color-secondary)] transition-colors duration-150 hover:text-[var(--color-fg)] cursor-pointer"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted-fg)]">
              Company
            </p>
            <ul className="mt-4 space-y-3">
              {[
                { label: 'How It Works', href: '/how-it-works' },
                { label: 'Become a Rep', href: '/rep' },
                { label: 'Find Your School', href: '/schools' },
                { label: 'Contact', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-[var(--color-secondary)] transition-colors duration-150 hover:text-[var(--color-fg)] cursor-pointer"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{ borderTop: '1px solid var(--color-border)' }}
          className="mt-12 pt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-xs text-[var(--color-muted-fg)]">
            © {new Date().getFullYear()} GradOaks. All rights reserved.
          </p>
          <p className="text-xs text-[var(--color-muted-fg)]">
            Made in Canada. Built to last.
          </p>
        </div>
      </div>
    </footer>
  )
}
