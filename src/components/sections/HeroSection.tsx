import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover Your
            <span className="block bg-sunset-gradient bg-clip-text text-transparent">
              Dream Destination
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Tailor-made travel packages to 12 incredible countries. 
            Let us craft your perfect journey with premium accommodations and unforgettable experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 shadow-premium hover:shadow-glow transition-all duration-300"
            >
              Explore Destinations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/50 text-white hover:bg-white/10 text-lg px-8 py-6 backdrop-blur-sm"
            >
              View Packages
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="h-6 w-6 text-secondary" />
              </div>
              <div className="text-2xl font-bold">12</div>
              <div className="text-sm text-white/80">Countries</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="h-6 w-6 text-secondary" />
              </div>
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-white/80">Packages</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-sm text-white/80">Happy Travelers</div>
            </div>
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