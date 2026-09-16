"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Menu,
  X,
  Coffee,
  ShoppingBag,
  User,
  Search,
  Star,
  ArrowRight,
  Package,
  Users,
  Award,
  Truck,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  ChevronRight,
  Leaf,
  Heart,
  MapPin
} from "lucide-react"

const categories = [
  { id: "all", name: "All Coffees" },
  { id: "single-origin", name: "Single Origin" },
  { id: "blends", name: "Signature Blends" },
  { id: "espresso", name: "Espresso" },
  { id: "decaf", name: "Decaf" }
]

const products = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    description: "Bright citrus notes with a floral jasmine finish. Light roast.",
    category: "single-origin",
    featured: true,
    gradient: "linear-gradient(135deg, #8C8178 0%, #2F2925 100%)"
  },
  {
    id: 2,
    name: "Colombian Supremo",
    description: "Rich caramel sweetness balanced with nutty undertones. Medium roast.",
    category: "single-origin",
    featured: true,
    gradient: "linear-gradient(135deg, #B86B3D 0%, #211A17 100%)"
  },
  {
    id: 3,
    name: "House Blend",
    description: "Our signature blend with chocolate and toasted almond notes.",
    category: "blends",
    featured: true,
    gradient: "linear-gradient(135deg, #2F2925 0%, #B86B3D 100%)"
  },
  {
    id: 4,
    name: "Sumatra Mandheling",
    description: "Earthy, full bodied with hints of dark chocolate. Dark roast.",
    category: "single-origin",
    featured: false,
    gradient: "linear-gradient(135deg, #211A17 0%, #8C8178 100%)"
  },
  {
    id: 5,
    name: "Espresso Roma",
    description: "Bold and intense with a velvety crema. Perfect for espresso.",
    category: "espresso",
    featured: false,
    gradient: "linear-gradient(135deg, #B86B3D 0%, #2F2925 100%)"
  },
  {
    id: 6,
    name: "Morning Ritual Blend",
    description: "Smooth and balanced, ideal for your daily pour over.",
    category: "blends",
    featured: false,
    gradient: "linear-gradient(135deg, #8C8178 0%, #B86B3D 100%)"
  },
  {
    id: 7,
    name: "Swiss Water Decaf",
    description: "All the flavor, none of the caffeine. Chemical free process.",
    category: "decaf",
    featured: false,
    gradient: "linear-gradient(135deg, #2F2925 0%, #8C8178 100%)"
  },
  {
    id: 8,
    name: "Guatemala Antigua",
    description: "Complex spice notes with a smoky, chocolatey finish.",
    category: "single-origin",
    featured: false,
    gradient: "linear-gradient(135deg, #211A17 0%, #B86B3D 100%)"
  },
  {
    id: 9,
    name: "Espresso Noir",
    description: "Intense dark roast with bold cherry and cocoa notes.",
    category: "espresso",
    featured: false,
    gradient: "linear-gradient(135deg, #B86B3D 0%, #211A17 100%)"
  }
]

const testimonials = [
  {
    text: "The Ethiopian Yirgacheffe transformed my morning ritual. The floral notes are absolutely divine.",
    role: "Coffee Enthusiast",
    rating: 5
  },
  {
    text: "Finally found a roaster that understands quality. The freshness is unmatched.",
    role: "Home Barista",
    rating: 5
  },
  {
    text: "Their subscription service ensures I never run out of exceptional coffee. Highly recommended.",
    role: "Loyal Customer",
    rating: 5
  }
]

