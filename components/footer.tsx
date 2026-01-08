// components/footer.tsx}
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  products: [
    { href: "/products", label: "Clothing" },
    { href: "/products", label: "Printing" },
    { href: "/products", label: "Embroidery" },
  ],
  services: [
    { href: "/services", label: "Consultation" },
    { href: "/services", label: "Sourcing" },
    { href: "/services", label: "Delivery" },
  ],
  legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Refund Policy" },
  ],
}

const socialLinks = [
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="font-serif text-2xl font-bold text-primary">Zeroe Textile Co.</div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Empowering women through sustainable fashion manufacturing in Northern Uganda. High-quality, stylish
              female garments at affordable prices.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Lira Industrial Zone, Lira City, Uganda</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+256774672629" className="hover:text-primary transition-colors">
                  +256 774 672 629
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+256700865980" className="hover:text-primary transition-colors">
                  +256 700 865 980
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@zeroetextile.co.ug" className="hover:text-primary transition-colors">
                  info@zeroetextile.co.ug
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-foreground">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-foreground">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-foreground">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              {footerLinks.legal.map((link, index) => (
                <span key={link.label} className="flex items-center gap-4">
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                  {index < footerLinks.legal.length - 1 && <span className="text-border">|</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>P.O. Box 331834 Lira, Uganda</p>
            <p>&copy; {new Date().getFullYear()} Zeroe Textile Co. Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
