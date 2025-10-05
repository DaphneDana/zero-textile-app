"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shirt, Printer, Tag, Sparkles, ChevronDown } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { KentePattern, AfricanGeometricPattern, TribalPattern } from "@/components/african-patterns"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const clothingProducts = [
  {
    name: "Body Suits",
    images: [
      "/elegant-african-woman-in-beautiful-colorful-tradit.jpg",
      "/modern-african-traditional-kitenge-fashion-colorfu.jpg",
      "/casual-african-fashion-dress-colorful-modern.jpg"
    ]
  },
  {
    name: "Blouses",
    images: [
      "/professional-african-woman-office-wear-elegant-sui.jpg",
      "/casual-african-fashion-dress-colorful-modern.jpg",
      "/elegant-african-woman-in-beautiful-colorful-tradit.jpg"
    ]
  },
  {
    name: "Dresses",
    images: [
      "/casual-african-fashion-dress-colorful-modern.jpg",
      "/elegant-african-party-dress-wedding-fashion.jpg",
      "/modern-african-traditional-kitenge-fashion-colorfu.jpg"
    ]
  },
  {
    name: "Skirts",
    images: [
      "/elegant-african-party-dress-wedding-fashion.jpg",
      "/casual-african-fashion-dress-colorful-modern.jpg",
      "/professional-african-woman-office-wear-elegant-sui.jpg"
    ]
  },
  {
    name: "Knickers",
    images: [
      "/modern-african-traditional-kitenge-fashion-colorfu.jpg",
      "/elegant-african-woman-in-beautiful-colorful-tradit.jpg"
    ]
  },
  {
    name: "Long Shirts",
    images: [
      "/professional-african-woman-office-wear-elegant-sui.jpg",
      "/casual-african-fashion-dress-colorful-modern.jpg"
    ]
  },
  {
    name: "Trousers",
    images: [
      "/casual-african-fashion-dress-colorful-modern.jpg",
      "/professional-african-woman-office-wear-elegant-sui.jpg"
    ]
  },
  {
    name: "Shorts",
    images: [
      "/elegant-african-party-dress-wedding-fashion.jpg",
      "/casual-african-fashion-dress-colorful-modern.jpg"
    ]
  },
  {
    name: "Lounge Wear",
    images: [
      "/elegant-african-woman-in-beautiful-colorful-tradit.jpg",
      "/modern-african-traditional-kitenge-fashion-colorfu.jpg"
    ]
  },
  {
    name: "T-shirts",
    images: [
      "/modern-african-traditional-kitenge-fashion-colorfu.jpg",
      "/casual-african-fashion-dress-colorful-modern.jpg"
    ]
  },
  {
    name: "Pyjamas",
    images: [
      "/casual-african-fashion-dress-colorful-modern.jpg",
      "/elegant-african-woman-in-beautiful-colorful-tradit.jpg"
    ]
  },
]

const sizes = ["Small", "Medium", "Large", "2XXL"]
const materials = ["Cotton", "Denier", "Polyester", "Polymer"]

const specialOrders = [
  "School uniforms",
  "Medical uniforms",
  "Engineering and technical work uniforms",
  "Private security uniforms",
]

