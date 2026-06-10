import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ShoppingBag, Heart, User } from 'lucide-react'
import { Button } from './Button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  const activeStyle = ({ isActive }) =>
    `text-sm font-semibold transition-all relative py-1.5 ${
      isActive 
        ? 'text-[#111827] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#2563EB] after:rounded-full' 
        : 'text-[#6B7280] hover:text-[#111827]'
    }`

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm shadow-slate-100/50'
          : 'bg-white/40 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="rounded-lg bg-gradient-to-tr from-[#2563EB] to-blue-500 p-2 text-white shadow-md shadow-blue-500/10 group-hover:shadow-blue-500/30 transition-all">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <span className="text-xl font-black tracking-tight text-[#111827] bg-gradient-to-r from-[#111827] to-[#1e293b] bg-clip-text">
              Trendystyle
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={activeStyle}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* User & Cart Icons */}
          <div className="hidden md:flex items-center gap-5">
            {/* Wishlist Button */}
            <button 
              className="relative p-2 text-[#6B7280] hover:text-[#111827] transition-colors cursor-pointer"
              aria-label="Wishlist"
            >
              <Heart className="h-5.5 w-5.5" />
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#2563EB] text-[9px] font-bold text-white">
                3
              </span>
            </button>

            {/* Cart Button */}
            <button 
              className="relative p-2 text-[#6B7280] hover:text-[#111827] transition-colors cursor-pointer"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="h-5.5 w-5.5" />
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#0F172A] text-[9px] font-bold text-white">
                2
              </span>
            </button>

            <div className="h-4 w-px bg-slate-200" />

            <Button variant="outline" size="sm" className="flex items-center gap-1.5">
              <User className="h-4 w-4" /> Sign In
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-4">
            {/* Cart Button on Mobile */}
            <button className="relative p-2 text-[#6B7280] hover:text-[#111827] transition-colors">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#2563EB] text-[8px] font-bold text-white">
                2
              </span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-lg p-1.5 text-[#6B7280] hover:bg-slate-100 hover:text-[#111827] focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 bg-white border-b border-slate-200 shadow-lg transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <div className="space-y-1 px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2 text-base font-semibold transition-colors ${
                  isActive
                    ? 'bg-slate-50 text-[#111827] border-l-2 border-[#2563EB]'
                    : 'text-[#6B7280] hover:bg-slate-50/50 hover:text-[#111827]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="flex flex-col gap-2 pt-4 border-t border-slate-100 mt-4">
            <Button variant="outline" size="md" className="w-full justify-center">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar