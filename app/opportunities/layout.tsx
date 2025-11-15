import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Opportunities | Zeroe Textile Co. Ltd - Partner With Us for Business Growth",
  description: "Discover business startup opportunities and partnership programs with Zeroe Textile Co. Ltd. We help entrepreneurs start clothing businesses and collaborate for sustainable fashion impact in Uganda.",
  openGraph: {
    title: "Opportunities | Zeroe Textile Co. Ltd",
    description: "Partner with us to create lasting impact through sustainable fashion. Business startup support and collaboration opportunities.",
    url: "https://zeroetextile.co.ug/opportunities",
    images: ["/professional-african-woman-office-wear-elegant-sui.jpg"],
  },
  alternates: {
    canonical: "https://zeroetextile.co.ug/opportunities",
  },
}

export default function OpportunitiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
