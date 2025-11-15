import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Search, Tag, Package, Truck } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { KentePattern, AfricanGeometricPattern, TribalPattern } from "@/components/african-patterns"

export const metadata: Metadata = {
  title: "Our Services | Zeroe Textile Co. Ltd - Fashion Manufacturing Support Services",
  description: "Free consultation, fabric sourcing, custom labels & tags, packaging, and delivery services. End-to-end support for your fashion business in Uganda and beyond.",
  openGraph: {
    title: "Our Services | Zeroe Textile Co. Ltd",
    description: "Free consultation, sourcing, labels, packaging, and delivery. End-to-end fashion manufacturing support.",
    url: "https://zeroetextile.co.ug/services",
    images: ["/professional-african-woman-office-wear-elegant-sui.jpg"],
  },
  alternates: {
    canonical: "https://zeroetextile.co.ug/services",
  },
}

const services = [
  {
    id: "consultation",
    icon: MessageCircle,
    title: "Free Consultation",
    description:
      "We offer free consultation and tell you what we know about the production, costs, lead-time, delivery, etc. With the knowledge, you can know better if you are ready to order the products, how much money you need, what you need to do next.",
    cta: "Schedule A Meeting with our team now!",
    ctaLink: "/contact",
  },
  {
    id: "sourcing",
    icon: Search,
    title: "Sourcing",
    description:
      "We have a sourcing team to source the fabrics, buttons, zippers, and trims for your special-order production. They use their professionalism to make things easier for you. We will recommend the latest or most popular fabrics to our customers so they can create something suitable for their brands- uniforms etc.",
  },
  {
    id: "labels",
    icon: Tag,
    title: "Labels & Tags",
    description:
      "We can provide custom labels and tags so you can further customize your own products.",
  },
  {
    id: "packaging",
    icon: Package,
    title: "Packaging",
    description: "We provide special packaging for your products",
  },
  {
    id: "delivery",
    icon: Truck,
    title: "Delivery",
    description:
      "We use various delivery methods using best delivery firms such as Posta Uganda, DHL, FedEx and other Courier services operated best bus companies and transporters in Uganda for large quantities.",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/professional-african-woman-office-wear-elegant-sui.jpg')`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>

        {/* African Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 text-white pointer-events-none">
          <TribalPattern />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl animate-fade-in-up">
              Our Services
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full animate-fade-in" />
            <p className="text-xl md:text-2xl text-white/90 text-pretty drop-shadow-lg animate-fade-in-up animation-delay-200">
              End-to-end support for your fashion business
            </p>
          </div>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-primary/50" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-primary/50" />
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-card relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] text-primary pointer-events-none">
          <AfricanGeometricPattern />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon
              const patterns = [KentePattern, TribalPattern, AfricanGeometricPattern]
              const Pattern = patterns[index % patterns.length]

              return (
                <Card
                  key={index}
                  id={service.id}
                  className="p-8 md:p-12 hover:shadow-2xl transition-all duration-300 hover:border-primary/30 border-2 border-transparent bg-gradient-to-br from-card to-card/50 relative overflow-hidden group"
                >
                  {/* Pattern Overlay */}
                  <div className="absolute top-0 right-0 w-48 h-48 opacity-[0.03] text-primary pointer-events-none">
                    <Pattern />
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/20" />

                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 relative z-10">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">{service.title}</h2>
                      <p className="text-lg text-foreground leading-relaxed">{service.description}</p>
                      {service.cta && (
                        <div className="pt-2">
                          <Button asChild className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                            <Link href={service.ctaLink || "/contact"}>
                              {service.cta}
                              <MessageCircle className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.05] text-white pointer-events-none">
          <KentePattern />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-lg md:text-xl opacity-90">
              Let's discuss how we can help bring your fashion vision to life with our comprehensive services.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent transition-all hover:scale-105"
              >
                <Link href="/products">View Our Products</Link>
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
