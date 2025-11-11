import { Card, CardContent } from '@/components/ui/card';
import archDiagram from '@assets/generated_images/Architecture_diagram_9c35bc1c.png';

export default function ArchitectureSection() {
  const components = [
    { name: 'AI-Native ERP', description: 'Core data management layer' },
    { name: 'Vector Database', description: 'Semantic search & retrieval' },
    { name: 'SQL Database', description: 'Structured data storage' },
    { name: 'Document Parser', description: 'Automated extraction' },
  ];

  return (
    <section className="py-20 px-6 bg-card/30" data-testid="section-architecture">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Built on{' '}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Modern Architecture
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Enterprise-grade infrastructure designed for scale
          </p>
        </div>

        <Card data-testid="card-architecture">
          <CardContent className="p-8">
            <div className="mb-8">
              <img
                src={archDiagram}
                alt="Architecture Diagram"
                className="w-full rounded-lg"
                data-testid="img-architecture"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {components.map((comp, index) => (
                <div key={index} className="space-y-1" data-testid={`arch-component-${index}`}>
                  <h4 className="font-semibold text-foreground">{comp.name}</h4>
                  <p className="text-sm text-muted-foreground">{comp.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
