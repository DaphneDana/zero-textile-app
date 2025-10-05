import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { IntroductionSection } from "@/components/introduction-section"
import { AboutPreviewSection } from "@/components/about-preview-section"
import { ProductShowcaseSection } from "@/components/product-showcase-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Footer } from "@/components/footer"

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
