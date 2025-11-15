import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { IntroductionSection } from "@/components/introduction-section"
import { AboutPreviewSection } from "@/components/about-preview-section"
import { ProductShowcaseSection } from "@/components/product-showcase-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Home | Zeroe Textile Co. Ltd - Uganda's Leading Female-Based Clothing Manufacturer",
  description: "Discover Zeroe Textile Co. Ltd, Uganda's largest female-based clothing manufacturer. We create high-quality African-inspired apparel, uniforms, and custom fashion solutions with sustainable practices.",
  openGraph: {
    title: "Zeroe Textile Co. Ltd - Uganda's Leading Female-Based Clothing Manufacturer",
    description: "High-quality African-inspired female apparel. Sustainable fashion manufacturing in Uganda.",
    url: "https://zeroetextile.co.ug",
    images: ["/professional-african-woman-office-wear-elegant-sui.jpg"],
  },
  alternates: {
    canonical: "https://zeroetextile.co.ug",
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <IntroductionSection />
      <AboutPreviewSection />
      <ProductShowcaseSection />
      <TestimonialsSection />
      <CTASection />
      <WhatsAppWidget />
      <Footer />
    </main>
  )
}
