import React, { useState, useMemo } from 'react'
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react'
import { ProductCard } from '../Components/ProductCard'

const MOCK_PRODUCTS = [
  {
    id: 1,
    title: 'Classic Cable-Knit Sweater',
    description: 'A premium heavy-blend sky blue cable knit sweater. Designed with a classic V-neck cut, perfect for layering over smart collars.',
    price: 89.00,
    rating: 4.8,
    image: '/media__1781118956389.jpg',
    category: 'Sweaters',
    tags: ['Blue', 'Knitwear', 'Premium', 'Winter']
  },
  {
    id: 2,
    title: 'Striped Casual Oxford Shirt',
    description: 'Lightweight and breathable blue-and-white vertical striped cotton shirt. Casual band collar, ideal for warm spring days.',
    price: 59.00,
    rating: 4.6,
    image: '/media__1781118956555.jpg',
    category: 'Shirts',
    tags: ['Stripes', 'Cotton', 'Casual', 'Spring']
  },
  {
    id: 3,
    title: 'Navy Short-Sleeve Resort Shirt',
    description: 'Modern navy blue short-sleeve button-down shirt. Premium blend with a relaxed camp-collar and tailored chest fit.',
    price: 48.00,
    rating: 4.7,
    image: '/media__1781118956688.jpg',
    category: 'Shirts',
    tags: ['Blue', 'Summer', 'Button-Down', 'Relaxed']
  },
  {
    id: 4,
    title: 'Cream White Knit Sweater',
    description: 'Elegant off-white cable knit crewneck sweater. Cozy textured knit patterns, double-cuffed cuffs, and relaxed silhouette.',
    price: 85.00,
    rating: 4.9,
    image: '/media__1781118956841.jpg',
    category: 'Sweaters',
    tags: ['White', 'Knitwear', 'Crewneck', 'Cozy']
  },
  {
    id: 5,
    title: 'Chevron Textured Knit Sweater',
    description: 'Premium white knit pullover featuring chevron rib-knitting. Standard fit, clean cuffs, and structural warmth.',
    price: 92.00,
    rating: 4.8,
    image: '/media__1781118956877.jpg',
    category: 'Sweaters',
    tags: ['White', 'Knitwear', 'Chevron', 'Wool']
  },
  {
    id: 6,
    title: 'Tailored Chino Trousers',
    description: 'Slim-fit classic khaki chinos crafted from organic stretch cotton. Perfect balance of casual style and business utility.',
    price: 68.00,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=600',
    category: 'Pants',
    tags: ['Khaki', 'Chinos', 'Pants', 'Organic']
  },
  {
    id: 7,
    title: 'Minimalist Wool Trench Coat',
    description: 'Timeless dark brown double-breasted trench coat tailored from pure merino wool. Insulated lining for premium seasonal warmth.',
    price: 180.00,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=600',
    category: 'Outerwear',
    tags: ['Brown', 'Merino', 'Wool', 'Winter']
  },
  {
    id: 8,
    title: 'Classic Denim Jacket',
    description: 'Rugged vintage washed blue denim jacket. Metal buttons, chest pockets, and adjustable waist tabs for a classic look.',
    price: 75.00,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80&w=600',
    category: 'Outerwear',
    tags: ['Denim', 'Blue', 'Jacket', 'Vintage']
  }
]

const CATEGORIES = ['All', 'Sweaters', 'Shirts', 'Outerwear', 'Pants']

export default function Productpage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('rating') // rating, low-price, high-price, title

  const filteredAndSortedProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory

      return matchesSearch && matchesCategory
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating
      if (sortBy === 'low-price') return a.price - b.price
      if (sortBy === 'high-price') return b.price - a.price
      if (sortBy === 'title') return a.title.localeCompare(b.title)
      return 0
    })
  }, [searchTerm, selectedCategory, sortBy])

  return (
    <div className="pt-24 pb-16 min-h-screen bg-[#F8FAFC] text-[#111827]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-[#111827] sm:text-4xl">Catalog Browser</h1>
            <p className="text-[#6B7280] mt-2 text-sm">
              Discover our latest fashion releases, curated sweaters, shirts, and outerwear.
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#6B7280] font-mono">
            <span>SHOWING {filteredAndSortedProducts.length} OF {MOCK_PRODUCTS.length} ITEMS</span>
          </div>
        </div>

        {/* Toolbar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 items-center bg-white p-4.5 rounded-2xl border border-slate-100 shadow-sm">
          {/* Search bar */}
          <div className="lg:col-span-5 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-[#6B7280]" />
            <input
              type="text"
              placeholder="Search products, materials, or colors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-[#111827] placeholder-slate-400 focus:border-[#2563EB] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563EB] transition-all"
            />
          </div>

          {/* Categories Horizontal Scroll */}
          <div className="lg:col-span-4 flex gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-bold px-4 py-2.5 rounded-xl border whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#2563EB] border-[#2563EB] text-white shadow-md shadow-blue-500/10'
                    : 'bg-slate-50 border-slate-100 text-[#6B7280] hover:text-[#111827] hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Selector */}
          <div className="lg:col-span-3 flex items-center gap-3 justify-end">
            <span className="text-xs text-[#6B7280] font-bold flex items-center gap-1.5 whitespace-nowrap">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#6B7280]" /> Sort by
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full max-w-[160px] rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs text-[#111827] focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB] transition-all cursor-pointer font-semibold"
            >
              <option value="rating">Top Rated</option>
              <option value="low-price">Price: Low to High</option>
              <option value="high-price">Price: High to Low</option>
              <option value="title">Alphabetical</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-slate-200 rounded-2xl bg-white shadow-sm">
            <SlidersHorizontal className="w-12 h-12 text-slate-300 mb-4" />
            <h3 className="text-lg font-bold text-[#111827]">No products match your filters</h3>
            <p className="text-xs text-[#6B7280] max-w-sm mt-1">
              Try adjustments to your search terms or filters to browse other clothing categories.
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
              }}
              className="text-xs font-bold px-5 py-2.5 mt-6 rounded-xl bg-[#0F172A] hover:bg-[#2563EB] border border-[#0F172A] hover:border-[#2563EB] text-white transition-all cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
