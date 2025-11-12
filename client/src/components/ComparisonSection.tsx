import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

export default function ComparisonSection() {
  // Feature labels
  const features = [
    "AI-native",
    "All-in-One",
    "ERP",
    "Compliance",
    "Analytics",
    "Valuation",
    "Integrated Workflows",
  ];

  // Competitors (no Hanover Park)
  const competitors = ["Georgi", "Carta", "Aduro", "AngelList", "Sydecar"];

  // Matrix: "best" = ✅, "partial" = 🟡, "none" = ❌
  const comparison = [
    // AI-native
    ["best", "none", "none", "none", "none"],
    // All-in-One
    ["best", "none", "none", "none", "none"],
    // ERP
    ["best", "best", "none", "partial", "none"],
    // Compliance
    ["best", "none", "none", "none", "none"],
    // Analytics
    ["best", "partial", "partial", "none", "none"],
    // Valuation
    ["best", "none", "none", "none", "none"],
    // Integrated Workflows
    ["best", "partial", "partial", "partial", "partial"],
  ];

  // icon helper
  const getIcon = (value) => {
    switch (value) {
      case "best":
        return <Check className="w-5 h-5 text-green-500" aria-label="Best-in-class" />;
      case "partial":
        return <span className="inline-block w-3.5 h-3.5 rounded-full bg-amber-500" aria-label="Partial" />;
      default:
        return <X className="w-5 h-5 text-rose-500/80" aria-label="Not provided" />;
    }
  };

  return (
    <section className="py-16 px-6" data-testid="section-comparison">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-700 bg-clip-text text-transparent">
              Georgi
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Compared to other fund management platforms
          </p>
        </div>

        {/* Table */}
        <Card>
          <CardContent className="p-0 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  {competitors.map((comp, i) => (
                    <th
                      key={comp}
                      className={`text-center p-4 font-semibold ${
                        i === 0 ? "text-orange-600" : ""
                      }`}
                    >
                      {comp}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, r) => (
                  <tr
                    key={feature}
                    className="border-b border-border last:border-0"
                  >
                    <td className="p-4 font-medium">{feature}</td>
                    {comparison[r].map((cell, c) => (
                      <td
                        key={`${r}-${c}`}
                        className={`p-4 text-center ${
                          c === 0 ? "bg-orange-50/40" : ""
                        }`}
                      >
                        {getIcon(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Legend */}
        <div className="flex items-center gap-6 mt-4 text-sm text-muted-foreground justify-center">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            <span>Best-in-Class</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-3.5 h-3.5 rounded-full bg-amber-500" />
            <span>Partial</span>
          </div>
          <div className="flex items-center gap-2">
            <X className="w-4 h-4 text-rose-500/80" />
            <span>Not Provided</span>
          </div>
        </div>
      </div>
    </section>
  );
}
