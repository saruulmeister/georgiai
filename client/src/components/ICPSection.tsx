import { Card, CardContent } from "@/components/ui/card";
import { Users, Building2, Target } from "lucide-react";

export default function ICPSection() {
  return (
    <section id="why-georgi" className="py-20 px-6" data-testid="section-icp">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Built for{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-700 bg-clip-text text-transparent">
              Investment Leaders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Purpose-built for the VC/PE ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-1">
          <Card className="hover-elevate" data-testid="card-primary-buyers">
            <CardContent className="p-8 space-y-4 text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">
                Emerging & Mid-Market VCs/PE Firms
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 2-4 funds under managemen</li>
                <li>• 15-50 portfolio companies</li>
                <li>• Small ops team (1-3 people)</li>
                <li>• Pain: Manual processes, compliance risk</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
