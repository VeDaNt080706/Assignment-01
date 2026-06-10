import React from 'react'
import { Award, Compass, Shield, Users, Github, Linkedin, Globe } from 'lucide-react'

export function About() {
  const stats = [
    { label: 'Indexed Repositories', value: '250K+' },
    { label: 'Active Developers', value: '50K+' },
    { label: 'Sync Operations / Day', value: '10M+' },
    { label: 'Community Contributors', value: '1,200+' }
  ]

  const values = [
    {
      icon: Users,
      title: 'Community Centered',
      description: 'We build for developers, with developers. Our project ranking algorithms are entirely transparent and driven by user engagement.'
    },
    {
      icon: Shield,
      title: 'Built-in Integrity',
      description: 'Every index entry undergoes automatic security analysis and dependency vulnerability testing before being published.'
    },
    {
      icon: Compass,
      title: 'Uncompromised Discovery',
      description: 'Our categorization and semantic search indices empower developers to find the precise boilerplate or library they need instantly.'
    },
    {
      icon: Award,
      title: 'High Standards',
      description: 'We only index functional, documented codebases. Quality cataloging is the benchmark of our software platform.'
    }
  ]

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Co-Founder & CEO',
      bio: 'Former staff engineer at GitHub. Passionate about developer workflows and developer advocacy.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SarahChen',
      github: '#',
      linkedin: '#'
    },
    {
      name: 'Marcus Vance',
      role: 'Co-Founder & CTO',
      bio: 'Creator of multiple popular Node.js frameworks. Systems optimizer and database enthusiast.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MarcusVance',
      github: '#',
      linkedin: '#'
    },
    {
      name: 'Elena Rostova',
      role: 'Head of Developer Relations',
      bio: 'Technical author and developer community organizer. Loves rust, webpack, and hosting local hackathons.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ElenaRostova',
      github: '#',
      linkedin: '#'
    }
  ]

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Mission Statement Hero */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold tracking-wider uppercase text-purple-400">Our Mission</span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mt-3 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Cataloging the World's Open-Source Codebases
          </h1>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            GitForge was founded with a simple goal: to index, audit, and organize the open-source community's work, providing software engineers with standard templates, boilerplates, and tools without having to rewrite common utilities from scratch.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24 border border-slate-900 bg-slate-900/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="p-4">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent font-mono">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-2 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Our Core Values</h2>
            <p className="text-slate-400 mt-2">The guidelines that guide how we index, serve, and protect our catalog.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val) => {
              const IconComp = val.icon
              return (
                <div key={val.title} className="flex gap-4 p-5 rounded-xl border border-slate-900 bg-slate-900/30">
                  <div className="rounded-lg bg-purple-500/10 p-3 text-purple-400 shrink-0 h-fit">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-200">{val.title}</h3>
                    <p className="text-sm text-slate-400 mt-2 leading-relaxed">{val.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Meet the Team</h2>
            <p className="text-slate-400 mt-2">The developers and catalogers building the future of GitForge.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div 
                key={member.name} 
                className="group flex flex-col items-center text-center p-6 border border-slate-900 bg-slate-900/30 rounded-2xl hover:border-slate-800 transition-all"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-20 h-20 rounded-full border border-slate-800 bg-slate-900/60 p-1 group-hover:border-purple-500/50 transition-colors duration-300"
                />
                <h3 className="text-lg font-bold text-white mt-4">{member.name}</h3>
                <p className="text-xs text-purple-400 font-semibold mt-1">{member.role}</p>
                <p className="text-sm text-slate-400 mt-3 leading-relaxed px-4">{member.bio}</p>
                
                <div className="flex gap-4 mt-6">
                  <a href={member.github} className="text-slate-500 hover:text-slate-300 transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href={member.linkedin} className="text-slate-500 hover:text-slate-300 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
export default About
