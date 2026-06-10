import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Leaf, ShieldCheck, Sparkles, Truck } from 'lucide-react'
import { Button } from '../Components/Button'
import { FeatureCard } from '../Components/FeatureCard'
import { ProductCard } from '../Components/ProductCard'
import { TestimonialCard } from '../Components/TestimonialCard'

export default function Homepage() {
  const categories = [
    { name: 'Men', image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&w=600' },
    { name: 'Women', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600' },
    { name: 'Accessories', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=600' },
    { name: 'New Arrivals', image: '/media__1781118956877.jpg' }
  ]

  const features = [
    {
      icon: Leaf,
      title: 'Organic Sourcing',
      description: 'Certified linen, organic cotton, and premium recycled polymers selected for comfort.'
    },
    {
      icon: ShieldCheck,
      title: 'Built to Last',
      description: 'Double-stitched stress zones, reinforced neck collars, and select dense threads.'
    },
    {
      icon: Sparkles,
      title: 'Minimal Silhouette',
      description: 'Clean, understated cuts engineered to coordinate across seasons.'
    },
    {
      icon: Truck,
      title: 'Ethical Delivery',
      description: 'Carbon-neutral logistics with free returns and worldwide door tracking.'
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
      quote: "The cream cable-knit is thick, heavy, and fits beautifully around the shoulders. It is a wardrobe staple that has held its structure perfectly.",
      author: "Liam H.",
      role: "Atelier Architect",
      company: "Mode NY",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=LiamH",
      rating: 5
    },
    {
      quote: "Breathable fabric, crisp vertical stripes, and a very comfortable band collar. Perfect clean design matching modern luxury standards.",
      author: "Clara M.",
      role: "Creative Lead",
      company: "Studio Editorial",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ClaraM",
      rating: 5
    },
    {
      quote: "I admire their transparency and carbon offsets. The merino wool trench fits warm and fits true. A true investment piece.",
      author: "Marcus K.",
      role: "Software Designer",
      company: "Atelier",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=MarcusK",
      rating: 5
    }
  ]

  const handleSubscribe = (e) => {
    e.preventDefault()
    alert('Thank you for joining the Trendystyle Atelier Club!')
  }

  return (
    <div className="bg-[#F8FAFC] text-[#111827] min-h-screen">
      
      {/* 1. Hero Section - Full height high contrast layout */}
      <section className="relative min-h-[90vh] flex items-center justify-start bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/media__1781118956841.jpg"
            alt="Trendystyle Editorial Knitwear"
            className="w-full h-full object-cover object-[center_35%] filter brightness-[0.82]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent pointer-events-none" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-24">
          <div className="max-w-xl text-left text-white border-l border-white/20 pl-6 sm:pl-8 py-4">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4C5B9] mb-4 block">
              Atelier Knitwear Series
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light uppercase tracking-tight text-white leading-[1.1] mb-6">
              Comfort <br />
              <span className="font-extrabold">Refined</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-md font-medium">
              We design timeless garments from certified eco-friendly fibers, double-tailored to provide lasting structure and warmth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button variant="secondary" size="lg" className="bg-white hover:bg-slate-100 !text-black border-white font-bold uppercase tracking-widest text-[10px] px-6 py-3">
                  Shop Lookbook
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 font-bold uppercase tracking-widest text-[10px] px-6 py-3">
                  Our Values
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Collection Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6B7280] block">Atelier Showcase</span>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-[#111827] mt-2">
              Featured Collection
            </h2>
            <div className="h-[1.5px] w-12 bg-[#111827] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Category Grid Section */}
      <section className="py-24 bg-[#F8FAFC] border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6B7280] block">Curated Focus</span>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-[#111827] mt-2">
              Shop by Line
            </h2>
            <div className="h-[1.5px] w-12 bg-[#111827] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link 
                to="/products" 
                key={cat.name} 
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm block"
              >
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent flex flex-col justify-end p-6" />
                <div className="absolute bottom-6 left-6 text-white z-10">
                  <h3 className="text-lg font-bold uppercase tracking-wider">{cat.name}</h3>
                  <span className="text-[10px] text-slate-300 font-bold uppercase tracking-widest group-hover:underline block mt-1">
                    Explore &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Best Sellers Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6B7280] block">Customer Favorites</span>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-[#111827] mt-2">
              Best Sellers
            </h2>
            <div className="h-[1.5px] w-12 bg-[#111827] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Brand Story / Craftsmanship Section - Beige backdrop and tall image */}
      <section className="py-24 bg-[#D4C5B9]/15 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-50 border border-slate-200/80 shadow-md">
              <img
                src="/media__1781118956877.jpg"
                alt="Slow Fashion Tailoring details"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center pl-0 lg:pl-6">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6B7280] block">Our Philosophy</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#111827] mt-3 mb-6">
                Crafted to Outlast Seasons
              </h2>
              
              <p className="text-[#6B7280] text-sm leading-relaxed mb-6 font-medium">
                At Trendystyle, we focus on the slow fashion cycle. We partner with ethically audited studios to ensure double-stitched reinforcements, organic cotton composites, and thick yarn fibers that hold shape over years.
              </p>
              
              <p className="text-[#6B7280] text-sm leading-relaxed mb-8 font-medium">
                By selecting minimal palettes—whites, creams, and beige hues—each collection layers perfectly with pieces from prior seasons. Less consumption, better craftsmanship.
              </p>
              
              <div className="flex">
                <Link to="/about">
                  <Button variant="primary" size="md" className="bg-[#111827] text-white hover:bg-[#2563EB] font-bold uppercase tracking-widest text-[10px] px-6 py-3 shadow-md border-none">
                    Read About Our Craft
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Capabilities Section */}
      <section className="py-16 border-b border-slate-100 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat) => (
              <FeatureCard key={feat.title} {...feat} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6B7280] block">Press & reviews</span>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-[#111827] mt-2">
              Atelier Reviews
            </h2>
            <div className="h-[1.5px] w-12 bg-[#111827] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((test, index) => (
              <TestimonialCard key={index} {...test} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter Section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 sm:p-12 text-center shadow-sm relative overflow-hidden">
            <span className="text-[10px] font-bold text-[#6B7280] tracking-widest uppercase bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-100">
              The Trendystyle Atelier Club
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#111827] mt-6 uppercase">
              Join Season Drops
            </h2>
            <p className="mt-4 text-xs text-[#6B7280] max-w-md mx-auto leading-relaxed font-semibold">
              Receive updates about limited knitwear restocks, ethical mill reviews, and 10% off your initial purchase.
            </p>
            <form onSubmit={handleSubscribe} className="mt-8 max-w-md mx-auto flex gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-[#111827] placeholder-slate-400 focus:border-[#111827] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#111827] transition-all font-semibold"
              />
              <Button type="submit" className="bg-[#111827] hover:bg-[#2563EB] hover:border-[#2563EB] text-white shrink-0 font-bold uppercase tracking-wider text-xs px-5 py-2.5 shadow-sm active:scale-97">
                Join
              </Button>
            </form>
          </div>
        </div>
      </section>

    </div>
  )
}
