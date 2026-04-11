'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'FAQ', href: '/faq' },
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
        <div className="relative flex h-16 items-center justify-between md:justify-normal">
          {/* Left nav (desktop) */}
          <nav className="hidden w-full items-center gap-8 md:flex" aria-label="Main navigation">
            {links.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-150 ${
                  pathname.startsWith(link.href)
                    ? 'text-[var(--color-fg)]'
                    : 'text-[var(--color-muted-fg)] hover:text-[var(--color-fg)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Logo — centered absolutely on desktop, left-aligned on mobile */}
          <div className="md:absolute md:left-1/2 md:-translate-x-1/2">
            <Link href="/" className="transition-opacity duration-150 hover:opacity-60">
              <Image
                src="/images/gradoaks-logo.png"
                alt="GradOaks"
                width={40}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Right nav (desktop) */}
          <nav className="hidden w-full items-center justify-end gap-8 md:flex" aria-label="Main navigation">
            {links.slice(2).map((link) => (
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
            className="ml-auto flex items-center text-[var(--color-fg)] md:hidden cursor-pointer"
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
