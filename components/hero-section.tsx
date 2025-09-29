"use client"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function HeroSection() {
  const { t, language } = useLanguage()

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16 md:pt-0"
      aria-labelledby="hero-heading"
    >
      {/* Background */}
      {/* Eliminando backgrounds con gradientes que causan animación de barrido */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div> */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(/images/background.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div>
          {/* Profile Introduction */}
          <div className="flex items-center justify-center mb-4 sm:mb-8">
            <div className="glass rounded-full p-1 mr-3 sm:mr-4">
              <Image
                src="/images/profile.jpg"
                alt="Carlos Andrade - Web Developer profile photo"
                width={40}
                height={40}
                className="rounded-full sm:w-[60px] sm:h-[60px]"
                priority
              />
            </div>
            <div className="text-center">
              <p className="text-sm sm:text-lg text-white/75">
                {language === "en" ? (
                  <>
                    Welcome to my <strong>personal portfolio</strong> 👋
                  </>
                ) : language === "es" ? (
                  <>
                    Bienvenido a mi <strong>portfolio personal</strong> 👋
                  </>
                ) : (
                  <>
                    Bem-vindo ao meu <strong>portfólio pessoal</strong> 👋
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="relative mb-6 sm:mb-12">
            <h1
              id="hero-heading"
              className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white px-2 mb-4"
            >
              {language === "en" ? (
                <>
                  Web Developer & UI/UX Designer <br />
                  <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-normal text-white/90 block mt-4">
                    {t("hero.title")}
                  </span>
                </>
              ) : language === "es" ? (
                <>
                  Desarrollador Web & Diseñador UI/UX <br />
                  <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-normal text-white/90 block mt-4">
                    {t("hero.title")}
                  </span>
                </>
              ) : (
                <>
                  Desenvolvedor Web & Designer UI/UX <br />
                  <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-normal text-white/90 block mt-4">
                    {t("hero.title")}
                  </span>
                </>
              )}
            </h1>

            <div
              className="absolute -top-8 sm:-top-12 -left-4 sm:-left-8 animate-float-1 transform rotate-12"
              aria-hidden="true"
            >
              <div className="glass glass-hover rounded-xl sm:rounded-2xl p-2 sm:p-4 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
                <Image
                  src="/images/react.jpg"
                  alt=""
                  width={20}
                  height={20}
                  className="sm:w-[32px] sm:h-[32px] md:w-[40px] md:h-[40px]"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div
              className="absolute top-12 sm:top-16 -left-4 sm:-left-8 animate-float-2 transform -rotate-6"
              aria-hidden="true"
            >
              <div className="glass glass-hover rounded-xl sm:rounded-2xl p-2 sm:p-4 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
                <Image
                  src="/icons/v0logo.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="sm:w-[32px] sm:h-[32px] md:w-[40px] md:h-[40px]"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div
              className="absolute -top-8 sm:-top-12 -right-4 sm:-right-8 animate-float-3 transform rotate-6"
              aria-hidden="true"
            >
              <div className="glass glass-hover rounded-xl sm:rounded-2xl p-2 sm:p-4 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
                <Image
                  src="/images/javascript.jpg"
                  alt=""
                  width={20}
                  height={20}
                  className="sm:w-[32px] sm:h-[32px] md:w-[40px] md:h-[40px]"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Vibecoding icon - moved below text, centered */}
            <div
              className="absolute -bottom-12 sm:-bottom-16 left-1/2 transform -translate-x-1/2 animate-float-1 rotate-3"
              aria-hidden="true"
            ></div>
          </div>

          {/* Stats Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-12 px-2"
            role="list"
            aria-label="Key expertise areas"
          >
            <Card className="glass glass-hover p-3 sm:p-6 text-center group" role="listitem">
              <div className="flex items-start justify-center space-x-2 sm:space-x-3">
                <div
                  className="text-lg sm:text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                  aria-hidden="true"
                >
                  💻
                </div>
                <div>
                  <p className="font-semibold text-white text-xs sm:text-base">{t("hero.card1")}</p>
                </div>
              </div>
            </Card>

            <Card className="glass glass-hover p-3 sm:p-6 text-center group" role="listitem">
              <div className="flex items-start justify-center space-x-2 sm:space-x-3">
                <div
                  className="text-lg sm:text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                  aria-hidden="true"
                >
                  ⚡
                </div>
                <div>
                  <p className="font-semibold text-white text-xs sm:text-base">{t("hero.card2")}</p>
                </div>
              </div>
            </Card>

            <Card className="glass glass-hover p-3 sm:p-6 text-center group" role="listitem">
              <div className="flex items-start justify-center space-x-2 sm:space-x-3">
                <div
                  className="text-lg sm:text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                  aria-hidden="true"
                >
                  🌐
                </div>
                <div>
                  <p className="font-semibold text-white text-xs sm:text-base">{t("hero.card3")}</p>
                </div>
              </div>
            </Card>

            <Card className="glass glass-hover p-3 sm:p-6 text-center group" role="listitem">
              <div className="flex items-start justify-center space-x-2 sm:space-x-3">
                <div
                  className="text-lg sm:text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                  aria-hidden="true"
                >
                  🎨
                </div>
                <div>
                  <p className="font-semibold text-white text-xs sm:text-base">{t("hero.card4")}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Scroll Button */}
          <div className="flex justify-center">
            <button
              onClick={scrollToAbout}
              className="animate-gentle-bounce hover:scale-105 transition-all duration-500 group focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black rounded-full"
              aria-label="Scroll down to about section"
            >
              <div className="glass glass-hover rounded-full p-2 sm:p-4 w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center">
                <ChevronDown className="w-5 h-5 sm:w-8 sm:h-8 text-white group-hover:text-white/80 transition-colors duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
