import { Card, CardContent } from "@/components/ui/card";
import { Database, Target, BarChart3, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductSection() {
  const products = [
    {
      icon: Database,
      title: "AI-Native ERP",
      description:
        "Fully autonomous AI accountants with human oversight, zero data entry, and intelligent workflow routing.",
      items: [
        "Autonomous reconciliation",
        "Intelligent document parsing",
        "Smart workflow automation",
      ],
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-500/10 to-red-500/10",
    },
    {
      icon: Target,
      title: "Operations & Compliance",
      description:
        "Streamline regulatory requirements and maintain complete audit trails.",
      items: [
        "Automated regulatory reporting",
        "Document extraction & parsing",
        "Complete audit trail",
      ],
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-500/10 to-orange-500/10",
    },
    {
      icon: BarChart3,
      title: "Analytics & Copilot",
      description:
        "AI-powered insights and natural language queries for instant answers.",
      items: [
        "AI-powered investment insights",
        "Natural language queries",
        "Customizable dashboards",
      ],
      gradient: "from-orange-500 to-amber-600",
      bgGradient: "from-orange-500/10 to-amber-500/10",
    },
  ];

  return (
    <section
      id="product"
      className="px-6 py-24 bg-gradient-to-b from-white to-slate-50"
      data-testid="section-product"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
            Complete Platform for{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Modern Firms
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need in one integrated solution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}
                />
                <Card
                  className="relative bg-white rounded-2xl p-0 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 h-full"
                  data-testid={`card-product-${index}`}
                >
                  <CardContent className="p-8 flex flex-col h-full space-y-6">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {product.description}
                      </p>
                    </div>

                    <ul className="space-y-3 mb-4">
                      {product.items.map((item, fIndex) => (
                        <li
                          key={fIndex}
                          className="flex items-start gap-2"
                          data-testid={`feature-${index}-${fIndex}`}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-600 to-red-600 mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <button
                      className="mt-auto text-orange-600 hover:text-orange-700 text-sm font-medium inline-flex items-center gap-1 group/btn"
                      data-testid={`link-learn-more-${index}`}
                    >
                      Learn more
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
