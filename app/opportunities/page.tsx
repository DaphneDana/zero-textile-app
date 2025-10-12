"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Lightbulb, Handshake, TrendingUp } from "lucide-react"
import { useState } from "react"
import { Footer } from "@/components/footer"
import { KentePattern, AfricanGeometricPattern, TribalPattern } from "@/components/african-patterns"

export default function OpportunitiesPage() {
  const [businessFormData, setBusinessFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    address: "",
    town: "",
    message: "",
  })

  const handleBusinessSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Business form submitted:", businessFormData)
    alert("Thank you for your interest! We will get back to you soon.")
    setBusinessFormData({
      firstName: "",
      lastName: "",
      email: "",
      telephone: "",
      address: "",
      town: "",
      message: "",
    })
  }

  const handleBusinessChange = (field: string, value: string) => {
    setBusinessFormData((prev) => ({ ...prev, [field]: value }))
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
            backgroundImage: `url('/professional-african-woman-office-wear-elegant-sui.jpg')`,
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
              Opportunities
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full animate-fade-in" />
            <p className="text-xl md:text-2xl text-white/90 text-pretty drop-shadow-lg animate-fade-in-up animation-delay-200">
              Partner with us to create lasting impact through sustainable fashion
            </p>
          </div>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-primary/50" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-primary/50" />
      </section>

      {/* Business Startups Section */}
      <section id="business-startups" className="py-20 bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] text-primary pointer-events-none">
          <AfricanGeometricPattern />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Business Startups</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <Card className="p-8 md:p-12 border-2 border-transparent hover:border-primary/30 transition-all relative overflow-hidden">
              {/* Pattern Overlay */}
              <div className="absolute bottom-0 left-0 w-48 h-48 opacity-[0.03] text-primary pointer-events-none">
                <TribalPattern />
              </div>

              <div className="space-y-8 relative z-10">
                <div className="text-center space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    We'd Love To Help You Start Your Cloth business!
                  </h3>
                  <p className="text-lg text-foreground leading-relaxed">
                    We helped thousands, we can definitely help you. Send us a message and we get started!
                  </p>
                </div>

                <form onSubmit={handleBusinessSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        value={businessFormData.firstName}
                        onChange={(e) => handleBusinessChange("firstName", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        value={businessFormData.lastName}
                        onChange={(e) => handleBusinessChange("lastName", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={businessFormData.email}
                        onChange={(e) => handleBusinessChange("email", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telephone">Telephone Number *</Label>
                      <Input
                        id="telephone"
                        type="tel"
                        placeholder="+256 XXX XXX XXX"
                        value={businessFormData.telephone}
                        onChange={(e) => handleBusinessChange("telephone", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address *</Label>
                    <Input
                      id="address"
                      placeholder="Enter your address"
                      value={businessFormData.address}
                      onChange={(e) => handleBusinessChange("address", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="town">Town in Uganda *</Label>
                    <Input
                      id="town"
                      placeholder="Enter your town"
                      value={businessFormData.town}
                      onChange={(e) => handleBusinessChange("town", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your business idea..."
                      rows={5}
                      value={businessFormData.message}
                      onChange={(e) => handleBusinessChange("message", e.target.value)}
                      required
                    />
                  </div>

                  <div className="text-center space-y-6">
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                      Submit
                    </Button>
                    <p className="font-serif text-2xl font-bold text-foreground">
                      Let do Business Together Today
                    </p>
                  </div>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Collaboration and Partnership Section */}
      <section id="partnership" className="py-20 bg-card relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] text-primary pointer-events-none">
          <KentePattern />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <Handshake className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                Collaboration & Partnership
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <Card className="p-8 md:p-12 border-2 border-transparent hover:border-primary/30 transition-all bg-gradient-to-br from-primary/5 to-card relative overflow-hidden">
              {/* Pattern Overlay */}
              <div className="absolute top-0 right-0 w-56 h-56 opacity-[0.03] text-primary pointer-events-none">
                <AfricanGeometricPattern />
              </div>

              <div className="relative z-10 space-y-6">
                <div className="space-y-4 text-lg text-foreground leading-relaxed">
                  <p>
                    This is a great place to partner if you would like to be part of a solution to Africa's problem.
                    Investing in garment manufacturing extends beyond profits. The garment factory demonstrates the
                    best approach to deal with unemployment in Uganda as it holds considerable potential to motivate
                    and bring change to some of the most disadvantaged people, especially women and youth, while
                    advancing structural transformation and economic development. We can do this together!
                  </p>

                  <p>
                    When we work together, we can create significant job opportunities, uplift local communities and
                    foster economic growth. By partnering and supporting us, you're directly contributing to poverty
                    reduction and improving livelihoods for Ugandan citizens. Additionally, you'll have the privilege
                    of witnessing the transformation of Uganda's textile and apparel industry firsthand, playing a
                    pivotal role in its success story.
                  </p>

                  <p>
                    Please feel free to reach out to us so that together we can drive the change that Africa need and
                    help women and youth unlock success in today's competitive world. We will be ready to work with
                    you.
                  </p>
                </div>

                <div className="pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    <a href="/contact">Contact Us for Partnership</a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.05] text-white pointer-events-none">
          <TribalPattern />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">Ready to Partner With Us?</h2>
            <p className="text-lg md:text-xl opacity-90">
              Let's work together to create sustainable growth and empower communities across Uganda
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <a href="/contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppWidget />
      <Footer />
    </main>
  )
}
