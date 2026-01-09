{/* components/african-patterns.tsx */}
export function AdinkraPattern() {
  return (
    <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="adinkra-gye-nyame" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          {/* Gye Nyame - "Except God" symbol */}
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
          <path
            d="M50 30 L50 70 M30 50 L70 50 M40 40 L60 60 M60 40 L40 60"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.3"
          />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#adinkra-gye-nyame)" />
    </svg>
  )
}

export function KentePattern() {
  return (
    <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="kente-stripes" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="8" height="40" fill="currentColor" opacity="0.15" />
          <rect x="8" y="0" width="8" height="40" fill="currentColor" opacity="0.08" />
          <rect x="16" y="0" width="8" height="40" fill="currentColor" opacity="0.12" />
          <rect x="24" y="0" width="8" height="40" fill="currentColor" opacity="0.05" />
          <rect x="32" y="0" width="8" height="40" fill="currentColor" opacity="0.18" />
        </pattern>
        <pattern id="kente-cross" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <rect width="80" height="80" fill="url(#kente-stripes)" />
          <path
            d="M0 40 L80 40 M40 0 L40 80"
            stroke="currentColor"
            strokeWidth="4"
            opacity="0.1"
          />
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#kente-cross)" />
    </svg>
  )
}

export function AfricanGeometricPattern() {
  return (
    <svg className="w-full h-full" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="african-geometric" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          {/* Diamond shapes */}
          <path
            d="M30 0 L45 15 L30 30 L15 15 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.2"
          />
          <path
            d="M30 30 L45 45 L30 60 L15 45 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.2"
          />
          <path
            d="M0 30 L15 45 L0 60 L-15 45 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.2"
          />
          <path
            d="M60 30 L75 45 L60 60 L45 45 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.2"
          />
          {/* Central detail */}
          <circle cx="30" cy="30" r="4" fill="currentColor" opacity="0.15" />
        </pattern>
      </defs>
      <rect width="300" height="300" fill="url(#african-geometric)" />
    </svg>
  )
}

export function TribalPattern() {
  return (
    <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="tribal-arrows" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
          {/* Arrow patterns */}
          <path
            d="M25 10 L30 20 L25 18 L20 20 Z"
            fill="currentColor"
            opacity="0.12"
          />
          <path
            d="M10 25 L20 30 L18 25 L20 20 Z"
            fill="currentColor"
            opacity="0.12"
          />
          <path
            d="M25 40 L30 30 L25 32 L20 30 Z"
            fill="currentColor"
            opacity="0.12"
          />
          <path
            d="M40 25 L30 20 L32 25 L30 30 Z"
            fill="currentColor"
            opacity="0.12"
          />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#tribal-arrows)" />
    </svg>
  )
}
