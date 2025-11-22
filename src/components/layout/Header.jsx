// // src/components/layout/Header.jsx
// import { Button } from "@/components/ui/button";
// import { Phone, Mail, MapPin } from "lucide-react";
// import hycLogo from "@/assets/hyc-logo.png";

// const Header = () => {
//   return (
//     <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
//       <div className="container mx-auto px-4">
//         {/* Top bar with contact info */}
//         <div className="flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border/50">
//           <div className="flex items-center gap-6">
//             <div className="flex items-center gap-2">
//               <Phone className="h-4 w-4" />
//               <span>+91 98765 43210</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Mail className="h-4 w-4" />
//               <span>info@hyctravel.com</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <MapPin className="h-4 w-4" />
//               <span>Mumbai, India</span>
//             </div>
//           </div>
//           <div className="text-xs">
//             Follow us on Instagram for special discounts!
//           </div>
//         </div>

//         {/* Main navigation */}
//         <div className="flex items-center justify-between py-2">
//           <div className="flex flex-col items-center gap-2">
//             <img src={hycLogo} alt="HYC Travels - Travel Beyond Borders" className="h-24 w-auto" />
//             <span className="text-xs text-muted-foreground font-medium">
//               Travel Beyond Borders
//             </span>
//           </div>

//           <nav className="hidden md:flex items-center space-x-8">
//             <a href="#destinations" className="hover:text-primary transition-colors">
//               Destinations
//             </a>
//             <a href="#packages" className="hover:text-primary transition-colors">
//               Packages
//             </a>
//             <a href="#about" className="hover:text-primary transition-colors">
//               About Us
//             </a>
//             <a href="#contact" className="hover:text-primary transition-colors">
//               Contact
//             </a>
//           </nav>

//           <div className="flex items-center gap-3">
//             <Button variant="outline" size="lg">
//               Get Quote
//             </Button>
//             <Button size="lg" className="bg-hero-gradient hover:shadow-glow">
//               Book Now
//             </Button>
//           </div>

//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;





// src/components/layout/Header.jsx
// import { Button } from "@/components/ui/button";
// import { Phone, Mail, MapPin } from "lucide-react";
// import hycLogo from "@/assets/hyc-logo.png";
// import { useState, useEffect } from "react";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     let ticking = false;
//     let scrollTimeout = null;
    
//     const handleScroll = () => {
//       if (!ticking) {
//         requestAnimationFrame(() => {
//           const currentScrollY = window.scrollY;
          
//           // Larger thresholds with more gap to prevent flickering
//           if (currentScrollY > 150) {
//             setIsScrolled(true);
//           } else if (currentScrollY < 80) {
//             setIsScrolled(false);
//           }
          
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };

//     // Debounced scroll handler
//     const debouncedScroll = () => {
//       if (scrollTimeout) {
//         clearTimeout(scrollTimeout);
//       }
//       scrollTimeout = setTimeout(handleScroll, 10);
//     };

//     window.addEventListener("scroll", debouncedScroll, { passive: true });
    
//     return () => {
//       window.removeEventListener("scroll", debouncedScroll);
//       if (scrollTimeout) {
//         clearTimeout(scrollTimeout);
//       }
//     };
//   }, []);

//   return (
//     <header 
//       className={`bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 transition-all duration-400 ease-in-out ${
//         isScrolled ? 'bg-background/80 shadow-sm' : 'bg-background/95'
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         {/* Top bar with contact info */}
//         <div 
//           className={`flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border/50 transition-all duration-400 ease-in-out overflow-hidden ${
//             isScrolled ? 'max-h-0 opacity-0 py-0 border-b-0' : 'max-h-12 opacity-100'
//           }`}
//         >
//           <div className="flex items-center gap-6">
//             <div className="flex items-center gap-2">
//               <Phone className="h-4 w-4" />
//               <span>+91 98765 43210</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Mail className="h-4 w-4" />
//               <span>info@hyctravel.com</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <MapPin className="h-4 w-4" />
//               <span>Mumbai, India</span>
//             </div>
//           </div>
//           <div className="text-xs">
//             Follow us on Instagram for special discounts!
//           </div>
//         </div>

//         {/* Main navigation */}
//         <div 
//           className={`flex items-center justify-between transition-all duration-400 ease-in-out ${
//             isScrolled ? 'py-2' : 'py-3'
//           }`}
//         >
//           <div className="flex flex-col items-center gap-2">
//             <img 
//               src={hycLogo} 
//               alt="HYC Travels - Travel Beyond Borders" 
//               className="h-24 w-auto" // Fixed size - no transition
//             />
//             <span 
//               className={`text-xs text-muted-foreground font-medium transition-all duration-400 ease-in-out ${
//                 isScrolled ? 'opacity-0 max-h-0 overflow-hidden' : 'opacity-100 max-h-6'
//               }`}
//             >
//               Travel Beyond Borders
//             </span>
//           </div>

