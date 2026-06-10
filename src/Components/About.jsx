import React from 'react'
import { Award, Shield, Users, Leaf, Sparkles, Github, Linkedin } from 'lucide-react'

export function About() {
  const stats = [
    { label: 'Happy Customers', value: '100K+' },
    { label: 'Sustainable Materials', value: '95%' },
    { label: 'Global Retail Partners', value: '50+' },
    { label: 'Customer Satisfaction', value: '99.2%' }
  ]

  const values = [
    {
      icon: Leaf,
      title: 'Ethical & Eco-Conscious',
      description: 'We prioritize certified organic cotton, recycled polyester, and linen fibers to ensure minimal environment foot-print.'
    },
    {
      icon: Shield,
      title: 'Premium Durability',
      description: 'We double-stitch seams, reinforce necklines, and select heavier weights so our garments withstand years of wear and washing.'
    },
    {
      icon: Sparkles,
      title: 'Timeless Aesthetic',
      description: 'Our designs avoid fleeting micro-trends. We design minimalist silhouettes that coordinate seamlessly across seasons.'
    },
    {
      icon: Users,
      title: 'Fair Working Conditions',
      description: 'We audit all partnering sewing studios annually to verify safe workspaces, fair living wages, and employee protection.'
    }
  ]

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Co-Founder & Creative Director',
      bio: 'Former head of knitwear at a major sustainable label. Focuses on comfortable fits and modern textures.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SarahChen',
      github: '#',
      linkedin: '#'
    },
    {
      name: 'Marcus Vance',
      role: 'Co-Founder & COO',
      bio: 'Logistics expert with 12 years in ethical apparel supply chains. Keeps our carbon offsets calculated.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MarcusVance',
      github: '#',
      linkedin: '#'
    },
    {
      name: 'Elena Rostova',
      role: 'Lead Apparel Designer',
      bio: 'Pattern-cutting specialist focused on gender-neutral fit profiles and structural knit patterns.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ElenaRostova',
      github: '#',
      linkedin: '#'
    }
  ]

  return (
    <div className="pt-24 pb-16 min-h-screen bg-[#F8FAFC] text-[#111827]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Mission Statement Hero */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold tracking-wider uppercase text-[#2563EB]">Our Mission</span>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl mt-3 text-[#111827]">
            Timeless Tailoring for Sustainable Daily Style
          </h1>
          <p className="mt-6 text-lg text-[#6B7280] leading-relaxed">
            Trendystyle was founded with a clear focus: to create clean-cut, premium daily essentials from eco-responsible materials. We believe clothes should feel wonderful to wear, hold their shape over time, and be crafted with respect for workers and the planet.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24 border border-slate-100 bg-white rounded-2xl p-6 sm:p-8 shadow-sm text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="p-4">
              <div className="text-3xl sm:text-4xl font-black text-[#2563EB] font-sans">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-[#6B7280] mt-2 font-bold uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#111827]">Our Foundational Values</h2>
            <p className="text-[#6B7280] mt-2 text-sm">How we select mills, pattern prototypes, and assemble our lines.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val) => {
              const IconComp = val.icon
              return (
                <div key={val.title} className="flex gap-4.5 p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="rounded-xl bg-[#2563EB]/10 p-3 text-[#2563EB] shrink-0 h-fit">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#111827]">{val.title}</h3>
                    <p className="text-sm text-[#6B7280] mt-2 leading-relaxed">{val.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#111827]">Meet Our Creators</h2>
            <p className="text-[#6B7280] mt-2 text-sm">The makers and coordinators behind our design house.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div 
                key={member.name} 
                className="group flex flex-col items-center text-center p-6 border border-slate-100 bg-white rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-20 h-20 rounded-full border border-slate-100 bg-slate-50 p-1 group-hover:border-[#2563EB]/50 transition-colors duration-300"
                />
                <h3 className="text-lg font-bold text-[#111827] mt-4">{member.name}</h3>
                <p className="text-xs text-[#2563EB] font-bold mt-1 uppercase tracking-wider">{member.role}</p>
                <p className="text-sm text-[#6B7280] mt-3 leading-relaxed px-4">{member.bio}</p>
                
                <div className="flex gap-4 mt-6">
                  <a href={member.github} className="text-slate-400 hover:text-[#2563EB] transition-colors">
                    <Github className="w-4.5 h-4.5" />
                  </a>
                  <a href={member.linkedin} className="text-slate-400 hover:text-[#2563EB] transition-colors">
                    <Linkedin className="w-4.5 h-4.5" />
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
