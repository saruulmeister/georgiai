import { Card, CardContent } from '@/components/ui/card';
import { Users, Building2, Target } from 'lucide-react';

export default function ICPSection() {
  return (
    <section id="why-georgi" className="py-20 px-6" data-testid="section-icp">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Built for{' '}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Investment Leaders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Purpose-built for the VC/PE ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover-elevate" data-testid="card-primary-buyers">
            <CardContent className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Primary Buyers</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• VC/PE firms ($50M-$5B AUM)</li>
                <li>• Growth equity funds</li>
                <li>• Family offices</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-secondary-buyers">
            <CardContent className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Secondary Buyers</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Accelerators & incubators</li>
                <li>• Corporate venture arms</li>
                <li>• Angel networks</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-decision-makers">
            <CardContent className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Decision Makers</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Managing Partners</li>
                <li>• COOs & CFOs</li>
                <li>• Portfolio Operations teams</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
