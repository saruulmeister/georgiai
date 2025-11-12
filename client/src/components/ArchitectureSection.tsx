import { Card, CardContent } from "@/components/ui/card";
import archDiagram from "@assets/generated_images/Architecture_diagram_9c35bc1c.png";
import React from "react";
import { Brain, Database, FileText, Zap } from "lucide-react";

export default function ArchitectureSection() {
  const layers = [
    {
      icon: Brain,
      title: "AI-Native ERP Core",
      description:
        "Purpose-built for fund operations with intelligent automation.",
      gradient: "from-orange-500 to-amber-600",
    },
    {
      icon: Database,
      title: "Vector DB + SQL",
      description:
        "Hybrid architecture for semantic search and structured data.",
      gradient: "from-amber-600 to-orange-500",
    },
    {
      icon: FileText,
      title: "Document Intelligence",
      description:
        "Extract, parse, and understand fund documents automatically.",
      gradient: "from-orange-500 to-amber-600",
    },
    {
      icon: Zap,
      title: "Real-Time Sync",
      description:
        "Live data pipelines with bank-grade security and encryption.",
      gradient: "from-amber-600 to-orange-500",
    },
  ];

  return (
    <section
      id="architecture"
      className="py-20 px-6 lg:px-8 bg-white text-foreground"
      data-testid="section-architecture"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Built on Modern Architecture
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Georgi’s technical foundation combines cutting-edge AI with
            battle-tested database technologies to deliver unmatched performance
            and intelligence.
          </p>
        </div>

        {/* Architecture layers */}
        <div className="relative">
          {/* Connection line (visible on desktop) */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-400/20 to-transparent -translate-y-1/2 hidden lg:block"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {layers.map((layer, idx) => {
              const Icon = layer.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-border rounded-2xl p-6 hover:border-orange-300 transition-all hover:shadow-lg hover:-translate-y-2 group relative"
                >
                  {/* Number badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {idx + 1}
                  </div>

                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${layer.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-white" />
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
        </div>

        {/* Tech stack badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            "PostgreSQL",
            "VectorDB",
            "Claude",
            "OpenAI GPT",
            "LangChain"
          ].map((tech, idx) => (
            <div
              key={idx}
              className="px-4 py-2 bg-muted border border-border rounded-lg text-sm text-muted-foreground hover:border-orange-400/40 hover:text-orange-600 transition-colors"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
