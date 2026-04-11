export type Product = {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  price: number
  category: string
  featured: boolean
  badge?: string
  details: string[]
  image: string
  images: string[]
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'classic-grad-hoodie',
    name: 'Classic Grad Hoodie',
    tagline: 'Your year. Your school. Forever.',
    description:
      'Our signature graduation hoodie, custom-embroidered with your school name, grad year, and class crest. Heavyweight 400gsm fleece that holds its shape and colour through years of wear. This is the one you keep.',
    price: 89,
    category: 'Hoodies',
    featured: true,
    badge: 'Bestseller',
    details: [
      '400gsm heavyweight fleece',
      'Custom embroidery — school name, year & crest',
      'Kangaroo pocket with hidden zip',
      'Preshrunk — true-to-size fit',
      'Made in Canada',
    ],
    image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800&q=80',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80',
      'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=800&q=80',
    ],
  },
  {
    id: '2',
    slug: 'grad-crewneck',
    name: 'Grad Crewneck',
    tagline: 'Clean lines. Lasting pride.',
    description:
      'A cleaner take on the classic grad piece. Screen-printed with your class design on premium ringspun cotton. The structured crewneck collar and ribbed cuffs give it a polished look that works well beyond graduation day.',
    price: 72,
    category: 'Crewnecks',
    featured: true,
    badge: 'New',
    details: [
      '320gsm ringspun cotton fleece',
      'Screen-printed class design',
      'Ribbed collar, cuffs & hem',
      'Unisex cut — size up for an oversized fit',
      'Made in Canada',
    ],
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
      'https://images.unsplash.com/photo-1532453288672-3a17e9b7f2eb?w=800&q=80',
    ],
  },
  {
    id: '3',
    slug: 'grad-quarter-zip',
    name: 'Grad Quarter Zip',
    tagline: 'Sharp. Warm. Unmistakably yours.',
    description:
      'A refined alternative to the full hoodie. Custom-embroidered school crest at the chest, grad year on the sleeve. Midweight fleece with a clean stand collar — the piece that works from the bleachers to wherever the night takes you.',
    price: 85,
    category: 'Hoodies',
    featured: true,
    details: [
      '350gsm midweight fleece',
      'Custom embroidery — chest crest & sleeve year',
      'YKK quarter-zip pull',
      'Stand collar, ribbed cuffs & hem',
      'Made in Canada',
    ],
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80',
      'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800&q=80',
      'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=800&q=80',
    ],
  },
  {
    id: '3b',
    slug: 'class-jersey',
    name: 'Class Jersey',
    tagline: 'Rep your class. Own the hallway.',
    description:
      'A bold mesh jersey customized with your name, number, and school colours. Lightweight and breathable with moisture-wicking fabric — designed for grad events, spirit days, and everything in between.',
    price: 65,
    category: 'Jerseys',
    featured: true,
    details: [
      '100% polyester moisture-wicking mesh',
      'Custom name, number & school colours',
      'Double-stitched seams for durability',
      'Available in 12 colour combinations',
      'Made in Canada',
    ],
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80',
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    ],
  },
  {
    id: '4',
    slug: 'grad-snapback',
    name: 'Grad Snapback',
    tagline: 'Top it off.',
    description:
      'A structured snapback with embroidered school crest on the front panel and grad year on the side. One-size-fits-all with a classic flat brim. The kind of cap that completes the outfit.',
    price: 42,
    category: 'Accessories',
    featured: false,
    badge: 'Limited',
    details: [
      'Structured 6-panel design',
      'Embroidered crest & grad year',
      'Adjustable plastic snapback closure',
      'Available in black, navy & forest',
      'Made in Canada',
    ],
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80',
      'https://images.unsplash.com/photo-1521369909029-2afed882baaa?w=800&q=80',
      'https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=800&q=80',
    ],
  },
  {
    id: '5',
    slug: 'grad-longsleeeve',
    name: 'Grad Long-Sleeve Tee',
    tagline: 'Everyday. All year.',
    description:
      'A long-sleeve tee that wears like a second skin. Soft-washed 200gsm cotton with your class graphic printed on the back and a small school logo hit on the chest. Casual enough for everyday, special enough to keep.',
    price: 52,
    category: 'Tops',
    featured: false,
    details: [
      '200gsm soft-washed cotton',
      'Back graphic print + chest logo',
      'Preshrunk — no surprise shrinkage',
      'Available in 8 colourways',
      'Made in Canada',
    ],
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80',
    ],
  },
  {
    id: '6',
    slug: 'grad-tote-bag',
    name: 'Grad Tote Bag',
    tagline: 'Carry your story.',
    description:
      'A heavyweight canvas tote screen-printed with your class design. Thick 12oz canvas with reinforced handles means it holds up through every school day, study session, and well beyond graduation.',
    price: 35,
    category: 'Accessories',
    featured: false,
    badge: 'Bestseller',
    details: [
      '12oz heavyweight canvas',
      'Screen-printed class design',
      'Reinforced double-stitched handles',
      '38 × 42 cm capacity',
      'Made in Canada',
    ],
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
      'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=800&q=80',
    ],
  },
]

export const categories = ['All', 'Hoodies', 'Crewnecks', 'Jerseys', 'Tops', 'Accessories']

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}
