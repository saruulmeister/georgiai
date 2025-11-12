import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [firmName, setFirmName] = useState("");
  const [aumRange, setAumRange] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Demo request:", { email, firmName, aumRange, message });

    toast({
      title: "Demo request received!",
      description: "We'll be in touch within 24 hours.",
    });

    setEmail("");
    setFirmName("");
    setAumRange("");
    setMessage("");
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-6" data-testid="section-contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          Ready to{" "}
          <span className="bg-gradient-to-r from-orange-500 to-amber-700 bg-clip-text text-transparent">
            Get Started?
          </span>
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          Book a personalized demo and see Georgi in action.
        </p>

        <Card className="shadow-lg border border-border" data-testid="card-contact-form">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2 text-left">
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

              <div className="space-y-2 text-left">
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

              <div className="space-y-2 text-left">
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

              <div className="space-y-2 text-left">
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
                className="w-full bg-gradient-to-r from-orange-500 to-amber-700 hover:opacity-90 transition-opacity"
                disabled={isSubmitting}
                data-testid="button-submit-demo"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Book a Demo
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
