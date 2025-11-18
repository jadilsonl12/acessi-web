"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import { Mail, MapPin, Globe } from "lucide-react";

export default function TalksSection() {
  const { t } = useLanguage();

  const renderTextWithBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="text-white font-semibold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  const argentinaTalks = [
    "🏭 Usina de Ideas (La Plata)",
    "🧪 Creators Lab (UNCUYO)",
    "⚡ Salta Tech",
    "🎓 UCEL - Universidad del Centro Educativo Latinoamericano",
    '👨‍🏫 Professor in "Programa tu futuro" - Government of the City of Buenos Aires',
    "👔 JCI Salta",
    "🎓 UCASAL",
    "💰 Cryptovendimia",
    "🌐 DescentralizAR (Salta & Mendoza)",
    "🎓 Congreso Argentino de Estudiantes de Ingeniería Industrial y Carreras Afines",
  ];

  const internationalTalks = [
    "🇪🇸 Universidad de Deusto (Bilbao)",
    "🇪🇸 Universitat Autònoma de Barcelona",
    "🇪🇸 Universidad Pompeu Fabra",
    "🇪🇨 CONQUITO",
  ];

  return (
    <section id="talks" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Talks & Workshops
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Argentina Talks */}
          <div className="lg:col-span-1">
            <Card className="glass p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group">
              <div className="flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 mr-2 text-blue-400" />
                <h3 className="text-2xl font-bold text-center text-white group-hover:text-blue-400 transition-colors duration-300">
                  Argentina
                </h3>
              </div>
              <div className="space-y-3">
                {argentinaTalks.map((talk, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-2 text-white/75 hover:text-white hover:translate-x-2 transition-all duration-300"
                  >
                    <span className="text-sm mt-1 text-blue-400">•</span>
                    <span className="text-sm hover:text-blue-300 transition-colors duration-200">
                      {talk}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* International Talks */}
          <div className="lg:col-span-1">
            <Card className="glass p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group">
              <div className="flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 mr-2 text-purple-400" />
                <h3 className="text-2xl font-bold text-center text-white group-hover:text-purple-400 transition-colors duration-300">
                  International
                </h3>
              </div>
              <div className="space-y-3">
                {internationalTalks.map((talk, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-2 text-white/75 hover:text-white hover:translate-x-2 transition-all duration-300"
                  >
                    <span className="text-sm mt-1 text-purple-400">•</span>
                    <span className="text-sm hover:text-purple-300 transition-colors duration-200">
                      {talk}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
