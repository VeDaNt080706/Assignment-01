import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Leaf, ShieldCheck, Sparkles, Truck, Star, Heart, ShoppingBag } from 'lucide-react'
import { Button } from '../Components/Button'
import { FeatureCard } from '../Components/FeatureCard'
import { ProductCard } from '../Components/ProductCard'
import { TestimonialCard } from '../Components/TestimonialCard'

export default function Homepage() {
  const [activeLook, setActiveLook] = useState(0)

  const lookbook = [
    {
      id: 1,
      title: 'Classic Cable-Knit Sweater',
      price: '$89.00',
      description: 'Heavily textured sky blue knit pullover crafted from organic wool-blend fibers.',
      image: '/media__1781118956389.jpg',
      category: 'Sweaters'
    },
    {
      id: 4,
      title: 'Cream White Knit Sweater',
      price: '$85.00',
      description: 'Elegant cream knit crewneck sweater featuring dense knit cabling and double-ribbed edges.',
      image: '/media__1781118956841.jpg',
      category: 'Sweaters'
    },
    {
      id: 2,
      title: 'Striped Casual Oxford',
      price: '$59.00',
      description: 'Comfortable band-collar linen shirt styled with clean blue-and-white vertical pin-striping.',
      image: '/media__1781118956555.jpg',
      category: 'Shirts'
    }
  ]

  const features = [
    {
      icon: Leaf,
      title: 'Organic & Recycled Fabrics',
      description: '95% of our fibers are certified organic cotton, merino wool, or GRS-recycled polyester.'
    },
    {
      icon: ShieldCheck,
      title: 'Double-Stitched Seams',
      description: 'Reinforced stress points, heavy-duty buttons, and knit ribbing built to keep shape for years.'
    },
    {
      icon: Sparkles,
      title: 'Timeless Silhouette Design',
      description: 'Garments designed with clean, minimalist cuts that stack, layer, and coordinate effortlessly.'
    },
    {
      icon: Truck,
      title: 'Carbon-Neutral Delivery',
      description: 'Offsets calculated on all shipments. Enjoy free US shipping and seamless 30-day returns.'
    }
  ]

  const featuredProducts = [
    {
      id: 1,
      title: 'Classic Cable-Knit Sweater',
      description: 'A premium heavy-blend sky blue cable knit sweater. Designed with a classic V-neck cut, perfect for layering over smart collars.',
      price: 89.00,
      rating: 4.8,
      image: '/media__1781118956389.jpg',
      category: 'Sweaters',
      tags: ['Blue', 'Knitwear']
    },
    {
      id: 4,
      title: 'Cream White Knit Sweater',
      description: 'Elegant off-white cable knit crewneck sweater. Cozy textured knit patterns, double-cuffed cuffs, and relaxed silhouette.',
      price: 85.00,
      rating: 4.9,
      image: '/media__1781118956841.jpg',
      category: 'Sweaters',
      tags: ['White', 'Knitwear']
    },
    {
      id: 2,
      title: 'Striped Casual Oxford Shirt',
      description: 'Lightweight and breathable blue-and-white vertical striped cotton shirt. Casual band collar, ideal for warm spring days.',
      price: 59.00,
      rating: 4.6,
      image: '/media__1781118956555.jpg',
      category: 'Shirts',
      tags: ['Stripes', 'Casual']
    }
  ]

  const bestSellers = [
    {
      id: 3,
      title: 'Navy Short-Sleeve Resort Shirt',
      description: 'Modern navy blue short-sleeve button-down shirt. Premium blend with a relaxed camp-collar and tailored chest fit.',
      price: 48.00,
      rating: 4.7,
      image: '/media__1781118956688.jpg',
      category: 'Shirts',
      tags: ['Blue', 'Relaxed']
    },
    {
      id: 5,
      title: 'Chevron Textured Knit Sweater',
      description: 'Premium white knit pullover featuring chevron rib-knitting. Standard fit, clean cuffs, and structural warmth.',
      price: 92.00,
      rating: 4.8,
      image: '/media__1781118956877.jpg',
      category: 'Sweaters',
      tags: ['White', 'Chevron']
    }
  ]

  const testimonials = [
    {
      quote: "The cable-knit sweater is thick, luxurious, and heavy. It washed perfectly and didn't shrink or lose shape. Absolute favorite wardrobe addition.",
      author: "Liam H.",
      role: "Designer",
      company: "Atelier Studio",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=LiamH",
      rating: 5
    },
    {
      quote: "Extremely pleased with the vertical striped cotton shirt. The collar holds up nicely under jackets and the organic cotton fabric is incredibly breathable.",
      author: "Clara M.",
      role: "Creative Director",
      company: "Mode NY",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ClaraM",
      rating: 5
    },
    {
      quote: "Shipping was fast, and the jacket fit perfectly. I love that they prioritize carbon-neutral supply lines and ethically audited sewing studios.",
      author: "Marcus K.",
      role: "Frontend Engineer",
      company: "Webflow",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=MarcusK",
      rating: 5
    }
  ]

  return (
    <div className="bg-[#F8FAFC] text-[#111827] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden bg-gradient-to-br from-blue-50/40 via-white to-[#F8FAFC]">
        {/* Decorative elements */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-400/5 blur-3xl rounded-full -z-10" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-400/5 blur-3xl rounded-full -z-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-[#2563EB] mb-6 shadow-sm">
                <span className="flex h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                Summer Knitwear Release Live
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#111827] leading-[1.08] mb-6">
                Crafted for Comfort, <br />
                <span className="bg-gradient-to-r from-[#2563EB] to-indigo-600 bg-clip-text text-transparent">
                  Tailored for Style
                </span>
              </h1>
              
              <p className="text-[#6B7280] text-base sm:text-lg leading-relaxed max-w-xl mb-8 font-medium">
                Elevate your daily apparel selection with certified organic fabrics, reinforced tailor seams, and comfortable silhouettes that span seasons.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/products">
                  <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right" className="bg-[#0F172A] hover:bg-[#2563EB] hover:border-[#2563EB]">
                    Shop the Collection
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="border-slate-200">
                    Our Story
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Interactive Lookbook Widget */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-xl shadow-slate-100/60 relative">
                {/* Lookbook selector tabs */}
                <div className="flex justify-between items-center border-b border-slate-100 pb-3.5 mb-4">
                  <div className="flex gap-2">
                    {lookbook.map((look, index) => (
                      <button
                        key={look.id}
                        onClick={() => setActiveLook(index)}
                        className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                          activeLook === index
                            ? 'bg-[#0F172A] border-[#0F172A] text-white shadow-sm'
                            : 'bg-slate-50 border-slate-100 text-[#6B7280] hover:bg-slate-100 hover:text-[#111827]'
                        }`}
                      >
                        Look 0{index + 1}
                      </button>
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded">
                    Featured Item
                  </span>
                </div>

                {/* Selected look display */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                  <div className="sm:col-span-6 rounded-xl overflow-hidden aspect-[4/5] bg-slate-50 border border-slate-100">
                    <img
                      src={lookbook[activeLook].image}
                      alt={lookbook[activeLook].title}
                      className="w-full h-full object-cover object-center animate-fade-in"
                    />
                  </div>
                  <div className="sm:col-span-6 flex flex-col justify-between h-full py-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">
                        {lookbook[activeLook].category}
                      </span>
                      <h3 className="text-xl font-extrabold text-[#111827] mt-1 mb-2">
                        {lookbook[activeLook].title}
                      </h3>
                      <p className="text-xs text-[#6B7280] leading-relaxed mb-4">
                        {lookbook[activeLook].description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[9px] font-bold text-[#6B7280] uppercase">Price</span>
                        <span className="text-xl font-black text-[#111827]">{lookbook[activeLook].price}</span>
                      </div>
                      <Link to="/products">
                        <Button variant="secondary" size="sm" className="bg-[#2563EB] text-white flex items-center gap-1.5">
                          <ShoppingBag className="w-3.5 h-3.5" /> View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature Matrix Section */}
      <section className="py-16 border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-[#111827] tracking-tight">
              Craftsmanship & Sourcing
            </h2>
            <p className="mt-3 text-sm text-[#6B7280] font-medium">
              We design and construct wardrobe pieces to outlast temporary trends.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat) => (
              <FeatureCard key={feat.title} {...feat} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 border-b border-slate-100 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
            <div>
              <h2 className="text-2xl font-black text-[#111827]">Browse Collections</h2>
              <p className="text-[#6B7280] text-sm mt-1">Discover custom cuts and tailoring across seasonal categories.</p>
            </div>
            <Link to="/products" className="text-sm font-bold text-[#2563EB] hover:underline inline-flex items-center gap-1">
              Browse shop catalog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Sweaters', count: '3 Items', desc: 'Heavy cable & textured knits', bg: 'from-amber-50 to-orange-50' },
              { name: 'Shirts', count: '2 Items', desc: 'Casual band collar & camp collar', bg: 'from-blue-50 to-indigo-50' },
              { name: 'Outerwear', count: '2 Items', desc: 'Merino coats & denim jackets', bg: 'from-slate-100 to-slate-200/50' },
              { name: 'Pants', count: '1 Item', desc: 'Comfort fit organic chinos', bg: 'from-emerald-50 to-teal-50' }
            ].map((cat) => (
              <Link 
                key={cat.name} 
                to="/products"
                className={`group p-6 rounded-2xl border border-slate-100 bg-white hover:border-[#2563EB]/20 hover:shadow-md transition-all duration-300 relative overflow-hidden`}
              >
                <div className={`absolute right-[-20px] bottom-[-20px] w-24 h-24 rounded-full bg-gradient-to-tr ${cat.bg} opacity-30 group-hover:scale-150 transition-transform duration-500`} />
                <span className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider">{cat.count}</span>
                <h3 className="text-lg font-bold text-[#111827] mt-1 group-hover:text-[#2563EB] transition-colors">{cat.name}</h3>
                <p className="text-xs text-[#6B7280] mt-1.5 leading-relaxed font-semibold">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-black text-[#111827] tracking-tight">New Arrivals</h2>
              <p className="text-[#6B7280] text-sm mt-1.5">Fresh items and textured garments just added to our line.</p>
            </div>
            <Link to="/products">
              <Button variant="outline" size="sm" className="border-slate-200">
                View Shop
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16 border-b border-slate-100 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-[#111827] tracking-tight">Best Sellers</h2>
            <p className="mt-3 text-sm text-[#6B7280] font-medium">Customer-favorite essentials and high-rated knits.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-16 border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-[#111827] tracking-tight">Styling Reviews</h2>
            <p className="mt-3 text-sm text-[#6B7280] font-medium">
              See how customers rate the comfort, tailoring, and quality of our garments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((test, index) => (
              <TestimonialCard key={index} {...test} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner (Conversion Section) */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-900 bg-[#0F172A] p-8 sm:p-12 text-center relative overflow-hidden shadow-lg">
            {/* Background design elements */}
            <div className="absolute right-[-40px] bottom-[-40px] w-64 h-64 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute left-[-40px] top-[-40px] w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <span className="text-[10px] font-bold text-[#2563EB] tracking-widest uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
              Limited Time Welcome Offer
            </span>
            
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl mt-6">
              Upgrade Your Seasonal Wardrobe
            </h2>
            
            <p className="mt-4 text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              Get an instant 10% discount on your first checkout. Enter code <span className="text-white font-mono font-bold bg-slate-800 px-2.5 py-1 rounded border border-slate-700">TRENDY10</span> in cart checkout.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/products">
                <Button variant="secondary" size="lg" className="bg-[#2563EB] text-white border-none font-bold" icon={ArrowRight} iconPosition="right">
                  Claim Discount Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-slate-700 hover:bg-slate-800 text-white font-bold">
                  Shipping Questions?
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
