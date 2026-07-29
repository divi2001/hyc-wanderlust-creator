import HeroSection from "@/components/sections/HeroSection";
import VisionMissionSection from "@/components/sections/VisionMissionSection";
import InternationalSection from "@/components/sections/InternationalSection";
import DomesticSection from "@/components/sections/DomesticSection";
import PackageCustomizer from "@/components/sections/PackageCustomizer";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div>
      <HeroSection />
      <VisionMissionSection />
      <InternationalSection />
      <DomesticSection />
      <PackageCustomizer />
      <FeaturesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