const stats = [
  { icon: Package, value: "50+", label: "Curated Coffees" },
  { icon: Users, value: "10K+", label: "Happy Customers" },
  { icon: Award, value: "15", label: "Origin Countries" },
  { icon: Truck, value: "48hr", label: "Fresh Delivery" }
]

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [newsletterLoading, setNewsletterLoading] = useState(false)
  const [newsletterSuccess, setNewsletterSuccess] = useState(false)
  const [newsletterError, setNewsletterError] = useState("")

  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter(p => p.category === activeCategory)

  const featuredProducts = products.filter(p => p.featured)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setNewsletterLoading(true)
    setNewsletterError("")

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONSTRUCTOR_API}/v1/forms/${process.env.NEXT_PUBLIC_PROJECT_ID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: newsletterEmail, formType: "newsletter" })
        }
      )

      if (response.ok) {
        setNewsletterSuccess(true)
        setNewsletterEmail("")
      } else {
        setNewsletterError("Something went wrong. Please try again.")
      }
    } catch {
      setNewsletterError("Unable to submit. Please try again later.")
    } finally {
      setNewsletterLoading(false)
    }
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#F4EBDD" }}>
      {/* Sticky Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
        style={{
          backgroundColor: "rgba(244, 235, 221, 0.95)",
          borderColor: "#8C8178"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#B86B3D" }}
              >
                <Coffee className="w-5 h-5" style={{ color: "#F4EBDD" }} />
              </div>
              <span
                className="text-xl lg:text-2xl font-bold tracking-tight"
                style={{ fontFamily: "Fraunces, serif", color: "#211A17" }}
              >
                Ember & Bean
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <a
                href="#products"
                className="text-sm font-medium transition-colors hover:opacity-70"
                style={{ fontFamily: "Manrope, sans-serif", color: "#2F2925" }}
              >
                Shop Coffee
              </a>
              <a
                href="#about"
                className="text-sm font-medium transition-colors hover:opacity-70"
                style={{ fontFamily: "Manrope, sans-serif", color: "#2F2925" }}
              >
                Our Story
              </a>
              <Link
                href="/orders"
                className="text-sm font-medium transition-colors hover:opacity-70"
                style={{ fontFamily: "Manrope, sans-serif", color: "#2F2925" }}
              >
                Order History
              </Link>
              <a
                href="#testimonials"
                className="text-sm font-medium transition-colors hover:opacity-70"
                style={{ fontFamily: "Manrope, sans-serif", color: "#2F2925" }}
              >
                Reviews
              </a>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:opacity-70"
                style={{ color: "#2F2925" }}
              >
                <Search className="w-5 h-5" />
              </Button>
              <Link href="/account">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:opacity-70"
                  style={{ color: "#2F2925" }}
                >
                  <User className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/cart">
                <Button
                  className="gap-2"
                  style={{ backgroundColor: "#B86B3D", color: "#F4EBDD" }}
                >
                  <ShoppingBag className="w-4 h-4" />
                  Cart
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2"
              style={{ color: "#2F2925" }}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ backgroundColor: "#F4EBDD" }}
        >
          <div className="px-4 py-6 space-y-4 border-t" style={{ borderColor: "#8C8178" }}>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-lg font-medium"
              style={{ fontFamily: "Manrope, sans-serif", color: "#2F2925" }}
            >
              Shop Coffee
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-lg font-medium"
              style={{ fontFamily: "Manrope, sans-serif", color: "#2F2925" }}
            >
              Our Story
            </a>
            <Link
              href="/orders"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-lg font-medium"
              style={{ fontFamily: "Manrope, sans-serif", color: "#2F2925" }}
            >
              Order History
            </Link>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-lg font-medium"
              style={{ fontFamily: "Manrope, sans-serif", color: "#2F2925" }}
            >
              Reviews
            </a>
            <div className="flex gap-4 pt-4">
              <Link href="/account">
                <Button
                  variant="outline"
                  className="flex-1"
                  style={{ borderColor: "#B86B3D", color: "#B86B3D" }}
                >
                  Account
                </Button>
              </Link>
              <Link href="/cart">
                <Button
                  className="flex-1 gap-2"
                  style={{ backgroundColor: "#B86B3D", color: "#F4EBDD" }}
                >
                  <ShoppingBag className="w-4 h-4" />
                  Cart
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Split Section */}
      <section className="pt-20 lg:pt-24 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1 space-y-8">
              <Badge
                className="px-4 py-1.5"
                style={{
                  backgroundColor: "rgba(184, 107, 61, 0.15)",
                  color: "#B86B3D",
                  fontFamily: "Manrope, sans-serif"
                }}
              >
                <Leaf className="w-3 h-3 mr-2" />
                Ethically Sourced
              </Badge>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                style={{ fontFamily: "Fraunces, serif", color: "#211A17" }}
              >
                Exceptional Coffee,
                <span style={{ color: "#B86B3D" }}> Roasted Fresh</span>
              </h1>
              <p
                className="text-lg lg:text-xl max-w-lg leading-relaxed"
                style={{ fontFamily: "Manrope, sans-serif", color: "#8C8178" }}
              >
                Discover our curated collection of single origin coffees and artisan blends, 
                roasted in small batches and delivered directly to your door.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#products">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto gap-2 text-base px-8"
                    style={{ backgroundColor: "#211A17", color: "#F4EBDD" }}
                  >
                    Shop Collection
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <a href="#about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto text-base px-8"
                    style={{ borderColor: "#2F2925", color: "#2F2925" }}
                  >
                    Our Story
                  </Button>
                </a>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-medium"
                      style={{
                        borderColor: "#F4EBDD",
                        backgroundColor: "#8C8178",
                        color: "#F4EBDD"
                      }}
                    >
                      <User className="w-4 h-4" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-current"
                        style={{ color: "#B86B3D" }}
                      />
                    ))}
                  </div>
                  <p
                    className="text-sm"
                    style={{ fontFamily: "Manrope, sans-serif", color: "#8C8178" }}
                  >
                    Loved by 10,000+ coffee enthusiasts
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="order-1 lg:order-2 relative">
              <div
                className="aspect-square rounded-3xl relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #2F2925 0%, #211A17 50%, #B86B3D 100%)"
                }}
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F4EBDD' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Coffee
                      className="w-32 h-32 lg:w-48 lg:h-48 mx-auto mb-6"
                      style={{ color: "#F4EBDD", opacity: 0.9 }}
                    />
                    <p
                      className="text-lg lg:text-xl tracking-widest uppercase"
                      style={{ fontFamily: "Manrope, sans-serif", color: "#F4EBDD", opacity: 0.8 }}
                    >
                      Small Batch Roasted
                    </p>
                  </div>
                </div>
              </div>
              {/* Floating Card */}
              <div
                className="absolute -bottom-6 -left-6 p-4 rounded-2xl shadow-xl hidden sm:block"
                style={{ backgroundColor: "#F4EBDD" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#B86B3D" }}
                  >
                    <Truck className="w-6 h-6" style={{ color: "#F4EBDD" }} />
                  </div>
                  <div>
                    <p
                      className="font-semibold"
                      style={{ fontFamily: "Manrope, sans-serif", color: "#211A17" }}
                    >
                      Free Shipping
                    </p>
                    <p
                      className="text-sm"
                      style={{ fontFamily: "Manrope, sans-serif", color: "#8C8178" }}
                    >
                      On orders over $50
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#211A17" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <Badge
              className="mb-4"
              style={{
                backgroundColor: "rgba(184, 107, 61, 0.2)",
                color: "#B86B3D"
              }}
            >
              Featured Selection
            </Badge>
            <h2
              className="text-3xl lg:text-5xl font-bold mb-4"
              style={{ fontFamily: "Fraunces, serif", color: "#F4EBDD" }}
            >
              Customer Favorites
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "Manrope, sans-serif", color: "#8C8178" }}
            >
              Our most loved coffees, selected for their exceptional flavor profiles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {featuredProducts.map((product, index) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <Card
                  className={`group cursor-pointer overflow-hidden border-0 ${
                    index === 0 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                  style={{ backgroundColor: "#2F2925" }}
                >
                  <div className={`relative ${index === 0 ? "aspect-square md:aspect-[4/3]" : "aspect-[4/3]"}`}>
                    <div
                      className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                      style={{ background: product.gradient }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Coffee
                        className={`${index === 0 ? "w-24 h-24 md:w-32 md:h-32" : "w-16 h-16"} transition-transform duration-300 group-hover:rotate-12`}
                        style={{ color: "#F4EBDD", opacity: 0.6 }}
                      />
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge
                        style={{
                          backgroundColor: "#B86B3D",
                          color: "#F4EBDD"
                        }}
                      >
                        Best Seller
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3
                      className={`font-bold mb-2 ${index === 0 ? "text-xl lg:text-2xl" : "text-lg"}`}
                      style={{ fontFamily: "Fraunces, serif", color: "#F4EBDD" }}
                    >
                      {product.name}
                    </h3>
                    <p
                      className="text-sm mb-4 line-clamp-2"
                      style={{ fontFamily: "Manrope, sans-serif", color: "#8C8178" }}
                    >
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span
                        className="text-sm font-medium"
                        style={{ fontFamily: "Manrope, sans-serif", color: "#B86B3D" }}
                      >
                        View Details
                      </span>
                      <ChevronRight className="w-4 h-4" style={{ color: "#B86B3D" }} />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid with Category Tabs */}
      <section id="products" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl lg:text-5xl font-bold mb-4"
              style={{ fontFamily: "Fraunces, serif", color: "#211A17" }}
            >
              Shop Our Collection
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto mb-8"
              style={{ fontFamily: "Manrope, sans-serif", color: "#8C8178" }}
            >
              From bright single origins to rich espresso blends, find your perfect cup
            </p>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    backgroundColor: activeCategory === category.id ? "#211A17" : "transparent",
                    color: activeCategory === category.id ? "#F4EBDD" : "#2F2925",
                    border: `1px solid ${activeCategory === category.id ? "#211A17" : "#8C8178"}`
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <Card
                  className="group cursor-pointer overflow-hidden border transition-all duration-300 hover:shadow-xl"
                  style={{ borderColor: "#8C8178", backgroundColor: "#F4EBDD" }}
                >
                  <div className="relative aspect-[4/3]">
                    <div
                      className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                      style={{ background: product.gradient }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Coffee
                        className="w-16 h-16 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
                        style={{ color: "#F4EBDD", opacity: 0.6 }}
                      />
                    </div>
                    <button
                      className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: "#F4EBDD" }}
                    >
                      <Heart className="w-5 h-5" style={{ color: "#B86B3D" }} />
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3
                        className="text-lg font-bold"
                        style={{ fontFamily: "Fraunces, serif", color: "#211A17" }}
                      >
                        {product.name}
                      </h3>
                    </div>
                    <p
                      className="text-sm mb-4 line-clamp-2"
                      style={{ fontFamily: "Manrope, sans-serif", color: "#8C8178" }}
                    >
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="outline"
                        className="capitalize"
                        style={{ borderColor: "#8C8178", color: "#8C8178" }}
                      >
                        {product.category.replace("-", " ")}
                      </Badge>
                      <Button
                        size="sm"
                        className="gap-1"
                        style={{ backgroundColor: "#B86B3D", color: "#F4EBDD" }}
                      >
                        <ShoppingBag className="w-3 h-3" />
                        Add
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button
                variant="outline"
                size="lg"
                className="gap-2"
                style={{ borderColor: "#211A17", color: "#211A17" }}
              >
                View All Products
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-28" style={{ backgroundColor: "#2F2925" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Badge
                className="mb-6"
                style={{
                  backgroundColor: "rgba(184, 107, 61, 0.2)",
                  color: "#B86B3D"
                }}
              >
                Our Story
              </Badge>
              <h2
                className="text-3xl lg:text-5xl font-bold mb-6 leading-tight"
                style={{ fontFamily: "Fraunces, serif", color: "#F4EBDD" }}
              >
                Crafting Coffee with Purpose & Passion
              </h2>
              <div
                className="space-y-4 text-base lg:text-lg leading-relaxed"
                style={{ fontFamily: "Manrope, sans-serif", color: "#8C8178" }}
              >
                <p>
                  Ember & Bean was born from a simple belief: exceptional coffee should be 
                  accessible to everyone who appreciates quality. We partner directly with 
                  farmers across 15 countries to source the finest beans at fair prices.
                </p>
                <p>
                  Each batch is roasted in small quantities at our facility, ensuring optimal 
                  freshness and flavor development. From the volcanic soils of Guatemala to 
                  the highland farms of Ethiopia, every cup tells a story of craftsmanship 
                  and care.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <div
                  className="flex items-center gap-3 px-4 py-3 rounded-lg"
                  style={{ backgroundColor: "rgba(244, 235, 221, 0.1)" }}
                >
                  <Leaf className="w-5 h-5" style={{ color: "#B86B3D" }} />
                  <span
                    className="text-sm font-medium"
                    style={{ fontFamily: "Manrope, sans-serif", color: "#F4EBDD" }}
                  >
                    Ethically Sourced
                  </span>
                </div>
                <div
                  className="flex items-center gap-3 px-4 py-3 rounded-lg"
                  style={{ backgroundColor: "rgba(244, 235, 221, 0.1)" }}
                >
                  <Coffee className="w-5 h-5" style={{ color: "#B86B3D" }} />
                  <span
                    className="text-sm font-medium"
                    style={{ fontFamily: "Manrope, sans-serif", color: "#F4EBDD" }}
                  >
                    Small Batch Roasted
                  </span>
                </div>
                <div
                  className="flex items-center gap-3 px-4 py-3 rounded-lg"
                  style={{ backgroundColor: "rgba(244, 235, 221, 0.1)" }}
                >
                  <Award className="w-5 h-5" style={{ color: "#B86B3D" }} />
                  <span
                    className="text-sm font-medium"
                    style={{ fontFamily: "Manrope, sans-serif", color: "#F4EBDD" }}
                  >
                    Quality Guaranteed
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className="aspect-[4/5] rounded-3xl overflow-hidden"
                style={{
                  background: "linear-gradient(180deg, #B86B3D 0%, #211A17 100%)"
                }}
              >
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F4EBDD' fill-opacity='0.3'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm80 80c0-5.523 4.477-10 10-10v10H90z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-8">
                    <Coffee className="w-20 h-20 mx-auto mb-4" style={{ color: "#F4EBDD" }} />
                    <p
                      className="text-xl lg:text-2xl font-bold mb-2"
                      style={{ fontFamily: "Fraunces, serif", color: "#F4EBDD" }}
                    >
                      Roasted Fresh
                    </p>
                    <p
                      className="text-sm"
                      style={{ fontFamily: "Manrope, sans-serif", color: "rgba(244, 235, 221, 0.7)" }}
                    >
                      Every order, every time
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="absolute -bottom-6 -right-6 p-6 rounded-2xl shadow-xl hidden md:block"
                style={{ backgroundColor: "#F4EBDD" }}
              >
                <p
                  className="text-4xl font-bold mb-1"
                  style={{ fontFamily: "Fraunces, serif", color: "#B86B3D" }}
                >
                  15+
                </p>
                <p
                  className="text-sm"
                  style={{ fontFamily: "Manrope, sans-serif", color: "#8C8178" }}
                >
                  Origin Countries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16" style={{ backgroundColor: "#B86B3D" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3" style={{ color: "#F4EBDD" }} />
                <p
                  className="text-3xl lg:text-4xl font-bold mb-1"
                  style={{ fontFamily: "Fraunces, serif", color: "#F4EBDD" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-sm"
                  style={{ fontFamily: "Manrope, sans-serif", color: "rgba(244, 235, 221, 0.8)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section id="testimonials" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <Badge
              className="mb-4"
              style={{
                backgroundColor: "rgba(184, 107, 61, 0.15)",
                color: "#B86B3D"
              }}
            >
              Customer Reviews
            </Badge>
            <h2
              className="text-3xl lg:text-5xl font-bold mb-4"
              style={{ fontFamily: "Fraunces, serif", color: "#211A17" }}
            >
              What Our Customers Say
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "Manrope, sans-serif", color: "#8C8178" }}
            >
              Join thousands of coffee lovers who have discovered their perfect brew
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 lg:p-8 border"
                style={{ borderColor: "#8C8178", backgroundColor: "#F4EBDD" }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-current"
                      style={{ color: "#B86B3D" }}
                    />
                  ))}
                </div>
                <p
                  className="text-base lg:text-lg mb-6 leading-relaxed"
                  style={{ fontFamily: "Manrope, sans-serif", color: "#2F2925" }}
                >
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#2F2925" }}
                  >
                    <User className="w-6 h-6" style={{ color: "#F4EBDD" }} />
                  </div>
                  <div>
                    <p
                      className="font-semibold"
                      style={{ fontFamily: "Manrope, sans-serif", color: "#211A17" }}
                    >
                      {testimonial.role}
                    </p>
                    <p
                      className="text-sm"
                      style={{ fontFamily: "Manrope, sans-serif", color: "#8C8178" }}
                    >
                      Verified Buyer
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Strip */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#211A17" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {newsletterSuccess ? (
            <div className="py-8">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#B86B3D" }}
              >
                <Mail className="w-8 h-8" style={{ color: "#F4EBDD" }} />
              </div>
              <h3
                className="text-2xl font-bold mb-2"
                style={{ fontFamily: "Fraunces, serif", color: "#F4EBDD" }}
              >
                Welcome to the Family!
              </h3>
              <p
                className="text-base"
                style={{ fontFamily: "Manrope, sans-serif", color: "#8C8178" }}
              >
                Check your inbox for a special welcome offer.
              </p>
            </div>
          ) : (
            <>
              <Mail className="w-10 h-10 mx-auto mb-4" style={{ color: "#B86B3D" }} />
              <h2
                className="text-2xl lg:text-4xl font-bold mb-4"
                style={{ fontFamily: "Fraunces, serif", color: "#F4EBDD" }}
              >
                Join the Ember & Bean Community
              </h2>
              <p
                className="text-base lg:text-lg mb-8 max-w-xl mx-auto"
                style={{ fontFamily: "Manrope, sans-serif", color: "#8C8178" }}
              >
                Subscribe for brewing tips, new roast announcements, and exclusive member discounts.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="flex-1 h-12 px-4 border-0"
                  style={{
                    backgroundColor: "#2F2925",
                    color: "#F4EBDD",
                    fontFamily: "Manrope, sans-serif"
                  }}
                />
                <Button
                  type="submit"
                  disabled={newsletterLoading}
                  className="h-12 px-8"
                  style={{ backgroundColor: "#B86B3D", color: "#F4EBDD" }}
                >
                  {newsletterLoading ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
              {newsletterError && (
                <p
                  className="mt-4 text-sm"
                  style={{ fontFamily: "Manrope, sans-serif", color: "#B86B3D" }}
                >
                  {newsletterError}
                </p>
              )}
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 lg:py-20 border-t" style={{ borderColor: "#8C8178" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Brand */}
            <div className="col-span-2 lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#B86B3D" }}
                >
                  <Coffee className="w-5 h-5" style={{ color: "#F4EBDD" }} />
                </div>
                <span
                  className="text-xl font-bold"
                  style={{ fontFamily: "Fraunces, serif", color: "#211A17" }}
                >
                  Ember & Bean
                </span>
              </Link>
              <p
                className="text-sm mb-6 max-w-xs"
                style={{ fontFamily: "Manrope, sans-serif", color: "#8C8178" }}
              >
                Crafting exceptional coffee experiences, one cup at a time.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  style={{ backgroundColor: "#2F2925", color: "#F4EBDD" }}
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  style={{ backgroundColor: "#2F2925", color: "#F4EBDD" }}
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  style={{ backgroundColor: "#2F2925", color: "#F4EBDD" }}
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Shop */}
            <div>
              <h4
                className="font-semibold mb-4"
                style={{ fontFamily: "Manrope, sans-serif", color: "#211A17" }}
              >
                Shop
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/products"
                    className="text-sm hover:opacity-70 transition-opacity"
                    style={{ fontFamily: "Manrope, sans-serif", color: "#8C8178" }}
                  >
                    All Coffees
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?category=single-origin"
                    className="text-sm hover:opacity-70 transition-opacity"
                    style={{ fontFamily: "Manrope, sans-serif", color: "#8C8178" }}
                  >
                    Single Origin
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?category=blends"
                    className="text-sm hover:opacity-70 transition-opacity"
                    style={{ fontFamily: "Manrope, sans-serif", color: "#8C8178" }}
                  >
                    Blends
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?category=espresso"
                    className="text-sm hover:opacity-70 transition-opacity"
                    style={{ fontFamily: "Manrope, sans-serif", color: "#8C8178" }}
                  >
                    Espresso
                  </Link>
                </li>
              </ul>
            </div>

            {/* Account */}
            <div>
              <h4
                className="font-semibold mb-4"
                style={{ fontFamily: "Manrope, sans-serif", color: "#211A17" }}
              >
                Account
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/account"
                    className="text-sm hover:opacity-70 transition-opacity"
                    style={{ fontFamily: "Manrope, sans-serif", color: "#8C8178" }}
                  >
                    My Account
                  </Link>
                </li>
                <li>
                  <Link
                    href="/orders"
                    className="text-sm hover:opacity-70 transition-opacity"
                    style={{ fontFamily: "Manrope, sans-serif", color: "#8C8178" }}
                  >
                    Order History
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cart"
                    className="text-sm hover:opacity-70 transition-opacity"
                    style={{ fontFamily: "Manrope, sans-serif", color: "#8C8178" }}
                  >
                    Shopping Cart
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="font-semibold mb-4"
                style={{ fontFamily: "Manrope, sans-serif", color: "#211A17" }}
              >
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:hello@emberandbean.com"
                    className="text-sm hover:opacity-70 transition-opacity flex items-center gap-2"
                    style={{ fontFamily: "Manrope, sans-serif", color: "#8C8178" }}
                  >
                    <Mail className="w-4 h-4" />
                    hello@emberandbean.com
                  </a>
                </li>
                <li>
                  <span
                    className="text-sm flex items-center gap-2"
                    style={{ fontFamily: "Manrope, sans-serif", color: "#8C8178" }}
                  >
                    <MapPin className="w-4 h-4" />
                    Roastery Location
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
            style={{ borderColor: "#8C8178" }}
          >
            <p
              className="text-sm"
              style={{ fontFamily: "Manrope, sans-serif", color: "#8C8178" }}
            >
              © {new Date().getFullYear()} Ember & Bean. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm hover:opacity-70 transition-opacity"
                style={{ fontFamily: "Manrope, sans-serif", color: "#8C8178" }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm hover:opacity-70 transition-opacity"
                style={{ fontFamily: "Manrope, sans-serif", color: "#8C8178" }}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}