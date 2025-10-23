import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const products = [
  {
    title: "Office Wear",
    description: "Skirts, blouses, and suits for working women",
    image: "/images/office.jpg",
  },
  {
    title: "Casual Everyday Wear",
    description: "Dresses, tops, and jeans-style outfits",
    image: "/images/lady1.jpg",
  },
  {
    title: "Occasion & Party Wear",
    description: "Stylish dresses for weddings and events",
    image: "/images/lady3.jpg",
  },
  {
    title: "Traditional Wear",
    description: "Kitenge or gomesi-inspired trendy outfits",
    image: "/images/culture.jpg",
  },
]

export function ProductShowcaseSection() {
  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Our Product Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover our beautiful collection of African-inspired fashion for every occasion
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-serif text-xl font-semibold text-foreground">{product.title}</h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
