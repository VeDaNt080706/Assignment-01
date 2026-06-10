import React from 'react'

export function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/20 hover:shadow-lg">
      {/* Decorative accent glow */}
      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#2563EB]/5 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-blue-600/10" />
      
      {/* Icon frame */}
      <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-slate-50 p-3 text-[#2563EB] border border-slate-100 transition-colors duration-300 group-hover:bg-[#2563EB]/10 group-hover:border-[#2563EB]/25">
        {Icon && <Icon className="h-6 w-6" />}
      </div>
      
      <h3 className="mb-2 text-base font-bold text-[#111827] transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-xs leading-relaxed text-[#6B7280] font-medium transition-colors duration-300">
        {description}
      </p>
    </div>
  )
}
export default FeatureCard
