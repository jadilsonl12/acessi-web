import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import { ColorblindProvider } from "@/contexts/colorblind-context"
import { FontSizeProvider } from "@/contexts/font-size-context"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  preload: true,
  fallback: ["system-ui", "arial"],
})

export const metadata: Metadata = {
  title: "Full-Stack Developer & Innovation Consultant",
  description:
    "Portfolio de Carlos Andrade: full-stack developer, product strategist e innovation consultant. Especialista em Web3, IA e arquitetura cloud.",
  keywords: [
    "Carlos Andrade",
    "full-stack developer",
    "innovation consultant",
    "product strategy",
    "cloud architecture",
    "Web3 consultant",
    "AI sustainability",
    "digital nomad developer",
    "NeoFinance",
    "InnovaTech",
    "blockchain development",
    "fintech architecture",
  ],
  authors: [{ name: "Carlos Andrade" }],
  creator: "Carlos Andrade",
  publisher: "Carlos Andrade",
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
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    url: "https://carlosandrade.dev",
    siteName: "Carlos Andrade Portfolio",
    title: "Full-Stack Developer & Innovation Consultant",
    description:
      "Portfolio de Carlos Andrade: full-stack developer, product strategist e innovation consultant. Especialista em Web3, IA e arquitetura cloud.",
    images: [
      {
        url: "/images/portfolioimage.png",
        width: 1200,
        height: 630,
        alt: "Carlos Andrade - Full-Stack Developer & Innovation Consultant Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Developer & Innovation Consultant",
    description:
      "Portfolio de Carlos Andrade: full-stack developer, product strategist e innovation consultant. Especialista em Web3, IA e arquitetura cloud.",
    creator: "@carlosandrade_dev",
    images: ["/images/portfolioimage.png"],
  },
  alternates: {
    canonical: "https://carlosandrade.dev",
    languages: {
      "pt-BR": "https://carlosandrade.dev/pt",
      "en-US": "https://carlosandrade.dev/en",
    },
  },
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} antialiased`}>
      <head>
        <link rel="preload" href="/images/portfolioimage.png" as="image" type="image/png" />
        <link rel="preload" href="/images/profile.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/background.jpg" as="image" type="image/jpeg" />
        <link rel="dns-prefetch" href="https://medium.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://carlosandrade.dev/#person",
                  name: "Carlos Andrade",
                  alternateName: "Carlos",
                  description:
                    "Full-stack developer, product strategist e innovation consultant especializado em Web3, IA e arquitetura cloud",
                  jobTitle: ["Full-Stack Developer", "Innovation Consultant", "Product Strategist", "Cloud Architect"],
                  worksFor: [
                    {
                      "@type": "Organization",
                      "@id": "https://carlosandrade.dev/#neofinance",
                      name: "NeoFinance",
                      url: "https://www.neofinance.com/",
                      description: "Next-generation fintech platform revolutionizing digital banking",
                    },
                    {
                      "@type": "Organization",
                      "@id": "https://carlosandrade.dev/#innovatech",
                      name: "InnovaTech",
                      url: "https://innovatech.dev/",
                      description: "Technology consultancy helping startups build innovative digital products",
                    },
                  ],
                  nationality: "Brazil",
                  birthPlace: "São Paulo, Brazil",
                  url: "https://carlosandrade.dev",
                  image: "https://carlosandrade.dev/images/profile.jpg",
                  sameAs: [
                    "https://www.linkedin.com/in/carlos-andrade-dev/",
                    "https://medium.com/@carlosandrade.dev",
                    "https://twitter.com/carlosandrade_dev",
                    "https://www.instagram.com/carlosandrade.dev/",
                    "https://github.com/carlosandrade-dev",
                  ],
                  knowsAbout: [
                    "Web3",
                    "Blockchain",
                    "AI",
                    "Cloud Architecture",
                    "Full-Stack Development",
                    "Product Strategy",
                    "Innovation",
                    "Digital Nomad",
                    "Fintech",
                    "AWS",
                  ],
                  alumniOf: "TechCorp",
                  hasOccupation: {
                    "@type": "Occupation",
                    name: "Full-Stack Developer & Innovation Consultant",
                    description:
                      "Specializes in building scalable digital products through cloud architecture, Web3 integration, and AI implementation",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://carlosandrade.dev/#website",
                  url: "https://carlosandrade.dev",
                  name: "Carlos Andrade Portfolio",
                  description:
                    "Portfolio profissional de Carlos Andrade - Full-Stack Developer & Innovation Consultant",
                  publisher: {
                    "@id": "https://carlosandrade.dev/#person",
                  },
                  inLanguage: ["pt-BR", "en-US"],
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://carlosandrade.dev/?s={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "Organization",
                  "@id": "https://carlosandrade.dev/#neofinance",
                  name: "NeoFinance",
                  url: "https://www.neofinance.com/",
                  description: "Next-generation fintech platform revolutionizing digital banking",
                  employee: {
                    "@id": "https://carlosandrade.dev/#person",
                  },
                  industry: "Financial Technology",
                },
                {
                  "@type": "Organization",
                  "@id": "https://carlosandrade.dev/#innovatech",
                  name: "InnovaTech",
                  url: "https://innovatech.dev/",
                  description: "Technology consultancy helping startups build innovative digital products",
                  founder: {
                    "@id": "https://carlosandrade.dev/#person",
                  },
                  industry: "Technology Consulting",
                },
                {
                  "@type": "ItemList",
                  "@id": "https://carlosandrade.dev/#portfolio",
                  name: "Development Portfolio",
                  description: "Full-stack & Web3 projects by Carlos Andrade",
                  numberOfItems: 14,
                  itemListElement: [
                    {
                      "@type": "CreativeWork",
                      name: "NeoFinance - Digital Banking Platform",
                      description: "Full-stack development for next-generation fintech platform",
                      url: "https://medium.com/@carlosandrade.dev/neofinance-revolutionizing-digital-banking",
                      creator: { "@id": "https://carlosandrade.dev/#person" },
                      about: ["Full-Stack Development", "Fintech", "Cloud Architecture"],
                    },
                  ],
                },
                {
                  "@type": "Blog",
                  "@id": "https://carlosandrade.dev/#blog",
                  name: "Carlos Andrade Articles",
                  description: "Web3, AI & Development insights by Carlos Andrade",
                  url: "https://medium.com/@carlosandrade.dev",
                  author: { "@id": "https://carlosandrade.dev/#person" },
                  inLanguage: ["en", "pt"],
                  about: ["Web3", "AI", "Full-Stack Development", "Cloud Architecture", "Blockchain", "Innovation"],
                },
              ],
            }),
          }}
        />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </head>
      <body className={spaceGrotesk.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-md focus:font-medium focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Skip to main content
        </a>
        <FontSizeProvider>
          <ColorblindProvider>
            <LanguageProvider>{children}</LanguageProvider>
          </ColorblindProvider>
        </FontSizeProvider>
      </body>
    </html>
  )
}
