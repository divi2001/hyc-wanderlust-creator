// src/components/sections/FeaturesSection.jsx
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, Headphones, CreditCard, Plane, FileText, MapPin, Users, Instagram, Phone } from "lucide-react";
import hycLogo from "@/assets/hyc-logo.png";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/site";
import { DOMESTIC_TOTAL, internationalPackages } from "@/data/packages";

const features = [
  {
    icon: CheckCircle,
    title: "Tailor-Made Packages",
    description: "Every itinerary is customized to your preferences, budget, and travel style"
  },
  {
    icon: Shield,
    title: "Trusted Partners",
    description: "Visa processing through verified partners with transparent policies"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock support during your journey"
  },
  {
    icon: CreditCard,
    title: "Flexible Payments",
    description: "Easy payment structure: 10% booking + 40% + 50% installments"
  },
  {
    icon: Plane,
    title: "Flight Flexibility",
    description: "Book flights independently or let us handle it at actual cost"
  },
  {
    icon: FileText,
    title: "Detailed Itineraries",
    description: "Day-wise PDF itineraries sent via WhatsApp and email"
  },
  {
    icon: MapPin,
    title: `${internationalPackages.length} Countries + ${DOMESTIC_TOTAL} Domestic Tours`,
    description: "Overseas circuits most loved by Indian travellers, plus pilgrimage and hill-station tours across India and Nepal"
  },
  {
    icon: Users,
    title: "Professional Discounts",
    description: "Special rates for Corporates, Teachers, Doctors, CA / CS, Lawyers, Government staff and the Armed Forces"
  }
];

const FeaturesSection = () => {
  return (
    <section id="why" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header with Logos - the frames are landscape because the logo is;
            a square frame leaves it stranded in dead space. */}
        <div className="flex items-center justify-between mb-8">
          <div className="w-24 h-16 border-2 border-primary rounded-lg flex items-center justify-center">
            <img src={hycLogo} alt="HYC Travels Logo" className="w-20 h-auto object-contain" />
          </div>
          <div className="text-center flex-1 mx-4">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Why Choose HYC Travels
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Journey, <span className="bg-hero-gradient bg-clip-text text-transparent">Our Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience hassle-free travel with our comprehensive services, 
              transparent policies, and commitment to creating unforgettable memories.
            </p>
          </div>
          <div className="w-24 h-16 border-2 border-primary rounded-lg flex items-center justify-center">
            <img src={hycLogo} alt="HYC Travels Logo" className="w-20 h-auto object-contain" />
          </div>
        </div>

        {/* Special Discounts Section */}
        {/* <div className="mb-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            🎉 Special Group Discounts 🎉
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-primary">👨‍💼 Professionals</h4>
              <p className="text-sm">Special rates for corporate professionals, IT employees, doctors, engineers, and government employees</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-primary">👵 Senior Citizens</h4>
              <p className="text-sm">Exclusive discounts for travelers aged 60+ with additional assistance services</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-primary">👩‍🎓 Students & Women Groups</h4>
              <p className="text-sm">Special rates for student groups, all-women trips, and female travelers</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-primary">👨‍👩‍👧‍👦 Family Packages</h4>
              <p className="text-sm">Discounted rates for family bookings (4+ members) with kids' special activities</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-primary">👥 Large Groups</h4>
              <p className="text-sm">Additional discounts for groups of 8+ people traveling together</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-primary">🎊 Festival Specials</h4>
              <p className="text-sm">Seasonal discounts during Diwali, Christmas, New Year, and summer vacations</p>
            </div>
          </div>
          <p className="text-center mt-6 text-sm text-muted-foreground">
            *Discounts applicable on base package price. Terms and conditions apply.
          </p>
        </div> */}

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-premium transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Real traveller stories live on the client's Instagram. */}
        <div className="text-center p-8 bg-background rounded-2xl border border-border">
          <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-4">
            <Instagram className="h-7 w-7 text-primary" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Travel Stories From Our Guests</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            See photos and reviews from recent HYC Travels departures on Instagram.
          </p>
          <Button asChild size="lg" variant="outline">
            <a href={contact.instagram} target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-4 w-4" />
              Follow {contact.instagramHandle}
            </a>
          </Button>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-hero-gradient rounded-2xl text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Plan Your Dream Vacation?
          </h3>
          <p className="text-lg mb-6 text-white/90">
            Tell us your dates and budget — we'll send a tailored itinerary and a firm quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <a href="#contact">Get Free Quote</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/60 text-white bg-transparent hover:bg-white/10 hover:text-white"
            >
              <a href={contact.phoneHref}>
                <Phone className="mr-2 h-4 w-4" />
                Call {contact.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;