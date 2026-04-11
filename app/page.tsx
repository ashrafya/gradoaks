'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { ArrowRight, Users, School, MapPin } from 'lucide-react'

export default function HomePage() {
  const sectionRef = useRef<HTMLElement>(null)
  const img1Ref = useRef<HTMLDivElement>(null)
  const img2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      const progress = -rect.top / (rect.height + window.innerHeight)
      const p = Math.max(0, Math.min(1, progress))
      if (img1Ref.current) img1Ref.current.style.transform = `translateY(${p * -80}px)`
      if (img2Ref.current) img2Ref.current.style.transform = `translateY(${p * -130}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-bg)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid min-h-[88dvh] grid-cols-1 items-center gap-12 py-28 lg:grid-cols-2">
            {/* Text */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                  Class of 2026
                </p>
                <h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl font-bold leading-none tracking-tight text-[var(--color-fg)] sm:text-7xl lg:text-8xl">
                  GEAR UP. STAND OUT.
                </h1>
              </div>
              <p className="max-w-md text-base leading-relaxed text-[var(--color-secondary)]">
                GradOaks makes custom graduation apparel worth keeping — not just wearing once.
                Student-led, Canadian-made, and built around your class from day one.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
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

            {/* Hero image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm lg:aspect-auto lg:h-[70dvh]">
              <Image
                src="/images/student-hallway-locker.png"
                alt="GradOaks — premium custom graduation apparel"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div
        className="overflow-hidden bg-[var(--color-accent)] py-6"
        aria-hidden="true"
      >
        <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="mx-8 text-xs font-medium uppercase tracking-widest text-white">
              Proudly Canadian-Made &nbsp;·&nbsp; Custom Embroidery &nbsp;·&nbsp; Student-Led Ordering &nbsp;·&nbsp; Ships to Your School
            </span>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 text-center">
          {[
            { icon: Users, stat: '300+', label: 'Graduates Outfitted So Far' },
            { icon: School, stat: '12', label: 'Schools in Our First Season' },
            { icon: MapPin, stat: '100%', label: 'Canadian-Made' },
          ].map(({ icon: Icon, stat, label }) => (
            <div key={label} className="flex flex-col items-center gap-3">
              <Icon size={28} strokeWidth={1.5} className="text-[var(--color-accent)]" />
              <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--color-fg)]">
                {stat}
              </p>
              <p className="text-sm text-[var(--color-muted-fg)] uppercase tracking-wider font-medium">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials — scattered collage */}
      <section
        style={{ borderTop: '1px solid var(--color-border)', background: 'linear-gradient(135deg, #e8f0f7 0%, #f0ebe4 50%, #e4ecf0 100%)' }}
        className="py-28 overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Heading */}
          <div className="mb-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
              Early Reviews
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-heading)] text-4xl font-semibold text-[var(--color-fg)]">
              From the first classes to wear it.
            </h2>
          </div>

          {/* Collage — absolutely positioned cards inside a fixed-height canvas */}
          <div className="relative w-full h-[780px]">

            {/* Card A — tall photo, far left, starts high */}
            <div
              className="absolute overflow-hidden shadow-xl"
              style={{ left: '0%', top: '0px', width: '22%', height: '420px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.5)' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80"
                alt="Grad group"
                fill
                className="object-cover"
                sizes="22vw"
              />
              {/* glass shine overlay */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%)', pointerEvents: 'none' }} />
            </div>

            {/* Card B — wide photo, left-center, lower start */}
            <div
              className="absolute overflow-hidden shadow-lg"
              style={{ left: '3%', top: '450px', width: '34%', height: '280px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.5)' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
                alt="Graduation ceremony"
                fill
                className="object-cover object-top"
                sizes="34vw"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, transparent 60%)', pointerEvents: 'none' }} />
            </div>

            {/* Card C — frosted glass quote card, accent tint, mid-left */}
            <div
              className="absolute flex flex-col justify-between p-7 shadow-2xl"
              style={{
                left: '24%', top: '60px', width: '26%', height: '300px', zIndex: 10,
                borderRadius: '24px',
                background: 'rgba(62, 140, 181, 0.55)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                border: '1px solid rgba(255,255,255,0.35)',
                boxShadow: '0 8px 32px rgba(62,140,181,0.25), inset 0 1px 0 rgba(255,255,255,0.3)',
              }}
            >
              <span
                className="font-[family-name:var(--font-heading)] text-6xl leading-none text-white/25 select-none"
                aria-hidden="true"
              >&ldquo;</span>
              <div>
                <p className="text-base italic leading-snug text-white drop-shadow-sm">
                  Everyone in our grade actually wears theirs. We almost went with someone else — glad we didn&apos;t.
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-white/70">
                  Alex R. &mdash; Calgary, Class of 2025
                </p>
              </div>
            </div>

            {/* Card D — square photo, center, dips down */}
            <div
              className="absolute overflow-hidden shadow-xl"
              style={{ left: '27%', top: '390px', width: '22%', height: '360px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.5)' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=500&q=80"
                alt="Grad hoodie"
                fill
                className="object-cover"
                sizes="22vw"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, transparent 60%)', pointerEvents: 'none' }} />
            </div>

            {/* Card E — frosted glass dark quote card, right-center, high up */}
            <div
              className="absolute flex flex-col justify-between p-7 shadow-2xl"
              style={{
                left: '52%', top: '0px', width: '24%', height: '320px', zIndex: 10,
                borderRadius: '24px',
                background: 'rgba(13, 13, 13, 0.55)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.12)',
              }}
            >
              <span
                className="font-[family-name:var(--font-heading)] text-6xl leading-none text-white/10 select-none"
                aria-hidden="true"
              >&ldquo;</span>
              <div>
                <p className="text-base italic leading-snug text-white/90 drop-shadow-sm">
                  Took me maybe 90 minutes to set up the order page. The rest basically ran itself.
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-white/40">
                  Jake T. &mdash; Class Rep, Vancouver
                </p>
              </div>
            </div>

            {/* Card F — narrow tall photo, right side, offset down */}
            <div
              className="absolute overflow-hidden shadow-lg"
              style={{ left: '53%', top: '350px', width: '18%', height: '390px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.5)' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&q=80"
                alt="Student in grad gear"
                fill
                className="object-cover object-top"
                sizes="18vw"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, transparent 60%)', pointerEvents: 'none' }} />
            </div>

            {/* Card G — frosted glass warm quote card, far right, mid-height */}
            <div
              className="absolute flex flex-col justify-between p-7 shadow-2xl"
              style={{
                left: '74%', top: '120px', width: '26%', height: '310px', zIndex: 5,
                borderRadius: '24px',
                background: 'rgba(255, 250, 244, 0.60)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                border: '1px solid rgba(255,255,255,0.6)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
              }}
            >
              <span
                className="font-[family-name:var(--font-heading)] text-6xl leading-none text-[var(--color-border)] select-none"
                aria-hidden="true"
              >&ldquo;</span>
              <div>
                <p className="text-base italic leading-snug text-[var(--color-fg)]">
                  I was skeptical about ordering custom hoodies online but everything came out exactly right. The stitching is really clean.
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-[var(--color-muted-fg)]">
                  Aisha M. &mdash; Toronto, Class of 2025
                </p>
              </div>
            </div>

            {/* Card H — small photo, far right, low */}
            <div
              className="absolute overflow-hidden shadow-xl"
              style={{ left: '76%', top: '460px', width: '24%', height: '260px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.5)' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&q=80"
                alt="Crewneck detail"
                fill
                className="object-cover"
                sizes="24vw"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, transparent 60%)', pointerEvents: 'none' }} />
            </div>

          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            The Collection
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-heading)] text-4xl font-semibold text-[var(--color-fg)] sm:text-5xl">
            The Opening Lineup
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            {
              slug: 'classic-grad-hoodie',
              name: 'Classic Grad Hoodie',
              tagline: 'Your year. Your school. Forever.',
              image: '/images/hoodie-flat-black.png',
            },
            {
              slug: 'grad-crewneck',
              name: 'Grad Crewneck',
              tagline: 'Clean lines. Lasting pride.',
              image: '/images/quarter-zip-flat-navy.png',
            },
            {
              slug: 'grad-quarter-zip',
              name: 'Grad Quarter Zip',
              tagline: 'Sharp. Warm. Unmistakably yours.',
              image: '/images/hoodie-flat-olive.png',
            },
          ].map(({ slug, name, tagline, image }) => (
            <Link
              key={slug}
              href="/rep"
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[var(--color-muted)]" style={{ borderRadius: '20px' }}>
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-medium text-[var(--color-fg)]">
                  {name}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-muted-fg)]">{tagline}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/rep"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-secondary)] transition-colors duration-150 hover:text-[var(--color-fg)] cursor-pointer"
          >
            Get started <ArrowRight size={14} strokeWidth={2} />
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section
        style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
        className="bg-[var(--color-card)] py-24"
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
              The Process
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-semibold text-[var(--color-fg)]">
              No group chats required.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[var(--color-muted-fg)]">
              We built the ordering flow so you don&apos;t have to manage it yourself.
              One rep, one link, one order — sorted.
            </p>
          </div>

          {/* SVG flow diagram */}
          <div className="relative">
            {/* Connecting dashed line — hidden on mobile */}
            <svg
              className="absolute inset-0 w-full hidden sm:block"
              height="100"
              viewBox="0 0 900 100"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {/* Curved path connecting the three icon centres */}
              <path
                d="M 150 50 C 250 20, 350 80, 450 50 C 550 20, 650 80, 750 50"
                stroke="var(--color-border)"
                strokeWidth="2"
                strokeDasharray="6 5"
                fill="none"
              />
              {/* Arrow at end */}
              <polyline
                points="740,42 752,50 740,58"
                stroke="var(--color-border)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>

            {/* Step nodes */}
            <div className="relative grid grid-cols-1 gap-14 sm:grid-cols-3 sm:gap-6">

              {/* Step 01 — Find Your School */}
              <div className="flex flex-col items-center text-center gap-5">
                <div
                  className="relative flex items-center justify-center bg-white shadow-md"
                  style={{ width: 96, height: 96, borderRadius: 24, border: '1px solid var(--color-border)' }}
                >
                  <svg width="46" height="46" viewBox="0 0 46 46" fill="none" aria-hidden="true">
                    {/* School building */}
                    <rect x="8" y="20" width="30" height="20" rx="2" stroke="var(--color-accent)" strokeWidth="1.8" fill="none"/>
                    <polygon points="4,20 23,6 42,20" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
                    {/* Door */}
                    <rect x="18" y="28" width="10" height="12" rx="1.5" stroke="var(--color-accent)" strokeWidth="1.6" fill="none"/>
                    {/* Windows */}
                    <rect x="10" y="24" width="7" height="6" rx="1" stroke="var(--color-accent)" strokeWidth="1.4" fill="none"/>
                    <rect x="29" y="24" width="7" height="6" rx="1" stroke="var(--color-accent)" strokeWidth="1.4" fill="none"/>
                    {/* Flag / search dot */}
                    <circle cx="23" cy="13" r="2" fill="var(--color-accent)" opacity="0.5"/>
                  </svg>
                  <span
                    className="absolute -top-2 -right-2 flex items-center justify-center bg-[var(--color-accent)] text-white text-xs font-bold"
                    style={{ width: 22, height: 22, borderRadius: 999, fontFamily: 'var(--font-body)' }}
                  >1</span>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-fg)]">Find Your School</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-fg)]">Look up your school to see if a rep is already set up — or claim the spot yourself.</p>
                </div>
              </div>

              {/* Step 02 — Lock In the Look */}
              <div className="flex flex-col items-center text-center gap-5">
                <div
                  className="relative flex items-center justify-center bg-white shadow-md"
                  style={{ width: 96, height: 96, borderRadius: 24, border: '1px solid var(--color-border)' }}
                >
                  <svg width="46" height="46" viewBox="0 0 46 46" fill="none" aria-hidden="true">
                    {/* Hoodie shape */}
                    <path
                      d="M14 12 C14 12 10 14 8 20 L6 32 L14 33 L14 38 L32 38 L32 33 L40 32 L38 20 C36 14 32 12 32 12"
                      stroke="var(--color-accent)" strokeWidth="1.8" strokeLinejoin="round" fill="none"
                    />
                    {/* Hood */}
                    <path
                      d="M14 12 C14 12 16 8 20 7 L23 10 L26 7 C30 8 32 12 32 12"
                      stroke="var(--color-accent)" strokeWidth="1.8" strokeLinejoin="round" fill="none"
                    />
                    {/* Pocket */}
                    <path d="M17 28 L17 35 L29 35 L29 28" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
                    {/* Crest dot */}
                    <circle cx="23" cy="21" r="3" stroke="var(--color-accent)" strokeWidth="1.4" fill="none"/>
                    <circle cx="23" cy="21" r="1" fill="var(--color-accent)" opacity="0.6"/>
                  </svg>
                  <span
                    className="absolute -top-2 -right-2 flex items-center justify-center bg-[var(--color-accent)] text-white text-xs font-bold"
                    style={{ width: 22, height: 22, borderRadius: 999, fontFamily: 'var(--font-body)' }}
                  >2</span>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-fg)]">Lock In the Look</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-fg)]">Choose your styles, pick your colours, and submit your class design. We give your rep the tools to make it easy.</p>
                </div>
              </div>

              {/* Step 03 — It Shows Up */}
              <div className="flex flex-col items-center text-center gap-5">
                <div
                  className="relative flex items-center justify-center bg-white shadow-md"
                  style={{ width: 96, height: 96, borderRadius: 24, border: '1px solid var(--color-border)' }}
                >
                  <svg width="46" height="46" viewBox="0 0 46 46" fill="none" aria-hidden="true">
                    {/* Box */}
                    <rect x="7" y="18" width="32" height="22" rx="2" stroke="var(--color-accent)" strokeWidth="1.8" fill="none"/>
                    {/* Box lid */}
                    <path d="M5 18 L41 18 L38 10 L8 10 Z" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
                    {/* Tape line on lid */}
                    <line x1="23" y1="10" x2="23" y2="18" stroke="var(--color-accent)" strokeWidth="1.8"/>
                    {/* Checkmark inside box */}
                    <polyline points="16,28 21,33 30,24" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    {/* Location pin beneath */}
                    <circle cx="23" cy="43" r="1.5" fill="var(--color-accent)" opacity="0.4"/>
                  </svg>
                  <span
                    className="absolute -top-2 -right-2 flex items-center justify-center bg-[var(--color-accent)] text-white text-xs font-bold"
                    style={{ width: 22, height: 22, borderRadius: 999, fontFamily: 'var(--font-body)' }}
                  >3</span>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-fg)]">It Shows Up</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-fg)]">Your full order lands at school within 3 weeks, packed and labelled per person. No chasing anyone.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        ref={sectionRef}
        style={{ borderTop: '1px solid var(--color-border)', overflow: 'hidden' }}
        className="relative py-40 text-center"
      >
        {/* Background image left — parallax slower */}
        <div
          ref={img1Ref}
          className="absolute hidden lg:block"
          style={{
            left: '4%',
            top: '10%',
            width: '22%',
            aspectRatio: '3/4',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.10)',
            willChange: 'transform',
            transition: 'transform 0.1s linear',
          }}
          aria-hidden="true"
        >
          <Image
            src="/images/student-basketball-court.png"
            alt=""
            fill
            className="object-cover"
            sizes="22vw"
          />
        </div>


        {/* Background image right — parallax faster */}
        <div
          ref={img2Ref}
          className="absolute hidden lg:block"
          style={{
            right: '4%',
            top: '-5%',
            width: '20%',
            aspectRatio: '3/4',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.10)',
            willChange: 'transform',
            transition: 'transform 0.1s linear',
          }}
          aria-hidden="true"
        >
          <Image
            src="/images/squad-track-field.png"
            alt=""
            fill
            className="object-cover"
            sizes="20vw"
          />
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-2xl px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">Rep Program</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-5xl font-bold leading-none tracking-tight text-[var(--color-fg)] sm:text-6xl lg:text-7xl">
            BE THE ONE WHO MADE IT HAPPEN.
          </h2>
          <p className="mx-auto mt-6 max-w-sm text-base text-[var(--color-secondary)]">
            Two hours to set up. Your whole grade outfitted. A cut of every order — and a free kit just for signing on.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <Link
              href="/rep"
              className="inline-flex items-center gap-3 rounded-xl bg-[var(--color-fg)] px-12 py-5 text-base font-semibold text-white transition-all duration-200 hover:bg-[var(--color-accent)] cursor-pointer"
            >
              Become a Rep
              <ArrowRight size={18} strokeWidth={2} />
            </Link>
            <Link
              href="/rep"
              className="text-sm font-medium text-[var(--color-muted-fg)] underline underline-offset-4 transition-colors duration-150 hover:text-[var(--color-fg)] cursor-pointer"
            >
              Just start your order
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
