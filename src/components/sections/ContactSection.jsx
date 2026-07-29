import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Instagram, MessageCircle, Sparkles, Headphones, BadgePercent } from "lucide-react";
import { contact, specials, discountProfessions } from "@/data/site";
import { useLanguage } from "@/contexts/LanguageContext";

const ICONS = { Sparkles, Headphones, BadgePercent };

const ContactSection = () => {
  const { t, pick } = useLanguage();

  const channels = [
    { icon: Phone, label: t("contact.call"), value: contact.phone, href: contact.phoneHref },
    { icon: MessageCircle, label: t("contact.whatsapp"), value: contact.phone, href: contact.whatsappHref },
    { icon: Mail, label: t("contact.email"), value: contact.email, href: contact.emailHref },
    { icon: Instagram, label: t("contact.instagram"), value: contact.instagramHandle, href: contact.instagram },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* HYC Travels Special */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">{t("special.eyebrow")}</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          {specials.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <Card key={s.icon} className="hover:shadow-premium transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{pick(s.title)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pick(s.description)}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Professions eligible for the special discount */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex flex-wrap justify-center gap-2">
            {pick(discountProfessions).map((p) => (
              <Badge key={p} variant="outline" className="bg-background text-sm py-1 px-3">
                {p}
              </Badge>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="text-center mb-10">
          <Badge className="mb-4 bg-secondary/15 text-secondary-foreground border-secondary/30">
            {t("contact.eyebrow")}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-hero-gradient bg-clip-text text-transparent">{t("contact.title")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {channels.map((c) => (
            <Button
              key={c.label}
              asChild
              variant="outline"
              className="h-auto py-5 flex-col gap-2 bg-background hover:border-primary hover:shadow-premium transition-all"
            >
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <c.icon className="h-6 w-6 text-primary" />
                <span className="text-xs uppercase tracking-wide text-muted-foreground">{c.label}</span>
                <span className="font-semibold text-foreground">{c.value}</span>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
