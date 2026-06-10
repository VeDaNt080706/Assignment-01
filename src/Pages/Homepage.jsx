import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Shield, Search, Terminal, Star, GitFork, Heart, Code2 } from 'lucide-react'
import { Button } from '../Components/Button'
import { FeatureCard } from '../Components/FeatureCard'
import { ProductCard } from '../Components/ProductCard'
import { TestimonialCard } from '../Components/TestimonialCard'

export default function Homepage() {
  const features = [
    {
      icon: Zap,
      title: 'Real-Time Syncing',
      description: 'Your repository metrics, release versions, and README revisions are compiled instantly via GitHub Webhooks.'
    },
    {
      icon: Shield,
      title: 'Vulnerability Analysis',
      description: 'Automated vulnerability scanning checks your packages and code structures before catalog lists go public.'
    },
    {
      icon: Code2,
      title: 'Instant Templates',
      description: 'Generate working docker containers and boilerplate configurations with a single command from our CLI.'
    },
    {
      icon: Search,
      title: 'Semantic Discovery',
      description: 'Advanced NLP indexing allows you to find libraries based on features and functionality, not just matching tags.'
    }
  ]

  const featuredProducts = [
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
    }
  ]

  const testimonials = [
    {
      quote: "GitForge completely transformed how our engineering team catalogues boilerplates. Discovery time went from hours of Slack queries to a single search hub.",
      author: "David Vance",
      role: "VP of Engineering",
      company: "StackFlow",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DavidVance"
    },
    {
      quote: "The automated dependency scanner gives us peace of mind when using community templates. GitForge ensures quality and security for our sandbox structures.",
      author: "Li Min",
      role: "Security Lead",
      company: "ByteForce",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=LiMin"
    },
    {
      quote: "Indexing our internal microservice boilerplates has saved dev onboarding weeks. GitForge is an essential developer platform tool.",
      author: "Clara Ortiz",
      role: "Staff Platform Engineer",
      company: "Veridian",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ClaraOrtiz"
    }
  ]

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/15 via-slate-950/50 to-slate-950 -z-10" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-purple-500/5 blur-3xl rounded-full -z-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-semibold text-purple-400 mb-6 backdrop-blur-sm animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
            V4 Compile Core Ready
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent max-w-4xl mx-auto leading-none">
            Cataloging & Sharing Developer Blueprints
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            GitForge is the open source library for discovering high-fidelity boilerplate configurations, system templates, and dev tools. Find what you need instantly.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/products">
              <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                Explore Repositories
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="secondary" size="lg">
                Our Mission
              </Button>
            </Link>
          </div>

          {/* Graphical Mockup Dashboard */}
          <div className="mt-16 rounded-xl border border-slate-800 bg-slate-900/40 p-4 max-w-4xl mx-auto shadow-2xl shadow-purple-500/5 backdrop-blur-sm relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-amber-500/60" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/60" />
                <span className="text-xs font-mono text-slate-500 ml-2">bash ~ gitforge sync --all</span>
              </div>
              <div className="rounded-lg bg-slate-900 px-2.5 py-1 text-[10px] font-mono text-purple-400 border border-slate-800">
                LIVE LOG
              </div>
            </div>
            
            <div className="text-left font-mono text-xs sm:text-sm space-y-2.5 text-slate-300 p-2 overflow-x-auto leading-relaxed">
              <div className="flex items-center gap-2 text-slate-500">
                <span>[17:42:01]</span>
                <span className="text-purple-400">INFO</span>
                <span>Connecting to webhook channels...</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <span>[17:42:02]</span>
                <span className="text-purple-400">INFO</span>
                <span>Syncing <span className="text-slate-100">react-nexus</span> stars: <span className="text-amber-400 font-bold">3,452 (+12)</span></span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <span>[17:42:04]</span>
                <span className="text-emerald-400 font-semibold">SUCCESS</span>
                <span>Vulnerability scan on <span className="text-slate-100">hyper-cli</span> passed with <span className="text-emerald-400">0 alerts</span></span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <span>[17:42:06]</span>
                <span className="text-purple-400">INFO</span>
                <span>Index compression finished. Catalog updated.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20 border-b border-slate-900 bg-slate-950/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white tracking-tight sm:text-4xl">
              Engineered for Developer Velocity
            </h2>
            <p className="mt-4 text-slate-400">
              Spend less time configuring environments and more time writing features. Find vetted project setups instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat) => (
              <FeatureCard key={feat.title} {...feat} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Chips Section */}
      <section className="py-16 border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-white">Browse by Focus</h2>
              <p className="text-slate-400 text-sm mt-1">Discover customized blueprints for every development environment.</p>
            </div>
            <Link to="/products" className="text-sm font-semibold text-purple-400 hover:text-purple-300 inline-flex items-center gap-1">
              View all tags <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            {['React', 'Next.js', 'Rust', 'Docker', 'State Management', 'WebGL', 'CLI', 'OAuth', 'SQL', 'PostgreSQL', 'Vite', 'TypeScript'].map((tag) => (
              <Link 
                key={tag} 
                to={`/products`}
                className="text-xs font-mono font-semibold px-4 py-2.5 rounded-xl border border-slate-900 bg-slate-900/30 text-slate-400 hover:text-slate-200 hover:border-slate-800 hover:bg-slate-900/60 transition-all cursor-pointer"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 border-b border-slate-900 bg-slate-950/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight">Featured Repositories</h2>
              <p className="text-slate-400 mt-2">The highest-rated project foundations in our index.</p>
            </div>
            <Link to="/products">
              <Button variant="outline" size="sm">
                View Browser
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white tracking-tight">Trusted by Platform Engineers</h2>
            <p className="mt-4 text-slate-400">
              Here is what developers and security professionals say about GitForge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((test, index) => (
              <TestimonialCard key={index} {...test} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Conversion Section */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-80 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 blur-3xl rounded-full -z-10" />
        
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-900 bg-slate-900/30 p-8 sm:p-12 backdrop-blur-sm text-center relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl" />
            
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to Share Your Codebase?
            </h2>
            <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              List your repository, configure webhook synchronizations, and let thousands of developers access your template sandbox.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                Register Your Repository
              </Button>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
