"use client"
{/* component/navigation.tsx */}
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

type NavItem = {
  href: string
  label: string
  submenu?: { href: string; label: string }[]
}

const navLinks: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About",
    submenu: [
      { href: "/about#who-we-are", label: "Who We Are" },
      { href: "/about#vision-mission", label: "Vision & Mission" },
      { href: "/about#motivation", label: "Our Motivation" },
      { href: "/about#founders", label: "Meet Our Founders" },
      { href: "/about#what-we-do", label: "What We Do" },
      { href: "/about#work-process", label: "Work Process" },
    ],
  },
  {
    href: "/products",
    label: "Products",
    submenu: [
      { href: "/products#clothing", label: "Clothing" },
      { href: "/products#printing", label: "Printing" },
      { href: "/products#branding", label: "Brand Labels & Bags" },
      { href: "/products#embroidery", label: "Embroidery" },
    ],
  },
  {
    href: "/services",
    label: "Services",
    submenu: [
      { href: "/services#consultation", label: "Free Consultation" },
      { href: "/services#sourcing", label: "Sourcing" },
      { href: "/services#labels", label: "Labels & Tags" },
      { href: "/services#packaging", label: "Packaging" },
      { href: "/services#delivery", label: "Delivery" },
    ],
  },
  {
    href: "/opportunities",
    label: "Opportunities",
    submenu: [
      { href: "/opportunities#business-startups", label: "Business Startups" },
      { href: "/opportunities#partnership", label: "Collaboration & Partnership" },
    ],
  },
  {
    href: "/careers",
    label: "Careers",
    submenu: [
      { href: "/careers#internship", label: "Internship Opportunities" },
      { href: "/careers#job-applications", label: "Job Applications" },
    ],
  },
  {
    href: "/contact",
    label: "Contact",
    submenu: [
      { href: "/contact#contact-info", label: "Contact Information" },
      { href: "/contact#contact-form", label: "Send a Message" },
      { href: "/contact#location", label: "Visit Our Factory" },
      { href: "/contact#faq", label: "FAQ" },
    ],
  },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isHomePage = pathname === "/"

  const handleMouseEnter = (label: string) => {
    setOpenDropdown(label)
  }

  const handleMouseLeave = () => {
    setOpenDropdown(null)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || !isHomePage ? "bg-white/98 dark:bg-gray-900/98 backdrop-blur-md shadow-lg" : "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative w-20 h-20 flex-shrink-0 transition-all group-hover:scale-105">
              <Image
                src="/images/logo2.png"
                alt="Zeroe Textile Co Ltd Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="font-serif text-xl sm:text-2xl font-extrabold text-primary dark:text-primary">
              Zeroe Textile Co Ltd
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative group"
                onMouseEnter={() => link.submenu && handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1",
                    pathname === link.href || pathname.startsWith(link.href + "#")
                      ? "text-primary bg-primary/10"
                      : "text-primary hover:text-primary/80 hover:bg-primary/5",
                  )}
                >
                  {link.label}
                  {link.submenu && <ChevronDown className="h-4 w-4" />}
                </Link>

                {/* Dropdown Menu */}
                {link.submenu && openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50 animate-fade-in">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.href}
                        href={sublink.href}
                        className="block px-4 py-2 text-sm text-primary hover:text-primary/80 hover:bg-primary/5 transition-colors"
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-foreground hover:bg-accent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.submenu ? (
                    <div className="space-y-1">
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === link.label ? null : link.label)
                        }
                        className={cn(
                          "w-full px-4 py-3 rounded-md text-sm font-medium transition-colors flex items-center justify-between",
                          pathname.startsWith(link.href)
                            ? "text-primary bg-primary/10"
                            : "text-primary hover:text-primary/80 hover:bg-primary/5",
                        )}
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            openDropdown === link.label && "rotate-180",
                          )}
                        />
                      </button>
                      {openDropdown === link.label && (
                        <div className="pl-4 space-y-1">
                          {link.submenu.map((sublink) => (
                            <Link
                              key={sublink.href}
                              href={sublink.href}
                              className="block px-4 py-2 text-sm text-primary hover:text-primary/80 hover:bg-primary/5 rounded-md transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {sublink.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "block px-4 py-3 rounded-md text-sm font-medium transition-colors",
                        pathname === link.href
                          ? "text-primary bg-primary/10"
                          : "text-primary hover:text-primary/80 hover:bg-primary/5",
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
