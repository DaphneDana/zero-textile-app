"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, Award, Package, Globe } from "lucide-react"
import Link from "next/link"
import { TribalPattern } from "@/components/african-patterns"

function useCountUp(end: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, shouldStart])

  return count
}

function StatCard({ icon: Icon, value, label, suffix = "", shouldAnimate }: any) {
  const numericValue = typeof value === 'number' ? value : parseInt(value.replace(/[^0-9]/g, ''))
  const count = useCountUp(numericValue, 2000, shouldAnimate)
  const displayValue = typeof value === 'number' ? count : count + suffix

  return (
    <Card className="p-4 space-y-3 hover:shadow-xl hover:scale-105 transition-all duration-300 group border-2 border-transparent hover:border-primary/20 bg-gradient-to-br from-card to-card/50">
      <div className="flex justify-center">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
      <div className="space-y-1 text-center">
        <div className="text-2xl font-bold text-foreground">{displayValue}</div>
        <div className="text-xs text-muted-foreground font-medium">{label}</div>
      </div>
    </Card>
  )
}

export function AboutPreviewSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] text-primary pointer-events-none">
        <TribalPattern />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              About Zeroe Textile Co. Ltd
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Split Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Image */}
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Main Image */}
                <img
                  src="/elegant-african-woman-in-beautiful-colorful-tradit.jpg"
                  alt="Zeroe Textile team and products"
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-10 text-white pointer-events-none">
                  <TribalPattern />
                </div>

                {/* Decorative Corner Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-primary" />
                <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-primary" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-lg shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">2024</div>
                  <div className="text-sm">Established</div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              {/* Description */}
              <div className="space-y-4">
                <p className="text-lg text-foreground leading-relaxed">
                  <span className="font-semibold text-primary">Zeroe Textile Co. Ltd (ZTC)</span> is a female co-founded high-style full-service local garment manufacturer and wholesaler in Lira, Northern Uganda.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We pride ourselves on empowering women through sustainable fashion manufacturing, creating opportunities and driving economic growth in Northern Uganda while delivering exceptional quality to our clients.
                </p>
              </div>

              {/* Stats Grid - 2x2 */}
              <div className="grid grid-cols-2 gap-4">
                <StatCard
                  icon={Users}
                  value="80"
                  suffix="%"
                  label="Female Workforce"
                  shouldAnimate={isVisible}
                />
                <StatCard
                  icon={Package}
                  value={54027}
                  label="Pieces Produced"
                  shouldAnimate={isVisible}
                />
                <StatCard
                  icon={Globe}
                  value={5000}
                  suffix="+"
                  label="Business Partners"
                  shouldAnimate={isVisible}
                />
                <StatCard
                  icon={Award}
                  value={2025}
                  label="Registered"
                  shouldAnimate={isVisible}
                />
              </div>

            </div>
          </div>

          {/* CTA Button - Centered */}
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
