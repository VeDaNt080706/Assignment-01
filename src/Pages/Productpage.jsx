import React, { useState, useMemo } from 'react'
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react'
import { ProductCard } from '../Components/ProductCard'

const MOCK_PRODUCTS = [
  {
    id: 1,
    title: 'react-nexus',
    description: 'Next.js 15, React 19, and Tailwind CSS v4 boilerplate with preconfigured Supabase authentication, multi-tenant RBAC, and clean folder structures.',
    tags: ['React', 'Next.js', 'Tailwind', 'TypeScript'],
    stars: 3452,
    forks: 412,
    author: { name: 'sarah_chen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SarahChen' },
    category: 'Boilerplates'
  },
  {
    id: 2,
    title: 'hyper-cli',
    description: 'Blazing fast developer workspace environment manager written in Rust. Automates Docker configurations and dependency setups in seconds.',
    tags: ['Rust', 'CLI', 'Docker', 'DevOps'],
    stars: 8901,
    forks: 512,
    author: { name: 'marcus_v', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MarcusVance' },
    category: 'CLI Tools'
  },
  {
    id: 3,
    title: 'zen-state',
    description: 'Ultra-lightweight state-management engine for React with zero dependencies. Standardized proxy-based reactive triggers and hook bindings.',
    tags: ['React', 'JavaScript', 'State Management'],
    stars: 1205,
    forks: 89,
    author: { name: 'elena_r', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ElenaRostova' },
    category: 'Libraries'
  },
  {
    id: 4,
    title: 'nebula-charts',
    description: 'WebGL-powered reactive data visualization library. Seamlessly renders 1,000,000+ data points in real time with hardware acceleration.',
    tags: ['WebGL', 'Charts', 'Data Vis', 'React'],
    stars: 5612,
    forks: 340,
    author: { name: 'graphics_wizard', avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=graphics_wizard' },
    category: 'Libraries'
  },
  {
    id: 5,
    title: 'quantum-api',
    description: 'Mock REST and GraphQL API engine. Generates realistic relational schema endpoints based on JSON templates with zero coding.',
    tags: ['GraphQL', 'REST', 'Mocking', 'Node.js'],
    stars: 2198,
    forks: 145,
    author: { name: 'backend_guru', avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=backend_guru' },
    category: 'Utilities'
  },
  {
    id: 6,
    title: 'style-forge',
    description: 'Design token compiler generating vanilla CSS variables and Tailwind themes dynamically from Figma styling API schemas.',
    tags: ['Figma', 'CSS', 'Design System', 'Vite'],
    stars: 942,
    forks: 67,
    author: { name: 'design_system_bot', avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=design_system_bot' },
    category: 'Utilities'
  },
  {
    id: 7,
    title: 'tundra-db',
    description: 'Local-first key-value engine featuring edge-sync and replication capabilities. Syncs offline state transparently when networks restore.',
    tags: ['Database', 'Edge', 'Offline-First', 'SQLite'],
    stars: 4322,
    forks: 290,
    author: { name: 'marcus_v', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MarcusVance' },
    category: 'Libraries'
  },
  {
    id: 8,
    title: 'luna-auth',
    description: 'Complete decentralized passwordless auth framework. Standard WebAuthn bindings supporting biometrics and passkey configurations.',
    tags: ['WebAuthn', 'Security', 'Passkeys', 'OAuth'],
    stars: 6540,
    forks: 388,
    author: { name: 'sarah_chen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SarahChen' },
    category: 'Boilerplates'
  }
]

const CATEGORIES = ['All', 'Boilerplates', 'Libraries', 'CLI Tools', 'Utilities']

export default function Productpage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('stars') // stars, forks, title

  const filteredAndSortedProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory

      return matchesSearch && matchesCategory
    }).sort((a, b) => {
      if (sortBy === 'stars') return b.stars - a.stars
      if (sortBy === 'forks') return b.forks - a.forks
      if (sortBy === 'title') return a.title.localeCompare(b.title)
      return 0
    })
  }, [searchTerm, selectedCategory, sortBy])

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white">Repository Browser</h1>
            <p className="text-slate-400 mt-2">
              Search and filter high-quality boilerplate templates and open source engines.
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
            <span>SHOWING {filteredAndSortedProducts.length} OF {MOCK_PRODUCTS.length} ITEMS</span>
          </div>
        </div>

        {/* Toolbar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 items-center">
          {/* Search bar */}
          <div className="lg:col-span-5 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search repositories, technologies, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-900 bg-slate-900/40 text-sm text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
            />
          </div>

          {/* Categories Horizontal Scroll */}
          <div className="lg:col-span-4 flex gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-semibold px-3.5 py-2 rounded-lg border whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-500/10'
                    : 'bg-slate-900/30 border-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Selector */}
          <div className="lg:col-span-3 flex items-center gap-3 justify-end">
            <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" /> Sort by
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-lg border border-slate-900 bg-slate-900/40 px-3 py-2 text-xs text-slate-300 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors cursor-pointer"
            >
              <option value="stars">Most Stars</option>
              <option value="forks">Most Forks</option>
              <option value="title">Alphabetical</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-slate-800 rounded-2xl bg-slate-900/10">
            <SlidersHorizontal className="w-12 h-12 text-slate-600 mb-4" />
            <h3 className="text-lg font-semibold text-slate-300">No matching items found</h3>
            <p className="text-sm text-slate-500 max-w-sm mt-1">
              We couldn't find any repositories matching "{searchTerm}". Try clearing your filters or search keywords.
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
              }}
              className="text-xs font-semibold px-4 py-2 mt-6 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700/50 hover:border-slate-600 text-white transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
