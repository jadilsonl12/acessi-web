"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { MessageCircle } from "lucide-react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  const renderBioWithLinks = (text: string) => {
    // Replace link placeholders with actual JSX links
    const processedText = text
      .replace(
        /\[Eluter\]/g,
        '<a href="https://www.eluter.com/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-white/80 underline underline-offset-2 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black rounded-sm">Eluter</a>',
      )
      .replace(
        /\[DESAFIA\]/g,
        '<a href="https://desafia.tech/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-white/80 underline underline-offset-2 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black rounded-sm">DESAFIA</a>',
      )
      .replace(
        /\[Polkadot Blockchain Academy\]/g,
        '<a href="https://pbax.polkadot.academy/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-white/80 underline underline-offset-2 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black rounded-sm">Polkadot Blockchain Academy</a>',
      )
      .replace(
        /\[Devconnect\]/g,
        '<a href="https://devconnect.org/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-white/80 underline underline-offset-2 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black rounded-sm">Devconnect</a>',
      )

    // Process bold text
    const parts = processedText.split(/(\\*.*?\\*)/g)
    return parts.map((part, index) => {
      if (part.startsWith("*") && part.endsWith("*")) {
        const boldContent = part.slice(1, -1)
        return (
          <strong key={index} className="text-white font-semibold" dangerouslySetInnerHTML={{ __html: boldContent }} />
        )
      }
      return <span key={index} dangerouslySetInnerHTML={{ __html: part }} />
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 relative" aria-labelledby="about-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" aria-hidden="true"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div
                  className="absolute -inset-4 glass rounded-full opacity-30 group-hover:opacity-50 transition-opacity"
                  aria-hidden="true"
                ></div>
                <Image
                  src="/images/profile.jpg"
                  alt="Carlos Andrade - Web Developer professional headshot"
                  width={400}
                  height={400}
                  className="relative rounded-full border-4 border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6 text-center lg:text-left">
              <h2 id="about-heading" className="text-4xl md:text-5xl font-bold mb-8 text-white">
                About Me – Carlos Andrade
              </h2>

              <div className="space-y-4 text-white/75 leading-relaxed">
                <p>{renderBioWithLinks(t("about.bio1"))}</p>
                <p>{renderBioWithLinks(t("about.bio2"))}</p>
                <p>{renderBioWithLinks(t("about.bio3"))}</p>
              </div>

              <div
                className="flex justify-center lg:justify-start items-center gap-6 mt-8"
                role="list"
                aria-label="Professional certifications and achievements"
              >
                <a
                  href="https://developers.google.com/certification/web-developer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black rounded-lg"
                  aria-label="Visit Google Web Developer Certification - Carlos Andrade certified"
                  role="listitem"
                >
                  <Image
                    src="/icons/google-dev.jpg"
                    alt="Google Web Developer certification"
                    width={240}
                    height={240}
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <a
                  href="https://react.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black rounded-lg"
                  aria-label="Visit React Developer Community - Carlos Andrade Expert"
                  role="listitem"
                >
                  <Image
                    src="/icons/react-community.jpg"
                    alt="React Developer Community Expert certification"
                    width={240}
                    height={240}
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>

              <div className="flex justify-center lg:justify-start">
                <Button
                  className="glass glass-hover border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 mt-8 group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                  onClick={() =>
                    window.open("https://wa.me/5491154000421?text=Hola%2C%20%C2%BFC%C3%B3mo%20est%C3%A1s%3F", "_blank")
                  }
                  aria-label="Contact Carlos Andrade via WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  {t("about.cta")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
