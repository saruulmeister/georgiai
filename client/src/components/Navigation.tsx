import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
          Georgi
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("product")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-product"
          >
            Product
          </button>
          <button
            onClick={() => scrollToSection("problem")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-problem"
          >
            Problem
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-features"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("why-georgi")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-why-georgi"
          >
            Why Georgi
          </button>
          <button
            onClick={() => scrollToSection("architecture")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-architecture"
          >
            Architecture
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-contact"
          >
            Contact
          </button>
        </div>

        <Button
          onClick={() => scrollToSection("contact")}
          className="bg-gradient-to-r from-primary to-orange-500 hover:opacity-90 transition-opacity"
          data-testid="button-book-demo"
        >
          Book a Demo
        </Button>
      </div>
    </nav>
  );
}
