import { Navigation } from "@/components/navigation"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Search, Tag, Package, Truck } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

const services = [
  {
    icon: MessageCircle,
    title: "Free Consultation",
    description:
      "We offer free consultation and tell you what we know about production, costs, lead-time, delivery, etc. With this knowledge, you can know better if you are ready to order products, how much money you need, and what you need to do next.",
    cta: "Schedule A Meeting",
    ctaLink: "/contact",
  },
  {
    icon: Search,
    title: "Sourcing",
    description:
      "We have a sourcing team to source fabrics, buttons, zippers, and trims for your special-order production. They use their professionalism to make things easier for you. We recommend the latest or most popular fabrics to our customers so they can create something suitable for their brands and uniforms.",
  },
  {
    icon: Tag,
    title: "Labels & Tags",
    description:
      "We can provide custom labels and tags so you can further customize your own products and create a unique brand identity.",
  },
  {
    icon: Package,
    title: "Packaging",
    description:
      "We provide special packaging for your products, ensuring they arrive in perfect condition and make a great impression.",
  },
  {
    icon: Truck,
    title: "Delivery",
    description:
      "We use various delivery methods using best delivery firms such as Posta Uganda, DHL, FedEx and other Courier services operated by best bus companies and transporters in Uganda for large quantities.",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground">Our Services</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              End-to-end support for your fashion business
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="p-8 md:p-12 hover:shadow-xl transition-all duration-300 hover:border-primary/50"
                >
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">{service.title}</h3>
                      <p className="text-lg text-foreground leading-relaxed">{service.description}</p>
                      {service.cta && (
                        <div className="pt-2">
                          <Button asChild className="bg-primary hover:bg-primary/90">
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
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">Ready to Get Started?</h2>
            <p className="text-lg md:text-xl opacity-90">
              Let's discuss how we can help bring your fashion vision to life with our comprehensive services.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
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
