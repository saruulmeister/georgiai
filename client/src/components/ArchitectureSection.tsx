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
        "Purpose-built for fund operations with intelligent automation",
      gradient: "from-[#5562FF] to-[#7C3AED]",
    },
    {
      icon: Database,
      title: "Vector DB + SQL",
      description:
        "Hybrid architecture for semantic search and structured data",
      gradient: "from-[#7C3AED] to-[#6366F1]",
    },
    {
      icon: FileText,
      title: "Document Intelligence",
      description:
        "Extract, parse, and understand fund documents automatically",
      gradient: "from-[#6366F1] to-[#5562FF]",
    },
    {
      icon: Zap,
      title: "Real-Time Sync",
      description:
        "Live data pipelines with bank-grade security and encryption",
      gradient: "from-[#5562FF] to-[#7C3AED]",
    },
  ];

  return (
    <section id="architecture" className="py-20 px-6 lg:px-8 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Built on Modern Architecture
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
            Georgi's technical foundation combines cutting-edge AI with
            battle-tested database technologies to deliver unprecedented
            performance and intelligence.
          </p>
        </div>

        <div className="relative">
          {/* Connection lines */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#5562FF]/30 to-transparent -translate-y-1/2 hidden lg:block"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {layers.map((layer, idx) => {
              const Icon = layer.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#0F172A] border border-white/5 rounded-2xl p-6 hover:border-[#5562FF]/50 transition-all hover:shadow-xl hover:shadow-[#5562FF]/10 hover:-translate-y-2 group relative"
                >
                  {/* Number badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-[#5562FF] to-[#7C3AED] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {idx + 1}
                  </div>

                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${layer.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {layer.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8]">{layer.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech stack badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            "PostgreSQL",
            "Pinecone",
            "OpenAI GPT-4",
            "LangChain",
            "Python",
            "React",
            "TypeScript",
          ].map((tech, idx) => (
            <div
              key={idx}
              className="px-4 py-2 bg-[#0F172A] border border-white/5 rounded-lg text-sm text-[#94A3B8] hover:border-[#5562FF]/30 transition-colors"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
