"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"
import { AfricanGeometricPattern, KentePattern, AdinkraPattern } from "@/components/african-patterns"
import Autoplay from "embla-carousel-autoplay"

const heroSlides = [
  {
    image: "/elegant-african-woman-in-beautiful-colorful-tradit.jpg",
    title: "Northern Uganda's Largest Professional",
    highlight: "Female-Based Garment Manufacturer",
    subtitle: "Meeting the needs of fashion lovers who speak through style",
  },
  {
    image: "/professional-african-woman-office-wear-elegant-sui.jpg",
    title: "Elegant Office Wear",
    highlight: "Designed for the Modern Woman",
    subtitle: "Professional attire that combines style with cultural pride",
  },
  {
    image: "/elegant-african-party-dress-wedding-fashion.jpg",
    title: "Occasion & Party Wear",
    highlight: "Make Every Moment Unforgettable",
    subtitle: "Stunning designs for weddings, celebrations, and special events",
  },
  {
    image: "/elegant-african-woman-in-beautiful-colorful-tradit.jpg",
    title: "Traditional Wear",
    highlight: "With Modern Twist",
    subtitle: "Celebrating African heritage with contemporary elegance",
  },
  {
    image: "/elegant-african-woman-in-beautiful-colorful-tradit.jpg",
    title: "Casual Everyday Wear",
    highlight: "Comfort Meets Style",
    subtitle: "Effortless fashion for your daily adventures",
  },
]

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
        className="w-full h-screen"
      >
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-screen w-full">
                {/* Background Image with Parallax */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    transform: `translateY(${scrollY * 0.5}px)`,
                  }}
                >
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
                </div>

                {/* African Pattern Overlays */}
                <div className="absolute inset-0 opacity-20 text-primary pointer-events-none">
                  {index === 0 && <AfricanGeometricPattern />}
                  {index === 1 && <KentePattern />}
                  {index === 2 && <AdinkraPattern />}
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto text-center space-y-8">
                      {/* Main Headline with Animation */}
                      <div className="space-y-4 animate-fade-in-up">
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance drop-shadow-2xl">
                          {slide.title}{" "}
                          <span className="inline-block mt-2 text-white bg-primary/70 px-6 py-3 rounded-lg backdrop-blur-sm">
                            {slide.highlight}
                          </span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto text-pretty drop-shadow-lg">
                          {slide.subtitle}
                        </p>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up animation-delay-300">
                        <Button
                          asChild
                          size="lg"
                          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                        >
                          <Link href="/products">
                            Explore Our Products
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                        <Button
                          asChild
                          size="lg"
                          variant="outline"
                          className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg bg-white/10 backdrop-blur-sm shadow-2xl transition-all duration-300 hover:scale-105"
                        >
                          <Link href="/contact">Start Your Business</Link>
                        </Button>
                      </div>

                      {/* Scroll Indicator */}
                      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
                        <ChevronDown className="h-8 w-8 text-white/70" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Border Elements */}
                <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-primary/50" />
                <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-primary/50" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {heroSlides.map((_, index) => (
            <div
              key={index}
              className="w-12 h-1.5 rounded-full bg-white/30 hover:bg-white/50 transition-all cursor-pointer"
            />
          ))}
        </div>
      </Carousel>
    </section>
  )
}
