import { Card, CardContent } from "@/components/ui/card";
import { Database, CheckCircle2, BarChart3, ArrowRight } from "lucide-react";

export default function ProductSection() {
  const products = [
    {
      icon: Database,
      title: "AI-Native ERP",
      features: [
        "Centralized portfolio data management",
        "Automated document parsing and extraction",
        "Real-time synchronization across systems",
      ],
    },
    {
      icon: CheckCircle2,
      title: "Operations & Compliance",
      features: [
        "Automated regulatory reporting",
        "Smart contract management",
        "Audit trail and version control",
      ],
    },
    {
      icon: BarChart3,
      title: "Analytics & Copilot",
      features: [
        "AI-powered investment insights",
        "Natural language queries",
        "Customizable dashboards and reports",
      ],
    },
  ];

  return (
    <section
      id="product"
      className="py-20 px-6 bg-card/30"
      data-testid="section-product"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Complete Platform for{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-700 bg-clip-text text-transparent">
              Modern Firms
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need in one integrated solution
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card
                key={index}
                className="hover-elevate"
                data-testid={`card-product-${index}`}
              >
                <CardContent className="p-8 space-y-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{product.title}</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-start gap-2"
                        data-testid={`feature-${index}-${fIndex}`}
                      >
                        <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1"
                    data-testid={`link-learn-more-${index}`}
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
