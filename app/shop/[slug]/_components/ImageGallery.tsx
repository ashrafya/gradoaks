'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ImageGallery({
  images,
  name,
}: {
  images: string[]
  name: string
}) {
  const [active, setActive] = useState(0)

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-[var(--color-muted)]">
        <Image
          src={images[active]}
          alt={`${name} — view ${active + 1}`}
          fill
          priority
          className="object-cover transition-opacity duration-300"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              aria-pressed={active === i}
              className={`relative aspect-square w-20 flex-shrink-0 overflow-hidden rounded-sm cursor-pointer transition-all duration-150 ${
                active === i
                  ? 'ring-2 ring-[var(--color-fg)] ring-offset-2'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                src={src}
                alt={`${name} thumbnail ${i + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
