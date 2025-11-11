// import { Card, CardContent } from '@/components/ui/card';
// import archDiagram from '@assets/generated_images/Architecture_diagram_9c35bc1c.png';

// export default function ArchitectureSection() {
//   const components = [
//     { name: 'AI-Native ERP', description: 'Core data management layer' },
//     { name: 'Vector Database', description: 'Semantic search & retrieval' },
//     { name: 'SQL Database', description: 'Structured data storage' },
//     { name: 'Document Parser', description: 'Automated extraction' },
//   ];

//   return (
//     <section className="py-20 px-6 bg-card/30" data-testid="section-architecture">
//       <div className="max-w-5xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold mb-4">
//             Built on{' '}
//             <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
//               Modern Architecture
//             </span>
//           </h2>
//           <p className="text-xl text-muted-foreground">
//             Enterprise-grade infrastructure designed for scale
//           </p>
//         </div>

//         <Card data-testid="card-architecture">
//           <CardContent className="p-8">
//             <div className="mb-8">
//               <img
//                 src={archDiagram}
//                 alt="Architecture Diagram"
//                 className="w-full rounded-lg"
//                 data-testid="img-architecture"
//               />
//             </div>
//             <div className="grid md:grid-cols-2 gap-6">
//               {components.map((comp, index) => (
//                 <div key={index} className="space-y-1" data-testid={`arch-component-${index}`}>
//                   <h4 className="font-semibold text-foreground">{comp.name}</h4>
//                   <p className="text-sm text-muted-foreground">{comp.description}</p>
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { Database, Shield, BarChart3, ArrowRight } from "lucide-react";

export default function ArchitectureSection() {
  const features = [
    {
      id: "ai-erp",
      icon: Database,
      title: "AI-Native ERP",
      description:
        "Purpose-built for fund operations, from fund formation to final distribution",
      bullets: [
        "Automated fund accounting with real-time reconciliation",
        "Deal pipeline management with intelligent workflow routing",
        "LP capital call and distribution automation with audit trails",
      ],
      gradient: "from-[#5562FF] to-[#4F46E5]",
    },
    {
      id: "compliance",
      icon: Shield,
      title: "Operations & Compliance",
      description:
        "Stay audit-ready with built-in compliance and regulatory workflows",
      bullets: [
        "Automated KYC/AML checks with continuous monitoring",
        "Digital LP portal with secure document vault and e-signatures",
        "Compliance calendar with automated deadline tracking and alerts",
      ],
      gradient: "from-[#7C3AED] to-[#6366F1]",
    },
    {
      id: "analytics",
      icon: BarChart3,
      title: "Analytics & Copilot",
      description:
        "AI-powered insights that help you make better investment decisions faster",
      bullets: [
        "Portfolio analytics with predictive performance modeling",
        "Natural language queries: 'Show me all SaaS deals over $10M'",
        "Automated LP reporting with customizable templates and branding",
      ],
      gradient: "from-[#5562FF] to-[#7C3AED]",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 px-6 lg:px-8 bg-gradient-to-b from-[#0B1220] to-[#0F172A]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Three Pillars of Modern Fund Operations
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
            Everything you need to run a world-class fund operation, unified in
            one intelligent platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group bg-[#0F172A] border border-white/5 rounded-2xl p-8 hover:border-[#5562FF]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#5562FF]/10 hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#94A3B8] mb-6">{feature.description}</p>

                <ul className="space-y-3 mb-6">
                  {feature.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-[#94A3B8]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5562FF] mt-2 flex-shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`#${feature.id}`}
                  className="inline-flex items-center text-[#5562FF] hover:text-[#7C3AED] font-medium transition-colors group/link"
                >
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
