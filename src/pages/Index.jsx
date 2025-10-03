import HeroSection from "@/components/sections/HeroSection";
import DestinationsSection from "@/components/sections/DestinationsSection";
import PackageCustomizer from "@/components/sections/PackageCustomizer";
import FeaturesSection from "@/components/sections/FeaturesSection";
import VisionMissionSection from "@/components/sections/VisionMissionSection";

const Index = () => {
  return (
    <div>
      <HeroSection />
      <VisionMissionSection />
      <DestinationsSection />
      <PackageCustomizer />
      <FeaturesSection />
    </div>
  );
};

export default Index;