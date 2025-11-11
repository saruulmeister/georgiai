import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Mail, Send } from 'lucide-react';

export default function ContactSection() {
  const [email, setEmail] = useState('');
  const [firmName, setFirmName] = useState('');
  const [aumRange, setAumRange] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Demo request:', { email, firmName, aumRange, message });

    toast({
      title: 'Demo request received!',
      description: "We'll be in touch within 24 hours.",
    });

    setEmail('');
    setFirmName('');
    setAumRange('');
    setMessage('');
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-6" data-testid="section-contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Ready to{' '}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Get Started?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Book a personalized demo and see Georgi in action
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <Card className="lg:col-span-3" data-testid="card-contact-form">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@firm.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    data-testid="input-email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="firmName">Firm Name</Label>
                  <Input
                    id="firmName"
                    placeholder="Your Firm"
                    value={firmName}
                    onChange={(e) => setFirmName(e.target.value)}
                    required
                    data-testid="input-firm-name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="aumRange">AUM Range</Label>
                  <Select value={aumRange} onValueChange={setAumRange} required>
                    <SelectTrigger id="aumRange" data-testid="select-aum-range">
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-50m">Under $50M</SelectItem>
                      <SelectItem value="50m-250m">$50M - $250M</SelectItem>
                      <SelectItem value="250m-1b">$250M - $1B</SelectItem>
                      <SelectItem value="1b-5b">$1B - $5B</SelectItem>
                      <SelectItem value="over-5b">Over $5B</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your needs..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    data-testid="input-message"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 transition-opacity"
                  disabled={isSubmitting}
                  data-testid="button-submit-demo"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Book a Demo
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2" data-testid="card-contact-info">
            <CardContent className="p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                <p className="text-muted-foreground mb-6">
                  Have questions? Our team is here to help you transform your operations.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:tj@georgi.ai" className="text-sm text-primary hover:underline">
                      tj@georgi.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Send className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Schedule Direct</p>
                    <a
                      href="https://georgi.ai/demo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                      data-testid="link-schedule-demo"
                    >
                      georgi.ai/demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Response time:</strong> Within 24 hours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
