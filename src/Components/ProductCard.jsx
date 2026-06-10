import React, { useState } from 'react'
import { Star, Heart, ShoppingBag } from 'lucide-react'
import { Button } from './Button'

export function ProductCard({
  id,
  title,
  price,
  rating = 5,
  stars = 0,
  description,
  tags = [],
  image,
  category = ''
}) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const displayRating = rating || (stars ? Math.min(5, Math.round(stars / 1800)) : 5)
  const displayPrice = price || (id * 12.5 + 24.99).toFixed(2)

  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative">
      {/* Category & Wishlist */}
      <div className="absolute top-3 left-3 z-10">
        <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#111827]/90 text-white backdrop-blur-sm shadow-sm">
          {category}
        </span>
      </div>

      <button
        onClick={() => setIsWishlisted(!isWishlisted)}
        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/95 text-slate-400 hover:text-red-500 shadow-sm border border-slate-100 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
        aria-label="Add to Wishlist"
      >
        <Heart
          className={`h-4.5 w-4.5 transition-colors duration-300 ${
            isWishlisted ? 'fill-red-500 text-red-500 font-bold' : 'text-[#6B7280]'
          }`}
        />
      </button>

      {/* Product Image container */}
      <div className="relative overflow-hidden aspect-[3/4] bg-slate-50 border-b border-slate-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
          loading="lazy"
        />
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Product Details */}
      <div className="p-4.5 flex flex-col flex-grow">
        {/* Rating */}
        <div className="flex items-center gap-0.5 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i < Math.round(displayRating)
                  ? 'text-amber-400 fill-amber-400'
                  : 'text-slate-200'
              }`}
            />
          ))}
          <span className="text-[11px] font-bold text-[#6B7280] ml-1.5">
            {displayRating}
          </span>
        </div>

        <h3 className="text-base font-bold text-[#111827] line-clamp-1 mb-1 group-hover:text-[#2563EB] transition-colors duration-200">
          {title}
        </h3>

        <p className="text-xs text-[#6B7280] line-clamp-2 mb-4 leading-relaxed flex-grow">
          {description}
        </p>

        {/* Action Section */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-4 mt-auto">
          <div className="flex flex-col">
            <span className="text-[9px] font-bold text-[#6B7280] tracking-wider uppercase">Price</span>
            <span className="text-lg font-black text-[#111827]">
              ${Number(displayPrice).toFixed(2)}
            </span>
          </div>

          <Button
            variant="primary"
            size="sm"
            className="flex items-center gap-1.5 font-bold bg-[#0F172A] hover:bg-[#2563EB] hover:border-[#2563EB] text-white py-1.5 px-3 rounded-lg"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
export default ProductCard