//           <nav className="hidden md:flex items-center space-x-8">
//             <a href="#destinations" className="hover:text-primary transition-colors">
//               Destinations
//             </a>
//             <a href="#packages" className="hover:text-primary transition-colors">
//               Packages
//             </a>
//             <a href="#about" className="hover:text-primary transition-colors">
//               About Us
//             </a>
//             <a href="#contact" className="hover:text-primary transition-colors">
//               Contact
//             </a>
//           </nav>

//           <div className="flex items-center gap-3">
//             <Button 
//               variant="outline" 
//               size={isScrolled ? "default" : "lg"}
//               className="transition-all duration-400 ease-in-out"
//             >
//               Get Quote
//             </Button>
//             <Button 
//               size={isScrolled ? "default" : "lg"} 
//               className="bg-hero-gradient hover:shadow-glow transition-all duration-400 ease-in-out"
//             >
//               Book Now
//             </Button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;




// src/components/layout/Header.jsx
// import { Button } from "@/components/ui/button";
// import { Phone, Mail, MapPin } from "lucide-react";
// import hycLogo from "@/assets/hyc-logo.png";
// import { useState, useEffect } from "react";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     let ticking = false;
//     let scrollTimeout = null;
    
//     const handleScroll = () => {
//       if (!ticking) {
//         requestAnimationFrame(() => {
//           const currentScrollY = window.scrollY;
          
//           // Larger thresholds with more gap to prevent flickering
//           if (currentScrollY > 150) {
//             setIsScrolled(true);
//           } else if (currentScrollY < 80) {
//             setIsScrolled(false);
//           }
          
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };

//     // Debounced scroll handler
//     const debouncedScroll = () => {
//       if (scrollTimeout) {
//         clearTimeout(scrollTimeout);
//       }
//       scrollTimeout = setTimeout(handleScroll, 10);
//     };

//     window.addEventListener("scroll", debouncedScroll, { passive: true });
    
//     return () => {
//       window.removeEventListener("scroll", debouncedScroll);
//       if (scrollTimeout) {
//         clearTimeout(scrollTimeout);
//       }
//     };
//   }, []);

//   return (
//     <header 
//       className={`bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 transition-all duration-400 ease-in-out ${
//         isScrolled ? 'bg-background/80 shadow-sm' : 'bg-background/95'
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         {/* Top bar with contact info */}
//         <div 
//           className={`flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border/50 transition-all duration-400 ease-in-out overflow-hidden ${
//             isScrolled ? 'max-h-0 opacity-0 py-0 border-b-0' : 'max-h-12 opacity-100'
//           }`}
//         >
//           <div className="flex items-center gap-6">
//             <div className="flex items-center gap-2">
//               <Phone className="h-4 w-4" />
//               <span>+91 98765 43210</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Mail className="h-4 w-4" />
//               <span>info@hyctravel.com</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <MapPin className="h-4 w-4" />
//               <span>Mumbai, India</span>
//             </div>
//           </div>
//           <div className="text-xs">
//             Follow us on Instagram for special discounts!
//           </div>
//         </div>

//         {/* Main navigation */}
//         <div 
//           className={`flex items-center justify-between transition-all duration-400 ease-in-out ${
//             isScrolled ? 'py-2' : 'py-3'
//           }`}
//         >
//           <div className="flex flex-col items-center gap-2">
//             <img 
//               src={hycLogo} 
//               alt="HYC Travels - Travel Beyond Borders" 
//               className="h-24 w-auto" // Fixed size - no transition
//             />
//             <span className="text-xs text-muted-foreground font-medium">
//               Travel Beyond Borders
//             </span>
//           </div>

//           <nav className="hidden md:flex items-center space-x-8">
//             <a href="#destinations" className="hover:text-primary transition-colors">
//               Destinations
//             </a>
//             <a href="#packages" className="hover:text-primary transition-colors">
//               Packages
//             </a>
//             <a href="#about" className="hover:text-primary transition-colors">
//               About Us
//             </a>
//             <a href="#contact" className="hover:text-primary transition-colors">
//               Contact
//             </a>
//           </nav>

//           <div className="flex items-center gap-3">
//             <Button 
//               variant="outline" 
//               size={isScrolled ? "default" : "lg"}
//               className="transition-all duration-400 ease-in-out"
//             >
//               Get Quote
//             </Button>
//             <Button 
//               size={isScrolled ? "default" : "lg"} 
//               className="bg-hero-gradient hover:shadow-glow transition-all duration-400 ease-in-out"
//             >
//               Book Now
//             </Button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;





// import { Button } from "@/components/ui/button";
// import { Phone, Mail, MapPin } from "lucide-react";
// import hycLogo from "@/assets/hyc-logo.png";
// import { useState, useEffect } from "react";
// import GoogleTranslate from '../google/GoogleTranslate';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     let ticking = false;
//     let scrollTimeout = null;
    
//     const handleScroll = () => {
//       if (!ticking) {
//         requestAnimationFrame(() => {
//           const currentScrollY = window.scrollY;
          
//           if (currentScrollY > 150) {
//             setIsScrolled(true);
//           } else if (currentScrollY < 80) {
//             setIsScrolled(false);
//           }
          
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };

