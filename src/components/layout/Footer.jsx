import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-sunset-gradient bg-clip-text text-transparent">
              HYC Travels
            </h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Your trusted partner for tailor-made travel experiences. 
              Creating memories that last a lifetime with personalized 
              journeys to the world's most beautiful destinations.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-background hover:text-secondary">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background hover:text-secondary">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background hover:text-secondary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background hover:text-secondary">
                <Globe className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#destinations" className="text-background/80 hover:text-secondary transition-colors">Destinations</a></li>
              <li><a href="#packages" className="text-background/80 hover:text-secondary transition-colors">Packages</a></li>
              <li><a href="#about" className="text-background/80 hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-background/80 hover:text-secondary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-secondary transition-colors">Contact</a></li>
              <li><a href="#terms" className="text-background/80 hover:text-secondary transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-background/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="text-background/80">info@hyctravel.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-secondary mt-0.5" />
                <span className="text-background/80">
                  123 Business Hub,<br />
                  Andheri East, Mumbai,<br />
                  Maharashtra 400069
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-sm text-background/80">
              Subscribe to get special offers and travel updates
            </p>
            <div className="space-y-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-background/60">
              Follow our Instagram for exclusive discount codes!
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-background/60">
              © 2024 HYC Travels. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-background/60">
              <a href="#privacy" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-secondary transition-colors">Terms of Service</a>
              <a href="#cancellation" className="hover:text-secondary transition-colors">Cancellation Policy</a>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-background/5 rounded-lg">
            <h5 className="font-semibold mb-2 text-secondary">Important Disclaimers:</h5>
            <ul className="text-xs text-background/70 space-y-1">
              <li>• Prices may vary without prior notice. All packages are subject to availability.</li>
              <li>• Flight charges are additional and at actual cost. Booking can be done independently or through us.</li>
              <li>• Visa processing is handled by our trusted partners. HYC Travels has no role in visa approval.</li>
              <li>• 10% booking amount is non-refundable. Balance payments as per schedule.</li>
              <li>• Special discounts for professionals and senior citizens at sole discretion of HYC Travels.</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;