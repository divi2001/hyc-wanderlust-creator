import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, Headphones, CreditCard, Plane, FileText, MapPin, Users } from "lucide-react";

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
    description: "Round-the-clock assistance before, during, and after your journey"
  },
  {
    icon: CreditCard,
    title: "Flexible Payments",
    description: "Easy payment structure: 10% booking + installment options"
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
    title: "12 Prime Destinations",
    description: "Handpicked countries with the best experiences and accommodations"
  },
  {
    icon: Users,
    title: "Group Discounts",
    description: "Special rates for professionals, senior citizens, and groups"
  }
];

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    text: "HYC Travels made our Dubai trip absolutely magical! The itinerary was perfect and the 4-star hotel exceeded expectations.",
    rating: 5,
    destination: "Dubai"
  },
  {
    name: "Rajesh Patel",
    location: "Delhi",
    text: "Professional service from booking to return. The payment structure made it easy to plan. Highly recommended!",
    rating: 5,
    destination: "Switzerland"
  },
  {
    name: "Anita Kumar",
    location: "Bangalore",
    text: "The team handled everything perfectly - visa guidance, flight bookings, and daily itineraries. Stress-free vacation!",
    rating: 5,
    destination: "Paris"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Features */}
        <div className="text-center mb-16">
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

        {/* Testimonials */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
            Happy Travelers
          </Badge>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Clients Say
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-premium transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.location}</CardDescription>
                  </div>
                  <Badge variant="secondary">{testimonial.destination}</Badge>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-secondary rounded-full"></div>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-hero-gradient rounded-2xl text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Plan Your Dream Vacation?
          </h3>
          <p className="text-lg mb-6 text-white/90">
            Get a personalized quote in just 5 minutes. Our travel experts are ready to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
              Get Free Quote
            </button>
            <button className="border border-white/50 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Call +91 98765 43210
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;