//     const debouncedScroll = () => {
//       if (scrollTimeout) {
//         clearTimeout(scrollTimeout);
//       }
//       scrollTimeout = setTimeout(handleScroll, 10);
//     };

//     window.addEventListener("scroll", debouncedScroll, { passive: true });
    
//     return () => {
//       window.removeEventListener("scroll", debouncedScroll);
//       if (scrollTimeout) {
//         clearTimeout(scrollTimeout);
//       }
//     };
//   }, []);

//   return (
//     <header 
//       className={`bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 transition-all duration-400 ease-in-out ${
//         isScrolled ? 'bg-background/80 shadow-sm' : 'bg-background/95'
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         {/* Top bar with contact info */}
//         <div 
//           className={`flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border/50 transition-all duration-400 ease-in-out overflow-hidden ${
//             isScrolled ? 'max-h-0 opacity-0 py-0 border-b-0' : 'max-h-12 opacity-100'
//           }`}
//         >
//           <div className="flex items-center gap-6">
//             <div className="flex items-center gap-2">
//               <Phone className="h-4 w-4" />
//               <span>+91 98765 43210</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Mail className="h-4 w-4" />
//               <span>info@hyctravel.com</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <MapPin className="h-4 w-4" />
//               <span>Mumbai, India</span>
//             </div>
//           </div>
//           <div className="text-xs">
//             {/* ===== TOGGLE REMOVED FROM HERE ===== */}
//             Follow us on Instagram for special discounts!
//           </div>
//         </div>

//         {/* Main navigation */}
//         <div 
//           className={`flex items-center justify-between transition-all duration-400 ease-in-out ${
//             isScrolled ? 'py-2' : 'py-3'
//           }`}
//         >
//           <div className="flex flex-col items-center gap-2">
//             <img 
//               src={hycLogo} 
//               alt="HYC Travels - Travel Beyond Borders" 
//               className="h-24 w-auto"
//             />
//             <span className="text-xs text-muted-foreground font-medium">
//               Travel Beyond Borders
//             </span>
//           </div>

//           <nav className="hidden md:flex items-center space-x-8">
//             <a href="#destinations" className="hover:text-primary transition-colors">
//               Destinations
//             </a>
//             <a href="#packages" className="hover:text-primary transition-colors">
//               Packages
//             </a>
//             <a href="#about" className="hover:text-primary transition-colors">
//               About Us
//             </a>
//             <a href="#contact" className="hover:text-primary transition-colors">
//               Contact
//             </a>
            
            
//           </nav>

//           <div className="flex items-center gap-3">
//             <Button 
//               variant="outline" 
//               size={isScrolled ? "default" : "lg"}
//               className="transition-all duration-400 ease-in-out"
//             >
//               Get Quote
//             </Button>
//             <Button 
//               size={isScrolled ? "default" : "lg"} 
//               className="bg-hero-gradient hover:shadow-glow transition-all duration-400 ease-in-out"
//             >
//               Book Now
//             </Button>


//             {/* ===== TOGGLE ADDED HERE ===== */}
//             <div className="border-l border-border pl-6 ml-2">
//               <GoogleTranslate />
//             </div>

            
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;





import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import hycLogo from "@/assets/hyc-logo.png";
import { useState, useEffect } from "react";
// ===== 1. IMPORT THE NEW CUSTOM SWITCHER =====
import CustomLanguageSwitcher from '../layout/CustomLanguageSwitcher';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    let scrollTimeout = null;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          if (currentScrollY > 150) {
            setIsScrolled(true);
          } else if (currentScrollY < 80) {
            setIsScrolled(false);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    const debouncedScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(handleScroll, 10);
    };

    window.addEventListener("scroll", debouncedScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", debouncedScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  return (
    <header 
      className={`bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 transition-all duration-400 ease-in-out ${
        isScrolled ? 'bg-background/80 shadow-sm' : 'bg-background/95'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div 
          className={`flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border/50 transition-all duration-400 ease-in-out overflow-hidden ${
            isScrolled ? 'max-h-0 opacity-0 py-0 border-b-0' : 'max-h-12 opacity-100'
          }`}
        >
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
        <div 
          className={`flex items-center justify-between transition-all duration-400 ease-in-out ${
            isScrolled ? 'py-2' : 'py-3'
          }`}
        >
          <div className="flex flex-col items-center gap-2">
            <img 
              src={hycLogo} 
              alt="HYC Travels - Travel Beyond Borders" 
              className="h-24 w-auto"
            />
            <span className="text-xs text-muted-foreground font-medium">
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
            <Button 
              variant="outline" 
              size={isScrolled ? "default" : "lg"}
              className="transition-all duration-400 ease-in-out"
            >
              Get Quote
            </Button>
            <Button 
              size={isScrolled ? "default" : "lg"} 
              className="bg-hero-gradient hover:shadow-glow transition-all duration-400 ease-in-out"
            >
              Book Now
            </Button>

            {/* ===== 2. REPLACE THE OLD COMPONENT WITH THE NEW ONE ===== */}
            <CustomLanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;