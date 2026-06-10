import React from 'react'
import { Star, GitFork, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from './Button'

export function ProductCard({
  id,
  title,
  description,
  tags = [],
  stars = 0,
  forks = 0,
  author = { name: '', avatar: '' },
  category = ''
}) {
  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-purple-500/5">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-slate-800 text-purple-400 border border-slate-700/50">
            {category}
          </span>
          <div className="flex items-center gap-1 text-slate-500">
            <span className="text-xs font-mono">#{id}</span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-white transition-colors duration-300 flex items-center justify-between">
          <span>{title}</span>
          <ArrowUpRight className="w-4 h-4 text-slate-500 opacity-0 group-hover:opacity-100 group-hover:text-purple-400 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0" />
        </h3>

        <p className="text-sm text-slate-400 mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800/60 text-slate-300 border border-slate-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4 mt-auto">
        <div className="flex items-center gap-2">
          <img
            src={author.avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${author.name}`}
            alt={author.name}
            className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700"
          />
          <span className="text-xs font-medium text-slate-400 hover:text-purple-400 transition-colors">
            {author.name}
          </span>
        </div>

        <div className="flex items-center gap-3 text-slate-400">
          <div className="flex items-center gap-1 text-xs hover:text-amber-400 transition-colors">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="font-mono">{stars.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1 text-xs hover:text-indigo-400 transition-colors">
            <GitFork className="w-3.5 h-3.5" />
            <span className="font-mono">{forks.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
