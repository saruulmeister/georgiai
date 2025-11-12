import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, Shield } from "lucide-react";
import heroImage from "@assets/generated_images/AI_dashboard_hero_image_7c774615.png";

export default function HeroSection() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      // removed min-h-screen, reduced paddings
      className="py-12 md:py-16 px-6"
      data-testid="section-hero"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 items-center gap-8 md:gap-12">
          <div className="space-y-6">
            <Badge variant="secondary" className="w-fit" data-testid="badge-ai-native">
              <Sparkles className="w-3 h-3 mr-1" />
              AI-Native Operating System
            </Badge>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-orange-500 to-orange-500 bg-clip-text text-transparent">
                AI native ERP for VCs
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Replace fragmented spreadsheets and legacy tools with a unified,
              intelligent platform that automates fund administrations, portfolio monitoring,
              and delivers real-time insights.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-gradient-to-r from-orange-500 to-orange-500 hover:opacity-90 transition-opacity"
                data-testid="button-get-started"
              >
                Get Started
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-600/20 blur-3xl rounded-full" />
            {/* Right: Dashboard preview */}
            <div className="relative bg-[#0F172A] border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-[#94A3B8]">Portfolio Overview</div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#0B1220] rounded-xl p-4 border border-white/5">
                    <div className="text-2xl font-bold text-white">$2.4B</div>
                    <div className="text-sm text-[#94A3B8]">AUM</div>
                  </div>
                  <div className="bg-[#0B1220] rounded-xl p-4 border border-white/5">
                    <div className="text-2xl font-bold text-white">124</div>
                    <div className="text-sm text-[#94A3B8]">Active Deals</div>
                  </div>
                </div>

                <div className="bg-[#0B1220] rounded-xl p-4 border border-white/5 space-y-3">
                  {[85, 92, 78].map((v, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-xs text-[#94A3B8]">
                        <span>Fund {i + 1}</span>
                        <span>{v}%</span>
                      </div>
                      <div className="h-2 bg-[#0F172A] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-orange-500 to-orange-500 rounded-full"
                          style={{ width: `${v}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
