"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import Image from "next/image";

export default function CompaniesSection() {
  const { t } = useLanguage();

  const renderTextWithBold = (text: string) => {
    const parts = text.split(/(\\*\\*.*?\\*\\*)/g);
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

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* DigitalFlow Column */}
          <div className="space-y-6">
            <div className="flex justify-center mb-6">
              <Image
                src="/icons/digitalflow-logo.jpg"
                alt="DigitalFlow Logo"
                width={120}
                height={60}
                className="opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <p className="text-white/75 leading-relaxed mb-6">
              {renderTextWithBold(t("companies.eluter.description"))}
            </p>

            <Button
              className="glass glass-hover border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 transition-all duration-300 hover:scale-105"
              onClick={() =>
                window.open("https://www.digitalflow.dev/", "_blank")
              }
            >
              {t("companies.eluter.button")}
            </Button>
          </div>

          {/* CodeCraft Studio Column */}
          <div className="space-y-6">
            <div className="flex justify-center mb-6">
              <Image
                src="/icons/codecraft-logo.jpg"
                alt="CodeCraft Studio Logo"
                width={120}
                height={60}
                className="opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <p className="text-white/75 leading-relaxed mb-6">
              {renderTextWithBold(t("companies.desafia.description"))}
            </p>

            <Button
              className="glass glass-hover border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 transition-all duration-300 hover:scale-105"
              onClick={() => window.open("https://codecraft.studio/", "_blank")}
            >
              {t("companies.desafia.button")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
