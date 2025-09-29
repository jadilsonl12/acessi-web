"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollFadeWrapper from "@/components/scroll-fade-wrapper"
import { useLanguage } from "@/contexts/language-context"
import { ExternalLink, Users, FileText, Trophy, Calendar, Shield, Code } from "lucide-react"

export default function HackathonClientPage() {
  const { t } = useLanguage()

  const linkButtons = [
    {
      title: "CodeCraft Studio",
      url: "https://codecraft.studio",
      icon: <Code size={20} />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Frontend Brasil",
      url: "https://frontend.brasil.dev",
      icon: <ExternalLink size={20} />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Discord Community",
      url: "https://discord.gg/webdev-brasil",
      icon: <Users size={20} />,
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Registration Form",
      url: "https://forms.gle/webdev-hackathon-2025",
      icon: <FileText size={20} />,
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-20">
        <ScrollFadeWrapper delay={0}>
          <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="w-full max-w-3xl mx-auto mb-12">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Web Development Hackathon 2025 - Build the Future"
                    className="absolute top-0 left-0 w-full h-full rounded-2xl"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Web Development Hackathon 2025
                </h1>
                <p className="text-xl md:text-2xl text-white/80">CodeCraft Challenge x Frontend Brasil</p>
              </div>

              <div className="glass rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Trophy className="text-yellow-400" size={32} />
                  <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">Prizes: $5,000 USD + Mentorship</h2>
                </div>
                <p className="text-white/80">
                  Build innovative web applications using modern technologies and win amazing prizes
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white/90">🚀 SPONSORS & LINKS</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {linkButtons.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative overflow-hidden rounded-xl p-6 glass border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                      aria-label={`Visit ${link.title}`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />
                      <div className="relative flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${link.color} text-white`}>{link.icon}</div>
                        <span className="font-semibold text-white group-hover:text-white/90 transition-colors">
                          {link.title}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="glass rounded-xl p-6 border border-white/10">
                  <Calendar className="text-blue-400 mb-4" size={32} />
                  <h4 className="text-lg font-bold mb-2">Submission Deadline</h4>
                  <p className="text-white/80">March 15, 2025 (11:59 PM UTC)</p>
                </div>
                <div className="glass rounded-xl p-6 border border-white/10">
                  <Users className="text-green-400 mb-4" size={32} />
                  <h4 className="text-lg font-bold mb-2">Team Size</h4>
                  <p className="text-white/80">Individual or up to 4 members</p>
                </div>
                <div className="glass rounded-xl p-6 border border-white/10">
                  <Shield className="text-purple-400 mb-4" size={32} />
                  <h4 className="text-lg font-bold mb-2">Theme</h4>
                  <p className="text-white/80">Sustainable Web Solutions</p>
                </div>
              </div>
            </div>
          </section>
        </ScrollFadeWrapper>

        <ScrollFadeWrapper delay={200}>
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                📋 Rules & Guidelines
              </h2>

              <div className="space-y-8">
                <div className="glass rounded-xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">👥 Eligibility</h3>
                  <ul className="space-y-2 text-white/80" role="list">
                    <li>• Open to developers worldwide (18+ years old)</li>
                    <li>• Individual participants or teams up to 4 members</li>
                    <li>• All skill levels welcome - beginner to expert</li>
                    <li>• Organizers and judges cannot participate</li>
                  </ul>
                </div>

                <div className="glass rounded-xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 text-green-400">🛠️ Technical Requirements</h3>
                  <ul className="space-y-2 text-white/80" role="list">
                    <li>• Must use modern web technologies (React, Vue, Angular, or vanilla JS)</li>
                    <li>• Responsive design is mandatory</li>
                    <li>• Must be deployed and publicly accessible</li>
                    <li>• Source code must be available on GitHub</li>
                    <li>• Include comprehensive README with setup instructions</li>
                  </ul>
                </div>

                <div className="glass rounded-xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">📦 Deliverables</h3>
                  <ul className="space-y-2 text-white/80" role="list">
                    <li>• Working web application (deployed)</li>
                    <li>• Public GitHub repository</li>
                    <li>• 3-minute demo video (English or Portuguese)</li>
                    <li>• Project documentation and README</li>
                  </ul>
                </div>

                <div className="glass rounded-xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 text-orange-400">🎯 Judging Criteria</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2 text-white/80">
                      <div className="flex justify-between">
                        <span>Innovation & Creativity</span>
                        <span className="font-bold">25%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Technical Implementation</span>
                        <span className="font-bold">25%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>User Experience</span>
                        <span className="font-bold">20%</span>
                      </div>
                    </div>
                    <div className="space-y-2 text-white/80">
                      <div className="flex justify-between">
                        <span>Sustainability Impact</span>
                        <span className="font-bold">20%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Presentation Quality</span>
                        <span className="font-bold">10%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">🏆 Prizes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🥇</div>
                      <h4 className="font-bold text-yellow-400">1st Place</h4>
                      <p className="text-white/80">$2,500 + 6-month mentorship</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-2">🥈</div>
                      <h4 className="font-bold text-gray-400">2nd Place</h4>
                      <p className="text-white/80">$1,500 + 3-month mentorship</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-2">🥉</div>
                      <h4 className="font-bold text-orange-400">3rd Place</h4>
                      <p className="text-white/80">$1,000 + 1-month mentorship</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollFadeWrapper>
      </main>

      <Footer />
    </div>
  )
}
