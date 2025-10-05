# Zeroe Textile Co. Ltd Website

A beautiful, modern website for Uganda's largest female-based clothing manufacturer, built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4.

![Zeroe Textile](public/placeholder-logo.png)

## Features

- 🎨 Elegant feminine design with soft pink and white color scheme
- 📱 Fully responsive across all devices
- ⚡ Built with Next.js 15 App Router for optimal performance
- 🎭 Smooth animations and transitions
- 📝 Contact and career application forms with validation
- 🗺️ Integrated Google Maps
- 💬 WhatsApp widget for instant customer contact
- ♿ Accessible and SEO-optimized

## Pages

- **Home** - Hero section, company introduction, product showcase, testimonials
- **About Us** - Company overview, mission/vision, founders, work process
- **Products** - Clothing categories, printing, branding, embroidery services
- **Services** - Consultation, sourcing, labels, packaging, delivery
- **Careers** - Job opportunities and application form
- **Contact** - Contact information, inquiry form, location map

## Tech Stack

- **Framework:** Next.js 15.5.4
- **React:** 19.1.0
- **TypeScript:** 5.x
- **Styling:** Tailwind CSS v4.1.9
- **UI Components:** Radix UI + shadcn/ui
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React
- **Fonts:** Playfair Display (headings) + Inter (body)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

### Installation

1. **Extract the ZIP file**

2. **Navigate to the project directory**
   \`\`\`bash
   cd zeroe-textile-website
   \`\`\`

3. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## Build for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

This will create an optimized production build and start the production server.

## Project Structure

\`\`\`
zeroe-textile-website/
├── app/                      # Next.js App Router pages
│   ├── about/               # About Us page
│   ├── careers/             # Careers page
│   ├── contact/             # Contact page
│   ├── products/            # Products page
│   ├── services/            # Services page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── ui/                  # shadcn/ui components
│   ├── navigation.tsx       # Header navigation
│   ├── footer.tsx           # Footer component
│   ├── hero-section.tsx     # Home hero section
│   └── ...                  # Other sections
├── lib/                     # Utility functions
├── hooks/                   # Custom React hooks
├── public/                  # Static assets
└── package.json             # Dependencies
\`\`\`

## Customization

### Colors

Edit the color scheme in `app/globals.css`:

\`\`\`css
@theme inline {
  --color-primary: #ff69b4;
  --color-primary-foreground: #ffffff;
  /* ... other colors */
}
\`\`\`

### Content

- Update company information in each page component
- Replace placeholder images in the `public/` folder
- Modify contact details in `components/footer.tsx`
- Update WhatsApp number in `components/whatsapp-widget.tsx`

### Fonts

Fonts are configured in `app/layout.tsx`. To change fonts:

1. Import your desired Google Font
2. Update the font variables in the layout
3. Update the theme in `app/globals.css`

## Environment Variables

Create a `.env.local` file for any environment variables:

\`\`\`env
# Add your environment variables here
# NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key
\`\`\`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Node.js:

- Netlify
- AWS Amplify
- Digital Ocean
- Railway
- Render

## Support

For issues or questions about the website:

- **Email:** info@zeroetextile.com
- **Phone:** +256 123 456 789
- **Location:** Lira, Uganda

## License

© 2025 Zeroe Textile Co. Ltd. All rights reserved.

---

Built with ❤️ by Zeroe Textile Co. Ltd
