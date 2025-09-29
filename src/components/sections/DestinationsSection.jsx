import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Clock } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop",
    description: "Luxury shopping, stunning architecture, and desert adventures",
    packages: 45,
    rating: 4.9,
    duration: "4-7 days",
    startingPrice: "₹65,000"
  },
  {
    id: 2,
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=300&fit=crop",
    description: "Romance, art, cuisine, and iconic landmarks",
    packages: 38,
    rating: 4.8,
    duration: "5-8 days",
    startingPrice: "₹85,000"
  },
  {
    id: 3,
    name: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop",
    description: "Traditional culture meets modern innovation",
    packages: 42,
    rating: 4.9,
    duration: "6-9 days",
    startingPrice: "₹78,000"
  },
  {
    id: 4,
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop",
    description: "Tropical paradise with temples and beaches",
    packages: 52,
    rating: 4.7,
    duration: "4-7 days",
    startingPrice: "₹45,000"
  },
  {
    id: 5,
    name: "London, UK",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop",
    description: "Royal heritage, museums, and vibrant culture",
    packages: 35,
    rating: 4.6,
    duration: "5-8 days",
    startingPrice: "₹95,000"
  },
  {
    id: 6,
    name: "New York, USA",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop",
    description: "The city that never sleeps, Broadway, and skyscrapers",
    packages: 40,
    rating: 4.8,
    duration: "5-7 days",
    startingPrice: "₹120,000"
  },
  {
    id: 7,
    name: "Singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop",
    description: "Garden city with world-class attractions",
    packages: 48,
    rating: 4.9,
    duration: "3-6 days",
    startingPrice: "₹55,000"
  },
  {
    id: 8,
    name: "Thailand",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    description: "Pristine beaches, temples, and Thai cuisine",
    packages: 55,
    rating: 4.7,
    duration: "5-10 days",
    startingPrice: "₹40,000"
  },
  {
    id: 9,
    name: "Australia",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    description: "Unique wildlife, stunning coastlines, and adventure",
    packages: 32,
    rating: 4.8,
    duration: "8-12 days",
    startingPrice: "₹150,000"
  },
  {
    id: 10,
    name: "Switzerland",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&h=300&fit=crop",
    description: "Alpine beauty, pristine lakes, and charming towns",
    packages: 28,
    rating: 4.9,
    duration: "6-9 days",
    startingPrice: "₹110,000"
  },
  {
    id: 11,
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&h=300&fit=crop",
    description: "Overwater villas and crystal-clear lagoons",
    packages: 25,
    rating: 4.9,
    duration: "4-7 days",
    startingPrice: "₹80,000"
  },
  {
    id: 12,
    name: "Turkey",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop",
    description: "Rich history, stunning landscapes, and unique culture",
    packages: 30,
    rating: 4.6,
    duration: "6-8 days",
    startingPrice: "₹60,000"
  }
];

const DestinationsSection = () => {
  return (
    <section id="destinations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore Our <span className="bg-hero-gradient bg-clip-text text-transparent">12 Destinations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From tropical paradises to bustling metropolises, discover handpicked destinations 
            with tailor-made packages designed for your perfect getaway.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group hover:shadow-premium transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-secondary text-secondary-foreground">
                    {destination.packages} Packages
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded-full text-sm">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    {destination.rating}
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <CardTitle className="text-lg">{destination.name}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-sm">
                  {destination.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {destination.duration}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Starting from</div>
                    <div className="font-bold text-primary">{destination.startingPrice}</div>
                  </div>
                </div>
                
                <Button className="w-full bg-hero-gradient hover:shadow-glow">
                  View Packages
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="bg-background">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;