import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Info, MessageCircle } from "lucide-react";
import { REGIONS, internationalPackages, formatINR } from "@/data/packages";
import { contact, internationalRateNote } from "@/data/site";
import { useLanguage } from "@/contexts/LanguageContext";

const InternationalSection = () => {
  const { t, pick } = useLanguage();
  const [region, setRegion] = useState("all");

  const visible = useMemo(
    () => (region === "all" ? internationalPackages : internationalPackages.filter((p) => p.region === region)),
    [region],
  );

  const enquiryLink = (name) =>
    `${contact.whatsappHref}?text=${encodeURIComponent(`Hi HYC Travels, I'd like details about the ${name} package.`)}`;

  return (
    <section id="international" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">{t("intl.eyebrow")}</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("intl.titleLead")}{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">{t("intl.titleAccent")}</span>
          </h2>

          {/* Rate qualifier — the client asked for this to sit with the prices. */}
          <div className="max-w-3xl mx-auto flex items-start gap-3 text-left bg-background border border-primary/20 rounded-lg p-4">
            <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">{pick(internationalRateNote)}</p>
          </div>
        </div>

        {/* Region filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <Button
            variant={region === "all" ? "default" : "outline"}
            size="sm"
            className={region === "all" ? "bg-hero-gradient" : "bg-background"}
            onClick={() => setRegion("all")}
          >
            {t("intl.filterAll")}
          </Button>
          {REGIONS.map((r) => (
            <Button
              key={r.id}
              variant={region === r.id ? "default" : "outline"}
              size="sm"
              className={region === r.id ? "bg-hero-gradient" : "bg-background"}
              onClick={() => setRegion(r.id)}
            >
              {pick(r.name)}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p) => {
            const name = pick(p.name);
            return (
              <Card
                key={p.id}
                className="group flex flex-col hover:shadow-premium transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={name}
                    loading="lazy"
                    className="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-background/90 text-foreground backdrop-blur-sm">
                      {pick(REGIONS.find((r) => r.id === p.region)?.name)}
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <div className="flex items-center gap-1 bg-black/60 text-white px-2.5 py-1 rounded-full text-xs font-medium">
                      <Clock className="h-3 w-3" />
                      {p.nights}N / {p.days}D
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-snug">{name}</CardTitle>
                </CardHeader>

                <CardContent className="pt-0 flex flex-col flex-1">
                  <div className="mb-4 flex-1">
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                      {t("intl.sightseeing")}
                    </div>
                    <ul className="flex flex-wrap gap-1.5">
                      {pick(p.sightseeing).map((s) => (
                        <li
                          key={s}
                          className="text-xs bg-muted text-muted-foreground rounded-md px-2 py-1 border border-border"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-end justify-between border-t border-border pt-4">
                    <div>
                      <div className="text-xs text-muted-foreground">{t("intl.startingRate")}</div>
                      <div className="text-2xl font-bold text-primary leading-tight">{formatINR(p.price)}</div>
                      <div className="text-xs text-muted-foreground">{t("intl.perPerson")}</div>
                    </div>
                    <Button asChild size="sm" className="bg-hero-gradient hover:shadow-glow">
                      <a href={enquiryLink(name)} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-1.5 h-4 w-4" />
                        {t("intl.enquire")}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InternationalSection;
