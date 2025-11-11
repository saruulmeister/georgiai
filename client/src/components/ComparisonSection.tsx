import { Card, CardContent } from "@/components/ui/card";
import { Check, Circle, X } from "lucide-react";

export default function ComparisonSection() {
  const features = [
    "AI-Native Platform",
    "Unified Data Model",
    "Real-time Analytics",
    "Document Automation",
    "Natural Language Interface",
    "SOC 2 Compliance",
  ];

  const competitors = ["Georgi", "Carta", "Aduro", "AngelList", "Sydecar"];

  const comparison = [
    [true, false, false, false, false],
    [true, true, false, true, false],
    [true, false, true, false, true],
    [true, false, false, false, false],
    [true, false, false, false, false],
    [true, true, false, false, false],
  ];

  const getIcon = (value: boolean, isGeorgi: boolean) => {
    if (value) {
      return <Check className="w-5 h-5 text-primary" />;
    }
    if (isGeorgi) {
      return <Circle className="w-5 h-5 text-muted-foreground" />;
    }
    return <X className="w-5 h-5 text-muted-foreground/50" />;
  };

  return (
    <section className="py-20 px-6" data-testid="section-comparison">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              Georgi
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            See how we stack up against the competition
          </p>
        </div>

        <Card data-testid="card-comparison">
          <CardContent className="p-0 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  {competitors.map((comp, index) => (
                    <th
                      key={index}
                      className={`text-center p-4 font-semibold ${index === 0 ? "text-primary" : ""}`}
                      data-testid={`competitor-${index}`}
                    >
                      {comp}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, fIndex) => (
                  <tr
                    key={fIndex}
                    className="border-b border-border last:border-0"
                    data-testid={`feature-row-${fIndex}`}
                  >
                    <td className="p-4 text-muted-foreground">{feature}</td>
                    {comparison[fIndex].map((hasFeature, cIndex) => (
                      <td key={cIndex} className="p-4 text-center">
                        {getIcon(hasFeature, cIndex === 0)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
