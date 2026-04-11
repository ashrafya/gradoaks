import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Users, School, MapPin, CheckCircle } from 'lucide-react'
import { getFeaturedProducts } from './_data/products'

export default function HomePage() {
  const featured = getFeaturedProducts()

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
                  href="/shop"
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
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=85"
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
        className="overflow-hidden bg-[var(--color-accent)] py-4"
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

      {/* Product Categories (MEDVi-style service cards) */}
      <section
        style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
        className="bg-[var(--color-card)] py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
              Our Collections
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-semibold text-[var(--color-fg)]">
              Pick Your Pieces
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[var(--color-muted-fg)]">
              Every item ships with your school name, grad year, and class design baked right in.
              Mix and match — or go all in with a full bundle.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Hoodies',
                desc: 'The one you keep for a decade. 400gsm fleece, embroidered crest, kangaroo pocket — yours, forever.',
                href: '/shop?category=Hoodies',
                image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80',
              },
              {
                title: 'Crewnecks',
                desc: 'Cleaner than a hoodie, heavier than a tee. Your class design, screen-printed to stay.',
                href: '/shop?category=Crewnecks',
                image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80',
              },
              {
                title: 'Jerseys',
                desc: 'Your name. Your number. Your school colours. Made to move, built to last on and off the court.',
                href: '/shop?category=Jerseys',
                image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80',
              },
              {
                title: 'Tops',
                desc: 'Soft-washed cotton, class graphic on the back, school logo on the chest. The quiet flex.',
                href: '/shop?category=Tops',
                image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80',
              },
              {
                title: 'Accessories',
                desc: 'Snapbacks, canvas totes, and lanyards — the small things that round out the whole look.',
                href: '/shop?category=Accessories',
                image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80',
              },
              {
                title: 'Class Bundles',
                desc: 'One order for the whole crew. Your rep puts it together, we handle the rest.',
                href: '/rep',
                image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
              },
            ].map(({ title, desc, href, image }) => (
              <Link
                key={title}
                href={href}
                className="group relative overflow-hidden rounded-sm bg-white cursor-pointer"
                style={{ border: '1px solid var(--color-border)' }}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-fg)]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-fg)]">{desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)] transition-colors duration-150 group-hover:text-[var(--color-accent-hover)]">
                    Get Started <ArrowRight size={12} strokeWidth={2.5} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
              Featured
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-heading)] text-4xl font-semibold text-[var(--color-fg)] sm:text-5xl">
              The Opening Lineup
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden items-center gap-1 text-sm font-medium text-[var(--color-secondary)] transition-colors duration-150 hover:text-[var(--color-fg)] sm:flex cursor-pointer"
          >
            View all <ArrowRight size={14} strokeWidth={2} />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <Link
              key={product.id}
              href={`/shop/${product.slug}`}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[var(--color-muted)]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {product.badge && (
                  <span className="absolute left-4 top-4 rounded-sm bg-[var(--color-accent)] px-2 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-[var(--color-muted-fg)]">
                    {product.category}
                  </p>
                  <h3 className="mt-1 font-[family-name:var(--font-heading)] text-lg font-medium text-[var(--color-fg)] transition-colors duration-150 group-hover:text-[var(--color-accent)]">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-muted-fg)]">{product.tagline}</p>
                </div>
                <p className="shrink-0 font-medium text-[var(--color-fg)]">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center sm:hidden">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-sm border border-[var(--color-border)] px-8 py-4 text-sm font-medium text-[var(--color-fg)] transition-all duration-200 hover:border-[var(--color-fg)] cursor-pointer"
          >
            View all products <ArrowRight size={14} strokeWidth={2} />
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section
        style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
        className="bg-[var(--color-card)] py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
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

          <dl className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {[
              {
                num: '01',
                term: 'Find Your School',
                desc: 'Look up your school to see if a rep is already set up — or claim the spot yourself.',
              },
              {
                num: '02',
                term: 'Lock In the Look',
                desc: 'Choose your styles, pick your colours, and submit your class design. We give your rep the tools to make it easy.',
              },
              {
                num: '03',
                term: 'It Shows Up',
                desc: 'Your full order lands at school within 3 weeks, packed and labelled per person. No chasing anyone.',
              },
            ].map(({ num, term, desc }) => (
              <div key={term} className="flex flex-col gap-2">
                <span className="font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--color-border)]">
                  {num}
                </span>
                <dt className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-fg)]">
                  {term}
                </dt>
                <dd className="text-sm leading-relaxed text-[var(--color-muted-fg)]">{desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Rep Program */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=85"
              alt="GradOaks student rep program"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                Rep Program
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-heading)] text-4xl font-semibold text-[var(--color-fg)] sm:text-5xl">
                Run it for your class.
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-[var(--color-secondary)]">
              Every school needs one person to make grad gear happen. That person is you.
              As a GradOaks rep you own the order for your grade — and we make it dead simple.
              No sales experience, no inventory, no risk.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                'Earn a cut of every order your class places',
                'Your own rep kit — hoodie, lanyard, the works',
                'A direct line to our team whenever you need it',
                'Takes about two hours to set up and run',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-secondary)]">
                  <CheckCircle size={16} strokeWidth={2} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/rep"
              className="mt-2 inline-flex items-center gap-2 self-start rounded-sm bg-[var(--color-accent)] px-8 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-[var(--color-accent-hover)] cursor-pointer"
            >
              Apply to Be a Rep
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        style={{ borderTop: '1px solid var(--color-border)' }}
        className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
      >
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            Early Reviews
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-semibold text-[var(--color-fg)]">
            From the first classes to wear it.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            {
              quote: "I was skeptical about ordering custom hoodies online but everything came out exactly right. The stitching is really clean and it's the softest hoodie I own.",
              author: 'Aisha M.',
              location: 'Toronto, ON',
              role: 'Class of 2025 — first GradOaks order',
            },
            {
              quote: "Being rep sounded like a lot of work until I actually did it. Took me maybe 90 minutes to set up the order page. The rest basically ran itself.",
              author: 'Jake T.',
              location: 'Vancouver, BC',
              role: 'Class Rep, 2025',
            },
            {
              quote: "We almost went with a different company but the quality difference was obvious. Everyone in our grade actually wears theirs.",
              author: 'Priya K.',
              location: 'Calgary, AB',
              role: 'Class of 2025',
            },
          ].map(({ quote, author, location, role }) => (
            <div
              key={author}
              className="flex flex-col gap-4 rounded-sm bg-[var(--color-card)] p-8"
            >
              <p className="text-sm italic leading-relaxed text-[var(--color-secondary)]">
                &ldquo;{quote}&rdquo;
              </p>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-fg)]">
                  {author}, {location}
                </p>
                <p className="text-xs text-[var(--color-muted-fg)]">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section
        style={{ borderTop: '1px solid var(--color-border)' }}
        className="py-32 text-center"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-5xl font-bold leading-none tracking-tight text-[var(--color-fg)] sm:text-6xl lg:text-7xl">
            DON'T LET SOMEONE ELSE PICK THE HOODIE.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-sm text-[var(--color-muted-fg)]">
            Orders ship directly to your school within 3 weeks. Minimum of 12 pieces per order.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/shop"
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
