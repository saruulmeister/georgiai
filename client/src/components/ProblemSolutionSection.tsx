import { Card, CardContent } from "@/components/ui/card";
import { X, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function ProblemSolutionSection() {
  const problems = [
    "Fragmented vendor platforms with siloed data",
    "Inefficient portfolio tracking and reporting",
    "Error-prone reconciliation processes",
    "Manual processes and bottlenecks",
  ];

  const solutions = [
    "Vertically integrated platform with single source of truth",
    "Automated real-time analytics",
    "Zero data entry, autonomous reconciliation",
    "Deeply embedded AI workflows",
  ];

  return (
    <section
      id="problem"
      className="py-24 px-6 relative overflow-hidden"
      data-testid="section-problem"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-orange-100/30 to-red-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            From Chaos to{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-700 bg-clip-text text-transparent">
              Clarity
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Transform your fund operations with intelligent automation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Problem Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <Card
              className="relative border-2 border-red-200 bg-white/90 shadow-lg hover:shadow-xl transition-all"
              data-testid="card-problem"
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-red-600">
                  The Problem
                </h3>
                <ul className="space-y-4">
                  {problems.map((problem, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50/50 transition-colors"
                      data-testid={`problem-item-${index}`}
                    >
                      <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{problem}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <Card
              className="relative border-2 border-green-200 bg-white/90 shadow-lg hover:shadow-xl transition-all"
              data-testid="card-solution"
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-green-600">
                  The Solution
                </h3>
                <ul className="space-y-4">
                  {solutions.map((solution, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50/50 transition-colors"
                      data-testid={`solution-item-${index}`}
                    >
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{solution}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
