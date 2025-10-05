"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Lightbulb, GraduationCap, Briefcase, Handshake, Building2, TrendingUp } from "lucide-react"
import { useState } from "react"
import { Footer } from "@/components/footer"
import { KentePattern, AfricanGeometricPattern, TribalPattern } from "@/components/african-patterns"

export default function CareersPage() {
  const [internshipFormData, setInternshipFormData] = useState({
    fullName: "",
    institution: "",
    trainingProgram: "",
    sex: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleInternshipSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Internship form submitted:", internshipFormData)
    alert("Thank you for your internship application! We will review it and get back to you soon.")
    setInternshipFormData({
      fullName: "",
      institution: "",
      trainingProgram: "",
      sex: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  const handleInternshipChange = (field: string, value: string) => {
    setInternshipFormData((prev) => ({ ...prev, [field]: value }))
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
              Grow With Us
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full animate-fade-in" />
            <p className="text-xl md:text-2xl text-white/90 text-pretty drop-shadow-lg animate-fade-in-up animation-delay-200">
              Join our mission to empower women through sustainable fashion
            </p>
          </div>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-primary/50" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-primary/50" />
      </section>

      {/* Business Startups Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] text-primary pointer-events-none">
          <AfricanGeometricPattern />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <Card className="p-8 md:p-12 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/30 bg-gradient-to-br from-card to-card/50 relative overflow-hidden group">
              {/* Pattern Overlay */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.03] text-primary pointer-events-none">
                <TribalPattern />
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/20" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Lightbulb className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Business Startups</h2>
                    <div className="w-20 h-1 bg-primary mt-2 rounded-full" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    We'd Love To Help You Start Your Cloth Business!
                  </h3>
                  <p className="text-lg text-foreground leading-relaxed">
                    Interested in starting your own cloth business, creating your own brand, or developing uniforms for
                    your schools or companies? We provide comprehensive support to help you establish and grow your
                    fashion venture.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    Our team offers expert guidance on production, sourcing, branding, and market entry strategies. Let
                    us help you turn your fashion business dreams into reality.
                  </p>
                </div>

                <div className="pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    <a href="/contact">
                      Get Started with Your Business
                      <Building2 className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section className="py-20 bg-card relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] text-primary pointer-events-none">
          <KentePattern />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Internship Opportunities</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Gain valuable hands-on experience in the textile and fashion industry
              </p>
            </div>

            <Card className="p-8 md:p-12 border-2 border-transparent hover:border-primary/30 transition-all relative overflow-hidden">
              {/* Pattern Overlay */}
              <div className="absolute bottom-0 left-0 w-48 h-48 opacity-[0.03] text-primary pointer-events-none">
                <AfricanGeometricPattern />
              </div>

              <form onSubmit={handleInternshipSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    placeholder="Enter your full name"
                    value={internshipFormData.fullName}
                    onChange={(e) => handleInternshipChange("fullName", e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="institution">Institution *</Label>
                    <Input
                      id="institution"
                      placeholder="Your school/university"
                      value={internshipFormData.institution}
                      onChange={(e) => handleInternshipChange("institution", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="trainingProgram">Training Program *</Label>
                    <Input
                      id="trainingProgram"
                      placeholder="e.g., Fashion Design, Textile Engineering"
                      value={internshipFormData.trainingProgram}
                      onChange={(e) => handleInternshipChange("trainingProgram", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sex">Sex *</Label>
                  <Select value={internshipFormData.sex} onValueChange={(value) => handleInternshipChange("sex", value)}>
                    <SelectTrigger id="sex">
                      <SelectValue placeholder="Select your sex" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={internshipFormData.email}
                      onChange={(e) => handleInternshipChange("email", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+256 XXX XXX XXX"
                      value={internshipFormData.phone}
                      onChange={(e) => handleInternshipChange("phone", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Why do you want to intern with us? *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your goals and what you hope to learn..."
                    rows={5}
                    value={internshipFormData.message}
                    onChange={(e) => handleInternshipChange("message", e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Submit Internship Application
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Applications Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] text-primary pointer-events-none">
          <TribalPattern />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 border-2 border-transparent hover:border-primary/30 transition-all bg-gradient-to-br from-card to-card/50 relative overflow-hidden group">
              {/* Pattern Overlay */}
              <div className="absolute top-0 right-0 w-56 h-56 opacity-[0.03] text-primary pointer-events-none">
                <KentePattern />
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary/20" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Job Applications</h2>
                    <div className="w-20 h-1 bg-primary mt-2 rounded-full" />
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-lg text-foreground leading-relaxed">
                    We appreciate your interest in joining the Zeroe Textile Co. team! Currently, we only accept online
                    job applications when positions are officially advertised.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    Please check our website regularly or follow our social media channels to stay updated on new job
                    openings. When a position matches your skills and experience, you'll be able to apply directly
                    through our online application system.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    <a href="/contact">Contact Us for Inquiries</a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
                  >
                    <a href="/">Follow Our Updates</a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Collaboration and Partnership Section */}
      <section className="py-20 bg-card relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] text-primary pointer-events-none">
          <AfricanGeometricPattern />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <Card className="p-8 md:p-12 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/30 bg-gradient-to-br from-primary/5 to-card relative overflow-hidden group">
              {/* Pattern Overlay */}
              <div className="absolute bottom-0 right-0 w-72 h-72 opacity-[0.05] text-primary pointer-events-none">
                <TribalPattern />
              </div>

              {/* Decorative Corners */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/20" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary/20" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Handshake className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                      Collaboration & Partnership
                    </h2>
                    <div className="w-20 h-1 bg-primary mt-2 rounded-full" />
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-lg text-foreground leading-relaxed">
                    We are actively seeking strategic partnerships and investment opportunities to expand our impact in
                    the sustainable fashion industry. As a female-led company committed to empowering women and
                    promoting eco-friendly practices, we offer unique collaboration opportunities.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <TrendingUp className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-serif text-xl font-bold text-foreground">Investment Opportunities</h3>
                      </div>
                      <p className="text-foreground leading-relaxed pl-13">
                        Partner with us to scale our operations, expand our product lines, and reach new markets across
                        East Africa.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Handshake className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-serif text-xl font-bold text-foreground">Strategic Partnerships</h3>
                      </div>
                      <p className="text-foreground leading-relaxed pl-13">
                        Collaborate with us on sustainable fashion initiatives, supply chain innovation, and community
                        empowerment programs.
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-foreground leading-relaxed">
                    Whether you're an investor, fashion brand, social enterprise, or organization aligned with our
                    values, we welcome the opportunity to explore how we can work together to create positive change in
                    the fashion industry.
                  </p>
                </div>

                <div className="pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    <a href="/contact">
                      Discuss Partnership Opportunities
                      <Handshake className="ml-2 h-5 w-5" />
                    </a>
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
          <KentePattern />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">Ready to Join Our Journey?</h2>
            <p className="text-lg md:text-xl opacity-90">
              Whether you're looking to start a business, gain experience, or partner with us, we're here to support
              you.
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
