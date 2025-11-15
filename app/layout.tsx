import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://zeroetextile.co.ug'),
  title: "Zeroe Textile Co. Ltd - Uganda's Largest Female-Based Clothing Manufacturer",
  description:
    "High-quality African-inspired female apparel. Meeting the needs of fashion lovers who speak through style.",
  keywords: ["African fashion", "Uganda clothing manufacturer", "female-based manufacturer", "sustainable fashion", "African apparel", "custom clothing", "textile manufacturing"],
  authors: [{ name: "Zeroe Textile Co. Ltd" }],
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: "https://zeroetextile.co.ug",
    siteName: "Zeroe Textile Co. Ltd",
    title: "Zeroe Textile Co. Ltd - Uganda's Largest Female-Based Clothing Manufacturer",
    description: "High-quality African-inspired female apparel. Meeting the needs of fashion lovers who speak through style.",
    images: [
      {
        url: "/professional-african-woman-office-wear-elegant-sui.jpg",
        width: 1200,
        height: 630,
        alt: "Zeroe Textile Co. - African Fashion Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeroe Textile Co. Ltd - Uganda's Largest Female-Based Clothing Manufacturer",
    description: "High-quality African-inspired female apparel. Meeting the needs of fashion lovers who speak through style.",
    images: ["/professional-african-woman-office-wear-elegant-sui.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${playfair.variable} ${inter.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
