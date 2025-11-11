import { Card, CardContent } from '@/components/ui/card';

export default function SocialProofSection() {
  const stats = [
    { value: '$45B', label: 'Total Addressable Market' },
    { value: '2,500+', label: 'VC/PE Firms in US' },
    { value: '$2B+', label: 'AUM on Platform' },
  ];

  return (
    <section className="py-20 px-6 bg-card/30" data-testid="section-social-proof">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Leading Firms</h2>
          <p className="text-muted-foreground">Join the future of investment management</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} data-testid={`stat-card-${index}`}>
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
