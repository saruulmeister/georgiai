import { Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6" data-testid="footer">
      <div className="max-w-7xl mx-auto">
        {/* 2 columns on md+, single column on mobile */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
          {/* Brand / tagline */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent mb-3">
              Georgi
            </div>
            <p className="text-sm text-muted-foreground">
              AI-Native OS for VC/PE
            </p>
          </div>

          {/* Socials */}
          <div className="md:justify-self-end">
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
                data-testid="link-footer-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter/X"
                data-testid="link-footer-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Georgi AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
