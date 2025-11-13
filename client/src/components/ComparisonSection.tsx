import { Card, CardContent } from "@/components/ui/card";
import { Check, X, Minus } from "lucide-react";
import { motion } from "framer-motion";

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

  const competitors = ["Georgi AI", "Carta", "Aduro", "AngelList", "Sydecar"];

  // "best" = ✅, "partial" = 🟡, "none" = ❌
  const comparison: ("best" | "partial" | "none")[][] = [
    ["best", "none", "none", "none", "none"], // AI-native
    ["best", "none", "none", "none", "none"], // All-in-One
    ["best", "best", "none", "partial", "none"], // ERP
    ["best", "none", "none", "none", "none"], // Compliance
    ["best", "partial", "partial", "none", "none"], // Analytics
    ["best", "none", "none", "none", "none"], // Valuation
    ["best", "partial", "partial", "partial", "partial"], // Integrated Workflows
  ];

  const getIcon = (value: "best" | "partial" | "none") => {
    if (value === "best") {
      return (
        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
          <Check className="w-4 h-4 text-white" aria-label="Best-in-Class" />
        </div>
      );
    }
    if (value === "partial") {
      return (
        <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center">
          <Minus className="w-4 h-4 text-white" aria-label="Partial" />
        </div>
      );
    }
    return (
      <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
        <X className="w-4 h-4 text-white" aria-label="Not Provided" />
      </div>
    );
  };

  return (
    <section
      id="comparison"
      className="px-6 py-24 relative overflow-hidden"
      data-testid="section-comparison"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-red-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-3 text-slate-900">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Georgi AI
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Based on today’s market capabilities
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
            <CardContent className="p-0 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="text-left p-6 font-semibold text-slate-700">
                      Feature
                    </th>
                    {competitors.map((comp, i) => (
                      <th
                        key={comp}
                        className="p-6 font-semibold text-center bg-slate-50"
                      >
                        <div className="flex flex-col items-center gap-1">
                          <span
                            className={
                              i === 0 ? "text-orange-600" : "text-slate-700"
                            }
                          >
                            {comp}
                          </span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {features.map((feature, r) => (
                    <motion.tr
                      key={feature}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * r }}
                      className="border-t border-slate-100 hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="p-6 font-medium text-slate-700">
                        {feature}
                      </td>
                      {comparison[r].map((cell, c) => (
                        <td
                          key={`${r}-${c}`}
                          className={`p-6 ${
                            c === 0 ? "bg-orange-50/40" : ""
                          }`}
                        >
                          <div className="flex justify-center">
                            {getIcon(cell)}
                          </div>
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </motion.div>

        {/* Legend */}
        <div className="flex items-center gap-6 mt-6 text-sm text-muted-foreground justify-center">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
              <Check className="w-3 h-3 text-white" />
            </div>
            <span>Best-in-Class</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center">
              <Minus className="w-3 h-3 text-white" />
            </div>
            <span>Partial</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
              <X className="w-3 h-3 text-white" />
            </div>
            <span>Not Provided</span>
          </div>
        </div>
      </div>
    </section>
  );
}
