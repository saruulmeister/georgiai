import { Zap, Target, Lock, Brain } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: '10x faster portfolio reporting with AI-powered automation. Generate comprehensive reports in minutes, not days.',
      align: 'left' as const,
    },
    {
      icon: Target,
      title: '99.9% Accuracy',
      description: 'Our AI engine delivers unprecedented accuracy in data extraction and analysis, eliminating manual errors.',
      align: 'right' as const,
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption, SOC 2 Type II certified, with role-based access control and complete audit trails.',
      align: 'left' as const,
    },
    {
      icon: Brain,
      title: 'AI Copilot',
      description: 'Natural language interface to query your entire portfolio. Ask questions, get instant insights.',
      align: 'right' as const,
    },
  ];

  return (
    <section id="features" className="py-20 px-6" data-testid="section-features">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Powerful{' '}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Built for the demands of modern investment firms
          </p>
        </div>

        <div className="space-y-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`flex flex-col ${feature.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
                data-testid={`feature-${index}`}
              >
                <div className="flex-1 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">{feature.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="flex-1 h-64 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border flex items-center justify-center">
                  <Icon className="w-24 h-24 text-primary/20" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
