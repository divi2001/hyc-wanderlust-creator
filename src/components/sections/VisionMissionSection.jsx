import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Target } from "lucide-react";

const VisionMissionSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-hero-gradient bg-clip-text text-transparent">Vision & Mission</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="hover:shadow-premium transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl">Our Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Empowering every Indian citizen to explore the world by making overseas travel affordable and accessible.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-premium transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To democratize international travel by offering affordable, sustainable, and hassle-free travel solutions, breaking down barriers and making global exploration a reality for all Indians
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
