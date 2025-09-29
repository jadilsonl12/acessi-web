"use client"

import { MessageCircle, Code, Palette, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Navbar from "@/components/navbar"
import ScrollFadeWrapper from "@/components/scroll-fade-wrapper"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function StreamingPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <ScrollFadeWrapper delay={0}>
        <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">{t("streaming.title")}</h1>

            <div className="w-full max-w-5xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src="https://player.kick.com/carlosandrade"
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
                  title="Carlos Andrade Live Stream - Web Development Sessions"
                />
              </div>
            </div>

            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">{t("streaming.description")}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="glass rounded-xl p-6 border border-white/10">
                <Code className="text-blue-400 mb-4 mx-auto" size={32} />
                <h3 className="text-lg font-bold mb-2">Live Coding</h3>
                <p className="text-white/80 text-sm">
                  Watch me build React apps, solve coding challenges, and debug in real-time
                </p>
              </div>
              <div className="glass rounded-xl p-6 border border-white/10">
                <Palette className="text-purple-400 mb-4 mx-auto" size={32} />
                <h3 className="text-lg font-bold mb-2">UI/UX Design</h3>
                <p className="text-white/80 text-sm">
                  Design sessions creating beautiful interfaces and user experiences
                </p>
              </div>
              <div className="glass rounded-xl p-6 border border-white/10">
                <Zap className="text-yellow-400 mb-4 mx-auto" size={32} />
                <h3 className="text-lg font-bold mb-2">Tech Talks</h3>
                <p className="text-white/80 text-sm">
                  Discussions about latest web technologies, frameworks, and industry trends
                </p>
              </div>
            </div>

            <div className="mb-8">
              <a
                href="https://chat.whatsapp.com/GxnkvFYKNr89JJ0cvItlvj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 glass px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 text-lg font-medium"
                aria-label="Join WhatsApp community for web development discussions"
              >
                <MessageCircle size={24} />
                <span>{t("streaming.joinWhatsApp")}</span>
              </a>
            </div>
          </div>
        </section>
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={200}>
        <footer className="py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-white/75 text-sm">
                {t("footer.made")} <span className="font-bold text-white">CARLOSANDRADE.DEV</span> © 2025
              </div>

              <div className="flex space-x-4">
                <Button
                  size="icon"
                  className="glass glass-hover rounded-full border-white/20 hover:border-white/40"
                  onClick={() => window.open("https://twitter.com/CarlosAndradeDev", "_blank")}
                  aria-label="Follow Carlos Andrade on X (Twitter)"
                >
                  <Image src="/icons/x.svg" alt="" width={20} height={20} className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  className="glass glass-hover rounded-full border-white/20 hover:border-white/40"
                  onClick={() => window.open("https://www.instagram.com/carlosandrade.dev/", "_blank")}
                  aria-label="Follow Carlos Andrade on Instagram"
                >
                  <Image src="/icons/instagram.svg" alt="" width={20} height={20} className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  className="glass glass-hover rounded-full border-white/20 hover:border-white/40"
                  onClick={() => window.open("https://www.linkedin.com/in/carlos-andrade-dev/", "_blank")}
                  aria-label="Connect with Carlos Andrade on LinkedIn"
                >
                  <Image src="/icons/linkedin.svg" alt="" width={20} height={20} className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  className="glass glass-hover rounded-full border-white/20 hover:border-white/40"
                  onClick={() => window.open("https://medium.com/@carlosandrade.dev", "_blank")}
                  aria-label="Read Carlos Andrade's articles on Medium"
                >
                  <Image src="/icons/medium.svg" alt="" width={20} height={20} className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  className="glass glass-hover rounded-full border-white/20 hover:border-white/40"
                  onClick={() => window.open("https://github.com/carlosandrade-dev", "_blank")}
                  aria-label="View Carlos Andrade's code on GitHub"
                >
                  <Image src="/icons/github.svg" alt="" width={20} height={20} className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </ScrollFadeWrapper>
    </div>
  )
}
