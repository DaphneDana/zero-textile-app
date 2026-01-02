{/* app/contact/layout.tsx */}
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Zeroe Textile Co. Ltd - Get in Touch for Fashion Solutions",
  description: "Contact Zeroe Textile Co. Ltd in Lira, Uganda. Get free consultation for your fashion manufacturing needs. Reach us for business deals, partnerships, or general inquiries.",
  openGraph: {
    title: "Contact Us | Zeroe Textile Co. Ltd",
    description: "Get in touch for fashion manufacturing solutions. Free consultation available. Located in Lira, Uganda.",
    url: "https://zeroetextile.co.ug/contact",
    images: ["/professional-african-woman-office-wear-elegant-sui.jpg"],
  },
  alternates: {
    canonical: "https://zeroetextile.co.ug/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
