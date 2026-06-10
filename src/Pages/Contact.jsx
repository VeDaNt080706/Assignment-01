import React, { useState } from 'react'
import { Mail, MessageSquare, MapPin, Send, HelpCircle, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react'
import { Button } from '../Components/Button'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      q: "How do I list my repository on GitForge?",
      a: "Simply click 'Get Started' in the navigation bar, sign in with your GitHub account, and select the repositories you want to index. Our system automatically parses your README, tags, and languages."
    },
    {
      q: "Is GitForge free to use?",
      a: "Yes! GitForge is 100% free and open source for public repositories. We offer premium enterprise features for team workspace cataloging and private self-hosted deployment."
    },
    {
      q: "Can I customize the design of my repository cards?",
      a: "Absolutely. You can add a `gitforge.json` configuration file to your repository root to customize the card's accent colors, banner graphics, and custom category badges."
    },
    {
      q: "How frequently is the repository metadata synced?",
      a: "We sync repository stars, forks, and codebase changes in real-time using GitHub Webhooks. Manual refreshes can also be triggered from your user dashboard."
    }
  ]

  const validate = () => {
    const errors = {}
    if (!formData.name.trim()) errors.name = 'Name is required'
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required'
    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long'
    }
    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = validate()
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setFormErrors({})
    } else {
      setFormErrors(errors)
    }
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            Have questions about integrations, enterprise features, or community listings? Drop us a message.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            
            <div className="flex gap-4 p-4 rounded-xl border border-slate-900 bg-slate-900/30">
              <div className="rounded-lg bg-purple-500/10 p-3 text-purple-400 shrink-0 h-fit">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-200">Email Support</h3>
                <p className="text-sm text-slate-400 mt-1">Our team replies within 12-24 hours.</p>
                <a href="mailto:support@gitforge.dev" className="text-sm text-purple-400 hover:text-purple-300 font-medium mt-1 inline-block">
                  support@gitforge.dev
                </a>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl border border-slate-900 bg-slate-900/30">
              <div className="rounded-lg bg-indigo-500/10 p-3 text-indigo-400 shrink-0 h-fit">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-200">Community Chat</h3>
                <p className="text-sm text-slate-400 mt-1">Join 5,000+ developers on our Discord server.</p>
                <a href="#" className="text-sm text-indigo-400 hover:text-indigo-300 font-medium mt-1 inline-block">
                  Join Discord Community
                </a>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl border border-slate-900 bg-slate-900/30">
              <div className="rounded-lg bg-pink-500/10 p-3 text-pink-400 shrink-0 h-fit">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-200">Headquarters</h3>
                <p className="text-sm text-slate-400 mt-1">GitForge Technologies, Inc.</p>
                <p className="text-sm text-slate-500 mt-1">
                  100 Pine Street, Suite 1200<br />San Francisco, CA 94111
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm relative">
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-emerald-500/10 p-4 text-emerald-400 mb-6 border border-emerald-500/20 animate-bounce">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                <p className="text-slate-400 max-w-md">
                  Thank you for reaching out. A developer support specialist will get back to you shortly.
                </p>
                <Button 
                  variant="outline" 
                  size="md" 
                  className="mt-8"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full rounded-lg border bg-slate-950/60 px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors ${
                        formErrors.name ? 'border-red-500/80 focus:ring-red-500' : 'border-slate-800'
                      }`}
                      placeholder="Your name"
                    />
                    {formErrors.name && <p className="mt-1 text-xs text-red-400 font-medium">{formErrors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full rounded-lg border bg-slate-950/60 px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors ${
                        formErrors.email ? 'border-red-500/80 focus:ring-red-500' : 'border-slate-800'
                      }`}
                      placeholder="you@example.com"
                    />
                    {formErrors.email && <p className="mt-1 text-xs text-red-400 font-medium">{formErrors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full rounded-lg border bg-slate-950/60 px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors ${
                      formErrors.subject ? 'border-red-500/80 focus:ring-red-500' : 'border-slate-800'
                    }`}
                    placeholder="How can we help you?"
                  />
                  {formErrors.subject && <p className="mt-1 text-xs text-red-400 font-medium">{formErrors.subject}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full rounded-lg border bg-slate-950/60 px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors resize-none ${
                      formErrors.message ? 'border-red-500/80 focus:ring-red-500' : 'border-slate-800'
                    }`}
                    placeholder="Enter details..."
                  />
                  {formErrors.message && <p className="mt-1 text-xs text-red-400 font-medium">{formErrors.message}</p>}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full justify-center"
                  icon={Send}
                  iconPosition="right"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="border-t border-slate-900 pt-16 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-12">
            <HelpCircle className="w-6 h-6 text-purple-400" />
            <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div 
                  key={index} 
                  className="border border-slate-900 bg-slate-900/20 rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex justify-between items-center w-full px-6 py-4.5 text-left text-base font-semibold text-slate-200 hover:text-white hover:bg-slate-900/40 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-purple-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-slate-400 leading-relaxed border-t border-slate-900/60 bg-slate-950/20">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}
