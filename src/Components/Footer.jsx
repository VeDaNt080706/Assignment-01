import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Instagram, Twitter, Facebook, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    shop: [
      { name: 'Shop All', path: '/products' },
      { name: 'Knitwear & Sweaters', path: '/products' },
      { name: 'Casual Shirts', path: '/products' },
      { name: 'Outerwear', path: '/products' }
    ],
    support: [
      { name: 'Size Guide & Fit', path: '#' },
      { name: 'Shipping & Delivery', path: '#' },
      { name: 'Returns & Exchanges', path: '#' },
      { name: 'Store Locator', path: '#' }
    ],
    company: [
      { name: 'Our Story', path: '/about' },
      { name: 'Careers', path: '#' },
      { name: 'Ethical Sourcing', path: '#' },
      { name: 'Contact Us', path: '/contact' }
    ]
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    alert('Thank you for subscribing to the Trendystyle newsletter!')
  }

  return (
    <footer className="mt-auto border-t border-slate-100 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          
          {/* Logo + About Section */}
          <div className="space-y-6 xl:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="rounded-lg bg-gradient-to-tr from-[#2563EB] to-blue-500 p-2 text-white">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <span className="text-lg font-black tracking-tight text-[#111827]">
                Trendystyle
              </span>
            </Link>
            <p className="text-sm text-[#6B7280] max-w-xs leading-relaxed font-medium">
              Curating comfortable, minimalist daily clothing from sustainably sourced and ethical fibers.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-[#2563EB] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-[#2563EB] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-[#2563EB] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="mt-12 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-bold text-[#111827] tracking-wider uppercase">Shop</h3>
              <ul className="mt-4 space-y-2.5">
                {links.shop.map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} className="text-sm text-[#6B7280] hover:text-[#2563EB] transition-colors font-medium">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#111827] tracking-wider uppercase">Support</h3>
              <ul className="mt-4 space-y-2.5">
                {links.support.map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} className="text-sm text-[#6B7280] hover:text-[#2563EB] transition-colors font-medium">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#111827] tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-2.5">
                {links.company.map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} className="text-sm text-[#6B7280] hover:text-[#2563EB] transition-colors font-medium">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 border-t border-slate-100 pt-8 lg:flex lg:items-center lg:justify-between gap-8">
          <div>
            <h3 className="text-sm font-bold text-[#111827]">Subscribe to our newsletter</h3>
            <p className="mt-1 text-sm text-[#6B7280] font-medium">
              Join the club for size releases, season drops, and 10% off your next purchase.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="mt-4 sm:flex lg:mt-0 max-w-md w-full gap-2">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-[#111827] placeholder-slate-400 focus:border-[#2563EB] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563EB] transition-all"
            />
            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-[#0F172A] hover:bg-[#2563EB] px-5 py-2.5 text-sm font-bold text-white transition-colors sm:mt-0 sm:w-auto cursor-pointer shadow-sm active:scale-97"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-slate-100 pt-8 md:flex md:items-center md:justify-between">
          <p className="text-xs text-[#6B7280] font-semibold">
            &copy; {currentYear} Trendystyle, Inc. All rights reserved.
          </p>
          <p className="mt-4 text-xs text-[#6B7280] font-semibold md:mt-0 flex items-center justify-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for comfortable living.
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer