"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GraduationCap, Briefcase } from "lucide-react"
import { useState } from "react"
import { Footer } from "@/components/footer"
import { KentePattern, AfricanGeometricPattern, TribalPattern } from "@/components/african-patterns"

export default function CareersPage() {
  const [internshipFormData, setInternshipFormData] = useState({
    fullName: "",
    institution: "",
    trainingProgram: "",
    courseOfStudy: "",
    yearOfStudy: "",
    sex: "",
    email: "",
    phone: "",
    internshipLetter: null as File | null,
  })

  const handleInternshipSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate file size
    if (internshipFormData.internshipLetter) {
      const fileSizeKB = internshipFormData.internshipLetter.size / 1024
      if (fileSizeKB > 500) {
        alert("File size must be less than 500KB. Please upload a smaller file.")
        return
      }
    }

    console.log("Internship form submitted:", internshipFormData)
    alert("Thank you for your internship application! We will review it and get back to you soon.")
    setInternshipFormData({
      fullName: "",
      institution: "",
      trainingProgram: "",
      courseOfStudy: "",
      yearOfStudy: "",
      sex: "",
      email: "",
      phone: "",
      internshipLetter: null,
    })
    // Reset file input
    const fileInput = document.getElementById("internshipLetter") as HTMLInputElement
    if (fileInput) fileInput.value = ""
  }

  const handleInternshipChange = (field: string, value: string) => {
    setInternshipFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    if (file) {
      // Validate file type
      if (file.type !== "application/pdf") {
        alert("Only PDF files are accepted.")
        e.target.value = ""
        return
      }
      // Validate file size (500KB)
      const fileSizeKB = file.size / 1024
      if (fileSizeKB > 500) {
        alert("File size must be less than 500KB.")
        e.target.value = ""
        return
      }
      setInternshipFormData((prev) => ({ ...prev, internshipLetter: file }))
    }
  }

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

      {/* Internship Section */}
      <section id="internship" className="py-20 bg-card relative overflow-hidden">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="trainingProgram">Training Program *</Label>
                    <Select
                      value={internshipFormData.trainingProgram}
                      onValueChange={(value) => handleInternshipChange("trainingProgram", value)}
                    >
                      <SelectTrigger id="trainingProgram">
                        <SelectValue placeholder="Select training program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tailoring">Tailoring</SelectItem>
                        <SelectItem value="embroidery">Embroidery</SelectItem>
                        <SelectItem value="tshirt-printing">T-shirt Printing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="courseOfStudy">Course of Study *</Label>
                    <Input
                      id="courseOfStudy"
                      placeholder="e.g., Fashion Design, Textile Engineering"
                      value={internshipFormData.courseOfStudy}
                      onChange={(e) => handleInternshipChange("courseOfStudy", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="yearOfStudy">Year of Study *</Label>
                    <Select
                      value={internshipFormData.yearOfStudy}
                      onValueChange={(value) => handleInternshipChange("yearOfStudy", value)}
                    >
                      <SelectTrigger id="yearOfStudy">
                        <SelectValue placeholder="Select year of study" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="year-1">Year 1</SelectItem>
                        <SelectItem value="year-2">Year 2</SelectItem>
                        <SelectItem value="year-3">Year 3</SelectItem>
                      </SelectContent>
                    </Select>
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
                      </SelectContent>
                    </Select>
                  </div>
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
                  <Label htmlFor="internshipLetter">
                    Attach institution internship letter (Only PDF files accepted) Less than 500kb. *
                  </Label>
                  <Input
                    id="internshipLetter"
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    required
                    className="cursor-pointer"
                  />
                  {internshipFormData.internshipLetter && (
                    <p className="text-sm text-muted-foreground">
                      Selected: {internshipFormData.internshipLetter.name} (
                      {(internshipFormData.internshipLetter.size / 1024).toFixed(2)} KB)
                    </p>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Submit Internship Application
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Tailoring Skills Showcase */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] text-primary pointer-events-none">
          <AfricanGeometricPattern />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/tailor.jpg"
                    alt="Professional tailoring at Zeroe Textile"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Corner Decorations */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-primary/70" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-primary/70" />
                </div>
              </div>

              {/* Text Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                  Learn From Industry Experts
                </h2>
                <div className="w-24 h-1 bg-primary rounded-full" />
                <div className="space-y-4">
                  <p className="text-lg text-foreground leading-relaxed">
                    Our internship and training programs provide hands-on experience with professional equipment and
                    guidance from skilled artisans with years of experience in the textile industry.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    Whether you're interested in tailoring, embroidery, or T-shirt printing, you'll gain practical
                    skills that prepare you for a successful career in fashion manufacturing.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    Join us and become part of a team that's transforming Uganda's textile industry while empowering
                    the next generation of fashion professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Applications Section */}
      <section id="job-applications" className="py-20 bg-card relative overflow-hidden">
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
                    Apply for a job. (Please note, we accept online application only when a job advert has been placed
                    on our website or any public domain).
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    Please follow guidelines that are provided on the job advert on how and where to submit your
                    application.
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
              Whether you're looking to start a business, gain experience, or partner with us, we're here to work with
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
