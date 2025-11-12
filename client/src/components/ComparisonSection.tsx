import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

export default function ComparisonSection() {
  const features = [
    "AI-native",
    "All-in-One",
    "ERP",
    "Compliance",
    "Analytics",
    "Valuation",
    "Integrated Workflows",
  ];

  const competitors = ["Georgi", "Carta", "Aduro", "AngelList", "Sydecar"];

  // "best" = ✅, "partial" = 🟡, "none" = ❌
  const comparison = [
    ["best", "none", "none", "none", "none"],           // AI-native
    ["best", "none", "none", "none", "none"],           // All-in-One
    ["best", "best", "none", "partial", "none"],        // ERP
    ["best", "none", "none", "none", "none"],           // Compliance
    ["best", "partial", "partial", "none", "none"],     // Analytics
    ["best", "none", "none", "none", "none"],           // Valuation
    ["best", "partial", "partial", "partial", "partial"]// Integrated Workflows
  ];

  const getIcon = (value) => {
    if (value === "best") {
      return <Check className="w-5 h-5 text-green-500" aria-label="Best-in-Class" />;
    }
    if (value === "partial") {
      return (
        <span
          className="inline-block w-3.5 h-3.5 rounded-full bg-amber-500"
          aria-label="Partial"
        />
      );
    }
    return <X className="w-5 h-5 text-rose-500/80" aria-label="Not Provided" />;
  };

  return (
    <section id="comparison" className="py-16 px-6" data-testid="section-comparison">
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

        <Card>
          <CardContent className="p-0 overflow-x-auto">
            <table className="w-full table-fixed text-sm">
              {/* Force consistent column widths (first = wider for labels) */}
              <colgroup>
                <col style={{ width: 260 }} />
                {competitors.map((_, i) => (
                  <col key={i} style={{ width: 140 }} />
                ))}
              </colgroup>

              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  {competitors.map((comp, i) => (
                    <th
                      key={comp}
                      className={`p-4 font-semibold ${
                        i === 0 ? "text-orange-600" : "text-center"
                      }`}
                    >
                      <div className="flex justify-center">{comp}</div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {features.map((feature, r) => (
                  <tr key={feature} className="border-b border-border last:border-0">
                    <td className="p-4 font-medium">{feature}</td>
                    {comparison[r].map((cell, c) => (
                      <td
                        key={`${r}-${c}`}
                        className={`p-4 ${
                          c === 0 ? "bg-orange-50/40" : ""
                        }`}
                      >
                        {/* Center the mark precisely */}
                        <div className="flex justify-center">{getIcon(cell)}</div>
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
            <span className="inline-block w-3.5 h-3.5 rounded-full bg-orange-500" />
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
