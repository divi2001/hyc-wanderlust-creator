import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import hycLogo from "@/assets/hyc-logo.png";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@hyctravel.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Mumbai, India</span>
            </div>
          </div>
          <div className="text-xs">
            Follow us on Instagram for special discounts!
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex flex-col items-center gap-2">
            <img src={hycLogo} alt="HYC Travels - Travel Beyond Borders" className="h-32 w-auto" />
            <span className="text-sm text-muted-foreground font-medium">
              Travel Beyond Borders
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#destinations" className="hover:text-primary transition-colors">
              Destinations
            </a>
            <a href="#packages" className="hover:text-primary transition-colors">
              Packages
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              About Us
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              Get Quote
            </Button>
            <Button size="sm" className="bg-hero-gradient hover:shadow-glow">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;