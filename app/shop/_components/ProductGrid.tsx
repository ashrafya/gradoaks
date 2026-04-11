'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Product, categories } from '../../_data/products'

export default function ProductGrid({ products }: { products: Product[] }) {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? products : products.filter((p) => p.category === active)

  return (
    <>
      {/* Category filters */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
            className={`rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-150 cursor-pointer ${
              active === cat
                ? 'bg-[var(--color-accent)] text-white'
                : 'border border-[var(--color-border)] text-[var(--color-muted-fg)] hover:border-[var(--color-accent)] hover:text-[var(--color-fg)]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Result count */}
      <p className="mt-6 text-sm text-[var(--color-muted-fg)]">
        {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="mt-16 flex flex-col items-center gap-3 text-center">
          <p className="text-lg font-medium text-[var(--color-fg)]">No products found</p>
          <p className="text-sm text-[var(--color-muted-fg)]">Try selecting a different category.</p>
          <button
            onClick={() => setActive('All')}
            className="mt-4 rounded-sm border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-fg)] transition-all duration-150 hover:border-[var(--color-fg)] cursor-pointer"
          >
            Show all
          </button>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
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
                  <h2 className="mt-1 font-[family-name:var(--font-heading)] text-lg font-medium text-[var(--color-fg)] transition-colors duration-150 group-hover:text-[var(--color-accent)]" >
                    {product.name}
                  </h2>
                  <p className="mt-1 text-sm text-[var(--color-muted-fg)]">{product.tagline}</p>
                </div>
                <p className="shrink-0 font-medium text-[var(--color-fg)]">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
