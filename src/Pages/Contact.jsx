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
      q: "When will my order ship?",
      a: "We process and dispatch all orders within 1-2 business days. Standard domestic shipping takes 3-5 business days, and tracking codes are sent via email instantly upon dispatch."
    },
    {
      q: "What is your return and exchange policy?",
      a: "We support free returns and exchanges within 30 days of delivery for all unworn, unwashed items in original packaging with tags attached. Simply start a request on our self-serve returns portal."
    },
    {
      q: "How do I find my correct clothing size?",
      a: "Each product features a detailed sizing chart with exact chest, shoulder, and sleeve length measurements. For our heavy cable-knit sweaters, we recommend sizing up for a relaxed fit."
    },
    {
      q: "Do you ship internationally?",
      a: "Yes! We ship internationally to over 120 countries. Duties, local taxes, and delivery fees are computed dynamically during checkout based on your destination country."
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
    <div className="pt-24 pb-16 min-h-screen bg-[#F8FAFC] text-[#111827] flex flex-col justify-center animate-fade-in">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-black tracking-tight text-[#111827] sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-base text-[#6B7280]">
            Questions about shipping rates, wholesale partnerships, or ordering custom fits? Message our support team.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl font-bold text-[#111827] mb-6">Contact Information</h2>
            
            <div className="flex gap-4 p-5 rounded-2xl border border-slate-100 bg-white shadow-sm">
              <div className="rounded-xl bg-[#2563EB]/10 p-3 text-[#2563EB] shrink-0 h-fit">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#111827]">Email Support</h3>
                <p className="text-xs text-[#6B7280] mt-1">Our support agents answer within 12 hours.</p>
                <a href="mailto:support@trendystyle.com" className="text-sm text-[#2563EB] hover:underline font-bold mt-1.5 inline-block">
                  support@trendystyle.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-2xl border border-slate-100 bg-white shadow-sm">
              <div className="rounded-xl bg-[#2563EB]/10 p-3 text-[#2563EB] shrink-0 h-fit">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#111827]">Direct Live Chat</h3>
                <p className="text-xs text-[#6B7280] mt-1">Available Mon-Fri 9:00 AM - 6:00 PM EST.</p>
                <a href="#" className="text-sm text-[#2563EB] hover:underline font-bold mt-1.5 inline-block">
                  Start Live Chat Session
                </a>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-2xl border border-slate-100 bg-white shadow-sm">
              <div className="rounded-xl bg-slate-900/10 p-3 text-[#0F172A] shrink-0 h-fit">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#111827]">New York HQ</h3>
                <p className="text-xs text-[#6B7280] mt-1">Trendystyle Atelier & Showroom</p>
                <p className="text-sm text-[#6B7280] mt-2 leading-relaxed font-semibold">
                  120 Fashion Plaza, Suite 400<br />New York, NY 10012
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7 bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm relative">
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-green-500/10 p-4 text-[#22C55E] mb-6 border border-green-500/20 animate-bounce">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-black text-[#111827] mb-2">Message Sent Successfully!</h3>
                <p className="text-[#6B7280] text-sm max-w-md">
                  Thank you for reaching out to us. A customer relations specialist will reply to you shortly.
                </p>
                <Button 
                  variant="outline" 
                  size="md" 
                  className="mt-8 font-bold border-slate-200"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#111827] mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full rounded-xl border bg-slate-50 px-4 py-2.5 text-sm text-[#111827] placeholder-slate-400 focus:border-[#2563EB] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563EB] transition-all ${
                        formErrors.name ? 'border-red-500/80 focus:ring-red-500' : 'border-slate-200'
                      }`}
                      placeholder="Your name"
                    />
                    {formErrors.name && <p className="mt-1 text-xs text-red-500 font-bold">{formErrors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#111827] mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full rounded-xl border bg-slate-50 px-4 py-2.5 text-sm text-[#111827] placeholder-slate-400 focus:border-[#2563EB] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563EB] transition-all ${
                        formErrors.email ? 'border-red-500/80 focus:ring-red-500' : 'border-slate-200'
                      }`}
                      placeholder="you@example.com"
                    />
                    {formErrors.email && <p className="mt-1 text-xs text-red-500 font-bold">{formErrors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#111827] mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full rounded-xl border bg-slate-50 px-4 py-2.5 text-sm text-[#111827] placeholder-slate-400 focus:border-[#2563EB] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563EB] transition-all ${
                      formErrors.subject ? 'border-red-500/80 focus:ring-red-500' : 'border-slate-200'
                    }`}
                    placeholder="How can we help you?"
                  />
                  {formErrors.subject && <p className="mt-1 text-xs text-red-500 font-bold">{formErrors.subject}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#111827] mb-2">Message</label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full rounded-xl border bg-slate-50 px-4 py-2.5 text-sm text-[#111827] placeholder-slate-400 focus:border-[#2563EB] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563EB] transition-all resize-none ${
                      formErrors.message ? 'border-red-500/80 focus:ring-red-500' : 'border-slate-200'
                    }`}
                    placeholder="Provide details about your question..."
                  />
                  {formErrors.message && <p className="mt-1 text-xs text-red-500 font-bold">{formErrors.message}</p>}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full justify-center bg-[#0F172A] hover:bg-[#2563EB] py-3 text-sm font-bold text-white shadow-md rounded-xl"
                  icon={Send}
                  iconPosition="right"
                >
                  Send Inquiry
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="border-t border-slate-200 pt-16 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-12">
            <HelpCircle className="w-6 h-6 text-[#2563EB]" />
            <h2 className="text-2xl font-black text-[#111827]">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div 
                  key={index} 
                  className="border border-slate-100 bg-white rounded-2xl overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex justify-between items-center w-full px-6 py-4.5 text-left text-base font-bold text-[#111827] hover:text-[#2563EB] hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#2563EB]" /> : <ChevronDown className="w-4 h-4 text-[#6B7280]" />}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-[#6B7280] leading-relaxed border-t border-slate-50 bg-slate-50/20">
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
