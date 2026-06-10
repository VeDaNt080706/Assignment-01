import React from 'react'
import { Star } from 'lucide-react'

export function TestimonialCard({ quote, author, role, company, avatar, rating = 5 }) {
  return (
    <div className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/60">
      <div>
        <div className="flex items-center gap-0.5 mb-4 text-amber-500">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>
        
        <p className="text-sm italic text-slate-300 leading-relaxed mb-6">
          "{quote}"
        </p>
      </div>

      <div className="flex items-center gap-3">
        <img
          src={avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${author}`}
          alt={author}
          className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700"
        />
        <div>
          <h4 className="text-sm font-semibold text-slate-100">{author}</h4>
          <p className="text-xs text-slate-400">
            {role} at <span className="text-purple-400 font-medium">{company}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
