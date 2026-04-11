import type { Metadata } from 'next'
import { products } from '../_data/products'
import ProductGrid from './_components/ProductGrid'

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Browse the full GradOaks custom graduation apparel collection.',
}

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      {/* Page header */}
      <div className="mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          Shop
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-5xl font-bold leading-none tracking-tight text-[var(--color-fg)] sm:text-6xl">
          THE COLLECTION
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--color-muted-fg)]">
          Every piece is fully customized for your class and made in Canada. Browse the full collection and start your order.
        </p>
      </div>

      <ProductGrid products={products} />
    </div>
  )
}
