import { Card, CardContent } from "@/components/ui/card";
import { X, Check } from "lucide-react";

export default function ProblemSolutionSection() {
  const problems = [
    "Fragmented vendor platforms with siloed data",
    "Inefficient portfolio tracking and reporting",
    "Error-prone reconciliation processes",
    "Manual processes and Bottlenecks",
  ];

  const solutions = [
    "Vertically integrated platform with single source of truth",
    "Automated real-time analytics",
    "Zero data entry, autonomous reconciliation",
    "Deeply embedded AI workflows",
  ];

  return (
    <section id="problem" className="py-12 px-6" data-testid="section-problem">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            From Chaos to{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-500 bg-clip-text text-transparent">
              Clarity
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Transform your fund operation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card
            className="border-2 border-destructive/20"
            data-testid="card-problem"
          >
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-destructive">
                The Problem
              </h3>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                    data-testid={`problem-item-${index}`}
                  >
                    <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{problem}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card
            className="border-2 border-primary/20"
            data-testid="card-solution"
          >
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">
                The Solution
              </h3>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                    data-testid={`solution-item-${index}`}
                  >
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{solution}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
