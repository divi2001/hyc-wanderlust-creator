import { useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Users, Plane, Shield, CreditCard, CheckCircle2, Info, Phone } from "lucide-react";
import PaymentDialog from "@/components/ui/PaymentDialog";
import { useToast } from "@/hooks/use-toast";
import { internationalPackages, domesticPackages, formatINR } from "@/data/packages";
import { contact } from "@/data/site";
import { useLanguage } from "@/contexts/LanguageContext";

const INCLUSIONS = ["Accommodation", "Sightseeing", "Transfers", "Meals as listed", "On-tour support"];

const PackageCustomizer = () => {
  const { t, pick } = useLanguage();
  const [selectedKey, setSelectedKey] = useState("");
  const [travellers, setTravellers] = useState("2");
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();

  // Keys are prefixed so international and domestic ids can't collide.
  const selected = useMemo(() => {
    if (!selectedKey) return null;
    const [kind, rawId] = selectedKey.split(":");
    const id = Number(rawId);
    return kind === "intl"
      ? { kind, ...internationalPackages.find((p) => p.id === id) }
      : { kind, ...domesticPackages.find((p) => p.id === id) };
  }, [selectedKey]);

  const label = selected ? pick(selected.kind === "intl" ? selected.name : selected.route) : "";
  // Arithmetic on the client's published starting rate — never an invented figure.
  const total = selected ? selected.price * Number(travellers) : 0;

  const handleConfirm = () => {
    setDialogOpen(false);
    const message =
      `Hi HYC Travels, I'd like a detailed quote.%0A%0A` +
      `Tour: ${label}%0A` +
      `Travellers: ${travellers}%0A` +
      `Indicative starting total: ${formatINR(total)}`;
    window.open(`${contact.whatsappHref}?text=${message}`, "_blank", "noopener,noreferrer");
    toast({
      title: "Enquiry ready to send",
      description: "We've opened WhatsApp with your trip details. Our team replies with a firm quote.",
    });
  };

  return (
    <section id="packages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("cust.titleLead")}{" "}
            <span className="bg-sunset-gradient bg-clip-text text-transparent">{t("cust.titleAccent")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("cust.subtitle")}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-premium">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{t("cust.selectTour")}</CardTitle>
              <CardDescription>{t("cust.subtitle")}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Plane className="h-4 w-4 text-primary" />
                    {t("cust.selectTour")}
                  </label>
                  <Select value={selectedKey} onValueChange={setSelectedKey}>
                    <SelectTrigger>
                      <SelectValue placeholder={t("cust.chooseTour")} />
                    </SelectTrigger>
                    <SelectContent className="max-h-72">
                      <SelectGroup>
                        <SelectLabel>{t("cust.groupIntl")}</SelectLabel>
                        {internationalPackages.map((p) => (
                          <SelectItem key={`intl:${p.id}`} value={`intl:${p.id}`}>
                            {pick(p.name)} — {formatINR(p.price)}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>{t("cust.groupDom")}</SelectLabel>
                        {domesticPackages.map((p) => (
                          <SelectItem key={`dom:${p.id}`} value={`dom:${p.id}`}>
                            {pick(p.route)} — {formatINR(p.price)}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    {t("cust.travellers")}
                  </label>
                  <Select value={travellers} onValueChange={setTravellers}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20].map((n) => (
                        <SelectItem key={n} value={String(n)}>
                          {n}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* What's Included */}
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Package Includes:
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  {INCLUSIONS.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Indicative total */}
              {selected && (
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-lg border-2 border-primary/20">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{label}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {formatINR(selected.price)} × {travellers} {t("cust.travellers").toLowerCase()}
                      </p>
                      <div className="flex flex-wrap items-center gap-2">
                        {selected.kind === "intl" && (
                          <Badge variant="destructive" className="flex items-center gap-1">
                            <Plane className="h-3 w-3" />
                            {t("cust.excludesFlights")}
                          </Badge>
                        )}
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Shield className="h-3 w-3" />
                          Double sharing
                        </Badge>
                      </div>
                    </div>
                    <div className="sm:text-right shrink-0">
                      <div className="text-xs text-muted-foreground">{t("cust.startingTotal")}</div>
                      <div className="text-3xl font-bold text-primary">{formatINR(total)}</div>
                    </div>
                  </div>

                  <p className="flex items-start gap-2 text-xs text-muted-foreground mt-4 pt-4 border-t border-primary/20">
                    <Info className="h-4 w-4 shrink-0 mt-0.5" />
                    {t("cust.indicative")}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                    <Button size="lg" className="bg-hero-gradient hover:shadow-glow" onClick={() => setDialogOpen(true)}>
                      <CreditCard className="mr-2 h-4 w-4" />
                      {t("cust.getQuote")}
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <a href={contact.phoneHref}>
                        <Phone className="mr-2 h-4 w-4" />
                        {t("cust.callInstead")}
                      </a>
                    </Button>
                  </div>
                </div>
              )}

              {/* Payment Structure */}
              <div className="bg-muted/50 p-6 rounded-lg border-2 border-destructive/20">
                <h3 className="font-semibold mb-4">
                  Pay in full 100% advance or as per below mentioned Payment Structure
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center p-4 bg-background rounded-lg border border-destructive/20">
                    <div className="font-bold text-secondary text-lg">10%</div>
                    <div>Booking Amount</div>
                    <div className="text-xs text-destructive font-semibold mt-1">Non-refundable</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg border border-primary/20">
                    <div className="font-bold text-primary text-lg">40%</div>
                    <div>Within 10 Days</div>
                    <div className="text-xs text-muted-foreground mt-1">After booking</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg border border-accent/20">
                    <div className="font-bold text-accent text-lg">50%</div>
                    <div>Final Payment</div>
                    <div className="text-xs text-muted-foreground mt-1">60 days before departure</div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  *T&amp;C Apply. Prices may vary without prior notice. Airfare is excluded and charged separately.
                </p>
                <p className="text-xs text-destructive font-semibold mt-4 text-center border-t border-destructive/20 pt-4">
                  ⚠️ ALL PAYMENTS ARE NON-REFUNDABLE &amp; NON-TRANSFERABLE
                </p>
              </div>

              <PaymentDialog
                open={dialogOpen}
                onOpenChange={setDialogOpen}
                onConfirm={handleConfirm}
                estimatedPrice={total}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PackageCustomizer;
