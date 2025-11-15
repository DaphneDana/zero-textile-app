import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers | Zeroe Textile Co. Ltd - Join Our Team & Grow Your Fashion Career",
  description: "Explore internship and job opportunities at Zeroe Textile Co. Ltd. Join Uganda's leading female-based clothing manufacturer and learn from industry experts in Lira.",
  openGraph: {
    title: "Careers | Zeroe Textile Co. Ltd",
    description: "Join our team and grow your fashion career. Internship and job opportunities available in Lira, Uganda.",
    url: "https://zeroetextile.co.ug/careers",
    images: ["/professional-african-woman-office-wear-elegant-sui.jpg"],
  },
  alternates: {
    canonical: "https://zeroetextile.co.ug/careers",
  },
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
