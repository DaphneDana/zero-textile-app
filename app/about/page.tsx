import { Navigation } from "@/components/navigation"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Card } from "@/components/ui/card"
import { Target, Eye, Focus, Heart, Scissors, ShoppingBag, Recycle, Store, FileCheck, Package, MessageCircle, Shirt, Ruler, Layers, Camera, CheckCircle, Factory, Truck } from "lucide-react"
import { Footer } from "@/components/footer"
import { KentePattern, AfricanGeometricPattern, TribalPattern } from "@/components/african-patterns"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/casual-african-fashion-dress-colorful-modern.jpg')`,
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
              About Us
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full animate-fade-in" />
            <p className="text-lg md:text-2xl text-white/90 text-pretty max-w-3xl mx-auto drop-shadow-lg animate-fade-in-up animation-delay-200">
              Empowering women through sustainable fashion manufacturing
            </p>
          </div>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-primary/50" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-primary/50" />
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-card relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] text-primary pointer-events-none">
          <AfricanGeometricPattern />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">Who We Are</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>

            {/* Split Layout */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Image */}
              <div className="relative group order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/modern-african-traditional-kitenge-fashion-colorfu.jpg"
                    alt="Zeroe Textile manufacturing"
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10 text-white pointer-events-none">
                    <KentePattern />
                  </div>
                </div>
                {/* Decorative Corners */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary/50" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-primary/50" />
              </div>

              {/* Right - Content */}
              <div className="space-y-6 order-1 lg:order-2">
                <div className="space-y-6">
                  <p className="text-lg text-foreground leading-relaxed">
                    <span className="font-bold text-primary text-xl">Zeroe Textile Co. Ltd (ZTC)</span> is a female co-founded high-style full-service local garment manufacturer and
                    wholesaler in <span className="font-semibold">Lira, Northern Uganda</span> offering high-quality products and end-to-end support services from
                    design to bulk manufacturing and delivery.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    Founded in <span className="font-semibold text-primary">2024</span> and registered in May 2025 with the Uganda Registration Service Bureau, ZTC has a
                    dedicated in-house design and production team with more than <span className="font-semibold text-primary">80% being female workers</span> capable of producing
                    <span className="font-semibold text-primary"> 54,027 pieces</span> of broad range of garment categories. We work with over <span className="font-semibold text-primary">5,000 clothing businesses</span> all over
                    northern Uganda and across South Sudan.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 rounded-lg border-l-4 border-primary">
                    <div className="text-2xl font-bold text-primary">80%</div>
                    <div className="text-sm text-muted-foreground">Female Workforce</div>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 rounded-lg border-l-4 border-primary">
                    <div className="text-2xl font-bold text-primary">54,027</div>
                    <div className="text-sm text-muted-foreground">Pieces Produced</div>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 rounded-lg border-l-4 border-primary">
                    <div className="text-2xl font-bold text-primary">5,000+</div>
                    <div className="text-sm text-muted-foreground">Business Partners</div>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 rounded-lg border-l-4 border-primary">
                    <div className="text-2xl font-bold text-primary">2024</div>
                    <div className="text-sm text-muted-foreground">Year Founded</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Focus */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] text-primary pointer-events-none">
          <TribalPattern />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision Card */}
            <Card className="p-8 space-y-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 group border-2 border-transparent hover:border-primary/20 bg-gradient-to-br from-card to-card/50 relative overflow-hidden">
              {/* Pattern Overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.05] text-primary pointer-events-none">
                <AfricanGeometricPattern />
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/30" />

              <div className="relative z-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">Vision</h3>
                <p className="text-foreground leading-relaxed">
                  To be the top eco-cloth female garment producer and distributor in Uganda thus eliminating 'Mitumba'
                  (second-hand clothes) from the local markets.
                </p>
              </div>
            </Card>

            {/* Mission Card */}
            <Card className="p-8 space-y-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 group border-2 border-transparent hover:border-primary/20 bg-gradient-to-br from-card to-card/50 relative overflow-hidden">
              {/* Pattern Overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.05] text-primary pointer-events-none">
                <KentePattern />
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/30" />

              <div className="relative z-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">Mission</h3>
                <p className="text-foreground leading-relaxed">
                  To source quality textile fabrics, transform it through value addition and supply final high-quality,
                  stylish female garments at an affordable price allowing modern consumers to wear again and again while
                  delivering exceptional customer services to our clients.
                </p>
              </div>
            </Card>

            {/* Focus Card */}
            <Card className="p-8 space-y-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 group border-2 border-transparent hover:border-primary/20 bg-gradient-to-br from-card to-card/50 relative overflow-hidden">
              {/* Pattern Overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.05] text-primary pointer-events-none">
                <TribalPattern />
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/30" />

              <div className="relative z-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Focus className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">Focus</h3>
                <p className="text-foreground leading-relaxed">
                  Designing, manufacturing, branding, and selling apparel directly to consumers.
                </p>
              </div>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-primary/5 px-8 py-4 rounded-full border-2 border-primary/20 hover:border-primary/40 transition-colors shadow-lg">
              <Heart className="h-6 w-6 text-primary" />
              <span className="font-serif text-xl font-semibold text-primary">
                Mitumba, Second-Hand Clothes Problem Solved
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Motivation */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] text-primary pointer-events-none">
          <KentePattern />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                Our Motivation
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>

            {/* Content Card */}
            <Card className="p-8 md:p-12 space-y-8 border-2 border-primary/20 bg-gradient-to-br from-card to-card/50 shadow-2xl relative overflow-hidden">
              {/* Decorative Corners */}
              <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-primary/30" />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-primary/30" />

              {/* Pattern Overlay */}
              <div className="absolute top-0 right-0 w-48 h-48 opacity-[0.03] text-primary pointer-events-none">
                <AfricanGeometricPattern />
              </div>

              <div className="relative z-10 space-y-6">
                <p className="text-xl text-foreground leading-relaxed text-pretty">
                  We are driven by the motivation to <span className="font-bold text-primary">unlock economic opportunity for women and youth</span> through sustainable
                  production of female clothes using modern technology to increase product quality, give more value to our
                  consumers and empower local communities.
                </p>
                <p className="text-xl text-foreground leading-relaxed text-pretty">
                  With increased demand for organic cotton garments globally, we are ready to contribute to meeting the
                  demands and create up to <span className="font-bold text-primary">1,500 job opportunities</span> for local women of Uganda.
                </p>

                {/* Key Highlights */}
                <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-border">
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-primary">1,500+</div>
                    <div className="text-sm text-muted-foreground font-medium">Job Opportunities</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground font-medium">Sustainable Production</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-primary">∞</div>
                    <div className="text-sm text-muted-foreground font-medium">Community Impact</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Our Founders */}
      <section className="py-20 bg-card relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] text-primary pointer-events-none">
          <TribalPattern />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Section Header */}
            <div className="text-center space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">Meet Our Founders</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The visionary leaders behind Zeroe Textile Co. Ltd
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Founder 1 */}
              <Card className="overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group border-2 border-transparent hover:border-primary/20 relative">
                {/* Pattern Overlay on Card */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.05] text-primary pointer-events-none z-10">
                  <KentePattern />
                </div>

                <div className="relative aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Ms. Daphine Harriet Aloyo"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Corner Decorations */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary/50" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-primary/50" />
                </div>

                <div className="p-8 space-y-4 bg-gradient-to-br from-card to-card/50">
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-foreground">Ms. Daphine Harriet Aloyo</h3>
                    <div className="flex items-center gap-2">
                      <div className="px-4 py-1 bg-primary/10 rounded-full border border-primary/20">
                        <p className="text-primary font-semibold text-sm">Co-Founder</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm text-foreground leading-relaxed">
                    <p>
                      <span className="font-semibold text-primary">5+ years</span> of experience in sourcing, merchandising, and retail operations. Her passion for
                      African style and ethical production drove her to start the business, to develop a model with
                      cost-competitive product and profit.
                    </p>
                    <p>
                      Prior to starting ZTC, she worked with both large retailers in Jordan in Middle East and with small
                      scale suppliers. At ZTC, she's responsible for <span className="font-semibold">strategy, mission, vision, growth, creative design</span> of
                      its collection, networking and collaboration with stakeholders.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Founder 2 */}
              <Card className="overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group border-2 border-transparent hover:border-primary/20 relative">
                {/* Pattern Overlay on Card */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.05] text-primary pointer-events-none z-10">
                  <AfricanGeometricPattern />
                </div>

                <div className="relative aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Mr. Opio Daniel"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Corner Decorations */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary/50" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-primary/50" />
                </div>

                <div className="p-8 space-y-4 bg-gradient-to-br from-card to-card/50">
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-foreground">Mr. Opio Daniel</h3>
                    <div className="flex items-center gap-2">
                      <div className="px-4 py-1 bg-primary/10 rounded-full border border-primary/20">
                        <p className="text-primary font-semibold text-sm">Co-Founder</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm text-foreground leading-relaxed">
                    <p>
                      Daniel's drive to create tangible impact through business led him to co-found ZTC with Daphine in
                      2025. As a trained financial management consultant with over <span className="font-semibold text-primary">15 years</span> of experience in financial and
                      general management, Daniel focuses on <span className="font-semibold">process optimization, cost reduction, organizational
                      structuring</span>, general operation and growth strategy.
                    </p>
                    <p>
                      Prior to ZTC, Daniel's work in financial management for international NGOs, UN, Companies in Rwanda,
                      Uganda and South Sudan gave him a firm belief in the power of job creation for women and youth.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] text-primary pointer-events-none">
          <AfricanGeometricPattern />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Section Header */}
            <div className="text-center space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">What We Do</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Service 1 - Manufacturing */}
              <Card className="p-8 space-y-4 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group border-2 border-transparent hover:border-primary/20 bg-gradient-to-br from-card to-card/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.05] text-primary pointer-events-none">
                  <KentePattern />
                </div>
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/30" />

                <div className="relative z-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Scissors className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground">Manufacturing & Distribution</h3>
                  <p className="text-foreground leading-relaxed">
                    We source high-quality fabric, design, manufacture, brand, and sell female-based apparel directly to consumers in Uganda, South Sudan, regional and international markets.
                  </p>
                </div>
              </Card>

              {/* Service 2 - Retail */}
              <Card className="p-8 space-y-4 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group border-2 border-transparent hover:border-primary/20 bg-gradient-to-br from-card to-card/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.05] text-primary pointer-events-none">
                  <TribalPattern />
                </div>
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/30" />

                <div className="relative z-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Store className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground">Integrated Retail Operations</h3>
                  <p className="text-foreground leading-relaxed">
                    We operate integrated retail online stores and supply chain management for sustainability.
                  </p>
                </div>
              </Card>

              {/* Service 3 - Green Production */}
              <Card className="p-8 space-y-4 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group border-2 border-transparent hover:border-primary/20 bg-gradient-to-br from-card to-card/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.05] text-primary pointer-events-none">
                  <AfricanGeometricPattern />
                </div>
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/30" />

                <div className="relative z-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Recycle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground">Green Production Program</h3>
                  <p className="text-foreground leading-relaxed">
                    We do green production - a recycle program offering 10-15% off coupon to collect used female clothing purchased from ZTC factory to redistribute to people in need.
                  </p>
                </div>
              </Card>

              {/* Service 4 - Recycling */}
              <Card className="p-8 space-y-4 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group border-2 border-transparent hover:border-primary/20 bg-gradient-to-br from-card to-card/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.05] text-primary pointer-events-none">
                  <KentePattern />
                </div>
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/30" />

                <div className="relative z-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ShoppingBag className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground">Community Recycling Initiative</h3>
                  <p className="text-foreground leading-relaxed">
                    We collect from female wardrobes and recycle good quality female clothes manufactured by other companies for either resale or gift them to vulnerable communities in collaboration with humanitarian agencies.
                  </p>
                </div>
              </Card>

              {/* Service 5 - Transparent Manufacturing */}
              <Card className="p-8 space-y-4 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group border-2 border-transparent hover:border-primary/20 bg-gradient-to-br from-card to-card/50 relative overflow-hidden md:col-span-2">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.05] text-primary pointer-events-none">
                  <TribalPattern />
                </div>
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/30" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <FileCheck className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3 className="font-serif text-xl font-bold text-foreground">Transparent High-Volume Manufacturing</h3>
                      <p className="text-foreground leading-relaxed">
                        We provide transparent service for high volume manufacturing from sampling and product development through to final sale and export.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.05] text-white pointer-events-none">
          <KentePattern />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Section Header */}
            <div className="text-center space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">Our Work Process</h2>
              <div className="w-24 h-1 bg-white mx-auto rounded-full" />
              <p className="text-xl opacity-90">From Ideas To Reality</p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/30 transform md:-translate-x-1/2" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {[
                  {
                    step: "1",
                    icon: MessageCircle,
                    title: "Creative Consultation",
                    description:
                      "We create a WhatsApp group with our customers, our designer, and sales team to confirm styles, sizes, fabrics, and details.",
                  },
                  {
                    step: "2",
                    icon: Shirt,
                    title: "Fabric Preparation",
                    description:
                      "We source high-quality fabrics and prepare them based on consultation team's confirmed selections.",
                  },
                  {
                    step: "3",
                    icon: Ruler,
                    title: "Pattern Making",
                    description:
                      "Our pattern makers verify all provided sizes, create precise patterns, and align embroidery and print placements.",
                  },
                  {
                    step: "4",
                    icon: Scissors,
                    title: "Cutting & Design",
                    description:
                      "We cut fabrics with precision, applying embroidery and prints flawlessly to patterns for consistent results.",
                  },
                  {
                    step: "5",
                    icon: Camera,
                    title: "Sample Creation",
                    description:
                      "Our sample team crafts with care, sharing process and final photos for full transparency.",
                  },
                  {
                    step: "6",
                    icon: CheckCircle,
                    title: "Sample Approval",
                    description: "Review pictures of samples to confirm before bulk production starts.",
                  },
                  {
                    step: "7",
                    icon: Factory,
                    title: "Mass Production",
                    description: "Actual production commences with our skilled team.",
                  },
                  {
                    step: "8",
                    icon: Truck,
                    title: "Storing & Shipping",
                    description:
                      "Our team inspects final products, pack them, and ship to your chosen locations. Free delivery within 5Km.",
                  },
                ].map((process, index) => {
                  const Icon = process.icon
                  const isEven = index % 2 === 0

                  return (
                    <div
                      key={index}
                      className={`relative flex items-center gap-8 ${
                        isEven ? "md:flex-row" : "md:flex-row-reverse"
                      } flex-col md:gap-16`}
                    >
                      {/* Content Card */}
                      <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"} text-left`}>
                        <Card className="p-6 md:p-8 space-y-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 shadow-xl relative overflow-hidden group">
                          {/* Pattern Overlay */}
                          <div className="absolute top-0 right-0 w-24 h-24 opacity-[0.05] text-white pointer-events-none">
                            <AfricanGeometricPattern />
                          </div>

                          <div className="relative z-10">
                            <div className={`flex items-center gap-3 ${isEven ? "md:justify-end" : "md:justify-start"} justify-start`}>
                              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg border-2 border-white/40">
                                {process.step}
                              </div>
                              <h3 className="font-serif text-xl md:text-2xl font-bold">{process.title}</h3>
                            </div>
                            <p className="text-sm md:text-base opacity-90 leading-relaxed mt-3">
                              {process.description}
                            </p>
                          </div>
                        </Card>
                      </div>

                      {/* Timeline Node */}
                      <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-20">
                        <div className="w-16 h-16 rounded-full bg-white text-primary flex items-center justify-center shadow-2xl border-4 border-primary group-hover:scale-110 transition-transform">
                          <Icon className="h-8 w-8" />
                        </div>
                      </div>

                      {/* Spacer for alternating layout */}
                      <div className="flex-1 hidden md:block" />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppWidget />
      <Footer />
    </main>
  )
}
