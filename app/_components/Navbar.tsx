'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { label: 'Shop', href: '/shop' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Become a Rep', href: '/rep', highlight: true },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      style={{ borderBottom: '1px solid var(--color-border)' }}
      className="sticky top-0 z-50 bg-[var(--color-bg)] backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-widest text-[var(--color-fg)] transition-opacity duration-150 hover:opacity-60"
          >
            GradOaks
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  link.highlight
                    ? 'rounded-sm bg-[var(--color-accent)] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-150 hover:bg-[var(--color-accent-hover)]'
                    : `text-sm font-medium tracking-wide transition-colors duration-150 ${
                        pathname.startsWith(link.href)
                          ? 'text-[var(--color-fg)]'
                          : 'text-[var(--color-muted-fg)] hover:text-[var(--color-fg)]'
                      }`
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="flex items-center text-[var(--color-fg)] md:hidden cursor-pointer"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{ borderTop: '1px solid var(--color-border)' }}
          className="bg-[var(--color-bg)] px-6 pb-6 pt-4 md:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={
                  link.highlight
                    ? 'text-base font-semibold text-[var(--color-accent)]'
                    : `text-base font-medium transition-colors duration-150 ${
                        pathname.startsWith(link.href)
                          ? 'text-[var(--color-fg)]'
                          : 'text-[var(--color-muted-fg)] hover:text-[var(--color-fg)]'
                      }`
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
