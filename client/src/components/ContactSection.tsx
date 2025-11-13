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
import { motion } from "framer-motion";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [firmName, setFirmName] = useState("");
  const [aumRange, setAumRange] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    <section
      id="contact"
      className="px-6 py-24 relative overflow-hidden"
      data-testid="section-contact"
    >
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmNiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Ready to{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Get Started?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Book a personalized demo and see Georgi in action.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Card
            className="shadow-xl border border-slate-200 rounded-2xl"
            data-testid="card-contact-form"
          >
            <CardContent className="p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-900">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@firm.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 text-slate-600"
                    data-testid="input-email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="firmName" className="text-slate-900">
                    Firm Name
                  </Label>
                  <Input
                    id="firmName"
                    placeholder="Your Firm"
                    value={firmName}
                    onChange={(e) => setFirmName(e.target.value)}
                    required
                    className="h-12 text-slate-600"
                    data-testid="input-firm-name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="aumRange" className="text-slate-900">
                    AUM Range
                  </Label>
                  <Select
                    value={aumRange}
                    onValueChange={setAumRange}
                    required
                  >
                    <SelectTrigger
                      id="aumRange"
                      className="h-12 text-slate-600"
                      data-testid="select-aum-range"
                    >
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
                  <Label htmlFor="message" className="text-slate-900">
                    Message (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your needs..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="min-h-32 text-slate-600 resize-none"
                    data-testid="input-message"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg"
                  disabled={isSubmitting}
                  data-testid="button-submit-demo"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Book a Demo
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
