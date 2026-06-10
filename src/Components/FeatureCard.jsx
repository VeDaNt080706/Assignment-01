import React from 'react'

export function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-purple-500/5">
      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-indigo-500/15" />
      
      <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-slate-800 p-3 text-purple-400 border border-slate-700/50 transition-colors duration-300 group-hover:bg-purple-500/10 group-hover:border-purple-500/20 group-hover:text-purple-300">
        {Icon && <Icon className="h-6 h-6" />}
      </div>
      
      <h3 className="mb-2 text-lg font-semibold text-slate-100 transition-colors duration-300 group-hover:text-white">
        {title}
      </h3>
      
      <p className="text-sm leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
        {description}
      </p>
    </div>
  )
}
