import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Plane, Shield, CreditCard, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import PaymentDialog from "@/components/ui/PaymentDialog";
import { useToast } from "@/hooks/use-toast";

const PackageCustomizer = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedDays, setSelectedDays] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();

  const countries = [
    "U.A.E. (DUBAI)", "THAILAND", "VIETNAM", "ABU DHABI",
    "MALDIVES", "U.K. (LONDON)", "SINGAPORE", "INDONESIA (BALI)",
    "JAPAN", "MALAYSIA", "AUSTRALIA", "U.S.A."
  ];

  const calculatePrice = () => {
    let basePrice = 50000;
    
    if (selectedCountry.includes("Australia") || selectedCountry.includes("New York")) basePrice = 120000;
    else if (selectedCountry.includes("Switzerland") || selectedCountry.includes("London")) basePrice = 95000;
    else if (selectedCountry.includes("Dubai") || selectedCountry.includes("Paris")) basePrice = 75000;
    
    if (selectedDays) {
      const days = parseInt(selectedDays);
      basePrice = basePrice + (days * 8000);
    }
    
    setEstimatedPrice(basePrice);
  };

  useEffect(() => {
    if (selectedCountry && selectedDays) {
      calculatePrice();
    }
  }, [selectedCountry, selectedDays]);

  const handlePaymentConfirm = () => {
    setDialogOpen(false);
    toast({
      title: "Quote Request Submitted",
      description: "Our team will contact you shortly with detailed pricing and itinerary.",
    });
  };

  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Customize Your <span className="bg-sunset-gradient bg-clip-text text-transparent">Perfect Package</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            All-inclusive packages with accommodation, sightseeing, transfers, visa & insurance. 
            Airfare excluded. Select your preferences and get an instant estimate.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-premium">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Package Customizer</CardTitle>
              <CardDescription>
                Build your perfect travel experience step by step
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Country Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Plane className="h-4 w-4 text-primary" />
                    Select Destination
                  </label>
                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Duration Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    Duration (Days)
                  </label>
                  <Select value={selectedDays} onValueChange={setSelectedDays}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select days" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 Days</SelectItem>
                      <SelectItem value="4">4 Days</SelectItem>
                      <SelectItem value="5">5 Days</SelectItem>
                      <SelectItem value="6">6 Days</SelectItem>
                      <SelectItem value="7">7 Days</SelectItem>
                      <SelectItem value="8">8 Days</SelectItem>
                      <SelectItem value="9">9 Days</SelectItem>
                      <SelectItem value="10">10 Days</SelectItem>
                      <SelectItem value="12">12 Days</SelectItem>
                      <SelectItem value="15">15 Days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* What's Included */}
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  All-Inclusive Package Includes:
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Accommodation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Sightseeing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Transfers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Visa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Insurance</span>
                  </div>
                </div>
              </div>

              {/* Price Estimate */}
              {selectedCountry && selectedDays && (
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-lg border-2 border-primary/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Estimated Package Price</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        All-inclusive: accommodation, sightseeing, transfers, visa & insurance
                      </p>
                      <div className="flex items-center gap-4 mb-4">
                        <Badge variant="destructive" className="flex items-center gap-1">
                          <Plane className="h-3 w-3" />
                          Airfare Excluded
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Shield className="h-3 w-3" />
                          Travel Insurance Optional
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">
                        ₹{estimatedPrice.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">per person</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <Button size="lg" className="bg-hero-gradient hover:shadow-glow" onClick={() => setDialogOpen(true)}>
                      <CreditCard className="mr-2 h-4 w-4" />
                      Get Detailed Quote
                    </Button>
                    <Button variant="outline" size="lg" onClick={() => setDialogOpen(true)}>
                      Schedule Consultation
                    </Button>
                  </div>
                </div>
              )}

              {/* Payment Structure */}
              <div className="bg-muted/50 p-6 rounded-lg border-2 border-destructive/20">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  Payment Structure
                  <Badge variant="destructive" className="text-xs">Non-Refundable & Non-Transferable</Badge>
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
                <p className="text-xs text-destructive font-semibold mt-4 text-center border-t border-destructive/20 pt-4">
                  ⚠️ ALL PAYMENTS ARE NON-REFUNDABLE & NON-TRANSFERABLE
                </p>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  *T&C Apply. Prices may vary without prior notice. Airfare is excluded and charged separately.
                </p>
              </div>
              
              <PaymentDialog 
                open={dialogOpen} 
                onOpenChange={setDialogOpen} 
                onConfirm={handlePaymentConfirm}
                estimatedPrice={estimatedPrice}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PackageCustomizer;