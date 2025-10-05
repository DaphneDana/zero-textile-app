"use client"

import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Quote, Star, MapPin, BadgeCheck } from "lucide-react"
import { AfricanGeometricPattern } from "@/components/african-patterns"
import Autoplay from "embla-carousel-autoplay"

const testimonials = [
  {
    name: "Mrs. Margret Ojara",
    location: "Gulu",
    rating: 5,
    text: "I've been working with ZTC for the last couple of months and they are so easy to work with, communicate with, and understand great fashions! Other companies I've tried were somehow complicated but ZTC makes things reality so easily and quick and I am quite impressed.",
  },
  {
    name: "Ragina Harriet Achar",
    location: "Apac",
    rating: 5,
    text: "I've been working with ZTC for the last five months and I don't think I will ever leave them! They have the best services and high-quality female clothes. I made an order and they reply straight away and they always give me exactly what I ask for. Thank you ZTC!",
  },
  {
    name: "Catherine Abeja",
    location: "Oyam",
    rating: 5,
    text: "ZTC is simply amazing cloth manufacturer, and by far the best when I compare with other small manufacturers. They are very supportive and great to work with. Very quick to respond to enquiries and orders. I would highly recommend ZTC if you're thinking of fashion.",
  },
  {
    name: "Joanita Komagum",
    location: "Kitgum",
    rating: 5,
    text: "When I learnt of a new cloth manufacturing company in Lira, I was amazed - they were our queens doing the magic! Quality of garment and clothing is 10/10 rating and their service is great. I will continue to do business with them for eternity!",
  },
]

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-primary text-primary" : "fill-muted text-muted"}`}
        />
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  return (
    <Card className="p-8 space-y-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group border-2 border-transparent hover:border-primary/20 bg-gradient-to-br from-card to-card/50 relative overflow-hidden h-full">
      {/* Pattern Overlay in Corner */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.05] text-primary pointer-events-none">
        <AfricanGeometricPattern />
      </div>

      {/* Decorative Corner Accent */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/30" />

      {/* Quote Icon */}
      <div className="relative">
        <Quote className="h-12 w-12 text-primary/20" />
      </div>

      {/* Testimonial Text */}
      <p className="text-foreground leading-relaxed relative z-10 text-base">{testimonial.text}</p>

      {/* Footer */}
      <div className="pt-6 border-t border-border relative z-10">
        <div className="flex items-start gap-4">
          {/* Avatar with Initials */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
              <span className="text-sm font-bold text-primary">{getInitials(testimonial.name)}</span>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
              <BadgeCheck className="h-4 w-4 text-primary" title="Verified Customer" />
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              <span>{testimonial.location}</span>
            </div>

            <StarRating rating={testimonial.rating} />
          </div>
        </div>
      </div>
    </Card>
  )
}

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] text-primary pointer-events-none">
        <AfricanGeometricPattern />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Our Customers Greatly Love Us
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              You don't have to build your fashion brand on your own. Team up with a crew of manufacturing experts with
              a proven track record.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2">
                  <TestimonialCard testimonial={testimonial} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-primary/10 border-primary/20 hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="hidden md:flex -right-12 bg-primary/10 border-primary/20 hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
