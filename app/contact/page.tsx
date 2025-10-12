"use client"

import type React from "react"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"
import { useState } from "react"
import { KentePattern } from "@/components/african-patterns"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Contact form submitted:", formData)
    alert("Thank you for contacting us! We'll get back to you within 24 hours.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
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
              Get In Touch
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full animate-fade-in" />
            <p className="text-xl md:text-2xl text-white/90 text-pretty drop-shadow-lg animate-fade-in-up animation-delay-200">
              Thanks for exploring our website. For more insights or desire to collaborate with us, feel free to reach
              out. Let's create a fairer, affordable and smarter future of African fashion together.
            </p>
          </div>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-primary/50" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-primary/50" />
      </section>

      {/* Contact Info Cards */}
      <section id="contact-info" className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* General Enquiry and Partnership */}
            <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    Address/Contact for general enquiry and partnership
                  </h3>
                  <div className="space-y-2 text-sm text-foreground">
                    <p>Lira Industrial Zone, Lira City, Uganda</p>
                    <p>P.o. Box 331834 Lira, Uganda</p>
                    <div className="pt-2 space-y-1">
                      <p className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <a href="tel:+256774672629" className="hover:text-primary transition-colors">
                          +256 774 672 629
                        </a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <a href="mailto:info@zeroetextile.co.ug" className="hover:text-primary transition-colors">
                          info@zeroetextile.co.ug
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Business Deals */}
            <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-xl font-bold text-foreground">For Business deals</h3>
                  <div className="space-y-2 text-sm text-foreground">
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <a href="tel:+256700865980" className="hover:text-primary transition-colors">
                        +256 700 865 980
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <a href="mailto:marketing@zeroetextile.co.ug" className="hover:text-primary transition-colors">
                        marketing@zeroetextile.co.ug
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Concerns/Ethical Issues */}
            <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-xl font-bold text-foreground">For Concerns/Ethical Issues</h3>
                  <div className="space-y-2 text-sm text-foreground">
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <a href="tel:+256760515730" className="hover:text-primary transition-colors">
                        +256 760 515 730
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <a href="mailto:ethics@zeroetextile.co.ug" className="hover:text-primary transition-colors">
                        ethics@zeroetextile.co.ug
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 md:p-10">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="font-serif text-3xl font-bold text-foreground">Send Us a Message</h2>
                  <p className="text-muted-foreground">Fill out the form and we'll get back to you within 24 hours</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+256 XXX XXX XXX"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </div>
            </Card>

            {/* Map */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Visit Our Factory</h2>
                <p className="text-muted-foreground">Find us in Lira, Northern Uganda</p>
              </div>

              <Card className="overflow-hidden h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127234.89476419!2d32.8993!3d2.2395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1771b3f3b3b3b3b3%3A0x1771b3f3b3b3b3b3!2sLira%2C%20Uganda!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zeroe Textile Co. Location"
                />
              </Card>

              <Card className="p-6 bg-accent/30">
                <div className="space-y-4">
                  <h3 className="font-serif text-xl font-bold text-foreground">Getting Here</h3>
                  <p className="text-sm text-foreground leading-relaxed">
                    Our factory is located in the heart of Lira, easily accessible from the main road. We offer free
                    delivery within 5km of our location. For bulk orders and international shipping, please contact us
                    for arrangements.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">Quick answers to common questions</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "What is your minimum order quantity?",
                  answer:
                    "Our minimum order quantity varies by product type. For standard items, we typically require a minimum of 50 pieces. For custom designs, please contact us to discuss your specific needs.",
                },
                {
                  question: "How long does production take?",
                  answer:
                    "Standard production time is 2-4 weeks depending on order size and complexity. Rush orders may be available for an additional fee. We'll provide a detailed timeline when you place your order.",
                },
                {
                  question: "Do you ship internationally?",
                  answer:
                    "Yes, we ship to South Sudan and other regional markets. We're also expanding our international shipping capabilities. Contact us for specific shipping rates and timelines to your location.",
                },
                {
                  question: "Can you create custom designs?",
                  answer:
                    "We specialize in custom designs and can work with you from concept to final product. Our design team will collaborate with you through WhatsApp to ensure your vision comes to life.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept bank transfers, mobile money, and for international orders, we can arrange payment through various secure methods. A deposit is typically required before production begins.",
                },
              ].map((faq, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="space-y-3">
                    <h3 className="font-serif text-lg font-bold text-foreground">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">Ready to Start Your Order?</h2>
            <p className="text-lg opacity-90">
              Contact us today to discuss your project and get a free consultation from our team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                WhatsApp Us Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Schedule a Visit
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
