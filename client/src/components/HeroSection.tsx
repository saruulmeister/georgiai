import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import dashboardImage from "attached_assets/generated_images/c5c55cb3-2024-421a-9bbb-3806e39f7203.png";


export default function HeroSection() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative px-6 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
      data-testid="section-hero"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-400/30 to-red-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-red-400/20 to-orange-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-4">
          {/* Keep badge + testid so existing tests/integrations don’t break */}
          <div className="flex justify-center">
            <Badge
              variant="secondary"
              className="w-fit flex items-center gap-1"
              data-testid="badge-ai-native"
            >
              <Sparkles className="w-3 h-3" />
              AI-Native Operating System
            </Badge>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-900 mb-2 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="block">AI native fund admin</span>
            <span className="block">and ERP for</span>
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Venture Capital
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-600 mb-10 max-w-3xl mx-auto text-lg"
          >
            Replace fragmented workflows and legacy tools with a unified, intelligent
            platform that automates fund administration, portfolio monitoring, and
            delivers real-time insights.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-xl group"
              data-testid="button-get-started"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-orange-500 text-orange-700 hover:bg-orange-50"
            >
              Watch Demo
            </Button>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl blur-2xl opacity-20" />
            <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-slate-950">
              <img
                src={dashboardImage}
                alt="Georgi AI Dashboard"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
