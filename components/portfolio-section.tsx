"use client"

import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { useEffect, useState } from "react"

interface PortfolioItem {
  id: string
  title: string
  image: string
  link: string
  delay: number
}

const webDevelopmentItems: PortfolioItem[] = [
  {
    id: "ecomarket",
    title: "EcoMarket",
    image: "/images/portfolio/ecomarket.jpg",
    link: "#",
    delay: 0,
  },
  {
    id: "fittracker",
    title: "FitTracker Pro",
    image: "/images/portfolio/fittracker.jpg",
    link: "#",
    delay: 100,
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    image: "/images/portfolio/taskflow.jpg",
    link: "#",
    delay: 200,
  },
  {
    id: "foodieapp",
    title: "Foodie Connect",
    image: "/images/portfolio/foodieapp.jpg",
    link: "#",
    delay: 300,
  },
  {
    id: "learnhub",
    title: "LearnHub",
    image: "/images/portfolio/learnhub.jpg",
    link: "#",
    delay: 150,
  },
  {
    id: "travelmate",
    title: "TravelMate",
    image: "/images/portfolio/travelmate.jpg",
    link: "#",
    delay: 250,
  },
  {
    id: "musicstream",
    title: "MusicStream",
    image: "/images/portfolio/musicstream.jpg",
    link: "#",
    delay: 350,
  },
  {
    id: "smartfinance",
    title: "SmartFinance",
    image: "/images/portfolio/smartfinance.jpg",
    link: "#",
    delay: 400,
  },
]

const uiuxDesignItems: PortfolioItem[] = [
  {
    id: "dashboard",
    title: "Analytics Dashboard",
    image: "/images/portfolio/dashboard.jpg",
    link: "#",
    delay: 0,
  },
  {
    id: "mobileapp",
    title: "Mobile Banking App",
    image: "/images/portfolio/mobileapp.jpg",
    link: "#",
    delay: 100,
  },
  {
    id: "ecommerce",
    title: "E-commerce Platform",
    image: "/images/portfolio/ecommerce.jpg",
    link: "#",
    delay: 200,
  },
  {
    id: "saas",
    title: "SaaS Landing Page",
    image: "/images/portfolio/saas.jpg",
    link: "#",
    delay: 300,
  },
  {
    id: "portfolio",
    title: "Creative Portfolio",
    image: "/images/portfolio/portfolio.jpg",
    link: "#",
    delay: 400,
  },
  {
    id: "blog",
    title: "Modern Blog Design",
    image: "/images/portfolio/blog.jpg",
    link: "#",
    delay: 500,
  },
]

export default function PortfolioSection() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState<"webdev" | "uiux">("webdev")

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const currentItems = activeCategory === "webdev" ? webDevelopmentItems : uiuxDesignItems

  return (
    <section
      id="portfolio"
      className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900/80 relative overflow-hidden"
      aria-labelledby="portfolio-heading"
    >
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="portfolio-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fadeInUp"
          >
            Portfolio
          </h2>
          <p
            className="text-lg md:text-xl text-white/75 max-w-3xl mx-auto animate-fadeInUp mb-8"
            style={{ animationDelay: "0.2s" }}
          >
            {t("portfolio.subtitle")}
          </p>

          <div className="flex justify-center gap-4 mb-8" role="tablist" aria-label="Portfolio categories">
            <button
              onClick={() => setActiveCategory("webdev")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black ${
                activeCategory === "webdev"
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              }`}
              role="tab"
              aria-selected={activeCategory === "webdev"}
              aria-controls="portfolio-content"
              id="webdev-tab"
            >
              <span aria-hidden="true">💻</span> Web Development
            </button>
            <button
              onClick={() => setActiveCategory("uiux")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black ${
                activeCategory === "uiux"
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              }`}
              role="tab"
              aria-selected={activeCategory === "uiux"}
              aria-controls="portfolio-content"
              id="uiux-tab"
            >
              <span aria-hidden="true">🎨</span> UI/UX Design
            </button>
          </div>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto"
          role="tabpanel"
          id="portfolio-content"
          aria-labelledby={`${activeCategory}-tab`}
        >
          {currentItems.map((item, index) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block relative overflow-hidden rounded-xl transform transition-all duration-700 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${item.delay}ms`,
              }}
              aria-label={`View ${item.title} project details - Opens in new tab`}
            >
              <div className="glass relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 aspect-[4/3] rounded-xl">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={`${item.title} web development project preview`}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                <div className="absolute inset-0 flex flex-col justify-end p-3 md:p-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white font-bold text-sm md:text-base mb-1">{item.title}</h3>
                  <p className="text-white/90 text-xs md:text-sm font-medium">View Project →</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
