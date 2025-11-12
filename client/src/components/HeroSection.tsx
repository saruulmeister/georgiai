import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, Shield } from "lucide-react";
import heroImage from "@assets/generated_images/AI_dashboard_hero_image_7c774615.png";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="min-h-screen pt-32 pb-20 px-6"
      data-testid="section-hero"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge
              variant="secondary"
              className="w-fit"
              data-testid="badge-ai-native"
            >
              <Sparkles className="w-3 h-3 mr-1" />
              AI-Native Operating System
            </Badge>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-orange-500 to-amber-700 bg-clip-text text-transparent">
                AI native ERP for private funds
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Replace fragmented spreadsheets and legacy tools with a unified,
              intelligent platform that automates fund operations, ensure
              compliance, and delivers real-time insights.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-gradient-to-r from-orange-500 to-amber-700 hover:opacity-90 transition-opacity"
                data-testid="button-get-started"
              >
                Get Started
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  SOC 2 Compliant
                </span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  $2B+ AUM Tracked
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-orange-500/20 blur-3xl rounded-full" />
            <img
              src={heroImage}
              alt="Georgi AI Dashboard"
              className="relative rounded-2xl shadow-2xl border border-border"
              data-testid="img-hero-dashboard"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
