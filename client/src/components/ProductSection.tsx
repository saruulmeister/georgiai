import { Card, CardContent } from "@/components/ui/card";
import { Database, CheckCircle2, BarChart3, ArrowRight } from "lucide-react";

export default function ProductSection() {
  const products = [
    {
      icon: Database,
      title: "AI-Native ERP",
      features: [
        "Fully autonomous AI accountants with human oversight",
        "Zero data entry, autonomous reconciliation",
        "Intelligent workflow routing",
      ],
    },
    {
      icon: CheckCircle2,
      title: "Operations & Compliance",
      features: [
        "Automated regulatory reporting",
        "Automated document parsing and extraction",
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
            <span className="bg-gradient-to-r from-orange-500 to-orange-500 bg-clip-text text-transparent">
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
                className="hover:shadow-lg transition-all hover:-translate-y-1 border border-border"
                data-testid={`card-product-${index}`}
              >
                <CardContent className="p-8 space-y-6">
                  {/* Orange icon container */}
                  <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-orange-600" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground">
                    {product.title}
                  </h3>

                  <ul className="space-y-3">
                    {product.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-start gap-2"
                        data-testid={`feature-${index}-${fIndex}`}
                      >
                        <ArrowRight className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className="text-orange-600 text-sm font-medium hover:underline inline-flex items-center gap-1"
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
