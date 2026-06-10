import React from 'react'
import { Star } from 'lucide-react'

export function TestimonialCard({ quote, author, role, company, avatar, rating = 5 }) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-200">
      <div>
        {/* Rating Stars */}
        <div className="flex items-center gap-0.5 mb-4 text-amber-400">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>
        
        {/* Quote text */}
        <p className="text-sm italic text-[#111827]/90 leading-relaxed mb-6 font-medium">
          "{quote}"
        </p>
      </div>

      {/* Profile info */}
      <div className="flex items-center gap-3 border-t border-slate-50 pt-4 mt-auto">
        <img
          src={avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${author}`}
          alt={author}
          className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100"
        />
        <div>
          <h4 className="text-sm font-bold text-[#111827]">{author}</h4>
          <p className="text-xs text-[#6B7280] font-semibold mt-0.5">
            {role} at <span className="text-[#2563EB] font-bold">{company}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
export default TestimonialCard
