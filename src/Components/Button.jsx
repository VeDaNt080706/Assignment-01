import React from 'react'

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer'
  
  const variants = {
    primary: 'bg-[#0F172A] hover:bg-[#1E293B] text-white shadow-md shadow-slate-900/15 border border-[#0F172A]',
    secondary: 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-md shadow-blue-500/15 border border-[#2563EB]',
    outline: 'bg-transparent hover:bg-slate-100 text-[#111827] border border-slate-200 hover:border-slate-300',
    ghost: 'bg-transparent hover:bg-slate-100/70 text-[#6B7280] hover:text-[#111827]'
  }

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5'
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </button>
  )
}
