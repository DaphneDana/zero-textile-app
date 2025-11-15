import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Products | Zeroe Textile Co. Ltd - Quality African Apparel & Custom Manufacturing",
  description: "Explore our range of African-inspired clothing, custom uniforms, printed t-shirts, embroidery, and branded packaging. From office wear to casual fashion, we manufacture it all in Uganda.",
  openGraph: {
    title: "Our Products | Zeroe Textile Co. Ltd",
    description: "Quality African apparel, custom uniforms, printing, embroidery, and branded packaging solutions.",
    url: "https://zeroetextile.co.ug/products",
    images: ["/elegant-african-party-dress-wedding-fashion.jpg"],
  },
  alternates: {
    canonical: "https://zeroetextile.co.ug/products",
  },
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
