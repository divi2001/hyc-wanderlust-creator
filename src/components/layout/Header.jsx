// src/components/layout/Header.jsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Instagram, Menu, X, Languages } from "lucide-react";
import hycLogo from "@/assets/hyc-logo.png";
import { contact } from "@/data/site";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { t, lang, toggle } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#international", label: t("nav.international") },
    { href: "#domestic", label: t("nav.domestic") },
    { href: "#packages", label: t("nav.customize") },
    { href: "#about", label: t("nav.about") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm border-b border-border/60">
          <div className="flex items-center gap-6 text-muted-foreground">
            <a href={contact.phoneHref} className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-3.5 w-3.5" />
              {contact.phone}
            </a>
            <a href={contact.emailHref} className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-3.5 w-3.5" />
              {contact.email}
            </a>
          </div>
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="h-3.5 w-3.5" />
            {contact.instagramHandle}
          </a>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-2 gap-4">
          {/* The logo artwork carries the "Travel Beyond Borders" tagline itself. */}
          <a href="#top" className="flex items-center shrink-0">
            <img src={hycLogo} alt="HYC Travels - Travel Beyond Borders" className="h-16 md:h-20 w-auto" />
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-primary transition-colors whitespace-nowrap">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Client supplied the catalogue in English and Marathi. */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggle}
              aria-label={lang === "en" ? "मराठीत बदला" : "Switch to English"}
              className="gap-1.5"
            >
              <Languages className="h-4 w-4" />
              {lang === "en" ? "मराठी" : "English"}
            </Button>

            <Button asChild size="sm" className="hidden sm:inline-flex bg-hero-gradient hover:shadow-glow">
              <a href="#contact">{t("nav.bookNow")}</a>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        {open && (
          <nav className="lg:hidden pb-4 flex flex-col gap-1 border-t border-border pt-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 px-2 rounded-md hover:bg-muted transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={contact.phoneHref}
              className="py-2 px-2 rounded-md hover:bg-muted transition-colors flex items-center gap-2 text-primary font-medium"
            >
              <Phone className="h-4 w-4" />
              {contact.phone}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
