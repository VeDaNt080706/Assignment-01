import React from 'react'
import { Link } from 'react-router-dom'
import { Terminal, Github, Twitter, Linkedin, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    product: [
      { name: 'Repositories', path: '/products' },
      { name: 'Features', path: '/' },
      { name: 'Pricing', path: '#' },
      { name: 'Integrations', path: '#' }
    ],
    resources: [
      { name: 'Documentation', path: '#' },
      { name: 'Guides', path: '#' },
      { name: 'API Reference', path: '#' },
      { name: 'Changelog', path: '#' }
    ],
    company: [
      { name: 'About', path: '/about' },
      { name: 'Blog', path: '#' },
      { name: 'Careers', path: '#' },
      { name: 'Contact', path: '/contact' }
    ]
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    alert('Thank you for subscribing!')
  }

  return (
    <footer className="mt-auto border-t border-slate-900 bg-slate-950/40 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          
          {/* Logo + About Section */}
          <div className="space-y-6 xl:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-600 p-1.5 text-white">
                <Terminal className="h-5.5 w-5.5" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                GitForge
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              Discover, catalog, and deploy developer templates and repositories effortlessly. Powered by the open source community.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="mt-12 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold text-slate-200 tracking-wider">Product</h3>
              <ul className="mt-4 space-y-2.5">
                {links.product.map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} className="text-sm text-slate-400 hover:text-slate-200 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-200 tracking-wider">Resources</h3>
              <ul className="mt-4 space-y-2.5">
                {links.resources.map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} className="text-sm text-slate-400 hover:text-slate-200 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-200 tracking-wider">Company</h3>
              <ul className="mt-4 space-y-2.5">
                {links.company.map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} className="text-sm text-slate-400 hover:text-slate-200 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 border-t border-slate-900 pt-8 lg:flex lg:items-center lg:justify-between gap-8">
          <div>
            <h3 className="text-sm font-semibold text-slate-200">Subscribe to our newsletter</h3>
            <p className="mt-1 text-sm text-slate-400">
              Get the latest news and updates about templates directly in your inbox.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="mt-4 sm:flex lg:mt-0 max-w-md w-full gap-2">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
            />
            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700/50 hover:border-slate-600 px-4 py-2.5 text-sm font-medium text-white transition-colors sm:mt-0 sm:w-auto cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-slate-900 pt-8 md:flex md:items-center md:justify-between">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} GitForge, Inc. All rights reserved.
          </p>
          <p className="mt-4 text-xs text-slate-500 md:mt-0 flex items-center justify-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-500 fill-current" /> for developers everywhere.
          </p>
        </div>
      </div>
    </footer>
  )
}