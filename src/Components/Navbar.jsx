import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ShoppingBag, Heart } from 'lucide-react'
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
    `text-xs font-semibold uppercase tracking-[0.15em] transition-colors relative py-1.5 ${
      isActive 
        ? 'text-[#111827] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#111827]' 
        : 'text-[#6B7280] hover:text-[#111827]'
    }`

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#F8FAFC]/95 backdrop-blur-md border-b border-slate-200/60 shadow-sm"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold tracking-[0.25em] uppercase text-[#111827] transition-opacity hover:opacity-85">
              Trendystyle
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={activeStyle}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* User & Cart Icons */}
          <div className="hidden md:flex items-center gap-6">
            {/* Wishlist Button */}
            <button 
              className="relative p-1.5 text-[#6B7280] hover:text-[#111827] transition-colors cursor-pointer"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5 stroke-[1.25]" />
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#2563EB] text-[8px] font-bold text-white shadow-sm">
                3
              </span>
            </button>

            {/* Cart Button */}
            <button 
              className="relative p-1.5 text-[#6B7280] hover:text-[#111827] transition-colors cursor-pointer"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="h-5 w-5 stroke-[1.25]" />
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#111827] text-[8px] font-bold text-white shadow-sm">
                2
              </span>
            </button>

            <div className="h-4 w-px bg-slate-200" />

            <Link to="/contact">
              <Button 
                variant="outline" 
                size="sm" 
                className="border-[#111827] text-[#111827] hover:bg-[#111827] hover:text-white transition-colors duration-300 text-[10px] font-bold uppercase tracking-widest px-4 py-2"
              >
                Sign In
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-4">
            {/* Cart Button on Mobile */}
            <button className="relative p-1.5 text-[#6B7280] hover:text-[#111827] transition-colors">
              <ShoppingBag className="h-5 w-5 stroke-[1.5]" />
              <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#111827] text-[8px] font-bold text-white shadow-sm">
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
        className={`md:hidden fixed inset-x-0 top-20 bg-white border-b border-slate-200 shadow-lg transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <div className="space-y-1 px-4 py-6 sm:px-6 bg-[#F8FAFC]">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${
                  isActive
                    ? 'bg-slate-200 text-[#111827] border-l-2 border-[#111827]'
                    : 'text-[#6B7280] hover:bg-slate-100 hover:text-[#111827]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="flex flex-col gap-2 pt-6 border-t border-slate-200 mt-4">
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="outline" size="md" className="w-full justify-center border-[#111827] text-[#111827]">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar