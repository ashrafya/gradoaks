import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight, Check, ArrowLeft } from 'lucide-react'
import { products, getProductBySlug } from '../../_data/products'
import ImageGallery from './_components/ImageGallery'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return { title: 'Not Found' }
  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) notFound()

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-10 flex items-center gap-1 text-xs text-[var(--color-muted-fg)]" aria-label="Breadcrumb">
        <Link href="/" className="transition-colors duration-150 hover:text-[var(--color-fg)] cursor-pointer">
          Home
        </Link>
        <ChevronRight size={12} strokeWidth={1.5} />
        <Link href="/shop" className="transition-colors duration-150 hover:text-[var(--color-fg)] cursor-pointer">
          Shop
        </Link>
        <ChevronRight size={12} strokeWidth={1.5} />
        <span className="text-[var(--color-fg)]">{product.name}</span>
      </nav>

      {/* Product layout */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Images */}
        <ImageGallery images={product.images} name={product.name} />

        {/* Info */}
        <div className="flex flex-col gap-8 lg:py-4">
          {/* Category + Badge */}
          <div className="flex items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted-fg)]">
              {product.category}
            </p>
            {product.badge && (
              <span className="rounded-sm bg-[var(--color-accent)] px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-white">
                {product.badge}
              </span>
            )}
          </div>

          {/* Name + tagline */}
          <div>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-[var(--color-fg)] sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-2 text-base italic text-[var(--color-muted-fg)]">{product.tagline}</p>
          </div>

          {/* Price */}
          <p className="text-2xl font-semibold text-[var(--color-fg)]">${product.price} CAD</p>

          {/* Description */}
          <p className="text-sm leading-relaxed text-[var(--color-secondary)]">
            {product.description}
          </p>

          {/* CTA */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="flex-1 rounded-sm bg-[var(--color-accent)] px-8 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-[var(--color-accent-hover)] cursor-pointer"
            >
              Start Your Order
            </button>
            <button
              type="button"
              className="rounded-sm border border-[var(--color-border)] px-6 py-4 text-sm font-medium text-[var(--color-fg)] transition-all duration-150 hover:border-[var(--color-fg)] cursor-pointer"
            >
              Save
            </button>
          </div>

          {/* Shipping note */}
          <p className="text-xs text-[var(--color-muted-fg)]">
            Ships to your school within 3 weeks · Minimum order of 12 pieces · Made in Canada
          </p>

          {/* Divider */}
          <hr style={{ borderColor: 'var(--color-border)' }} />

          {/* Details */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--color-muted-fg)]">
              Details
            </p>
            <ul className="flex flex-col gap-2">
              {product.details.map((detail) => (
                <li key={detail} className="flex items-start gap-3 text-sm text-[var(--color-secondary)]">
                  <Check size={14} strokeWidth={2} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Back to shop */}
      <div className="mt-20">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-muted-fg)] transition-colors duration-150 hover:text-[var(--color-fg)] cursor-pointer"
        >
          <ArrowLeft size={14} strokeWidth={2} />
          Back to Shop
        </Link>
      </div>
    </div>
  )
}
