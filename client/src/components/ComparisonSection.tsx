import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

export default function ComparisonSection() {
  // Rows (left-most labels)
  const features = [
    "AI-native",
    "All-in-One",
    "ERP",
    "Compliance",
    "Analytics",
    "Valuation",
    "Integrated Workflows",
  ];

  // Columns (top header)
  const competitors = ["Georgi", "Carta", "Aduro", "AngelList", "Sydecar"];

  // Matrix values (rows x columns): true = ✅, "partial" = 🟡, false = ❌
  // Based on your screenshot
  const comparison = [
    // AI-native
    [true,  false, false, false, false],
    // All-in-One
    [true,  false, false, false, false],
    // ERP
    [true,  true, false, "partial", false],
    // Compliance
    [true, false, false, false, false],
    // Analytics
    [true,  "partial", "partial", false, false],
    // Valuation
    [true, false, false, false, false],
    // Integrated Workflows
    [true,  "partial", "partial", "partial", "partial"],
  ];

  const getIcon = (value) => {
    if (value === true) {
      return <Check className="w-5 h-5 text-green-500" aria-label="Yes" />;
    }
    if (value === "partial") {
      return <span className="inline-block w-3.5 h-3.5 rounded-full bg-amber-500" aria-label="Partial" />;
    }
    return <X className="w-5 h-5 text-rose-500/80" aria-label="No" />;
  };

  return (
    <section className="py-16 px-6" data-testid="section-comparison">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-3">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-500 bg-clip-text text-transparent">
              Georgi
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Based on today’s market capabilities
          </p>
        </div>

        <Card data-testid="card-comparison">
          <CardContent className="p-0 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  {competitors.map((comp, i) => (
                    <th
                      key={comp}
                      className={`text-center p-4 font-semibold ${
                        i === 0 ? "text-orange-600" : ""
                      }`}
                      data-testid={`competitor-${i}`}
                    >
                      {comp}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, r) => (
                  <tr key={feature} className="border-b border-border last:border-0">
                    <td className="p-4 font-medium">{feature}</td>
                    {comparison[r].map((cell, c) => (
                      <td key={`${r}-${c}`} className="p-4 text-center">
                        {getIcon(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Legend (optional) */}
        <div className="flex items-center gap-6 mt-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" /> <span>Yes</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-3.5 h-3.5 rounded-full bg-amber-500" /> <span>Partial</span>
          </div>
          <div className="flex items-center gap-2">
            <X className="w-4 h-4 text-rose-500/80" /> <span>No</span>
          </div>
        </div>
      </div>
    </section>
  );
}
