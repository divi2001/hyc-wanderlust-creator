import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Info, MessageCircle, Train, UtensilsCrossed, BedDouble } from "lucide-react";
import { domesticPackages, DOMESTIC_TOTAL, formatINR } from "@/data/packages";
import { contact, domesticRateNote } from "@/data/site";
import { useLanguage } from "@/contexts/LanguageContext";

const DomesticSection = () => {
  const { t, pick } = useLanguage();
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return domesticPackages;
    // Match on route and highlights in whichever language they exist, so a
    // search works the same in either UI language.
    return domesticPackages.filter((p) => {
      const haystack = [
        p.route.en, p.route.mr,
        ...(p.highlights.en ?? []),
        ...(p.highlights.mr ?? []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query]);

  const enquiryLink = (route) =>
    `${contact.whatsappHref}?text=${encodeURIComponent(`Hi HYC Travels, I'd like details about the ${route} tour.`)}`;

  return (
    <section id="domestic" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <Badge className="mb-4 bg-secondary/15 text-secondary-foreground border-secondary/30">
            {t("dom.eyebrow")}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("dom.titleLead")}{" "}
            <span className="bg-sunset-gradient bg-clip-text text-transparent">{t("dom.titleAccent")}</span>
          </h2>

          <div className="max-w-3xl mx-auto flex items-start gap-3 text-left bg-muted/50 border border-border rounded-lg p-4">
            <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">{pick(domesticRateNote)}</p>
          </div>
        </div>

        {/* Search + count */}
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between mb-6">
          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("dom.search")}
              className="pl-9"
              aria-label={t("dom.search")}
            />
          </div>
          <p className="text-sm text-muted-foreground">
            {t("dom.showing")} <strong className="text-foreground">{visible.length}</strong> {t("dom.of")}{" "}
            {DOMESTIC_TOTAL} {t("dom.tours")}
          </p>
        </div>

        {visible.length === 0 ? (
          <p className="text-center text-muted-foreground py-16">{t("dom.noResults")}</p>
        ) : (
          <>
            {/* Desktop: a real table — this is tabular data with 7 attributes. */}
            <div className="hidden lg:block overflow-x-auto rounded-xl border border-border shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-muted/70">
                  <tr className="text-left">
                    <th className="p-3 font-semibold w-8">#</th>
                    <th className="p-3 font-semibold min-w-[15rem]">{t("dom.colTour")}</th>
                    <th className="p-3 font-semibold text-center">{t("dom.colDays")}</th>
                    <th className="p-3 font-semibold">{t("dom.colTravel")}</th>
                    <th className="p-3 font-semibold">{t("dom.colMeals")}</th>
                    <th className="p-3 font-semibold">{t("dom.colStay")}</th>
                    <th className="p-3 font-semibold min-w-[16rem]">{t("dom.colHighlights")}</th>
                    <th className="p-3 font-semibold text-right whitespace-nowrap">{t("dom.colFrom")}</th>
                    <th className="p-3" />
                  </tr>
                </thead>
                <tbody>
                  {visible.map((p, i) => (
                    <tr key={p.id} className={`border-t border-border ${i % 2 ? "bg-muted/20" : ""}`}>
                      <td className="p-3 text-muted-foreground tabular-nums">{p.id}</td>
                      <td className="p-3 font-medium">{pick(p.route)}</td>
                      <td className="p-3 text-center tabular-nums">{p.days}</td>
                      <td className="p-3 text-muted-foreground">{pick(p.transport)}</td>
                      <td className="p-3 text-muted-foreground">{pick(p.meals)}</td>
                      <td className="p-3 text-muted-foreground">{pick(p.stay)}</td>
                      <td className="p-3 text-muted-foreground">{pick(p.highlights).join(", ")}</td>
                      <td className="p-3 text-right font-bold text-primary whitespace-nowrap tabular-nums">
                        {formatINR(p.price)}
                      </td>
                      <td className="p-3">
                        <Button asChild size="sm" variant="outline">
                          <a href={enquiryLink(p.route.en)} target="_blank" rel="noopener noreferrer">
                            {t("intl.enquire")}
                          </a>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile / tablet: the same rows as cards. */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
              {visible.map((p) => (
                <Card key={p.id} className="hover:shadow-premium transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-semibold leading-snug">{pick(p.route)}</h3>
                      <Badge variant="secondary" className="shrink-0 tabular-nums">
                        {p.days} {t("dom.colDays")}
                      </Badge>
                    </div>

                    <ul className="space-y-1.5 text-sm text-muted-foreground mb-3">
                      <li className="flex items-center gap-2">
                        <Train className="h-4 w-4 text-primary shrink-0" />
                        {pick(p.transport)}
                      </li>
                      <li className="flex items-center gap-2">
                        <UtensilsCrossed className="h-4 w-4 text-primary shrink-0" />
                        {pick(p.meals)}
                      </li>
                      <li className="flex items-center gap-2">
                        <BedDouble className="h-4 w-4 text-primary shrink-0" />
                        {pick(p.stay)}
                      </li>
                    </ul>

                    <p className="text-sm text-muted-foreground mb-4">
                      <span className="font-medium text-foreground">{t("dom.colHighlights")}: </span>
                      {pick(p.highlights).join(", ")}
                    </p>

                    <div className="flex items-end justify-between border-t border-border pt-3">
                      <div>
                        <div className="text-xs text-muted-foreground">{t("dom.colFrom")}</div>
                        <div className="text-xl font-bold text-primary">{formatINR(p.price)}</div>
                      </div>
                      <Button asChild size="sm" className="bg-hero-gradient hover:shadow-glow">
                        <a href={enquiryLink(p.route.en)} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="mr-1.5 h-4 w-4" />
                          {t("intl.enquire")}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* The client operates 30 tours; the rest are still to be supplied. */}
        {visible.length === domesticPackages.length && domesticPackages.length < DOMESTIC_TOTAL && (
          <p className="text-center text-sm text-muted-foreground mt-6">
            {t("dom.moreSoon")}{" "}
            <a href={contact.phoneHref} className="text-primary font-medium hover:underline">
              {contact.phone}
            </a>
          </p>
        )}
      </div>
    </section>
  );
};

export default DomesticSection;
