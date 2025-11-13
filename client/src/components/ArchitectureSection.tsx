import React from "react";
import { Brain, Database, FileText, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import archDiagram from "@assets/generated_images/Architecture_diagram_9c35bc1c.png";

export default function ArchitectureSection() {
  const layers = [
    {
      number: "1",
      icon: Brain,
      title: "AI-Native ERP Core",
      description:
        "Purpose-built for fund operations with intelligent automation.",
    },
    {
      number: "2",
      icon: Database,
      title: "Vector DB + SQL",
      description:
        "Hybrid architecture for semantic search and structured data.",
    },
    {
      number: "3",
      icon: FileText,
      title: "Document Intelligence",
      description:
        "Extract, parse, and understand fund documents automatically.",
    },
    {
      number: "4",
      icon: Zap,
      title: "Real-Time Sync",
      description:
        "Live data pipelines with bank-grade security and encryption.",
    },
  ];

  const technologies = [
    "PostgreSQL",
    "Vector DB",
    "Pinecone",
    "OpenAI GPT-4",
    "Claude",
    "LangChain",
    "Python",
    "React",
    "TypeScript",
  ];

  return (
    <section
      id="architecture"
      className="px-6 py-24 lg:px-8 bg-slate-50 text-foreground"
      data-testid="section-architecture"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
            Built on Modern Architecture
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Georgi’s technical foundation combines cutting-edge AI with
            battle-tested database technologies to deliver unmatched performance
            and intelligence.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {layers.map((layer, idx) => {
            const Icon = layer.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500 text-white flex items-center justify-center mb-4 font-semibold">
                  {layer.number}
                </div>

                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-orange-600" />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">
                  {layer.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {layer.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-3 justify-center">
          {technologies.map((tech, idx) => (
            <Badge
              key={idx}
              variant="secondary"
              className="px-4 py-2 text-sm"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