export default function ProductsPage() {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null)

  const toggleProduct = (productName: string) => {
    setExpandedProduct(expandedProduct === productName ? null : productName)
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/elegant-african-party-dress-wedding-fashion.jpg')`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>

        {/* African Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 text-white pointer-events-none">
          <KentePattern />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl animate-fade-in-up">
              Our Products
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full animate-fade-in" />
            <p className="text-xl md:text-2xl text-primary font-semibold italic text-pretty drop-shadow-lg animate-fade-in-up animation-delay-200">
              "Riotously patterned, colorful, densely and unassailably fabulous."
            </p>
          </div>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-primary/50" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-primary/50" />
      </section>

      {/* Clothing Section */}
      <section className="py-20 bg-card relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] text-primary pointer-events-none">
          <AfricanGeometricPattern />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <Shirt className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">Clothing</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
              <p className="text-lg text-muted-foreground">High-quality female apparel for every occasion</p>
            </div>

            {/* Product Accordion */}
            <div className="space-y-4">
              {clothingProducts.map((product, index) => {
                const isExpanded = expandedProduct === product.name

                return (
                  <Card
                    key={index}
                    className="overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all"
                  >
                    {/* Product Header - Clickable */}
                    <button
                      onClick={() => toggleProduct(product.name)}
                      className="w-full p-6 flex items-center justify-between text-left hover:bg-accent/50 transition-colors group"
                    >
                      <span className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                        {product.name}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-primary transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Product Images - Expandable */}
                    {isExpanded && (
                      <div className="px-6 pb-6 pt-2">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                          {product.images.map((image, imgIndex) => (
                            <div
                              key={imgIndex}
                              className="relative aspect-square overflow-hidden rounded-lg group/img cursor-pointer"
                            >
                              <img
                                src={image}
                                alt={`${product.name} ${imgIndex + 1}`}
                                className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                              />
                              {/* Gradient Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity" />

                              {/* Pattern Overlay */}
                              <div className="absolute inset-0 opacity-0 group-hover/img:opacity-10 text-white pointer-events-none transition-opacity">
                                <KentePattern />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </Card>
                )
              })}
            </div>

            {/* Sizes and Materials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <Card className="p-8 space-y-4 border-2 border-transparent hover:border-primary/20 transition-all bg-gradient-to-br from-card to-card/50">
                <h3 className="font-serif text-2xl font-bold text-foreground">Available Sizes</h3>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size, index) => (
                    <Badge key={index} className="px-4 py-2 text-sm bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors">
                      {size}
                    </Badge>
                  ))}
                </div>
              </Card>

              <Card className="p-8 space-y-4 border-2 border-transparent hover:border-primary/20 transition-all bg-gradient-to-br from-card to-card/50">
                <h3 className="font-serif text-2xl font-bold text-foreground">Materials</h3>
                <div className="flex flex-wrap gap-2">
                  {materials.map((material, index) => (
                    <Badge key={index} className="px-4 py-2 text-sm bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors">
                      {material}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>

            {/* Special Orders */}
            <Card className="p-8 space-y-6 bg-accent/30">
              <h3 className="font-serif text-2xl font-bold text-foreground text-center">Special Orders</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {specialOrders.map((order, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="text-foreground">{order}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Printing Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] text-primary pointer-events-none">
          <TribalPattern />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary/20 bg-gradient-to-br from-card to-card/50">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                {/* Left - Content */}
                <div className="flex flex-col justify-center space-y-6">
                  <div className="flex justify-center md:justify-start">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                      <Printer className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-center md:text-left space-y-4">
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">Printing</h2>
                    <div className="w-24 h-1 bg-primary mx-auto md:mx-0 rounded-full" />
                    <p className="text-lg text-foreground leading-relaxed">
                      We print talking T-Shirts that communicate life, peace, unity and identity of our people.
                    </p>
                  </div>
                </div>

                {/* Right - Image */}
                <div className="relative aspect-square rounded-lg overflow-hidden group">
                  <img
                    src="/modern-african-traditional-kitenge-fashion-colorfu.jpg"
                    alt="Printed T-shirt sample"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 text-white pointer-events-none transition-opacity">
                    <KentePattern />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Brand Labels & Bags */}
      <section className="py-20 bg-gradient-to-br from-accent/30 via-accent/10 to-accent/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] text-primary pointer-events-none">
          <KentePattern />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Section Header */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <Tag className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                Brand Labels, Hangtags & Bags
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We offer customizable brand labels, hang tags, and bags to help elevate brand identity and ensure
                products stand out with a professional and personalized touch.
              </p>
            </div>

            {/* Image Carousel */}
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {[
                  {
                    title: "Brand Labels",
                    description: "Custom woven and printed labels",
                    image: "/elegant-african-woman-in-beautiful-colorful-tradit.jpg",
                    pattern: AfricanGeometricPattern
                  },
                  {
                    title: "Hangtags",
                    description: "Professional custom hangtags",
                    image: "/professional-african-woman-office-wear-elegant-sui.jpg",
                    pattern: TribalPattern
                  },
                  {
                    title: "Branded Bags",
                    description: "Custom packaging solutions",
                    image: "/casual-african-fashion-dress-colorful-modern.jpg",
                    pattern: KentePattern
                  },
                  {
                    title: "Woven Labels",
                    description: "High-quality woven brand labels",
                    image: "/modern-african-traditional-kitenge-fashion-colorfu.jpg",
                    pattern: AfricanGeometricPattern
                  },
                  {
                    title: "Printed Tags",
                    description: "Vibrant printed hangtags",
                    image: "/elegant-african-party-dress-wedding-fashion.jpg",
                    pattern: TribalPattern
                  },
                  {
                    title: "Shopping Bags",
                    description: "Custom branded shopping bags",
                    image: "/elegant-african-woman-in-beautiful-colorful-tradit.jpg",
                    pattern: KentePattern
                  },
                ].map((item, index) => {
                  const Pattern = item.pattern
                  return (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="overflow-hidden group hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary/30 h-full">
                        <div className="relative aspect-square overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                          {/* Pattern Overlay */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 text-white pointer-events-none transition-opacity">
                            <Pattern />
                          </div>

                          {/* Text Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="font-serif text-2xl font-bold mb-2">{item.title}</h3>
                            <p className="text-sm opacity-90">{item.description}</p>
                          </div>
                        </div>
                      </Card>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 bg-primary/10 border-primary/20 hover:bg-primary hover:text-primary-foreground" />
              <CarouselNext className="hidden md:flex -right-12 bg-primary/10 border-primary/20 hover:bg-primary hover:text-primary-foreground" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Embroidery Section */}
      <section className="py-20 bg-card relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] text-primary pointer-events-none">
          <AfricanGeometricPattern />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">Embroidery</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Needlework */}
              <Card className="overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-primary/20 bg-gradient-to-br from-card to-card/50">
                <div className="relative h-64 overflow-hidden group">
                  <img
                    src="/professional-african-woman-office-wear-elegant-sui.jpg"
                    alt="Needlework embroidery"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 text-white pointer-events-none transition-opacity">
                    <KentePattern />
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-foreground">Needlework</h3>
                  <p className="text-foreground leading-relaxed">
                    We can embroider your logo or brand slogan on clothing, adding a professional and personalized touch
                    to your garments.
                  </p>
                </div>
              </Card>

              {/* Towel Embroidery */}
              <Card className="overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-primary/20 bg-gradient-to-br from-card to-card/50">
                <div className="relative h-64 overflow-hidden group">
                  <img
                    src="/elegant-african-party-dress-wedding-fashion.jpg"
                    alt="Towel embroidery"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 text-white pointer-events-none transition-opacity">
                    <TribalPattern />
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-foreground">Towel Embroidery</h3>
                  <p className="text-foreground leading-relaxed">
                    Beautiful towel embroidery adds personality to your garments and creates unique, memorable pieces.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Target Market */}
      <section className="py-12 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.05] text-white pointer-events-none">
          <TribalPattern />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">Our Target Market</h2>
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              ZTC aims to provide modern African outfits to globally recognized stores and Fashion Houses who retail to
              customers who are trendy, whilst keeping a strong sense of African tradition.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <Link href="/contact">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppWidget />
      <Footer />
    </main>
  )
}
