// src/components/sections/HeroSection.jsx
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe2, Map, Headphones } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";
import { DOMESTIC_TOTAL, internationalPackages } from "@/data/packages";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  // Counts come from the catalogue so the headline can never drift from it.
  const stats = [
    { icon: Globe2, value: internationalPackages.length, label: t("hero.statCountries") },
    { icon: Map, value: DOMESTIC_TOTAL, label: t("hero.statDomestic") },
    { icon: Headphones, value: "24x7", label: t("hero.statSupport") },
  ];

  return (
    <section id="top" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {t("hero.titleTop")}
            <span className="block bg-sunset-gradient bg-clip-text text-transparent">{t("hero.titleAccent")}</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">{t("hero.subtitle")}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 shadow-premium hover:shadow-glow transition-all duration-300"
            >
              <a href="#international">
                {t("hero.ctaPrimary")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black text-lg px-8 py-6 backdrop-blur-sm transition-all duration-300"
            >
              <a href="#contact">{t("hero.ctaSecondary")}</a>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-8 max-w-2xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <s.icon className="h-6 w-6 text-secondary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold">{s.value}</div>
                <div className="text-xs md:text-sm text-white/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
