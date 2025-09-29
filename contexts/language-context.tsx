"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "es" | "pt"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.portfolio": "Portfolio",
    "nav.articles": "Articles",
    "nav.talks": "Talks",
    "nav.streaming": "Streaming",
    "nav.hackathon": "Hackathon",
    "nav.contact": "Contact",

    // Hero Section
    "hero.greeting": "Welcome to my **personal portfolio**",
    "hero.title": "I build modern web experiences that users love",
    "hero.card1": "Expert in responsive web design & user experience.",
    "hero.card2": "Passionate about modern JavaScript frameworks & APIs.",
    "hero.card3": "Creating fast, accessible websites for global clients.",
    "hero.card4": "Delivered 50+ web projects with pixel-perfect precision.",

    // Trusted By Section
    "trustedBy.title": "Trusted by",
    "trustedBy.subtitle":
      "Companies and organizations that have trusted my web development expertise to create outstanding digital experiences.",

    // Portfolio Section
    "portfolio.title": "Portfolio",
    "portfolio.subtitle": "Web development projects showcasing modern design and cutting-edge technology solutions",

    // About Section
    "about.title": "ABOUT ME",
    "about.bio1":
      "Carlos Andrade (São Paulo, 1992) is a *web developer*, *frontend specialist*, and *UI/UX designer*. He served as *Senior Frontend Developer* at *WebTech Solutions* in Brazil and Portugal, and is the founder of *CodeCraft Studio*, a web development agency that helps businesses create *stunning, high-performance websites* and *web applications* globally.",
    "about.bio2":
      "He has spoken at *web development conferences and design meetups*, co-founded *Frontend Brasil*, and teaches in the graduate programs of *Web Development (USP)* and *Digital Design (FGV)*. Currently, he is *Lead Web Developer* at *DigitalFlow*, specializing in *React applications*, *responsive design*, and *modern web technologies*.",
    "about.bio3":
      "He is a certified *Google Web Developer* and was selected as a *Frontend Expert* for the *React Developer Community 2025*.",
    "about.links.title": "Links",
    "about.cta": "GET IN TOUCH",

    // Companies Section
    "companies.eluter.title": "More about DigitalFlow",
    "companies.eluter.description":
      "**DigitalFlow** is a **modern web development agency** that creates **responsive websites** and **progressive web applications** for businesses across Latin America. It enables companies to establish **strong digital presence, e-commerce solutions, and custom web platforms** with **cutting-edge design, performance optimization, and SEO excellence**, helping **startups, SMEs, and corporations** succeed in the digital landscape.",
    "companies.eluter.button": "More info",
    "companies.desafia.title": "More about CodeCraft Studio",
    "companies.desafia.description":
      "**CodeCraft Studio** is a **web development studio** founded by **Carlos Andrade** that helps **businesses and entrepreneurs** build **beautiful, functional websites**. With expertise in **React, Next.js, TypeScript, and modern CSS frameworks**, CodeCraft Studio empowers the next generation of **digital businesses in LATAM** to create and deploy **world-class web experiences**.",
    "companies.desafia.button": "More info",

    // Streaming Section
    "streaming.title": "Live Web Development Streaming",
    "streaming.backHome": "Back to Home",
    "streaming.description":
      "Join me live for web development sessions, coding tutorials, and tech discussions. Watch as I build real projects, solve coding challenges, and share insights about modern web technologies.",
    "streaming.joinWhatsApp": "Join Developer Community",

    // Hackathon Section
    "hackathon.backHome": "Back to Home",
  },
  es: {
    // Navbar
    "nav.home": "Inicio",
    "nav.about": "Acerca",
    "nav.portfolio": "Portafolio",
    "nav.articles": "Artículos",
    "nav.talks": "Charlas",
    "nav.streaming": "Streaming",
    "nav.hackathon": "Hackathon",
    "nav.contact": "Contacto",

    // Hero Section
    "hero.greeting": "Bienvenido a mi **portfolio personal**",
    "hero.title": "Construyo experiencias web modernas que los usuarios aman",
    "hero.card1": "Experto en diseño web responsivo y experiencia de usuario.",
    "hero.card2": "Apasionado por frameworks JavaScript modernos y APIs.",
    "hero.card3": "Creando sitios web rápidos y accesibles para clientes globales.",
    "hero.card4": "Entregué más de 50 proyectos web con precisión pixel-perfect.",

    // Trusted By Section
    "trustedBy.title": "Confían en mí",
    "trustedBy.subtitle":
      "Empresas y organizaciones que han confiado en mi experiencia en desarrollo web para crear experiencias digitales excepcionales.",

    // Portfolio Section
    "portfolio.title": "Portfolio",
    "portfolio.subtitle":
      "Proyectos de desarrollo web que muestran diseño moderno y soluciones tecnológicas de vanguardia",

    // About Section
    "about.title": "ACERCA DE MÍ",
    "about.bio1":
      "Carlos Andrade (São Paulo, 1992) es *desarrollador web*, *especialista frontend* y *diseñador UI/UX*. Se desempeñó como *Desarrollador Frontend Senior* en *WebTech Solutions* en Brasil y Portugal, y es fundador de *CodeCraft Studio*, una agencia de desarrollo web que ayuda a empresas a crear *sitios web impresionantes y de alto rendimiento* y *aplicaciones web* globalmente.",
    "about.bio2":
      "Ha participado como orador en *conferencias de desarrollo web y meetups de diseño*, co-fundó *Frontend Brasil*, y dicta clases en los programas de posgrado en *Desarrollo Web (USP)* y *Diseño Digital (FGV)*. Actualmente, es *Desarrollador Web Principal* en *DigitalFlow*, especializándose en *aplicaciones React*, *diseño responsivo* y *tecnologías web modernas*.",
    "about.bio3":
      "Es *Google Web Developer* certificado y fue seleccionado como *Experto Frontend* para la *Comunidad React Developer 2025*.",
    "about.links.title": "Enlaces",
    "about.cta": "CONTACTAR",

    // Companies Section
    "companies.eluter.title": "Más sobre DigitalFlow",
    "companies.eluter.description":
      "**DigitalFlow** es una **agencia de desarrollo web moderna** que crea **sitios web responsivos** y **aplicaciones web progresivas** para empresas en América Latina. Permite a las empresas establecer **presencia digital sólida, soluciones de e-commerce y plataformas web personalizadas** con **diseño de vanguardia, optimización de rendimiento y excelencia SEO**, ayudando a **startups, PyMEs y corporaciones** a tener éxito en el panorama digital.",
    "companies.eluter.button": "Más información",
    "companies.desafia.title": "Más sobre CodeCraft Studio",
    "companies.desafia.description":
      "**CodeCraft Studio** es un **estudio de desarrollo web** fundado por **Carlos Andrade** que ayuda a **empresas y emprendedores** a construir **sitios web hermosos y funcionales**. Con experiencia en **React, Next.js, TypeScript y frameworks CSS modernos**, CodeCraft Studio empodera a la próxima generación de **negocios digitales en LATAM** para crear e implementar **experiencias web de clase mundial**.",
    "companies.desafia.button": "Más información",

    // Streaming Section
    "streaming.title": "Transmisión en Vivo de Desarrollo Web",
    "streaming.backHome": "Volver al Inicio",
    "streaming.description":
      "Acompáñame en vivo para sesiones de desarrollo web, tutoriales de programación y discusiones tecnológicas. Mira mientras construyo proyectos reales, resuelvo desafíos de código y comparto conocimientos sobre tecnologías web modernas.",
    "streaming.joinWhatsApp": "Únete a la Comunidad de Desarrolladores",

    // Hackathon Section
    "hackathon.backHome": "Volver al Inicio",
  },
  pt: {
    // Navbar
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.portfolio": "Portfólio",
    "nav.articles": "Artigos",
    "nav.talks": "Palestras",
    "nav.streaming": "Streaming",
    "nav.hackathon": "Hackathon",
    "nav.contact": "Contato",

    // Hero Section
    "hero.greeting": "Bem-vindo ao meu **portfólio pessoal**",
    "hero.title": "Eu construo experiências web modernas que os usuários amam",
    "hero.card1": "Especialista em design web responsivo e experiência do usuário.",
    "hero.card2": "Apaixonado por frameworks JavaScript modernos e APIs.",
    "hero.card3": "Criando sites rápidos e acessíveis para clientes globais.",
    "hero.card4": "Entreguei mais de 50 projetos web com precisão pixel-perfect.",

    // Trusted By Section
    "trustedBy.title": "Confiam em mim",
    "trustedBy.subtitle":
      "Empresas e organizações que confiaram na minha experiência em desenvolvimento web para criar experiências digitais excepcionais.",

    // Portfolio Section
    "portfolio.title": "Portfólio",
    "portfolio.subtitle": "Projetos de desenvolvimento web que mostram design moderno e soluções tecnológicas de ponta",

    // About Section
    "about.title": "SOBRE MIM",
    "about.bio1":
      "Carlos Andrade (São Paulo, 1992) é *desenvolvedor web*, *especialista frontend* e *designer UI/UX*. Atuou como *Desenvolvedor Frontend Sênior* na *WebTech Solutions* no Brasil e Portugal, e é fundador da *CodeCraft Studio*, uma agência de desenvolvimento web que ajuda empresas a criar *sites impressionantes e de alto desempenho* e *aplicações web* globalmente.",
    "about.bio2":
      "Participou como palestrante em *conferências de desenvolvimento web e meetups de design*, co-fundou a *Frontend Brasil*, e leciona nos programas de pós-graduação em *Desenvolvimento Web (USP)* e *Design Digital (FGV)*. Atualmente, é *Desenvolvedor Web Principal* na *DigitalFlow*, especializando-se em *aplicações React*, *design responsivo* e *tecnologias web modernas*.",
    "about.bio3":
      "É *Google Web Developer* certificado e foi selecionado como *Especialista Frontend* para a *Comunidade React Developer 2025*.",
    "about.links.title": "Links",
    "about.cta": "ENTRAR EM CONTATO",

    // Companies Section
    "companies.eluter.title": "Mais sobre a DigitalFlow",
    "companies.eluter.description":
      "**DigitalFlow** é uma **agência de desenvolvimento web moderna** que cria **sites responsivos** e **aplicações web progressivas** para empresas na América Latina. Permite que empresas estabeleçam **presença digital forte, soluções de e-commerce e plataformas web personalizadas** com **design de ponta, otimização de performance e excelência em SEO**, ajudando **startups, PMEs e corporações** a ter sucesso no cenário digital.",
    "companies.eluter.button": "Mais informações",
    "companies.desafia.title": "Mais sobre CodeCraft Studio",
    "companies.desafia.description":
      "**CodeCraft Studio** é um **estúdio de desenvolvimento web** fundado por **Carlos Andrade** que ajuda **empresas e empreendedores** a construir **sites bonitos e funcionais**. Com expertise em **React, Next.js, TypeScript e frameworks CSS modernos**, CodeCraft Studio capacita a próxima geração de **negócios digitais na LATAM** para criar e implementar **experiências web de classe mundial**.",
    "companies.desafia.button": "Mais informações",

    // Streaming Section
    "streaming.title": "Transmissão ao Vivo de Desenvolvimento Web",
    "streaming.backHome": "Voltar ao Início",
    "streaming.description":
      "Junte-se a mim ao vivo para sessões de desenvolvimento web, tutoriais de programação e discussões sobre tecnologia. Assista enquanto construo projetos reais, resolvo desafios de código e compartilho insights sobre tecnologias web modernas.",
    "streaming.joinWhatsApp": "Entrar na Comunidade de Desenvolvedores",

    // Hackathon Section
    "hackathon.backHome": "Voltar ao Início",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es" || savedLanguage === "pt")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
