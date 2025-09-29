"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { MessageCircle } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer id="contact" className="py-20 relative" role="contentinfo" aria-labelledby="footer-heading">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900" aria-hidden="true"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 id="footer-heading" className="sr-only">
          Contact and site navigation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          {/* Portfolio */}
          <nav aria-labelledby="portfolio-nav">
            <h3 id="portfolio-nav" className="text-2xl font-bold mb-6 text-white">
              {t("footer.portfolio")}
            </h3>
            <div className="space-y-3">
              <button
                className="text-white/75 hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black rounded-sm block"
                onClick={() => scrollToSection("portfolio")}
                aria-label="Navigate to portfolio section"
              >
                {t("footer.portfolio.design")}
              </button>
            </div>
          </nav>

          {/* About Me */}
          <nav aria-labelledby="about-nav">
            <h3 id="about-nav" className="text-2xl font-bold mb-6 text-white">
              {t("footer.about")}
            </h3>
            <div className="space-y-3">
              <button
                className="text-white/75 hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black rounded-sm block"
                onClick={() => scrollToSection("about")}
                aria-label="Navigate to about section"
              >
                {t("footer.about.bio")}
              </button>
              <button
                className="text-white/75 hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black rounded-sm block"
                onClick={() => scrollToSection("talks")}
                aria-label="Navigate to talks section"
              >
                {t("footer.about.talks")}
              </button>
              <button
                className="text-white/75 hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black rounded-sm block"
                onClick={() => scrollToSection("blog")}
                aria-label="Navigate to articles section"
              >
                {t("footer.about.articles")}
              </button>
            </div>
          </nav>

          {/* Let's Connect */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">{t("footer.connect")}</h3>
            <p className="text-white/75 mb-4">{t("footer.connect.project")} </p>
            <p className="text-white/75 mb-6">
              <a
                href="mailto:info@carlosandrade.dev"
                className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                aria-label="Send email to info@carlosandrade.dev"
              >
                info@carlosandrade.dev
              </a>
            </p>

            <div className="mb-6">
              <Button
                className="glass glass-hover border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 group transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                onClick={() =>
                  window.open("https://wa.me/5491154000421?text=Hola%2C%20%C2%BFC%C3%B3mo%20est%C3%A1s%3F", "_blank")
                }
                aria-label="Contact via WhatsApp"
              >
                <MessageCircle className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                {t("about.cta")}
              </Button>
            </div>

            <div className="flex space-x-4 justify-center md:justify-start" role="list" aria-label="Social media links">
              <Button
                size="icon"
                className="glass glass-hover rounded-full border-white/20 hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                onClick={() => window.open("https://twitter.com/carlosandrade_dev", "_blank")}
                aria-label="Visit X (Twitter) profile"
                role="listitem"
              >
                <Image src="/icons/x.svg" alt="" width={20} height={20} className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                className="glass glass-hover rounded-full border-white/20 hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                onClick={() => window.open("https://www.instagram.com/carlosandrade.dev/", "_blank")}
                aria-label="Visit Instagram profile"
                role="listitem"
              >
                <Image src="/icons/instagram.svg" alt="" width={20} height={20} className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                className="glass glass-hover rounded-full border-white/20 hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                onClick={() => window.open("https://www.linkedin.com/in/carlos-andrade-dev/", "_blank")}
                aria-label="Visit LinkedIn profile"
                role="listitem"
              >
                <Image src="/icons/linkedin.svg" alt="" width={20} height={20} className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                className="glass glass-hover rounded-full border-white/20 hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                onClick={() => window.open("https://medium.com/@carlosandrade.dev", "_blank")}
                aria-label="Visit Medium profile"
                role="listitem"
              >
                <Image src="/icons/medium.svg" alt="" width={20} height={20} className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                className="glass glass-hover rounded-full border-white/20 hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                onClick={() => window.open("https://github.com/carlosandrade-dev", "_blank")}
                aria-label="Visit GitHub profile"
                role="listitem"
              >
                <Image src="/icons/github.svg" alt="" width={20} height={20} className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-center items-center pt-8 border-t border-white/10">
          <div className="text-white/75 text-sm">
            {t("footer.made")} <span className="font-bold text-white">CARLOSANDRADE.DEV</span> © 2025
          </div>
        </div>
      </div>
    </footer>
  )
}
