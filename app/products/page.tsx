import { Navigation } from "@/components/navigation"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shirt, Printer, Tag, Sparkles } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

const clothingProducts = [
  "Body Suits",
  "Blouses",
  "Dresses",
  "Skirts",
  "Knickers",
  "Long Shirts",
  "Trousers",
  "Shorts",
  "Lounge Wear",
  "T-shirts",
  "Pyjamas",
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
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground text-balance">
              Our Products
            </h1>
            <p className="text-lg md:text-xl text-primary font-semibold italic text-pretty">
              "Riotously patterned, colorful, densely and unassailably fabulous."
            </p>
          </div>
        </div>
      </section>

      {/* Clothing Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shirt className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Clothing</h2>
              <p className="text-lg text-muted-foreground">High-quality female apparel for every occasion</p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {clothingProducts.map((product, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer"
                >
                  <p className="font-semibold text-foreground">{product}</p>
                </Card>
              ))}
            </div>

            {/* Sizes and Materials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <Card className="p-8 space-y-4">
                <h3 className="font-serif text-2xl font-bold text-foreground">Available Sizes</h3>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size, index) => (
                    <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                      {size}
                    </Badge>
                  ))}
                </div>
              </Card>

              <Card className="p-8 space-y-4">
                <h3 className="font-serif text-2xl font-bold text-foreground">Materials</h3>
                <div className="flex flex-wrap gap-2">
                  {materials.map((material, index) => (
                    <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 text-center space-y-6 hover:shadow-xl transition-shadow">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Printer className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Printing</h2>
              <p className="text-lg text-foreground leading-relaxed">
                We print talking T-Shirts that communicate life, peace, unity and identity of our people.
              </p>
              <div className="pt-4">
                <img
                  src="/placeholder.svg?height=300&width=600"
                  alt="T-shirt printing samples"
                  className="w-full max-w-2xl mx-auto rounded-lg"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Brand Labels & Bags */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 text-center space-y-6 hover:shadow-xl transition-shadow">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Tag className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                Brand Labels, Hangtags & Bags
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                We offer customizable brand labels, hang tags, and bags to help elevate brand identity and ensure
                products stand out with a professional and personalized touch.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Embroidery Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Embroidery</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow">
                <h3 className="font-serif text-2xl font-bold text-foreground">Needlework</h3>
                <p className="text-foreground leading-relaxed">
                  We can embroider your logo or brand slogan on clothing, adding a professional and personalized touch
                  to your garments.
                </p>
              </Card>

              <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow">
                <h3 className="font-serif text-2xl font-bold text-foreground">Towel Embroidery</h3>
                <p className="text-foreground leading-relaxed">
                  Beautiful towel embroidery adds personality to your garments and creates unique, memorable pieces.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Target Market */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">Our Target Market</h2>
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              ZTC aims to provide modern African outfits to globally recognized stores and Fashion Houses who retail to
              customers who are trendy, whilst keeping a strong sense of African tradition.
            </p>
            <div className="pt-6">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
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
